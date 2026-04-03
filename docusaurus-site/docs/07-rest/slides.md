---
title: REST API Основи
theme: white
highlightTheme: github
transition: slide
---

# REST API

### HTTP, JSON и уеб комуникация

Note:
Добре дошли в лекцията за REST API - основата на комуникацията между уеб приложения.

---

## Учебни Цели

🌐 Разбирате какво е API и REST архитектурата <!-- .element: class="fragment" -->

📖 Познавате HTTP методите: GET, POST, PUT, DELETE <!-- .element: class="fragment" -->

🔗 Разбирате URL структурата, headers и status кодове <!-- .element: class="fragment" -->

📄 Работите с JSON формат и Content-Type <!-- .element: class="fragment" -->

🔐 Разбирате основите на API автентикацията <!-- .element: class="fragment" -->

🔧 Тествате API с Postman, cURL, fetch и Python <!-- .element: class="fragment" -->

Note:
Тези умения са фундаментални за всеки уеб разработчик.

---

## Какво е API?

Note:
Преди REST, нека разберем самата концепция за API.

--

### API = Application Programming Interface

**Интерфейс**, чрез който две програми комуникират <!-- .element: class="fragment" -->

Аналогия: **сервитьор в ресторант** <!-- .element: class="fragment" -->

🧑 Клиент → 📋 Поръчка → 👨‍🍳 Кухня → 🍽️ Ястие <!-- .element: class="fragment" -->

🖥️ Client → 📨 Request → 🖧 Server → 📦 Response <!-- .element: class="fragment" -->

Note:
Клиентът не трябва да знае как работи кухнята. Той просто поръчва чрез сервитьора. API-то е сервитьорът.

--

### Видове API

🔹 **REST API** - HTTP базиран, най-разпространен <!-- .element: class="fragment" -->

🔹 **GraphQL** - клиентът избира какви данни да получи <!-- .element: class="fragment" -->

🔹 **WebSocket** - двупосочна, реално-времева комуникация <!-- .element: class="fragment" -->

🔹 **gRPC** - бърз, бинарен протокол (Google) <!-- .element: class="fragment" -->

Note:
Ние ще се фокусираме върху REST, защото е стандартът за уеб разработка.

---

## Защо REST API?

Note:
Нека разберем защо REST е толкова важен в съвременната уеб разработка.

--

### API са навсякъде

<svg viewBox="0 0 700 280" style="max-width: 650px; margin: 0 auto; display: block;">
  <defs>
    <linearGradient id="appGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#3b82f6"/><stop offset="100%" stop-color="#2563eb"/>
    </linearGradient>
    <linearGradient id="apiGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#10b981"/><stop offset="100%" stop-color="#059669"/>
    </linearGradient>
  </defs>

  <rect x="50" y="40" width="120" height="60" rx="8" fill="url(#appGrad1)"/>
  <text x="110" y="65" fill="white" font-family="system-ui" font-size="11" font-weight="600" text-anchor="middle">📱 Mobile App</text>
  <text x="110" y="85" fill="rgba(255,255,255,0.8)" font-family="system-ui" font-size="9" text-anchor="middle">iOS / Android</text>

  <rect x="50" y="120" width="120" height="60" rx="8" fill="url(#appGrad1)"/>
  <text x="110" y="145" fill="white" font-family="system-ui" font-size="11" font-weight="600" text-anchor="middle">💻 Web App</text>
  <text x="110" y="165" fill="rgba(255,255,255,0.8)" font-family="system-ui" font-size="9" text-anchor="middle">React / Vue</text>

  <rect x="50" y="200" width="120" height="60" rx="8" fill="url(#appGrad1)"/>
  <text x="110" y="225" fill="white" font-family="system-ui" font-size="11" font-weight="600" text-anchor="middle">🤖 IoT Device</text>
  <text x="110" y="245" fill="rgba(255,255,255,0.8)" font-family="system-ui" font-size="9" text-anchor="middle">Smart Home</text>

  <line x1="175" y1="70" x2="280" y2="150" stroke="#64748b" stroke-width="2"/>
  <line x1="175" y1="150" x2="280" y2="150" stroke="#64748b" stroke-width="2"/>
  <line x1="175" y1="230" x2="280" y2="150" stroke="#64748b" stroke-width="2"/>

  <rect x="285" y="100" width="130" height="100" rx="12" fill="url(#apiGrad)"/>
  <text x="350" y="135" fill="white" font-family="system-ui" font-size="16" font-weight="700" text-anchor="middle">REST API</text>
  <text x="350" y="160" fill="rgba(255,255,255,0.9)" font-family="system-ui" font-size="11" text-anchor="middle">HTTP + JSON</text>
  <text x="350" y="180" fill="rgba(255,255,255,0.7)" font-family="system-ui" font-size="9" text-anchor="middle">Стандартен интерфейс</text>

  <line x1="420" y1="150" x2="520" y2="90" stroke="#64748b" stroke-width="2"/>
  <line x1="420" y1="150" x2="520" y2="150" stroke="#64748b" stroke-width="2"/>
  <line x1="420" y1="150" x2="520" y2="210" stroke="#64748b" stroke-width="2"/>

  <rect x="525" y="50" width="120" height="60" rx="8" fill="#f1f5f9" stroke="#cbd5e1"/>
  <text x="585" y="75" fill="#475569" font-family="system-ui" font-size="11" font-weight="600" text-anchor="middle">🗄️ Database</text>
  <text x="585" y="95" fill="#94a3b8" font-family="system-ui" font-size="9" text-anchor="middle">PostgreSQL</text>

  <rect x="525" y="120" width="120" height="60" rx="8" fill="#f1f5f9" stroke="#cbd5e1"/>
  <text x="585" y="145" fill="#475569" font-family="system-ui" font-size="11" font-weight="600" text-anchor="middle">☁️ Cloud</text>
  <text x="585" y="165" fill="#94a3b8" font-family="system-ui" font-size="9" text-anchor="middle">AWS / Azure</text>

  <rect x="525" y="190" width="120" height="60" rx="8" fill="#f1f5f9" stroke="#cbd5e1"/>
  <text x="585" y="215" fill="#475569" font-family="system-ui" font-size="11" font-weight="600" text-anchor="middle">🔐 Auth</text>
  <text x="585" y="235" fill="#94a3b8" font-family="system-ui" font-size="9" text-anchor="middle">OAuth / JWT</text>
</svg>

Note:
REST API е универсален език, който позволява на различни системи да комуникират.

--

### Какво е REST?

**RE**presentational **S**tate **T**ransfer

Архитектурен **стил**, не протокол <!-- .element: class="fragment" -->

Note:
REST е набор от принципи, не конкретна технология.

--

### REST Принципи

🔹 **Stateless** - всяка заявка съдържа цялата нужна информация <!-- .element: class="fragment" -->

🔹 **Client-Server** - ясно разделение на отговорности <!-- .element: class="fragment" -->

🔹 **Uniform Interface** - стандартни HTTP методи и URL-и <!-- .element: class="fragment" -->

🔹 **Cacheable** - отговорите могат да се кешират <!-- .element: class="fragment" -->

🔹 **Resource-Based** - всичко е ресурс с уникален URL <!-- .element: class="fragment" -->

Note:
Stateless означава, че сървърът не помни предишни заявки. Всяка заявка е самостоятелна.

--

### Ресурси и URL-и

В REST всичко е **ресурс** с уникален адрес:

```
/api/users          → колекция от потребители
/api/users/123      → конкретен потребител
/api/users/123/posts → постове на потребител 123
```

Note:
URL-ът идентифицира ресурса, а HTTP методът определя операцията.

---

## URL Структура

Note:
Нека разберем анатомията на един URL.

--

### Анатомия на URL

```
https://api.example.com:443/api/users?role=admin&page=2#results
└─┬──┘  └──────┬───────┘└┬┘└───┬───┘└────────┬────────┘└──┬───┘
scheme       host       port  path      query string    fragment
```

🔹 **Scheme** - протокол (http / https) <!-- .element: class="fragment" -->

🔹 **Host** - адрес на сървъра <!-- .element: class="fragment" -->

🔹 **Path** - път до ресурса <!-- .element: class="fragment" -->

🔹 **Query String** - параметри за филтриране <!-- .element: class="fragment" -->

Note:
При REST API най-важни са path (идентифицира ресурса) и query string (филтриране).

--

### Path vs Query параметри

**Path параметри** - идентифицират ресурс:
```
GET /api/users/123        → потребител с ID 123
GET /api/products/456     → продукт с ID 456
```

**Query параметри** - филтриране, сортиране, пагинация:
```
GET /api/users?role=admin&sort=name&limit=10
GET /api/products?category=books&page=2
```

Note:
Path = кой ресурс, Query = как да го филтрираме.

---

## HTTP Основи

Note:
HTTP е протоколът, върху който работи REST.

--

### Request-Response Cycle

<svg viewBox="0 0 700 250" style="max-width: 650px; margin: 0 auto; display: block;">
  <defs>
    <linearGradient id="clientG" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#3b82f6"/><stop offset="100%" stop-color="#2563eb"/>
    </linearGradient>
    <linearGradient id="serverG" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#10b981"/><stop offset="100%" stop-color="#059669"/>
    </linearGradient>
    <marker id="reqArrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#8b5cf6"/>
    </marker>
    <marker id="resArrow" markerWidth="10" markerHeight="7" refX="1" refY="3.5" orient="auto">
      <polygon points="10 0, 0 3.5, 10 7" fill="#f59e0b"/>
    </marker>
  </defs>

  <rect x="50" y="60" width="180" height="130" rx="12" fill="url(#clientG)"/>
  <text x="140" y="95" fill="white" font-family="system-ui" font-size="16" font-weight="700" text-anchor="middle">CLIENT</text>
  <text x="140" y="120" fill="rgba(255,255,255,0.8)" font-family="system-ui" font-size="11" text-anchor="middle">Browser</text>
  <text x="140" y="140" fill="rgba(255,255,255,0.8)" font-family="system-ui" font-size="11" text-anchor="middle">Postman</text>
  <text x="140" y="160" fill="rgba(255,255,255,0.8)" font-family="system-ui" font-size="11" text-anchor="middle">Python script</text>

  <rect x="470" y="60" width="180" height="130" rx="12" fill="url(#serverG)"/>
  <text x="560" y="95" fill="white" font-family="system-ui" font-size="16" font-weight="700" text-anchor="middle">SERVER</text>
  <text x="560" y="120" fill="rgba(255,255,255,0.8)" font-family="system-ui" font-size="11" text-anchor="middle">REST API</text>
  <text x="560" y="140" fill="rgba(255,255,255,0.8)" font-family="system-ui" font-size="11" text-anchor="middle">Business Logic</text>
  <text x="560" y="160" fill="rgba(255,255,255,0.8)" font-family="system-ui" font-size="11" text-anchor="middle">Database</text>

  <line x1="235" y1="100" x2="465" y2="100" stroke="#8b5cf6" stroke-width="3" marker-end="url(#reqArrow)"/>
  <rect x="290" y="80" width="120" height="35" rx="6" fill="#8b5cf6"/>
  <text x="350" y="95" fill="white" font-family="system-ui" font-size="10" font-weight="600" text-anchor="middle">HTTP REQUEST</text>
  <text x="350" y="108" fill="rgba(255,255,255,0.8)" font-family="monospace" font-size="8" text-anchor="middle">GET /api/users</text>

  <line x1="465" y1="150" x2="235" y2="150" stroke="#f59e0b" stroke-width="3" marker-end="url(#resArrow)"/>
  <rect x="290" y="135" width="120" height="35" rx="6" fill="#f59e0b"/>
  <text x="350" y="150" fill="white" font-family="system-ui" font-size="10" font-weight="600" text-anchor="middle">HTTP RESPONSE</text>
  <text x="350" y="163" fill="rgba(255,255,255,0.8)" font-family="monospace" font-size="8" text-anchor="middle">200 OK + JSON</text>

  <text x="350" y="220" fill="#64748b" font-family="system-ui" font-size="11" text-anchor="middle">Клиентът изпраща заявка → Сървърът връща отговор</text>
</svg>

Note:
Всяка API комуникация следва този прост модел.

--

### Структура на HTTP Request

```
POST /api/users HTTP/1.1          ← Request Line
Host: api.example.com             ← Headers
Content-Type: application/json
Authorization: Bearer token123

{                                  ← Body (за POST/PUT)
  "name": "Ivan",
  "email": "ivan@example.com"
}
```

🔹 **Request Line** - метод + URL + версия <!-- .element: class="fragment" -->

🔹 **Headers** - метаданни за заявката <!-- .element: class="fragment" -->

🔹 **Body** - данни (само за POST, PUT, PATCH) <!-- .element: class="fragment" -->

Note:
GET заявките нямат body. POST и PUT заявките изпращат данни в body-то.

--

### Структура на HTTP Response

```
HTTP/1.1 201 Created              ← Status Line
Content-Type: application/json    ← Headers
Date: Mon, 01 Apr 2026 10:00:00

{                                  ← Body
  "id": 42,
  "name": "Ivan",
  "email": "ivan@example.com"
}
```

🔹 **Status Line** - версия + статус код + съобщение <!-- .element: class="fragment" -->

🔹 **Headers** - метаданни за отговора <!-- .element: class="fragment" -->

🔹 **Body** - данните (обикновено JSON) <!-- .element: class="fragment" -->

Note:
Статус кодът е най-важната част - веднага казва дали заявката е успяла.

--

### HTTP Methods → CRUD

<svg viewBox="0 0 700 180" style="max-width: 650px; margin: 0 auto; display: block;">
  <defs>
    <linearGradient id="createG" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#10b981"/><stop offset="100%" stop-color="#059669"/>
    </linearGradient>
    <linearGradient id="readG" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#3b82f6"/><stop offset="100%" stop-color="#2563eb"/>
    </linearGradient>
    <linearGradient id="updateG" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b"/><stop offset="100%" stop-color="#d97706"/>
    </linearGradient>
    <linearGradient id="deleteG" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ef4444"/><stop offset="100%" stop-color="#dc2626"/>
    </linearGradient>
  </defs>

  <rect x="30" y="40" width="145" height="100" rx="10" fill="url(#createG)"/>
  <text x="102" y="75" fill="white" font-family="system-ui" font-size="24" text-anchor="middle">➕</text>
  <text x="102" y="100" fill="white" font-family="system-ui" font-size="14" font-weight="700" text-anchor="middle">POST</text>
  <text x="102" y="120" fill="rgba(255,255,255,0.8)" font-family="system-ui" font-size="11" text-anchor="middle">Create</text>

  <rect x="195" y="40" width="145" height="100" rx="10" fill="url(#readG)"/>
  <text x="267" y="75" fill="white" font-family="system-ui" font-size="24" text-anchor="middle">📖</text>
  <text x="267" y="100" fill="white" font-family="system-ui" font-size="14" font-weight="700" text-anchor="middle">GET</text>
  <text x="267" y="120" fill="rgba(255,255,255,0.8)" font-family="system-ui" font-size="11" text-anchor="middle">Read</text>

  <rect x="360" y="40" width="145" height="100" rx="10" fill="url(#updateG)"/>
  <text x="432" y="75" fill="white" font-family="system-ui" font-size="24" text-anchor="middle">✏️</text>
  <text x="432" y="100" fill="white" font-family="system-ui" font-size="14" font-weight="700" text-anchor="middle">PUT</text>
  <text x="432" y="120" fill="rgba(255,255,255,0.8)" font-family="system-ui" font-size="11" text-anchor="middle">Update</text>

  <rect x="525" y="40" width="145" height="100" rx="10" fill="url(#deleteG)"/>
  <text x="597" y="75" fill="white" font-family="system-ui" font-size="24" text-anchor="middle">🗑️</text>
  <text x="597" y="100" fill="white" font-family="system-ui" font-size="14" font-weight="700" text-anchor="middle">DELETE</text>
  <text x="597" y="120" fill="rgba(255,255,255,0.8)" font-family="system-ui" font-size="11" text-anchor="middle">Delete</text>

  <text x="350" y="165" fill="#64748b" font-family="system-ui" font-size="11" text-anchor="middle">Днес фокус: GET и POST</text>
</svg>

Note:
Всеки HTTP метод съответства на CRUD операция. Днес се фокусираме върху GET и POST.

---

## HTTP Status Codes

Note:
Как разбираме резултата от заявката.

--

### Категории кодове

<svg viewBox="0 0 700 280" style="max-width: 650px; margin: 0 auto; display: block;">
  <defs>
    <linearGradient id="s2xx" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#10b981"/><stop offset="100%" stop-color="#059669"/>
    </linearGradient>
    <linearGradient id="s4xx" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b"/><stop offset="100%" stop-color="#d97706"/>
    </linearGradient>
    <linearGradient id="s5xx" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ef4444"/><stop offset="100%" stop-color="#dc2626"/>
    </linearGradient>
  </defs>

  <rect x="50" y="30" width="180" height="220" rx="10" fill="white" stroke="#10b981" stroke-width="2"/>
  <rect x="50" y="30" width="180" height="40" rx="10" fill="url(#s2xx)"/>
  <text x="140" y="57" fill="white" font-family="system-ui" font-size="14" font-weight="700" text-anchor="middle">✅ 2xx Success</text>

  <text x="140" y="95" fill="#10b981" font-family="monospace" font-size="14" font-weight="700" text-anchor="middle">200 OK</text>
  <text x="140" y="115" fill="#64748b" font-family="system-ui" font-size="10" text-anchor="middle">Успешна GET заявка</text>

  <text x="140" y="150" fill="#10b981" font-family="monospace" font-size="14" font-weight="700" text-anchor="middle">201 Created</text>
  <text x="140" y="170" fill="#64748b" font-family="system-ui" font-size="10" text-anchor="middle">Успешен POST</text>

  <text x="140" y="205" fill="#10b981" font-family="monospace" font-size="14" font-weight="700" text-anchor="middle">204 No Content</text>
  <text x="140" y="225" fill="#64748b" font-family="system-ui" font-size="10" text-anchor="middle">Успешен DELETE</text>

  <rect x="260" y="30" width="180" height="220" rx="10" fill="white" stroke="#f59e0b" stroke-width="2"/>
  <rect x="260" y="30" width="180" height="40" rx="10" fill="url(#s4xx)"/>
  <text x="350" y="57" fill="white" font-family="system-ui" font-size="14" font-weight="700" text-anchor="middle">⚠️ 4xx Client Error</text>

  <text x="350" y="95" fill="#f59e0b" font-family="monospace" font-size="14" font-weight="700" text-anchor="middle">400 Bad Request</text>
  <text x="350" y="115" fill="#64748b" font-family="system-ui" font-size="10" text-anchor="middle">Невалиден JSON</text>

  <text x="350" y="150" fill="#f59e0b" font-family="monospace" font-size="14" font-weight="700" text-anchor="middle">401 Unauthorized</text>
  <text x="350" y="170" fill="#64748b" font-family="system-ui" font-size="10" text-anchor="middle">Нужна автентикация</text>

  <text x="350" y="205" fill="#f59e0b" font-family="monospace" font-size="14" font-weight="700" text-anchor="middle">404 Not Found</text>
  <text x="350" y="225" fill="#64748b" font-family="system-ui" font-size="10" text-anchor="middle">Ресурсът не съществува</text>

  <rect x="470" y="30" width="180" height="150" rx="10" fill="white" stroke="#ef4444" stroke-width="2"/>
  <rect x="470" y="30" width="180" height="40" rx="10" fill="url(#s5xx)"/>
  <text x="560" y="57" fill="white" font-family="system-ui" font-size="14" font-weight="700" text-anchor="middle">❌ 5xx Server Error</text>

  <text x="560" y="95" fill="#ef4444" font-family="monospace" font-size="14" font-weight="700" text-anchor="middle">500 Internal</text>
  <text x="560" y="115" fill="#64748b" font-family="system-ui" font-size="10" text-anchor="middle">Сървърна грешка</text>

  <text x="560" y="150" fill="#ef4444" font-family="monospace" font-size="14" font-weight="700" text-anchor="middle">503 Unavailable</text>
  <text x="560" y="170" fill="#64748b" font-family="system-ui" font-size="10" text-anchor="middle">Сървърът е недостъпен</text>
</svg>

Note:
2xx = успех, 4xx = вашата грешка, 5xx = сървърна грешка.

--

### Най-важните кодове

| Код | Значение | Кога? |
|-----|----------|-------|
| **200** | OK | Успешен GET |
| **201** | Created | Успешен POST |
| **204** | No Content | Успешен DELETE |
| **400** | Bad Request | Невалидни данни |
| **401** | Unauthorized | Липсва автентикация |
| **403** | Forbidden | Нямате достъп |
| **404** | Not Found | Ресурсът не съществува |
| **500** | Internal Error | Бъг в сървъра |

Note:
Запомнете тези кодове - ще ги виждате ежедневно.

---

## JSON Format

Note:
Стандартният формат за данни в REST API.

--

### JSON Структура

```json
{
  "name": "Иван Петров",
  "age": 28,
  "isActive": true,
  "skills": ["JavaScript", "Python"],
  "address": {
    "city": "Sofia"
  }
}
```

🔹 **Strings** - в двойни кавички <!-- .element: class="fragment" -->

🔹 **Numbers** - без кавички <!-- .element: class="fragment" -->

🔹 **Booleans** - `true` / `false` <!-- .element: class="fragment" -->

🔹 **Arrays** - `[ ]` <!-- .element: class="fragment" -->

🔹 **Objects** - `{ }` <!-- .element: class="fragment" -->

Note:
JSON е лек, четим и поддържан от всички езици.

--

### JSON Правила

✅ Ключовете са **винаги** в двойни кавички <!-- .element: class="fragment" -->

✅ Стрингове - само **двойни** кавички (не единични) <!-- .element: class="fragment" -->

❌ Не се допускат trailing запетаи <!-- .element: class="fragment" -->

❌ Не се допускат коментари <!-- .element: class="fragment" -->

Note:
Тези правила са различни от JavaScript обектите - JSON е по-строг.

--

### Невалиден vs Валиден JSON

```json
// ❌ НЕВАЛИДЕН
{
  name: "Ivan",           // ключ без кавички
  'age': 25,              // единични кавички
  "active": true,         // trailing запетая
}

// ✅ ВАЛИДЕН
{
  "name": "Ivan",
  "age": 25,
  "active": true
}
```

⚠️ Невалиден JSON = **400 Bad Request** <!-- .element: class="fragment" -->

Note:
Използвайте JSON валидатор (jsonlint.com) ако не сте сигурни.

---

## GET Заявки

Note:
Методът за извличане на данни.

--

### GET = Read Data

<svg viewBox="0 0 600 200" style="max-width: 550px; margin: 0 auto; display: block;">
  <defs>
    <linearGradient id="getGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#3b82f6"/><stop offset="100%" stop-color="#2563eb"/>
    </linearGradient>
  </defs>

  <rect x="50" y="30" width="500" height="140" rx="12" fill="url(#getGrad)"/>

  <text x="300" y="65" fill="white" font-family="system-ui" font-size="20" font-weight="700" text-anchor="middle">📖 GET Request</text>

  <text x="300" y="100" fill="rgba(255,255,255,0.9)" font-family="monospace" font-size="14" text-anchor="middle">GET /api/users/123</text>

  <text x="150" y="140" fill="rgba(255,255,255,0.8)" font-family="system-ui" font-size="11" text-anchor="middle">✓ Извлича данни</text>
  <text x="300" y="140" fill="rgba(255,255,255,0.8)" font-family="system-ui" font-size="11" text-anchor="middle">✓ Идемпотентен</text>
  <text x="450" y="140" fill="rgba(255,255,255,0.8)" font-family="system-ui" font-size="11" text-anchor="middle">✓ Кешируем</text>
</svg>

**Идемпотентен** = безопасен за повторение

Note:
GET никога не променя данни на сървъра - само чете.

--

### URL Parameters

```
GET /api/users/123
         └── Path параметър (ID)

GET /api/products?category=books&sort=price&limit=10
                  └── Query параметри (филтриране)
```

🔹 **Path** - идентифицира ресурс <!-- .element: class="fragment" -->

🔹 **Query** - филтриране, сортиране, пагинация <!-- .element: class="fragment" -->

Note:
Path параметрите са част от URL пътя, query параметрите са след въпросителния знак.

--

### GET с Python

```python
import requests

# Проста GET заявка
response = requests.get(
    'https://jsonplaceholder.typicode.com/users'
)

print(response.status_code)  # 200
users = response.json()      # Parse JSON

# GET с query параметри
response = requests.get(
    'https://jsonplaceholder.typicode.com/users',
    params={'username': 'Bret'}
)
```

Note:
requests библиотеката е стандарт за HTTP в Python.

--

### GET с JavaScript (fetch)

```javascript
// Проста GET заявка
const response = await fetch(
  'https://jsonplaceholder.typicode.com/users'
);
const users = await response.json();
console.log(users);

// GET с query параметри
const params = new URLSearchParams({
  username: 'Bret'
});
const res = await fetch(
  `https://jsonplaceholder.typicode.com/users?${params}`
);
```

Note:
fetch е вграден в браузъра - не е нужна допълнителна библиотека.

--

### GET с cURL

```bash
# Проста GET заявка
curl https://jsonplaceholder.typicode.com/users

# С query параметри
curl "https://jsonplaceholder.typicode.com/users?username=Bret"

# С допълнителни headers
curl -H "Accept: application/json" \
     https://jsonplaceholder.typicode.com/users/1
```

Note:
cURL е полезен за бързи тестове от терминала.

---

## POST Заявки

Note:
Методът за създаване на данни.

--

### POST = Create Data

<svg viewBox="0 0 600 200" style="max-width: 550px; margin: 0 auto; display: block;">
  <defs>
    <linearGradient id="postGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#10b981"/><stop offset="100%" stop-color="#059669"/>
    </linearGradient>
  </defs>

  <rect x="50" y="30" width="500" height="140" rx="12" fill="url(#postGrad)"/>

  <text x="300" y="65" fill="white" font-family="system-ui" font-size="20" font-weight="700" text-anchor="middle">➕ POST Request</text>

  <text x="300" y="100" fill="rgba(255,255,255,0.9)" font-family="monospace" font-size="14" text-anchor="middle">POST /api/users + JSON body</text>

  <text x="150" y="140" fill="rgba(255,255,255,0.8)" font-family="system-ui" font-size="11" text-anchor="middle">✓ Създава ресурси</text>
  <text x="300" y="140" fill="rgba(255,255,255,0.8)" font-family="system-ui" font-size="11" text-anchor="middle">✗ НЕ идемпотентен</text>
  <text x="450" y="140" fill="rgba(255,255,255,0.8)" font-family="system-ui" font-size="11" text-anchor="middle">✗ НЕ кешируем</text>
</svg>

⚠️ Повторна заявка = дубликати!

Note:
POST променя състоянието на сървъра - внимавайте с повторения.

--

### POST Request Body

```python
import requests

url = "https://jsonplaceholder.typicode.com/posts"

# JSON данни за изпращане
data = {
    "title": "My Post",
    "body": "Content here...",
    "userId": 1
}

# ВАЖНО: Content-Type header!
response = requests.post(
    url,
    json=data,
    headers={"Content-Type": "application/json"}
)

print(response.status_code)  # 201 Created
```

Note:
Content-Type header е задължителен за да знае сървърът формата на данните.

--

### Content-Type Header

```
POST /api/users HTTP/1.1
Host: api.example.com
Content-Type: application/json    ← Задължително!

{"name": "Ivan", "email": "ivan@example.com"}
```

⚠️ **Без Content-Type = 400 Bad Request**

Note:
Най-честата грешка при POST заявки е липсващ Content-Type header.

--

### POST с JavaScript (fetch)

```javascript
const response = await fetch(
  'https://jsonplaceholder.typicode.com/posts',
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: 'My Post',
      body: 'Content here...',
      userId: 1
    })
  }
);

const created = await response.json();
console.log(created.id); // Новият ID
```

Note:
Забележете: fetch изисква ръчно JSON.stringify, за разлика от Python requests.

--

### POST с cURL

```bash
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"title":"My Post","body":"Content","userId":1}' \
  https://jsonplaceholder.typicode.com/posts
```

🔹 `-X POST` - задава HTTP метода <!-- .element: class="fragment" -->

🔹 `-H` - добавя header <!-- .element: class="fragment" -->

🔹 `-d` - изпраща data (body) <!-- .element: class="fragment" -->

Note:
cURL е идеален за бързо тестване от терминала.

---

## GET vs POST

Note:
Нека сравним двата метода.

--

### Comparison Table

<svg viewBox="0 0 700 320" style="max-width: 650px; margin: 0 auto; display: block;">
  <defs>
    <linearGradient id="getH" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#3b82f6"/><stop offset="100%" stop-color="#2563eb"/>
    </linearGradient>
    <linearGradient id="postH" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#10b981"/><stop offset="100%" stop-color="#059669"/>
    </linearGradient>
  </defs>

  <rect x="30" y="30" width="300" height="260" rx="10" fill="white" stroke="#3b82f6" stroke-width="2"/>
  <rect x="30" y="30" width="300" height="45" rx="10" fill="url(#getH)"/>
  <text x="180" y="60" fill="white" font-family="system-ui" font-size="16" font-weight="700" text-anchor="middle">📖 GET</text>

  <text x="50" y="100" fill="#1e293b" font-family="system-ui" font-size="12" font-weight="600">Цел:</text>
  <text x="130" y="100" fill="#64748b" font-family="system-ui" font-size="12">Извличане на данни</text>

  <text x="50" y="130" fill="#1e293b" font-family="system-ui" font-size="12" font-weight="600">Идемпотентен:</text>
  <text x="160" y="130" fill="#10b981" font-family="system-ui" font-size="12" font-weight="600">✓ Да</text>

  <text x="50" y="160" fill="#1e293b" font-family="system-ui" font-size="12" font-weight="600">Данни:</text>
  <text x="130" y="160" fill="#64748b" font-family="system-ui" font-size="12">В URL</text>

  <text x="50" y="190" fill="#1e293b" font-family="system-ui" font-size="12" font-weight="600">Body:</text>
  <text x="130" y="190" fill="#ef4444" font-family="system-ui" font-size="12">✗ Няма</text>

  <text x="50" y="220" fill="#1e293b" font-family="system-ui" font-size="12" font-weight="600">Кеширане:</text>
  <text x="140" y="220" fill="#10b981" font-family="system-ui" font-size="12" font-weight="600">✓ Да</text>

  <text x="50" y="250" fill="#1e293b" font-family="system-ui" font-size="12" font-weight="600">Видимост:</text>
  <text x="140" y="250" fill="#64748b" font-family="system-ui" font-size="12">Данни в URL</text>

  <rect x="370" y="30" width="300" height="260" rx="10" fill="white" stroke="#10b981" stroke-width="2"/>
  <rect x="370" y="30" width="300" height="45" rx="10" fill="url(#postH)"/>
  <text x="520" y="60" fill="white" font-family="system-ui" font-size="16" font-weight="700" text-anchor="middle">➕ POST</text>

  <text x="390" y="100" fill="#1e293b" font-family="system-ui" font-size="12" font-weight="600">Цел:</text>
  <text x="470" y="100" fill="#64748b" font-family="system-ui" font-size="12">Създаване на ресурси</text>

  <text x="390" y="130" fill="#1e293b" font-family="system-ui" font-size="12" font-weight="600">Идемпотентен:</text>
  <text x="500" y="130" fill="#ef4444" font-family="system-ui" font-size="12" font-weight="600">✗ Не</text>

  <text x="390" y="160" fill="#1e293b" font-family="system-ui" font-size="12" font-weight="600">Данни:</text>
  <text x="470" y="160" fill="#64748b" font-family="system-ui" font-size="12">В body (JSON)</text>

  <text x="390" y="190" fill="#1e293b" font-family="system-ui" font-size="12" font-weight="600">Body:</text>
  <text x="470" y="190" fill="#10b981" font-family="system-ui" font-size="12">✓ JSON данни</text>

  <text x="390" y="220" fill="#1e293b" font-family="system-ui" font-size="12" font-weight="600">Кеширане:</text>
  <text x="480" y="220" fill="#ef4444" font-family="system-ui" font-size="12" font-weight="600">✗ Не</text>

  <text x="390" y="250" fill="#1e293b" font-family="system-ui" font-size="12" font-weight="600">Видимост:</text>
  <text x="480" y="250" fill="#64748b" font-family="system-ui" font-size="12">Данни скрити</text>
</svg>

Note:
Изберете метода според операцията - четене vs създаване.

---

## PUT, PATCH, DELETE

Note:
Останалите CRUD операции.

--

### PUT = Пълно обновяване

```javascript
// Замества ЦЕЛИЯ ресурс
await fetch('https://api.example.com/users/123', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'Ivan Petrov',    // Всички полета!
    email: 'ivan@mail.com',
    age: 30
  })
});
```

⚠️ PUT изпраща **всички полета** - пропуснатите се изтриват!

Note:
PUT е като "замени целия обект". Ако пропуснете поле, то може да стане null.

--

### PATCH = Частично обновяване

```javascript
// Обновява САМО посочените полета
await fetch('https://api.example.com/users/123', {
  method: 'PATCH',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email: 'new-email@mail.com'  // Само това поле!
  })
});
```

✅ PATCH обновява **само изпратените полета**

Note:
PATCH е по-безопасен - останалите полета остават непроменени.

--

### PUT vs PATCH

| | PUT | PATCH |
|---|-----|-------|
| **Какво** | Цял ресурс | Частично |
| **Полета** | Всички задължителни | Само променените |
| **Идемпотентен** | ✅ Да | ❌ Не винаги |
| **Пример** | Замени профила | Промени email-а |

Note:
На практика много API-та използват PUT и PATCH взаимозаменяемо.

--

### DELETE = Изтриване

```javascript
// Изтриване на ресурс
const response = await fetch(
  'https://api.example.com/users/123',
  { method: 'DELETE' }
);

// Обикновено 204 No Content
console.log(response.status); // 204
```

🔹 Няма body в заявката <!-- .element: class="fragment" -->

🔹 Идемпотентен - повторното изтриване дава 404 <!-- .element: class="fragment" -->

🔹 Обикновено връща **204 No Content** <!-- .element: class="fragment" -->

Note:
DELETE е прост - изпращате заявка с ID-то на ресурса.

--

### Всички методи заедно

```
GET    /api/users       → Списък потребители
GET    /api/users/123   → Конкретен потребител
POST   /api/users       → Създай потребител
PUT    /api/users/123   → Замени потребител
PATCH  /api/users/123   → Обнови част от потребител
DELETE /api/users/123   → Изтрий потребител
```

Това е **пълният CRUD** цикъл! <!-- .element: class="fragment" -->

Note:
Забележете шаблона: колекцията е за списък/създаване, а с ID е за конкретен ресурс.

---

## HTTP Headers

Note:
Headers са метаданните на HTTP заявките и отговорите.

--

### Важни Request Headers

| Header | Цел | Пример |
|--------|-----|--------|
| **Content-Type** | Формат на body | `application/json` |
| **Accept** | Какъв формат искам | `application/json` |
| **Authorization** | Автентикация | `Bearer token123` |
| **User-Agent** | Кой е клиентът | `Mozilla/5.0...` |

Note:
Content-Type и Authorization са най-важните за REST API.

--

### Важни Response Headers

| Header | Цел | Пример |
|--------|-----|--------|
| **Content-Type** | Формат на отговора | `application/json` |
| **Cache-Control** | Кеширане | `max-age=3600` |
| **X-RateLimit-Remaining** | Оставащи заявки | `98` |
| **Access-Control-Allow-Origin** | CORS | `*` |

Note:
Response headers дават важна информация за отговора и ограниченията на API-то.

---

## Автентикация

Note:
Повечето API-та изискват автентикация.

--

### Защо автентикация?

🔹 **Идентификация** - кой прави заявката <!-- .element: class="fragment" -->

🔹 **Авторизация** - какво има право да прави <!-- .element: class="fragment" -->

🔹 **Rate Limiting** - ограничаване на заявки по потребител <!-- .element: class="fragment" -->

🔹 **Billing** - отчитане на употребата <!-- .element: class="fragment" -->

Note:
Без автентикация API-то не знае кой го използва.

--

### API Key

```bash
# Като query параметър
GET /api/weather?city=Sofia&apikey=abc123

# Като header
GET /api/weather?city=Sofia
X-API-Key: abc123
```

✅ Просто <!-- .element: class="fragment" -->

⚠️ Ключът е статичен - ако изтече, трябва да се смени <!-- .element: class="fragment" -->

Note:
API ключове са най-простата форма на автентикация. Повечето безплатни API-та ги използват.

--

### Bearer Token (JWT)

```bash
GET /api/users/me
Authorization: Bearer eyJhbGciOiJIUzI1NiIs...
```

🔹 Получава се след **login** <!-- .element: class="fragment" -->

🔹 Има **срок на валидност** (expiration) <!-- .element: class="fragment" -->

🔹 Изпраща се в **Authorization** header <!-- .element: class="fragment" -->

Note:
JWT (JSON Web Token) е стандартът за модерна API автентикация.

--

### Пример: Login → Token → API Call

```javascript
// 1. Login - получаване на token
const loginRes = await fetch('/api/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email: 'ivan@example.com',
    password: 's3cret'
  })
});
const { token } = await loginRes.json();

// 2. Използване на token за API call
const usersRes = await fetch('/api/users', {
  headers: { 'Authorization': `Bearer ${token}` }
});
const users = await usersRes.json();
```

Note:
Типичен workflow: влизате, получавате token, използвате го за всяка следваща заявка.

---

## REST URL Конвенции

Note:
Добрите URL-и правят API-то интуитивно.

--

### Правила за именуване

✅ Използвайте **съществителни**, не глаголи <!-- .element: class="fragment" -->

✅ Използвайте **множествено число** <!-- .element: class="fragment" -->

✅ Използвайте **kebab-case** за multi-word ресурси <!-- .element: class="fragment" -->

✅ Групирайте свързани ресурси **йерархично** <!-- .element: class="fragment" -->

Note:
Тези правила не са задължителни, но са стандартна практика.

--

### Примери

```
✅ ДОБРО:
GET  /api/users
GET  /api/users/123
GET  /api/users/123/posts
GET  /api/blog-posts?category=tech

❌ ЛОШО:
GET  /api/getUsers         ← глагол в URL
GET  /api/user             ← единствено число
GET  /api/user_posts       ← snake_case
POST /api/createNewUser    ← глагол + операция
```

Note:
Глаголът идва от HTTP метода (GET, POST), не от URL-а.

---

## Инструменти

Note:
Как тестваме API заявки.

--

### Postman

<svg viewBox="0 0 600 220" style="max-width: 550px; margin: 0 auto; display: block;">
  <defs>
    <linearGradient id="pmGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ff6c37"/><stop offset="100%" stop-color="#ff4500"/>
    </linearGradient>
  </defs>

  <rect x="50" y="20" width="500" height="180" rx="10" fill="#2d3748"/>

  <rect x="60" y="30" width="480" height="30" rx="6" fill="#4a5568"/>
  <text x="85" y="50" fill="#68d391" font-family="system-ui" font-size="11" font-weight="600">GET</text>
  <text x="120" y="50" fill="#e2e8f0" font-family="monospace" font-size="11">https://api.example.com/users</text>
  <rect x="450" y="35" width="80" height="20" rx="4" fill="url(#pmGrad)"/>
  <text x="490" y="49" fill="white" font-family="system-ui" font-size="10" font-weight="600" text-anchor="middle">Send</text>

  <text x="70" y="85" fill="#a0aec0" font-family="system-ui" font-size="10">Response:</text>
  <text x="70" y="105" fill="#68d391" font-family="monospace" font-size="10">200 OK</text>
  <text x="70" y="125" fill="#e2e8f0" font-family="monospace" font-size="9">[{"id": 1, "name": "User 1"},</text>
  <text x="70" y="140" fill="#e2e8f0" font-family="monospace" font-size="9"> {"id": 2, "name": "User 2"}]</text>

  <text x="300" y="175" fill="#a0aec0" font-family="system-ui" font-size="10" text-anchor="middle">GUI инструмент за тестване на API</text>
</svg>

Note:
Postman е идеален за експериментиране и дебъгване на API.

--

### Други инструменти

🔹 **cURL** - command line <!-- .element: class="fragment" -->

```bash
curl https://api.example.com/users
curl -X POST -H "Content-Type: application/json" \
     -d '{"name":"Ivan"}' https://api.example.com/users
```
<!-- .element: class="fragment" -->

🔹 **Python requests** - за автоматизация <!-- .element: class="fragment" -->

🔹 **Browser DevTools** - Network tab <!-- .element: class="fragment" -->

Note:
Изберете инструмента според контекста - Postman за exploration, cURL за скриптове.

--

### Browser DevTools (F12)

🔹 Отворете **Network** tab <!-- .element: class="fragment" -->

🔹 Филтрирайте по **Fetch/XHR** <!-- .element: class="fragment" -->

🔹 Кликнете на заявка за детайли: <!-- .element: class="fragment" -->

| Tab | Какво показва |
|-----|---------------|
| **Headers** | Request/Response headers |
| **Payload** | Изпратените данни (body) |
| **Preview** | Форматиран response |
| **Response** | Raw response body |
| **Timing** | Колко време е отнело |
<!-- .element: class="fragment" -->

Note:
DevTools е най-бързият начин да видите какво се случва с реалните заявки на сайта.

---

## Troubleshooting

Note:
Как диагностицираме грешки.

--

### 400 Bad Request

```json
// Невалиден JSON (липсва запетая)
{
  "name": "Ivan"
  "email": "ivan@example.com"
}
```

**Причини:** <!-- .element: class="fragment" -->

🔹 Невалиден JSON синтаксис <!-- .element: class="fragment" -->

🔹 Липсващи задължителни полета <!-- .element: class="fragment" -->

🔹 Грешен тип данни <!-- .element: class="fragment" -->

🔹 Липсващ Content-Type header <!-- .element: class="fragment" -->

Note:
400 означава проблем с вашата заявка - проверете JSON и headers.

--

### 401 Unauthorized

```
Authorization: Bearer your-token-here
```

**Причини:** <!-- .element: class="fragment" -->

🔹 Липсващ Authorization header <!-- .element: class="fragment" -->

🔹 Изтекъл или невалиден token <!-- .element: class="fragment" -->

🔹 Грешен формат на header <!-- .element: class="fragment" -->

Note:
401 означава проблем с автентикацията - проверете токена.

--

### 404 Not Found

```
GET /api/uesrs/123    ← правописна грешка!
GET /api/users/99999  ← несъществуващ ID
```

**Причини:** <!-- .element: class="fragment" -->

🔹 Грешен URL (правописна грешка) <!-- .element: class="fragment" -->

🔹 Ресурсът не съществува (изтрит или грешен ID) <!-- .element: class="fragment" -->

🔹 Грешна версия на API-то (`/v1/` vs `/v2/`) <!-- .element: class="fragment" -->

Note:
404 е най-честата грешка при REST. Винаги проверявайте URL-а.

--

### 500 Internal Server Error

```json
{
  "error": "Internal Server Error",
  "message": "Something went wrong"
}
```

🔹 Бъг в сървъра - **не е ваша грешка** <!-- .element: class="fragment" -->

🔹 Опитайте отново след малко <!-- .element: class="fragment" -->

🔹 Ако продължава - свържете се с поддръжката <!-- .element: class="fragment" -->

Note:
500 грешки са проблем на сървъра. Единственото, което можете да направите е retry.

--

### CORS Грешки

```
Access to fetch at 'https://api.example.com'
from origin 'http://localhost:3000'
has been blocked by CORS policy
```

**Cross-Origin Resource Sharing** <!-- .element: class="fragment" -->

🔹 Браузърът блокира заявки към **друг домейн** <!-- .element: class="fragment" -->

🔹 Сървърът трябва да разреши с `Access-Control-Allow-Origin` header <!-- .element: class="fragment" -->

🔹 Не се случва в Postman/cURL (само в браузъра!) <!-- .element: class="fragment" -->

Note:
CORS е честа главоболие за frontend разработчици. Решението е на сървъра.

--

### Debug Checklist

✅ Проверете URL за правописни грешки <!-- .element: class="fragment" -->

✅ Проверете HTTP метода (GET vs POST) <!-- .element: class="fragment" -->

✅ Валидирайте JSON синтаксис <!-- .element: class="fragment" -->

✅ Проверете Content-Type header <!-- .element: class="fragment" -->

✅ Проверете Authorization header <!-- .element: class="fragment" -->

✅ Прочетете **response body** за детайли <!-- .element: class="fragment" -->

✅ Отворете **DevTools Network tab** <!-- .element: class="fragment" -->

✅ Консултирайте **API документация** <!-- .element: class="fragment" -->

Note:
Следвайте тези стъпки последователно при всяка грешка.

--

### Error Handling в Код

```javascript
try {
  const response = await fetch('/api/users');

  if (!response.ok) {
    // 4xx или 5xx
    const error = await response.json();
    console.error(`Error ${response.status}: ${error.message}`);
    return;
  }

  const users = await response.json();
  console.log(users);

} catch (error) {
  // Мрежова грешка (няма интернет, DNS, timeout)
  console.error('Network error:', error.message);
}
```

⚠️ `fetch` **НЕ** хвърля грешка при 4xx/5xx! <!-- .element: class="fragment" -->

Note:
Това е критично - fetch хвърля грешка само при мрежови проблеми. Трябва ръчно да проверявате response.ok.

---

## Практически пример

Note:
Нека видим пълен workflow.

--

### Full CRUD Example (JavaScript)

```javascript
const BASE = 'https://jsonplaceholder.typicode.com';

// CREATE - POST
const created = await fetch(`${BASE}/posts`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: 'New Post', body: 'Content', userId: 1
  })
}).then(r => r.json());
console.log('Created:', created.id);

// READ - GET
const post = await fetch(`${BASE}/posts/1`)
  .then(r => r.json());
console.log('Read:', post.title);
```

Note:
Използваме jsonplaceholder за демонстрация - безплатен fake API.

--

### Full CRUD Example (продължение)

```javascript
// UPDATE - PUT
const updated = await fetch(`${BASE}/posts/1`, {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    id: 1, title: 'Updated', body: 'New content', userId: 1
  })
}).then(r => r.json());
console.log('Updated:', updated.title);

// DELETE
const deleteRes = await fetch(`${BASE}/posts/1`, {
  method: 'DELETE'
});
console.log('Deleted:', deleteRes.status); // 200
```

Note:
Пълен CRUD цикъл: Create, Read, Update, Delete.

--

### Full CRUD Example (Python)

```python
import requests

BASE = "https://jsonplaceholder.typicode.com"

# GET - списък
users = requests.get(f"{BASE}/users").json()
print(f"Found {len(users)} users")

# GET - конкретен потребител
user = requests.get(f"{BASE}/users/1").json()
print(f"User: {user['name']}")

# POST - създаване
new_post = {"title": "Hello", "body": "Content", "userId": 1}
res = requests.post(f"{BASE}/posts", json=new_post)
print(f"Created: {res.status_code}")  # 201

# PUT - обновяване
res = requests.put(f"{BASE}/posts/1",
    json={"title": "Updated", "body": "New", "userId": 1})
print(f"Updated: {res.status_code}")  # 200

# DELETE - изтриване
res = requests.delete(f"{BASE}/posts/1")
print(f"Deleted: {res.status_code}")  # 200
```

Note:
Python requests е по-прост от fetch - автоматично сериализира JSON.

---

## Пагинация и Rate Limiting

Note:
Важни концепции при работа с реални API-та.

--

### Пагинация

```
GET /api/users?page=1&limit=10   → потребители 1-10
GET /api/users?page=2&limit=10   → потребители 11-20
GET /api/users?page=3&limit=10   → потребители 21-30
```

🔹 API-тата **рядко** връщат всички данни наведнъж <!-- .element: class="fragment" -->

🔹 Използвайте `page` и `limit` (или `offset`) <!-- .element: class="fragment" -->

🔹 Response обикновено включва `total` и `totalPages` <!-- .element: class="fragment" -->

Note:
Без пагинация заявка за милион записа ще срине и сървъра, и клиента.

--

### Rate Limiting

```
HTTP/1.1 429 Too Many Requests
Retry-After: 60
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 0
X-RateLimit-Reset: 1712000000
```

🔹 API-тата ограничават **брой заявки** за период <!-- .element: class="fragment" -->

🔹 Типично: 60-1000 заявки/минута <!-- .element: class="fragment" -->

🔹 При превишаване: **429 Too Many Requests** <!-- .element: class="fragment" -->

🔹 Проверявайте `X-RateLimit-Remaining` header <!-- .element: class="fragment" -->

Note:
Ако получите 429, изчакайте преди следващата заявка.

---

## Best Practices

Note:
Съвети от практиката.

--

### Правила за клиенти

✅ Винаги проверявайте **status кодовете** <!-- .element: class="fragment" -->

✅ Задавайте **Content-Type** за POST/PUT/PATCH <!-- .element: class="fragment" -->

✅ Обработвайте **грешки** (4xx, 5xx, мрежови) <!-- .element: class="fragment" -->

✅ Тествайте с **Postman** преди да пишете код <!-- .element: class="fragment" -->

✅ Четете **API документацията** <!-- .element: class="fragment" -->

Note:
Тези правила ще ви спестят часове дебъгване.

--

### Правила за сигурност

🔐 Никога не commit-вайте **API ключове** в код <!-- .element: class="fragment" -->

🔐 Използвайте **environment variables** за secrets <!-- .element: class="fragment" -->

🔐 Използвайте **HTTPS** (не HTTP) <!-- .element: class="fragment" -->

🔐 Валидирайте **входните данни** на сървъра <!-- .element: class="fragment" -->

🔐 Не пращайте **пароли** в URL (query params) <!-- .element: class="fragment" -->

Note:
Сигурността е критична при работа с API-та.

--

### Чести грешки

❌ Забравен `Content-Type` header при POST <!-- .element: class="fragment" -->

❌ Невалиден JSON (trailing запетаи, единични кавички) <!-- .element: class="fragment" -->

❌ `fetch` не хвърля грешка при 4xx/5xx <!-- .element: class="fragment" -->

❌ GET с данни в body (трябва в URL) <!-- .element: class="fragment" -->

❌ Повторни POST без проверка (дубликати) <!-- .element: class="fragment" -->

❌ API ключове в публичен код (GitHub) <!-- .element: class="fragment" -->

Note:
Запомнете тези грешки - ще ги правите поне веднъж.

---

## Обобщение

<svg viewBox="0 0 700 200" style="max-width: 650px; margin: 0 auto; display: block;">
  <defs>
    <linearGradient id="sum1" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#3b82f6"/><stop offset="100%" stop-color="#2563eb"/>
    </linearGradient>
    <linearGradient id="sum2" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#10b981"/><stop offset="100%" stop-color="#059669"/>
    </linearGradient>
    <linearGradient id="sum3" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#8b5cf6"/><stop offset="100%" stop-color="#7c3aed"/>
    </linearGradient>
  </defs>

  <rect x="30" y="30" width="200" height="80" rx="10" fill="url(#sum1)"/>
  <text x="130" y="60" fill="white" font-family="system-ui" font-size="14" font-weight="600" text-anchor="middle">📖 GET</text>
  <text x="130" y="80" fill="rgba(255,255,255,0.8)" font-family="system-ui" font-size="10" text-anchor="middle">Read • Idempotent • URL params</text>
  <text x="130" y="95" fill="rgba(255,255,255,0.6)" font-family="system-ui" font-size="9" text-anchor="middle">Извличане на данни</text>

  <rect x="250" y="30" width="200" height="80" rx="10" fill="url(#sum2)"/>
  <text x="350" y="60" fill="white" font-family="system-ui" font-size="14" font-weight="600" text-anchor="middle">➕ POST</text>
  <text x="350" y="80" fill="rgba(255,255,255,0.8)" font-family="system-ui" font-size="10" text-anchor="middle">Create • Not idempotent • Body</text>
  <text x="350" y="95" fill="rgba(255,255,255,0.6)" font-family="system-ui" font-size="9" text-anchor="middle">Създаване на ресурси</text>

  <rect x="470" y="30" width="200" height="80" rx="10" fill="url(#sum3)"/>
  <text x="570" y="60" fill="white" font-family="system-ui" font-size="14" font-weight="600" text-anchor="middle">📄 JSON</text>
  <text x="570" y="80" fill="rgba(255,255,255,0.8)" font-family="system-ui" font-size="10" text-anchor="middle">Universal • Readable • Light</text>
  <text x="570" y="95" fill="rgba(255,255,255,0.6)" font-family="system-ui" font-size="9" text-anchor="middle">Формат за данни</text>

  <rect x="140" y="130" width="420" height="50" rx="8" fill="#f1f5f9" stroke="#cbd5e1"/>
  <text x="350" y="155" fill="#1e293b" font-family="system-ui" font-size="12" font-weight="600" text-anchor="middle">HTTP Status Codes: 2xx ✓ | 4xx Client Error | 5xx Server Error</text>
  <text x="350" y="172" fill="#64748b" font-family="system-ui" font-size="10" text-anchor="middle">Винаги проверявайте response кода!</text>
</svg>

Note:
Това са основите - практикувайте с реални API.

---

## Следващи стъпки

📄 **OpenAPI / Swagger** - стандарт за API документация <!-- .element: class="fragment" -->

🔐 **OAuth 2.0** - по-сигурна автентикация <!-- .element: class="fragment" -->

⚡ **WebSockets** - реално-времева комуникация <!-- .element: class="fragment" -->

🔄 **GraphQL** - алтернатива на REST <!-- .element: class="fragment" -->

🏗️ **Изграждане на REST API** - Express.js, FastAPI, Spring Boot <!-- .element: class="fragment" -->

Note:
Следващата стъпка е да не само консумирате, но и да създавате REST API-та.

---

## Ресурси

--

### Документация

📖 [MDN HTTP Overview](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview) <!-- .element: class="fragment" -->

📖 [MDN Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) <!-- .element: class="fragment" -->

📖 [REST API Tutorial](https://restfulapi.net/) <!-- .element: class="fragment" -->

📖 [HTTP Status Codes](https://httpstatuses.com/) <!-- .element: class="fragment" -->

--

### Инструменти

🔧 [Postman](https://www.postman.com/) - GUI за тестване <!-- .element: class="fragment" -->

🐍 [Python Requests](https://docs.python-requests.org/) - Python HTTP библиотека <!-- .element: class="fragment" -->

🔧 [HTTPie](https://httpie.io/) - модерна cURL алтернатива <!-- .element: class="fragment" -->

--

### Практика (Fake APIs)

🧪 [JSONPlaceholder](https://jsonplaceholder.typicode.com/) - GET, POST, PUT, DELETE <!-- .element: class="fragment" -->

🧪 [ReqRes](https://reqres.in/) - с автентикация <!-- .element: class="fragment" -->

🧪 [httpbin.org](https://httpbin.org/) - HTTP дебъгване <!-- .element: class="fragment" -->

🧪 [Dog API](https://dog.ceo/dog-api/) - забавен API за упражнения <!-- .element: class="fragment" -->

Note:
Практикувайте с тези безплатни API-та. JSONPlaceholder е най-добрият за начало.

---

# Въпроси?

Note:
Време за въпроси и дискусия.
