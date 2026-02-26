---
title: "Лекция"
sidebar_position: 1
slug: lecture
tags: [html, css, semantic-html, responsive-design, flexbox, grid, accessibility, mobile-first]
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

# HTML и CSS Основи: Семантика, Адаптивен Дизайн и Съвременни Технологии

<ViewSlidesButton lectureSlug="html-css-basics" />

<QuickSummary>

**Ключови познания:**
- Семантичната HTML разметка подобрява достъпността и SEO
- Mobile-First подходът е задължителен при над 64% мобилен трафик
- Flexbox и CSS Grid са стандартът за съвременно оформление
- Container Queries позволяват истински модулни компоненти
- Достъпността не е допълнителна функция, а задължително изискване

</QuickSummary>

<LearningObjectives objectives={[
  "Да разбирате принципите на семантичната HTML разметка и нейното значение за достъпност и SEO",
  "Да прилагате Mobile-First подход при създаване на адаптивни уебсайтове",
  "Да използвате Flexbox и CSS Grid за ефективно и гъвкаво оформление",
  "Да оптимизирате производителността на уебсайтове чрез минификация и асинхронно зареждане",
  "Да осигурявате достъпност чрез ARIA атрибути, клавиатурна навигация и алтернативен текст"
]} />

---

## 1. Въведение и Мотивация

<WhyBox title="Защо HTML и CSS остават основата на уеб разработката през 2026 година?">

HTML и CSS са фундаменталната основа на уеб разработката. HTML формира семантичната структура на съдържанието, а CSS управлява визуалния вид, адаптивността и анимациите.

**Ключови факти:**
- **64%+** от световния интернет трафик идва от мобилни устройства
- Google използва **Mobile-First Indexing** - мобилната версия има приоритет при класиране
- Съвременните CSS функции (Flexbox, Grid, Container Queries) позволяват създаване на производителни проекти без сложно програмиране

</WhyBox>

---

## 2. Структура на HTML Документ

<InfoBox title="Анатомия на HTML документа">

Всеки HTML документ има йерархична структура, която определя как браузърът интерпретира и визуализира съдържанието.

</InfoBox>

### Визуализация на HTML Структурата

<div style={{textAlign: 'center', margin: '2rem 0'}}>
<img
  src={useBaseUrl('/img/diagrams/html-css/document-structure.svg')}
  alt="HTML структура на документа - html, head, body и семантични елементи"
  style={{maxWidth: '600px', width: '100%', margin: '0 auto', display: 'block'}}
/>
</div>

### Семантични HTML5 Тагове

| Таг | Описание |
|-----|----------|
| `<header>` | Шапка на документа или раздел |
| `<nav>` | Навигационни връзки |
| `<main>` | Основно съдържание (един път на страница) |
| `<article>` | Самостоятелно съдържание (статия, пост) |
| `<section>` | Тематичен раздел със заглавие |
| `<footer>` | Долен колонтитул |

<SuccessBox title="Ползи от семантичната разметка">

**За достъпност:** Екранните четци използват семантичните тагове за навигация.

**За SEO:** Търсачките разбират по-добре структурата и контекста на съдържанието.

**За поддръжка:** Кодът става по-четим и логичен за екипна разработка.

</SuccessBox>

### Пример: Рефакториране към семантичен HTML

<ComparisonBox
  wrong={{
    title: "Несемантичен код",
    content: (
      <pre style={{fontSize: '12px', margin: 0}}>
{`<div id="header">Лого</div>
<div class="nav">
  <ul><li>Начало</li></ul>
</div>
<div id="main">
  <div class="article">
    <h1>Заглавие</h1>
  </div>
</div>
<div class="footer">
  Контакти
</div>`}
      </pre>
    )
  }}
  correct={{
    title: "Семантичен код",
    content: (
      <pre style={{fontSize: '12px', margin: 0}}>
{`<header>Лого</header>
<nav>
  <ul><li>Начало</li></ul>
</nav>
<main>
  <article>
    <h1>Заглавие</h1>
  </article>
</main>
<footer>
  Контакти
</footer>`}
      </pre>
    )
  }}
/>

---

## 3. CSS Box Model

<InfoBox title="Какво е Box Model?">

Всеки HTML елемент се третира като правоъгълна кутия. CSS Box Model определя как се изчислява общият размер на елемента чрез четири слоя: content, padding, border и margin.

</InfoBox>

### Визуализация на Box Model

<div style={{textAlign: 'center', margin: '2rem 0'}}>
<img
  src={useBaseUrl('/img/diagrams/html-css/box-model.svg')}
  alt="CSS Box Model - margin, border, padding, content"
  style={{maxWidth: '500px', width: '100%', margin: '0 auto', display: 'block'}}
/>
</div>

```css
/* Box Model примерен код */
.element {
  width: 200px;        /* Content ширина */
  height: 100px;       /* Content височина */
  padding: 20px;       /* Вътрешно разстояние */
  border: 4px solid;   /* Граница */
  margin: 30px;        /* Външно разстояние */

  /* С box-sizing: border-box; padding и border
     се включват в width/height */
  box-sizing: border-box;
}
```

<WarningBox title="Важно: box-sizing">

По подразбиране `padding` и `border` се добавят към `width` и `height`. Използвайте `box-sizing: border-box;` за да ги включите в общия размер - това е стандартна практика в съвременната разработка.

</WarningBox>

---

## 4. Каскад, Специфичност и Наследяване

### Каскадът в CSS

<InfoBox title="Как работи каскадът?">

CSS (Cascading Style Sheets) прилага стилове по определен ред на приоритет:

1. **Произход** - браузърни стилове, потребителски стилове, авторски стилове
2. **Специфичност** - колко "точен" е селекторът
3. **Ред на деклариране** - последното правило печели при равна специфичност

</InfoBox>

### Изчисляване на специфичност

| Селектор | Стойност | Пример |
|----------|----------|--------|
| Inline стил | (1,0,0,0) | `style="color: red"` |
| ID | (0,1,0,0) | `#header` |
| Клас/Атрибут/Псевдоклас | (0,0,1,0) | `.nav`, `[type="text"]`, `:hover` |
| Елемент/Псевдоелемент | (0,0,0,1) | `div`, `::before` |

```css
/* Примери за специфичност */
div { color: blue; }              /* (0,0,0,1) */
.nav { color: green; }            /* (0,0,1,0) - печели над div */
#header { color: red; }           /* (0,1,0,0) - печели над .nav */
div.nav#header { color: purple; } /* (0,1,1,1) - най-висока специфичност */
```

### Cascade Layers (@layer) - Нова функция в CSS

<SuccessBox title="@layer решава войната на специфичността">

Cascade Layers позволяват явно управление на приоритетите без `!important`:

```css
@layer base {
  /* Базови стилове - най-нисък приоритет */
}
@layer components {
  /* Компонентни стилове */
}
@layer utilities {
  /* Utility стилове - най-висок приоритет */
}
```

</SuccessBox>

---

## 5. Mobile-First и Адаптивен Дизайн

<WhyBox title="Защо Mobile-First?">

С над **64%** мобилен трафик и Google Mobile-First Indexing, разработката започва от мобилни устройства и се разширява към по-големи екрани. Резултатът е бърз, оптимизиран сайт за мнозинството потребители.

</WhyBox>

### Визуализация на Mobile-First Подхода

<div style={{textAlign: 'center', margin: '2rem 0'}}>
<img
  src={useBaseUrl('/img/diagrams/html-css/responsive-breakpoints.svg')}
  alt="Адаптивен дизайн - Mobile-First подход с breakpoints за мобилен, таблет и десктоп"
  style={{maxWidth: '700px', width: '100%', margin: '0 auto', display: 'block'}}
/>
</div>

### Media Queries за Mobile-First

```css
/* Базови стилове за мобилни (няма media query) */
.container {
  display: flex;
  flex-direction: column;
  padding: 1rem;
}

/* Таблети и нагоре */
@media (min-width: 768px) {
  .container {
    flex-direction: row;
    padding: 2rem;
  }
}

/* Десктоп */
@media (min-width: 1024px) {
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
}
```

### Относителни Единици

<Grid columns={2}>
  <Card title="% (Процент)" icon="📐">
    Процент от родителския елемент. Идеални за гъвкави контейнери и fluid layouts.
  </Card>
  <Card title="em / rem" icon="📝">
    Относителни към размера на шрифта. `em` - към родителя, `rem` - към root елемента.
  </Card>
  <Card title="vw / vh" icon="📱">
    1% от ширината/височината на viewport. За пълноекранни елементи.
  </Card>
  <Card title="Защо не px?" icon="🚫">
    Пикселите са фиксирани и не се мащабират. Относителните единици осигуряват достъпност.
  </Card>
</Grid>

---

## 6. Flexbox - Едномерни Оформления

<InfoBox title="Какво е Flexbox?">

Flexbox е CSS модул за подреждане на елементи в една ос (хоризонтална или вертикална). Идеален за навигации, бутони, карти и центриране на съдържание.

**98.4%** от разработчиците използват Flexbox през 2026 година.

</InfoBox>

### Визуализация на Flexbox

<div style={{textAlign: 'center', margin: '2rem 0'}}>
<img
  src={useBaseUrl('/img/diagrams/html-css/flexbox-layout.svg')}
  alt="Flexbox оформление - контейнер с flex елементи, main axis и cross axis"
  style={{maxWidth: '600px', width: '100%', margin: '0 auto', display: 'block'}}
/>
</div>

### Ключови Flexbox Свойства

```css
.flex-container {
  display: flex;
  flex-direction: row;      /* row | column | row-reverse | column-reverse */
  justify-content: center;  /* Main axis: flex-start | center | space-between | space-around */
  align-items: center;      /* Cross axis: flex-start | center | stretch | baseline */
  gap: 1rem;                /* Разстояние между елементите */
  flex-wrap: wrap;          /* Позволява пренасяне на нов ред */
}

.flex-item {
  flex: 1;                  /* Кратък запис: flex-grow flex-shrink flex-basis */
  flex-grow: 1;             /* Колко да нараства */
  flex-shrink: 0;           /* Колко да се свива */
  flex-basis: 200px;        /* Начална ширина */
}
```

---

## 7. CSS Grid - Двумерни Оформления

<InfoBox title="Какво е CSS Grid?">

CSS Grid е система за двумерно оформление, контролираща едновременно редове и колони. Идеална за цялостна структура на страници, галерии и дашборди.

**94%** от разработчиците използват Grid през 2026 година.

</InfoBox>

### Визуализация на CSS Grid

<div style={{textAlign: 'center', margin: '2rem 0'}}>
<img
  src={useBaseUrl('/img/diagrams/html-css/grid-layout.svg')}
  alt="CSS Grid оформление - редове, колони и grid области"
  style={{maxWidth: '600px', width: '100%', margin: '0 auto', display: 'block'}}
/>
</div>

### Ключови Grid Свойства

```css
.grid-container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;    /* Три колони */
  grid-template-rows: auto 1fr auto;      /* Три реда */
  gap: 20px;                              /* Разстояние между клетките */

  /* Или с grid-template-areas за именувани области */
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }

/* Или със span */
.header {
  grid-column: 1 / -1;  /* От първа до последна колона */
}
```

### Сравнение: Flexbox vs CSS Grid

<ComparisonBox
  left={{
    title: "Flexbox",
    content: (
      <ul>
        <li><strong>Едномерен</strong> - една ос</li>
        <li>Навигации, бутони, списъци</li>
        <li>Гъвкаво подреждане</li>
        <li>Относителен контрол</li>
        <li><strong>98.4%</strong> използване</li>
      </ul>
    )
  }}
  right={{
    title: "CSS Grid",
    content: (
      <ul>
        <li><strong>Двумерен</strong> - редове и колони</li>
        <li>Страници, галерии, дашборди</li>
        <li>Точна сетка</li>
        <li>Абсолютен контрол</li>
        <li><strong>94%</strong> използване</li>
      </ul>
    )
  }}
/>

<SuccessBox title="Комбинирайте двата метода">

Стандартна практика в 2026: Grid за глобалната структура на страницата, Flexbox за вътрешните компоненти (навигация във header, карти в grid клетки).

</SuccessBox>

---

## 8. Container Queries - Революция в CSS

<InfoBox title="Какво са Container Queries?">

Container Queries позволяват стилизиране на елементи въз основа на размера на **родителския контейнер**, не на viewport-а. Това създава истински модулни и преизползваеми компоненти.

</InfoBox>

### Визуализация на Container Queries

<div style={{textAlign: 'center', margin: '2rem 0'}}>
  <img src={useBaseUrl('/img/diagrams/html-css/container-queries.svg')} alt="Container Queries Visualization" style={{maxWidth: '650px', width: '100%'}} />
</div>

```css
/* Дефиниране на контейнер */
.card-container {
  container-type: inline-size;
  container-name: card;
}

/* Базов стил за картата (тесен контейнер) */
.card {
  display: flex;
  flex-direction: column;
}

/* Когато контейнерът е достатъчно широк */
@container card (min-width: 400px) {
  .card {
    flex-direction: row;
    gap: 1rem;
  }

  .card-image {
    width: 180px;
  }
}

/* Container Query Units */
.card-title {
  font-size: 5cqw; /* 5% от ширината на контейнера */
}
```

---

## 9. Оптимизация на Производителността

<Grid columns={2}>
  <Card title="Минификация" icon="📦">
    Премахване на интервали, коментари и излишни символи. Намалява размера на файловете с 10-30%.
  </Card>
  <Card title="Async/Defer скриптове" icon="🚀">
    `async` - зарежда паралелно, изпълнява веднага. `defer` - зарежда паралелно, изпълнява след HTML парсинг.
  </Card>
  <Card title="Critical CSS" icon="⚡">
    Вграждане на критичните стилове за "first paint" в `&lt;head&gt;`, останалите - асинхронно.
  </Card>
  <Card title="Оптимизация на изображения" icon="🖼️">
    Използвайте `srcset`, `loading="lazy"`, WebP/AVIF формати за до 30% по-добра компресия.
  </Card>
</Grid>

```html
<!-- Async vs Defer -->
<script src="analytics.js" async></script> <!-- Некритичен, независим -->
<script src="app.js" defer></script>       <!-- Критичен, зависи от DOM -->

<!-- Critical CSS -->
<head>
  <style>
    /* Критични стилове за first paint */
    .header { background: #333; }
  </style>
  <link rel="preload" href="styles.css" as="style" onload="this.rel='stylesheet'">
</head>

<!-- Адаптивни изображения -->
<img srcset="image-480.webp 480w,
             image-800.webp 800w,
             image-1200.webp 1200w"
     sizes="(max-width: 600px) 480px, 800px"
     loading="lazy"
     alt="Описание на изображението">
```

---

## 10. Уеб Достъпност (Web Accessibility)

<WarningBox title="Достъпността не е допълнителна функция">

Достъпността е задължително изискване за качествена уеб разработка. Тя помага не само на потребители с увреждания, но подобрява SEO и общото потребителско изживяване.

</WarningBox>

### Ключови Принципи

<Grid columns={2}>
  <Card title="Контрастност" icon="🎨">
    Минимум **4.5:1** съотношение за нормален текст (WCAG 2.2 Level AA).
  </Card>
  <Card title="Клавиатурна навигация" icon="⌨️">
    Цялата функционалност трябва да е достъпна само с клавиатура.
  </Card>
  <Card title="ARIA атрибути" icon="🏷️">
    `role`, `aria-label`, `aria-describedby` за допълнителен контекст.
  </Card>
  <Card title="Alt текст" icon="📷">
    Описателен текст за значими изображения. За декоративни: `alt=""`.
  </Card>
</Grid>

```html
<!-- Семантичен HTML е основата на достъпността -->
<button type="submit">Изпрати</button> <!-- По-добре от <div onclick="..."> -->

<!-- ARIA когато семантичният HTML не е достатъчен -->
<div role="button"
     tabindex="0"
     aria-label="Затвори прозореца"
     onkeydown="if(event.key==='Enter') closeModal()">
  X
</div>

<!-- Видим фокус -->
<style>
  button:focus {
    outline: 2px solid #007bff;
    outline-offset: 2px;
  }

  /* Никога не правете това! */
  /* button:focus { outline: none; } */
</style>

<!-- Alt текст за изображения -->
<img src="product.jpg" alt="Червена кожена чанта с метална закопчалка">
<img src="decorative-line.svg" alt="" aria-hidden="true"> <!-- Декоративно -->
```

---

## 11. CSS Анимации и Преходи

### Transitions (Преходи)

```css
/* Плавна промяна при hover */
.button {
  background-color: #3498db;
  transform: scale(1);
  transition: background-color 0.3s ease,
              transform 0.2s ease;
}

.button:hover {
  background-color: #2980b9;
  transform: scale(1.05);
}
```

### Keyframe Animations

```css
/* Пулсираща анимация */
@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.8;
  }
}

.pulsing-element {
  animation: pulse 2s ease-in-out infinite;
}

/* Анимация при появяване */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  animation: fadeInUp 0.5s ease-out forwards;
}
```

<SuccessBox title="Производителни анимации">

Анимирайте само `opacity` и `transform` - те използват GPU ускорение. Избягвайте анимиране на `width`, `height`, `margin` - те причиняват reflow.

Използвайте `@media (prefers-reduced-motion: reduce)` за потребители, които предпочитат по-малко движение.

</SuccessBox>

---

## 12. Нови CSS Функции в 2026

### Условна функция if()

```css
/* Условни стилове директно в CSS */
.element {
  background-color: if(viewport-width > 768px: blue; else: red);
  font-size: if(container-width >= 400px: 1.2rem; else: 1rem);
}
```

### @scope правило

```css
/* Ограничаване на стилове до конкретен контейнер */
@scope (.card) {
  .title {
    color: navy;
    /* Тези стилове важат САМО вътре в .card */
  }

  .description {
    color: gray;
  }
}
```

### Popover атрибут

```html
<!-- Модални прозорци без JavaScript -->
<button popovertarget="my-popup">Отвори</button>

<div id="my-popup" popover>
  <h2>Заглавие</h2>
  <p>Съдържание на popup-а</p>
  <button popovertarget="my-popup" popovertargetaction="hide">
    Затвори
  </button>
</div>
```

---

## 13. Инструменти и Методологии

### IDE и Редактори

<Grid columns={3}>
  <Card title="VS Code" icon="💻">
    Лек, мощен, с отлична поддръжка за HTML/CSS. Разширения: Emmet, Prettier, Stylelint.
  </Card>
  <Card title="WebStorm" icon="🌐">
    Пълноценна IDE с дълбок анализ на кода, рефакторинг и вграден терминал.
  </Card>
  <Card title="Sublime Text" icon="📝">
    Бърз и универсален редактор с множество курсори и Package Control.
  </Card>
</Grid>

### БЭМ Методология

<InfoBox title="Block Element Modifier">

БЭМ е система за именуване на CSS класове, която прави структурата предсказуема и мащабируема:

```css
/* Block */
.card { }

/* Element (част от block) */
.card__title { }
.card__image { }
.card__button { }

/* Modifier (вариант) */
.card--featured { }
.card__button--primary { }
```

</InfoBox>

### Sass/SCSS Препроцесор

```scss
// Променливи
$primary-color: #3498db;
$spacing: 1rem;

// Вложеност
.card {
  padding: $spacing;

  &__title {
    color: $primary-color;
  }

  &--featured {
    border: 2px solid $primary-color;
  }
}

// Миксини
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  @include flex-center;
}
```

---

## 14. Обобщение

<Grid columns={3}>
  <Card title="Семантика" icon="📋">
    Използвайте правилните HTML тагове. Те са основата за SEO, достъпност и поддръжка.
  </Card>
  <Card title="Mobile-First" icon="📱">
    Започвайте от мобилни устройства. 64%+ от трафика е мобилен.
  </Card>
  <Card title="Flexbox + Grid" icon="📐">
    Grid за структура, Flexbox за компоненти. Комбинирайте ги.
  </Card>
  <Card title="Container Queries" icon="📦">
    Компоненти, които се адаптират към контейнера, не към viewport-а.
  </Card>
  <Card title="Производителност" icon="⚡">
    Минификация, lazy loading, Critical CSS, WebP изображения.
  </Card>
  <Card title="Достъпност" icon="♿">
    Контраст, клавиатурна навигация, ARIA атрибути, alt текст.
  </Card>
</Grid>

---

## Допълнителни Ресурси

### Документация
- [MDN Web Docs](https://developer.mozilla.org) - Пълна документация за HTML, CSS и уеб стандарти
- [Can I Use](https://caniuse.com) - Проверка на браузърната поддръжка
- [CSS Tricks](https://css-tricks.com) - Практически примери и уроци

### Инструменти за валидация
- [W3C HTML Validator](https://validator.w3.org) - Валидация на HTML
- [W3C CSS Validator](https://jigsaw.w3.org/css-validator) - Валидация на CSS
- [WAVE](https://wave.webaim.org) - Проверка на достъпността

### Практика
- [Frontend Mentor](https://frontendmentor.io) - Реални проекти за практика
- [CSS Battle](https://cssbattle.dev) - CSS предизвикателства
- [Flexbox Froggy](https://flexboxfroggy.com) - Игра за учене на Flexbox
- [Grid Garden](https://cssgridgarden.com) - Игра за учене на CSS Grid
