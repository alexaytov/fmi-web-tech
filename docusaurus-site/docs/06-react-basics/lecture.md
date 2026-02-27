---
title: "Лекция"
sidebar_position: 1
slug: lecture
tags: [react, javascript, components, jsx, hooks, state, props, virtual-dom]
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

# Въведение в React

<ViewSlidesButton lectureSlug="react-basics" />

<QuickSummary>

**Ключови познания:**
- **React** е JavaScript библиотека за изграждане на динамични потребителски интерфейси с компонентна архитектура
- **Virtual DOM** осигурява ефективни обновявания чрез сравняване и минимални DOM манипулации
- **JSX** е синтаксис, подобен на HTML, който се компилира до JavaScript
- **Props** предават данни от родител към дете (unidirectional data flow)
- **useState** и **useEffect** са основните hooks за управление на състояние и странични ефекти

</QuickSummary>

<LearningObjectives objectives={[
  "Разбиране на React архитектурата и Virtual DOM концепцията",
  "Създаване на функционални компоненти с JSX синтаксис",
  "Предаване на данни чрез props и управление на състояние с useState",
  "Използване на useEffect за странични ефекти и data fetching",
  "Прилагане на React patterns: conditional rendering, list rendering, event handling"
]} />

---

## Въведение: Защо React?

<WhyBox title="Защо React е стандарт в съвременната уеб разработка?">

Традиционното DOM манипулиране с vanilla JavaScript е **императивно** - казваме на браузъра *как* да промени нещата стъпка по стъпка. React въвежда **декларативен** подход - описваме *какво* искаме да видим, а React се грижи за *как*.

Това води до по-малко бъгове, по-лесна поддръжка и по-добра скалируемост. React е създаден от Facebook и се използва от Netflix, Dropbox, Instagram и хиляди други компании.

</WhyBox>

<InfoBox title="Какво е React?">

**React** е JavaScript библиотека за изграждане на потребителски интерфейси. Основните принципи са:

- **Component-based** - UI се разбива на малки, преизползваеми компоненти
- **Declarative** - описваме желаното състояние, React обновява DOM
- **Learn Once, Write Anywhere** - React работи за web, mobile (React Native), desktop

</InfoBox>

### Component-Based Architecture

<Grid columns={2}>
  <Card title="Модулност" icon="📦">
    Всеки компонент е самостоятелна единица с логика и визуализация
  </Card>
  <Card title="Преизползваемост" icon="♻️">
    Един компонент може да се използва многократно в различни части на приложението
  </Card>
</Grid>

<Grid columns={2}>
  <Card title="Тестируемост" icon="✅">
    Изолираните компоненти са лесни за unit тестване
  </Card>
  <Card title="Екипна работа" icon="👥">
    Различни разработчици могат да работят по различни компоненти паралелно
  </Card>
</Grid>

---

## Virtual DOM

<InfoBox title="Virtual DOM архитектура">

<img
  src={useBaseUrl('/img/diagrams/react/virtual-dom.svg')}
  alt="Virtual DOM процес - State Change, New VDOM, Diffing, Patch"
  style={{maxWidth: '100%', margin: '0 auto', display: 'block'}}
/>

</InfoBox>

<InfoBox title="Какво е Virtual DOM?">

**Virtual DOM** е леко, in-memory представяне на истинския DOM. Когато състоянието се промени:

1. React създава нов Virtual DOM
2. Сравнява го с предишния (процес наречен **diffing**)
3. Изчислява минималните промени
4. Обновява само променените части в истинския DOM

</InfoBox>

<ComparisonBox
  left={{
    title: "Без Virtual DOM",
    content: (
      <ul>
        <li>Директни DOM манипулации</li>
        <li>Пълно презареждане на секции</li>
        <li>Бавно при много промени</li>
        <li>Сложно за проследяване</li>
      </ul>
    )
  }}
  right={{
    title: "С Virtual DOM",
    content: (
      <ul>
        <li>Batch обновявания</li>
        <li>Само минимални промени</li>
        <li>Оптимизирана производителност</li>
        <li>Предвидимо поведение</li>
      </ul>
    )
  }}
/>

---

## Функционални Компоненти

<InfoBox title="Анатомия на React компонент">

<img
  src={useBaseUrl('/img/diagrams/react/component-anatomy.svg')}
  alt="Анатомия на React компонент - Props, State, Event Handler, JSX Return"
  style={{maxWidth: '100%', margin: '0 auto', display: 'block'}}
/>

</InfoBox>

<InfoBox title="Функционален компонент">

Функционалните компоненти са JavaScript функции, които връщат JSX:

```jsx
function Greeting({ name }) {
  return <h1>Здравей, {name}!</h1>;
}

// Използване:
<Greeting name="Иван" />
```

</InfoBox>

<SuccessBox title="Best Practice">

Винаги използвайте функционални компоненти с hooks вместо class компоненти. Те са:
- По-кратки и четими
- По-лесни за тестване
- По-добре се оптимизират от React

</SuccessBox>

### Структура на компонент

```jsx
import React from 'react';

// Компонент = функция връщаща JSX
function UserCard({ name, email, avatar }) {
  return (
    <div className="user-card">
      <img src={avatar} alt={name} />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}

export default UserCard;
```

---

## JSX: JavaScript + XML

<InfoBox title="Какво е JSX?">

**JSX** е синтактично разширение на JavaScript, което прилича на HTML, но се компилира до `React.createElement()` извиквания.

```jsx
// JSX
const element = <h1 className="title">Hello, World!</h1>;

// Компилира се до:
const element = React.createElement('h1', { className: 'title' }, 'Hello, World!');
```

</InfoBox>

<WarningBox title="JSX не е HTML!">

Важни разлики:
- Използвайте `className` вместо `class`
- Използвайте `htmlFor` вместо `for`
- Всички тагове трябва да се затварят (`<img />`, `<br />`)
- Компонентите започват с главна буква (`<UserCard />`)

</WarningBox>

### Embedding Expressions

Използвайте фигурни скоби `{}` за да вградите JavaScript изрази в JSX:

```jsx
const user = { firstName: 'Иван', lastName: 'Петров' };
const isLoggedIn = true;

function Welcome() {
  return (
    <div>
      {/* Вграждане на променливи */}
      <h1>Здравей, {user.firstName} {user.lastName}!</h1>

      {/* Вграждане на изрази */}
      <p>2 + 2 = {2 + 2}</p>

      {/* Условно рендиране */}
      {isLoggedIn && <button>Изход</button>}
    </div>
  );
}
```

### Single Root Element

<WarningBox title="Правило за единствен корен">

Всеки компонент трябва да връща **един** коренов елемент. Използвайте Fragment (`<>...</>`) ако не искате допълнителен DOM елемент:

```jsx
// ❌ Грешно - два коренови елемента
function Bad() {
  return (
    <h1>Title</h1>
    <p>Text</p>
  );
}

// ✅ Правилно - обвити във Fragment
function Good() {
  return (
    <>
      <h1>Title</h1>
      <p>Text</p>
    </>
  );
}
```

</WarningBox>

---

## JSX Трансформация

<InfoBox title="JSX се компилира до JavaScript">

<img
  src={useBaseUrl('/img/diagrams/react/jsx-transformation.svg')}
  alt="JSX трансформация - от JSX синтаксис до React.createElement()"
  style={{maxWidth: '100%', margin: '0 auto', display: 'block'}}
/>

</InfoBox>

---

## Props: Предаване на Данни

<InfoBox title="Unidirectional Data Flow">

<img
  src={useBaseUrl('/img/diagrams/react/props-flow.svg')}
  alt="Props flow - данните текат от Parent към Child компоненти"
  style={{maxWidth: '100%', margin: '0 auto', display: 'block'}}
/>

</InfoBox>

<InfoBox title="Какво са Props?">

**Props** (properties) са механизмът за предаване на данни от родителски към дъщерен компонент. Props са **read-only** - компонентът не може да ги модифицира.

</InfoBox>

```jsx
// Родителски компонент
function App() {
  return (
    <UserProfile
      name="Мария"
      age={25}
      isAdmin={true}
    >
      <p>Допълнително съдържание</p>
    </UserProfile>
  );
}

// Дъщерен компонент
function UserProfile({ name, age, isAdmin, children }) {
  return (
    <div className="profile">
      <h2>{name}</h2>
      <p>Възраст: {age}</p>
      {isAdmin && <span className="badge">Admin</span>}
      {children}
    </div>
  );
}
```

<SuccessBox title="Unidirectional Data Flow">

Данните в React текат в **една посока** - от родител към дете. Това прави приложенията по-предвидими и лесни за дебъгване.

</SuccessBox>

---

## State: Управление на Състояние

<InfoBox title="useState цикъл на обновяване">

<img
  src={useBaseUrl('/img/diagrams/react/usestate-flow.svg')}
  alt="useState flow - Initial State, UI Display, User Click, State Update, Re-render"
  style={{maxWidth: '100%', margin: '0 auto', display: 'block'}}
/>

</InfoBox>

<InfoBox title="useState Hook">

**useState** е hook за деклариране на локално състояние в функционални компоненти:

```jsx
const [stateValue, setStateFunction] = useState(initialValue);
```

- `stateValue` - текущата стойност
- `setStateFunction` - функция за обновяване
- `initialValue` - начална стойност

</InfoBox>

### Пример: Counter Component

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
```

### Immutable State Updates

<WarningBox title="Никога не мутирайте state директно!">

React очаква **нови референции** при обновяване на обекти и масиви:

```jsx
// ❌ Грешно - мутация
const [user, setUser] = useState({ name: 'Иван', age: 25 });
user.age = 26;  // НЕ правете това!
setUser(user);  // React няма да забележи промяната

// ✅ Правилно - нов обект със spread operator
setUser({ ...user, age: 26 });

// ❌ Грешно - мутация на масив
const [items, setItems] = useState([1, 2, 3]);
items.push(4);  // НЕ!

// ✅ Правилно - нов масив
setItems([...items, 4]);
```

</WarningBox>

### Functional Updates

<SuccessBox title="Използвайте callback при зависимост от предишно състояние">

Когато новото състояние зависи от предишното, използвайте callback форма:

```jsx
// ❌ Може да има проблем при множество извиквания
setCount(count + 1);

// ✅ Гарантирано правилно
setCount(prevCount => prevCount + 1);
```

</SuccessBox>

---

## useEffect: Странични Ефекти

<InfoBox title="useEffect Dependency Array">

<img
  src={useBaseUrl('/img/diagrams/react/useeffect-deps.svg')}
  alt="useEffect dependency array - No Array, Empty Array, With Dependencies"
  style={{maxWidth: '100%', margin: '0 auto', display: 'block'}}
/>

</InfoBox>

<InfoBox title="Какво са странични ефекти?">

**Side effects** са операции, които взаимодействат с "външния свят":
- Data fetching от API
- Директни DOM манипулации
- Subscriptions и timers
- Logging

</InfoBox>

### Синтаксис и Dependency Array

```jsx
import React, { useState, useEffect } from 'react';

function Example() {
  const [data, setData] = useState(null);

  // Изпълнява се след всеки render
  useEffect(() => {
    console.log('Rendered!');
  });

  // Изпълнява се само веднъж (при mount)
  useEffect(() => {
    console.log('Mounted!');
  }, []);

  // Изпълнява се когато `data` се промени
  useEffect(() => {
    console.log('Data changed:', data);
  }, [data]);

  return <div>{/* ... */}</div>;
}
```

<Grid columns={3}>
  <Card title="Без масив" icon="🔄">
    Изпълнява се след **всеки** render
  </Card>
  <Card title="Празен масив []" icon="1️⃣">
    Изпълнява се **веднъж** при mount
  </Card>
  <Card title="С dependencies" icon="👀">
    Изпълнява се при **промяна** на зависимостите
  </Card>
</Grid>

### Cleanup Function

<InfoBox title="Почистване на ефекти">

Върнете функция от `useEffect` за почистване (cleanup) - важно за timers, subscriptions, etc:

```jsx
useEffect(() => {
  const timer = setInterval(() => {
    console.log('Tick');
  }, 1000);

  // Cleanup - изпълнява се при unmount или преди следващия effect
  return () => {
    clearInterval(timer);
  };
}, []);
```

</InfoBox>

---

## Data Fetching Pattern

<InfoBox title="Loading / Success / Error States">

<img
  src={useBaseUrl('/img/diagrams/react/data-fetching-pattern.svg')}
  alt="Data Fetching Pattern - Initial, Loading, Success, Error states"
  style={{maxWidth: '100%', margin: '0 auto', display: 'block'}}
/>

</InfoBox>

<InfoBox title="Стандартен pattern за fetching">

Комбинирайте `useState` и `useEffect` за data fetching:

```jsx
function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div>Зареждане...</div>;
  if (error) return <div>Грешка: {error}</div>;

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  );
}
```

</InfoBox>

<WarningBox title="useEffect не може да е async директно">

```jsx
// ❌ Грешно - async функция като effect
useEffect(async () => {
  const data = await fetch('/api/data');
}, []);

// ✅ Правилно - дефинирайте async функция вътре
useEffect(() => {
  const fetchData = async () => {
    const data = await fetch('/api/data');
  };
  fetchData();
}, []);
```

</WarningBox>

---

## List Rendering

<InfoBox title="Keys в List Rendering">

<img
  src={useBaseUrl('/img/diagrams/react/list-keys.svg')}
  alt="Keys в List Rendering - защо index е лош и id е добър подход"
  style={{maxWidth: '100%', margin: '0 auto', display: 'block'}}
/>

</InfoBox>

<InfoBox title="Рендиране на списъци с map()">

Използвайте `map()` за трансформиране на масив в JSX елементи:

```jsx
const fruits = ['Apple', 'Banana', 'Orange'];

function FruitList() {
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={fruit}>{fruit}</li>
      ))}
    </ul>
  );
}
```

</InfoBox>

<WarningBox title="Важността на key prop">

Всеки елемент в списък трябва да има **уникален** `key` prop:

```jsx
// ✅ Добре - уникален ID
{users.map(user => (
  <UserCard key={user.id} user={user} />
))}

// ⚠️ Избягвайте index като key при динамични списъци
{items.map((item, index) => (
  <Item key={index} item={item} />  // Проблемно!
))}
```

`key` помага на React да идентифицира кои елементи са се променили, добавили или премахнали.

</WarningBox>

---

## Conditional Rendering

<InfoBox title="Три подхода за условно рендиране">

<img
  src={useBaseUrl('/img/diagrams/react/conditional-rendering.svg')}
  alt="Conditional Rendering - && operator, ternary, early return"
  style={{maxWidth: '100%', margin: '0 auto', display: 'block'}}
/>

</InfoBox>

<InfoBox title="Техники за условно рендиране">

React предлага няколко начина за условно показване на елементи:

</InfoBox>

### && Operator (Logical AND)

```jsx
function Notification({ hasMessage }) {
  return (
    <div>
      <h1>Dashboard</h1>
      {hasMessage && <span className="badge">New!</span>}
    </div>
  );
}
```

### Ternary Operator

```jsx
function LoginButton({ isLoggedIn }) {
  return (
    <button>
      {isLoggedIn ? 'Изход' : 'Вход'}
    </button>
  );
}
```

### Early Return

```jsx
function UserProfile({ user }) {
  if (!user) {
    return <div>Моля, влезте в профила си</div>;
  }

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}
```

---

## Event Handling

<InfoBox title="Обработка на събития">

React използва **camelCase** за събития и приема функции като handlers:

```jsx
function Button() {
  const handleClick = (event) => {
    event.preventDefault();
    console.log('Button clicked!');
  };

  return <button onClick={handleClick}>Click me</button>;
}
```

</InfoBox>

### Подаване на аргументи

```jsx
function ItemList({ items }) {
  const handleDelete = (id) => {
    console.log('Deleting item:', id);
  };

  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          {item.name}
          <button onClick={() => handleDelete(item.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
```

---

## Controlled Components (Forms)

<InfoBox title="Контролирани форми">

При controlled components, React state е "single source of truth" за стойността на input:

```jsx
function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in:', { username, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
}
```

</InfoBox>

<SuccessBox title="Предимства на controlled components">

- Валидация в реално време
- Условно disable на submit бутон
- Форматиране на input (напр. телефонен номер)
- Пълен контрол над формата

</SuccessBox>

---

## Допълнителни Hooks

<InfoBox title="React Hooks Overview">

<img
  src={useBaseUrl('/img/diagrams/react/hooks-overview.svg')}
  alt="React Hooks - useState, useEffect, useRef, useContext"
  style={{maxWidth: '100%', margin: '0 auto', display: 'block'}}
/>

</InfoBox>

<CollapsibleSection title="📚 useRef">

**useRef** създава mutable референция, която не предизвиква re-render:

```jsx
function TextInput() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}
```

Използвайте за:
- Достъп до DOM елементи
- Съхранение на стойности между renders (без re-render)

</CollapsibleSection>

<CollapsibleSection title="📚 useContext">

**useContext** позволява споделяне на данни без prop drilling:

```jsx
const ThemeContext = React.createContext('light');

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  return <ThemedButton />;
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return <button className={theme}>Themed Button</button>;
}
```

</CollapsibleSection>

<CollapsibleSection title="📚 Custom Hooks">

**Custom hooks** позволяват извличане и преизползване на логика:

```jsx
// Custom hook за data fetching
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
}

// Използване
function UserList() {
  const { data: users, loading, error } = useFetch('/api/users');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;

  return <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>;
}
```

</CollapsibleSection>

---

## Обобщение

<Grid columns={3}>
  <Card title="Components" icon="🧩">
    Функции връщащи JSX, преизползваеми UI единици
  </Card>
  <Card title="Props" icon="📤">
    Read-only данни от родител към дете
  </Card>
  <Card title="State" icon="💾">
    Локални данни управлявани с useState
  </Card>
</Grid>

<Grid columns={3}>
  <Card title="Virtual DOM" icon="⚡">
    Ефективни UI обновявания чрез diffing
  </Card>
  <Card title="JSX" icon="📝">
    HTML-подобен синтаксис в JavaScript
  </Card>
  <Card title="Hooks" icon="🪝">
    useState, useEffect, useRef, useContext
  </Card>
</Grid>

---

## Best Practices

<SuccessBox title="Препоръки за React разработка">

1. **Използвайте функционални компоненти** с hooks
2. **Дръжте state минимален** - изчислявайте derived данни
3. **Immutable updates** - винаги нови референции за обекти/масиви
4. **Правилни dependency arrays** в useEffect
5. **Уникални keys** при list rendering
6. **React DevTools** за дебъгване

</SuccessBox>

<WarningBox title="Често срещани грешки">

- Забравен dependency array в useEffect (infinite loop)
- Директна мутация на state
- Използване на index като key в динамични списъци
- Async функция директно като useEffect callback

</WarningBox>

---

## Допълнителни Ресурси

### Официална документация
- [React Documentation](https://react.dev) - Официалната документация
- [React Tutorial](https://react.dev/learn) - Интерактивен tutorial

### Инструменти
- [Create React App](https://create-react-app.dev) - Scaffolding tool
- [Vite](https://vitejs.dev) - Бърз build tool за React проекти
- [React DevTools](https://react.dev/learn/react-developer-tools) - Browser extension за дебъгване
