---
sidebar_position: 2
slug: exercises
title: "Упражнения"
tags: [exercises, practice, typescript, types, interfaces, functions]
---

import ExerciseCard from '@site/src/components/Exercise/ExerciseCard';
import ProgressTracker from '@site/src/components/Exercise/ProgressTracker';
import CollapsibleSection from '@site/src/components/CollapsibleSection';
import InfoBox from '@site/src/components/InfoBoxes/InfoBox';
import WarningBox from '@site/src/components/InfoBoxes/WarningBox';
import SuccessBox from '@site/src/components/InfoBoxes/SuccessBox';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Упражнения: TypeScript Основи

<img src={useBaseUrl('/img/diagrams/typescript/header-banner.svg')} alt="TypeScript Fundamentals Banner" style={{width: '100%', maxWidth: '800px', margin: '20px auto', display: 'block'}} />

<ProgressTracker />

---

## Лесни Упражнения (EASY)

<ExerciseCard difficulty="easy">

### Задача 1: Дефиниция на TypeScript

Какво е TypeScript?

A) Напълно различен език за програмиране от JavaScript
B) Статично типизиран superset на JavaScript, който се компилира до обикновен JavaScript
C) Runtime среда за JavaScript
D) JavaScript framework като React или Angular

<CollapsibleSection title="✅ Решение">

**Отговор: B) Статично типизиран superset на JavaScript, който се компилира до обикновен JavaScript**

<img src={useBaseUrl('/img/diagrams/typescript/exercise1-js-to-ts.svg')} alt="JavaScript to TypeScript relationship diagram" style={{width: '100%', maxWidth: '600px', margin: '20px auto', display: 'block'}} />

**Ключови точки:**
- TypeScript е **superset** - всеки валиден JS е валиден TS
- Типовете се проверяват по **време на компилация**, не при изпълнение
- TS компилаторът (tsc) генерира обикновен JavaScript

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="easy">

### Задача 2: Основни декларации на типове

Попълнете декларациите на TypeScript променливи:

```typescript
let username: _______ = "alice_dev";
let userAge: _______ = 25;
let isLoggedIn: _______ = true;
```

<CollapsibleSection title="✅ Решение">

<img src={useBaseUrl('/img/diagrams/typescript/exercise2-basic-types.svg')} alt="Basic TypeScript types: string, number, boolean" style={{width: '100%', maxWidth: '600px', margin: '20px auto', display: 'block'}} />

```typescript
let username: string = "alice_dev";
let userAge: number = 25;
let isLoggedIn: boolean = true;
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="easy">

### Задача 3: Вярно или Невярно - Предимства на TypeScript

Отбележете всяко твърдение като Вярно или Невярно:

1. TypeScript улавя грешки с типове при изпълнение, както JavaScript. _____
2. Всеки валиден JavaScript код е също валиден TypeScript код. _____
3. TypeScript предоставя по-добра IDE поддръжка с автоматично довършване. _____
4. Типът `any` е препоръчителен за всички променливи. _____

<CollapsibleSection title="✅ Решение">

<img src={useBaseUrl('/img/diagrams/typescript/exercise3-true-false.svg')} alt="True/False answers for TypeScript benefits" style={{width: '100%', maxWidth: '600px', margin: '20px auto', display: 'block'}} />

| Твърдение | Отговор | Обяснение |
|-----------|---------|-----------|
| 1 | **Невярно** | TypeScript улавя грешки по **време на компилация** |
| 2 | **Вярно** | TypeScript е superset на JavaScript |
| 3 | **Вярно** | IntelliSense, автоматично довършване, inline грешки |
| 4 | **Невярно** | `any` обезсмисля целта на TypeScript |

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="easy">

### Задача 4: Време на откриване на грешки

Обяснете кога TypeScript улавя грешки с типове в сравнение с JavaScript. Защо това е полезно?

<CollapsibleSection title="✅ Решение">

<img src={useBaseUrl('/img/diagrams/typescript/exercise4-error-timing.svg')} alt="Error detection timing comparison between JavaScript and TypeScript" style={{width: '100%', maxWidth: '650px', margin: '20px auto', display: 'block'}} />

TypeScript улавя грешки по **време на компилация**, докато JavaScript ги улавя само при **изпълнение**.

**Предимства:**
- Грешките се откриват преди deployment
- По-бързо дебъгване в IDE
- Предотвратява достигането на бъгове до production

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="easy">

### Задача 5: Съпоставяне на специални типове

Свържете всеки тип с неговото описание:

| Тип | Описание |
|-----|----------|
| 1. `void` | A. Приема всякаква стойност, но изисква проверки на типа |
| 2. `any` | B. Умишлена липса на стойност |
| 3. `unknown` | C. Функции без връщана стойност |
| 4. `null` | D. Деактивира проверката на типове |

<CollapsibleSection title="✅ Решение">

<img src={useBaseUrl('/img/diagrams/typescript/exercise5-special-types.svg')} alt="Special TypeScript types: void, any, unknown, null" style={{width: '100%', maxWidth: '600px', margin: '20px auto', display: 'block'}} />

| Тип | Отговор | Описание |
|-----|---------|----------|
| `void` | **C** | Функции без връщана стойност |
| `any` | **D** | Деактивира проверката на типове (избягвайте!) |
| `unknown` | **A** | Безопасна алтернатива на any |
| `null` | **B** | Умишлена липса на стойност |

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="easy">

### Задача 6: Деклариране на масив

Декларирайте TypeScript масив `colors`, който съдържа само strings с три имена на цветове.

<CollapsibleSection title="✅ Решение">

<img src={useBaseUrl('/img/diagrams/typescript/exercise6-array-syntax.svg')} alt="Two array type syntaxes in TypeScript" style={{width: '100%', maxWidth: '550px', margin: '20px auto', display: 'block'}} />

```typescript
// Синтаксис 1: Type[] (най-често използван)
let colors: string[] = ["red", "green", "blue"];

// Синтаксис 2: Array<Type> (generic)
let colors: Array<string> = ["red", "green", "blue"];

// Type safety:
colors.push("yellow");  // ✅ OK
colors.push(42);        // ❌ Грешка: number не може да се присвои на string
```

</CollapsibleSection>

</ExerciseCard>

---

## Средни Упражнения (MEDIUM)

<ExerciseCard difficulty="medium">

### Задача 7: Откриване на грешка

Идентифицирайте TypeScript грешката:

```typescript
let scores: number[] = [85, 92, 78, 95];
scores.push("excellent");
```

<CollapsibleSection title="✅ Решение">

<img src={useBaseUrl('/img/diagrams/typescript/exercise7-error-spotting.svg')} alt="TypeScript error: string not assignable to number" style={{width: '100%', maxWidth: '550px', margin: '20px auto', display: 'block'}} />

**Грешка:** Масивът `scores` е `number[]`, но се опитваме да добавим `string`.

```typescript
// Варианти за поправка:
scores.push(100);  // ✅ Добавяне на число

// Или деклариране като union type:
let scores: (number | string)[] = [85, 92, 78, 95];
scores.push("excellent");  // ✅ Вече е позволено
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium">

### Задача 8: Деклариране на Tuple

Създайте tuple `StudentRecord` с: ID (number), name (string), enrolled (boolean).

<CollapsibleSection title="✅ Решение">

<img src={useBaseUrl('/img/diagrams/typescript/exercise8-tuple.svg')} alt="Tuple: Fixed-length typed array" style={{width: '100%', maxWidth: '550px', margin: '20px auto', display: 'block'}} />

```typescript
// Дефиниране на tuple тип
type StudentRecord = [number, string, boolean];

// Създаване на променлива
let student: StudentRecord = [12345, "Иван Петров", true];

// Достъп до елементи
console.log(student[0]); // 12345 (number)
console.log(student[1]); // "Иван Петров" (string)
console.log(student[2]); // true (boolean)
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium">

### Задача 9: Създаване на Type Alias

Създайте type alias `Book` с: title (string), author (string), pages (number), isbn (опционален string).

<CollapsibleSection title="✅ Решение">

<img src={useBaseUrl('/img/diagrams/typescript/exercise9-type-alias.svg')} alt="Type alias Book with properties" style={{width: '100%', maxWidth: '500px', margin: '20px auto', display: 'block'}} />

```typescript
type Book = {
    title: string;
    author: string;
    pages: number;
    isbn?: string;  // Опционален (?)
};

const book1: Book = {
    title: "Clean Code",
    author: "Robert Martin",
    pages: 464,
    isbn: "978-0132350884"
};

const book2: Book = {
    title: "The Pragmatic Programmer",
    author: "David Thomas",
    pages: 352
    // isbn е опционален
};
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium">

### Задача 10: Функция с типови анотации

Напишете `calculateDiscount(price: number, discountPercent: number)`, която връща намалената цена.

<CollapsibleSection title="✅ Решение">

<img src={useBaseUrl('/img/diagrams/typescript/exercise10-function-types.svg')} alt="Function type with input and output types" style={{width: '100%', maxWidth: '600px', margin: '20px auto', display: 'block'}} />

```typescript
function calculateDiscount(price: number, discountPercent: number): number {
    return price - (price * discountPercent / 100);
}

// Arrow function версия
const calculateDiscount = (price: number, discountPercent: number): number =>
    price - (price * discountPercent / 100);

console.log(calculateDiscount(100, 20)); // 80
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium">

### Задача 11: tsconfig.json Strict Mode

Коя опция активира всички стриктни проверки на типовете?

A) `"strictMode": true`
B) `"strict": true`
C) `"typeChecking": "strict"`
D) `"enableStrict": true`

<CollapsibleSection title="✅ Решение">

**Отговор: B) `"strict": true`**

<img src={useBaseUrl('/img/diagrams/typescript/exercise11-tsconfig.svg')} alt="tsconfig.json with strict mode enabled" style={{width: '100%', maxWidth: '550px', margin: '20px auto', display: 'block'}} />

`"strict": true` активира:
- `strictNullChecks`
- `strictFunctionTypes`
- `noImplicitAny`
- И още...

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium">

### Задача 12: Function Type Expression

Попълнете типа на функцията:

```typescript
type StringToNumber = _______________________
let getLength: StringToNumber = (s) => s.length;
```

<CollapsibleSection title="✅ Решение">

```typescript
type StringToNumber = (input: string) => number;

let getLength: StringToNumber = (s) => s.length;
let parseToInt: StringToNumber = (s) => parseInt(s, 10);

console.log(getLength("hello")); // 5
console.log(parseToInt("42"));   // 42
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium">

### Задача 13: Ред на настройка на проект

Подредете тези стъпки за настройка на TypeScript (1-5):

___ `npm install --save-dev typescript`
___ `mkdir my-project`
___ `npx tsc --init`
___ `npm init -y`
___ `npx tsc`

<CollapsibleSection title="✅ Решение">

<img src={useBaseUrl('/img/diagrams/typescript/exercise13-setup-order.svg')} alt="TypeScript project setup order: 5 steps" style={{width: '100%', maxWidth: '600px', margin: '20px auto', display: 'block'}} />

**Ред:**
1. `mkdir my-project`
2. `npm init -y`
3. `npm install --save-dev typescript`
4. `npx tsc --init`
5. `npx tsc`

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium">

### Задача 14: void срещу undefined

Обяснете разликата между `void` и `undefined` в TypeScript.

<CollapsibleSection title="✅ Решение">

<img src={useBaseUrl('/img/diagrams/typescript/exercise14-void-vs-undefined.svg')} alt="Comparison of void vs undefined in TypeScript" style={{width: '100%', maxWidth: '600px', margin: '20px auto', display: 'block'}} />

| `void` | `undefined` |
|--------|-------------|
| Тип на връщане на функция | Стойност на променлива |
| "Няма връщана стойност" | "Стойността е undefined" |
| `function log(): void` | `let x: string \| undefined` |

</CollapsibleSection>

</ExerciseCard>

---

## Трудни Упражнения (HARD)

<ExerciseCard difficulty="hard">

### Задача 15: Имплементация на Interface

Създайте interface `IProduct` с: id (string), name (string), price (number), category (string), inStock (boolean).

Имплементирайте функции `createProduct` и `addToInventory`.

<CollapsibleSection title="✅ Решение">

<img src={useBaseUrl('/img/diagrams/typescript/exercise15-interface.svg')} alt="Interface IProduct with properties" style={{width: '100%', maxWidth: '550px', margin: '20px auto', display: 'block'}} />

```typescript
interface IProduct {
    id: string;
    name: string;
    price: number;
    category: string;
    inStock: boolean;
}

const inventory: IProduct[] = [];

function createProduct(
    id: string, name: string, price: number,
    category: string, inStock: boolean
): IProduct {
    return { id, name, price, category, inStock };
}

function addToInventory(product: IProduct): void {
    inventory.push(product);
}

// Използване
const laptop = createProduct("P001", "MacBook", 1999, "Electronics", true);
addToInventory(laptop);
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="hard">

### Задача 16: Анализ на Type Safety

Намерете бъговете в този JavaScript и пренапишете в TypeScript:

```javascript
function processOrder(order) {
    const total = order.price * order.quantity;
    const discount = order.discountCode ? 0.1 : 0;
    return total - (total * discount);
}

const myOrder = {
    price: "29.99",        // Bug: string!
    quantity: 2,
    discountcode: "SAVE10" // Bug: typo!
};
```

<CollapsibleSection title="✅ Решение">

<img src={useBaseUrl('/img/diagrams/typescript/exercise16-type-safety.svg')} alt="JavaScript bugs vs TypeScript fixes comparison" style={{width: '100%', maxWidth: '600px', margin: '20px auto', display: 'block'}} />

```typescript
interface IOrder {
    price: number;
    quantity: number;
    discountCode?: string;
}

function processOrder(order: IOrder): number {
    const total = order.price * order.quantity;
    const discount = order.discountCode ? 0.1 : 0;
    return total - (total * discount);
}

const myOrder: IOrder = {
    price: 29.99,          // ✅ number
    quantity: 2,
    discountCode: "SAVE10" // ✅ correct property name
};
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="hard">

### Задача 17: Union Types и Type Guards

Създайте `formatInput`, която приема `string | number`:
- Ако е string → върнете в главни букви
- Ако е number → върнете форматирано с 2 десетични знака

<CollapsibleSection title="✅ Решение">

<img src={useBaseUrl('/img/diagrams/typescript/exercise17-union-types.svg')} alt="Union types with type guards" style={{width: '100%', maxWidth: '550px', margin: '20px auto', display: 'block'}} />

```typescript
function formatInput(input: string | number): string {
    if (typeof input === "string") {
        return input.toUpperCase();
    }
    return input.toFixed(2);
}

console.log(formatInput("hello"));   // "HELLO"
console.log(formatInput(42.5678));   // "42.57"
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="hard">

### Задача 18: Модул за управление на потребители

Изградете система за управление на потребители с:
1. Interface `IUser` с id, username, email, role, createdAt, lastLogin?
2. Type alias `UserRole` = "admin" | "editor" | "viewer"
3. Функции: `createUser`, `updateLastLogin`, `filterUsersByRole`

<CollapsibleSection title="✅ Решение">

```typescript
type UserRole = "admin" | "editor" | "viewer";

interface IUser {
    id: string;
    username: string;
    email: string;
    role: UserRole;
    createdAt: Date;
    lastLogin?: Date;
}

let nextId = 0;
const users: IUser[] = [];

function createUser(username: string, email: string, role: UserRole): IUser {
    return {
        id: `USER_${++nextId}`,
        username,
        email,
        role,
        createdAt: new Date()
    };
}

function updateLastLogin(user: IUser): IUser {
    return { ...user, lastLogin: new Date() };
}

function filterUsersByRole(users: IUser[], role: UserRole): IUser[] {
    return users.filter(u => u.role === role);
}

// Използване
const admin = createUser("admin", "admin@example.com", "admin");
const editor = createUser("john", "john@example.com", "editor");
users.push(admin, editor);

const editors = filterUsersByRole(users, "editor");
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="hard">

### Задача 19: Конфигурация на tsconfig.json

Напишете tsconfig.json за Node.js с: ES2020, CommonJS, strict, src→dist, source maps.

<CollapsibleSection title="✅ Решение">

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "CommonJS",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "sourceMap": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="hard">

### Задача 20: Предизвикателство за дебъгване

Намерете всички грешки в този код:

```typescript
interface IEmployee {
    id: number;
    name: string;
    salary: number;
}

function getTotalSalary(): string {
    let total = 0;
    employees.forEach(emp => { total += emp.salry; }); // Bug
    return total; // Bug
}

function findEmployee(id: string): IEmployee { // Bug
    return employees.find(emp => emp.id === id); // Bug
}

addEmployee({ id: "E001", name: "John", salary: 50000 }); // Bug
```

<CollapsibleSection title="✅ Решение">

<img src={useBaseUrl('/img/diagrams/typescript/exercise20-debugging.svg')} alt="5 bugs found in TypeScript code" style={{width: '100%', maxWidth: '600px', margin: '20px auto', display: 'block'}} />

**Коригиран код:**

```typescript
function getTotalSalary(): number {  // Поправка: return number
    let total = 0;
    employees.forEach(emp => { total += emp.salary; }); // Поправка: salary
    return total;
}

function findEmployee(id: number): IEmployee | undefined { // Поправка: id е number, може да върне undefined
    return employees.find(emp => emp.id === id);
}

addEmployee({ id: 1, name: "John", salary: 50000 }); // Поправка: id е number
```

</CollapsibleSection>

</ExerciseCard>
