---
title: REST API Основи
theme: white
highlightTheme: github
transition: slide
---

# REST API

### GET и POST заявки за Web APIs

Note:
Добре дошли в лекцията за REST API - основата на комуникацията между уеб приложения.

---

## Учебни Цели

🌐 Разбирате REST архитектурата и HTTP методите <!-- .element: class="fragment" -->

📖 Конструирате GET заявки с параметри <!-- .element: class="fragment" -->

➕ Форматирате POST заявки с JSON <!-- .element: class="fragment" -->

🔧 Тествате API с Postman и Python <!-- .element: class="fragment" -->

🐛 Диагностицирате REST грешки <!-- .element: class="fragment" -->

Note:
Тези пет умения са фундаментални за всеки уеб разработчик.

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

🔹 **Stateless** - всяка заявка е независима <!-- .element: class="fragment" -->

🔹 **Client-Server** - ясно разделение <!-- .element: class="fragment" -->

🔹 **Uniform Interface** - стандартни HTTP методи <!-- .element: class="fragment" -->

🔹 **Cacheable** - отговорите могат да се кешират <!-- .element: class="fragment" -->

Note:
REST е архитектурен стил, не протокол - набор от принципи за изграждане на API.

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

### Debug Checklist

✅ Проверете URL за грешки <!-- .element: class="fragment" -->

✅ Валидирайте JSON синтаксис <!-- .element: class="fragment" -->

✅ Проверете Content-Type header <!-- .element: class="fragment" -->

✅ Прочетете response body за детайли <!-- .element: class="fragment" -->

✅ Консултирайте API документация <!-- .element: class="fragment" -->

Note:
Следвайте тези стъпки при всяка грешка.

---

## Практически пример

Note:
Нека видим пълен workflow.

--

### Full Example: Python

```python
import requests

BASE = "https://jsonplaceholder.typicode.com"

# 1. GET - извличане
users = requests.get(f"{BASE}/users").json()
print(f"Found {len(users)} users")

# 2. Намиране на потребител
bret = next(u for u in users if u['username'] == 'Bret')
print(f"User: {bret['name']} (ID: {bret['id']})")

# 3. POST - създаване на пост
new_post = {
    "title": "Hello from Bret",
    "body": "Test content",
    "userId": bret['id']
}
response = requests.post(f"{BASE}/posts", json=new_post)
print(f"Created: {response.status_code}")
```

Note:
Този пример демонстрира GET за търсене и POST за създаване.

---

## Best Practices

✅ Винаги проверявайте status кодовете <!-- .element: class="fragment" -->

✅ Използвайте Content-Type за POST <!-- .element: class="fragment" -->

✅ Пазете API токени сигурни <!-- .element: class="fragment" -->

✅ Handle-вайте грешки gracefully <!-- .element: class="fragment" -->

✅ Консултирайте документацията <!-- .element: class="fragment" -->

✅ Тествайте с Postman преди код <!-- .element: class="fragment" -->

Note:
Следвайте тези практики за по-малко главоболия.

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

📚 PUT и PATCH - обновяване <!-- .element: class="fragment" -->

🗑️ DELETE - изтриване <!-- .element: class="fragment" -->

🔐 Authentication (JWT, OAuth) <!-- .element: class="fragment" -->

📄 API Documentation (OpenAPI) <!-- .element: class="fragment" -->

Note:
След GET и POST, следващата стъпка са останалите CRUD операции.

---

## Ресурси

📖 [MDN HTTP Overview](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview) <!-- .element: class="fragment" -->

🔧 [Postman](https://www.postman.com/) <!-- .element: class="fragment" -->

🧪 [JSONPlaceholder](https://jsonplaceholder.typicode.com/) - Fake API <!-- .element: class="fragment" -->

🐍 [Python Requests](https://docs.python-requests.org/) <!-- .element: class="fragment" -->

Note:
JSONPlaceholder е отличен за практика без нужда от backend.

---

# Въпроси?

Note:
Време за въпроси и дискусия.
