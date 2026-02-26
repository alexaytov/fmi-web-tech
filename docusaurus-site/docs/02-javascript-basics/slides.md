---
title: JavaScript Основи
theme: white
highlightTheme: github
transition: slide
---

# JavaScript Основи

### Динамичен език за интерактивни уеб приложения

Note:
Добре дошли в лекцията по JavaScript основи. Днес ще разгледаме фундаменталните концепции на езика JavaScript.

---

## Учебни Цели

🎯 Разбирате ролята на JavaScript в уеб разработката <!-- .element: class="fragment" -->

🎯 Работите с променливи, типове данни и оператори <!-- .element: class="fragment" -->

🎯 Използвате условни конструкции и цикли <!-- .element: class="fragment" -->

🎯 Създавате и извиквате функции <!-- .element: class="fragment" -->

🎯 Разбирате scope и closures <!-- .element: class="fragment" -->

Note:
Това са основните цели, които ще постигнем в тази лекция.

---

## Защо JavaScript?

Note:
Нека първо разберем защо JavaScript е толкова важен за уеб разработката.

--

### Триадата на Уеба

<svg viewBox="0 0 500 200" style="max-width: 500px; margin: 0 auto; display: block;">
  <defs>
    <linearGradient id="htmlGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#e44d26"/><stop offset="100%" stop-color="#f16529"/>
    </linearGradient>
    <linearGradient id="cssGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#264de4"/><stop offset="100%" stop-color="#2965f1"/>
    </linearGradient>
    <linearGradient id="jsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f7df1e"/><stop offset="100%" stop-color="#e5cd00"/>
    </linearGradient>
  </defs>
  <rect x="20" y="60" width="120" height="80" rx="8" fill="url(#htmlGrad)"/>
  <text x="80" y="95" text-anchor="middle" fill="white" font-size="14" font-weight="bold">HTML</text>
  <text x="80" y="115" text-anchor="middle" fill="white" font-size="10">Структура</text>
  <rect x="190" y="60" width="120" height="80" rx="8" fill="url(#cssGrad)"/>
  <text x="250" y="95" text-anchor="middle" fill="white" font-size="14" font-weight="bold">CSS</text>
  <text x="250" y="115" text-anchor="middle" fill="white" font-size="10">Стил</text>
  <rect x="360" y="60" width="120" height="80" rx="8" fill="url(#jsGrad)"/>
  <text x="420" y="95" text-anchor="middle" fill="#333" font-size="14" font-weight="bold">JavaScript</text>
  <text x="420" y="115" text-anchor="middle" fill="#333" font-size="10">Поведение</text>
  <path d="M145 100 L185 100" stroke="#666" stroke-width="2" marker-end="url(#arrow)"/>
  <path d="M315 100 L355 100" stroke="#666" stroke-width="2" marker-end="url(#arrow)"/>
</svg>

Note:
HTML определя структурата, CSS стила, а JavaScript добавя интерактивност и поведение.

--

### JavaScript Навсякъде

🌐 **Frontend** - Браузъри, React, Vue, Angular <!-- .element: class="fragment" -->

🖥️ **Backend** - Node.js, Deno, Bun <!-- .element: class="fragment" -->

📱 **Mobile** - React Native, Ionic <!-- .element: class="fragment" -->

🖥️ **Desktop** - Electron, Tauri <!-- .element: class="fragment" -->

Note:
JavaScript е единственият език, който работи навсякъде - от браузъра до сървъра.

---

## Променливи

Note:
Нека започнем с основите - как да съхраняваме данни в JavaScript.

--

### let, const, var

```javascript
// const - константа (не може да се презапише)
const PI = 3.14159;
const name = "JavaScript";

// let - може да се променя
let counter = 0;
counter = 1; // OK

// var - старият начин (избягвайте!)
var oldStyle = "deprecated";
```

Note:
Винаги предпочитайте const, използвайте let когато стойността трябва да се промени, избягвайте var.

--

### Сравнение на Ключовите Думи

| Характеристика | `var` | `let` | `const` |
|----------------|-------|-------|---------|
| Scope | Function | Block | Block |
| Hoisting | ✅ Да | ⚠️ TDZ | ⚠️ TDZ |
| Reassign | ✅ Да | ✅ Да | ❌ Не |
| Redeclare | ✅ Да | ❌ Не | ❌ Не |

Note:
TDZ означава Temporal Dead Zone - променливата съществува, но не може да се достъпи преди декларацията.

--

### Правила за Именуване

```javascript
// ✅ Правилно
let userName = "John";
let _privateVar = 42;
let $element = document.body;
let camelCaseNaming = true;

// ❌ Грешно
let 123abc = "error";      // не започва с цифра
let my-variable = "error"; // без тирета
let class = "error";       // запазена дума
```

Note:
Използвайте camelCase за променливи и функции, UPPER_SNAKE_CASE за константи.

---

## Типове Данни

Note:
JavaScript има динамична типизация - променливите могат да сменят типа си.

--

### Примитивни Типове

```javascript
// String - текст
const message = "Hello, World!";
const template = `Sum: ${1 + 2}`;

// Number - числа
const integer = 42;
const float = 3.14;
const infinity = Infinity;

// Boolean - логически
const isActive = true;
const isComplete = false;
```

Note:
JavaScript има 7 примитивни типа данни.

--

### Специални Стойности

```javascript
// null - умишлено липсваща стойност
let user = null;

// undefined - недефинирана стойност
let data;
console.log(data); // undefined

// Symbol - уникален идентификатор
const id = Symbol("id");

// BigInt - големи числа
const big = 9007199254740991n;
```

Note:
null и undefined са различни - null е умишлено зададена, undefined означава, че стойността не е дефинирана.

--

### typeof Оператор

```javascript
typeof "hello"     // "string"
typeof 42          // "number"
typeof true        // "boolean"
typeof undefined   // "undefined"
typeof null        // "object" ⚠️ bug!
typeof Symbol()    // "symbol"
typeof {}          // "object"
typeof []          // "object"
typeof function(){}// "function"
```

Note:
typeof null връща "object" - това е известен bug от първата версия на JavaScript.

---

## Оператори

Note:
Операторите ни позволяват да извършваме операции върху данните.

--

### Аритметични Оператори

```javascript
let a = 10, b = 3;

console.log(a + b);  // 13 - събиране
console.log(a - b);  // 7  - изваждане
console.log(a * b);  // 30 - умножение
console.log(a / b);  // 3.33... - деление
console.log(a % b);  // 1  - остатък
console.log(a ** b); // 1000 - степенуване

// Increment/Decrement
let x = 5;
x++;  // 6
x--;  // 5
```

Note:
Операторът ** за степенуване е добавен в ES2016.

--

### Сравнение: === vs ==

```javascript
// === Строго равенство (препоръчително!)
5 === 5      // true
5 === "5"    // false
null === undefined // false

// == Абстрактно равенство (избягвайте!)
5 == "5"     // true (type coercion!)
null == undefined // true
0 == false   // true
"" == false  // true
```

⚠️ **Винаги използвайте `===` и `!==`!**

Note:
Двойното равенство прави type coercion, което води до неочаквани резултати.

--

### Логически Оператори

```javascript
// AND - и двете трябва да са true
true && true   // true
true && false  // false

// OR - поне едното трябва да е true
true || false  // true
false || false // false

// NOT - обръща стойността
!true   // false
!false  // true
!!0     // false (double negation for boolean)
```

Note:
Логическите оператори се използват за комбиниране на условия.

--

### Short-Circuit Evaluation

```javascript
// AND връща първата falsy или последната стойност
const result1 = "hello" && 42;      // 42
const result2 = 0 && "hello";       // 0

// OR връща първата truthy или последната стойност
const result3 = "" || "default";    // "default"
const result4 = "value" || "default"; // "value"

// Nullish coalescing (??) - само null/undefined
const result5 = 0 ?? "default";     // 0
const result6 = null ?? "default";  // "default"
```

Note:
Short-circuit evaluation е полезно за задаване на default стойности.

---

## Контролни Структури

Note:
Контролните структури определят потока на изпълнение на програмата.

--

### if/else

```javascript
const age = 18;

if (age >= 18) {
  console.log("Пълнолетен");
} else if (age >= 13) {
  console.log("Тийнейджър");
} else {
  console.log("Дете");
}

// Тернарен оператор
const status = age >= 18 ? "adult" : "minor";
```

Note:
Тернарният оператор е кратък начин за прости условия.

--

### switch

```javascript
const day = "Monday";

switch (day) {
  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
  case "Friday":
    console.log("Работен ден");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Уикенд");
    break;
  default:
    console.log("Невалиден ден");
}
```

Note:
Не забравяйте break - иначе изпълнението продължава в следващия case.

--

### for Цикъл

```javascript
// Класически for
for (let i = 0; i < 5; i++) {
  console.log(i); // 0, 1, 2, 3, 4
}

// for...of - за масиви и итерируеми обекти
const fruits = ["apple", "banana", "cherry"];
for (const fruit of fruits) {
  console.log(fruit);
}

// for...in - за свойства на обекти
const obj = { a: 1, b: 2 };
for (const key in obj) {
  console.log(key, obj[key]);
}
```

Note:
for...of е предпочитан за масиви, for...in за обекти.

--

### while и do...while

```javascript
// while - проверява условието първо
let count = 0;
while (count < 3) {
  console.log(count);
  count++;
}

// do...while - изпълнява поне веднъж
let num = 0;
do {
  console.log(num);
  num++;
} while (num < 3);
```

Note:
do...while гарантира поне едно изпълнение на цикъла.

--

### break и continue

```javascript
// break - прекратява цикъла
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i); // 0, 1, 2, 3, 4
}

// continue - пропуска текущата итерация
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i); // 0, 1, 3, 4
}
```

Note:
break и continue променят нормалния поток на цикъла.

---

## Функции

Note:
Функциите са основен градивен елемент в JavaScript.

--

### Деклариране на Функции

```javascript
// Function Declaration
function greet(name) {
  return `Hello, ${name}!`;
}

// Function Expression
const greet2 = function(name) {
  return `Hello, ${name}!`;
};

// Извикване
console.log(greet("World")); // Hello, World!
```

Note:
Function declarations се hoisting-ват, expressions не се.

--

### Arrow Functions

```javascript
// Arrow function - кратък синтаксис
const add = (a, b) => a + b;

// С един параметър - без скоби
const double = x => x * 2;

// С тяло
const multiply = (a, b) => {
  const result = a * b;
  return result;
};

console.log(add(2, 3));    // 5
console.log(double(4));    // 8
console.log(multiply(3, 4)); // 12
```

Note:
Arrow functions нямат собствен this контекст - наследяват го от родителския scope.

--

### Default Parameters

```javascript
// Default стойности
function greet(name = "Guest", greeting = "Hello") {
  return `${greeting}, ${name}!`;
}

console.log(greet());              // Hello, Guest!
console.log(greet("John"));        // Hello, John!
console.log(greet("John", "Hi"));  // Hi, John!

// Rest parameters
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3, 4)); // 10
```

Note:
Default parameters и rest parameters са добавени в ES6.

--

### Callback Functions

```javascript
// Функция като аргумент
function processArray(arr, callback) {
  const results = [];
  for (const item of arr) {
    results.push(callback(item));
  }
  return results;
}

const numbers = [1, 2, 3, 4];
const doubled = processArray(numbers, x => x * 2);
console.log(doubled); // [2, 4, 6, 8]

const squared = processArray(numbers, x => x ** 2);
console.log(squared); // [1, 4, 9, 16]
```

Note:
Callback функциите са фундаментална концепция в JavaScript.

---

## Scope (Обхват)

Note:
Scope определя видимостта на променливите в кода.

--

### Видове Scope

<svg viewBox="0 0 400 250" style="max-width: 400px; margin: 0 auto; display: block;">
  <rect x="20" y="20" width="360" height="210" rx="8" fill="#3498db" fill-opacity="0.2" stroke="#3498db" stroke-width="2"/>
  <text x="40" y="45" fill="#3498db" font-size="12" font-weight="bold">Global Scope</text>
  <rect x="40" y="55" width="320" height="160" rx="8" fill="#e67e22" fill-opacity="0.2" stroke="#e67e22" stroke-width="2"/>
  <text x="60" y="80" fill="#e67e22" font-size="12" font-weight="bold">Function Scope</text>
  <rect x="60" y="90" width="280" height="110" rx="8" fill="#27ae60" fill-opacity="0.2" stroke="#27ae60" stroke-width="2"/>
  <text x="80" y="115" fill="#27ae60" font-size="12" font-weight="bold">Block Scope</text>
  <text x="100" y="150" fill="#333" font-size="11">const localVar = "value";</text>
</svg>

Note:
Вътрешните scopes имат достъп до външните, но не и обратното.

--

### Scope в Действие

```javascript
const globalVar = "global";

function outer() {
  const outerVar = "outer";

  function inner() {
    const innerVar = "inner";
    console.log(globalVar); // ✅ достъпна
    console.log(outerVar);  // ✅ достъпна
    console.log(innerVar);  // ✅ достъпна
  }

  inner();
  console.log(innerVar); // ❌ ReferenceError
}

outer();
console.log(outerVar); // ❌ ReferenceError
```

Note:
Всеки вътрешен scope може да вижда променливите от външните scopes.

--

### Block Scope

```javascript
if (true) {
  var varVariable = "var";   // function scoped
  let letVariable = "let";   // block scoped
  const constVar = "const";  // block scoped
}

console.log(varVariable);  // "var" ✅
console.log(letVariable);  // ❌ ReferenceError
console.log(constVar);     // ❌ ReferenceError
```

Note:
var не зачита block scope - още една причина да го избягваме.

--

### Closures

```javascript
function createCounter() {
  let count = 0; // private variable

  return {
    increment() { count++; },
    decrement() { count--; },
    getCount() { return count; }
  };
}

const counter = createCounter();
counter.increment();
counter.increment();
console.log(counter.getCount()); // 2
console.log(counter.count); // undefined (private!)
```

Note:
Closures позволяват функция да "запомни" променливите от своя scope дори след като е върната.

---

## Масиви и Обекти

Note:
Масивите и обектите са референтни типове данни.

--

### Масиви

```javascript
// Създаване
const fruits = ["apple", "banana", "cherry"];
const numbers = new Array(1, 2, 3);

// Достъп
console.log(fruits[0]);     // "apple"
console.log(fruits.length); // 3

// Модификация
fruits.push("date");        // добавя в края
fruits.pop();               // премахва от края
fruits.unshift("apricot");  // добавя в началото
fruits.shift();             // премахва от началото
```

Note:
Масивите в JavaScript са динамични - могат да растат и да се свиват.

--

### Array Methods

```javascript
const numbers = [1, 2, 3, 4, 5];

// map - трансформира всеки елемент
const doubled = numbers.map(x => x * 2);
// [2, 4, 6, 8, 10]

// filter - филтрира елементи
const even = numbers.filter(x => x % 2 === 0);
// [2, 4]

// reduce - редуцира до една стойност
const sum = numbers.reduce((acc, x) => acc + x, 0);
// 15

// find - намира първия съвпадащ елемент
const found = numbers.find(x => x > 3);
// 4
```

Note:
Тези методи са функционални и не мутират оригиналния масив (освен sort и splice).

--

### Обекти

```javascript
// Object literal
const person = {
  name: "John",
  age: 30,
  isStudent: false,
  greet() {
    return `Hello, I'm ${this.name}`;
  }
};

// Достъп до свойства
console.log(person.name);      // "John"
console.log(person["age"]);    // 30
console.log(person.greet());   // "Hello, I'm John"

// Добавяне/промяна на свойства
person.email = "john@example.com";
person.age = 31;
```

Note:
Обектите са колекции от key-value двойки.

--

### Object Methods

```javascript
const person = { name: "John", age: 30 };

// Object.keys() - масив от ключове
console.log(Object.keys(person));
// ["name", "age"]

// Object.values() - масив от стойности
console.log(Object.values(person));
// ["John", 30]

// Object.entries() - масив от [key, value] двойки
console.log(Object.entries(person));
// [["name", "John"], ["age", 30]]

// Spread operator
const updated = { ...person, city: "Sofia" };
// { name: "John", age: 30, city: "Sofia" }
```

Note:
Spread operator е удобен начин за копиране и разширяване на обекти.

--

### Destructuring

```javascript
// Array destructuring
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first);  // 1
console.log(rest);   // [3, 4, 5]

// Object destructuring
const { name, age, city = "Unknown" } = person;
console.log(name);   // "John"
console.log(city);   // "Unknown" (default)

// В параметри на функция
function printPerson({ name, age }) {
  console.log(`${name} is ${age} years old`);
}
```

Note:
Destructuring прави кода по-четим и по-кратък.

---

## Обобщение

--

### Ключови Точки

📌 **Променливи** - използвайте `const` по подразбиране, `let` при нужда <!-- .element: class="fragment" -->

📌 **Типове** - примитивни (string, number, boolean) и референтни (object, array) <!-- .element: class="fragment" -->

📌 **Сравнение** - винаги `===`, никога `==` <!-- .element: class="fragment" -->

📌 **Функции** - declarations, expressions, arrow functions <!-- .element: class="fragment" -->

📌 **Scope** - разбирайте global, function и block scope <!-- .element: class="fragment" -->

📌 **Closures** - функции "помнят" своя scope <!-- .element: class="fragment" -->

Note:
Тези концепции са фундаментални за работата с JavaScript.

--

### Best Practices

✅ Използвайте `const` и `let`, избягвайте `var` <!-- .element: class="fragment" -->

✅ Винаги използвайте `===` за сравнение <!-- .element: class="fragment" -->

✅ Предпочитайте arrow functions за кратки callback-ове <!-- .element: class="fragment" -->

✅ Използвайте destructuring за по-чист код <!-- .element: class="fragment" -->

✅ Познавайте array methods: map, filter, reduce <!-- .element: class="fragment" -->

Note:
Следването на тези практики ще ви помогне да пишете по-добър JavaScript код.

---

## Ресурси

📚 [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

📚 [JavaScript.info](https://javascript.info/)

📚 [Eloquent JavaScript](https://eloquentjavascript.net/)

Note:
Тези ресурси са отлични за допълнително изучаване на JavaScript.

---

# Въпроси?

💬 Имате ли въпроси по темата?

Note:
Отворени сме за въпроси и дискусия.
