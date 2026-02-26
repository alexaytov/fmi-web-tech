# Claude Code Instructions - University Lectures Template

Comprehensive instructions for working with the university lectures Docusaurus template.

## Структура на Проекта

```
university-lectures-template/
├── docusaurus-site/              # Активен Docusaurus сайт
│   ├── docs/                     # Лекционни материали
│   │   ├── XX-topic-name/
│   │   │   ├── _category_.json   # Sidebar метаданни
│   │   │   ├── lecture.md        # Теоретично съдържание
│   │   │   ├── exercises.md      # Практически задачи
│   │   │   └── slides.md         # Reveal.js презентация (опционална)
│   ├── src/
│   │   ├── components/           # React компоненти
│   │   │   ├── InfoBoxes/        # InfoBox, WarningBox, SuccessBox, WhyBox
│   │   │   ├── Exercise/         # ExerciseCard, ProgressTracker
│   │   │   ├── Grid/             # Grid, Card
│   │   │   ├── Comparison/       # ComparisonBox
│   │   │   ├── CollapsibleSection/
│   │   │   ├── LearningObjectives/
│   │   │   ├── QuickSummary/
│   │   │   └── ViewSlidesButton/
│   │   ├── pages/                # Homepage и slides index
│   │   └── css/                  # Custom стилове
│   ├── plugins/
│   │   ├── lectures-plugin.js    # Зарежда лекции за homepage
│   │   └── reveal-slides-plugin.js # Генерира Reveal.js презентации
│   ├── static/
│   │   ├── img/                  # Изображения
│   │   └── slides/               # Генерирани презентации (автоматично)
│   └── docusaurus.config.ts      # Главна конфигурация
├── .github/
│   └── workflows/
│       └── deploy.yml            # GitHub Pages deployment
├── CLAUDE.md                     # Този файл
└── README.md                     # Документация на шаблона
```

---

## Персонализиране на Шаблона

### Стъпка 1: Конфигурация (docusaurus.config.ts)

Заменете **всички** placeholder стойности:

```typescript
const config: Config = {
  // TODO: Заменете с вашето заглавие
  title: 'Вашият Курс',
  tagline: 'Описание на курса',

  // TODO: Заменете с вашия GitHub Pages URL
  url: 'https://YOUR_USERNAME.github.io',
  baseUrl: '/YOUR_REPO_NAME/',

  // TODO: Заменете с вашите GitHub данни
  organizationName: 'YOUR_USERNAME',
  projectName: 'YOUR_REPO_NAME',
};
```

### Стъпка 2: Navbar и Footer

В `themeConfig` секцията:

```typescript
themeConfig: {
  navbar: {
    title: 'Вашият Курс',  // TODO: Заменете
    items: [
      // ...
      {
        href: 'https://github.com/YOUR_USERNAME/YOUR_REPO_NAME', // TODO
        label: 'GitHub',
        position: 'right',
      },
    ],
  },
  footer: {
    links: [
      {
        title: 'Ресурси',
        items: [
          { label: 'Университет', href: 'https://example.edu' }, // TODO
          { label: 'Moodle', href: 'https://moodle.example.edu' }, // TODO
        ],
      },
    ],
    copyright: `Copyright © ${new Date().getFullYear()} Вашият Университет.`, // TODO
  },
}
```

### Стъпка 3: GitHub Pages Setup

1. Отидете в Settings → Pages
2. Source: **GitHub Actions**
3. Push към `main` branch за автоматичен deploy

---

## Създаване на Нови Лекции

### Naming Convention

- Директория: `XX-topic-name` (напр. `02-arrays`, `03-linked-lists`)
- XX = двуцифрен номер (01, 02, ..., 15)
- topic-name = lowercase с тирета

### Стъпка 1: Създаване на Директория

```bash
cd docusaurus-site/docs
mkdir 02-my-topic
```

### Стъпка 2: _category_.json

```json
{
  "label": "02. Моята Тема",
  "position": 2,
  "collapsed": false,
  "link": {
    "type": "generated-index",
    "description": "Кратко описание на темата"
  }
}
```

### Стъпка 3: lecture.md

**Пълен шаблон:**

```markdown
---
title: "Лекция"
sidebar_position: 1
slug: lecture
tags: [моята-тема, основни-понятия]
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

# Заглавие на Лекцията

<ViewSlidesButton lectureSlug="my-topic" />

<QuickSummary>

**Ключови познания:**
- Точка 1
- Точка 2
- Точка 3

</QuickSummary>

<LearningObjectives objectives={[
  "Първа учебна цел",
  "Втора учебна цел",
  "Трета учебна цел"
]} />

---

## Въведение

<WhyBox title="Защо е важна тази тема?">
Обяснение защо студентите трябва да научат това...
</WhyBox>

---

## Основни Понятия

<InfoBox title="Дефиниция">
Ключова дефиниция или концепция.
</InfoBox>

### Подтема 1

Съдържание...

```python
# Примерен код
def example():
    return "Hello"
```

<SuccessBox title="Добра Практика">
Съвет или препоръка.
</SuccessBox>

---

## Сравнение на Подходи

<ComparisonBox
  left={{
    title: "Подход А",
    content: (
      <ul>
        <li>Предимство 1</li>
        <li>Предимство 2</li>
      </ul>
    )
  }}
  right={{
    title: "Подход Б",
    content: (
      <ul>
        <li>Предимство 1</li>
        <li>Предимство 2</li>
      </ul>
    )
  }}
/>

---

## Обобщение

<Grid columns={3}>
  <Card title="Концепция 1" icon="📚">
    Кратко описание
  </Card>
  <Card title="Концепция 2" icon="💡">
    Кратко описание
  </Card>
  <Card title="Концепция 3" icon="🔧">
    Кратко описание
  </Card>
</Grid>

---

## Допълнителни Ресурси

### Онлайн Материали
- [Ресурс 1](https://example.com) - Описание
- [Ресурс 2](https://example.com) - Описание

### Видео Уроци
- [YouTube канал](https://youtube.com) - Описание

### Книги
- "Заглавие на книга" - Автор
```

### Стъпка 4: exercises.md

**🎯 ВАЖНО: Zero Config Approach - НЕ задавай `id` и `exercises` props!**

```markdown
---
sidebar_position: 2
title: "Упражнения"
tags: [exercises, practice, моята-тема]
---

import ExerciseCard from '@site/src/components/Exercise/ExerciseCard';
import ProgressTracker from '@site/src/components/Exercise/ProgressTracker';
import CollapsibleSection from '@site/src/components/CollapsibleSection';
import InfoBox from '@site/src/components/InfoBoxes/InfoBox';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Упражнения: Моята Тема

<img src={useBaseUrl('/img/diagrams/моята-тема/exercises-header.svg')} alt="Exercises Header" style={{width: '100%', maxWidth: '800px', margin: '20px auto', display: 'block'}} />

<ProgressTracker />

---

## Лесни Упражнения (EASY)

<ExerciseCard difficulty="easy">

### Задача 1: Заглавие

Описание на задачата. Какво трябва да направи студентът?

**Вход:**
```
примерен вход
```

**Изход:**
```
очакван изход
```

<CollapsibleSection title="💡 Подсказка">

Насока за решението...

</CollapsibleSection>

<CollapsibleSection title="✅ Решение">

```python
def solution(input_data):
    # Имплементация
    return result
```

**Обяснение:** Как работи решението.

**Сложност:**
- Времева: $O(n)$
- Пространствена: $O(1)$

</CollapsibleSection>

</ExerciseCard>

---

## Средни Упражнения (MEDIUM)

<ExerciseCard difficulty="medium">

### Задача 2: По-сложна Задача

Описание...

<CollapsibleSection title="✅ Решение">

```python
def medium_solution():
    pass
```

**Обяснение:** ...

**Предимства:**
- ✅ Предимство 1
- ✅ Предимство 2

**Недостатъци:**
- ❌ Недостатък 1

</CollapsibleSection>

</ExerciseCard>

---

## Трудни Упражнения (HARD)

<ExerciseCard difficulty="hard">

### Задача 3: Комплексна Задача

Описание...

<CollapsibleSection title="✅ Решение">

```python
def hard_solution():
    pass
```

**Обяснение:** Подробно обяснение.

**Практически съвети:**
1. Съвет 1
2. Съвет 2

</CollapsibleSection>

</ExerciseCard>
```

### Стъпка 5: slides.md (Опционално)

```markdown
---
title: Моята Тема
theme: white
highlightTheme: github
transition: slide
---

# Моята Тема

### Подзаглавие

---

## Съдържание

- Точка 1
- Точка 2
- Точка 3

---

## Код Пример

\`\`\`python
def example():
    return "Hello"
\`\`\`

Note:
Speaker notes - видими само при натискане на S

--

### Вертикален Подслайд

Използвай `--` за подслайдове

---

<!-- .slide: data-background="#4d7e65" -->

## Слайд с Цветен Фон

---

# Въпроси?
```

---

## Пълна Документация на Компоненти

### 1. InfoBox Variants

```jsx
// Обща информация (син)
<InfoBox title="Информация">
Съдържание тук.
</InfoBox>

// Положителна информация (зелен)
<SuccessBox title="Съвет">
Добра практика или съвет.
</SuccessBox>

// Предупреждение (оранжев/червен)
<WarningBox title="Внимание">
Важно предупреждение.
</WarningBox>

// Обяснение "защо" (лилав)
<WhyBox title="Защо?">
Мотивация и обяснение.
</WhyBox>
```

### 2. LearningObjectives

```jsx
<LearningObjectives objectives={[
  "Да разберете концепцията X",
  "Да можете да имплементирате Y",
  "Да анализирате сложността на Z"
]} />
```

### 3. QuickSummary

```jsx
<QuickSummary>

**Ключови познания:**
- Точка 1
- Точка 2

</QuickSummary>
```

### 4. CollapsibleSection

```jsx
<CollapsibleSection title="📚 Заглавие">

Скрито съдържание, което може да се разгъне.

\`\`\`python
# Код тук
\`\`\`

</CollapsibleSection>
```

**Често използвани икони:** 💡 (подсказка), ✅ (решение), 📚 (информация), 🎯 (цел), ⚠️ (внимание)

**⚠️ ВАЖНО: НЕ използвайте едновременно emoji в title И icon prop!**
```jsx
// ❌ ГРЕШНО - показва две икони
<CollapsibleSection title="💡 Подсказка">

// ✅ ПРАВИЛНО - само emoji в title
<CollapsibleSection title="💡 Подсказка">

// ✅ СЪЩО ПРАВИЛНО - само icon prop с plain title
<CollapsibleSection title="Подсказка" icon="💡">
```

### 5. Grid и Card

```jsx
// 2 колони
<Grid columns={2}>
  <Card title="Карта 1" icon="📊">
    Съдържание 1
  </Card>
  <Card title="Карта 2" icon="📈">
    Съдържание 2
  </Card>
</Grid>

// 3 колони
<Grid columns={3}>
  <Card title="A">Съдържание</Card>
  <Card title="B">Съдържание</Card>
  <Card title="C">Съдържание</Card>
</Grid>
```

**⚠️ ВАЖНО:**
- Grid изисква **минимум 2 Card** компонента
- Всеки Card **ТРЯБВА** да има `title` prop
- За единичен елемент използвай `<InfoBox>` вместо Grid

### 6. ComparisonBox

```jsx
<ComparisonBox
  left={{
    title: "Подход А",
    content: (
      <ul>
        <li>Точка 1</li>
        <li>Точка 2</li>
      </ul>
    )
  }}
  right={{
    title: "Подход Б",
    content: (
      <ul>
        <li>Точка 1</li>
        <li>Точка 2</li>
      </ul>
    )
  }}
/>
```

**Алтернативни props:**
- `left`/`right` - неутрално сравнение
- `wrong`/`correct` - показва ❌/✅ икони

### 7. ExerciseCard

```jsx
<ExerciseCard difficulty="easy">

### Заглавие на Задачата

Описание на задачата...

</ExerciseCard>
```

**Нива на сложност:**
- `"easy"` - Зелен (5-15 мин)
- `"easy-medium"` - Светло зелен (15-25 мин)
- `"medium"` - Жълт (25-40 мин)
- `"medium-hard"` - Оранжев (40-60 мин)
- `"hard"` - Червен (60+ мин)

**⚠️ НЕ задавай `id` prop!** Системата автоматично генерира ID от заглавието.

### 8. ProgressTracker

```jsx
<ProgressTracker />
```

**⚠️ НЕ задавай `exercises` prop!** Автоматично открива ExerciseCard компонентите.

### 9. ViewSlidesButton

```jsx
<ViewSlidesButton lectureSlug="my-topic" />
```

`lectureSlug` трябва да съответства на директорията (без номера): `02-my-topic` → `"my-topic"`

---

## Exercise System - React Context API

### Как Работи (Zero Config)

1. `ExerciseCard` автоматично извлича заглавие от `### Заглавие` в съдържанието
2. Генерира semantic ID чрез транслитерация и slugify
3. Регистрира се в Context при mount
4. `ProgressTracker` автоматично чете от Context
5. Прогресът се запазва в LocalStorage

### Правила

1. **НЕ задавай** `id` prop на ExerciseCard
2. **НЕ задавай** `exercises` prop на ProgressTracker
3. Заглавията трябва да са **уникални** в рамките на страницата
4. Промяната на заглавие **променя** ID (губи се прогрес)

### Техническа Имплементация (за разработчици)

```jsx
// ❌ ГРЕШНО - причинява infinite loop
const context = useExerciseContext();
useEffect(() => {
  context.registerExercise(difficulty, id);
}, [difficulty, context]); // Context обект като dependency

// ✅ ПРАВИЛНО - destructure функции
const { registerExercise, unregisterExercise } = context;
useEffect(() => {
  registerExercise(difficulty, id);
  return () => unregisterExercise(id);
}, [difficulty, registerExercise, unregisterExercise]);
```

---

## MDX и LaTeX

### LaTeX Escaping (КРИТИЧНО)

В MDX v3, всички `{` и `}` в LaTeX **ТРЯБВА** да се escape-ват:

```markdown
✅ ПРАВИЛНО:
$O(n \log n)$                           // Без braces - OK
$O(n^\{2\})$                            // С escaped braces
\sum_\{i=0\}^\{n\} i                     // Escaped subscript/superscript

$$
T(n) = \begin\{cases\}
  O(1) & \text\{ако \} n = 1 \\
  2T(n/2) + O(n) & \text\{иначе\}
\end\{cases\}
$$

❌ ГРЕШНО:
$O(n^{2})$                              // Unescaped - MDX грешка!
\frac{n}{2}                             // Unescaped
```

### Специални Символи

```markdown
✅ ПРАВИЛНО:
E &lt;&lt; V²                            // << като HTML entity

❌ ГРЕШНО:
E << V²                                 // MDX parse error
```

**В code blocks НЕ е нужно escape-ване!**

---

## Inline SVG Графики (JSX Синтаксис)

### Основни Правила за SVG в MDX

MDX използва JSX синтаксис, затова SVG елементите трябва да следват JSX конвенции:

**1. Атрибути с тирета → camelCase:**
```jsx
// ❌ ГРЕШНО - HTML синтаксис
<svg stroke-width="2" fill-opacity="0.5" text-anchor="middle">

// ✅ ПРАВИЛНО - JSX синтаксис
<svg strokeWidth="2" fillOpacity="0.5" textAnchor="middle">
```

**2. Стилове като обекти с двойни къдрави скоби:**
```jsx
// ❌ ГРЕШНО - string стил или escape-нати скоби
<svg style="max-width: 600px">
<svg style=\{{maxWidth: '600px'}}>

// ✅ ПРАВИЛНО - JSX style обект
<svg style={{maxWidth: '600px', margin: '1rem auto', display: 'block'}}>
```

**3. CSS в `<style>` тагове:**
```jsx
// ✅ ПРАВИЛНО - CSS string в template literal
<svg>
  <style>{`
    .my-class { opacity: 0; animation: fadeIn 0.4s ease-out forwards; }
    @keyframes fadeIn { to { opacity: 1; } }
  `}</style>
</svg>
```

**4. linearGradient stop стилове:**
```jsx
// ❌ ГРЕШНО - string атрибути
<stop offset="0%" stop-color="#3498db" stop-opacity="1"/>

// ✅ ПРАВИЛНО - JSX style обект
<stop offset="0%" style={{stopColor: '#3498db', stopOpacity: 1}}/>

// ✅ СЪЩО ПРАВИЛНО - директни атрибути (camelCase)
<stop offset="0%" stopColor="#3498db" stopOpacity={1}/>
```

### Пълен SVG Шаблон

```jsx
<svg viewBox="0 0 600 200" style={{maxWidth: '600px', margin: '1rem auto', display: 'block'}}>
  <defs>
    <linearGradient id="uniqueGradId" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style={{stopColor: '#3498db'}}/>
      <stop offset="100%" style={{stopColor: '#2980b9'}}/>
    </linearGradient>
    <filter id="uniqueFilterId">
      <feDropShadow dx="2" dy="2" stdDeviation="2" floodOpacity="0.3"/>
    </filter>
  </defs>
  <style>{`
    .fade-in { opacity: 0; animation: fadeIn 0.4s ease-out forwards; }
    @keyframes fadeIn { to { opacity: 1; } }
  `}</style>

  <rect x="50" y="50" width="200" height="100" rx="8"
        fill="url(#uniqueGradId)" filter="url(#uniqueFilterId)"
        className="fade-in"/>
  <text x="150" y="105" textAnchor="middle" fill="white"
        fontFamily="system-ui, sans-serif" fontSize="16" fontWeight="600">
    Текст
  </text>
</svg>
```

### Важни Бележки

| HTML Атрибут | JSX Атрибут |
|--------------|-------------|
| `class` | `className` |
| `stroke-width` | `strokeWidth` |
| `fill-opacity` | `fillOpacity` |
| `text-anchor` | `textAnchor` |
| `font-size` | `fontSize` |
| `font-weight` | `fontWeight` |
| `font-family` | `fontFamily` |
| `stop-color` | `stopColor` |
| `stop-opacity` | `stopOpacity` |
| `flood-opacity` | `floodOpacity` |

**⚠️ ВАЖНО:**
- Използвайте **уникални ID-та** за gradients и filters (добавете префикс базиран на секцията)
- **НЕ escape-вайте** къдравите скоби в JSX (`{{` е правилно, `\{{` е ГРЕШНО)
- Стойностите в style обекти са **strings** за единици (`'600px'`) или **numbers** за безединични стойности (`1`)

---

## Reveal.js Презентации

### Структура

```markdown
---
title: Заглавие
theme: white           # white, black, league, beige, sky, night, serif, simple, solarized
highlightTheme: github # github, monokai, zenburn, vs, atom-one-dark
transition: slide      # none, fade, slide, convex, concave, zoom
---

# Хоризонтален Слайд 1

Съдържание

---

# Хоризонтален Слайд 2

--

## Вертикален Подслайд 2.1

--

## Вертикален Подслайд 2.2

---

<!-- .slide: data-background="#4d7e65" -->

# Слайд с Цветен Фон

---

# Код с Highlighting

\`\`\`python {2-3}
def example():
    x = 10    # Highlighted
    y = 20    # Highlighted
    return x + y
\`\`\`

---

# Fragments

🔹 **Появява се първо** <!-- .element: class="fragment" -->

🔹 **Появява се второ** <!-- .element: class="fragment" -->

🔹 **Появява се трето** <!-- .element: class="fragment fade-in" -->

---

Note:
Speaker notes - натисни S за presenter view
```

### Разделители

| Разделител | Значение |
|------------|----------|
| `---` | Хоризонтален слайд (← →) |
| `--` | Вертикален подслайд (↑ ↓) |
| `Note:` | Speaker notes |

### Fragments (Постепенно показване)

Fragments се използват за постепенно показване на елементи на слайд. Коментарът `<!-- .element: -->` **ТРЯБВА** да е **СЛЕД** елемента, не преди него.

**⚠️ ВАЖНО: Използвайте ПАРАГРАФИ, не списъци!**

Fragments работят най-добре с **отделни параграфи**, разделени с празни редове. **НЕ** използвайте bullet списъци (`-`), защото Markdown процесорът може да не приложи fragment класа правилно към `<li>` елемента.

**✅ ПРАВИЛЕН Синтаксис (Параграфи):**

```markdown
🔹 **Първи елемент** <!-- .element: class="fragment" -->

🔹 **Втори елемент** <!-- .element: class="fragment" -->

🔹 **Трети елемент** <!-- .element: class="fragment fade-up" -->
```

**❌ ИЗБЯГВАЙТЕ (Списъци с `-`):**

```markdown
- Първи елемент <!-- .element: class="fragment" -->
- Втори елемент <!-- .element: class="fragment" -->
```

**Алтернативни формати за параграфи:**

```markdown
# С емоджи префикси
📜 **История** - Виждате всяка промяна <!-- .element: class="fragment" -->

↩️ **Rollback** - Връщате се към работещи версии <!-- .element: class="fragment" -->

# С номера (за поредност)
1️⃣ **Първа стъпка** <!-- .element: class="fragment" -->

2️⃣ **Втора стъпка** <!-- .element: class="fragment" -->

# Само bold текст
**Концепция едно** - описание <!-- .element: class="fragment" -->

**Концепция две** - описание <!-- .element: class="fragment" -->
```

**Налични fragment стилове:**

| Стил | Ефект |
|------|-------|
| `fragment` | Fade in (по подразбиране) |
| `fragment fade-out` | Започва видим, изчезва |
| `fragment fade-up` | Слайдва нагоре докато се появява |
| `fragment fade-down` | Слайдва надолу докато се появява |
| `fragment fade-left` | Слайдва наляво докато се появява |
| `fragment fade-right` | Слайдва надясно докато се появява |
| `fragment fade-in-then-out` | Появява се, след това изчезва |
| `fragment fade-in-then-semi-out` | Появява се, след това 50% opacity |
| `fragment highlight-red` | Текстът става червен |
| `fragment highlight-green` | Текстът става зелен |
| `fragment highlight-blue` | Текстът става син |
| `fragment grow` | Увеличава размера |
| `fragment shrink` | Намалява размера |
| `fragment strike` | Зачертава текста |

**Контролиране на реда:**

```markdown
Трети (появява се последен) <!-- .element: class="fragment" data-fragment-index="3" -->

Първи (появява се първи) <!-- .element: class="fragment" data-fragment-index="1" -->

Втори (появява се втори) <!-- .element: class="fragment" data-fragment-index="2" -->
```

**⚠️ ВАЖНО:** Коментарът ТРЯБВА да е на **СЪЩИЯ ред** след елемента!

```markdown
✅ ПРАВИЛНО:
Текст <!-- .element: class="fragment" -->

❌ ГРЕШНО:
<!-- .element: class="fragment" -->
Текст
```

**⚠️ ВАЖНО:** Оставяйте **празен ред** между fragment елементите!

### Keyboard Shortcuts

| Клавиш | Действие |
|--------|----------|
| ←→↑↓ | Навигация |
| Space | Следващ слайд |
| S | Speaker view |
| F | Fullscreen |
| ESC | Overview |
| ? | Help |

### Workflow

```bash
# 1. Създай/редактирай slides.md
code docs/XX-topic-name/slides.md

# 2. Rebuild презентациите
npm run build:slides

# 3. Тествай локално
npm start
# Отвори http://localhost:3000/slides/topic-name/

# 4. За production
npm run build
```

### PDF Export

1. Отвори презентацията в Chrome
2. Добави `?print-pdf` към URL
3. Print → Save as PDF

---

## Best Practices

### Съдържание

1. **Винаги използвай компоненти** вместо plain markdown
2. **Добавяй LearningObjectives** в началото на всяка лекция
3. **Включвай QuickSummary** за бърз преглед
4. **Завършвай с "Допълнителни Ресурси"** секция
5. **Използвай подходящи InfoBox варианти** за различни типове информация

### Упражнения

6. **Zero Config** - не задавай `id` и `exercises` props
7. **Уникални заглавия** - всяко упражнение с различно заглавие
8. **Включвай подсказки** в CollapsibleSection
9. **Добавяй сложност анализ** в решенията
10. **Използвай 3-5 упражнения** с различни нива на сложност
11. **Ред на елементите**: Header banner → ProgressTracker → Exercises (винаги banner преди tracker!)
12. **Nested code blocks**: Използвай ```````` (4 backticks) за външен блок когато съдържа вътрешни ``` блокове

### Код

11. **Винаги указвай език** след \`\`\`
12. **Коментари на английски** в кода
13. **Съдържание на български** извън code blocks

### MDX

14. **Escape LaTeX braces** с `\{` и `\}`
15. **Escape `<<` и `>>`** като `&lt;&lt;` и `&gt;&gt;`
16. **Изчиствай cache** при грешки: `rm -rf .docusaurus`

### Презентации

17. **Една идея на слайд**
18. **Добавяй speaker notes** за обяснения
19. **Използвай fragments** за постепенно показване

---

## Troubleshooting

### Build Errors

```bash
# Изчисти cache и rebuild
cd docusaurus-site
rm -rf .docusaurus build
npm run build
```

### MDX Parse Errors

- **"Could not parse expression"** → Escape `{` и `}` в LaTeX
- **"Unexpected token"** → Провери за `<<` или `>>` извън code blocks

### Exercise System

- **"useExerciseContext must be used..."** → `rm -rf .docusaurus && npm start`
- **"Maximum update depth exceeded"** → Destructure функции от context
- **Прогресът не се запазва** → Провери LocalStorage в DevTools

### Reveal.js

- **Промените не се виждат** → `npm run build:slides`
- **Кодът не е оцветен** → Указвай език след \`\`\`
- **LaTeX не работи** → Escape всички `{` и `}`
- **Слайдовете не се показват в navbar** → Провери дали `slides.md` е в правилната директория

### Deployment

- **GitHub Pages не се обновява** → Провери Actions tab за грешки
- **404 грешки** → Провери `baseUrl` в config

---

## Полезни Команди

```bash
cd docusaurus-site

# Development
npm start              # Dev server с hot reload
npm run build          # Production build
npm run serve          # Тест на production build

# Презентации
npm run build:slides   # Rebuild само презентациите

# Maintenance
npm run clear          # Clear Docusaurus cache
rm -rf .docusaurus     # Ръчно изчистване на cache
rm -rf build           # Изтрий build директорията
rm -rf node_modules && npm install  # Преинсталирай dependencies
```

---

## Checklist за Нова Лекция

- [ ] Директория създадена: `docs/XX-topic-name/`
- [ ] `_category_.json` с правилен `position`
- [ ] `lecture.md`:
  - [ ] Frontmatter с tags
  - [ ] Imports на компоненти
  - [ ] ViewSlidesButton (ако има slides)
  - [ ] QuickSummary
  - [ ] LearningObjectives
  - [ ] Съдържание с компоненти
  - [ ] Код примери
  - [ ] "Допълнителни Ресурси" секция
- [ ] `exercises.md`:
  - [ ] Frontmatter
  - [ ] Imports
  - [ ] ProgressTracker (без props!)
  - [ ] Минимум 3 ExerciseCard (без id prop!)
  - [ ] Подсказки в CollapsibleSection
  - [ ] Решения в CollapsibleSection
- [ ] `slides.md` (опционално):
  - [ ] Frontmatter с title, theme
  - [ ] Хоризонтални и вертикални слайдове
  - [ ] Speaker notes
- [ ] Тествано локално: `npm start`
- [ ] Build успешен: `npm run build`
- [ ] Презентации генерирани: `npm run build:slides`

---

**University Lectures Template - Comprehensive Documentation for Claude Code**
