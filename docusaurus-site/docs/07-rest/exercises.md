---
sidebar_position: 2
slug: exercises
title: "Упражнения"
tags: [exercises, practice, rest, api, http, get, post, json]
---

import ExerciseCard from '@site/src/components/Exercise/ExerciseCard';
import ProgressTracker from '@site/src/components/Exercise/ProgressTracker';
import CollapsibleSection from '@site/src/components/CollapsibleSection';
import InfoBox from '@site/src/components/InfoBoxes/InfoBox';
import WarningBox from '@site/src/components/InfoBoxes/WarningBox';
import SuccessBox from '@site/src/components/InfoBoxes/SuccessBox';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Упражнения: REST GET и POST Заявки

<img src={useBaseUrl('/img/diagrams/rest/exercises-header.svg')} alt="REST Exercises Header" style={{width: '100%', maxWidth: '800px', margin: '20px auto', display: 'block'}} />

<ProgressTracker />

<InfoBox title="Инструкции">

- Решете упражненията последователно - те са подредени по трудност
- Използвайте **подсказките** ако се затрудните
- Проверете решенията си след като опитате самостоятелно
- Препоръчително е да тествате кода си с Postman или Python
- API за тестване: `https://jsonplaceholder.typicode.com`

</InfoBox>

---

## Лесни Упражнения (EASY)

<ExerciseCard difficulty="easy">

### Задача 1: REST Дефиниция

**Multiple Choice** - За какво е съкращение REST?

A) Remote Execution State Transfer
B) Representational State Transfer
C) Resource Endpoint State Transfer
D) Request State Transaction

<CollapsibleSection title="💡 Подсказка">

REST описва как да **представяме** състоянието на ресурси и как да го **трансферираме** между клиент и сървър.

</CollapsibleSection>

<CollapsibleSection title="✅ Решение">

**Верен отговор: B) Representational State Transfer**

REST е архитектурен стил, който дефинира как да:
- **Представяме** (Representational) ресурси (обикновено в JSON)
- **Трансферираме** (Transfer) състоянието (State) между клиент и сървър

Основните принципи са:
- Stateless комуникация
- Uniform Interface (стандартни HTTP методи)
- Client-Server архитектура

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="easy">

### Задача 2: HTTP Методи и CRUD

**Matching** - Свържете всеки HTTP метод със съответната CRUD операция:

| HTTP Метод | CRUD Операция |
|------------|---------------|
| GET        | ?             |
| POST       | ?             |
| PUT        | ?             |
| DELETE     | ?             |

Опции: Create, Read, Update, Delete

<CollapsibleSection title="💡 Подсказка">

Помислете какво прави всеки метод:
- GET **извлича** данни
- POST **създава** нови данни
- PUT **обновява** съществуващи данни
- DELETE **изтрива** данни

</CollapsibleSection>

<CollapsibleSection title="✅ Решение">

| HTTP Метод | CRUD Операция |
|------------|---------------|
| GET        | **Read**      |
| POST       | **Create**    |
| PUT        | **Update**    |
| DELETE     | **Delete**    |

**Запомнете:**
- **G**ET → **R**ead (извличане)
- **P**OST → **C**reate (създаване)
- **P**UT → **U**pdate (обновяване)
- **D**ELETE → **D**elete (изтриване)

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="easy">

### Задача 3: HTTP Статус Кодове

**Multiple Choice** - Кой HTTP статус код означава успешна GET заявка?

A) 201 Created
B) 200 OK
C) 404 Not Found
D) 500 Internal Server Error

<CollapsibleSection title="💡 Подсказка">

2xx кодове означават успех. Кой от тях е за "всичко е наред"?

</CollapsibleSection>

<CollapsibleSection title="✅ Решение">

**Верен отговор: B) 200 OK**

HTTP статус кодове:
- **200 OK** - успешна GET заявка
- **201 Created** - успешно създаден ресурс (POST)
- **404 Not Found** - ресурсът не съществува
- **500 Internal Server Error** - грешка на сървъра

**Категории:**
- 2xx = Успех
- 4xx = Клиентска грешка
- 5xx = Сървърна грешка

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="easy">

### Задача 4: JSON Валидация

**True or False** - Следният JSON е валиден:

```json
{
  "name": "Alice",
  "age": 30,
  "city": "New York"
}
```

<CollapsibleSection title="💡 Подсказка">

Проверете за:
- Правилни кавички (двойни, не единични)
- Запетаи между елементите
- Липса на trailing запетая след последния елемент

</CollapsibleSection>

<CollapsibleSection title="✅ Решение">

**Отговор: True (Валиден)**

Този JSON е правилен защото:
- ✅ Използва двойни кавички за ключове и string стойности
- ✅ Има запетаи между елементите
- ✅ Няма trailing запетая след последния елемент
- ✅ Правилно затворени скоби

**Невалидни примери:**

```json
// ❌ Липсва запетая
{"name": "Alice" "age": 30}

// ❌ Trailing запетая
{"name": "Alice",}

// ❌ Единични кавички
{'name': 'Alice'}
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="easy">

### Задача 5: Идемпотентност

**Short Answer** - Какво означава "идемпотентен" в контекста на HTTP методи? GET идемпотентен ли е?

<CollapsibleSection title="💡 Подсказка">

Помислете: ако изпратите една и съща заявка 5 пъти, какъв ще бъде резултатът?

</CollapsibleSection>

<CollapsibleSection title="✅ Решение">

**Идемпотентна** операция означава, че множество идентични заявки ще дадат **същия резултат** като една заявка.

**GET е идемпотентен:**
- Изпращането на `GET /users/123` 10 пъти връща същите данни
- Не променя състоянието на сървъра
- Безопасен за повторение при мрежови проблеми

**POST НЕ е идемпотентен:**
- Изпращането на `POST /users` 10 пъти може да създаде 10 потребителя
- Всяка заявка променя състоянието

**Практическо значение:**
- GET заявки могат да се кешират
- При timeout, GET може да се повтори безопасно
- POST трябва да се използва внимателно

</CollapsibleSection>

</ExerciseCard>

---

## Средни Упражнения (MEDIUM)

<ExerciseCard difficulty="medium">

### Задача 6: Path Параметри

**Identification** - В URL-а `GET /api/users/456`, идентифицирайте path параметъра.

<CollapsibleSection title="💡 Подсказка">

Path параметрите са стойности вградени директно в URL пътя, обикновено идентификатори на ресурси.

</CollapsibleSection>

<CollapsibleSection title="✅ Решение">

**Path параметърът е: `456`**

В URL структурата `/api/users/{id}`:
- `/api` - базов път
- `/users` - колекция (ресурс)
- `/456` - **path параметър** (ID на конкретен потребител)

**Разлика от query параметри:**

```
// Path параметър - идентифицира конкретен ресурс
GET /api/users/456

// Query параметри - филтриране/модификация
GET /api/users?active=true&role=admin
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium">

### Задача 7: Query Параметри

**Analysis** - Дадена е заявката:

```
GET /api/products?category=books&sort=price&limit=20
```

Избройте всички query параметри и техните стойности.

<CollapsibleSection title="💡 Подсказка">

Query параметрите започват след `?` и са разделени с `&`. Форматът е `key=value`.

</CollapsibleSection>

<CollapsibleSection title="✅ Решение">

**Query параметри:**

| Параметър | Стойност | Цел |
|-----------|----------|-----|
| `category` | `books` | Филтриране по категория |
| `sort` | `price` | Сортиране по цена |
| `limit` | `20` | Ограничение на резултатите |

**Как работят:**
- `?` - начало на query string
- `&` - разделител между параметри
- `key=value` - формат на всеки параметър

**URL декомпозиция:**
```
GET /api/products  ← endpoint
    ?category=books  ← първи параметър
    &sort=price      ← втори параметър
    &limit=20        ← трети параметър
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium">

### Задача 8: Конструиране на GET URL

**Practical** - Конструирайте валиден GET URL за извличане на всички поръчки за клиент с ID 789, филтрирани по статус "pending" и сортирани по дата в низходящ ред.

Базов endpoint: `/api/customers/{id}/orders`

<CollapsibleSection title="💡 Подсказка">

1. Заменете `{id}` с конкретната стойност
2. Добавете query параметри за филтриране и сортиране

</CollapsibleSection>

<CollapsibleSection title="✅ Решение">

**Валиден URL:**

```
GET /api/customers/789/orders?status=pending&sort=date&order=desc
```

**Разбивка:**
- `/api/customers/789/orders` - path с customer ID
- `?status=pending` - филтър по статус
- `&sort=date` - сортиране по дата
- `&order=desc` - низходящ ред (descending)

**Алтернативни варианти:**

```
// Вариант с combined sort
/api/customers/789/orders?status=pending&sort=-date

// Вариант с explicit параметър names
/api/customers/789/orders?status=pending&sortBy=date&sortOrder=descending
```

Конкретният формат зависи от API документацията.

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium">

### Задача 9: POST Header

**Fill in the Blank** - Какъв header ТРЯБВА да включите когато изпращате JSON данни в POST заявка? Напишете пълния header (name: value).

<CollapsibleSection title="💡 Подсказка">

Този header казва на сървъра какъв е **типът на съдържанието** (content type) в request body.

</CollapsibleSection>

<CollapsibleSection title="✅ Решение">

**Отговор: `Content-Type: application/json`**

**Защо е необходим:**
- Казва на сървъра как да интерпретира request body
- Без него сървърът може да върне 400 Bad Request
- Postman обикновено го добавя автоматично

**Пример в Python:**

```python
headers = {
    "Content-Type": "application/json"
}

response = requests.post(url, json=data, headers=headers)
```

**Други често срещани Content-Types:**
- `application/x-www-form-urlencoded` - form data
- `multipart/form-data` - file uploads
- `text/plain` - plain text

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium">

### Задача 10: POST Status Code

**Multiple Choice** - Кой HTTP статус код обикновено се очаква след успешно създаване на нов ресурс чрез POST?

A) 200 OK
B) 201 Created
C) 204 No Content
D) 302 Found

<CollapsibleSection title="💡 Подсказка">

Има специален код, който означава "**създадено**" (created).

</CollapsibleSection>

<CollapsibleSection title="✅ Решение">

**Верен отговор: B) 201 Created**

**Разлика между кодовете:**
- **200 OK** - общ успех, обикновено за GET
- **201 Created** - успешно създаден нов ресурс (POST)
- **204 No Content** - успех без response body (DELETE)
- **302 Found** - пренасочване

**Типичен POST response:**

```
HTTP/1.1 201 Created
Content-Type: application/json
Location: /api/users/123

{
  "id": 123,
  "name": "New User",
  "createdAt": "2024-01-15T10:30:00Z"
}
```

Note: Response често включва `Location` header с URL на новия ресурс.

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium">

### Задача 11: JSON Body за POST

**Practical** - Създайте валиден JSON body за POST заявка за регистрация на нов потребител със следната информация:
- Username: john_doe
- Email: john@example.com
- Password: securePass123
- Age: 28

<CollapsibleSection title="💡 Подсказка">

- Използвайте двойни кавички за всички ключове и string стойности
- Numbers не се ограждат с кавички
- Няма trailing запетая

</CollapsibleSection>

<CollapsibleSection title="✅ Решение">

```json
{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "securePass123",
  "age": 28
}
```

**Важни детайли:**
- `"username"` - string, с кавички
- `"age": 28` - number, БЕЗ кавички
- Няма trailing запетая след `28`

**Python пример:**

```python
import requests

user_data = {
    "username": "john_doe",
    "email": "john@example.com",
    "password": "securePass123",
    "age": 28
}

response = requests.post(
    "https://api.example.com/users",
    json=user_data,
    headers={"Content-Type": "application/json"}
)
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium">

### Задача 12: JSON Синтактична Грешка

**Debugging** - Разработчик получава `400 Bad Request` грешка при изпращане на следния JSON. Намерете проблема:

```json
{
  "title": "New Post",
  "content": "Hello World"
  "author": "Jane"
}
```

<CollapsibleSection title="💡 Подсказка">

Проверете за липсващи запетаи между елементите.

</CollapsibleSection>

<CollapsibleSection title="✅ Решение">

**Проблем:** Липсва запетая след `"Hello World"`

**Грешен JSON:**
```json
{
  "title": "New Post",
  "content": "Hello World"  // ❌ Липсва запетая тук!
  "author": "Jane"
}
```

**Правилен JSON:**
```json
{
  "title": "New Post",
  "content": "Hello World",
  "author": "Jane"
}
```

**Често срещани JSON грешки:**
1. Липсващи запетаи между елементите
2. Trailing запетая след последния елемент
3. Единични вместо двойни кавички
4. Некоректно escape-нати специални символи

**Съвет:** Използвайте JSON validator (jsonlint.com) за проверка.

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium">

### Задача 13: POST Неидемпотентност

**Explanation** - Обяснете защо изпращането на една и съща POST заявка два пъти за създаване на блог пост може да причини проблеми. Коя характеристика на POST е причината?

<CollapsibleSection title="💡 Подсказка">

Помислете какво е "идемпотентност" и дали POST притежава това свойство.

</CollapsibleSection>

<CollapsibleSection title="✅ Решение">

**Проблем:** POST е **неидемпотентен** - всяко извикване може да създаде нов ресурс.

**Какво се случва:**
```
POST /api/posts (title: "My Post") → Създава пост с ID 1
POST /api/posts (title: "My Post") → Създава пост с ID 2 (дубликат!)
```

**Защо е проблем:**
- Създават се дублирани записи в базата данни
- Потребителят може да бъде таксуван два пъти
- Нарушава се data integrity

**Как да се предотврати:**
1. **Idempotency keys** - уникален идентификатор за всяка заявка
2. **Проверка на клиента** - disable бутона след click
3. **Server-side проверка** - търсене за дубликати

```python
# Използване на idempotency key
headers = {
    "Content-Type": "application/json",
    "Idempotency-Key": "unique-request-id-12345"
}
```

</CollapsibleSection>

</ExerciseCard>

---

## Трудни Упражнения (HARD)

<ExerciseCard difficulty="hard">

### Задача 14: Python GET Заявка

**Coding** - Напишете Python скрипт, който прави GET заявка към `https://jsonplaceholder.typicode.com/posts/1` и принтира заглавието на поста.

<CollapsibleSection title="💡 Подсказка">

1. Използвайте `requests.get()`
2. Парснете JSON с `.json()`
3. Достъпете полето `title`

</CollapsibleSection>

<CollapsibleSection title="✅ Решение">

```python
import requests

# GET заявка
url = "https://jsonplaceholder.typicode.com/posts/1"
response = requests.get(url)

# Проверка на статус кода
if response.status_code == 200:
    post = response.json()
    print(f"Title: {post['title']}")
else:
    print(f"Error: {response.status_code}")
```

**Output:**
```
Title: sunt aut facere repellat provident occaecati excepturi optio reprehenderit
```

**Разширена версия с error handling:**

```python
import requests

def get_post_title(post_id):
    url = f"https://jsonplaceholder.typicode.com/posts/{post_id}"

    try:
        response = requests.get(url)
        response.raise_for_status()  # Хвърля exception за 4xx/5xx

        post = response.json()
        return post.get('title', 'No title found')

    except requests.exceptions.HTTPError as e:
        return f"HTTP Error: {e}"
    except requests.exceptions.RequestException as e:
        return f"Request Error: {e}"

# Използване
title = get_post_title(1)
print(f"Title: {title}")
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="hard">

### Задача 15: Python POST Заявка

**Coding** - Напишете Python скрипт за създаване на нов коментар чрез JSONPlaceholder API (`POST https://jsonplaceholder.typicode.com/comments`). Включете правилните headers и обработете response-а.

Данни за коментара:
- postId: 1
- name: "My Comment"
- email: "test@example.com"
- body: "This is a test comment."

<CollapsibleSection title="💡 Подсказка">

1. Използвайте `requests.post()`
2. Подайте JSON данни с `json=` параметър
3. Задайте `Content-Type` header
4. Проверете за status code 201

</CollapsibleSection>

<CollapsibleSection title="✅ Решение">

```python
import requests

url = "https://jsonplaceholder.typicode.com/comments"

# Данни за новия коментар
comment_data = {
    "postId": 1,
    "name": "My Comment",
    "email": "test@example.com",
    "body": "This is a test comment."
}

# Headers
headers = {
    "Content-Type": "application/json"
}

# POST заявка
response = requests.post(url, json=comment_data, headers=headers)

# Обработка на response
if response.status_code == 201:
    created_comment = response.json()
    print("Comment created successfully!")
    print(f"ID: {created_comment.get('id')}")
    print(f"Name: {created_comment.get('name')}")
    print(f"Email: {created_comment.get('email')}")
    print(f"Body: {created_comment.get('body')}")
else:
    print(f"Error: {response.status_code}")
    print(response.text)
```

**Expected Output:**
```
Comment created successfully!
ID: 501
Name: My Comment
Email: test@example.com
Body: This is a test comment.
```

**Бележка:** JSONPlaceholder връща fake ID (501), но реално не записва данните.

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="hard">

### Задача 16: 401 Unauthorized Диагностика

**Troubleshooting** - Получавате `401 Unauthorized` грешка при правене на API заявка. Избройте три възможни причини и как бихте диагностицирали всяка от тях.

<CollapsibleSection title="💡 Подсказка">

401 е свързан с **автентикация**. Помислете за:
- Presence на credentials
- Validity на credentials
- Format на credentials

</CollapsibleSection>

<CollapsibleSection title="✅ Решение">

**Причина 1: Липсващ Authorization header**

*Диагностика:*
- Проверете дали header-ът е включен в заявката
- В Postman: Headers таб
- В code: print headers преди изпращане

```python
# Грешно - липсва header
requests.get(url)

# Правилно
headers = {"Authorization": "Bearer token123"}
requests.get(url, headers=headers)
```

**Причина 2: Изтекъл или невалиден token**

*Диагностика:*
- Проверете expiration time на токена
- Опитайте да генерирате нов токен
- Decode JWT токен (jwt.io) за проверка на exp claim

**Причина 3: Грешен формат на Authorization header**

*Диагностика:*
- Проверете точния формат в API документацията
- Често срещани грешки:
  - `Bearer` vs `bearer` (case sensitivity)
  - Липсващ space: `BearerToken` вместо `Bearer Token`
  - Грешен тип: `Basic` вместо `Bearer`

```python
# Грешни формати
"Authorization": "token123"           # Липсва Bearer
"Authorization": "bearer token123"    # Малка буква
"Authorization": "BearerToken123"     # Липсва space

# Правилен формат
"Authorization": "Bearer token123"
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="hard">

### Задача 17: Python Code Debugging

**Debugging** - Намерете всички грешки в следния код, които ще предотвратят успешна POST заявка:

```python
import requests

URL = "https://api.example.com/items"

data = {
    'name': 'Widget',
    'price': 29.99
}

response = requests.post(URL, body=data)

if response.status_code == 200:
    print("Item created successfully!")
```

<CollapsibleSection title="💡 Подсказка">

Проверете за:
1. Правилен параметър за данни
2. Липсващи headers
3. Очакван status code за POST

</CollapsibleSection>

<CollapsibleSection title="✅ Решение">

**Грешки:**

1. **`body=data`** - трябва да е `json=data` или `data=json.dumps(data)`
2. **Липсва `Content-Type` header** - необходим за JSON
3. **Status code 200** - POST връща **201 Created**, не 200

**Оригинален код (грешен):**
```python
response = requests.post(URL, body=data)  # ❌

if response.status_code == 200:  # ❌
```

**Коригиран код:**
```python
import requests
import json

URL = "https://api.example.com/items"

data = {
    'name': 'Widget',
    'price': 29.99
}

headers = {
    "Content-Type": "application/json"
}

# Вариант 1: json= параметър (препоръчително)
response = requests.post(URL, json=data, headers=headers)

# Вариант 2: data= с json.dumps()
# response = requests.post(URL, data=json.dumps(data), headers=headers)

if response.status_code == 201:  # Правилен код за създаване
    print("Item created successfully!")
    print(response.json())
else:
    print(f"Error: {response.status_code}")
    print(response.text)
```

**Забележка:** При използване на `json=` параметър, `requests` автоматично добавя `Content-Type: application/json` header.

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="hard">

### Задача 18: GET vs POST Таблица

**Completion** - Попълнете следната таблица, сравняваща GET и POST заявки:

| Аспект | GET | POST |
|--------|-----|------|
| Цел | ? | ? |
| Идемпотентен? | ? | ? |
| Данни в | ? | ? |
| Кеширане | ? | ? |

<CollapsibleSection title="💡 Подсказка">

- GET е за четене, POST е за създаване
- Идемпотентност означава безопасност за повторение
- GET данните са в URL, POST - в body
- Само идемпотентни заявки могат да се кешират

</CollapsibleSection>

<CollapsibleSection title="✅ Решение">

| Аспект | GET | POST |
|--------|-----|------|
| **Цел** | Извличане на данни (Read) | Създаване на ресурси (Create) |
| **Идемпотентен?** | Да | Не |
| **Данни в** | URL (path/query params) | Request body |
| **Кеширане** | Да | Не |

**Допълнителни разлики:**

| Аспект | GET | POST |
|--------|-----|------|
| Request Body | Няма (или игнориран) | JSON (обикновено) |
| Видимост на данните | Видими в URL/логове | Скрити в body |
| URL дължина | Ограничена (~2000 символа) | Без ограничение |
| Browser history | Запазва се | Не се запазва |
| Bookmarkable | Да | Не |

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="hard">

### Задача 19: E-commerce API Design

**Design** - За e-commerce приложение, определете дали всяка операция трябва да използва GET или POST. Обяснете защо.

1. Преглед на детайли за продукт
2. Добавяне на артикул в количката
3. Търсене на продукти по ключова дума
4. Изпращане на клиентски отзив
5. Проверка на статус на поръчка

<CollapsibleSection title="💡 Подсказка">

- GET за операции, които само четат данни
- POST за операции, които създават или променят данни

</CollapsibleSection>

<CollapsibleSection title="✅ Решение">

| Операция | Метод | Обяснение |
|----------|-------|-----------|
| **1. Преглед на продукт** | GET | Само четене на данни, идемпотентно |
| **2. Добавяне в количка** | POST | Създава нов запис, променя състояние |
| **3. Търсене на продукти** | GET | Четене с филтриране, не променя нищо |
| **4. Изпращане на отзив** | POST | Създава нов ресурс (review) |
| **5. Статус на поръчка** | GET | Само четене на съществуващи данни |

**Примерни endpoints:**

```
1. GET  /api/products/123
2. POST /api/cart/items
   Body: {"productId": 123, "quantity": 2}
3. GET  /api/products?search=laptop&category=electronics
4. POST /api/products/123/reviews
   Body: {"rating": 5, "comment": "Great product!"}
5. GET  /api/orders/456/status
```

**Ключово правило:**
- Операцията **променя** ли данни на сървъра? → POST
- Операцията само **чете** данни? → GET

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="hard">

### Задача 20: Complete Python Script

**Comprehensive Coding** - Напишете Python скрипт, който:

1. Прави GET заявка за извличане на всички потребители от `https://jsonplaceholder.typicode.com/users`
2. Намира потребителя с username "Bret"
3. Използва ID-то на този потребител за създаване на нов пост чрез POST заявка
4. Обработва потенциални грешки с проверка на status кодове
5. Принтира информативен output на всяка стъпка

<CollapsibleSection title="💡 Подсказка">

Структурирайте кода:
1. GET всички потребители
2. Filter за username == "Bret"
3. Extract user ID
4. POST нов пост с този userId
5. Handle errors на всяка стъпка

</CollapsibleSection>

<CollapsibleSection title="✅ Решение">

```python
import requests

BASE_URL = "https://jsonplaceholder.typicode.com"

def main():
    # Step 1: GET всички потребители
    print("Step 1: Fetching all users...")
    users_response = requests.get(f"{BASE_URL}/users")

    if users_response.status_code != 200:
        print(f"Error fetching users: {users_response.status_code}")
        return

    users = users_response.json()
    print(f"Found {len(users)} users")

    # Step 2: Намиране на потребител с username "Bret"
    print("\nStep 2: Searching for user 'Bret'...")
    bret_user = None
    for user in users:
        if user['username'] == 'Bret':
            bret_user = user
            break

    if not bret_user:
        print("User 'Bret' not found!")
        return

    print(f"Found user: {bret_user['name']} (ID: {bret_user['id']})")

    # Step 3: Създаване на нов пост за този потребител
    print("\nStep 3: Creating new post...")
    new_post = {
        "title": "Hello from Bret",
        "body": "This is a post created via API.",
        "userId": bret_user['id']
    }

    headers = {
        "Content-Type": "application/json"
    }

    post_response = requests.post(
        f"{BASE_URL}/posts",
        json=new_post,
        headers=headers
    )

    # Step 4: Проверка на резултата
    if post_response.status_code == 201:
        created_post = post_response.json()
        print("Post created successfully!")
        print(f"  Post ID: {created_post['id']}")
        print(f"  Title: {created_post['title']}")
        print(f"  User ID: {created_post['userId']}")
    else:
        print(f"Error creating post: {post_response.status_code}")
        print(post_response.text)

if __name__ == "__main__":
    main()
```

**Expected Output:**
```
Step 1: Fetching all users...
Found 10 users

Step 2: Searching for user 'Bret'...
Found user: Leanne Graham (ID: 1)

Step 3: Creating new post...
Post created successfully!
  Post ID: 101
  Title: Hello from Bret
  User ID: 1
```

**Подобрена версия с exception handling:**

```python
import requests
from requests.exceptions import RequestException

def fetch_users():
    """Fetch all users from API"""
    try:
        response = requests.get(f"{BASE_URL}/users", timeout=10)
        response.raise_for_status()
        return response.json()
    except RequestException as e:
        print(f"Error fetching users: {e}")
        return None

def find_user_by_username(users, username):
    """Find user by username"""
    return next(
        (user for user in users if user['username'] == username),
        None
    )

def create_post(user_id, title, body):
    """Create new post for user"""
    try:
        response = requests.post(
            f"{BASE_URL}/posts",
            json={"title": title, "body": body, "userId": user_id},
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        response.raise_for_status()
        return response.json()
    except RequestException as e:
        print(f"Error creating post: {e}")
        return None
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="hard">

### Задача 21: 422 Error Analysis

**Error Analysis** - API връща следната грешка:

```
HTTP/1.1 422 Unprocessable Entity
Content-Type: application/json

{
  "errors": [
    {"field": "email", "message": "Invalid email format"},
    {"field": "age", "message": "Must be a positive integer"}
  ]
}
```

Оригиналната POST заявка е:
```json
{
  "name": "Test User",
  "email": "invalid-email",
  "age": "twenty-five"
}
```

Обяснете какво е грешно и предоставете коригиран JSON body.

<CollapsibleSection title="💡 Подсказка">

422 Unprocessable Entity означава, че синтаксисът е правилен, но данните са семантично невалидни. Проверете:
- Формат на email
- Тип данни на age

</CollapsibleSection>

<CollapsibleSection title="✅ Решение">

**Проблеми:**

1. **email: "invalid-email"** - не е валиден email формат (липсва @)
2. **age: "twenty-five"** - трябва да е число (integer), не string

**Оригинален JSON (грешен):**
```json
{
  "name": "Test User",
  "email": "invalid-email",    // ❌ Невалиден формат
  "age": "twenty-five"         // ❌ String вместо number
}
```

**Коригиран JSON:**
```json
{
  "name": "Test User",
  "email": "testuser@example.com",
  "age": 25
}
```

**Разлика между 400 и 422:**
- **400 Bad Request** - синтактична грешка (невалиден JSON)
- **422 Unprocessable Entity** - валиден JSON, но невалидни данни

**Best practice за validation:**

```python
def validate_user_data(data):
    errors = []

    # Email validation
    if '@' not in data.get('email', ''):
        errors.append({"field": "email", "message": "Invalid email format"})

    # Age validation
    age = data.get('age')
    if not isinstance(age, int) or age <= 0:
        errors.append({"field": "age", "message": "Must be a positive integer"})

    return errors
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="hard">

### Задача 22: RESTful Blog API Design

**API Design** - Проектирайте RESTful API структура за проста блог платформа. Специфицирайте endpoints (URLs), HTTP методи и примерни request/response bodies за:

1. Получаване на всички блог постове
2. Получаване на единичен блог пост по ID
3. Създаване на нов блог пост
4. Получаване на всички коментари за конкретен пост

<CollapsibleSection title="💡 Подсказка">

Следвайте RESTful конвенции:
- Използвайте nouns (съществителни) за ресурси
- Collections: `/posts`, Single: `/posts/{id}`
- Nested resources: `/posts/{id}/comments`

</CollapsibleSection>

<CollapsibleSection title="✅ Решение">

**1. Получаване на всички блог постове**

```
GET /api/posts
```

Response (200 OK):
```json
{
  "data": [
    {
      "id": 1,
      "title": "First Post",
      "body": "Content here...",
      "author": "John Doe",
      "createdAt": "2024-01-15T10:30:00Z"
    },
    {
      "id": 2,
      "title": "Second Post",
      "body": "More content...",
      "author": "Jane Smith",
      "createdAt": "2024-01-16T14:00:00Z"
    }
  ],
  "meta": {
    "total": 2,
    "page": 1,
    "limit": 10
  }
}
```

**2. Получаване на единичен пост**

```
GET /api/posts/1
```

Response (200 OK):
```json
{
  "id": 1,
  "title": "First Post",
  "body": "Full content of the post...",
  "author": "John Doe",
  "createdAt": "2024-01-15T10:30:00Z",
  "updatedAt": "2024-01-15T10:30:00Z"
}
```

Response (404 Not Found):
```json
{
  "error": "Post not found",
  "statusCode": 404
}
```

**3. Създаване на нов пост**

```
POST /api/posts
Content-Type: application/json
Authorization: Bearer token123
```

Request Body:
```json
{
  "title": "My New Post",
  "body": "This is the content of my new blog post.",
  "author": "John Doe"
}
```

Response (201 Created):
```json
{
  "id": 3,
  "title": "My New Post",
  "body": "This is the content of my new blog post.",
  "author": "John Doe",
  "createdAt": "2024-01-17T09:00:00Z"
}
```

**4. Коментари за конкретен пост**

```
GET /api/posts/1/comments
```

Response (200 OK):
```json
{
  "data": [
    {
      "id": 101,
      "postId": 1,
      "author": "Reader1",
      "body": "Great post!",
      "createdAt": "2024-01-15T12:00:00Z"
    },
    {
      "id": 102,
      "postId": 1,
      "author": "Reader2",
      "body": "Very informative.",
      "createdAt": "2024-01-15T14:30:00Z"
    }
  ],
  "meta": {
    "total": 2
  }
}
```

**Обобщение на endpoints:**

| Операция | Method | Endpoint | Status Code |
|----------|--------|----------|-------------|
| List posts | GET | `/api/posts` | 200 |
| Get post | GET | `/api/posts/{id}` | 200/404 |
| Create post | POST | `/api/posts` | 201 |
| List comments | GET | `/api/posts/{id}/comments` | 200 |

</CollapsibleSection>

</ExerciseCard>
