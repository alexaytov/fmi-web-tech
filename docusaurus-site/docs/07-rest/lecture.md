---
title: "Лекция"
sidebar_position: 1
slug: lecture
tags: [rest, api, http, get, post, json, web-services, crud]
---

import InfoBox from '@site/src/components/InfoBoxes/InfoBox';
import WarningBox from '@site/src/components/InfoBoxes/WarningBox';
import SuccessBox from '@site/src/components/InfoBoxes/SuccessBox';
import WhyBox from '@site/src/components/InfoBoxes/WhyBox';
import LearningObjectives from '@site/src/components/LearningObjectives';
import QuickSummary from '@site/src/components/QuickSummary';
import CollapsibleSection from '@site/src/components/CollapsibleSection';
import ComparisonBox from '@site/src/components/Comparison/ComparisonBox';
import Grid from '@site/src/components/Grid/Grid';
import Card from '@site/src/components/Grid/Card';
import ViewSlidesButton from '@site/src/components/ViewSlidesButton';
import useBaseUrl from '@docusaurus/useBaseUrl';

# REST GET и POST Заявки

<img src={useBaseUrl('/img/diagrams/rest/rest-header.svg')} alt="REST API Header" style={{width: '100%', maxWidth: '800px', margin: '20px auto', display: 'block'}} />

<ViewSlidesButton lectureSlug="rest" />

<QuickSummary>

**Ключови познания:**
- **REST** е архитектурен стил за изграждане на мащабируеми уеб услуги, базиран на HTTP
- **GET** заявки извличат данни и са **идемпотентни** (безопасни за повторение)
- **POST** заявки създават нови ресурси и са **неидемпотентни**
- **JSON** е стандартният формат за обмен на данни в REST API
- **HTTP статус кодове** (200, 201, 400, 401, 404, 500) индикират резултата от заявката

</QuickSummary>

<LearningObjectives objectives={[
  "Разбиране на REST архитектурата и HTTP методите",
  "Конструиране на GET заявки с path и query параметри",
  "Форматиране на POST заявки с JSON тела и правилни headers",
  "Тестване на API заявки с Postman, cURL и Python",
  "Диагностициране на често срещани REST грешки (400, 401, 404)"
]} />

---

## Въведение: Защо REST API?

<WhyBox title="Защо REST API е основа на съвременната уеб разработка?">

В днешния дигитален свят, **уеб API-та** са гръбнакът на почти всяко приложение - от социални мрежи и електронна търговия, до мобилни приложения и облачни услуги. REST API позволява на различни системи да комуникират помежду си по стандартизиран начин.

Когато проверявате Facebook, поръчвате от Amazon или използвате мобилно приложение - всичко това работи чрез REST API заявки. Разбирането на GET и POST е фундаментално умение за всеки разработчик.

</WhyBox>

<InfoBox title="Какво е REST?">

**REST** (Representational State Transfer) е архитектурен стил за изграждане на мащабируеми уеб услуги. Основните принципи са:

- **Stateless** - всяка заявка съдържа цялата необходима информация
- **Client-Server** - ясно разделение между клиент и сървър
- **Uniform Interface** - стандартизирани URI-та и HTTP методи
- **Cacheable** - отговорите могат да се кешират за по-добра производителност

</InfoBox>

### HTTP Методи и CRUD Операции

REST API свързва HTTP методите с **CRUD операции**:

<img src={useBaseUrl('/img/diagrams/rest/crud-methods.svg')} alt="CRUD Methods" style={{width: '100%', maxWidth: '700px', margin: '20px auto', display: 'block'}} />

---

## HTTP Основи

<InfoBox title="HTTP Request-Response модел">

В основата на API комуникацията е **HTTP request-response моделът**:

<img src={useBaseUrl('/img/diagrams/rest/request-response-cycle.svg')} alt="HTTP Request-Response Cycle" style={{width: '100%', maxWidth: '700px', margin: '20px auto', display: 'block'}} />

</InfoBox>

### Структура на HTTP Заявка

```
[METHOD] [URL] HTTP/1.1
[Headers]

[Body] (за POST, PUT, PATCH)
```

**Пример GET заявка:**
```
GET /api/users/123 HTTP/1.1
Host: api.example.com
Accept: application/json
```

**Пример POST заявка:**
```
POST /api/users HTTP/1.1
Host: api.example.com
Content-Type: application/json

{"name": "Ivan", "email": "ivan@example.com"}
```

### HTTP Статус Кодове

<img src={useBaseUrl('/img/diagrams/rest/http-status-codes.svg')} alt="HTTP Status Codes" style={{width: '100%', maxWidth: '700px', margin: '20px auto', display: 'block'}} />

---

## JSON: Езикът на API-тата

<InfoBox title="Какво е JSON?">

**JSON** (JavaScript Object Notation) е лек, текстов формат за структуриране на данни:

<img src={useBaseUrl('/img/diagrams/rest/json-structure.svg')} alt="JSON Structure" style={{width: '100%', maxWidth: '650px', margin: '20px auto', display: 'block'}} />

</InfoBox>

<SuccessBox title="Защо JSON?">

- **Четим** - лесен за разбиране от хора
- **Универсален** - поддържан от всички програмни езици
- **Компактен** - ефективен за мрежов трансфер
- **Структуриран** - обекти `{}` и масиви `[]`

</SuccessBox>

---

## GET Заявки: Извличане на Данни

<InfoBox title="Цел на GET заявките">

**GET заявките** се използват за **извличане на данни** от сървъра. Те никога не модифицират състоянието на сървъра - само четат информация.

</InfoBox>

### Идемпотентност на GET

<InfoBox title="Какво е идемпотентност?">

**Идемпотентна** операция означава, че множество идентични заявки ще дадат същия резултат като една заявка. GET е идемпотентен - можете безопасно да повторите заявката.

**Защо е важно:**
- **Надеждност** - при прекъсване на мрежата, можете да повторите заявката
- **Кеширане** - отговорите могат да се кешират от браузъри и CDN-и

</InfoBox>

### Path и Query Параметри

GET заявките предават данни чрез URL:

**1. Path параметри** - идентифицират конкретен ресурс:
```
GET /api/users/123
GET /api/products/456
```

**2. Query параметри** - филтриране, сортиране, пагинация:
```
GET /api/products?category=electronics&sort=price&page=2&limit=10
```

<WarningBox title="Ограничения на GET">

- Данните са видими в URL-а (не за чувствителна информация!)
- Има лимит на дължината на URL (обикновено ~2000 символа)
- Не използвайте GET за модифициране на данни

</WarningBox>

### Примери с GET Заявки

**Python с requests:**

```python
import requests

# Проста GET заявка
response = requests.get('https://jsonplaceholder.typicode.com/users')
print(f"Status: {response.status_code}")
users = response.json()  # Парсва JSON отговора

# GET с query параметри
params = {'username': 'Bret'}
response = requests.get('https://jsonplaceholder.typicode.com/users', params=params)
```

**cURL:**

```bash
# Проста GET заявка
curl https://jsonplaceholder.typicode.com/users

# GET с query параметри
curl "https://jsonplaceholder.typicode.com/users?username=Bret"
```

---

## POST Заявки: Създаване на Ресурси

<InfoBox title="Цел на POST заявките">

**POST заявките** се използват за **създаване на нови ресурси** или изпращане на данни, които променят състоянието на сървъра.

</InfoBox>

### Неидемпотентност на POST

<WarningBox title="POST не е идемпотентен!">

Изпращането на една и съща POST заявка многократно вероятно ще създаде **множество ресурси**. Например:

```
POST /api/products (с едни и същи данни)
→ Създава продукт с ID 1
→ Създава продукт с ID 2
→ Създава продукт с ID 3
```

Бъдете внимателни да не изпращате POST заявки случайно повторно!

</WarningBox>

### Анатомия на POST Заявка

POST заявките използват **request body** за данните:

```python
import requests
import json

url = "https://jsonplaceholder.typicode.com/posts"

# Данни за изпращане
new_post = {
    "title": "Моята първа публикация",
    "body": "Съдържание на публикацията...",
    "userId": 1
}

# Headers - ЗАДЪЛЖИТЕЛНО за JSON
headers = {
    "Content-Type": "application/json"
}

# POST заявка
response = requests.post(url, json=new_post, headers=headers)

print(f"Status: {response.status_code}")  # Очакваме 201 Created
print(response.json())  # Новият ресурс с генериран ID
```

<SuccessBox title="Content-Type header">

Винаги включвайте `Content-Type: application/json` header когато изпращате JSON данни! Без него сървърът може да не разбере формата на данните.

</SuccessBox>

### Автентикация

Повечето POST заявки изискват **автентикация**:

```python
headers = {
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_API_TOKEN"
}
```

---

## GET vs POST: Сравнение

<img src={useBaseUrl('/img/diagrams/rest/get-vs-post.svg')} alt="GET vs POST Comparison" style={{width: '100%', maxWidth: '700px', margin: '20px auto', display: 'block'}} />

<ComparisonBox
  left={{
    title: "GET Заявки",
    content: (
      <ul>
        <li><strong>Цел:</strong> Извличане на данни</li>
        <li><strong>Идемпотентен:</strong> Да</li>
        <li><strong>Данни:</strong> В URL (query params)</li>
        <li><strong>Request Body:</strong> Няма</li>
        <li><strong>Кеширане:</strong> Да</li>
        <li><strong>Сигурност:</strong> Данните са видими в URL</li>
      </ul>
    )
  }}
  right={{
    title: "POST Заявки",
    content: (
      <ul>
        <li><strong>Цел:</strong> Създаване на ресурси</li>
        <li><strong>Идемпотентен:</strong> Не</li>
        <li><strong>Данни:</strong> В request body</li>
        <li><strong>Request Body:</strong> JSON (обикновено)</li>
        <li><strong>Кеширане:</strong> Не</li>
        <li><strong>Сигурност:</strong> Данните са скрити</li>
      </ul>
    )
  }}
/>

---

## Инструменти за Тестване на API

<Grid columns={2}>
  <Card title="Postman" icon="📮">
    GUI приложение за тестване на API. Лесен за използване, поддържа колекции и автоматизация.
  </Card>
  <Card title="cURL" icon="💻">
    Command-line инструмент. Бърз за прости тестове и скриптове.
  </Card>
</Grid>

<Grid columns={2}>
  <Card title="Python requests" icon="🐍">
    Библиотека за HTTP заявки в Python. Идеална за автоматизация и интеграция.
  </Card>
  <Card title="Browser DevTools" icon="🔧">
    Network таб в браузъра. Мониторинг на реални заявки от уеб приложения.
  </Card>
</Grid>

### Postman Пример

1. **Създайте GET заявка:**
   - Method: `GET`
   - URL: `https://jsonplaceholder.typicode.com/users`
   - Натиснете **Send**
   - Очаквайте `200 OK` и списък от потребители

2. **Създайте POST заявка:**
   - Method: `POST`
   - URL: `https://jsonplaceholder.typicode.com/posts`
   - Body → raw → JSON:
   ```json
   {
     "title": "Test Post",
     "body": "This is a test",
     "userId": 1
   }
   ```
   - Headers: `Content-Type: application/json`
   - Натиснете **Send**
   - Очаквайте `201 Created`

---

## Troubleshooting: Често Срещани Грешки

### 400 Bad Request

<WarningBox title="400 Bad Request - Клиентска грешка">

**Причини:**
- Невалиден JSON (липсваща запетая, грешни кавички)
- Липсващи задължителни полета
- Грешен тип данни (string вместо number)
- Липсващ `Content-Type` header

**Диагностика:**
1. Валидирайте JSON-а с онлайн инструмент
2. Проверете API документацията за задължителни полета
3. Уверете се, че `Content-Type: application/json` е зададен

</WarningBox>

**Пример за невалиден JSON:**
```json
{
  "name": "Ivan"
  "email": "ivan@example.com"  // Липсва запетая след "Ivan"
}
```

### 401 Unauthorized

<WarningBox title="401 Unauthorized - Автентикация">

**Причини:**
- Липсващ `Authorization` header
- Невалиден или изтекъл token
- Грешен формат на header-а

**Диагностика:**
1. Проверете дали `Authorization` header е зададен
2. Уверете се, че токенът не е изтекъл
3. Проверете формата: `Bearer YOUR_TOKEN`

</WarningBox>

### 404 Not Found

<InfoBox title="404 Not Found">

**Причини:**
- Грешен URL endpoint
- Ресурсът не съществува (грешен ID)
- Грешен HTTP метод

**Диагностика:**
1. Проверете URL-а за правописни грешки
2. Уверете се, че ресурсът съществува
3. Консултирайте API документацията

</InfoBox>

---

## Практически Пример: Пълен CRUD

```python
import requests

BASE_URL = "https://jsonplaceholder.typicode.com"

# 1. GET - Извличане на всички постове
response = requests.get(f"{BASE_URL}/posts")
print(f"GET all: {response.status_code}")  # 200

# 2. GET - Извличане на конкретен пост
response = requests.get(f"{BASE_URL}/posts/1")
print(f"GET one: {response.status_code}")  # 200

# 3. POST - Създаване на нов пост
new_post = {
    "title": "Нов пост",
    "body": "Съдържание...",
    "userId": 1
}
response = requests.post(
    f"{BASE_URL}/posts",
    json=new_post,
    headers={"Content-Type": "application/json"}
)
print(f"POST: {response.status_code}")  # 201
created_post = response.json()
print(f"Created with ID: {created_post['id']}")
```

---

## Обобщение

<Grid columns={3}>
  <Card title="REST" icon="🌐">
    Архитектурен стил за уеб услуги, базиран на HTTP методи и ресурси
  </Card>
  <Card title="GET" icon="📖">
    Извличане на данни, идемпотентен, данни в URL
  </Card>
  <Card title="POST" icon="➕">
    Създаване на ресурси, неидемпотентен, данни в body
  </Card>
</Grid>

<Grid columns={3}>
  <Card title="JSON" icon="📄">
    Стандартен формат за данни в REST API
  </Card>
  <Card title="Status Codes" icon="📊">
    200/201 = успех, 4xx = клиентска грешка, 5xx = сървърна грешка
  </Card>
  <Card title="Headers" icon="📋">
    Content-Type и Authorization са ключови
  </Card>
</Grid>

---

## Best Practices

<SuccessBox title="Препоръки за работа с REST API">

1. **Винаги проверявайте status кодовете** - не приемайте, че заявката е успяла
2. **Използвайте `Content-Type: application/json`** за POST заявки
3. **Пазете API токени сигурни** - никога не ги commit-вайте в код
4. **Обработвайте грешки** - предвидете 4xx и 5xx отговори
5. **Консултирайте API документацията** - всеки API има специфики
6. **Използвайте Postman за тестване** - преди да пишете код

</SuccessBox>

<WarningBox title="Често срещани грешки">

- Забравен `Content-Type` header при POST
- Невалиден JSON (липсващи запетаи, грешни кавички)
- Изтекли или невалидни tokens
- GET с данни в body (трябва да са в URL)
- Повторни POST заявки (създават дубликати)

</WarningBox>

---

## Следващи Стъпки

<InfoBox title="Какво следва?">

След като разбирате GET и POST, можете да научите:

- **PUT и PATCH** - обновяване на ресурси
- **DELETE** - изтриване на ресурси
- **Пагинация** - работа с големи набори от данни
- **Rate Limiting** - ограничения на API заявките
- **OpenAPI/Swagger** - документация на API

</InfoBox>

---

## Допълнителни Ресурси

### Документация
- [MDN HTTP Overview](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview) - Основи на HTTP
- [REST API Tutorial](https://restfulapi.net/) - Подробен REST гайд

### Инструменти
- [Postman](https://www.postman.com/) - API тестване
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) - Безплатен fake API за тестване
- [Python requests](https://docs.python-requests.org/) - HTTP библиотека за Python

### Практика
- [ReqRes](https://reqres.in/) - Fake API с автентикация
- [httpbin.org](https://httpbin.org/) - HTTP тестване и дебъгване
