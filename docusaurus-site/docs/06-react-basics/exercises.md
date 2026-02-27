---
sidebar_position: 2
slug: exercises
title: "Упражнения"
tags: [exercises, practice, react, components, jsx, hooks, state, props]
---

import ExerciseCard from '@site/src/components/Exercise/ExerciseCard';
import ProgressTracker from '@site/src/components/Exercise/ProgressTracker';
import CollapsibleSection from '@site/src/components/CollapsibleSection';
import InfoBox from '@site/src/components/InfoBoxes/InfoBox';
import WarningBox from '@site/src/components/InfoBoxes/WarningBox';
import SuccessBox from '@site/src/components/InfoBoxes/SuccessBox';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Упражнения: Въведение в React

<img src={useBaseUrl('/img/diagrams/react/exercises-header.svg')} alt="React Exercises Header" style={{width: '100%', maxWidth: '800px', margin: '20px auto', display: 'block'}} />

<ProgressTracker />

<InfoBox title="📋 Инструкции">

- Решете упражненията последователно - те са подредени по трудност
- Използвайте **подсказките** ако се затрудните
- Проверете решенията си след като опитате самостоятелно
- Препоръчително е да тествате кода си в реален React проект (Create React App или Vite)
- React DevTools е полезен инструмент за дебъгване

</InfoBox>

---

## Лесни Упражнения (EASY)

<ExerciseCard difficulty="easy">

### Задача 1: React Подход

**Multiple Choice** - Какъв тип програмен подход използва React за изграждане на потребителски интерфейси?

A) Императивно програмиране
B) Декларативно програмиране
C) Процедурно програмиране
D) Обектно-ориентирано програмиране

<CollapsibleSection title="💡 Подсказка">

Помислете за разликата между "как да направим нещо" (стъпка по стъпка) и "какво искаме да видим" (описание на крайния резултат).

</CollapsibleSection>

<CollapsibleSection title="✅ Решение">

**Верен отговор: B) Декларативно програмиране**

React използва **декларативен** подход:
- Описваме *какво* искаме да видим, не *как* да го постигнем
- React се грижи за DOM манипулациите вместо нас
- Състоянието определя какъв UI да се покаже

```jsx
// Декларативно (React)
return <h1>{isLoggedIn ? 'Welcome!' : 'Please log in'}</h1>;

// Императивно (vanilla JS)
if (isLoggedIn) {
  element.textContent = 'Welcome!';
} else {
  element.textContent = 'Please log in';
}
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="easy">

### Задача 2: JSX CSS класове

**Fill in the Blank** - В JSX, използваме `________` вместо `class` за да приложим CSS класове към елементи.

<CollapsibleSection title="💡 Подсказка">

`class` е запазена дума в JavaScript. Какво алтернативно име се използва за HTML атрибута?

</CollapsibleSection>

<CollapsibleSection title="✅ Решение">

**Отговор: `className`**

В JSX използваме `className` вместо `class`:

```jsx
// ✅ Правилно в JSX
<div className="container">Content</div>

// ❌ Грешно - class е запазена дума в JS
<div class="container">Content</div>
```

Други разлики между HTML и JSX:
- `for` → `htmlFor`
- `tabindex` → `tabIndex`
- Всички custom атрибути са camelCase

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="easy">

### Задача 3: Props Immutability

**True or False** - Props в React могат да бъдат модифицирани от дъщерния компонент, който ги получава.

<CollapsibleSection title="💡 Подсказка">

Помислете за концепцията "unidirectional data flow" - в каква посока текат данните?

</CollapsibleSection>

<CollapsibleSection title="✅ Решение">

**Отговор: False (Невярно)**

Props са **read-only** (само за четене):
- Дъщерният компонент НЕ може да модифицира props
- Данните текат в една посока: родител → дете
- За промяна на данни, родителят трябва да предаде нови props

```jsx
function Child({ name }) {
  // ❌ Грешно - не можем да променяме props
  name = "New Name";

  // ✅ Правилно - само четем props
  return <h1>Hello, {name}!</h1>;
}
```

Това е основата на **unidirectional data flow** в React.

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="easy">

### Задача 4: useState Hook

**Multiple Choice** - Кой hook се използва за деклариране на локално състояние във функционален компонент?

A) `useEffect`
B) `useContext`
C) `useState`
D) `useRef`

<CollapsibleSection title="💡 Подсказка">

Думата "State" (състояние) е ключова подсказка за името на hook-а.

</CollapsibleSection>

<CollapsibleSection title="✅ Решение">

**Верен отговор: C) `useState`**

`useState` е hook за управление на локално състояние:

```jsx
import { useState } from 'react';

function Counter() {
  // Декларираме state променлива count с начална стойност 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
```

Другите hooks:
- `useEffect` - странични ефекти
- `useContext` - достъп до context
- `useRef` - референции към DOM елементи

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="easy">

### Задача 5: Virtual DOM

**Short Answer** - Какво е Virtual DOM и защо React го използва?

<CollapsibleSection title="💡 Подсказка">

Помислете за производителност - директните DOM манипулации са бавни. Как React оптимизира това?

</CollapsibleSection>

<CollapsibleSection title="✅ Решение">

**Virtual DOM** е леко, in-memory представяне на истинския DOM.

**Защо React го използва:**

1. **Производителност** - директните DOM манипулации са бавни
2. **Batching** - множество промени се обединяват
3. **Diffing** - само минималните промени се прилагат към истинския DOM

**Как работи:**
1. При промяна на state, React създава нов Virtual DOM
2. Сравнява новия с предишния (diffing algorithm)
3. Изчислява минималните промени
4. Обновява само променените части в истинския DOM

```
State Change → New Virtual DOM → Diff → Minimal DOM Updates
```

</CollapsibleSection>

</ExerciseCard>

---

## Средни Упражнения (MEDIUM)

<ExerciseCard difficulty="medium">

### Задача 6: JSX Single Root Error

**Code Identification** - Идентифицирайте и поправете грешката в следния JSX код:

```jsx
function Welcome() {
  return (
    <h1>Hello World</h1>
    <p>Welcome to React</p>
  );
}
```

<CollapsibleSection title="💡 Подсказка">

JSX изисква компонентите да връщат **единствен** коренов елемент. Какво можете да използвате за обвиване?

</CollapsibleSection>

<CollapsibleSection title="✅ Решение">

**Проблем:** JSX изисква единствен коренов елемент.

**Решение с Fragment:**

```jsx
function Welcome() {
  return (
    <>
      <h1>Hello World</h1>
      <p>Welcome to React</p>
    </>
  );
}
```

**Алтернативно с div:**

```jsx
function Welcome() {
  return (
    <div>
      <h1>Hello World</h1>
      <p>Welcome to React</p>
    </div>
  );
}
```

Fragment (`<>...</>`) е предпочитан когато не искате допълнителен DOM елемент.

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium">

### Задача 7: Greeting Component

**Practical Exercise** - Създайте функционален компонент `Greeting`, който:
- Приема `name` prop
- Връща `<h2>` елемент показващ "Welcome, [name]!"
- Ако не е подадено име, показва "Welcome, Guest!"

<CollapsibleSection title="💡 Подсказка">

Можете да използвате default параметър в деструктурирането или условен израз за fallback стойност.

</CollapsibleSection>

<CollapsibleSection title="✅ Решение">

**Решение с default параметър:**

```jsx
function Greeting({ name = 'Guest' }) {
  return <h2>Welcome, {name}!</h2>;
}

// Използване:
<Greeting name="Иван" />  // Welcome, Иван!
<Greeting />              // Welcome, Guest!
```

**Алтернативно с логически OR:**

```jsx
function Greeting({ name }) {
  return <h2>Welcome, {name || 'Guest'}!</h2>;
}
```

**Алтернативно с ternary:**

```jsx
function Greeting({ name }) {
  return <h2>Welcome, {name ? name : 'Guest'}!</h2>;
}
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium">

### Задача 8: useEffect Dependency Array

**Multiple Choice** - Какво ще се случи ако извикате `useEffect` без dependency array?

A) Ефектът се изпълнява само веднъж когато компонентът се mount-ва
B) Ефектът се изпълнява след всеки render
C) Ефектът никога не се изпълнява
D) Ефектът се изпълнява само когато компонентът се unmount-ва

<CollapsibleSection title="💡 Подсказка">

Dependency array контролира *кога* ефектът се изпълнява. Какво означава липса на array?

</CollapsibleSection>

<CollapsibleSection title="✅ Решение">

**Верен отговор: B) Ефектът се изпълнява след всеки render**

Поведение на dependency array:

```jsx
// Без array - след ВСЕКИ render
useEffect(() => {
  console.log('Runs after every render');
});

// Празен array [] - само веднъж при mount
useEffect(() => {
  console.log('Runs once on mount');
}, []);

// С dependencies - когато стойностите се променят
useEffect(() => {
  console.log('Runs when count changes');
}, [count]);
```

⚠️ Липса на dependency array често води до performance проблеми или infinite loops!

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium">

### Задача 9: Toggle Button

**Code Completion** - Попълнете следния код за създаване на toggle бутон, който превключва между "ON" и "OFF":

```jsx
import React, { ______ } from 'react';

function ToggleButton() {
  const [isOn, ______] = ______(false);

  return (
    <button onClick={() => ______(______)}>
      {isOn ? 'ON' : 'OFF'}
    </button>
  );
}
```

<CollapsibleSection title="💡 Подсказка">

Имате нужда от `useState` hook. За превключване на boolean стойност, какво трябва да подадете на setter функцията?

</CollapsibleSection>

<CollapsibleSection title="✅ Решение">

```jsx
import React, { useState } from 'react';

function ToggleButton() {
  const [isOn, setIsOn] = useState(false);

  return (
    <button onClick={() => setIsOn(!isOn)}>
      {isOn ? 'ON' : 'OFF'}
    </button>
  );
}
```

**Обяснение:**
- `useState` - import на hook-а
- `setIsOn` - функция за обновяване на state
- `useState(false)` - начална стойност false
- `setIsOn(!isOn)` - превключва между true/false

**По-безопасна версия с callback:**

```jsx
<button onClick={() => setIsOn(prev => !prev)}>
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium">

### Задача 10: useEffect Dependencies

**Short Answer** - Обяснете разликата между тези два `useEffect` dependency arrays:
- `useEffect(() => { ... }, [])`
- `useEffect(() => { ... }, [count])`

<CollapsibleSection title="💡 Подсказка">

Празният array означава "няма зависимости". Какво означава това за изпълнението на ефекта?

</CollapsibleSection>

<CollapsibleSection title="✅ Решение">

**`useEffect(() => { ... }, [])`** - Празен dependency array:
- Изпълнява се **само веднъж** при mount на компонента
- Еквивалентно на `componentDidMount` в class компоненти
- Подходящо за: initial data fetching, setup subscriptions

```jsx
useEffect(() => {
  fetchInitialData();
}, []); // Само веднъж
```

**`useEffect(() => { ... }, [count])`** - С dependency:
- Изпълнява се при mount **И** всеки път когато `count` се промени
- React сравнява предишната и текущата стойност на `count`
- Подходящо за: реакция на промени в state/props

```jsx
useEffect(() => {
  document.title = `Count: ${count}`;
}, [count]); // При всяка промяна на count
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium">

### Задача 11: List Rendering с Keys

**Practical Exercise** - Дадени са следните данни. Напишете JSX код за рендиране на unordered list с правилни keys:

```javascript
const fruits = [
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Banana' },
  { id: 3, name: 'Orange' }
];
```

<CollapsibleSection title="💡 Подсказка">

Използвайте `map()` за трансформиране на масива. Всеки `<li>` елемент трябва да има уникален `key` prop.

</CollapsibleSection>

<CollapsibleSection title="✅ Решение">

```jsx
function FruitList() {
  const fruits = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Orange' }
  ];

  return (
    <ul>
      {fruits.map(fruit => (
        <li key={fruit.id}>{fruit.name}</li>
      ))}
    </ul>
  );
}
```

**Защо `key={fruit.id}` е важно:**
- Помага на React да идентифицира кои елементи са се променили
- Подобрява производителността при re-render
- Използвайте уникален ID, **не** index (освен за статични списъци)

**Грешен подход:**
```jsx
// ⚠️ Избягвайте index като key при динамични списъци
{fruits.map((fruit, index) => (
  <li key={index}>{fruit.name}</li>  // Проблемно!
))}
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium">

### Задача 12: Infinite Loop Bug

**Debugging Exercise** - Следният компонент има бъг, който причинява infinite loop. Идентифицирайте и поправете проблема:

```jsx
function UserProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('/api/user')
      .then(res => res.json())
      .then(data => setUser(data));
  });

  return <div>{user?.name}</div>;
}
```

<CollapsibleSection title="💡 Подсказка">

Какво липсва в `useEffect`? Без какво ефектът се изпълнява след всеки render?

</CollapsibleSection>

<CollapsibleSection title="✅ Решение">

**Проблем:** Липсва dependency array в `useEffect`.

Без dependency array:
1. Компонентът се рендира
2. `useEffect` се изпълнява и fetch-ва данни
3. `setUser(data)` предизвиква re-render
4. `useEffect` се изпълнява отново (→ infinite loop!)

**Решение:**

```jsx
function UserProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('/api/user')
      .then(res => res.json())
      .then(data => setUser(data));
  }, []); // ← Добавен празен dependency array

  return <div>{user?.name}</div>;
}
```

Празният array `[]` означава "изпълни само веднъж при mount".

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium">

### Задача 13: State Batching

**Code Analysis** - Какво ще бъде показано когато този компонент се рендира и потребителят натисне бутона "Add 3"? Защо?

```jsx
function Example() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Add 3</button>
    </div>
  );
}
```

<CollapsibleSection title="💡 Подсказка">

React batch-ва state updates. Какво е стойността на `count` във всяко от трите извиквания?

</CollapsibleSection>

<CollapsibleSection title="✅ Решение">

**Отговор: Count ще се увеличи само с 1 (не с 3)**

**Защо:**
- Всички три `setCount(count + 1)` използват **същата** стойност на `count`
- Ако `count = 0`, то всички три са `setCount(0 + 1)`
- React batch-ва updates, резултатът е `count = 1`

```jsx
// Всички използват count = 0
setCount(0 + 1); // → 1
setCount(0 + 1); // → 1
setCount(0 + 1); // → 1
// Финален резултат: count = 1
```

**Правилно решение с functional update:**

```jsx
const handleClick = () => {
  setCount(prev => prev + 1); // 0 → 1
  setCount(prev => prev + 1); // 1 → 2
  setCount(prev => prev + 1); // 2 → 3
};
// Финален резултат: count = 3
```

Callback формата `prev => prev + 1` винаги получава актуалната стойност.

</CollapsibleSection>

</ExerciseCard>

---

## Трудни Упражнения (HARD)

<ExerciseCard difficulty="hard">

### Задача 14: SignupForm Component

**Practical Exercise** - Създайте controlled form компонент `SignupForm`, който:
- Има input полета за `username` и `email`
- Съхранява двете стойности в state
- Показва въведените стойности под формата в реално време
- Предотвратява default form submission и логва стойностите в конзолата

<CollapsibleSection title="💡 Подсказка">

Използвайте два `useState` hook-а. Всеки input трябва да има `value` и `onChange` props.

</CollapsibleSection>

<CollapsibleSection title="✅ Решение">

```jsx
import React, { useState } from 'react';

function SignupForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', { username, email });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>

      <div>
        <h3>Preview:</h3>
        <p>Username: {username}</p>
        <p>Email: {email}</p>
      </div>
    </div>
  );
}

export default SignupForm;
```

**Ключови точки:**
- `e.preventDefault()` спира презареждането на страницата
- `value={username}` прави input-а controlled
- `onChange` обновява state при всяко въвеждане
- Preview секцията се обновява автоматично

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="hard">

### Задача 15: Enhanced Counter

**Practical Exercise** - Създайте `Counter` компонент със следните изисквания:
- Показва текущата стойност на count
- Има бутони "Increment", "Decrement" и "Reset"
- Count не може да бъде по-малко от 0
- Използвайте conditional rendering за показване на "Minimum reached!" когато count е 0

<CollapsibleSection title="💡 Подсказка">

За да предотвратите отрицателни стойности, проверете стойността преди да я обновите или използвайте `Math.max()`.

</CollapsibleSection>

<CollapsibleSection title="✅ Решение">

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);

  const decrement = () => setCount(prev => Math.max(0, prev - 1));

  const reset = () => setCount(0);

  return (
    <div>
      <h2>Count: {count}</h2>

      {count === 0 && (
        <p style={{ color: 'orange' }}>Minimum reached!</p>
      )}

      <button onClick={increment}>Increment</button>
      <button onClick={decrement} disabled={count === 0}>
        Decrement
      </button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;
```

**Алтернативен подход за decrement:**

```jsx
const decrement = () => {
  setCount(prev => {
    if (prev <= 0) return 0;
    return prev - 1;
  });
};
```

**Ключови точки:**
- `Math.max(0, prev - 1)` гарантира минимум 0
- `disabled={count === 0}` деактивира бутона
- `{count === 0 && <p>...</p>}` е conditional rendering

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="hard">

### Задача 16: PostList Debugging

**Debugging Exercise** - Поправете всички проблеми в този компонент, който fetch-ва и показва списък от posts:

```jsx
function PostList() {
  const [posts, setPosts] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    setLoading(true);
    const response = await fetch('https://api.example.com/posts');
    const data = await response.json();
    setPosts(data);
    setLoading(false);
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {posts.map(post => (
        <div>
          <h3>{post.title}</h3>
        </div>
      ))}
    </div>
  );
}
```

<CollapsibleSection title="💡 Подсказка">

Има няколко проблема:
1. `useEffect` callback не може да е async директно
2. Начална стойност на `posts`
3. Липсващ `key` prop
4. Липсва error handling

</CollapsibleSection>

<CollapsibleSection title="✅ Решение">

```jsx
import React, { useState, useEffect } from 'react';

function PostList() {
  // 1. Правилна начална стойност - празен масив
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true); // 2. true при начално зареждане
  const [error, setError] = useState(null); // 3. Error state

  useEffect(() => {
    // 4. Async функция вътре в useEffect
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // 5. Handle loading и error states
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {posts.map(post => (
        // 6. Добавен key prop
        <div key={post.id}>
          <h3>{post.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default PostList;
```

**Поправени проблеми:**
1. `useState([])` - масивът има начална стойност
2. `loading: true` - правилно начално състояние
3. Error state за грешки
4. Async функция дефинирана вътре в useEffect
5. Правилно handling на loading/error
6. `key={post.id}` за всеки list item

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="hard">

### Задача 17: Timer Component

**Practical Exercise** - Създайте `Timer` компонент, който:
- Показва секундите изминали от mount на компонента
- Обновява се всяка секунда с `setInterval`
- Правилно почиства interval-а при unmount
- Има "Pause/Resume" бутон за контрол на таймера

<CollapsibleSection title="💡 Подсказка">

Ще ви трябват два state-а: един за секундите и един за paused/running. Cleanup функцията в useEffect трябва да извика `clearInterval`.

</CollapsibleSection>

<CollapsibleSection title="✅ Решение">

```jsx
import React, { useState, useEffect, useRef } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    }

    // Cleanup function
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning]); // Re-run когато isRunning се промени

  const toggleTimer = () => {
    setIsRunning(prev => !prev);
  };

  const resetTimer = () => {
    setSeconds(0);
    setIsRunning(false);
  };

  const formatTime = (totalSeconds) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <h2>Timer: {formatTime(seconds)}</h2>
      <button onClick={toggleTimer}>
        {isRunning ? 'Pause' : 'Resume'}
      </button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default Timer;
```

**Ключови точки:**
- `useRef` съхранява interval ID между renders
- Cleanup функция `clearInterval` предотвратява memory leaks
- `[isRunning]` dependency рестартира ефекта при toggle
- Functional update `prev => prev + 1` е по-безопасно

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="hard">

### Задача 18: TodoList Application

**Application Exercise** - Създайте `TodoList` компонент със следната функционалност:
- Input поле за добавяне на нови todos
- Показване на всички todos в списък
- Всяко todo има "Delete" бутон за премахване
- Всяко todo има checkbox за маркиране като завършено
- Завършените todos имат strikethrough стил
- Използвайте правилни keys за list items

<CollapsibleSection title="💡 Подсказка">

Съхранявайте todos като масив от обекти с `id`, `text` и `completed` properties. Използвайте `filter` за изтриване и `map` за toggle на completed.

</CollapsibleSection>

<CollapsibleSection title="✅ Решение">

````jsx
import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;

    const newTodo = {
      id: Date.now(), // Уникален ID
      text: inputValue,
      completed: false
    };

    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id
        ? { ...todo, completed: !todo.completed }
        : todo
    ));
  };

  return (
    <div>
      <h2>Todo List</h2>

      <form onSubmit={addTodo}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new todo..."
        />
        <button type="submit">Add</button>
      </form>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map(todo => (
          <li
            key={todo.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '8px 0'
            }}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                color: todo.completed ? '#888' : 'inherit'
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>

      <p>Total: {todos.length} | Completed: {todos.filter(t => t.completed).length}</p>
    </div>
  );
}

export default TodoList;
````

**Ключови точки:**
- `Date.now()` генерира уникален ID
- `filter` за изтриване (нов масив без елемента)
- `map` + spread за toggle (нов масив с модифициран елемент)
- Immutable updates навсякъде
- `key={todo.id}` за ефективен re-render

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="hard">

### Задача 19: ProductDisplay Refactoring

**Code Refactoring** - Рефакторирайте този компонент за да handle-ва loading states, error states и да използва правилни async patterns:

```jsx
function ProductDisplay({ productId }) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`/api/products/${productId}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, []);

  return (
    <div>
      <h2>{product.name}</h2>
      <p>${product.price}</p>
    </div>
  );
}
```

<CollapsibleSection title="💡 Подсказка">

Проблеми за адресиране:
1. Липсва loading state
2. Липсва error handling
3. `productId` липсва в dependencies
4. Достъп до `product.name` когато `product` е null

</CollapsibleSection>

<CollapsibleSection title="✅ Решение">

```jsx
import React, { useState, useEffect } from 'react';

function ProductDisplay({ productId }) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Reset states при нов productId
    setLoading(true);
    setError(null);
    setProduct(null);

    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/products/${productId}`);

        if (!response.ok) {
          throw new Error(`Product not found (${response.status})`);
        }

        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]); // Добавен productId като dependency

  // Handle loading state
  if (loading) {
    return <div>Loading product...</div>;
  }

  // Handle error state
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Handle no product
  if (!product) {
    return <div>Product not found</div>;
  }

  // Render product
  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      {product.description && <p>{product.description}</p>}
    </div>
  );
}

export default ProductDisplay;
```

**Подобрения:**
1. Loading, error и null checks
2. `productId` в dependency array
3. Async/await с try-catch-finally
4. Reset на states при нов productId
5. HTTP status код проверка
6. Graceful handling на всички случаи

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="hard">

### Задача 20: SearchableUserList

**Comprehensive Exercise** - Създайте `SearchableUserList` компонент, който:
- Fetch-ва потребители от API при mount
- Показва loading и error states правилно
- Има search input, който филтрира потребителите по име в реално време
- Показва "No users found" когато филтърът не връща резултати
- Всеки потребител показва име и email
- Използва всички правилни React patterns (keys, controlled inputs, immutable state updates)

<CollapsibleSection title="💡 Подсказка">

Ще ви трябват поне три state-а: `users` (original данни), `searchTerm`, `loading` и `error`. Филтрирайте по време на render, не съхранявайте филтрирания списък в state.

</CollapsibleSection>

<CollapsibleSection title="✅ Решение">

```jsx
import React, { useState, useEffect } from 'react';

function SearchableUserList() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users'
        );

        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }

        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Филтриране по време на render (derived state)
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <div>Loading users...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>User Directory</h2>

      {/* Controlled search input */}
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search by name..."
        style={{ padding: '8px', marginBottom: '16px', width: '100%' }}
      />

      {/* Results count */}
      <p>
        Showing {filteredUsers.length} of {users.length} users
      </p>

      {/* Conditional rendering за празни резултати */}
      {filteredUsers.length === 0 ? (
        <p>No users found matching "{searchTerm}"</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {filteredUsers.map(user => (
            <li
              key={user.id}
              style={{
                padding: '12px',
                marginBottom: '8px',
                border: '1px solid #ddd',
                borderRadius: '4px'
              }}
            >
              <strong>{user.name}</strong>
              <br />
              <span style={{ color: '#666' }}>{user.email}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchableUserList;
```

**Ключови patterns използвани:**
1. **Data fetching** с loading/error handling
2. **Controlled input** за search
3. **Derived state** - `filteredUsers` се изчислява, не се съхранява
4. **Conditional rendering** - loading, error, empty results
5. **List rendering** с proper keys
6. **Immutable patterns** навсякъде

**Защо `filteredUsers` не е в state:**
- Избягваме дублирана информация
- Автоматично се преизчислява при промяна на `users` или `searchTerm`
- По-просто за поддръжка

</CollapsibleSection>

</ExerciseCard>
