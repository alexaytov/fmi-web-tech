---
title: React Основи
theme: white
highlightTheme: github
transition: slide
---

# React Основи

### JavaScript библиотека за изграждане на потребителски интерфейси

Note:
Добре дошли в лекцията за React - най-популярната библиотека за изграждане на модерни уеб приложения.

---

## Учебни Цели

🎯 Разбирате React архитектурата и Virtual DOM <!-- .element: class="fragment" -->

🧩 Създавате функционални компоненти с JSX <!-- .element: class="fragment" -->

📤 Предавате данни чрез props <!-- .element: class="fragment" -->

💾 Управлявате състояние с useState <!-- .element: class="fragment" -->

⚡ Използвате useEffect за странични ефекти <!-- .element: class="fragment" -->

Note:
Това са петте основни умения, които ще придобиете днес.

---

## Защо React?

Note:
Нека започнем с това защо React е толкова популярен.

--

### Императивно vs Декларативно

<svg viewBox="0 0 700 250" style="max-width: 650px; margin: 0 auto; display: block;">
  <defs>
    <linearGradient id="impGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ef4444"/><stop offset="100%" stop-color="#dc2626"/>
    </linearGradient>
    <linearGradient id="decGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#10b981"/><stop offset="100%" stop-color="#059669"/>
    </linearGradient>
  </defs>
  <rect x="30" y="30" width="280" height="180" rx="10" fill="url(#impGrad)"/>
  <text x="170" y="60" fill="white" font-family="system-ui" font-size="16" font-weight="600" text-anchor="middle">Императивно (Vanilla JS)</text>
  <text x="170" y="95" fill="rgba(255,255,255,0.9)" font-family="monospace" font-size="11" text-anchor="middle">const el = document.getElementById('msg');</text>
  <text x="170" y="115" fill="rgba(255,255,255,0.9)" font-family="monospace" font-size="11" text-anchor="middle">el.textContent = 'Hello';</text>
  <text x="170" y="135" fill="rgba(255,255,255,0.9)" font-family="monospace" font-size="11" text-anchor="middle">el.className = 'active';</text>
  <text x="170" y="170" fill="rgba(255,255,255,0.7)" font-family="system-ui" font-size="12" text-anchor="middle">КАК да променим DOM</text>
  <text x="170" y="195" fill="rgba(255,255,255,0.5)" font-family="system-ui" font-size="10" text-anchor="middle">Стъпка по стъпка инструкции</text>

  <rect x="390" y="30" width="280" height="180" rx="10" fill="url(#decGrad)"/>
  <text x="530" y="60" fill="white" font-family="system-ui" font-size="16" font-weight="600" text-anchor="middle">Декларативно (React)</text>
  <text x="530" y="100" fill="rgba(255,255,255,0.9)" font-family="monospace" font-size="11" text-anchor="middle">&lt;p className={isActive ? 'active' : ''}&gt;</text>
  <text x="530" y="120" fill="rgba(255,255,255,0.9)" font-family="monospace" font-size="11" text-anchor="middle">  {message}</text>
  <text x="530" y="140" fill="rgba(255,255,255,0.9)" font-family="monospace" font-size="11" text-anchor="middle">&lt;/p&gt;</text>
  <text x="530" y="170" fill="rgba(255,255,255,0.7)" font-family="system-ui" font-size="12" text-anchor="middle">КАКВО искаме да видим</text>
  <text x="530" y="195" fill="rgba(255,255,255,0.5)" font-family="system-ui" font-size="10" text-anchor="middle">React се грижи за промените</text>
</svg>

Note:
React ни позволява да описваме желания резултат, не стъпките за постигането му.

--

### Component-Based Architecture

<svg viewBox="0 0 600 280" style="max-width: 550px; margin: 0 auto; display: block;">
  <defs>
    <linearGradient id="appGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#8b5cf6"/><stop offset="100%" stop-color="#7c3aed"/>
    </linearGradient>
    <linearGradient id="compGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#3b82f6"/><stop offset="100%" stop-color="#2563eb"/>
    </linearGradient>
    <linearGradient id="childGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#10b981"/><stop offset="100%" stop-color="#059669"/>
    </linearGradient>
  </defs>

  <rect x="200" y="20" width="200" height="40" rx="8" fill="url(#appGrad)"/>
  <text x="300" y="46" fill="white" font-family="monospace" font-size="14" text-anchor="middle">&lt;App /&gt;</text>

  <line x1="300" y1="60" x2="150" y2="90" stroke="#64748b" stroke-width="2"/>
  <line x1="300" y1="60" x2="450" y2="90" stroke="#64748b" stroke-width="2"/>

  <rect x="50" y="90" width="200" height="40" rx="8" fill="url(#compGrad)"/>
  <text x="150" y="116" fill="white" font-family="monospace" font-size="13" text-anchor="middle">&lt;Header /&gt;</text>

  <rect x="350" y="90" width="200" height="40" rx="8" fill="url(#compGrad)"/>
  <text x="450" y="116" fill="white" font-family="monospace" font-size="13" text-anchor="middle">&lt;Main /&gt;</text>

  <line x1="150" y1="130" x2="100" y2="160" stroke="#64748b" stroke-width="2"/>
  <line x1="150" y1="130" x2="200" y2="160" stroke="#64748b" stroke-width="2"/>

  <rect x="30" y="160" width="140" height="35" rx="6" fill="url(#childGrad)"/>
  <text x="100" y="183" fill="white" font-family="monospace" font-size="11" text-anchor="middle">&lt;Logo /&gt;</text>

  <rect x="130" y="160" width="140" height="35" rx="6" fill="url(#childGrad)"/>
  <text x="200" y="183" fill="white" font-family="monospace" font-size="11" text-anchor="middle">&lt;Nav /&gt;</text>

  <line x1="450" y1="130" x2="400" y2="160" stroke="#64748b" stroke-width="2"/>
  <line x1="450" y1="130" x2="500" y2="160" stroke="#64748b" stroke-width="2"/>

  <rect x="330" y="160" width="140" height="35" rx="6" fill="url(#childGrad)"/>
  <text x="400" y="183" fill="white" font-family="monospace" font-size="11" text-anchor="middle">&lt;ProductList /&gt;</text>

  <rect x="430" y="160" width="140" height="35" rx="6" fill="url(#childGrad)"/>
  <text x="500" y="183" fill="white" font-family="monospace" font-size="11" text-anchor="middle">&lt;Sidebar /&gt;</text>

  <text x="300" y="230" fill="#64748b" font-family="system-ui" font-size="12" text-anchor="middle">UI се разбива на малки, преизползваеми части</text>
  <text x="300" y="250" fill="#94a3b8" font-family="system-ui" font-size="11" text-anchor="middle">Всеки компонент е самостоятелна единица</text>
</svg>

Note:
Компонентната архитектура подобрява организацията, тестируемостта и екипната работа.

---

## Virtual DOM

Note:
Как React постига висока производителност.

--

### Как работи Virtual DOM

<svg viewBox="0 0 700 320" style="max-width: 650px; margin: 0 auto; display: block;">
  <defs>
    <linearGradient id="vd1" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#3b82f6"/><stop offset="100%" stop-color="#2563eb"/>
    </linearGradient>
    <linearGradient id="vd2" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#10b981"/><stop offset="100%" stop-color="#059669"/>
    </linearGradient>
    <linearGradient id="vd3" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b"/><stop offset="100%" stop-color="#d97706"/>
    </linearGradient>
    <linearGradient id="vd4" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#8b5cf6"/><stop offset="100%" stop-color="#7c3aed"/>
    </linearGradient>
  </defs>

  <rect x="30" y="30" width="140" height="70" rx="8" fill="url(#vd1)"/>
  <text x="100" y="58" fill="white" font-family="system-ui" font-size="11" font-weight="600" text-anchor="middle">1. State Change</text>
  <text x="100" y="78" fill="rgba(255,255,255,0.8)" font-family="monospace" font-size="9" text-anchor="middle">setState(new)</text>

  <line x1="175" y1="65" x2="210" y2="65" stroke="#64748b" stroke-width="2" marker-end="url(#arrow)"/>

  <rect x="215" y="30" width="140" height="70" rx="8" fill="url(#vd2)"/>
  <text x="285" y="58" fill="white" font-family="system-ui" font-size="11" font-weight="600" text-anchor="middle">2. New VDOM</text>
  <text x="285" y="78" fill="rgba(255,255,255,0.8)" font-family="system-ui" font-size="9" text-anchor="middle">In-memory tree</text>

  <line x1="360" y1="65" x2="395" y2="65" stroke="#64748b" stroke-width="2"/>

  <rect x="400" y="30" width="140" height="70" rx="8" fill="url(#vd3)"/>
  <text x="470" y="58" fill="white" font-family="system-ui" font-size="11" font-weight="600" text-anchor="middle">3. Diffing</text>
  <text x="470" y="78" fill="rgba(255,255,255,0.8)" font-family="system-ui" font-size="9" text-anchor="middle">Compare trees</text>

  <line x1="545" y1="65" x2="580" y2="65" stroke="#64748b" stroke-width="2"/>

  <rect x="585" y="30" width="100" height="70" rx="8" fill="url(#vd4)"/>
  <text x="635" y="58" fill="white" font-family="system-ui" font-size="11" font-weight="600" text-anchor="middle">4. Patch</text>
  <text x="635" y="78" fill="rgba(255,255,255,0.8)" font-family="system-ui" font-size="9" text-anchor="middle">Min updates</text>

  <g transform="translate(100, 140)">
    <rect x="0" y="0" width="80" height="30" rx="4" fill="#e2e8f0"/>
    <text x="40" y="20" fill="#475569" font-family="monospace" font-size="9" text-anchor="middle">div</text>
    <line x1="40" y1="30" x2="20" y2="50" stroke="#94a3b8"/>
    <line x1="40" y1="30" x2="60" y2="50" stroke="#94a3b8"/>
    <rect x="-10" y="50" width="60" height="25" rx="4" fill="#e2e8f0"/>
    <text x="20" y="67" fill="#475569" font-family="monospace" font-size="8" text-anchor="middle">h1</text>
    <rect x="40" y="50" width="60" height="25" rx="4" fill="#fecaca" stroke="#ef4444"/>
    <text x="70" y="67" fill="#dc2626" font-family="monospace" font-size="8" text-anchor="middle">p: old</text>
    <text x="40" y="95" fill="#64748b" font-family="system-ui" font-size="9" text-anchor="middle">Old VDOM</text>
  </g>

  <g transform="translate(300, 140)">
    <rect x="0" y="0" width="80" height="30" rx="4" fill="#e2e8f0"/>
    <text x="40" y="20" fill="#475569" font-family="monospace" font-size="9" text-anchor="middle">div</text>
    <line x1="40" y1="30" x2="20" y2="50" stroke="#94a3b8"/>
    <line x1="40" y1="30" x2="60" y2="50" stroke="#94a3b8"/>
    <rect x="-10" y="50" width="60" height="25" rx="4" fill="#e2e8f0"/>
    <text x="20" y="67" fill="#475569" font-family="monospace" font-size="8" text-anchor="middle">h1</text>
    <rect x="40" y="50" width="60" height="25" rx="4" fill="#bbf7d0" stroke="#22c55e"/>
    <text x="70" y="67" fill="#16a34a" font-family="monospace" font-size="8" text-anchor="middle">p: new</text>
    <text x="40" y="95" fill="#64748b" font-family="system-ui" font-size="9" text-anchor="middle">New VDOM</text>
  </g>

  <g transform="translate(500, 150)">
    <rect x="0" y="0" width="150" height="80" rx="6" fill="#fef3c7" stroke="#f59e0b"/>
    <text x="75" y="25" fill="#92400e" font-family="system-ui" font-size="10" text-anchor="middle">Real DOM</text>
    <rect x="20" y="40" width="110" height="25" rx="4" fill="#bbf7d0" stroke="#22c55e"/>
    <text x="75" y="57" fill="#16a34a" font-family="monospace" font-size="9" text-anchor="middle">Only &lt;p&gt; updated!</text>
  </g>

  <text x="350" y="300" fill="#64748b" font-family="system-ui" font-size="11" text-anchor="middle">React обновява само променените части от DOM</text>
</svg>

Note:
Virtual DOM минимизира скъпите DOM операции чрез сравняване и batch updates.

---

## Функционални Компоненти

Note:
Основната градивна единица в React.

--

### Анатомия на компонент

```jsx
import React, { useState } from 'react';

function Counter({ initialCount }) {  // Props
  const [count, setCount] = useState(initialCount);  // State

  const increment = () => setCount(c => c + 1);  // Handler

  return (  // JSX
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+1</button>
    </div>
  );
}
```

Note:
Компонентът е функция, която приема props и връща JSX.

--

### Компонент = Функция

<svg viewBox="0 0 600 200" style="max-width: 550px; margin: 0 auto; display: block;">
  <defs>
    <linearGradient id="fnGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#3b82f6"/><stop offset="100%" stop-color="#8b5cf6"/>
    </linearGradient>
  </defs>

  <rect x="30" y="60" width="120" height="80" rx="8" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
  <text x="90" y="95" fill="#1d4ed8" font-family="system-ui" font-size="12" font-weight="600" text-anchor="middle">Props</text>
  <text x="90" y="115" fill="#64748b" font-family="monospace" font-size="9" text-anchor="middle">{name, age}</text>

  <polygon points="160,100 200,80 200,120" fill="#3b82f6"/>

  <rect x="210" y="50" width="180" height="100" rx="10" fill="url(#fnGrad)"/>
  <text x="300" y="85" fill="white" font-family="system-ui" font-size="14" font-weight="600" text-anchor="middle">Component</text>
  <text x="300" y="105" fill="rgba(255,255,255,0.8)" font-family="monospace" font-size="10" text-anchor="middle">function UserCard()</text>
  <text x="300" y="125" fill="rgba(255,255,255,0.6)" font-family="system-ui" font-size="9" text-anchor="middle">+ State + Logic</text>

  <polygon points="400,100 440,80 440,120" fill="#8b5cf6"/>

  <rect x="450" y="60" width="120" height="80" rx="8" fill="#f3e8ff" stroke="#8b5cf6" stroke-width="2"/>
  <text x="510" y="95" fill="#7c3aed" font-family="system-ui" font-size="12" font-weight="600" text-anchor="middle">JSX</text>
  <text x="510" y="115" fill="#64748b" font-family="monospace" font-size="9" text-anchor="middle">&lt;div&gt;...&lt;/div&gt;</text>

  <text x="300" y="180" fill="#64748b" font-family="system-ui" font-size="11" text-anchor="middle">Props влизат → JSX излиза (UI описание)</text>
</svg>

Note:
Компонентите са чисти функции, които трансформират данни в UI.

---

## JSX

Note:
Синтаксисът, който използваме за описване на UI.

--

### JSX ≠ HTML

```jsx
// JSX (React)
<div className="card">
  <label htmlFor="email">Email</label>
  <input id="email" />
  <img src={avatar} alt="User" />
</div>
```

⚠️ **Ключови разлики:** <!-- .element: class="fragment" -->

✏️ `className` вместо `class` <!-- .element: class="fragment" -->

🏷️ `htmlFor` вместо `for` <!-- .element: class="fragment" -->

🔒 Всички тагове трябва да се затварят <!-- .element: class="fragment" -->

Note:
JSX прилича на HTML, но е JavaScript и следва различни правила.

--

### Embedding Expressions

```jsx
const user = { name: 'Иван', age: 25 };
const isAdmin = true;

function Profile() {
  return (
    <div>
      {/* Variables */}
      <h1>Hello, {user.name}!</h1>

      {/* Expressions */}
      <p>Age: {user.age * 2}</p>

      {/* Conditionals */}
      {isAdmin && <span>Admin Badge</span>}
    </div>
  );
}
```

💡 Използвайте `{}` за JavaScript в JSX

Note:
Фигурните скоби позволяват вграждане на всякакви JavaScript изрази.

---

## Props

Note:
Как данните се предават между компоненти.

--

### Unidirectional Data Flow

<svg viewBox="0 0 600 280" style="max-width: 550px; margin: 0 auto; display: block;">
  <defs>
    <linearGradient id="parentG" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#8b5cf6"/><stop offset="100%" stop-color="#7c3aed"/>
    </linearGradient>
    <linearGradient id="childG" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#3b82f6"/><stop offset="100%" stop-color="#2563eb"/>
    </linearGradient>
    <marker id="propArr" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#f59e0b"/>
    </marker>
  </defs>

  <rect x="200" y="20" width="200" height="60" rx="10" fill="url(#parentG)"/>
  <text x="300" y="45" fill="white" font-family="system-ui" font-size="13" font-weight="600" text-anchor="middle">Parent Component</text>
  <text x="300" y="65" fill="rgba(255,255,255,0.8)" font-family="monospace" font-size="9" text-anchor="middle">state: {`{ user, theme }`}</text>

  <line x1="250" y1="80" x2="150" y2="130" stroke="#f59e0b" stroke-width="3" marker-end="url(#propArr)"/>
  <line x1="350" y1="80" x2="450" y2="130" stroke="#f59e0b" stroke-width="3" marker-end="url(#propArr)"/>

  <rect x="120" y="95" width="90" height="25" rx="4" fill="#fef3c7" stroke="#f59e0b"/>
  <text x="165" y="112" fill="#92400e" font-family="monospace" font-size="8" text-anchor="middle">user={user}</text>

  <rect x="390" y="95" width="100" height="25" rx="4" fill="#fef3c7" stroke="#f59e0b"/>
  <text x="440" y="112" fill="#92400e" font-family="monospace" font-size="8" text-anchor="middle">theme={theme}</text>

  <rect x="50" y="140" width="200" height="50" rx="10" fill="url(#childG)"/>
  <text x="150" y="165" fill="white" font-family="system-ui" font-size="12" font-weight="600" text-anchor="middle">Child: UserProfile</text>
  <text x="150" y="182" fill="rgba(255,255,255,0.7)" font-family="monospace" font-size="9" text-anchor="middle">props: {`{ user }`}</text>

  <rect x="350" y="140" width="200" height="50" rx="10" fill="url(#childG)"/>
  <text x="450" y="165" fill="white" font-family="system-ui" font-size="12" font-weight="600" text-anchor="middle">Child: Settings</text>
  <text x="450" y="182" fill="rgba(255,255,255,0.7)" font-family="monospace" font-size="9" text-anchor="middle">props: {`{ theme }`}</text>

  <rect x="180" y="220" width="240" height="40" rx="6" fill="#fef2f2" stroke="#ef4444"/>
  <text x="300" y="238" fill="#dc2626" font-family="system-ui" font-size="11" font-weight="600" text-anchor="middle">Props are READ-ONLY!</text>
  <text x="300" y="252" fill="#64748b" font-family="system-ui" font-size="9" text-anchor="middle">Данните текат надолу, не нагоре</text>
</svg>

Note:
Props осигуряват еднопосочен поток на данни от родител към дете.

--

### Props в код

```jsx
// Parent
function App() {
  return (
    <UserCard
      name="Мария"
      age={25}
      isAdmin={true}
    />
  );
}

// Child
function UserCard({ name, age, isAdmin }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      {isAdmin && <span>👑 Admin</span>}
    </div>
  );
}
```

Note:
Destructuring в параметрите прави кода по-чист.

---

## useState Hook

Note:
Как управляваме локално състояние в компонент.

--

### Синтаксис на useState

```jsx
const [value, setValue] = useState(initialValue);
```

📦 `value` - текуща стойност <!-- .element: class="fragment" -->

🔧 `setValue` - функция за обновяване <!-- .element: class="fragment" -->

🏁 `initialValue` - начална стойност <!-- .element: class="fragment" -->

Note:
useState връща масив с два елемента, които деструктурираме.

--

### Counter пример

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        +1
      </button>
      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}
```

Note:
При клик на бутона, setCount обновява state и React re-рендира компонента.

--

### Immutable Updates

```jsx
// ❌ ГРЕШНО - директна мутация
const [user, setUser] = useState({ name: 'A', age: 25 });
user.age = 26;  // НЕ!
setUser(user);  // React не забелязва промяната

// ✅ ПРАВИЛНО - нов обект
setUser({ ...user, age: 26 });

// ❌ ГРЕШНО - мутация на масив
const [items, setItems] = useState([1, 2, 3]);
items.push(4);  // НЕ!

// ✅ ПРАВИЛНО - нов масив
setItems([...items, 4]);
```

⚠️ **Винаги създавайте нови референции!**

Note:
React сравнява референции, затова мутацията не работи.

---

## useEffect Hook

Note:
Как изпълняваме странични ефекти.

--

### Dependency Array

<svg viewBox="0 0 700 260" style="max-width: 650px; margin: 0 auto; display: block;">
  <defs>
    <linearGradient id="efRed" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ef4444"/><stop offset="100%" stop-color="#dc2626"/>
    </linearGradient>
    <linearGradient id="efGreen" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#10b981"/><stop offset="100%" stop-color="#059669"/>
    </linearGradient>
    <linearGradient id="efBlue" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#3b82f6"/><stop offset="100%" stop-color="#2563eb"/>
    </linearGradient>
  </defs>

  <rect x="20" y="30" width="200" height="200" rx="10" fill="white" stroke="#ef4444" stroke-width="2"/>
  <rect x="20" y="30" width="200" height="35" rx="10" fill="url(#efRed)"/>
  <text x="120" y="53" fill="white" font-family="system-ui" font-size="11" font-weight="600" text-anchor="middle">No Array</text>
  <text x="120" y="85" fill="#1e293b" font-family="monospace" font-size="9" text-anchor="middle">useEffect(() =&gt; {</text>
  <text x="120" y="100" fill="#64748b" font-family="monospace" font-size="9" text-anchor="middle">  // code</text>
  <text x="120" y="115" fill="#1e293b" font-family="monospace" font-size="9" text-anchor="middle">});</text>
  <text x="120" y="150" fill="#dc2626" font-family="system-ui" font-size="10" font-weight="600" text-anchor="middle">Every render</text>
  <circle cx="60" cy="180" r="6" fill="#ef4444"/>
  <circle cx="90" cy="180" r="6" fill="#ef4444"/>
  <circle cx="120" cy="180" r="6" fill="#ef4444"/>
  <circle cx="150" cy="180" r="6" fill="#ef4444"/>
  <text x="120" y="210" fill="#64748b" font-family="system-ui" font-size="9" text-anchor="middle">⚠️ Рядко се използва</text>

  <rect x="250" y="30" width="200" height="200" rx="10" fill="white" stroke="#10b981" stroke-width="2"/>
  <rect x="250" y="30" width="200" height="35" rx="10" fill="url(#efGreen)"/>
  <text x="350" y="53" fill="white" font-family="system-ui" font-size="11" font-weight="600" text-anchor="middle">Empty []</text>
  <text x="350" y="85" fill="#1e293b" font-family="monospace" font-size="9" text-anchor="middle">useEffect(() =&gt; {</text>
  <text x="350" y="100" fill="#64748b" font-family="monospace" font-size="9" text-anchor="middle">  // code</text>
  <text x="350" y="115" fill="#1e293b" font-family="monospace" font-size="9" text-anchor="middle">}, <tspan fill="#10b981" font-weight="600">[]</tspan>);</text>
  <text x="350" y="150" fill="#059669" font-family="system-ui" font-size="10" font-weight="600" text-anchor="middle">Once on mount</text>
  <circle cx="290" cy="180" r="6" fill="#10b981"/>
  <circle cx="320" cy="180" r="6" fill="#e2e8f0"/>
  <circle cx="350" cy="180" r="6" fill="#e2e8f0"/>
  <circle cx="380" cy="180" r="6" fill="#e2e8f0"/>
  <text x="350" y="210" fill="#64748b" font-family="system-ui" font-size="9" text-anchor="middle">✓ За init и fetch</text>

  <rect x="480" y="30" width="200" height="200" rx="10" fill="white" stroke="#3b82f6" stroke-width="2"/>
  <rect x="480" y="30" width="200" height="35" rx="10" fill="url(#efBlue)"/>
  <text x="580" y="53" fill="white" font-family="system-ui" font-size="11" font-weight="600" text-anchor="middle">[deps]</text>
  <text x="580" y="85" fill="#1e293b" font-family="monospace" font-size="9" text-anchor="middle">useEffect(() =&gt; {</text>
  <text x="580" y="100" fill="#64748b" font-family="monospace" font-size="9" text-anchor="middle">  // code</text>
  <text x="580" y="115" fill="#1e293b" font-family="monospace" font-size="9" text-anchor="middle">}, <tspan fill="#3b82f6" font-weight="600">[count]</tspan>);</text>
  <text x="580" y="150" fill="#2563eb" font-family="system-ui" font-size="10" font-weight="600" text-anchor="middle">When deps change</text>
  <circle cx="520" cy="180" r="6" fill="#3b82f6"/>
  <circle cx="550" cy="180" r="6" fill="#e2e8f0"/>
  <circle cx="580" cy="180" r="6" fill="#3b82f6"/>
  <circle cx="610" cy="180" r="6" fill="#e2e8f0"/>
  <text x="580" y="210" fill="#64748b" font-family="system-ui" font-size="9" text-anchor="middle">✓ За реактивност</text>
</svg>

Note:
Dependency array контролира кога ефектът се изпълнява.

--

### Data Fetching Pattern

```jsx
function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);  // ← Run once

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return <ul>{products.map(p => <li key={p.id}>{p.name}</li>)}</ul>;
}
```

Note:
Тристепенен pattern: Loading → Success/Error.

---

## List Rendering

Note:
Как рендираме масиви от данни.

--

### map() и Keys

```jsx
const users = [
  { id: 1, name: 'Anna' },
  { id: 2, name: 'Boris' },
  { id: 3, name: 'Clara' }
];

function UserList() {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

🔑 **key** е задължителен и уникален!

Note:
Keys помагат на React да идентифицира елементи при промени.

--

### Защо Keys са важни

<svg viewBox="0 0 650 200" style="max-width: 600px; margin: 0 auto; display: block;">
  <defs>
    <linearGradient id="keyBadG" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ef4444"/><stop offset="100%" stop-color="#dc2626"/>
    </linearGradient>
    <linearGradient id="keyGoodG" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#10b981"/><stop offset="100%" stop-color="#059669"/>
    </linearGradient>
  </defs>

  <rect x="20" y="20" width="280" height="160" rx="8" fill="white" stroke="#ef4444" stroke-width="2"/>
  <rect x="20" y="20" width="280" height="30" rx="8" fill="url(#keyBadG)"/>
  <text x="160" y="42" fill="white" font-family="system-ui" font-size="12" font-weight="600" text-anchor="middle">❌ key={index}</text>

  <rect x="40" y="65" width="100" height="22" rx="4" fill="#3b82f6"/>
  <text x="90" y="80" fill="white" font-family="monospace" font-size="9" text-anchor="middle">0: A</text>
  <rect x="40" y="92" width="100" height="22" rx="4" fill="#fecaca" stroke="#ef4444"/>
  <text x="90" y="107" fill="#dc2626" font-family="monospace" font-size="9" text-anchor="middle">1: B ←del</text>
  <rect x="40" y="119" width="100" height="22" rx="4" fill="#3b82f6"/>
  <text x="90" y="134" fill="white" font-family="monospace" font-size="9" text-anchor="middle">2: C</text>

  <text x="175" y="95" fill="#64748b" font-family="system-ui" font-size="20">→</text>

  <rect x="200" y="65" width="80" height="22" rx="4" fill="#3b82f6"/>
  <text x="240" y="80" fill="white" font-family="monospace" font-size="9" text-anchor="middle">0: A</text>
  <rect x="200" y="92" width="80" height="22" rx="4" fill="#fecaca" stroke="#ef4444"/>
  <text x="240" y="107" fill="#dc2626" font-family="monospace" font-size="9" text-anchor="middle">1: C ⚠️</text>

  <text x="160" y="160" fill="#dc2626" font-family="system-ui" font-size="9" text-anchor="middle">C получава стар key → объркване</text>

  <rect x="350" y="20" width="280" height="160" rx="8" fill="white" stroke="#10b981" stroke-width="2"/>
  <rect x="350" y="20" width="280" height="30" rx="8" fill="url(#keyGoodG)"/>
  <text x="490" y="42" fill="white" font-family="system-ui" font-size="12" font-weight="600" text-anchor="middle">✓ key={item.id}</text>

  <rect x="370" y="65" width="100" height="22" rx="4" fill="#3b82f6"/>
  <text x="420" y="80" fill="white" font-family="monospace" font-size="9" text-anchor="middle">id1: A</text>
  <rect x="370" y="92" width="100" height="22" rx="4" fill="#fecaca" stroke="#ef4444"/>
  <text x="420" y="107" fill="#dc2626" font-family="monospace" font-size="9" text-anchor="middle">id2: B ←del</text>
  <rect x="370" y="119" width="100" height="22" rx="4" fill="#3b82f6"/>
  <text x="420" y="134" fill="white" font-family="monospace" font-size="9" text-anchor="middle">id3: C</text>

  <text x="505" y="95" fill="#64748b" font-family="system-ui" font-size="20">→</text>

  <rect x="530" y="65" width="80" height="22" rx="4" fill="#3b82f6"/>
  <text x="570" y="80" fill="white" font-family="monospace" font-size="9" text-anchor="middle">id1: A</text>
  <rect x="530" y="95" width="80" height="22" rx="4" fill="#3b82f6"/>
  <text x="570" y="110" fill="white" font-family="monospace" font-size="9" text-anchor="middle">id3: C ✓</text>

  <text x="490" y="160" fill="#059669" font-family="system-ui" font-size="9" text-anchor="middle">C запазва key → правилно</text>
</svg>

Note:
Уникалните ID-та гарантират правилно идентифициране при add/remove.

---

## Conditional Rendering

Note:
Как показваме различен UI според условия.

--

### Три подхода

```jsx
// 1. && (Logical AND) - показва/скрива
{isLoggedIn && <UserMenu />}

// 2. Ternary - избира между A и B
{isAdmin ? <AdminPanel /> : <UserDashboard />}

// 3. Early Return - guard conditions
function Profile({ user }) {
  if (!user) return <LoginPrompt />;

  return <UserProfile user={user} />;
}
```

Note:
Изберете подхода според случая - && за toggle, ternary за A/B, if за guards.

---

## Event Handling

Note:
Как реагираме на потребителски действия.

--

### Синтаксис

```jsx
function Button() {
  const handleClick = (e) => {
    e.preventDefault();
    console.log('Clicked!');
  };

  return <button onClick={handleClick}>Click</button>;
}

// С аргументи
function ItemList({ items }) {
  const handleDelete = (id) => console.log('Delete:', id);

  return items.map(item => (
    <button
      key={item.id}
      onClick={() => handleDelete(item.id)}
    >
      Delete {item.name}
    </button>
  ));
}
```

Note:
Events са camelCase и приемат функции, не strings.

---

## Controlled Forms

Note:
Как управляваме форми в React.

--

### Single Source of Truth

```jsx
function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
}
```

Note:
React state е единственият източник на истина за input стойностите.

---

## React Hooks Overview

<svg viewBox="0 0 700 320" style="max-width: 650px; margin: 0 auto; display: block;">
  <defs>
    <linearGradient id="hkState" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3b82f6"/><stop offset="100%" stop-color="#2563eb"/>
    </linearGradient>
    <linearGradient id="hkEffect" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#10b981"/><stop offset="100%" stop-color="#059669"/>
    </linearGradient>
    <linearGradient id="hkRef" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b"/><stop offset="100%" stop-color="#d97706"/>
    </linearGradient>
    <linearGradient id="hkContext" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#8b5cf6"/><stop offset="100%" stop-color="#7c3aed"/>
    </linearGradient>
  </defs>

  <g transform="translate(350, 160)">
    <ellipse cx="0" cy="0" rx="40" ry="16" fill="none" stroke="#61dafb" stroke-width="2"/>
    <ellipse cx="0" cy="0" rx="40" ry="16" fill="none" stroke="#61dafb" stroke-width="2" transform="rotate(60)"/>
    <ellipse cx="0" cy="0" rx="40" ry="16" fill="none" stroke="#61dafb" stroke-width="2" transform="rotate(-60)"/>
    <circle cx="0" cy="0" r="8" fill="#61dafb"/>
  </g>

  <line x1="305" y1="160" x2="200" y2="80" stroke="#3b82f6" stroke-width="2" stroke-dasharray="4,2"/>
  <line x1="305" y1="160" x2="200" y2="240" stroke="#10b981" stroke-width="2" stroke-dasharray="4,2"/>
  <line x1="395" y1="160" x2="500" y2="80" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4,2"/>
  <line x1="395" y1="160" x2="500" y2="240" stroke="#8b5cf6" stroke-width="2" stroke-dasharray="4,2"/>

  <rect x="60" y="45" width="140" height="70" rx="8" fill="white" stroke="#3b82f6" stroke-width="2"/>
  <rect x="60" y="45" width="140" height="25" rx="8" fill="url(#hkState)"/>
  <text x="130" y="63" fill="white" font-family="monospace" font-size="11" font-weight="600" text-anchor="middle">useState</text>
  <text x="130" y="85" fill="#1e293b" font-family="system-ui" font-size="9" text-anchor="middle">Local state</text>
  <text x="130" y="100" fill="#64748b" font-family="system-ui" font-size="8" text-anchor="middle">Re-renders on change</text>

  <rect x="60" y="205" width="140" height="70" rx="8" fill="white" stroke="#10b981" stroke-width="2"/>
  <rect x="60" y="205" width="140" height="25" rx="8" fill="url(#hkEffect)"/>
  <text x="130" y="223" fill="white" font-family="monospace" font-size="11" font-weight="600" text-anchor="middle">useEffect</text>
  <text x="130" y="245" fill="#1e293b" font-family="system-ui" font-size="9" text-anchor="middle">Side effects</text>
  <text x="130" y="260" fill="#64748b" font-family="system-ui" font-size="8" text-anchor="middle">fetch, timers, subs</text>

  <rect x="500" y="45" width="140" height="70" rx="8" fill="white" stroke="#f59e0b" stroke-width="2"/>
  <rect x="500" y="45" width="140" height="25" rx="8" fill="url(#hkRef)"/>
  <text x="570" y="63" fill="white" font-family="monospace" font-size="11" font-weight="600" text-anchor="middle">useRef</text>
  <text x="570" y="85" fill="#1e293b" font-family="system-ui" font-size="9" text-anchor="middle">DOM refs</text>
  <text x="570" y="100" fill="#64748b" font-family="system-ui" font-size="8" text-anchor="middle">No re-render</text>

  <rect x="500" y="205" width="140" height="70" rx="8" fill="white" stroke="#8b5cf6" stroke-width="2"/>
  <rect x="500" y="205" width="140" height="25" rx="8" fill="url(#hkContext)"/>
  <text x="570" y="223" fill="white" font-family="monospace" font-size="11" font-weight="600" text-anchor="middle">useContext</text>
  <text x="570" y="245" fill="#1e293b" font-family="system-ui" font-size="9" text-anchor="middle">Global state</text>
  <text x="570" y="260" fill="#64748b" font-family="system-ui" font-size="8" text-anchor="middle">Avoid prop drilling</text>

  <rect x="220" y="280" width="260" height="30" rx="6" fill="#fef2f2" stroke="#ef4444"/>
  <text x="350" y="300" fill="#dc2626" font-family="system-ui" font-size="10" text-anchor="middle">Rules: Top level only • React functions only • "use" prefix</text>
</svg>

Note:
Това са основните hooks - има и други като useReducer, useMemo, useCallback.

---

## Best Practices

✅ Функционални компоненти с hooks <!-- .element: class="fragment" -->

✅ Immutable state updates <!-- .element: class="fragment" -->

✅ Правилни dependency arrays <!-- .element: class="fragment" -->

✅ Уникални keys при lists <!-- .element: class="fragment" -->

✅ Controlled forms <!-- .element: class="fragment" -->

✅ React DevTools за дебъгване <!-- .element: class="fragment" -->

Note:
Следвайте тези практики за чист, поддържаем код.

---

## Чести Грешки

❌ Забравен dependency array → infinite loop <!-- .element: class="fragment" -->

❌ Директна мутация на state <!-- .element: class="fragment" -->

❌ Index като key в динамични списъци <!-- .element: class="fragment" -->

❌ Async функция директно в useEffect <!-- .element: class="fragment" -->

```jsx
// ❌ Грешно
useEffect(async () => { ... }, []);

// ✅ Правилно
useEffect(() => {
  const fetchData = async () => { ... };
  fetchData();
}, []);
```
<!-- .element: class="fragment" -->

Note:
Избягвайте тези грешки - те са източник на много бъгове.

---

## Обобщение

<svg viewBox="0 0 700 220" style="max-width: 650px; margin: 0 auto; display: block;">
  <defs>
    <linearGradient id="sumGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#3b82f6"/><stop offset="100%" stop-color="#2563eb"/>
    </linearGradient>
    <linearGradient id="sumGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#10b981"/><stop offset="100%" stop-color="#059669"/>
    </linearGradient>
    <linearGradient id="sumGrad3" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#8b5cf6"/><stop offset="100%" stop-color="#7c3aed"/>
    </linearGradient>
  </defs>

  <rect x="30" y="30" width="200" height="80" rx="10" fill="url(#sumGrad1)"/>
  <text x="130" y="60" fill="white" font-family="system-ui" font-size="14" font-weight="600" text-anchor="middle">Components</text>
  <text x="130" y="80" fill="rgba(255,255,255,0.8)" font-family="system-ui" font-size="10" text-anchor="middle">Функции → JSX</text>
  <text x="130" y="95" fill="rgba(255,255,255,0.6)" font-family="system-ui" font-size="9" text-anchor="middle">Преизползваеми UI единици</text>

  <rect x="250" y="30" width="200" height="80" rx="10" fill="url(#sumGrad2)"/>
  <text x="350" y="60" fill="white" font-family="system-ui" font-size="14" font-weight="600" text-anchor="middle">Data Flow</text>
  <text x="350" y="80" fill="rgba(255,255,255,0.8)" font-family="system-ui" font-size="10" text-anchor="middle">Props ↓ State ↻</text>
  <text x="350" y="95" fill="rgba(255,255,255,0.6)" font-family="system-ui" font-size="9" text-anchor="middle">Unidirectional + Immutable</text>

  <rect x="470" y="30" width="200" height="80" rx="10" fill="url(#sumGrad3)"/>
  <text x="570" y="60" fill="white" font-family="system-ui" font-size="14" font-weight="600" text-anchor="middle">Hooks</text>
  <text x="570" y="80" fill="rgba(255,255,255,0.8)" font-family="system-ui" font-size="10" text-anchor="middle">useState + useEffect</text>
  <text x="570" y="95" fill="rgba(255,255,255,0.6)" font-family="system-ui" font-size="9" text-anchor="middle">State и Side Effects</text>

  <rect x="140" y="130" width="420" height="70" rx="10" fill="#f1f5f9" stroke="#cbd5e1"/>
  <text x="350" y="160" fill="#1e293b" font-family="system-ui" font-size="13" font-weight="600" text-anchor="middle">Virtual DOM + Declarative UI = Efficient Updates</text>
  <text x="350" y="182" fill="#64748b" font-family="system-ui" font-size="11" text-anchor="middle">React се грижи за DOM манипулациите вместо вас</text>
</svg>

Note:
Тези концепции са основата - практикувайте с малки проекти.

---

## Ресурси

📚 [React Documentation](https://react.dev) <!-- .element: class="fragment" -->

🛠️ [Vite](https://vitejs.dev) - Бърз build tool <!-- .element: class="fragment" -->

🔧 [React DevTools](https://react.dev/learn/react-developer-tools) <!-- .element: class="fragment" -->

Note:
Официалната документация е отличен ресурс за учене.

---

# Въпроси?

Note:
Време за въпроси и дискусия.
