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

# TypeScript Fundamentals - Exercises

<img src={useBaseUrl('/img/diagrams/typescript/header-banner.svg')} alt="TypeScript Fundamentals Banner" style={{width: '100%', maxWidth: '800px', margin: '20px auto', display: 'block'}} />

<ProgressTracker />

---

## Лесни Упражнения (EASY)

<ExerciseCard difficulty="easy">

### Exercise 1: Multiple Choice - TypeScript Definition

What is TypeScript?

A) A completely different programming language from JavaScript
B) A statically typed superset of JavaScript that compiles to plain JavaScript
C) A runtime environment for JavaScript
D) A JavaScript framework like React or Angular

<CollapsibleSection title="✅ Solution">

**Answer: B) A statically typed superset of JavaScript that compiles to plain JavaScript**

<img src={useBaseUrl('/img/diagrams/typescript/exercise1-js-to-ts.svg')} alt="JavaScript to TypeScript relationship diagram" style={{width: '100%', maxWidth: '600px', margin: '20px auto', display: 'block'}} />

**Key Points:**
- TypeScript is a **superset** - all valid JS is valid TS
- Types are checked at **compile time**, not runtime
- TS compiler (tsc) outputs plain JavaScript

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="easy">

### Exercise 2: Fill in the Blank - Basic Type Declaration

Complete the TypeScript variable declarations:

```typescript
let username: _______ = "alice_dev";
let userAge: _______ = 25;
let isLoggedIn: _______ = true;
```

<CollapsibleSection title="✅ Solution">

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

### Exercise 3: True or False - TypeScript Benefits

Mark each statement as True or False:

1. TypeScript catches type errors at runtime, just like JavaScript. _____
2. Any valid JavaScript code is also valid TypeScript code. _____
3. TypeScript provides better IDE support with autocompletion. _____
4. The `any` type is recommended for all variables. _____

<CollapsibleSection title="✅ Solution">

<img src={useBaseUrl('/img/diagrams/typescript/exercise3-true-false.svg')} alt="True/False answers for TypeScript benefits" style={{width: '100%', maxWidth: '600px', margin: '20px auto', display: 'block'}} />

| Statement | Answer | Explanation |
|-----------|--------|-------------|
| 1 | **False** | TypeScript catches errors at **compile time** |
| 2 | **True** | TypeScript is a superset of JavaScript |
| 3 | **True** | IntelliSense, autocompletion, inline errors |
| 4 | **False** | `any` defeats the purpose of TypeScript |

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="easy">

### Exercise 4: Error Detection Timing

Explain when TypeScript catches type errors compared to JavaScript. Why is this beneficial?

<CollapsibleSection title="✅ Solution">

<img src={useBaseUrl('/img/diagrams/typescript/exercise4-error-timing.svg')} alt="Error detection timing comparison between JavaScript and TypeScript" style={{width: '100%', maxWidth: '650px', margin: '20px auto', display: 'block'}} />

TypeScript catches errors at **compile time**, while JavaScript only catches errors at **runtime**.

**Benefits:**
- Errors found before deployment
- Faster debugging in IDE
- Prevents bugs from reaching production

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="easy">

### Exercise 5: Special Types Matching

Match each type with its description:

| Type | Description |
|------|-------------|
| 1. `void` | A. Accepts any value but requires type checks |
| 2. `any` | B. Intentional absence of value |
| 3. `unknown` | C. Functions with no return value |
| 4. `null` | D. Disables type checking |

<CollapsibleSection title="✅ Solution">

<img src={useBaseUrl('/img/diagrams/typescript/exercise5-special-types.svg')} alt="Special TypeScript types: void, any, unknown, null" style={{width: '100%', maxWidth: '600px', margin: '20px auto', display: 'block'}} />

| Type | Answer | Description |
|------|--------|-------------|
| `void` | **C** | Functions with no return value |
| `any` | **D** | Disables type checking (avoid!) |
| `unknown` | **A** | Safe alternative to any |
| `null` | **B** | Intentional absence of value |

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="easy">

### Exercise 6: Array Declaration

Declare a TypeScript array `colors` that only contains strings with three color names.

<CollapsibleSection title="✅ Solution">

<img src={useBaseUrl('/img/diagrams/typescript/exercise6-array-syntax.svg')} alt="Two array type syntaxes in TypeScript" style={{width: '100%', maxWidth: '550px', margin: '20px auto', display: 'block'}} />

```typescript
// Syntax 1: Type[] (most common)
let colors: string[] = ["red", "green", "blue"];

// Syntax 2: Array<Type> (generic)
let colors: Array<string> = ["red", "green", "blue"];

// Type safety:
colors.push("yellow");  // ✅ OK
colors.push(42);        // ❌ Error: number not assignable to string
```

</CollapsibleSection>

</ExerciseCard>

---

## Средни Упражнения (MEDIUM)

<ExerciseCard difficulty="medium">

### Exercise 7: Error Spotting

Identify the TypeScript error:

```typescript
let scores: number[] = [85, 92, 78, 95];
scores.push("excellent");
```

<CollapsibleSection title="✅ Solution">

<img src={useBaseUrl('/img/diagrams/typescript/exercise7-error-spotting.svg')} alt="TypeScript error: string not assignable to number" style={{width: '100%', maxWidth: '550px', margin: '20px auto', display: 'block'}} />

**Error:** The array `scores` is `number[]`, but we're trying to push a `string`.

```typescript
// Fix options:
scores.push(100);  // ✅ Add a number

// Or declare as union type:
let scores: (number | string)[] = [85, 92, 78, 95];
scores.push("excellent");  // ✅ Now allowed
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium">

### Exercise 8: Tuple Declaration

Create a tuple `StudentRecord` with: ID (number), name (string), enrolled (boolean).

<CollapsibleSection title="✅ Solution">

<img src={useBaseUrl('/img/diagrams/typescript/exercise8-tuple.svg')} alt="Tuple: Fixed-length typed array" style={{width: '100%', maxWidth: '550px', margin: '20px auto', display: 'block'}} />

```typescript
// Define tuple type
type StudentRecord = [number, string, boolean];

// Create variable
let student: StudentRecord = [12345, "Ivan Petrov", true];

// Access elements
console.log(student[0]); // 12345 (number)
console.log(student[1]); // "Ivan Petrov" (string)
console.log(student[2]); // true (boolean)
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium">

### Exercise 9: Type Alias Creation

Create type alias `Book` with: title (string), author (string), pages (number), isbn (optional string).

<CollapsibleSection title="✅ Solution">

<img src={useBaseUrl('/img/diagrams/typescript/exercise9-type-alias.svg')} alt="Type alias Book with properties" style={{width: '100%', maxWidth: '500px', margin: '20px auto', display: 'block'}} />

```typescript
type Book = {
    title: string;
    author: string;
    pages: number;
    isbn?: string;  // Optional (?)
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
    // isbn is optional
};
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium">

### Exercise 10: Function with Type Annotations

Write `calculateDiscount(price: number, discountPercent: number)` that returns the discounted price.

<CollapsibleSection title="✅ Solution">

<img src={useBaseUrl('/img/diagrams/typescript/exercise10-function-types.svg')} alt="Function type with input and output types" style={{width: '100%', maxWidth: '600px', margin: '20px auto', display: 'block'}} />

```typescript
function calculateDiscount(price: number, discountPercent: number): number {
    return price - (price * discountPercent / 100);
}

// Arrow function version
const calculateDiscount = (price: number, discountPercent: number): number =>
    price - (price * discountPercent / 100);

console.log(calculateDiscount(100, 20)); // 80
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium">

### Exercise 11: tsconfig.json Strict Mode

Which option enables all strict type-checking options?

A) `"strictMode": true`
B) `"strict": true`
C) `"typeChecking": "strict"`
D) `"enableStrict": true`

<CollapsibleSection title="✅ Solution">

**Answer: B) `"strict": true`**

<img src={useBaseUrl('/img/diagrams/typescript/exercise11-tsconfig.svg')} alt="tsconfig.json with strict mode enabled" style={{width: '100%', maxWidth: '550px', margin: '20px auto', display: 'block'}} />

`"strict": true` enables:
- `strictNullChecks`
- `strictFunctionTypes`
- `noImplicitAny`
- And more...

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium">

### Exercise 12: Function Type Expression

Complete the function type:

```typescript
type StringToNumber = _______________________
let getLength: StringToNumber = (s) => s.length;
```

<CollapsibleSection title="✅ Solution">

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

### Exercise 13: Project Setup Order

Order these TypeScript setup steps (1-5):

___ `npm install --save-dev typescript`
___ `mkdir my-project`
___ `npx tsc --init`
___ `npm init -y`
___ `npx tsc`

<CollapsibleSection title="✅ Solution">

<img src={useBaseUrl('/img/diagrams/typescript/exercise13-setup-order.svg')} alt="TypeScript project setup order: 5 steps" style={{width: '100%', maxWidth: '600px', margin: '20px auto', display: 'block'}} />

**Order:**
1. `mkdir my-project`
2. `npm init -y`
3. `npm install --save-dev typescript`
4. `npx tsc --init`
5. `npx tsc`

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium">

### Exercise 14: void vs undefined

Explain the difference between `void` and `undefined` in TypeScript.

<CollapsibleSection title="✅ Solution">

<img src={useBaseUrl('/img/diagrams/typescript/exercise14-void-vs-undefined.svg')} alt="Comparison of void vs undefined in TypeScript" style={{width: '100%', maxWidth: '600px', margin: '20px auto', display: 'block'}} />

| `void` | `undefined` |
|--------|-------------|
| Function return type | Variable value |
| "No return value" | "Value is undefined" |
| `function log(): void` | `let x: string \| undefined` |

</CollapsibleSection>

</ExerciseCard>

---

## Трудни Упражнения (HARD)

<ExerciseCard difficulty="hard">

### Exercise 15: Interface Implementation

Create interface `IProduct` with: id (string), name (string), price (number), category (string), inStock (boolean).

Implement `createProduct` function and `addToInventory` function.

<CollapsibleSection title="✅ Solution">

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

// Usage
const laptop = createProduct("P001", "MacBook", 1999, "Electronics", true);
addToInventory(laptop);
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="hard">

### Exercise 16: Type Safety Analysis

Find bugs in this JavaScript and rewrite in TypeScript:

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

<CollapsibleSection title="✅ Solution">

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

### Exercise 17: Union Types and Type Guards

Create `formatInput` that accepts `string | number`:
- If string → return uppercase
- If number → return formatted with 2 decimals

<CollapsibleSection title="✅ Solution">

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

### Exercise 18: User Management Module

Build a user management system with:
1. Interface `IUser` with id, username, email, role, createdAt, lastLogin?
2. Type alias `UserRole` = "admin" | "editor" | "viewer"
3. Functions: `createUser`, `updateLastLogin`, `filterUsersByRole`

<CollapsibleSection title="✅ Solution">

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

// Usage
const admin = createUser("admin", "admin@example.com", "admin");
const editor = createUser("john", "john@example.com", "editor");
users.push(admin, editor);

const editors = filterUsersByRole(users, "editor");
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="hard">

### Exercise 19: tsconfig.json Configuration

Write tsconfig.json for Node.js with: ES2020, CommonJS, strict, src→dist, source maps.

<CollapsibleSection title="✅ Solution">

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

### Exercise 20: Debugging Challenge

Find all errors in this code:

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

<CollapsibleSection title="✅ Solution">

<img src={useBaseUrl('/img/diagrams/typescript/exercise20-debugging.svg')} alt="5 bugs found in TypeScript code" style={{width: '100%', maxWidth: '600px', margin: '20px auto', display: 'block'}} />

**Corrected Code:**

```typescript
function getTotalSalary(): number {  // Fix: return number
    let total = 0;
    employees.forEach(emp => { total += emp.salary; }); // Fix: salary
    return total;
}

function findEmployee(id: number): IEmployee | undefined { // Fix: id is number, can return undefined
    return employees.find(emp => emp.id === id);
}

addEmployee({ id: 1, name: "John", salary: 50000 }); // Fix: id is number
```

</CollapsibleSection>

</ExerciseCard>
