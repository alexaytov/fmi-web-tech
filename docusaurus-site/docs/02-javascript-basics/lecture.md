---
title: "Лекция"
sidebar_position: 1
slug: lecture
tags: [javascript, web-development, programming]
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

# Основи на JavaScript

<ViewSlidesButton lectureSlug="javascript-basics" />

<QuickSummary>

**Ключови познания:**
- **JavaScript** добавя интерактивност и динамично поведение към статичните HTML/CSS страници
- Използвайте **`let`** и **`const`** за декларация на променливи (избягвайте `var`)
- JavaScript е **динамично типизиран** - типът се определя по време на изпълнение
- **Функциите** са първокласни обекти - могат да се присвояват на променливи и предават като аргументи
- **Closures** позволяват на функциите да "помнят" променливи от външния си обхват

</QuickSummary>

<LearningObjectives objectives={[
  "Разбирате JS синтаксис и типове данни - да декларирате променливи, идентифицирате примитивни типове и пишете базови изрази",
  "Прилагате контролни структури - if/else, switch и цикли за вземане на решения и итерация",
  "Създавате и използвате функции - дефинирате функции с параметри, връщате стойности и разбирате scope",
  "Debugging и trace на код - използвате console.log и DevTools за проследяване и коригиране на JS програми",
  "Прилагате в практически примери - изграждате прости интерактивни функционалности като валидация на форми"
]} />

---

## Въведение: Какво е JavaScript?

<WhyBox title="Защо JavaScript е задължителен за уеб разработчиците?">

JavaScript е **езикът, който вдъхва живот на уеб страниците**. Докато HTML предоставя структурата и CSS - визуалния стил, JavaScript добавя интерактивност и динамично поведение.

**Без JavaScript:**
- Статични страници, които не реагират на потребителски действия
- Няма валидация на форми в реално време
- Няма анимации и интерактивни елементи

**С JavaScript:**
- Динамично съдържание, което се обновява без презареждане
- Богато потребителско изживяване с анимации и feedback
- Single Page Applications (SPA) с React, Vue, Angular

</WhyBox>

<InfoBox title="Ролята на JavaScript в Web Development">

<img
  src={useBaseUrl('/img/diagrams/javascript/web-triad.svg')}
  alt="HTML, CSS и JavaScript - структура, стил и поведение"
  style={{maxWidth: '700px', margin: '0 auto', display: 'block'}}
/>

**JavaScript прави статичните страници динамични чрез:**

- **DOM манипулация** - Променя съдържание, стилове и структура на HTML елементите в реално време
- **Интерактивни елементи** - Анимации, попъп прозорци, форми за валидация, менюта
- **Клиент-странично изпълнение** - Работи директно в браузъра без нужда от сървърни заявки

</InfoBox>

---

## Реални Приложения и Професионална Значимост

<Grid columns={2}>
  <Card title="Приложения" icon="🌐">

    - **Google, Facebook, Amazon** - динамично съдържание
    - **Single Page Applications** - React, Angular, Vue.js
    - **Мобилни приложения** - React Native
    - **Desktop приложения** - Electron
    - **Backend** - Node.js

  </Card>
  <Card title="Кариерни предимства" icon="💼">

    - ~70% от разработчиците използват JavaScript
    - Основа на фронт-енд разработката
    - Лесен за учене с огромна екосистема
    - Високо търсене в почти всяка индустрия
    - npm - най-големият пакетен мениджър

  </Card>
</Grid>

---

## Предварителни Знания

<InfoBox title="Какво трябва да знаете преди JavaScript?">

**Преди да продължите, уверете се, че:**

- **HTML и CSS основи** - Можете да създадете проста HTML страница с CSS стилове
- **Базови програмистки концепции** - Запознати сте с понятия като променливи, цикли, условия
- **Как работи браузърът** - Разбирате потока HTML → CSS → JS

Ако имате пропуски в HTML/CSS, използвайте ресурси като [MDN Web Docs](https://developer.mozilla.org) за бърз преговор.

</InfoBox>

---

## Синтактични Основи

### Statements и Структура

JavaScript кодът се състои от **инструкции (statements)**, които извършват определени действия. Традиционно се разделят с точка и запетая (`;`):

```javascript
console.log("Hello");
alert("World");
```

<SuccessBox title="Добра практика">

Въпреки че JavaScript има **Automatic Semicolon Insertion (ASI)**, препоръчително е да използвате точка и запетая, за да избегнете неочаквани грешки.

</SuccessBox>

### Коментари

```javascript
// Това е едноредов коментар

/*
 * Това е многоредов коментар.
 * Може да обхваща няколко реда.
 */
```

### Конвенции за Именуване

<InfoBox title="camelCase нотация">

В JavaScript се използва **camelCase** - първата буква е малка, всяка следваща дума започва с главна:

```javascript
let myVariable = "стойност";
let calculateTotalPrice = function() { /* ... */ };
```

**Внимание:** Тирета (`-`) са забранени в имената на променливи!

</InfoBox>

---

## Променливи и Типове Данни

### Деклариране на Променливи

<ComparisonBox
  left={{
    title: "var (стар начин)",
    content: (
      <ul>
        <li>Има <strong>function scope</strong></li>
        <li>Може да бъде предеклариран</li>
        <li>Често води до объркващи грешки</li>
        <li><strong>Избягвайте!</strong></li>
      </ul>
    )
  }}
  right={{
    title: "let и const (ES6+)",
    content: (
      <ul>
        <li>Имат <strong>block scope</strong></li>
        <li><code>let</code> - за променливи стойности</li>
        <li><code>const</code> - за константи</li>
        <li><strong>Препоръчителни!</strong></li>
      </ul>
    )
  }}
/>

```javascript
let message = "Здравейте!";      // Може да се промени
const appName = "My App";         // Константа - не може да се промени
let quantity = 10;

message = "Нов текст";           // OK
// appName = "New Name";          // ГРЕШКА!
```

<WarningBox title="Case-Sensitivity">

JavaScript е **case-sensitive**: `myVariable`, `myvariable` и `MyVariable` са три различни променливи!

</WarningBox>

---

### Примитивни Типове Данни

JavaScript е **динамично типизиран** - типът се определя по време на изпълнение.

<Grid columns={2}>
  <Card title="Основни типове" icon="📦">

    - `string` - Текстови данни
    - `number` - Числа (цели и десетични)
    - `boolean` - `true` или `false`
    - `undefined` - Без присвоена стойност
    - `null` - Изрично празна стойност

  </Card>
  <Card title="ES6+ типове" icon="🆕">

    - `symbol` - Уникални идентификатори
    - `bigint` - Много големи цели числа

  </Card>
</Grid>

```javascript
let name = "Иван";              // string
let age = 30;                   // number
let price = 19.99;              // number
let isActive = true;            // boolean
let car;                        // undefined
let user = null;                // null
```

---

### Референтни Типове

<InfoBox title="Масиви (Arrays)">

**Подредена колекция** от данни. Елементите се достъпват по индекс (започващ от 0):

```javascript
let friends = ["Иван", "Анна", "Катя"];
console.log(friends[0]);      // "Иван"
console.log(friends.length);  // 3
```

</InfoBox>

<InfoBox title="Обекти (Objects)">

**Неподредени двойки ключ-стойност**:

```javascript
let person = {
  name: "Анна",
  age: 25,
  job: "developer"
};
console.log(person.name);      // "Анна"
console.log(person["age"]);    // 25
```

</InfoBox>

---

## Оператори

### Аритметични Оператори

```javascript
let a = 10;
let b = 3;

console.log(a + b);   // 13 (събиране)
console.log(a - b);   // 7  (изваждане)
console.log(a * b);   // 30 (умножение)
console.log(a / b);   // 3.33... (деление)
console.log(a % b);   // 1  (остатък)
console.log(a ** b);  // 1000 (степенуване)

a++;                  // a става 11 (инкремент)
b--;                  // b става 2 (декремент)
```

### Оператори за Сравнение

<WarningBox title="Винаги използвайте === вместо ==">

`==` сравнява само стойности и може да конвертира типове, което води до неочаквани резултати:

```javascript
let x = 5;
let y = '5';

console.log(x == y);   // true  (5 е равно на '5' след конвертиране)
console.log(x === y);  // false (5 не е строго равно на '5')
```

</WarningBox>

Други оператори: `!=`, `!==`, `>`, `<`, `>=`, `<=`

### Логически Оператори

```javascript
let isAdult = true;
let hasLicense = false;

console.log(isAdult && hasLicense);  // false (логическо И)
console.log(isAdult || hasLicense);  // true  (логическо ИЛИ)
console.log(!isAdult);               // false (логическо НЕ)
```

---

## Контрол на Потока

### Условни Оператори: if/else

```javascript
let number = 7;

if (number % 2 === 0) {
  console.log("Числото е четно.");
} else {
  console.log("Числото е нечетно.");
}

// Верига if-else-if
let temperature = 20;

if (temperature > 30) {
  console.log("Твърде горещо!");
} else if (temperature > 20) {
  console.log("Приятно топло.");
} else {
  console.log("Хладно.");
}
```

### Switch Statement

```javascript
let day = 3;

switch (day) {
  case 1:
    console.log("Понеделник");
    break;
  case 2:
    console.log("Вторник");
    break;
  case 3:
    console.log("Сряда");
    break;
  default:
    console.log("Друг ден");
}
```

### Тернарен Оператор

```javascript
let age = 18;
let status = (age >= 18) ? "Пълнолетен" : "Непълнолетен";
console.log(status);  // "Пълнолетен"
```

---

## Цикли (Loops)

<Grid columns={3}>
  <Card title="for" icon="🔄">
    Когато знаете колко пъти да се повтори

    ```javascript
    for (let i = 0; i < 5; i++) {
      console.log(i);
    }
    ```
  </Card>
  <Card title="while" icon="🔁">
    Докато условието е вярно

    ```javascript
    let count = 0;
    while (count < 3) {
      console.log(count);
      count++;
    }
    ```
  </Card>
  <Card title="do-while" icon="🔂">
    Изпълнява поне веднъж

    ```javascript
    let j = 0;
    do {
      console.log(j);
      j++;
    } while (j < 1);
    ```
  </Card>
</Grid>

<InfoBox title="break и continue">

- **`break`** - Прекъсва цикъла изцяло
- **`continue`** - Прескача текущата итерация и преминава към следващата

</InfoBox>

---

## Функции

Функциите са **блокове от повторно използваем код**, които могат да бъдат извиквани по команда.

### Function Declaration

```javascript
function greet(name) {
  return "Здравейте, " + name + "!";
}

console.log(greet("Петър"));  // "Здравейте, Петър!"
```

<SuccessBox title="Hoisting">

Function declarations се "издигат" на върха на обхвата - могат да се извикват **преди** дефинирането си:

```javascript
let result = multiply(4, 3);  // Работи!

function multiply(a, b) {
  return a * b;
}
```

</SuccessBox>

### Function Expressions

```javascript
const calculateSum = function(x, y) {
  return x + y;
};

console.log(calculateSum(5, 7));  // 12
```

<WarningBox title="Без Hoisting">

Function expressions **не се издигат** - трябва да се дефинират преди извикване!

</WarningBox>

### Arrow Functions (ES6+)

```javascript
// Кратка форма
const add = (a, b) => a + b;
console.log(add(2, 3));  // 5

// Един параметър - без скоби
const greetUser = name => console.log(`Здравейте, ${name}!`);
greetUser("Мария");

// Многоредово тяло
const processData = (data) => {
  const result = data * 2;
  return result;
};
```

---

## Scope и Closures

<InfoBox title="Визуализация на Scope (Обхват)">

<img
  src={useBaseUrl('/img/diagrams/javascript/scope-visualization.svg')}
  alt="JavaScript Scope - Global, Function и Block scope визуализация"
  style={{maxWidth: '700px', margin: '0 auto', display: 'block'}}
/>

**Видове scope:**
- **Global Scope** - Променливи, достъпни навсякъде
- **Function Scope** - Променливи, видими само във функцията
- **Block Scope** - Променливи с `let`/`const`, видими само в блока `{}`

</InfoBox>

### Closures (Затваряния)

<WhyBox title="Какво е Closure?">

Closure е функция, която **"помни"** променливи от външния си обхват, дори след като външната функция е приключила.

</WhyBox>

```javascript
function createCounter() {
  let count = 0;  // Тази променлива е в обхвата на createCounter

  return function() {  // Това е closure
    count++;
    return count;
  };
}

const counter1 = createCounter();
console.log(counter1());  // 1
console.log(counter1());  // 2

const counter2 = createCounter();  // Нов, независим брояч
console.log(counter2());  // 1
```

---

## Примери и Практически Приложения

### Интерактивна Валидация на Форми

<CollapsibleSection title="HTML структура" icon="📄">

```html
<!DOCTYPE html>
<html lang="bg">
<head>
    <meta charset="UTF-8">
    <title>Форма за регистрация</title>
    <style>
        .error { color: red; font-size: 0.9em; margin-top: 5px; }
        input { display: block; margin-bottom: 10px; padding: 8px; width: 200px; }
        button { padding: 10px 15px; background-color: #007bff; color: white; border: none; cursor: pointer; }
        button:hover { background-color: #0056b3; }
    </style>
</head>
<body>
    <h1>Регистрация</h1>
    <form id="registrationForm">
        <label for="username">Потребителско име:</label>
        <input type="text" id="username" name="username">
        <div id="usernameError" class="error"></div>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email">
        <div id="emailError" class="error"></div>

        <label for="password">Парола:</label>
        <input type="password" id="password" name="password">
        <div id="passwordError" class="error"></div>

        <button type="submit">Регистрирай се</button>
    </form>

    <script src="validation.js"></script>
</body>
</html>
```

</CollapsibleSection>

<CollapsibleSection title="JavaScript код" icon="⚡">

```javascript
const registrationForm = document.getElementById("registrationForm");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

registrationForm.addEventListener("submit", function(event) {
    event.preventDefault();  // Спира презареждане на страницата

    let isValid = true;

    // Изчистване на предишни грешки
    usernameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";

    // Валидация на потребителско име
    if (usernameInput.value.trim() === "") {
        usernameError.textContent = "Потребителското име е задължително.";
        isValid = false;
    } else if (usernameInput.value.length < 3) {
        usernameError.textContent = "Потребителското име трябва да е поне 3 символа.";
        isValid = false;
    }

    // Валидация на Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value.trim() === "") {
        emailError.textContent = "Email е задължителен.";
        isValid = false;
    } else if (!emailRegex.test(emailInput.value)) {
        emailError.textContent = "Въведете валиден Email адрес.";
        isValid = false;
    }

    // Валидация на парола
    if (passwordInput.value.trim() === "") {
        passwordError.textContent = "Паролата е задължителна.";
        isValid = false;
    } else if (passwordInput.value.length < 6) {
        passwordError.textContent = "Паролата трябва да е поне 6 символа.";
        isValid = false;
    }

    if (isValid) {
        alert("Формата е успешно изпратена!");
        registrationForm.reset();
    }
});
```

</CollapsibleSection>

---

### Визуализация на Call Stack

<InfoBox title="Как JavaScript изпълнява функции">

<img
  src={useBaseUrl('/img/diagrams/javascript/call-stack.svg')}
  alt="JavaScript Call Stack - визуализация на LIFO изпълнение на функции"
  style={{maxWidth: '700px', margin: '0 auto', display: 'block'}}
/>

JavaScript използва **Call Stack** за проследяване на изпълнението на функциите. Всяка функция се добавя към върха на стека когато се извиква, и се премахва когато завърши.

</InfoBox>

---

## Debugging Основи

<Grid columns={2}>
  <Card title="console.log()" icon="📝">

    Използвайте стратегически за проследяване на стойности:

    ```javascript
    console.log("Стойност:", myVar);
    console.log({ myVar, otherVar });
    ```

  </Card>
  <Card title="DevTools" icon="🔧">

    - **Console** - за `console.log` изходите
    - **Elements** - за DOM промени
    - **Breakpoints** - спиране на изпълнението
    - **Step-through** - ред по ред

  </Card>
</Grid>

<SuccessBox title="Debugging съвет">

Използвайте **`console.trace()`** за да видите пълния call stack в момента на извикване - полезно за разбиране откъде идва извикването на функция.

</SuccessBox>

---

## Обобщение

<Grid columns={2}>
  <Card title="Основни концепции" icon="📚">

    - **`let` и `const`** вместо `var`
    - **Примитивни** vs **Референтни** типове
    - **Function declarations** се издигат (hoisting)
    - **Arrow functions** - кратък синтаксис ES6+
    - **Closures** - функции с памет

  </Card>
  <Card title="Следващи стъпки" icon="🚀">

    - **DOM манипулация** - промяна на HTML/CSS
    - **Events** - реакция на потребителски действия
    - **Async JavaScript** - Promises, async/await
    - **Frameworks** - React, Vue, Angular

  </Card>
</Grid>

<InfoBox title="Ключов извод">

Солидното разбиране на **функции**, **оператори** и **структури от данни** е основата за всеки JavaScript фреймуърк или библиотека. Тези концепции ще ви позволят да учите много по-бързо и ефективно!

</InfoBox>

---

## Допълнителни Ресурси

### Онлайн Материали
- [MDN Web Docs - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Официална документация
- [JavaScript.info](https://javascript.info/) - Модерен JavaScript tutorial
- [Eloquent JavaScript](https://eloquentjavascript.net/) - Безплатна книга онлайн

### Практика
- [freeCodeCamp JavaScript](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/) - Интерактивни уроци
- [Codecademy JavaScript](https://www.codecademy.com/learn/introduction-to-javascript) - Hands-on курсове
- [JavaScript30](https://javascript30.com/) - 30 проекта за 30 дни

### Видео Уроци
- [JavaScript Full Course - freeCodeCamp](https://www.youtube.com/watch?v=PkZNo7MFNFg) - Пълен курс
- [The Net Ninja JavaScript Playlist](https://www.youtube.com/playlist?list=PL4cUxeGkcC9haFPT7J25Q9GRB_ZkFrQAc) - Поредица от уроци
