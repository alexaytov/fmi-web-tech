---
title: TypeScript Основи
theme: white
highlightTheme: github
transition: slide
---

# TypeScript Основи

### Статична типизация за JavaScript

Note:
Добре дошли в лекцията по TypeScript. Днес ще научите как да пишете по-надежден код с помощта на статични типове.

---

## Учебни Цели

Декларирате и използвате основните TypeScript типове <!-- .element: class="fragment" -->

Работите с масиви, tuples и обектни типове <!-- .element: class="fragment" -->

Пишете type-safe функции с анотации <!-- .element: class="fragment" -->

Настройвате TypeScript проекти с tsconfig.json <!-- .element: class="fragment" -->

Note:
До края на лекцията ще можете да пишете type-safe код и да разбирате предимствата на TypeScript.

---

## Защо TypeScript?

--

### Без TypeScript...

```javascript
function calculateTotal(price, quantity) {
  return price * quantity;
}

calculateTotal("100", 5);
// Резултат: "100100100100100" !!!
```

Грешката се открива чак в production!

Note:
JavaScript е динамично типизиран - типовете се проверяват по време на изпълнение.

--

### С TypeScript...

```typescript
function calculateTotal(price: number, quantity: number): number {
  return price * quantity;
}

calculateTotal("100", 5);
// ERROR: Argument of type 'string' is not
// assignable to parameter of type 'number'
```

Грешката се хваща докато пишете кода!

Note:
TypeScript е статично типизиран - типовете се проверяват при компилация.

---

## Compile-Time vs Runtime Errors

<svg viewBox="0 0 750 320" style="max-width: 750px; margin: 0 auto; display: block;">
  <defs>
    <linearGradient id="jsErrGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#e74c3c"/>
      <stop offset="100%" style="stop-color:#c0392b"/>
    </linearGradient>
    <linearGradient id="tsErrGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#27ae60"/>
      <stop offset="100%" style="stop-color:#1e8449"/>
    </linearGradient>
    <linearGradient id="devGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#3498db"/>
      <stop offset="100%" style="stop-color:#2980b9"/>
    </linearGradient>
    <linearGradient id="prodGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#9b59b6"/>
      <stop offset="100%" style="stop-color:#8e44ad"/>
    </linearGradient>
    <filter id="errShadow" x="-10%" y="-10%" width="120%" height="130%">
      <feDropShadow dx="0" dy="3" stdDeviation="3" flood-color="#000" flood-opacity="0.15"/>
    </filter>
  </defs>
  <!-- Timeline -->
  <rect x="50" y="140" width="650" height="8" rx="4" fill="#ecf0f1"/>
  <!-- Development Phase -->
  <rect x="50" y="90" width="300" height="40" rx="8" fill="url(#devGrad)" filter="url(#errShadow)"/>
  <text x="200" y="116" fill="white" font-family="system-ui, sans-serif" font-size="14" font-weight="600" text-anchor="middle">Development</text>
  <!-- Production Phase -->
  <rect x="400" y="90" width="300" height="40" rx="8" fill="url(#prodGrad)" filter="url(#errShadow)"/>
  <text x="550" y="116" fill="white" font-family="system-ui, sans-serif" font-size="14" font-weight="600" text-anchor="middle">Production</text>
  <!-- TypeScript catches errors early -->
  <g filter="url(#errShadow)">
    <rect x="80" y="180" width="200" height="60" rx="10" fill="url(#tsErrGrad)"/>
    <text x="180" y="205" fill="white" font-family="system-ui, sans-serif" font-size="12" font-weight="700" text-anchor="middle">TypeScript</text>
    <text x="180" y="225" fill="rgba(255,255,255,0.9)" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle">Errors caught HERE</text>
  </g>
  <!-- JavaScript runtime errors -->
  <g filter="url(#errShadow)">
    <rect x="470" y="180" width="200" height="60" rx="10" fill="url(#jsErrGrad)"/>
    <text x="570" y="205" fill="white" font-family="system-ui, sans-serif" font-size="12" font-weight="700" text-anchor="middle">JavaScript</text>
    <text x="570" y="225" fill="rgba(255,255,255,0.9)" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle">Errors crash HERE</text>
  </g>
  <!-- Arrows -->
  <path d="M 180 165 L 180 175" stroke="#27ae60" stroke-width="3" fill="none"/>
  <polygon points="175,175 180,185 185,175" fill="#27ae60"/>
  <path d="M 570 165 L 570 175" stroke="#e74c3c" stroke-width="3" fill="none"/>
  <polygon points="565,175 570,185 575,175" fill="#e74c3c"/>
  <!-- Cost indicators -->
  <text x="180" y="265" fill="#27ae60" font-family="system-ui, sans-serif" font-size="11" font-weight="600" text-anchor="middle">Cost: Low</text>
  <text x="570" y="265" fill="#e74c3c" font-family="system-ui, sans-serif" font-size="11" font-weight="600" text-anchor="middle">Cost: HIGH</text>
</svg>

Note:
Колкото по-рано откриете грешката, толкова по-евтино е да я поправите.

---

## TypeScript Compilation Flow

--

<svg viewBox="0 0 750 280" style="max-width: 750px; margin: 0 auto; display: block;">
  <defs>
    <linearGradient id="tsGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#3178c6"/>
      <stop offset="100%" style="stop-color:#235a97"/>
    </linearGradient>
    <linearGradient id="compGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#f39c12"/>
      <stop offset="100%" style="stop-color:#e67e22"/>
    </linearGradient>
    <linearGradient id="jsOutGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#f7df1e"/>
      <stop offset="100%" style="stop-color:#d4b800"/>
    </linearGradient>
    <linearGradient id="checkGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#27ae60"/>
      <stop offset="100%" style="stop-color:#1e8449"/>
    </linearGradient>
    <filter id="flowShadow" x="-10%" y="-10%" width="120%" height="130%">
      <feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="#000" flood-opacity="0.2"/>
    </filter>
    <marker id="flowArrow" markerWidth="12" markerHeight="8" refX="10" refY="4" orient="auto">
      <polygon points="0 0, 12 4, 0 8" fill="#666"/>
    </marker>
  </defs>
  <!-- TypeScript File -->
  <g filter="url(#flowShadow)">
    <rect x="30" y="70" width="150" height="100" rx="12" fill="url(#tsGrad)"/>
    <text x="105" y="105" fill="white" font-family="system-ui, sans-serif" font-size="14" font-weight="700" text-anchor="middle">.ts file</text>
    <text x="105" y="128" fill="rgba(255,255,255,0.9)" font-family="monospace" font-size="10" text-anchor="middle">let x: number = 5;</text>
    <text x="105" y="155" font-size="24" text-anchor="middle">📄</text>
  </g>
  <!-- Compiler -->
  <g filter="url(#flowShadow)">
    <rect x="280" y="70" width="180" height="100" rx="12" fill="url(#compGrad)"/>
    <text x="370" y="100" fill="white" font-family="system-ui, sans-serif" font-size="13" font-weight="700" text-anchor="middle">TypeScript</text>
    <text x="370" y="118" fill="white" font-family="system-ui, sans-serif" font-size="13" font-weight="700" text-anchor="middle">Compiler (tsc)</text>
    <text x="370" y="155" font-size="24" text-anchor="middle">&#9881;</text>
  </g>
  <!-- JavaScript File -->
  <g filter="url(#flowShadow)">
    <rect x="560" y="70" width="150" height="100" rx="12" fill="url(#jsOutGrad)"/>
    <text x="635" y="105" fill="#333" font-family="system-ui, sans-serif" font-size="14" font-weight="700" text-anchor="middle">.js file</text>
    <text x="635" y="128" fill="rgba(0,0,0,0.7)" font-family="monospace" font-size="10" text-anchor="middle">var x = 5;</text>
    <text x="635" y="155" font-size="24" text-anchor="middle">&#128220;</text>
  </g>
  <!-- Type Checking -->
  <g filter="url(#flowShadow)">
    <rect x="295" y="200" width="150" height="55" rx="10" fill="url(#checkGrad)"/>
    <text x="370" y="225" fill="white" font-family="system-ui, sans-serif" font-size="12" font-weight="600" text-anchor="middle">Type Checking</text>
    <text x="370" y="243" fill="rgba(255,255,255,0.9)" font-family="system-ui, sans-serif" font-size="10" text-anchor="middle">Errors at compile time!</text>
  </g>
  <!-- Arrows -->
  <line x1="180" y1="120" x2="275" y2="120" stroke="#666" stroke-width="3" stroke-linecap="round" marker-end="url(#flowArrow)"/>
  <line x1="460" y1="120" x2="555" y2="120" stroke="#666" stroke-width="3" stroke-linecap="round" marker-end="url(#flowArrow)"/>
  <line x1="370" y1="170" x2="370" y2="195" stroke="#27ae60" stroke-width="3" stroke-linecap="round" marker-end="url(#flowArrow)"/>
</svg>

Note:
TypeScript компилаторът проверява типовете и генерира чист JavaScript.

--

### Процесът

1. Пишете код във `.ts` файлове
2. `tsc` компилаторът проверява типовете
3. Генерира се стандартен `.js` файл
4. JavaScript-ът работи навсякъде

---

## JavaScript vs TypeScript

--

### Динамично vs Статично Типизиране

<svg viewBox="0 0 700 280" style="max-width: 700px; margin: 0 auto; display: block;">
  <defs>
    <linearGradient id="dynGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#f39c12"/>
      <stop offset="100%" style="stop-color:#e67e22"/>
    </linearGradient>
    <linearGradient id="statGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#3178c6"/>
      <stop offset="100%" style="stop-color:#235a97"/>
    </linearGradient>
    <filter id="typeShadow" x="-10%" y="-10%" width="120%" height="130%">
      <feDropShadow dx="0" dy="3" stdDeviation="3" flood-color="#000" flood-opacity="0.15"/>
    </filter>
  </defs>
  <!-- JavaScript Side -->
  <g filter="url(#typeShadow)">
    <rect x="30" y="40" width="300" height="200" rx="15" fill="url(#dynGrad)"/>
    <text x="180" y="75" fill="white" font-family="system-ui, sans-serif" font-size="18" font-weight="700" text-anchor="middle">JavaScript</text>
    <text x="180" y="100" fill="rgba(255,255,255,0.8)" font-family="system-ui, sans-serif" font-size="12" text-anchor="middle">Динамично типизиран</text>
    <line x1="60" y1="115" x2="300" y2="115" stroke="rgba(255,255,255,0.3)" stroke-width="1"/>
    <text x="180" y="140" fill="white" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle">Типове се проверяват at runtime</text>
    <text x="180" y="165" fill="white" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle">Гъвкав, но рискован</text>
    <text x="180" y="190" fill="white" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle">Грешки в production</text>
    <text x="180" y="220" font-size="28" text-anchor="middle">&#128293;</text>
  </g>
  <!-- TypeScript Side -->
  <g filter="url(#typeShadow)">
    <rect x="370" y="40" width="300" height="200" rx="15" fill="url(#statGrad)"/>
    <text x="520" y="75" fill="white" font-family="system-ui, sans-serif" font-size="18" font-weight="700" text-anchor="middle">TypeScript</text>
    <text x="520" y="100" fill="rgba(255,255,255,0.8)" font-family="system-ui, sans-serif" font-size="12" text-anchor="middle">Статично типизиран</text>
    <line x1="400" y1="115" x2="640" y2="115" stroke="rgba(255,255,255,0.3)" stroke-width="1"/>
    <text x="520" y="140" fill="white" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle">Типове се проверяват at compile time</text>
    <text x="520" y="165" fill="white" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle">Строг, но безопасен</text>
    <text x="520" y="190" fill="white" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle">Грешки докато пишете</text>
    <text x="520" y="220" font-size="28" text-anchor="middle">&#128737;</text>
  </g>
</svg>

Note:
TypeScript добавя статична типизация върху JavaScript, което позволява ранно откриване на грешки.

--

### TypeScript = JavaScript + Types

Всеки валиден JavaScript е валиден TypeScript!

```typescript
// Това е валиден TypeScript
let name = "Alice";
console.log("Hello, " + name);

// Можете да добавите типове
let age: number = 25;
```

---

## Основни Типове

--

### Примитиви

```typescript
// String - текст
let message: string = "Hello, TypeScript!";

// Number - числа (int и float)
let age: number = 25;
let price: number = 19.99;

// Boolean - true/false
let isActive: boolean = true;
```

--

### Type Inference

TypeScript е умен - често **извежда** типа автоматично!

```typescript
let count = 10;        // TypeScript знае: number
let name = "Alice";    // TypeScript знае: string
let active = true;     // TypeScript знае: boolean

// Не е нужно да пишете:
let count: number = 10;
```

Note:
Type inference намалява нуждата от изрични анотации, но анотациите подобряват четимостта.

---

## Type Hierarchy

--

<svg viewBox="0 0 700 320" style="max-width: 700px; margin: 0 auto; display: block;">
  <defs>
    <linearGradient id="unknownG" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#9b59b6"/>
      <stop offset="100%" style="stop-color:#8e44ad"/>
    </linearGradient>
    <linearGradient id="anyG" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#e74c3c"/>
      <stop offset="100%" style="stop-color:#c0392b"/>
    </linearGradient>
    <linearGradient id="primG" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#3498db"/>
      <stop offset="100%" style="stop-color:#2980b9"/>
    </linearGradient>
    <linearGradient id="neverG" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#34495e"/>
      <stop offset="100%" style="stop-color:#2c3e50"/>
    </linearGradient>
    <filter id="hierShadow" x="-10%" y="-10%" width="120%" height="130%">
      <feDropShadow dx="0" dy="3" stdDeviation="3" flood-color="#000" flood-opacity="0.15"/>
    </filter>
  </defs>
  <!-- unknown - Top Type -->
  <g filter="url(#hierShadow)">
    <rect x="280" y="15" width="140" height="45" rx="10" fill="url(#unknownG)"/>
    <text x="350" y="43" fill="white" font-family="monospace" font-size="14" font-weight="700" text-anchor="middle">unknown</text>
  </g>
  <text x="350" y="80" fill="#666" font-family="system-ui, sans-serif" font-size="10" text-anchor="middle">Top type - приема всичко</text>
  <!-- Connecting line -->
  <line x1="350" y1="60" x2="350" y2="100" stroke="#666" stroke-width="2" stroke-dasharray="4"/>
  <!-- any -->
  <g filter="url(#hierShadow)">
    <rect x="280" y="105" width="140" height="45" rx="10" fill="url(#anyG)"/>
    <text x="350" y="133" fill="white" font-family="monospace" font-size="14" font-weight="700" text-anchor="middle">any</text>
  </g>
  <text x="480" y="130" fill="#e74c3c" font-family="system-ui, sans-serif" font-size="10" text-anchor="start">&#9888; Избягвайте!</text>
  <!-- Connecting line -->
  <line x1="350" y1="150" x2="350" y2="180" stroke="#666" stroke-width="2" stroke-dasharray="4"/>
  <!-- Primitives Row -->
  <g filter="url(#hierShadow)">
    <rect x="50" y="185" width="90" height="40" rx="8" fill="url(#primG)"/>
    <text x="95" y="210" fill="white" font-family="monospace" font-size="11" font-weight="600" text-anchor="middle">string</text>
  </g>
  <g filter="url(#hierShadow)">
    <rect x="160" y="185" width="90" height="40" rx="8" fill="url(#primG)"/>
    <text x="205" y="210" fill="white" font-family="monospace" font-size="11" font-weight="600" text-anchor="middle">number</text>
  </g>
  <g filter="url(#hierShadow)">
    <rect x="270" y="185" width="90" height="40" rx="8" fill="url(#primG)"/>
    <text x="315" y="210" fill="white" font-family="monospace" font-size="11" font-weight="600" text-anchor="middle">boolean</text>
  </g>
  <g filter="url(#hierShadow)">
    <rect x="380" y="185" width="90" height="40" rx="8" fill="url(#primG)"/>
    <text x="425" y="210" fill="white" font-family="monospace" font-size="11" font-weight="600" text-anchor="middle">object</text>
  </g>
  <g filter="url(#hierShadow)">
    <rect x="490" y="185" width="90" height="40" rx="8" fill="url(#primG)"/>
    <text x="535" y="210" fill="white" font-family="monospace" font-size="10" font-weight="600" text-anchor="middle">null/undef.</text>
  </g>
  <g filter="url(#hierShadow)">
    <rect x="600" y="185" width="70" height="40" rx="8" fill="url(#primG)"/>
    <text x="635" y="210" fill="white" font-family="monospace" font-size="11" font-weight="600" text-anchor="middle">void</text>
  </g>
  <!-- Connecting line -->
  <line x1="350" y1="225" x2="350" y2="255" stroke="#666" stroke-width="2" stroke-dasharray="4"/>
  <!-- never - Bottom Type -->
  <g filter="url(#hierShadow)">
    <rect x="280" y="260" width="140" height="45" rx="10" fill="url(#neverG)"/>
    <text x="350" y="288" fill="white" font-family="monospace" font-size="14" font-weight="700" text-anchor="middle">never</text>
  </g>
  <text x="350" y="320" fill="#666" font-family="system-ui, sans-serif" font-size="10" text-anchor="middle">Bottom type - празен тип</text>
</svg>

Note:
Йерархията на типовете показва как те се свързват - unknown е най-общ, never е най-тесен.

---

## Специални Типове

--

### any - Изключва проверките!

```typescript
let dangerous: any = "hello";
dangerous = 42;              // OK
dangerous = { foo: "bar" };  // OK

dangerous.someMethod();      // No error... until runtime!
```

**Избягвайте any!** Губите type safety.

--

### unknown - Безопасната алтернатива

```typescript
let userInput: unknown = getUserInput();

// ТРЯБВА да проверите типа преди употреба!
if (typeof userInput === "string") {
  console.log(userInput.toUpperCase()); // OK
}

// userInput.toUpperCase();  // ERROR without check!
```

--

### void - Без return стойност

```typescript
function logMessage(msg: string): void {
  console.log(msg);
  // Няма return statement
}
```

--

### null и undefined

```typescript
// С strictNullChecks включено:
let user: string | null = null;  // Изрично "няма данни"

let data: string | undefined;    // Не е инициализирано
```

---

## Arrays

--

### Деклариране на масиви

```typescript
// Два синтаксиса - избор на предпочитание
let fruits: string[] = ["apple", "banana", "orange"];
let numbers: Array<number> = [1, 2, 3, 4, 5];

// Type safety!
fruits.push("grape");    // OK
// fruits.push(123);     // ERROR!
```

--

### Масиви в действие

```typescript
let scores: number[] = [85, 92, 78, 96];

// Методите запазват типовете
let total = scores.reduce((a, b) => a + b, 0);  // number
let avg = total / scores.length;                 // number

let hasHighScore = scores.some(s => s > 90);    // boolean
```

---

## Tuples

--

### Какво са Tuples?

Масиви с **фиксирана дължина** и **специфични типове на всяка позиция**.

```typescript
// [id, name] tuple
let employee: [number, string] = [1, "Alice"];

// 3D координати
let point3D: [number, number, number] = [10.5, 20.3, 5.0];

// Named tuples (TypeScript 4.0+)
let coord: [x: number, y: number] = [55.2, 41.3];
```

--

### Кога да използвате Tuples?

```typescript
// Връщане на множество стойности
function getNameAndAge(): [string, number] {
  return ["Alice", 25];
}

const [name, age] = getNameAndAge();
// name: string, age: number
```

---

## Обектни Типове

--

### Inline Object Types

```typescript
let user: { id: number; name: string; isActive: boolean } = {
  id: 1,
  name: "Alice",
  isActive: true
};
```

Работи, но не е удобно за преизползване...

--

### Type Aliases

```typescript
type Person = {
  name: string;
  age: number;
  email?: string;  // Optional property (?)
};

let employee: Person = { name: "Bob", age: 45 };
let manager: Person = {
  name: "Charlie",
  age: 50,
  email: "charlie@example.com"
};
```

--

### Предимства на Type Aliases

**DRY код** - дефинирате веднъж, използвате навсякъде <!-- .element: class="fragment" -->

**Четимост** - ясни имена за структури <!-- .element: class="fragment" -->

**Поддръжка** - промяната е на едно място <!-- .element: class="fragment" -->

**Type safety** - консистентна структура <!-- .element: class="fragment" -->

---

## Type-Safe Функции

--

### Parameter и Return Types

```typescript
function add(a: number, b: number): number {
  return a + b;
}

console.log(add(5, 3)); // 8

// add("hello", 3);  // ERROR!
```

--

### Optional Parameters

```typescript
function greet(name: string, title?: string): string {
  if (title) {
    return `Hello, ${title} ${name}!`;
  }
  return `Hello, ${name}!`;
}

greet("Alice");           // "Hello, Alice!"
greet("Alice", "Dr.");    // "Hello, Dr. Alice!"
```

--

### Function Type Expressions

```typescript
type MathOperation = (x: number, y: number) => number;

let multiply: MathOperation = (a, b) => a * b;
let divide: MathOperation = (num1, num2) => num1 / num2;

function calculate(a: number, b: number, op: MathOperation): number {
  return op(a, b);
}

calculate(10, 5, multiply);  // 50
calculate(10, 5, divide);    // 2
```

---

## Union Types

--

### Приемане на няколко типа

```typescript
function printId(id: number | string): void {
  console.log(`My ID is: ${id}`);
}

printId(101);      // OK
printId("202ABC"); // OK
// printId(true);  // ERROR!
```

--

### Type Narrowing

```typescript
function printId(id: number | string): void {
  // Type narrowing с typeof
  if (typeof id === "string") {
    console.log(id.toUpperCase());  // OK - TypeScript знае: string
  } else {
    console.log(id.toFixed(2));     // OK - TypeScript знае: number
  }
}
```

Note:
Type narrowing позволява на TypeScript да определи по-специфичен тип в условни блокове.

---

## Literal Types

--

### Конкретни стойности като типове

```typescript
// Само тези три стойности са позволени
type Status = "pending" | "approved" | "rejected";

let orderStatus: Status = "pending";    // OK
// orderStatus = "cancelled";           // ERROR!

type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;
let roll: DiceRoll = 4;                 // OK
// roll = 7;                            // ERROR!
```

--

### Практическо приложение

```typescript
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

function fetchData(url: string, method: HttpMethod) {
  // ...
}

fetchData("/api/users", "GET");    // OK
// fetchData("/api/users", "PATCH"); // ERROR!
```

---

## Настройка на TypeScript Проект

--

### Инсталация

```bash
# 1. Създайте папка за проекта
mkdir my-ts-project && cd my-ts-project

# 2. Инициализирайте npm
npm init -y

# 3. Инсталирайте TypeScript
npm install --save-dev typescript

# 4. Генерирайте tsconfig.json
npx tsc --init
```

--

### tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "strict": true,
    "outDir": "./dist",
    "rootDir": "./src",
    "sourceMap": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

--

### Важни настройки

`"strict": true` - **Винаги активирайте!** <!-- .element: class="fragment" -->

`"target"` - ECMAScript версия на изхода <!-- .element: class="fragment" -->

`"outDir"` - Папка за компилирани .js файлове <!-- .element: class="fragment" -->

`"rootDir"` - Папка с TypeScript source files <!-- .element: class="fragment" -->

--

### Компилация

```bash
# Компилирай веднъж
npx tsc

# Watch mode - автоматична прекомпилация
npx tsc --watch
```

---

## Практически Пример

--

### User Type Definition

```typescript
// types.ts
type User = {
  id: string;
  username: string;
  email: string;
  isActive: boolean;
  createdAt: Date;
};
```

--

### Type-Safe Function

```typescript
// userService.ts
function registerUser(
  username: string,
  email: string
): User {
  return {
    id: Math.random().toString(36).substring(2),
    username,
    email,
    isActive: true,
    createdAt: new Date()
  };
}

// Грешките се хващат при компилация!
// registerUser(123, "john@mail.com");  // ERROR!
```

---

<!-- .slide: data-background="#2d5986" -->

## Обобщение

--

### Основни типове

```typescript
let text: string = "hello";
let num: number = 42;
let flag: boolean = true;
let arr: number[] = [1, 2, 3];
let tuple: [string, number] = ["age", 25];
```

--

### Type Aliases и Функции

```typescript
type Person = {
  name: string;
  age: number;
};

function greet(person: Person): string {
  return `Hello, ${person.name}!`;
}
```

--

### Union и Literal Types

```typescript
type ID = number | string;
type Status = "active" | "inactive";

function setStatus(id: ID, status: Status): void {
  // ...
}
```

---

## Ключови Предимства

По-малко бъгове - грешките се хващат рано <!-- .element: class="fragment" -->

По-добро IDE - autocompletion и refactoring <!-- .element: class="fragment" -->

Самодокументиращ се код - типовете = документация <!-- .element: class="fragment" -->

Скалируемост - подходящ за големи проекти <!-- .element: class="fragment" -->

---

## Ресурси

- [typescriptlang.org/docs](https://www.typescriptlang.org/docs/) - Официална документация
- [TypeScript Playground](https://www.typescriptlang.org/play) - Онлайн редактор
- [Exercism TypeScript](https://exercism.org/tracks/typescript) - Упражнения

---

<!-- .slide: data-background="#4d7e65" -->

# Въпроси?

### Благодаря за вниманието!

Note:
Готов съм да отговоря на вашите въпроси за TypeScript.
