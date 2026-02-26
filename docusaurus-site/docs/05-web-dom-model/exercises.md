---
sidebar_position: 2
slug: exercises
title: "Упражнения"
tags: [exercises, practice, dom, javascript, events, web-development]
---

import ExerciseCard from '@site/src/components/Exercise/ExerciseCard';
import ProgressTracker from '@site/src/components/Exercise/ProgressTracker';
import CollapsibleSection from '@site/src/components/CollapsibleSection';
import InfoBox from '@site/src/components/InfoBoxes/InfoBox';
import WarningBox from '@site/src/components/InfoBoxes/WarningBox';
import SuccessBox from '@site/src/components/InfoBoxes/SuccessBox';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Упражнения: Document Object Model (DOM)

<img src={useBaseUrl('/img/diagrams/dom/dom-header.svg')} alt="DOM Header Banner" style={{width: '100%', maxWidth: '800px', margin: '20px auto', display: 'block'}} />

<ProgressTracker />

<InfoBox title="📋 Инструкции">

- Решете упражненията последователно - те са подредени по трудност
- Използвайте **подсказките** ако се затрудните
- Проверете решенията си след като опитате самостоятелно
- Експериментирайте в **browser DevTools** (F12 → Console)
- DOM манипулацията е основа за интерактивни уеб приложения

</InfoBox>

---

## DOM Tree Structure

<img src={useBaseUrl('/img/diagrams/dom/dom-tree-structure.svg')} alt="DOM Tree Structure Diagram" style={{width: '100%', maxWidth: '700px', margin: '20px auto', display: 'block'}} />

---

## Лесни Упражнения (EASY)

<ExerciseCard difficulty="easy">

### Задача 1: Дефиниция на DOM

**Multiple Choice** - Какво означава DOM?

A) Document Object Model
B) Data Object Management
C) Digital Output Method
D) Document Oriented Markup

<CollapsibleSection title="💡 Подсказка">

DOM е програмен интерфейс, който представя HTML документа като дървовидна структура от обекти.

</CollapsibleSection>

<CollapsibleSection title="✅ Решение">

**Верен отговор: A) Document Object Model**

DOM е **Document Object Model** - програмен интерфейс, който:
- Представя HTML/XML документи като дървовидна структура
- Позволява на JavaScript да чете и модифицира съдържанието
- Дефинира логическата структура на документите
- Осигурява начин за достъп и манипулация на елементи

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="easy">

### Задача 2: Типове Nodes

**Short Answer** - Назовете трите основни типа nodes в DOM дървото.

<CollapsibleSection title="💡 Подсказка">

Помислете за HTML документ - има елементи, текст вътре в тях и атрибути на елементите.

</CollapsibleSection>

<CollapsibleSection title="✅ Решение">

**Трите основни типа nodes:**

1. **Element Nodes** - HTML елементи (`<div>`, `<p>`, `<span>`)
2. **Text Nodes** - Текстово съдържание вътре в елементи
3. **Attribute Nodes** - Атрибути на елементи (`class`, `id`, `href`)

```javascript
// Element Node
const div = document.querySelector('div');

// Text Node
const textNode = div.firstChild; // текстът вътре

// Attribute (достъп чрез методи)
const className = div.getAttribute('class');
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="easy">

### Задача 3: DOM Relationships

**Multiple Choice** - Каква е връзката между `<body>` и `<p>` в този HTML?

```html
<body>
  <div>
    <p>Hello</p>
  </div>
</body>
```

A) `<body>` е parent на `<p>`
B) `<body>` е grandparent на `<p>`
C) `<body>` и `<p>` са siblings
D) `<p>` е parent на `<body>`

<img src={useBaseUrl('/img/diagrams/dom/dom-relationships.svg')} alt="DOM Relationships Diagram" style={{width: '100%', maxWidth: '500px', margin: '15px auto', display: 'block'}} />

<CollapsibleSection title="✅ Решение">

**Верен отговор: B) `<body>` е grandparent на `<p>`**

Йерархията е:
- `<body>` → parent на → `<div>` → parent на → `<p>`
- Следователно `<body>` е **grandparent** (баба/дядо) на `<p>`

```javascript
const p = document.querySelector('p');

console.log(p.parentElement);           // <div>
console.log(p.parentElement.parentElement); // <body>
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="easy">

### Задача 4: getElementById

**Short Answer** - Какъв JavaScript метод ще използвате за да селектирате елемент с `id="header"`? Напишете пълния statement.

<CollapsibleSection title="💡 Подсказка">

Методът е на `document` обекта и включва думата "Id" в името си.

</CollapsibleSection>

<CollapsibleSection title="✅ Решение">

```javascript
const header = document.getElementById('header');
```

**Важни детайли:**
- `getElementById` е **без** `#` - подавате само името на ID
- Връща **един** елемент (или `null` ако не съществува)
- ID трябва да е уникален в документа
- Case-sensitive е

**Алтернатива с querySelector:**
```javascript
const header = document.querySelector('#header'); // с #
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="easy">

### Задача 5: querySelector vs querySelectorAll

**Multiple Choice** - Какво селектира `document.querySelector('.menu')`?

A) Всички елементи с класа "menu"
B) Първият елемент с класа "menu"
C) Елемента с id "menu"
D) Всички menu тагове в документа

<img src={useBaseUrl('/img/diagrams/dom/queryselector-first-match.svg')} alt="querySelector First Match Diagram" style={{width: '100%', maxWidth: '600px', margin: '15px auto', display: 'block'}} />

<CollapsibleSection title="✅ Решение">

**Верен отговор: B) Първият елемент с класа "menu"**

**Разлика между методите:**

| Метод | Връща | Пример |
|-------|-------|--------|
| `querySelector()` | **Първия** match | `document.querySelector('.menu')` |
| `querySelectorAll()` | **Всички** matches (NodeList) | `document.querySelectorAll('.menu')` |

```javascript
// Първи елемент с клас menu
const firstMenu = document.querySelector('.menu');

// Всички елементи с клас menu
const allMenus = document.querySelectorAll('.menu');
console.log(allMenus.length); // брой елементи
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="easy">

### Задача 6: Множество Методи за Селекция

**Practical Exercise** - За този HTML, напишете JavaScript за селектиране на button елемента по **два различни начина**:

```html
<button id="submitBtn" class="primary-button">Submit</button>
```

<CollapsibleSection title="💡 Подсказка">

Можете да селектирате по ID, по клас, или с CSS selector.

</CollapsibleSection>

<CollapsibleSection title="✅ Решение">

```javascript
// Метод 1: По ID
const btn1 = document.getElementById('submitBtn');

// Метод 2: С querySelector по ID
const btn2 = document.querySelector('#submitBtn');

// Метод 3: По клас
const btn3 = document.querySelector('.primary-button');

// Метод 4: По таг и клас
const btn4 = document.querySelector('button.primary-button');

// Метод 5: getElementsByClassName (връща collection)
const btn5 = document.getElementsByClassName('primary-button')[0];
```

**Сравнение на методите:**
- `getElementById` - най-бърз за ID селекция
- `querySelector` - най-гъвкав, използва CSS селектори
- `getElementsByClassName` - връща живо collection

</CollapsibleSection>

</ExerciseCard>

---

## Средни Упражнения (MEDIUM)

<img src={useBaseUrl('/img/diagrams/dom/medium-level-banner.svg')} alt="Medium Level Banner" style={{width: '100%', maxWidth: '700px', margin: '20px auto', display: 'block'}} />

<ExerciseCard difficulty="medium">

### Задача 7: textContent vs innerHTML

**Short Answer** - Обяснете ключовата разлика между `textContent` и `innerHTML`. Кога да използвате всеки и какъв security проблем е свързан с `innerHTML`?

<CollapsibleSection title="💡 Подсказка">

Единият интерпретира HTML тагове, другият ги показва като обикновен текст.

</CollapsibleSection>

<CollapsibleSection title="✅ Решение">

<img src={useBaseUrl('/img/diagrams/dom/textcontent-vs-innerhtml.svg')} alt="textContent vs innerHTML Comparison" style={{width: '100%', maxWidth: '600px', margin: '15px auto', display: 'block'}} />

```javascript
const div = document.getElementById('output');

// textContent - безопасен
div.textContent = '<script>alert("hack")</script>';
// Показва: <script>alert("hack")</script> като текст

// innerHTML - ОПАСЕН с user input!
div.innerHTML = '<script>alert("hack")</script>';
// Може да изпълни зловреден код!
```

**Кога да използвате:**
- `textContent` - за чист текст, особено от user input
- `innerHTML` - само за trusted HTML съдържание

**Security риск:** XSS (Cross-Site Scripting) атаки при използване на `innerHTML` с непроверен user input.

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium">

### Задача 8: Промяна на Текст

**Practical Exercise** - Напишете JavaScript код, който:
1. Селектира параграфа с id "greeting"
2. Променя текста му на "Добре дошли в нашия сайт!"

```html
<p id="greeting">Hello, visitor!</p>
```

<CollapsibleSection title="✅ Решение">

```javascript
// Селектиране и промяна
const greeting = document.getElementById('greeting');
greeting.textContent = 'Добре дошли в нашия сайт!';

// Или в един ред:
document.getElementById('greeting').textContent = 'Добре дошли в нашия сайт!';
```

**Резултат в HTML:**
```html
<p id="greeting">Добре дошли в нашия сайт!</p>
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium">

### Задача 9: textContent Output

**Multiple Choice** - Какво ще се покаже на страницата след изпълнение на този код?

```javascript
const div = document.getElementById('output');
div.textContent = '<strong>Bold Text</strong>';
```

A) **Bold Text** (в bold)
B) `<strong>Bold Text</strong>` (като обикновен текст)
C) Ще възникне грешка
D) Нищо няма да се покаже

<CollapsibleSection title="✅ Решение">

**Верен отговор: B) `<strong>Bold Text</strong>` (като обикновен текст)**

`textContent` **не интерпретира** HTML тагове - показва ги като обикновен текст.

```javascript
// textContent - таговете се показват
div.textContent = '<strong>Bold</strong>';
// Резултат: <strong>Bold</strong>

// innerHTML - таговете се интерпретират
div.innerHTML = '<strong>Bold</strong>';
// Резултат: Bold (в bold)
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium">

### Задача 10: DOM Navigation

**Practical Exercise** - За дадения HTML, напишете JavaScript за:
1. Селектиране на `<li>` с клас "current"
2. Логване на parent елемента в конзолата
3. Логване на следващия sibling елемент

```html
<ul id="nav">
  <li>Home</li>
  <li class="current">About</li>
  <li>Contact</li>
</ul>
```

<img src={useBaseUrl('/img/diagrams/dom/dom-navigation.svg')} alt="DOM Navigation Diagram" style={{width: '100%', maxWidth: '500px', margin: '15px auto', display: 'block'}} />

<CollapsibleSection title="✅ Решение">

```javascript
// 1. Селектиране на текущия елемент
const current = document.querySelector('.current');

// 2. Логване на parent
console.log(current.parentElement);
// Output: <ul id="nav">...</ul>

// 3. Логване на следващия sibling
console.log(current.nextElementSibling);
// Output: <li>Contact</li>

// Бонус: предишен sibling
console.log(current.previousElementSibling);
// Output: <li>Home</li>
```

**DOM Navigation Properties:**
- `parentElement` - родителски елемент
- `nextElementSibling` - следващ съседен елемент
- `previousElementSibling` - предишен съседен елемент
- `children` - колекция от деца
- `firstElementChild` / `lastElementChild`

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium">

### Задача 11: Създаване на Елементи

**Practical Exercise** - Напишете JavaScript код, който създава нов `<li>` елемент с текст "New Item" и го добавя към съществуващ `<ul>` с id "myList".

<CollapsibleSection title="💡 Подсказка">

Използвайте `createElement()` за създаване, `textContent` за текста и `appendChild()` за добавяне.

</CollapsibleSection>

<CollapsibleSection title="✅ Решение">

```javascript
// 1. Създаване на нов елемент
const newItem = document.createElement('li');

// 2. Задаване на текст
newItem.textContent = 'New Item';

// 3. Намиране на списъка
const list = document.getElementById('myList');

// 4. Добавяне към списъка
list.appendChild(newItem);
```

**Алтернативни методи за добавяне:**
```javascript
// appendChild - добавя в края
list.appendChild(newItem);

// prepend - добавя в началото
list.prepend(newItem);

// insertBefore - добавя преди конкретен елемент
list.insertBefore(newItem, list.firstChild);
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium">

### Задача 12: addEventListener Parameters

**Short Answer** - Какви са трите параметъра на `addEventListener()` метода? Кои са задължителни?

<CollapsibleSection title="✅ Решение">

```javascript
element.addEventListener(eventType, handlerFunction, options);
```

**Параметри:**

| # | Параметър | Задължителен | Описание |
|---|-----------|--------------|----------|
| 1 | `eventType` | ✅ Да | Тип на събитието (`'click'`, `'input'`, `'submit'`) |
| 2 | `handlerFunction` | ✅ Да | Функция, която се изпълнява |
| 3 | `options` | ❌ Не | Опции (`capture`, `once`, `passive`) |

```javascript
// Минимален синтаксис (2 параметъра)
button.addEventListener('click', handleClick);

// С опции
button.addEventListener('click', handleClick, { once: true });

// С inline функция
button.addEventListener('click', function() {
  console.log('Clicked!');
});

// С arrow функция
button.addEventListener('click', () => console.log('Clicked!'));
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium">

### Задача 13: Защо addEventListener?

**Multiple Choice** - Защо `addEventListener()` се предпочита пред inline event handlers като `onclick="..."`?

A) По-бързо се изпълнява
B) Позволява множество handlers за едно събитие на един елемент
C) Единственият начин за обработка на събития в JavaScript
D) Автоматично предотвратява default поведение

<CollapsibleSection title="✅ Решение">

**Верен отговор: B) Позволява множество handlers за едно събитие на един елемент**

<img src={useBaseUrl('/img/diagrams/dom/addeventlistener-vs-onclick.svg')} alt="addEventListener vs onclick Comparison" style={{width: '100%', maxWidth: '600px', margin: '15px auto', display: 'block'}} />

```javascript
// ❌ Inline - само един handler
<button onclick="doSomething()">Click</button>

// ✅ addEventListener - множество handlers
button.addEventListener('click', logClick);
button.addEventListener('click', updateUI);
button.addEventListener('click', sendAnalytics);
// Всички три функции ще се изпълнят!
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium">

### Задача 14: Click Event

**Practical Exercise** - Напишете JavaScript, който закача click event listener към бутон с id "alertBtn" и показва alert "Button clicked!" при клик.

```html
<button id="alertBtn">Click Me</button>
```

<CollapsibleSection title="✅ Решение">

```javascript
// Метод 1: С именувана функция
const button = document.getElementById('alertBtn');

function handleClick() {
  alert('Button clicked!');
}

button.addEventListener('click', handleClick);

// Метод 2: С inline функция
document.getElementById('alertBtn').addEventListener('click', function() {
  alert('Button clicked!');
});

// Метод 3: С arrow функция
document.getElementById('alertBtn').addEventListener('click', () => {
  alert('Button clicked!');
});
```

</CollapsibleSection>

</ExerciseCard>

---

## Трудни Упражнения (HARD)

<img src={useBaseUrl('/img/diagrams/dom/hard-level-banner.svg')} alt="Hard Level Banner" style={{width: '100%', maxWidth: '700px', margin: '20px auto', display: 'block'}} />

<ExerciseCard difficulty="hard">

### Задача 15: Character Counter

**Practical Exercise** - Създайте "character counter" функционалност:
- Input поле и span за показване на броя символи
- Real-time обновяване при въвеждане
- Предупреждение (червен цвят) ако броят надвиши 50 символа

```html
<input type="text" id="userInput" placeholder="Type something...">
<span id="charCount">0</span> characters
```

<CollapsibleSection title="💡 Подсказка">

Използвайте `input` събитие за real-time следене. Достъпете `value.length` за броя символи.

</CollapsibleSection>

<CollapsibleSection title="✅ Решение">

```javascript
const input = document.getElementById('userInput');
const counter = document.getElementById('charCount');
const MAX_CHARS = 50;

input.addEventListener('input', function() {
  const length = this.value.length;
  counter.textContent = length;

  // Промяна на цвета при превишаване
  if (length > MAX_CHARS) {
    counter.style.color = 'red';
    counter.style.fontWeight = 'bold';
  } else {
    counter.style.color = 'inherit';
    counter.style.fontWeight = 'normal';
  }
});
```

**Подобрена версия с CSS класове:**
```javascript
input.addEventListener('input', function() {
  const length = this.value.length;
  counter.textContent = length;

  // Използване на CSS клас
  counter.classList.toggle('warning', length > MAX_CHARS);
});
```

```css
.warning {
  color: red;
  font-weight: bold;
}
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="hard">

### Задача 16: Toggle Visibility

**Practical Exercise** - Имплементирайте toggle функционалност:
- Бутон за превключване на видимостта на `<div>` елемент
- Използвайте `classList.toggle()` с CSS клас "hidden"
- Текстът на бутона се променя между "Show" и "Hide"

```html
<button id="toggleBtn">Hide</button>
<div id="content">This content can be toggled.</div>
```

<CollapsibleSection title="✅ Решение">

```css
.hidden {
  display: none;
}
```

```javascript
const button = document.getElementById('toggleBtn');
const content = document.getElementById('content');

button.addEventListener('click', function() {
  // Toggle видимостта
  content.classList.toggle('hidden');

  // Промяна на текста на бутона
  if (content.classList.contains('hidden')) {
    this.textContent = 'Show';
  } else {
    this.textContent = 'Hide';
  }
});

// По-кратка версия:
button.addEventListener('click', function() {
  const isHidden = content.classList.toggle('hidden');
  this.textContent = isHidden ? 'Show' : 'Hide';
});
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="hard">

### Задача 17: Debug the Code

**Problem Solving** - Намерете и поправете грешките в следния код:

```javascript
const button = document.querySelector('#myButton');
button.addEventlistener('onclick', function() {
  const newPara = document.createElement('p');
  newPara.innerhtml = 'New paragraph added!';
  document.body.appendChild(newPara);
};
```

<CollapsibleSection title="💡 Подсказка">

Има 4 грешки:
1. Правопис на метод
2. Име на събитие
3. Правопис на property
4. Липсваща скоба

</CollapsibleSection>

<CollapsibleSection title="✅ Решение">

<img src={useBaseUrl('/img/diagrams/dom/debug-code-comparison.svg')} alt="Debug Code Comparison" style={{width: '100%', maxWidth: '650px', margin: '15px auto', display: 'block'}} />

**Поправен код:**
```javascript
const button = document.querySelector('#myButton');
button.addEventListener('click', function() {  // ← Fixes: addEventListener, 'click'
  const newPara = document.createElement('p');
  newPara.innerHTML = 'New paragraph added!';   // ← Fix: innerHTML
  document.body.appendChild(newPara);
});                                              // ← Fix: добавена )
```

**Грешки:**
1. `addEventlistener` → `addEventListener` (camelCase)
2. `'onclick'` → `'click'` (без "on" prefix)
3. `innerhtml` → `innerHTML` (camelCase)
4. `};` → `});` (липсваща затваряща скоба за функцията)

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="hard">

### Задача 18: Item List Manager

**Practical Exercise** - Създайте "item list manager":
1. HTML с input поле, "Add" бутон и празен `<ul>`
2. JavaScript, който:
   - Добавя нов `<li>` с текста от input при клик на бутона
   - Всеки `<li>` има "Delete" бутон за премахване
   - Изчиства input полето след добавяне
   - Предотвратява добавяне на празни items

<CollapsibleSection title="💡 Подсказка">

Използвайте `trim()` за проверка на празни стойности. За delete бутона, закачете event към него при създаване.

</CollapsibleSection>

<CollapsibleSection title="✅ Решение">

**HTML:**
```html
<input type="text" id="itemInput" placeholder="Enter item...">
<button id="addBtn">Add</button>
<ul id="itemList"></ul>
```

**JavaScript:**
```javascript
const input = document.getElementById('itemInput');
const addBtn = document.getElementById('addBtn');
const list = document.getElementById('itemList');

addBtn.addEventListener('click', function() {
  const text = input.value.trim();

  // Предотвратяване на празни items
  if (text === '') {
    alert('Please enter an item!');
    return;
  }

  // Създаване на нов list item
  const li = document.createElement('li');
  li.textContent = text;

  // Създаване на delete бутон
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.style.marginLeft = '10px';

  // Delete функционалност
  deleteBtn.addEventListener('click', function() {
    li.remove();
  });

  // Добавяне на бутона към item
  li.appendChild(deleteBtn);

  // Добавяне на item към списъка
  list.appendChild(li);

  // Изчистване на input
  input.value = '';
  input.focus();
});

// Бонус: Добавяне с Enter
input.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    addBtn.click();
  }
});
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="hard">

### Задача 19: Form Validation

**Application Exercise** - Имплементирайте real-time form validation:
- Email input поле
- `input` event listener проверяващ за "@" и "."
- Показване на validation съобщение:
  - Зелен текст "Valid email format" ако е валиден
  - Червен текст "Invalid email format" ако е невалиден
- Disable на submit бутона при невалиден email

```html
<input type="text" id="emailInput" placeholder="Enter email">
<span id="emailFeedback"></span>
<button id="submitBtn">Submit</button>
```

<CollapsibleSection title="✅ Решение">

```javascript
const emailInput = document.getElementById('emailInput');
const feedback = document.getElementById('emailFeedback');
const submitBtn = document.getElementById('submitBtn');

// Начално състояние
submitBtn.disabled = true;

emailInput.addEventListener('input', function() {
  const email = this.value;
  const isValid = email.includes('@') && email.includes('.');

  if (isValid) {
    feedback.textContent = 'Valid email format';
    feedback.style.color = 'green';
    submitBtn.disabled = false;
  } else {
    feedback.textContent = 'Invalid email format';
    feedback.style.color = 'red';
    submitBtn.disabled = true;
  }

  // Скриване на feedback при празен input
  if (email === '') {
    feedback.textContent = '';
    submitBtn.disabled = true;
  }
});
```

**По-добра validation с regex:**
```javascript
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

emailInput.addEventListener('input', function() {
  const email = this.value;
  const isValid = isValidEmail(email);

  feedback.textContent = isValid ? 'Valid email format' : 'Invalid email format';
  feedback.style.color = isValid ? 'green' : 'red';
  submitBtn.disabled = !isValid;
});
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="hard">

### Задача 20: FAQ Accordion

**Comprehensive Application** - Създайте интерактивен FAQ accordion:
- Множество въпрос/отговор двойки
- Клик на въпрос toggle-ва видимостта на отговора
- Само един отговор видим в даден момент
- Използвайте **event delegation** - един event listener на parent container

```html
<div id="faq-container">
  <div class="faq-item">
    <h3 class="question">What is the DOM?</h3>
    <p class="answer hidden">The DOM is a programming interface for web documents.</p>
  </div>
  <div class="faq-item">
    <h3 class="question">Why use addEventListener?</h3>
    <p class="answer hidden">It allows multiple handlers and better control over events.</p>
  </div>
  <div class="faq-item">
    <h3 class="question">What is event bubbling?</h3>
    <p class="answer hidden">Event bubbling is when an event propagates up through parent elements.</p>
  </div>
</div>
```

<img src={useBaseUrl('/img/diagrams/dom/event-delegation-pattern.svg')} alt="Event Delegation Pattern Diagram" style={{width: '100%', maxWidth: '650px', margin: '15px auto', display: 'block'}} />

<CollapsibleSection title="💡 Подсказка">

Event delegation: Закачете listener на parent, после използвайте `event.target` за да определите кой елемент е кликнат. `closest()` методът помага да намерите parent елемент.

</CollapsibleSection>

<CollapsibleSection title="✅ Решение">

**CSS:**
```css
.hidden {
  display: none;
}

.question {
  cursor: pointer;
  padding: 10px;
  background: #f0f0f0;
  margin: 0;
}

.question:hover {
  background: #e0e0e0;
}

.answer {
  padding: 10px;
  border-left: 3px solid #667eea;
  margin: 0;
}
```

**JavaScript с Event Delegation:**
```javascript
const faqContainer = document.getElementById('faq-container');

faqContainer.addEventListener('click', function(event) {
  // Проверка дали кликът е върху въпрос
  const question = event.target.closest('.question');

  if (!question) return; // Клик не е върху въпрос

  // Намиране на съответния отговор
  const answer = question.nextElementSibling;
  const isCurrentlyOpen = !answer.classList.contains('hidden');

  // Затваряне на всички отговори
  const allAnswers = faqContainer.querySelectorAll('.answer');
  allAnswers.forEach(a => a.classList.add('hidden'));

  // Ако текущият не е бил отворен, отвори го
  if (!isCurrentlyOpen) {
    answer.classList.remove('hidden');
  }
});
```

**Защо Event Delegation:**
- Един listener вместо много (по-ефективно)
- Работи за динамично добавени елементи
- По-лесна поддръжка на кода

</CollapsibleSection>

</ExerciseCard>

---

<SuccessBox title="🎉 Поздравления!">

Завършихте всички 20 упражнения по DOM манипулация! Вече владеете:

- **Селекция на елементи** - getElementById, querySelector, querySelectorAll
- **DOM навигация** - parent, children, siblings
- **Манипулация на съдържание** - textContent, innerHTML, createElement
- **Event handling** - addEventListener, event delegation
- **Практически компоненти** - counters, toggles, validators, accordions

**Следващи стъпки:**
- Практикувайте с реални проекти
- Изследвайте advanced patterns като Web Components
- Научете DOM performance optimization техники

</SuccessBox>
