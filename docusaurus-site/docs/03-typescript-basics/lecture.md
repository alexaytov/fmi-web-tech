---
title: "Лекция"
sidebar_position: 1
slug: lecture
tags: [typescript, static-typing, javascript, type-safety]
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

# Основи на TypeScript (TypeScript Fundamentals)

<ViewSlidesButton lectureSlug="typescript-basics" />

<QuickSummary>

**Ключови познания за изпита:**
- **TypeScript** е статично типизирано разширение на JavaScript, което се компилира до JavaScript
- Основни типове: `string`, `number`, `boolean`, `any`, `unknown`, `void`, `null`, `undefined`
- **Arrays** се типизират като `string[]` или `Array<string>`; **Tuples** имат фиксирана дължина и типове
- **Type aliases** (`type`) позволяват дефиниране на преизползваеми типове за обекти
- Функциите получават типови анотации за параметри и return стойности
- `tsconfig.json` конфигурира компилатора; винаги използвайте `strict: true`

</QuickSummary>

<LearningObjectives objectives={[
  "Декларирате и използвате основните TypeScript типове (string, number, boolean, any, unknown)",
  "Работите с масиви, tuples и обектни типове чрез type aliases",
  "Пишете type-safe функции с типови анотации за параметри и return стойности",
  "Настройвате TypeScript проекти с tsconfig.json и компилирате .ts файлове",
  "Обяснявате предимствата на TypeScript спрямо JavaScript"
]} />

---

## Въведение: Какво е TypeScript?

<WhyBox title="Защо TypeScript е задължителен за модерната уеб разработка?">

Представете си следната ситуация в JavaScript:

```javascript
function calculateTotal(price, quantity) {
  return price * quantity;
}

// Тези грешки се откриват САМО по време на изпълнение!
calculateTotal("100", 5);  // Резултат: "100100100100100" (string concatenation!)
calculateTotal(100);       // Резултат: NaN (липсващ аргумент)
```

**С TypeScript:** Тези грешки се хващат **по време на писане на кода**, преди дори да стартирате програмата!

TypeScript е вашата **застраховка** срещу runtime грешки - позволява ви да пишете по-надежден код с увереност.

</WhyBox>

<InfoBox title="Дефиниция: TypeScript">

TypeScript е **статично типизирано разширение (superset) на JavaScript**, което се компилира до стандартен JavaScript. Всеки валиден JavaScript код е също валиден TypeScript код.

**Ключови характеристики:**
- Добавя **статична типизация** върху динамичния JavaScript
- **Компилира се** до JavaScript за изпълнение в браузъри и Node.js
- Предоставя **подобрена IDE поддръжка** с autocompletion и error checking
- Улеснява **поддръжката на големи проекти** и екипна работа

</InfoBox>

---

## TypeScript Compilation Flow

<InfoBox title="Как работи TypeScript компилацията">

<img
  src={useBaseUrl('/img/diagrams/typescript/compilation-flow.svg')}
  alt="TypeScript компилация - .ts файл през tsc компилатор до .js файл с type checking"
  style={{maxWidth: '750px', margin: '0 auto', display: 'block'}}
/>

</InfoBox>

<Grid columns={3}>
  <Card title="1. TypeScript файл" icon="&#128196;">
    Пишете код с типови анотации във `.ts` файлове
  </Card>
  <Card title="2. Компилация" icon="&#9881;">
    `tsc` компилаторът проверява типовете и генерира JavaScript
  </Card>
  <Card title="3. JavaScript изход" icon="&#127919;">
    Стандартен `.js` файл, готов за браузър или Node.js
  </Card>
</Grid>

---

## JavaScript vs TypeScript

<ComparisonBox
  wrong={{
    title: "JavaScript (Динамично типизиран)",
    content: (
      <ul>
        <li>Типовете се проверяват <strong>по време на изпълнение</strong></li>
        <li>Грешките се откриват <strong>късно</strong> (в production)</li>
        <li>Минимална IDE поддръжка за autocomplete</li>
        <li>Трудно за поддръжка в <strong>големи проекти</strong></li>
        <li>Няма формална документация на структурите</li>
      </ul>
    )
  }}
  correct={{
    title: "TypeScript (Статично типизиран)",
    content: (
      <ul>
        <li>Типовете се проверяват <strong>по време на компилация</strong></li>
        <li>Грешките се хващат <strong>рано</strong> (докато пишете)</li>
        <li>Отлична IDE поддръжка с умен autocomplete</li>
        <li>Скалира добре за <strong>enterprise проекти</strong></li>
        <li>Типовете служат като <strong>документация</strong></li>
      </ul>
    )
  }}
/>

<InfoBox title="TypeScript Type Hierarchy">

<img
  src={useBaseUrl('/img/diagrams/typescript/type-hierarchy.svg')}
  alt="TypeScript йерархия на типовете - от unknown (top type) през any, примитивни типове до never (bottom type)"
  style={{maxWidth: '700px', margin: '0 auto', display: 'block'}}
/>

</InfoBox>

---

## Предварителни Изисквания: JavaScript Основи

Преди да продължите с TypeScript, уверете се, че сте запознати с тези JavaScript концепции:

<Grid columns={2}>
  <Card title="Променливи и типове" icon="&#128203;">
    `let`, `const`, `var`, strings, numbers, booleans, arrays, objects
  </Card>
  <Card title="Функции" icon="&#128295;">
    Function declarations, arrow functions, параметри и return стойности
  </Card>
</Grid>

<InfoBox title="Запомнете">

**TypeScript е superset на JavaScript** - всеки валиден JavaScript код е също валиден TypeScript код. TypeScript просто добавя типова система отгоре.

</InfoBox>

---

## Основни Типове в TypeScript

### Примитивни типове: `string`, `number`, `boolean`

Това са най-базовите типове, които отразяват JavaScript примитивите, но с явни типови анотации.

```typescript
// String - текстови данни
let message: string = "Hello, TypeScript!";
let greeting: string = `Welcome, ${message.split(',')[0]}!`;

// Number - всички числови стойности
let age: number = 30;
let price: number = 99.99;
let hexColor: number = 0xFF00FF; // Hexadecimal

// Boolean - true или false
let isActive: boolean = true;
let hasPermission: boolean = false;
```

<SuccessBox title="Type Inference - TypeScript е умен!">

TypeScript често може да **изведе типа** автоматично:

```typescript
let count = 10;        // TypeScript знае, че count е number
let name = "Alice";    // TypeScript знае, че name е string
let active = true;     // TypeScript знае, че active е boolean
```

Въпреки това, явните анотации са препоръчителни за яснота, особено при функции и публични API-та.

</SuccessBox>

---

### Специални типове: `any`, `unknown`, `void`, `null`, `undefined`

<WarningBox title="Внимание с any!">

`any` **изключва type checking** - използвайте го само като последна опция!

```typescript
let dangerous: any = "hello";
dangerous = 42;              // OK - но губите type safety!
dangerous = { foo: "bar" };  // OK - но без никакви проверки!
```

</WarningBox>

| Тип | Описание | Употреба |
|:----|:---------|:---------|
| **`any`** | Приема всяка стойност, изключва type checking | Само при миграция от JS или динамични данни |
| **`unknown`** | Приема всяка стойност, но изисква проверка преди употреба | **По-безопасна алтернатива на `any`** |
| **`void`** | Функция, която не връща стойност | Return тип на функции без `return` |
| **`null`** | Изрична липса на стойност | Когато искате да кажете "няма данни" |
| **`undefined`** | Стойност, която не е присвоена | Автоматична стойност на неинициализирани променливи |

```typescript
// unknown - безопасната алтернатива на any
let userInput: unknown = getUserInput();

// ТРЯБВА да проверите типа преди употреба!
if (typeof userInput === "string") {
  console.log(userInput.toUpperCase()); // OK след type guard
}

// void - за функции без return
function logMessage(msg: string): void {
  console.log(msg);
  // Няма return statement
}

// null и undefined
let user: string | null = null;  // Изрично празна стойност
let data: string | undefined = undefined;
```

<InfoBox title="Препоръка: strictNullChecks">

Винаги активирайте `strictNullChecks` в `tsconfig.json`. Това принуждава изрично обработване на `null` и `undefined` стойности.

</InfoBox>

---

## Колекции: Arrays, Tuples, Objects

### Arrays в TypeScript

Масивите са type-safe колекции, където всички елементи са от един тип.

```typescript
// Два синтаксиса за деклариране
let planets: string[] = ["Mercury", "Venus", "Earth", "Mars"];
let numbers: Array<number> = [1, 2, 3, 4, 5];

// Type safety в действие
planets.push("Pluto");  // OK
// planets.push(123);   // ERROR: Argument of type 'number' is not
                        // assignable to parameter of type 'string'

// Методите запазват типовете
let lastPlanet = planets.pop();      // string | undefined
let hasEarth = planets.includes("Earth"); // boolean
```

### Tuples - Фиксирани структури

Tuples позволяват масиви с **фиксиран брой елементи** и **специфични типове на всяка позиция**.

```typescript
// Tuple за служител: [id, name]
let employee: [number, string] = [1, "Steve"];

// Tuple за 3D координати
let point3D: [number, number, number] = [10.5, 20.3, 5.0];

// Named tuples (TypeScript 4.0+) - по-четими
const graphCoordinate: [x: number, y: number] = [55.2, 41.3];

// Редът и дължината са важни!
// let invalid: [string, number] = [30, "Alice"]; // ERROR!
// let short: [string, number] = ["Bob"];         // ERROR! Missing element
```

<InfoBox title="Кога да използвате Tuples?">

Tuples са идеални за:
- Връщане на множество стойности от функция
- Представяне на фиксирани структури (координати, RGB цветове)
- Данни от база данни с фиксирана схема

</InfoBox>

### Обектни типове и Type Aliases

```typescript
// Inline object type
let user: { id: number; name: string; isActive: boolean } = {
  id: 1,
  name: "Alice",
  isActive: true
};

// Type Alias - за преизползване
type Person = {
  name: string;
  age: number;
  email?: string;  // Optional property (?)
};

let employee: Person = { name: "Bob", age: 45 };
let manager: Person = { name: "Charlie", age: 50, email: "charlie@example.com" };

// Type aliases ENFORCE структурата
// let invalid: Person = { name: "David" }; // ERROR: Property 'age' is missing
```

<SuccessBox title="Type Aliases = DRY код">

Type aliases позволяват да дефинирате типа веднъж и да го преизползвате навсякъде. Това подобрява:
- **Четимостта** - ясни имена за структури
- **Поддръжката** - промяната е на едно място
- **Type safety** - консистентна структура в цялото приложение

</SuccessBox>

---

## Type-Safe Функции

Функциите в TypeScript получават типови анотации за параметри и return стойности.

### Parameter и Return Type Annotations

```typescript
// Explicit parameter and return types
function add(a: number, b: number): number {
  return a + b;
}

console.log(add(5, 3)); // 8
// console.log(add("hello", 3)); // ERROR: Argument of type 'string'
//                               // is not assignable to parameter of type 'number'

// Function with no return value
function logMessage(message: string): void {
  console.log(message);
}

// Optional parameters (?)
function greet(name: string, title?: string): string {
  if (title) {
    return `Hello, ${title} ${name}!`;
  }
  return `Hello, ${name}!`;
}
```

### Function Type Expressions

```typescript
// Define a type for function signatures
type MathOperation = (x: number, y: number) => number;

let multiply: MathOperation = (a, b) => a * b;
let divide: MathOperation = (num1, num2) => num1 / num2;

// Use in higher-order functions
function calculate(a: number, b: number, operation: MathOperation): number {
  return operation(a, b);
}

console.log(calculate(10, 5, multiply)); // 50
console.log(calculate(10, 5, divide));   // 2
```

### Union Types

Union types позволяват параметър да приема **няколко различни типа**.

```typescript
function printId(id: number | string): void {
  console.log(`My ID is: ${id}`);

  // Type narrowing
  if (typeof id === "string") {
    console.log(id.toUpperCase()); // OK - TypeScript knows id is string here
  }
}

printId(101);      // OK
printId("202ABC"); // OK
// printId(true);  // ERROR: Argument of type 'boolean' is not assignable
```

<InfoBox title="Type Inference в функции">

TypeScript автоматично извежда return типа:

```typescript
function calculateArea(width: number, height: number) {
  return width * height; // Return type inferred as number
}

// Contextual typing
const names = ["Alice", "Bob", "Eve"];
names.forEach((s) => {  // 's' is inferred as string
  console.log(s.toUpperCase());
});
```

</InfoBox>

---

## Настройка на TypeScript Проект

### Инсталация и инициализация

```bash
# 1. Създайте папка за проекта
mkdir my-ts-project
cd my-ts-project

# 2. Инициализирайте npm (опционално, но препоръчително)
npm init -y

# 3. Инсталирайте TypeScript като dev dependency
npm install --save-dev typescript

# 4. Генерирайте tsconfig.json
npx tsc --init
```

### Конфигурация: tsconfig.json

<CollapsibleSection title="Пример tsconfig.json" icon="&#128736;">

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM"],
    "module": "commonjs",
    "moduleResolution": "node",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "outDir": "./dist",
    "rootDir": "./src",
    "sourceMap": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

</CollapsibleSection>

<Grid columns={2}>
  <Card title="Важни настройки" icon="&#9881;">

    - `"strict": true` - **Винаги активирайте!**
    - `"target"` - ECMAScript версия за изхода
    - `"outDir"` - Папка за компилираните .js файлове
    - `"rootDir"` - Папка с TypeScript source files

  </Card>
  <Card title="Команди за компилация" icon="&#9654;">

    ```bash
    # Компилирай веднъж
    npx tsc

    # Watch mode (автоматична прекомпилация)
    npx tsc --watch
    ```

  </Card>
</Grid>

<WarningBox title="Препоръка: Винаги strict: true">

`strict: true` активира всички строги проверки и помага да научите TypeScript правилно. Включва:
- `strictNullChecks` - обработка на null/undefined
- `noImplicitAny` - забранява implicit any
- `strictFunctionTypes` - стриктни функционални типове

</WarningBox>

---

## Практически Пример: User Management System

Нека приложим концепциите в реален пример.

### 1. Дефиниране на User Interface

```typescript
// types.ts
export interface IUser {
  id: string;
  username: string;
  email: string;
  password?: string;   // Optional
  isActive: boolean;
  createdAt: Date;
}
```

### 2. Type-Safe Registration Function

```typescript
// userService.ts
import { IUser } from './types';

function generateId(): string {
  return Math.random().toString(36).substring(2, 15);
}

export async function registerUser(
  username: string,
  email: string,
  password?: string
): Promise<IUser> {
  const newUser: IUser = {
    id: generateId(),
    username,
    email,
    password: password || 'default-hashed-password',
    isActive: true,
    createdAt: new Date()
  };

  console.log(`User ${newUser.username} registered with ID: ${newUser.id}`);
  return newUser;
}
```

### 3. Working with User Arrays

```typescript
// app.ts
import { IUser } from './types';
import { registerUser } from './userService';

const users: IUser[] = [];

function addUser(user: IUser): void {
  users.push(user);
  console.log(`Added user: ${user.username}. Total: ${users.length}`);
}

async function main() {
  const user1 = await registerUser("alice_ts", "alice@example.com", "pass123");
  addUser(user1);

  // TypeScript catches these errors at compile time!
  // addUser({ username: "bob" });  // ERROR: Missing required properties
  // addUser({ id: 2, name: "X" }); // ERROR: Wrong property names/types
}

main();
```

<ComparisonBox
  wrong={{
    title: "JavaScript: Runtime Errors",
    content: (
      <div>
        <pre style={{fontSize: '12px', margin: '8px 0'}}>
{`const userA = registerUser(123, "john@mail.com");
// No error until runtime!
// username is now a number

userA.username.toUpperCase();
// Runtime Error: toUpperCase is not a function`}
        </pre>
        <p>Грешките се откриват <strong>след deploy</strong> в production.</p>
      </div>
    )
  }}
  correct={{
    title: "TypeScript: Compile-Time Errors",
    content: (
      <div>
        <pre style={{fontSize: '12px', margin: '8px 0'}}>
{`const userA = await registerUser(123, "john@mail.com");
// ERROR: Argument of type 'number' is not
// assignable to parameter of type 'string'`}
        </pre>
        <p>Грешките се хващат <strong>докато пишете</strong>, преди изпълнение.</p>
      </div>
    )
  }}
/>

---

## Обобщение

<Grid columns={3}>
  <Card title="Типове" icon="&#128203;">
    `string`, `number`, `boolean`, `any`, `unknown`, `void`, `null`, `undefined`
  </Card>
  <Card title="Колекции" icon="&#128218;">
    Arrays (`string[]`), Tuples (`[number, string]`), Type aliases
  </Card>
  <Card title="Функции" icon="&#128295;">
    Parameter types, return types, optional params, union types
  </Card>
</Grid>

<SuccessBox title="Ключови предимства на TypeScript">

- **По-малко бъгове** - грешките се хващат рано при компилация
- **По-добро IDE** - autocompletion, refactoring, inline docs
- **Самодокументиращ се код** - типовете служат като документация
- **Скалируемост** - подходящ за големи проекти и екипи
- **Постепенна миграция** - можете да добавяте TypeScript постепенно

</SuccessBox>

---

## Допълнителни Ресурси

### Онлайн Материали
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/) - Официална документация
- [TypeScript Playground](https://www.typescriptlang.org/play) - Интерактивен редактор в браузъра
- [TS Deep Dive](https://basarat.gitbook.io/typescript/) - Безплатна книга

### Практика
- [Exercism TypeScript Track](https://exercism.org/tracks/typescript) - Упражнения с mentorship
- [Type Challenges](https://github.com/type-challenges/type-challenges) - Advanced type система

### Видео Уроци
- [TypeScript Tutorial for Beginners](https://www.youtube.com/watch?v=BwuLxPH8IDs) - Net Ninja
- [No BS TS](https://www.youtube.com/playlist?list=PLNqp92_EXZBJYFrpEzdO2EapvU0GOJ09n) - Jack Herrington
