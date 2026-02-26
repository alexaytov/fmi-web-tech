---
sidebar_position: 2
slug: exercises
title: "Упражнения"
tags: [exercises, practice, javascript, basics, variables, functions, arrays]
---

import ExerciseCard from '@site/src/components/Exercise/ExerciseCard';
import ProgressTracker from '@site/src/components/Exercise/ProgressTracker';
import CollapsibleSection from '@site/src/components/CollapsibleSection';
import InfoBox from '@site/src/components/InfoBoxes/InfoBox';
import WarningBox from '@site/src/components/InfoBoxes/WarningBox';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Упражнения: Основи на JavaScript

<img src={useBaseUrl('/img/diagrams/javascript/js-header.svg')} alt="JavaScript Fundamentals Header" style={{width: '100%', maxWidth: '800px', margin: '20px auto', display: 'block'}} />

<ProgressTracker />

---

## Лесни Упражнения (EASY)

<ExerciseCard difficulty="easy">

### Exercise 1: Деклариране на променливи

**Въпрос:** Кой от следните начини за деклариране на променлива е препоръчителен в съвременния JavaScript за стойност, която НЯМА да се променя?

A) `var appName = "MyApp";`
B) `let appName = "MyApp";`
C) `const appName = "MyApp";`
D) `appName = "MyApp";`

<CollapsibleSection title="✅ Решение">

**Отговор: C) `const appName = "MyApp";`**

<img src={useBaseUrl('/img/diagrams/javascript/variable-declarations.svg')} alt="Variable Declarations Comparison" style={{width: '100%', maxWidth: '600px', margin: '20px auto', display: 'block'}} />

```javascript
const appName = "MyApp";  // ✅ Правилно за константи
appName = "NewName";      // ❌ TypeError: Assignment to constant variable
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="easy">

### Exercise 2: Типове данни

**Задача:** Определете типа на всяка от следните стойности:

```javascript
let a = "Здравей";
let b = 42;
let c = true;
let d;
let e = null;
let f = [1, 2, 3];
```

**Въпрос:** Кой е типът на всяка променлива?

<CollapsibleSection title="✅ Решение">

<img src={useBaseUrl('/img/diagrams/javascript/data-types.svg')} alt="JavaScript Data Types" style={{width: '100%', maxWidth: '650px', margin: '20px auto', display: 'block'}} />

```javascript
console.log(typeof a); // "string"
console.log(typeof b); // "number"
console.log(typeof c); // "boolean"
console.log(typeof d); // "undefined"
console.log(typeof e); // "object" (бъг!)
console.log(typeof f); // "object"
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="easy">

### Exercise 3: Аритметични оператори

**Задача:** Изчислете резултата от всеки израз:

```javascript
let x = 15;
let y = 4;

console.log(x + y);   // ?
console.log(x - y);   // ?
console.log(x * y);   // ?
console.log(x / y);   // ?
console.log(x % y);   // ?
```

<CollapsibleSection title="✅ Решение">

<img src={useBaseUrl('/img/diagrams/javascript/arithmetic-operators.svg')} alt="Arithmetic Operators" style={{width: '100%', maxWidth: '600px', margin: '20px auto', display: 'block'}} />

```javascript
console.log(x + y);   // 19  (събиране)
console.log(x - y);   // 11  (изваждане)
console.log(x * y);   // 60  (умножение)
console.log(x / y);   // 3.75 (деление)
console.log(x % y);   // 3   (остатък: 15 = 4*3 + 3)
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="easy">

### Exercise 4: Оператори за сравнение

**Въпрос:** Какъв ще бъде резултатът от всеки израз?

```javascript
console.log(5 == "5");    // ?
console.log(5 === "5");   // ?
console.log(10 > 5);      // ?
console.log(3 !== "3");   // ?
```

<CollapsibleSection title="✅ Решение">

<img src={useBaseUrl('/img/diagrams/javascript/comparison-operators.svg')} alt="Comparison Operators" style={{width: '100%', maxWidth: '600px', margin: '20px auto', display: 'block'}} />

```javascript
console.log(5 == "5");    // true  (конвертира типа)
console.log(5 === "5");   // false (строго сравнение)
console.log(10 > 5);      // true
console.log(3 !== "3");   // true  (строго различно)
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="easy">

### Exercise 5: Прост if/else

**Задача:** Напишете JavaScript код, който проверява дали числото `age` е по-голямо или равно на 18. Ако е - изведете "Пълнолетен", в противен случай - "Непълнолетен".

```javascript
let age = 20;
// Вашият код тук
```

<CollapsibleSection title="✅ Решение">

<img src={useBaseUrl('/img/diagrams/javascript/if-else-flowchart.svg')} alt="If-Else Flowchart" style={{width: '100%', maxWidth: '500px', margin: '20px auto', display: 'block'}} />

```javascript
let age = 20;

if (age >= 18) {
    console.log("Пълнолетен");
} else {
    console.log("Непълнолетен");
}
// Изход: "Пълнолетен"
```

**Тернарен оператор (кратък вариант):**
```javascript
console.log(age >= 18 ? "Пълнолетен" : "Непълнолетен");
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="easy">

### Exercise 6: Прост for цикъл

**Задача:** Напишете `for` цикъл, който извежда числата от 1 до 5 в конзолата.

<CollapsibleSection title="✅ Решение">

<img src={useBaseUrl('/img/diagrams/javascript/for-loop-anatomy.svg')} alt="For Loop Anatomy" style={{width: '100%', maxWidth: '600px', margin: '20px auto', display: 'block'}} />

```javascript
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
// Output: 1, 2, 3, 4, 5
```

</CollapsibleSection>

</ExerciseCard>

---

## Средни Упражнения (MEDIUM)

<ExerciseCard difficulty="medium">

### Exercise 7: Логически оператори

**Задача:** Дадени са следните променливи:

```javascript
let isLoggedIn = true;
let isAdmin = false;
let hasPermission = true;
```

Напишете логически изрази, които:
1. Връщат `true` само ако потребителят е логнат И е администратор
2. Връщат `true` ако потребителят е логнат ИЛИ има разрешение
3. Връщат обратната стойност на `isAdmin`

<CollapsibleSection title="✅ Решение">

<img src={useBaseUrl('/img/diagrams/javascript/logical-operators.svg')} alt="Logical Operators" style={{width: '100%', maxWidth: '650px', margin: '20px auto', display: 'block'}} />

```javascript
// 1. Логнат И администратор
console.log(isLoggedIn && isAdmin);      // false

// 2. Логнат ИЛИ има разрешение
console.log(isLoggedIn || hasPermission); // true

// 3. Обратна стойност
console.log(!isAdmin);                    // true
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium">

### Exercise 8: Switch statement

**Задача:** Напишете `switch` конструкция, която приема номер на ден (1-7) и извежда името на деня на български.

```javascript
let dayNumber = 3;
// Вашият код тук
```

<CollapsibleSection title="✅ Решение">

<img src={useBaseUrl('/img/diagrams/javascript/switch-statement.svg')} alt="Switch Statement" style={{width: '100%', maxWidth: '550px', margin: '20px auto', display: 'block'}} />

```javascript
let dayNumber = 3;

switch (dayNumber) {
    case 1: console.log("Понеделник"); break;
    case 2: console.log("Вторник"); break;
    case 3: console.log("Сряда"); break;
    case 4: console.log("Четвъртък"); break;
    case 5: console.log("Петък"); break;
    case 6: console.log("Събота"); break;
    case 7: console.log("Неделя"); break;
    default: console.log("Невалиден ден");
}
// Изход: "Сряда"
```

<WarningBox title="Важно: break">

Без `break`, изпълнението продължава към следващия `case`!

</WarningBox>

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium">

### Exercise 9: Работа с масиви

**Задача:** Даден е масив:

```javascript
let fruits = ["ябълка", "банан", "портокал", "грозде"];
```

1. Изведете третия елемент
2. Добавете "киви" в края
3. Изведете дължината

<CollapsibleSection title="✅ Решение">

<img src={useBaseUrl('/img/diagrams/javascript/array-indexing.svg')} alt="Array Indexing" style={{width: '100%', maxWidth: '600px', margin: '20px auto', display: 'block'}} />

```javascript
// 1. Трети елемент (индекс 2)
console.log(fruits[2]); // "портокал"

// 2. Добавяне в края
fruits.push("киви");

// 3. Дължина
console.log(fruits.length); // 5
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium">

### Exercise 10: Работа с обекти

**Задача:** Създайте обект `student` със свойства:
- `name` - "Иван"
- `age` - 22
- `grades` - [5, 6, 4, 5]
- `isActive` - true

Изведете името и първата оценка.

<CollapsibleSection title="✅ Решение">

<img src={useBaseUrl('/img/diagrams/javascript/object-structure.svg')} alt="Object Structure" style={{width: '100%', maxWidth: '550px', margin: '20px auto', display: 'block'}} />

```javascript
const student = {
    name: "Иван",
    age: 22,
    grades: [5, 6, 4, 5],
    isActive: true
};

console.log(student.name);      // "Иван"
console.log(student.grades[0]); // 5
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium">

### Exercise 11: Функция с параметри

**Задача:** Напишете функция `calculateArea`, която приема `width` и `height` и връща площта.

```javascript
console.log(calculateArea(5, 3)); // 15
console.log(calculateArea(10, 2)); // 20
```

<CollapsibleSection title="✅ Решение">

<img src={useBaseUrl('/img/diagrams/javascript/function-flow.svg')} alt="Function Flow" style={{width: '100%', maxWidth: '600px', margin: '20px auto', display: 'block'}} />

```javascript
function calculateArea(width, height) {
    return width * height;
}

// Arrow function version
const calculateArea = (width, height) => width * height;
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium">

### Exercise 12: Цикъл с масив

**Задача:** Изчислете сумата на числата в масива:

```javascript
let numbers = [10, 20, 30, 40, 50];
// Очакван резултат: 150
```

<CollapsibleSection title="✅ Решение">

```javascript
let numbers = [10, 20, 30, 40, 50];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log(sum); // 150

// Modern approach with reduce:
let sum = numbers.reduce((acc, num) => acc + num, 0);
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium">

### Exercise 13: Тернарен оператор

**Задача:** Пренапишете с тернарен оператор:

```javascript
let score = 75;
let result;

if (score >= 50) {
    result = "Издържал";
} else {
    result = "Неиздържал";
}
```

<CollapsibleSection title="✅ Решение">

<img src={useBaseUrl('/img/diagrams/javascript/ternary-operator.svg')} alt="Ternary Operator" style={{width: '100%', maxWidth: '600px', margin: '20px auto', display: 'block'}} />

```javascript
let score = 75;
let result = score >= 50 ? "Издържал" : "Неиздържал";
console.log(result); // "Издържал"
```

</CollapsibleSection>

</ExerciseCard>

---

## Трудни Упражнения (HARD)

<ExerciseCard difficulty="hard">

### Exercise 14: Валидация на вход

**Задача:** Напишете функция `validateUsername`, която проверява:
- Не е празен стринг
- Минимум 3 символа
- Максимум 15 символа

Връща обект с `isValid` и `message`.

<CollapsibleSection title="✅ Решение">

<img src={useBaseUrl('/img/diagrams/javascript/validation-pipeline.svg')} alt="Validation Pipeline" style={{width: '100%', maxWidth: '600px', margin: '20px auto', display: 'block'}} />

```javascript
function validateUsername(username) {
    if (!username || typeof username !== 'string') {
        return { isValid: false, message: "Потребителското име е задължително" };
    }
    if (username.length < 3) {
        return { isValid: false, message: "Минимум 3 символа" };
    }
    if (username.length > 15) {
        return { isValid: false, message: "Максимум 15 символа" };
    }
    return { isValid: true, message: "OK" };
}

console.log(validateUsername("ab"));        // { isValid: false, message: "Минимум 3 символа" }
console.log(validateUsername("validUser")); // { isValid: true, message: "OK" }
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="hard">

### Exercise 15: Филтриране на масив

**Задача:** Напишете функция `filterEvenNumbers`, която връща само четните числа.

```javascript
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8]));
// Резултат: [2, 4, 6, 8]
```

<CollapsibleSection title="✅ Решение">

```javascript
function filterEvenNumbers(numbers) {
    const result = [];
    for (let num of numbers) {
        if (num % 2 === 0) {
            result.push(num);
        }
    }
    return result;
}

// Modern approach:
const filterEvenNumbers = numbers => numbers.filter(n => n % 2 === 0);
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="hard">

### Exercise 16: Arrow функции

**Задача:** Преобразувайте в arrow function и приложете върху масив:

```javascript
function square(num) {
    return num * num;
}

let numbers = [1, 2, 3, 4, 5];
// Очакван резултат: [1, 4, 9, 16, 25]
```

<CollapsibleSection title="✅ Решение">

<img src={useBaseUrl('/img/diagrams/javascript/arrow-function-evolution.svg')} alt="Arrow Function Evolution" style={{width: '100%', maxWidth: '600px', margin: '20px auto', display: 'block'}} />

```javascript
const square = num => num * num;
let numbers = [1, 2, 3, 4, 5];

let squares = numbers.map(square);
console.log(squares); // [1, 4, 9, 16, 25]

// Or inline:
let squares = numbers.map(n => n * n);
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="hard">

### Exercise 17: Обект с методи

**Задача:** Създайте обект `calculator` с методи: `add`, `subtract`, `multiply`, `divide` (с проверка за 0).

<CollapsibleSection title="✅ Решение">

```javascript
const calculator = {
    add(a, b) { return a + b; },
    subtract(a, b) { return a - b; },
    multiply(a, b) { return a * b; },
    divide(a, b) {
        if (b === 0) return "Грешка: деление на 0";
        return a / b;
    }
};

console.log(calculator.add(5, 3));      // 8
console.log(calculator.divide(10, 2));  // 5
console.log(calculator.divide(10, 0));  // "Грешка: деление на 0"
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="hard">

### Exercise 18: Closure - Брояч

**Задача:** Имплементирайте `createCounter` с closure, връщащ обект с:
- `increment()` - увеличава и връща
- `decrement()` - намалява и връща
- `getValue()` - връща стойността

<CollapsibleSection title="✅ Решение">

<img src={useBaseUrl('/img/diagrams/javascript/closure-counter.svg')} alt="Closure Counter" style={{width: '100%', maxWidth: '550px', margin: '20px auto', display: 'block'}} />

```javascript
function createCounter() {
    let count = 0; // Private variable via closure

    return {
        increment() { return ++count; },
        decrement() { return --count; },
        getValue() { return count; }
    };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.getValue());  // 1
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="hard">

### Exercise 19: DOM манипулация

**Задача:** При клик на бутон, toggle текста между "Оригинален текст" и "Текстът е променен!".

```html
<p id="output">Оригинален текст</p>
<button id="changeBtn">Промени</button>
```

<CollapsibleSection title="✅ Решение">

```javascript
const output = document.getElementById('output');
const changeBtn = document.getElementById('changeBtn');
let isChanged = false;

changeBtn.addEventListener('click', () => {
    output.textContent = isChanged
        ? 'Оригинален текст'
        : 'Текстът е променен!';
    isChanged = !isChanged;
});
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="hard">

### Exercise 20: Todo система

**Задача:** Създайте функции за управление на задачи:
- `createTask(title)` - връща обект с id, title, completed
- `addTask(tasks, title)` - добавя задача
- `completeTask(tasks, id)` - маркира като завършена
- `getActiveTasks(tasks)` - връща незавършените

<CollapsibleSection title="✅ Решение">

```javascript
let nextId = 1;

function createTask(title) {
    return { id: nextId++, title, completed: false, createdAt: new Date() };
}

function addTask(tasks, title) {
    return [...tasks, createTask(title)];
}

function completeTask(tasks, id) {
    return tasks.map(t => t.id === id ? {...t, completed: true} : t);
}

function getActiveTasks(tasks) {
    return tasks.filter(t => !t.completed);
}

// Usage
let myTasks = [];
myTasks = addTask(myTasks, "Learn JavaScript");
myTasks = addTask(myTasks, "Do exercises");
myTasks = completeTask(myTasks, 1);
console.log(getActiveTasks(myTasks)); // Only task 2
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="hard">

### Exercise 21: Debugging практика

**Задача:** Намерете 4-те грешки в кода:

```javascript
function calculateAverage(numbers) {
    let sum = 0
    for (let i = 0; i <= numbers.length; i++) {
        sum += numbers[i];
    }
    let average = sum / numbers.lenght;
    return average
}
```

<CollapsibleSection title="✅ Решение">

<img src={useBaseUrl('/img/diagrams/javascript/debugging-bugs.svg')} alt="Debugging Bugs" style={{width: '100%', maxWidth: '600px', margin: '20px auto', display: 'block'}} />

**Грешки:**
1. `let sum = 0` → `let sum = 0;`
2. `i <= numbers.length` → `i < numbers.length` (off-by-one)
3. `numbers.lenght` → `numbers.length` (typo)
4. `return average` → `return average;`

</CollapsibleSection>

</ExerciseCard>
