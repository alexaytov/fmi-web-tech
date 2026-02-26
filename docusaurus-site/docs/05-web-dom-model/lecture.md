---
title: "Лекция"
sidebar_position: 1
slug: lecture
tags: [dom, javascript, web-development, events, manipulation]
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

# Document Object Model (DOM)

<ViewSlidesButton lectureSlug="web-dom-model" />

<QuickSummary>

**Ключови познания:**
- **DOM** е програмен интерфейс, представящ HTML документа като дървовидна структура от обекти
- Методите `getElementById()`, `querySelector()` и `querySelectorAll()` се използват за селекция на елементи
- `textContent` е безопасен за текст; `innerHTML` може да изпълнява HTML (внимание за XSS)
- **Events** позволяват реакция на потребителски действия чрез `addEventListener()`
- Потокът на събитията включва **capturing** (надолу) и **bubbling** (нагоре)

</QuickSummary>

<LearningObjectives objectives={[
  "Обяснение на DOM структурата и типовете възли (element, text, attribute)",
  "Използване на методи за селекция на елементи от DOM дървото",
  "Манипулиране на съдържание и структура чрез textContent, innerHTML, appendChild",
  "Имплементиране на event-driven интерактивност с addEventListener()",
  "Използване на DevTools за инспектиране и дебъгване на DOM промени"
]} />

---

## Въведение: Какво е DOM?

<WhyBox title="Защо DOM е задължителен за всеки уеб разработчик?">

Как уебсайтовете преминават от статични колекции от текст и изображения към динамични, интерактивни преживявания? Отговорът е **Document Object Model (DOM)**.

DOM е **мостът** между статичните HTML документи и динамичните скриптови езици като JavaScript. Без DOM, уеб страниците биха останали статични и неотзивчиви.

</WhyBox>

<InfoBox title="Дефиниция на DOM">

**Document Object Model (DOM)** е програмен интерфейс, който представя HTML или XML документ като **дървовидна структура от обекти**. Когато браузърът зарежда HTML страница, той парсва HTML-а и конструира DOM представяне в паметта.

Всеки HTML елемент, атрибут и парче текст се превръща в **обект** със собствени свойства и методи, които JavaScript може да достъпва и манипулира.

</InfoBox>

### DOM Дървовидна Структура

<InfoBox title="Визуализация на DOM дървото">

<img
  src={useBaseUrl('/img/diagrams/dom/dom-tree.svg')}
  alt="DOM дървовидна структура - document, html, head, body, title, h1, p, button"
  style={{maxWidth: '700px', margin: '0 auto', display: 'block'}}
/>

</InfoBox>

### Защо DOM е важен?

<Grid columns={2}>
  <Card title="Динамични обновявания" icon="*">
    Чат приложения, тикери на акции, социални мрежи - обновяват се без презареждане
  </Card>
  <Card title="Интерактивни UI елементи" icon="*">
    Падащи менюта, карусели, табове, модални прозорци
  </Card>
</Grid>

<Grid columns={2}>
  <Card title="Валидация на форми" icon="*">
    Проверка на потребителски вход в реално време
  </Card>
  <Card title="Event-driven интерактивност" icon="*">
    Реакция на кликове, натискания на клавиши, движение на мишката
  </Card>
</Grid>

---

## Типове Възли в DOM

<InfoBox title="Визуализация на типовете възли">

<img
  src={useBaseUrl('/img/diagrams/dom/node-types.svg')}
  alt="Типове възли в DOM - Element Node, Text Node, Attribute Node, Comment Node"
  style={{maxWidth: '700px', margin: '0 auto', display: 'block'}}
/>

</InfoBox>

### Йерархични Връзки

<InfoBox title="Родител-Дете-Брат/Сестра">

- **Parent nodes** съдържат child nodes
- **Child nodes** са директно вътре в parent
- **Sibling nodes** са на едно ниво, споделят същия parent

```html
<body>           <!-- Parent на header, main, footer -->
  <header>       <!-- Sibling на main и footer -->
    <h1>Title</h1>
  </header>
  <main>         <!-- Child на body -->
    <p id="msg">Hello</p>
  </main>
  <footer>       <!-- Sibling на header и main -->
    <p>Footer</p>
  </footer>
</body>
```

</InfoBox>

---

## Селекция на DOM Елементи

### Основни Методи за Селекция

<Grid columns={2}>
  <Card title="getElementById()" icon="*">
    Селектира **единичен елемент** по уникален `id` атрибут
  </Card>
  <Card title="querySelector()" icon="*">
    Връща **първия елемент**, отговарящ на CSS селектор
  </Card>
</Grid>

<Grid columns={2}>
  <Card title="querySelectorAll()" icon="*">
    Връща **NodeList** с всички съвпадащи елементи
  </Card>
  <Card title="getElementsByClassName()" icon="*">
    Връща **HTMLCollection** по име на клас
  </Card>
</Grid>

### Примери за Селекция

```javascript
// По ID - връща единичен елемент или null
const message = document.getElementById('message');
console.log(message); // <p id="message">Hello, World!</p>

// querySelector - CSS селектор, първо съвпадение
const firstPara = document.querySelector('p');
const myButton = document.querySelector('.action-button');
const byId = document.querySelector('#message'); // Същото като getElementById

// querySelectorAll - всички съвпадения
const allParagraphs = document.querySelectorAll('p');
console.log(allParagraphs); // NodeList(3) [p, p, p]

// Итерация през NodeList
allParagraphs.forEach(p => console.log(p.textContent));
```

<SuccessBox title="Практически съвет">

Отворете браузърните Developer Tools (F12), отидете на Console, и опитайте тези селектори на всяка уеб страница! След като селектирате елементи, техните свойства и child nodes стават достъпни за манипулация.

</SuccessBox>

---

## DOM Манипулация

<InfoBox title="DOM Manipulation Flow">

<img
  src={useBaseUrl('/img/diagrams/dom/manipulation-flow.svg')}
  alt="DOM манипулация - SELECT (querySelector), MODIFY (textContent, innerHTML), UPDATE (appendChild, removeChild)"
  style={{maxWidth: '700px', margin: '0 auto', display: 'block'}}
/>

</InfoBox>

### textContent vs innerHTML

<ComparisonBox
  left={{
    title: "textContent",
    content: (
      <ul>
        <li><strong>Безопасен</strong> за потребителски вход</li>
        <li>Escape-ва HTML символи автоматично</li>
        <li>Предотвратява XSS атаки</li>
        <li>Показва text as-is</li>
      </ul>
    )
  }}
  right={{
    title: "innerHTML",
    content: (
      <ul>
        <li><strong>Парсва и рендерира</strong> HTML</li>
        <li>Може да изпълни скриптове</li>
        <li><strong>XSS риск</strong> с недоверен вход</li>
        <li>За trusted HTML съдържание</li>
      </ul>
    )
  }}
/>

```javascript
const message = document.getElementById('message');

// textContent - безопасно
message.textContent = 'New plain text message.';
message.textContent = '<span>This will show as plain text</span>';
// Показва: <span>This will show as plain text</span>

// innerHTML - рендерира HTML
message.innerHTML = '<strong>This is bold!</strong>';
// Показва: This is bold! (bold текст)
```

<WarningBox title="Внимание: XSS Уязвимост">

**Никога** не използвайте `innerHTML` с потребителски вход без санитизация! Злонамерен код може да се изпълни и да компрометира сигурността.

```javascript
// ОПАСНО!
message.innerHTML = userInput; // Ако userInput съдържа <script>...

// БЕЗОПАСНО
message.textContent = userInput;
```

</WarningBox>

### Навигация в DOM Дървото

```javascript
const activeItem = document.querySelector('.active');

// Навигация към родител
console.log(activeItem.parentElement);

// Навигация към siblings
console.log(activeItem.previousElementSibling);
console.log(activeItem.nextElementSibling);

// Навигация към деца
console.log(activeItem.children);           // HTMLCollection
console.log(activeItem.firstElementChild);  // Първо дете
console.log(activeItem.lastElementChild);   // Последно дете
```

### Създаване и Добавяне на Елементи

```javascript
// Създаване на нов елемент
const newItem = document.createElement('li');

// Задаване на съдържание
newItem.textContent = 'New task item';

// Добавяне на клас
newItem.classList.add('task-item');

// Добавяне към parent елемент
const taskList = document.getElementById('taskList');
taskList.appendChild(newItem);

// Премахване на елемент
taskList.removeChild(newItem);
// или по-модерно:
newItem.remove();
```

---

## Event-Driven Интерактивност

<WhyBox title="Какво са Events?">

**Event** е нещо, което се случва на уеб страницата и браузърът може да го засече - клик върху бутон, движение на мишката, въвеждане в поле, зареждане на страница.

`addEventListener()` е основният метод за прикрепяне на event handlers към DOM елементи, позволявайки event-driven интерактивност в JavaScript.

</WhyBox>

### Event Bubbling и Capturing

<InfoBox title="Поток на събитията в DOM">

<img
  src={useBaseUrl('/img/diagrams/dom/event-bubbling.svg')}
  alt="Event Bubbling и Capturing - Capturing фаза (надолу), Target, Bubbling фаза (нагоре)"
  style={{maxWidth: '700px', margin: '0 auto', display: 'block'}}
/>

</InfoBox>

### addEventListener() Синтаксис

```javascript
element.addEventListener(event, handler, useCapture);
```

| Параметър | Описание |
|-----------|----------|
| `event` | Име на събитието (`'click'`, `'input'`, `'keydown'`) - БЕЗ "on" префикс |
| `handler` | Функция, която се изпълнява при събитието |
| `useCapture` | `false` (bubbling, default) или `true` (capturing) |

### Често Използвани Events

<Grid columns={3}>
  <Card title="Mouse Events" icon="*">
    `click`, `dblclick`, `mouseover`, `mouseout`, `mousedown`, `mouseup`
  </Card>
  <Card title="Keyboard Events" icon="*">
    `keydown`, `keyup`, `keypress`
  </Card>
  <Card title="Form Events" icon="*">
    `input`, `change`, `submit`, `focus`, `blur`
  </Card>
</Grid>

### Практически Пример

```javascript
const myButton = document.querySelector('.action-button');

// Дефиниране на handler функция
function handleClick(event) {
  console.log('Button clicked!');
  console.log('Target element:', event.target);
  event.target.style.backgroundColor = 'lightblue';
}

// Прикрепяне на event listener
myButton.addEventListener('click', handleClick);

// Множество handlers на един елемент
myButton.addEventListener('mouseover', () => {
  myButton.style.transform = 'scale(1.05)';
});

myButton.addEventListener('mouseout', () => {
  myButton.style.transform = 'scale(1)';
});
```

<SuccessBox title="Предимство на addEventListener()">

За разлика от `onclick` атрибута, `addEventListener()` позволява **множество handlers** за едно събитие на един елемент, без да се презаписват един друг.

</SuccessBox>

### Премахване на Event Listeners

```javascript
// Важно: трябва да подадете същата функция reference
myButton.removeEventListener('click', handleClick);
```

---

## Практически Примери

### Динамичен Todo List

<CollapsibleSection title="Пълен код на Todo List" icon="*">

```html
<input type="text" id="todoInput" placeholder="Add a new task...">
<button id="addTodoBtn">Add Task</button>
<ul id="todoList"></ul>
```

```javascript
const todoInput = document.getElementById('todoInput');
const addTodoBtn = document.getElementById('addTodoBtn');
const todoList = document.getElementById('todoList');

addTodoBtn.addEventListener('click', function() {
  const taskText = todoInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  // Create new list item
  const li = document.createElement('li');
  li.textContent = taskText;

  // Add delete button
  const deleteBtn = document.createElement('span');
  deleteBtn.textContent = ' X';
  deleteBtn.style.cursor = 'pointer';
  deleteBtn.style.color = 'red';
  deleteBtn.addEventListener('click', () => li.remove());
  li.appendChild(deleteBtn);

  // Add to list
  todoList.appendChild(li);
  todoInput.value = '';
});

// Toggle completed state
todoList.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('completed');
  }
});
```

</CollapsibleSection>

### Real-Time Form Validation

<CollapsibleSection title="Код за валидация на форма" icon="*">

```javascript
const emailInput = document.getElementById('email');
const errorMessage = document.getElementById('errorMessage');

emailInput.addEventListener('input', function() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailInput.value.trim() === '') {
    errorMessage.textContent = 'Email is required';
    emailInput.style.borderColor = 'red';
  } else if (!emailRegex.test(emailInput.value)) {
    errorMessage.textContent = 'Please enter a valid email';
    emailInput.style.borderColor = 'orange';
  } else {
    errorMessage.textContent = '';
    emailInput.style.borderColor = 'green';
  }
});
```

</CollapsibleSection>

---

## Debugging с Browser DevTools

<InfoBox title="Developer Tools за DOM">

Браузърните Developer Tools са незаменими за разбиране и дебъгване на DOM.

1. **Elements Panel** - показва **живото DOM дърво**, не оригиналния HTML
2. **Console** - изпълнявайте `document.querySelector()` директно
3. **Event Listeners Tab** - вижте всички прикрепени listeners на елемент
4. **Breakpoints** - спрете изпълнението и инспектирайте състоянието

</InfoBox>

### Полезни Console Методи

```javascript
// Логване на елементи
console.log(document.body);

// Форматирано показване на обекти
console.dir(document.querySelector('button'));

// Проследяване на call stack
console.trace();

// Групиране на логове
console.group('DOM Updates');
console.log('Element selected');
console.log('Content changed');
console.groupEnd();
```

---

## Performance Tips

<WarningBox title="Избягвайте честото DOM манипулиране">

DOM операциите са **скъпи**. Всяка промяна може да предизвика reflow и repaint на страницата.

</WarningBox>

<SuccessBox title="Best Practices за производителност">

1. **Кеширайте DOM references** - не викайте `getElementById()` многократно
2. **Използвайте DocumentFragment** - за batch добавяне на елементи
3. **Минимизирайте reflows** - групирайте style промени
4. **Event Delegation** - един listener на parent вместо много на деца

```javascript
// Лошо - многократни DOM queries
for (let i = 0; i < 100; i++) {
  document.getElementById('list').appendChild(item);
}

// Добре - използване на DocumentFragment
const fragment = document.createDocumentFragment();
for (let i = 0; i < 100; i++) {
  fragment.appendChild(item);
}
document.getElementById('list').appendChild(fragment);
```

</SuccessBox>

---

## Обобщение

<Grid columns={3}>
  <Card title="DOM Структура" icon="*">
    Дървовидна йерархия от възли - element, text, attribute, comment
  </Card>
  <Card title="Селекция" icon="*">
    getElementById, querySelector, querySelectorAll за достъп до елементи
  </Card>
  <Card title="Манипулация" icon="*">
    textContent (safe), innerHTML (careful), createElement, appendChild
  </Card>
</Grid>

<Grid columns={2}>
  <Card title="Events" icon="*">
    addEventListener за интерактивност, capturing и bubbling фази
  </Card>
  <Card title="DevTools" icon="*">
    Elements, Console, Event Listeners за инспекция и debugging
  </Card>
</Grid>

### DOM Workflow

```
1. SELECT  ->  document.querySelector('#element')
2. MODIFY  ->  element.textContent = 'New value'
3. CREATE  ->  document.createElement('div')
4. ATTACH  ->  parent.appendChild(newElement)
5. LISTEN  ->  element.addEventListener('click', handler)
```

---

## Допълнителни Ресурси

### Онлайн Документация
- [MDN Web Docs - DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) - Изчерпателна референция
- [MDN - Events Reference](https://developer.mozilla.org/en-US/docs/Web/Events) - Списък на всички DOM events
- [JavaScript.info - DOM](https://javascript.info/dom-nodes) - Интерактивни уроци

### Видео Уроци
- [Traversy Media - JavaScript DOM Crash Course](https://www.youtube.com/watch?v=0ik6X4DJKCc)
- [The Net Ninja - DOM Tutorial](https://www.youtube.com/playlist?list=PL4cUxeGkcC9gfoKa5la9dsdCNpuey2s-V)

### Книги
- "JavaScript: The Definitive Guide" - David Flanagan
- "Eloquent JavaScript" - Marijn Haverbeke (безплатна онлайн)
