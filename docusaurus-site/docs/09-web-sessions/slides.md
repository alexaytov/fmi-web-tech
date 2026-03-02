---
title: Уеб Сесии
theme: white
highlightTheme: github
transition: slide
---

# Уеб Сесии

### Какво Представляват, Как да ги Използваме и Защо

---

## Учебни Цели

🎯 **Дефиниране** на уеб сесии и разграничаване от cookies <!-- .element: class="fragment" -->

🎯 **Описване** на жизнения цикъл и потока на данни <!-- .element: class="fragment" -->

🎯 **Имплементиране** на базова употреба в сървърен код <!-- .element: class="fragment" -->

🎯 **Оценяване** на предимства, недостатъци и практики за сигурност <!-- .element: class="fragment" -->

---

## Проблемът: HTTP е Stateless

--

### Какво означава Stateless?

🔄 Всяка HTTP заявка е **независима транзакция** <!-- .element: class="fragment" -->

📭 Сървърът **няма памет** за предишни заявки <!-- .element: class="fragment" -->

❓ Как тогава работят кошници и логин? <!-- .element: class="fragment" -->

--

### Без сесии...

🛒 Кошницата се **изпразва** при всяко зареждане <!-- .element: class="fragment" -->

🔐 Логвате се **отново** за всяко действие <!-- .element: class="fragment" -->

📝 Формулярите **губят** данните между стъпки <!-- .element: class="fragment" -->

---

## Какво са Уеб Сесии?

--

### Дефиниция

> **Уеб сесиите** са сървърни механизми, които поддържат състоянието на потребителя между stateless HTTP заявки чрез уникални session ID-та.

--

### Ключови Елементи

🖧 **Сървърен механизъм** - данните са на сървъра <!-- .element: class="fragment" -->

🔑 **Уникален Session ID** - идентификатор за потребителя <!-- .element: class="fragment" -->

💾 **Поддържане на състояние** - запазва информация <!-- .element: class="fragment" -->

⏱️ **Времево ограничение** - сесиите имат живот <!-- .element: class="fragment" -->

---

## Реални Примери

--

### 🛒 Кошници

- Съхраняват избрани продукти
- Персистират между страници
- Работят до checkout

--

### 🔐 Автентикация

- Проследяват login статус
- Избягват повторно въвеждане
- Контролират достъпа

--

### 📝 Многостъпкови Формуляри

- Запазват частични данни
- Позволяват навигация назад
- Събират всичко накрая

---

## Cookies vs Sessions

--

### 🍪 Cookies

| Аспект | Характеристика |
|--------|---------------|
| **Къде** | В браузъра (client-side) |
| **Размер** | ~4KB максимум |
| **Сигурност** | Видими за потребителя |
| **Използване** | Предпочитания, теми |

--

### 🔐 Sessions

| Аспект | Характеристика |
|--------|---------------|
| **Къде** | На сървъра (само ID в cookie) |
| **Размер** | Практически неограничен |
| **Сигурност** | Данните са скрити |
| **Използване** | Login, cart, чувствителни данни |

--

### Ключова Разлика

> 💡 Sessions използват cookie **само** за Session ID.
> Реалните данни са на **сървъра**.

---

## Жизнен Цикъл на Сесията

--

### 1️⃣ Създаване

```
Потребител → Сървър
         ←── Session ID (abc123)

Сървър съхранява:
{ abc123: { user: null, cart: [] } }
```

--

### 2️⃣ Активна Употреба

```
Потребител + Cookie(abc123) → Сървър
Сървър: Намери данни за abc123
Сървър: Обнови cart, user info
         ←── Response
```

--

### 3️⃣ Timeout

⏰ 20-30 минути неактивност <!-- .element: class="fragment" -->

🗑️ Сесията се **инвалидира** автоматично <!-- .element: class="fragment" -->

👤 Потребителят става "нов" посетител <!-- .element: class="fragment" -->

--

### 4️⃣ Унищожаване

```javascript
// При logout
req.session.destroy();

// PHP
session_destroy();
```

---

## Имплементация

--

### Node.js / Express

```javascript
const session = require('express-session');

app.use(session({
  secret: 'my_secret_key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));
```

--

### Използване в Route

```javascript
app.get('/', (req, res) => {
  // Четене и запис
  req.session.visits = (req.session.visits || 0) + 1;

  res.send(`Посещения: ${req.session.visits}`);
});
```

--

### PHP

```php
<?php
session_start();

$_SESSION['visits'] = ($_SESSION['visits'] ?? 0) + 1;

echo "Посещения: " . $_SESSION['visits'];
?>
```

---

## Case Study: Shopping Cart

--

### Потокът на Данни

1️⃣ **Добави в кошница** → POST + Session ID <!-- .element: class="fragment" -->

2️⃣ Сървърът **обновява** session данните <!-- .element: class="fragment" -->

3️⃣ **Навигация** → GET + Session ID <!-- .element: class="fragment" -->

4️⃣ Сървърът **чете** и показва кошницата <!-- .element: class="fragment" -->

5️⃣ **Checkout** → Всички данни от сесията <!-- .element: class="fragment" -->

---

## Предимства

--

### ✅ Защо да използваме сесии?

🔒 **Сигурност** - данните са скрити от клиента <!-- .element: class="fragment" -->

🎯 **Персонализация** - индивидуален опит <!-- .element: class="fragment" -->

⚡ **Оптимизация** - плавен потребителски поток <!-- .element: class="fragment" -->

📦 **Гъвкавост** - съхраняват всякакви данни <!-- .element: class="fragment" -->

---

## Недостатъци

--

### ⚠️ Предизвикателства

📈 **Scalability** - сложно в multi-server среда <!-- .element: class="fragment" -->

💾 **Memory** - консумация при много потребители <!-- .element: class="fragment" -->

🎭 **Hijacking** - откраднат Session ID = пълен достъп <!-- .element: class="fragment" -->

🔄 **Serialization** - overhead при external storage <!-- .element: class="fragment" -->

---

## Мащабиране

--

### Проблемът

```
User → LB → Server A (създава session)
User → LB → Server B (няма тази session!) ❌
```

--

### Решението: Redis

```javascript
const RedisStore = require('connect-redis')(session);

app.use(session({
  store: new RedisStore({ client: redisClient }),
  // ...
}));
```

--

### Архитектура

```
        ┌─────────────┐
        │ Load Balancer│
        └──────┬──────┘
               │
    ┌──────────┼──────────┐
    │          │          │
    ▼          ▼          ▼
 Server A   Server B   Server C
    │          │          │
    └──────────┼──────────┘
               │
               ▼
        ┌─────────────┐
        │    Redis    │
        │ (Sessions)  │
        └─────────────┘
```

---

## Сигурност

--

### 🔐 Session Fixation

**Атака:** Атакуващ принуждава жертва да използва известен Session ID

**Защита:** Регенерирай ID след login

```javascript
req.session.regenerate(err => {
  req.session.user = authenticatedUser;
});
```

--

### 🍪 Cookie Атрибути

| Атрибут | Защита от |
|---------|-----------|
| `HttpOnly` | XSS (JavaScript кражба) |
| `Secure` | Man-in-the-middle |
| `SameSite` | CSRF атаки |

--

### Пълна Конфигурация

```javascript
cookie: {
  secure: true,      // HTTPS only
  httpOnly: true,    // No JS access
  sameSite: 'strict', // No cross-site
  maxAge: 1800000    // 30 min
}
```

---

## Security Best Practices

--

### Checklist

✅ Регенерирай Session ID при login <!-- .element: class="fragment" -->

✅ Използвай HttpOnly + Secure + SameSite <!-- .element: class="fragment" -->

✅ Кратък timeout (20-30 мин) <!-- .element: class="fragment" -->

✅ Унищожавай сесията при logout <!-- .element: class="fragment" -->

✅ Използвай HTTPS навсякъде <!-- .element: class="fragment" -->

✅ Силен, случаен secret key <!-- .element: class="fragment" -->

---

## Sessions vs JWT

--

### Сравнение

| Критерий | Sessions | JWT |
|----------|----------|-----|
| **Състояние** | Server-side | В токена |
| **Scalability** | Нужен store | Stateless |
| **Logout** | Instant | Сложно |
| **Use case** | Традиционни apps | Микросървиси |

--

### Кога какво?

**Sessions:** Когато имате нужда от instant logout, sensitive data, традиционни MPA

**JWT:** Микросървиси, mobile apps, API токени, SSO

---

## Обобщение

--

### Ключови Точки

🔑 Sessions = Server-side state + Client-side ID <!-- .element: class="fragment" -->

🍪 Cookie съдържа само Session ID <!-- .element: class="fragment" -->

⚙️ Жизнен цикъл: Create → Use → Timeout → Destroy <!-- .element: class="fragment" -->

🔒 Сигурност: Regenerate ID, HttpOnly, Secure, SameSite <!-- .element: class="fragment" -->

📈 Scaling: Централизиран store (Redis) <!-- .element: class="fragment" -->

---

## Практически Съвети

--

### Do's ✅

✅ Използвай готови библиотеки (express-session, etc.) <!-- .element: class="fragment" -->

✅ Съхранявай минимум данни в сесията <!-- .element: class="fragment" -->

✅ Логвай session events за debugging <!-- .element: class="fragment" -->

✅ Тествай timeout сценарии <!-- .element: class="fragment" -->

--

### Don'ts ❌

❌ НЕ съхранявай пароли в сесията <!-- .element: class="fragment" -->

❌ НЕ доверявай на client-side данни <!-- .element: class="fragment" -->

❌ НЕ използвай слаби secrets <!-- .element: class="fragment" -->

❌ НЕ забравяй logout функционалност <!-- .element: class="fragment" -->

---

# Въпроси?

### 🤔

---

## Ресурси

📚 [MDN: HTTP Cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)

📚 [OWASP Session Management](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html)

📚 [express-session](https://www.npmjs.com/package/express-session)

Note:
Препоръчителни ресурси за допълнително четене след лекцията.
