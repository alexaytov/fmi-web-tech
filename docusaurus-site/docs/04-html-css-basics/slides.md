---
title: HTML и CSS Основи
theme: white
highlightTheme: github
transition: slide
---

# HTML и CSS Основи

### Семантика, Адаптивен Дизайн и Съвременни Технологии

Note:
Добре дошли в лекцията по HTML и CSS основи. Ще разгледаме семантичната разметка, адаптивен дизайн, Flexbox, Grid и модерните CSS функции.

---

## Учебни Цели

Да разбирате семантичната HTML разметка <!-- .element: class="fragment" -->

Да прилагате Mobile-First подход <!-- .element: class="fragment" -->

Да използвате Flexbox и CSS Grid <!-- .element: class="fragment" -->

Да осигурявате достъпност (a11y) <!-- .element: class="fragment" -->

Да познавате Container Queries и модерен CSS <!-- .element: class="fragment" -->

Note:
До края на лекцията ще можете да създавате модерни, адаптивни и достъпни уеб страници.

---

## Защо HTML и CSS през 2026?

--

### Ключови Факти

**64%+** от световния интернет трафик е мобилен <!-- .element: class="fragment" -->

**Google Mobile-First Indexing** - мобилната версия има приоритет <!-- .element: class="fragment" -->

**Core Web Vitals** - производителността влияе на SEO <!-- .element: class="fragment" -->

**Accessibility** - задължително изискване по закон (EU, USA) <!-- .element: class="fragment" -->

Note:
HTML и CSS остават основата на уеб разработката. Без тях няма уеб.

--

### Еволюция на CSS

| Година | Технология |
|--------|------------|
| 2012 | Media Queries |
| 2017 | CSS Grid |
| 2022 | Container Queries |
| 2024 | CSS Nesting, :has() |
| 2026 | Anchor Positioning |

Note:
CSS се развива бързо - всяка година добавя нови възможности.

---

## HTML Структура на Документа

--

### Анатомия на HTML Документа

<svg viewBox="0 0 600 350" style="max-width: 600px; margin: 0 auto; display: block;">
  <defs>
    <linearGradient id="htmlGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#e44d26"/>
      <stop offset="100%" style="stop-color:#f16529"/>
    </linearGradient>
    <linearGradient id="headGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#667eea"/>
      <stop offset="100%" style="stop-color:#764ba2"/>
    </linearGradient>
    <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#11998e"/>
      <stop offset="100%" style="stop-color:#38ef7d"/>
    </linearGradient>
    <filter id="shadow1" x="-10%" y="-10%" width="120%" height="130%">
      <feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="#000" flood-opacity="0.2"/>
    </filter>
  </defs>
  <!-- HTML Container -->
  <rect x="20" y="15" width="560" height="320" rx="15" fill="url(#htmlGrad)" filter="url(#shadow1)"/>
  <text x="50" y="50" fill="white" font-family="monospace" font-weight="bold" font-size="18">&lt;html&gt;</text>
  <!-- Head Section -->
  <rect x="40" y="65" width="520" height="70" rx="10" fill="url(#headGrad)" filter="url(#shadow1)"/>
  <text x="60" y="95" fill="white" font-family="monospace" font-weight="bold" font-size="16">&lt;head&gt;</text>
  <text x="80" y="120" fill="rgba(255,255,255,0.9)" font-family="monospace" font-size="12">&lt;title&gt;, &lt;meta&gt;, &lt;link&gt;, &lt;style&gt;</text>
  <!-- Body Section -->
  <rect x="40" y="145" width="520" height="175" rx="10" fill="url(#bodyGrad)" filter="url(#shadow1)"/>
  <text x="60" y="175" fill="white" font-family="monospace" font-weight="bold" font-size="16">&lt;body&gt;</text>
  <!-- Semantic elements inside body -->
  <rect x="60" y="190" width="110" height="35" rx="5" fill="rgba(255,255,255,0.3)"/>
  <text x="80" y="213" fill="white" font-family="monospace" font-size="11">&lt;header&gt;</text>
  <rect x="180" y="190" width="80" height="35" rx="5" fill="rgba(255,255,255,0.3)"/>
  <text x="195" y="213" fill="white" font-family="monospace" font-size="11">&lt;nav&gt;</text>
  <rect x="270" y="190" width="80" height="35" rx="5" fill="rgba(255,255,255,0.3)"/>
  <text x="282" y="213" fill="white" font-family="monospace" font-size="11">&lt;main&gt;</text>
  <rect x="360" y="190" width="90" height="35" rx="5" fill="rgba(255,255,255,0.3)"/>
  <text x="370" y="213" fill="white" font-family="monospace" font-size="11">&lt;article&gt;</text>
  <rect x="460" y="190" width="90" height="35" rx="5" fill="rgba(255,255,255,0.3)"/>
  <text x="468" y="213" fill="white" font-family="monospace" font-size="11">&lt;section&gt;</text>
  <rect x="60" y="235" width="80" height="35" rx="5" fill="rgba(255,255,255,0.3)"/>
  <text x="70" y="258" fill="white" font-family="monospace" font-size="11">&lt;aside&gt;</text>
  <rect x="150" y="235" width="90" height="35" rx="5" fill="rgba(255,255,255,0.3)"/>
  <text x="162" y="258" fill="white" font-family="monospace" font-size="11">&lt;footer&gt;</text>
  <!-- Labels -->
  <text x="300" y="295" fill="white" font-size="13" text-anchor="middle" font-style="italic">Видимо съдържание</text>
  <text x="505" y="50" fill="rgba(255,255,255,0.7)" font-size="11" text-anchor="end">Коренов елемент</text>
</svg>

Note:
HTML документът има йерархична структура - html съдържа head и body.

--

### Базов HTML5 Шаблон

```html
<!DOCTYPE html>
<html lang="bg">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, initial-scale=1.0">
  <title>Моята страница</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>...</header>
  <main>...</main>
  <footer>...</footer>
</body>
</html>
```

Note:
Винаги започвайте с DOCTYPE и правилен lang атрибут.

---

## Семантични HTML Тагове

--

### Структурни Елементи

| Таг | Предназначение |
|-----|----------------|
| `<header>` | Шапка на страница/секция |
| `<nav>` | Навигационни връзки |
| `<main>` | Основно съдържание |
| `<article>` | Самостоятелна статия |
| `<section>` | Тематичен раздел |
| `<aside>` | Странично съдържание |
| `<footer>` | Долен колонтитул |

--

### HTML DOM Дърво

<svg viewBox="0 0 650 320" style="max-width: 650px; margin: 0 auto; display: block;">
  <defs>
    <linearGradient id="nodeGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#6366f1"/>
      <stop offset="100%" style="stop-color:#8b5cf6"/>
    </linearGradient>
    <linearGradient id="nodeGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#10b981"/>
      <stop offset="100%" style="stop-color:#34d399"/>
    </linearGradient>
    <linearGradient id="nodeGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#f59e0b"/>
      <stop offset="100%" style="stop-color:#fbbf24"/>
    </linearGradient>
    <filter id="nodeShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="3" stdDeviation="3" flood-color="#000" flood-opacity="0.15"/>
    </filter>
  </defs>
  <!-- Lines connecting nodes -->
  <line x1="325" y1="55" x2="180" y2="110" stroke="#94a3b8" stroke-width="2"/>
  <line x1="325" y1="55" x2="470" y2="110" stroke="#94a3b8" stroke-width="2"/>
  <line x1="470" y1="150" x2="350" y2="200" stroke="#94a3b8" stroke-width="2"/>
  <line x1="470" y1="150" x2="470" y2="200" stroke="#94a3b8" stroke-width="2"/>
  <line x1="470" y1="150" x2="590" y2="200" stroke="#94a3b8" stroke-width="2"/>
  <line x1="350" y1="240" x2="280" y2="280" stroke="#94a3b8" stroke-width="2"/>
  <line x1="350" y1="240" x2="420" y2="280" stroke="#94a3b8" stroke-width="2"/>
  <!-- Root: html -->
  <rect x="275" y="20" width="100" height="40" rx="8" fill="url(#nodeGrad1)" filter="url(#nodeShadow)"/>
  <text x="325" y="47" fill="white" font-family="monospace" font-size="14" font-weight="bold" text-anchor="middle">html</text>
  <!-- Level 1: head, body -->
  <rect x="130" y="110" width="100" height="40" rx="8" fill="url(#nodeGrad2)" filter="url(#nodeShadow)"/>
  <text x="180" y="137" fill="white" font-family="monospace" font-size="14" font-weight="bold" text-anchor="middle">head</text>
  <rect x="420" y="110" width="100" height="40" rx="8" fill="url(#nodeGrad2)" filter="url(#nodeShadow)"/>
  <text x="470" y="137" fill="white" font-family="monospace" font-size="14" font-weight="bold" text-anchor="middle">body</text>
  <!-- Level 2: header, main, footer -->
  <rect x="300" y="200" width="100" height="40" rx="8" fill="url(#nodeGrad3)" filter="url(#nodeShadow)"/>
  <text x="350" y="227" fill="white" font-family="monospace" font-size="13" font-weight="bold" text-anchor="middle">header</text>
  <rect x="420" y="200" width="100" height="40" rx="8" fill="url(#nodeGrad3)" filter="url(#nodeShadow)"/>
  <text x="470" y="227" fill="white" font-family="monospace" font-size="13" font-weight="bold" text-anchor="middle">main</text>
  <rect x="540" y="200" width="100" height="40" rx="8" fill="url(#nodeGrad3)" filter="url(#nodeShadow)"/>
  <text x="590" y="227" fill="white" font-family="monospace" font-size="13" font-weight="bold" text-anchor="middle">footer</text>
  <!-- Level 3: nav, h1 inside header -->
  <rect x="230" y="275" width="100" height="35" rx="6" fill="#e2e8f0" stroke="#94a3b8" stroke-width="2"/>
  <text x="280" y="298" fill="#475569" font-family="monospace" font-size="12" font-weight="bold" text-anchor="middle">nav</text>
  <rect x="370" y="275" width="100" height="35" rx="6" fill="#e2e8f0" stroke="#94a3b8" stroke-width="2"/>
  <text x="420" y="298" fill="#475569" font-family="monospace" font-size="12" font-weight="bold" text-anchor="middle">h1</text>
</svg>

Note:
DOM дървото показва йерархията на елементите - родител, деца, братя.

--

### Защо семантични тагове?

**За достъпност** - Екранните четци разбират структурата <!-- .element: class="fragment" -->

**За SEO** - Търсачките индексират по-добре <!-- .element: class="fragment" -->

**За поддръжка** - Кодът е по-четим и логичен <!-- .element: class="fragment" -->

**За бъдещето** - Браузърите добавят нова функционалност <!-- .element: class="fragment" -->

---

## CSS Основи

--

### Как работи каскадът?

```css
/* Три нива на приоритет */

/* 1. Произход */
/* браузърни -> потребителски -> авторски */

/* 2. Специфичност */
/* елемент < клас < ID < inline */

/* 3. Ред на деклариране */
/* последното правило печели */
```

--

### CSS Специфичност

| Селектор | Стойност |
|----------|----------|
| `div` | (0,0,0,1) |
| `.nav` | (0,0,1,0) |
| `#header` | (0,1,0,0) |
| `style=""` | (1,0,0,0) |

```css
div { color: blue; }          /* 0,0,0,1 */
.nav { color: green; }        /* 0,0,1,0 - печели */
#header { color: red; }       /* 0,1,0,0 - печели над .nav */
```

Note:
Специфичността определя кое правило ще бъде приложено при конфликт.

---

## CSS Box Model

--

### Четирите Слоя

<svg viewBox="0 0 500 380" style="max-width: 500px; margin: 0 auto; display: block;">
  <defs>
    <linearGradient id="marginGradSlide" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#ffecd2"/>
      <stop offset="100%" style="stop-color:#fcb69f"/>
    </linearGradient>
    <linearGradient id="borderGradSlide" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#a8edea"/>
      <stop offset="100%" style="stop-color:#fed6e3"/>
    </linearGradient>
    <linearGradient id="paddingGradSlide" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#c3cfe2"/>
      <stop offset="100%" style="stop-color:#d299c2"/>
    </linearGradient>
    <linearGradient id="contentGradSlide" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#667eea"/>
      <stop offset="100%" style="stop-color:#764ba2"/>
    </linearGradient>
    <filter id="boxShadow" x="-5%" y="-5%" width="110%" height="115%">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#000" flood-opacity="0.15"/>
    </filter>
  </defs>
  <!-- Margin Layer -->
  <rect x="20" y="20" width="460" height="340" rx="16" fill="url(#marginGradSlide)" filter="url(#boxShadow)"/>
  <text x="40" y="50" fill="#c0392b" font-weight="bold" font-size="15">MARGIN</text>
  <text x="420" y="50" fill="#c0392b" font-size="12" text-anchor="end">30px</text>
  <!-- Border Layer -->
  <rect x="55" y="60" width="390" height="260" rx="12" fill="url(#borderGradSlide)" stroke="#3498db" stroke-width="5"/>
  <text x="75" y="90" fill="#2980b9" font-weight="bold" font-size="15">BORDER</text>
  <text x="410" y="90" fill="#2980b9" font-size="12" text-anchor="end">4px</text>
  <!-- Padding Layer -->
  <rect x="95" y="105" width="310" height="180" rx="10" fill="url(#paddingGradSlide)"/>
  <text x="115" y="135" fill="#8e44ad" font-weight="bold" font-size="15">PADDING</text>
  <text x="370" y="135" fill="#8e44ad" font-size="12" text-anchor="end">20px</text>
  <!-- Content Layer -->
  <rect x="140" y="150" width="220" height="100" rx="8" fill="url(#contentGradSlide)"/>
  <text x="250" y="195" fill="white" font-weight="bold" font-size="18" text-anchor="middle">CONTENT</text>
  <text x="250" y="220" fill="rgba(255,255,255,0.85)" font-size="13" text-anchor="middle">200px x 100px</text>
  <!-- Arrows showing dimensions -->
  <line x1="140" y1="265" x2="360" y2="265" stroke="#333" stroke-width="2"/>
  <polygon points="140,265 148,260 148,270" fill="#333"/>
  <polygon points="360,265 352,260 352,270" fill="#333"/>
  <text x="250" y="285" fill="#333" font-size="11" text-anchor="middle">width</text>
  <!-- Legend -->
  <text x="250" y="350" fill="#666" font-size="12" text-anchor="middle" font-style="italic">Общ размер = content + padding + border + margin</text>
</svg>

Note:
Box Model е фундаментална концепция - всеки елемент е кутия с четири слоя.

--

### box-sizing: border-box

```css
/* Стандартна практика */
*, *::before, *::after {
  box-sizing: border-box;
}

/* Сега padding и border
   се включват в width/height */
.box {
  width: 200px;   /* Реална ширина = 200px */
  padding: 20px;  /* Включено в 200px */
  border: 5px solid;  /* Включено в 200px */
}
```

Note:
Винаги използвайте border-box - спестява много главоболия.

---

## Flexbox Layout

--

### Flex Container

<svg viewBox="0 0 650 300" style="max-width: 650px; margin: 0 auto; display: block;">
  <defs>
    <linearGradient id="containerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#e0e7ff"/>
      <stop offset="100%" style="stop-color:#c7d2fe"/>
    </linearGradient>
    <linearGradient id="itemGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#6366f1"/>
      <stop offset="100%" style="stop-color:#8b5cf6"/>
    </linearGradient>
    <linearGradient id="itemGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#10b981"/>
      <stop offset="100%" style="stop-color:#34d399"/>
    </linearGradient>
    <linearGradient id="itemGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#f59e0b"/>
      <stop offset="100%" style="stop-color:#fbbf24"/>
    </linearGradient>
    <marker id="arrowFlex" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#ef4444"/>
    </marker>
    <marker id="arrowCross" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#3b82f6"/>
    </marker>
    <filter id="itemShadow" x="-10%" y="-10%" width="120%" height="130%">
      <feDropShadow dx="0" dy="3" stdDeviation="3" flood-color="#000" flood-opacity="0.2"/>
    </filter>
  </defs>
  <!-- Container -->
  <rect x="40" y="50" width="570" height="180" rx="15" fill="url(#containerGrad)" stroke="#6366f1" stroke-width="3" stroke-dasharray="10,5"/>
  <text x="55" y="75" fill="#4338ca" font-weight="bold" font-size="14">display: flex</text>
  <!-- Main Axis Arrow -->
  <line x1="60" y1="235" x2="580" y2="235" stroke="#ef4444" stroke-width="3" marker-end="url(#arrowFlex)"/>
  <text x="320" y="260" fill="#ef4444" font-weight="bold" font-size="13" text-anchor="middle">Main Axis (justify-content)</text>
  <!-- Cross Axis Arrow -->
  <line x1="25" y1="210" x2="25" y2="70" stroke="#3b82f6" stroke-width="3" marker-end="url(#arrowCross)"/>
  <text x="18" y="140" fill="#3b82f6" font-weight="bold" font-size="12" text-anchor="middle" transform="rotate(-90, 18, 140)">Cross Axis (align-items)</text>
  <!-- Flex Items -->
  <rect x="70" y="95" width="140" height="90" rx="10" fill="url(#itemGrad1)" filter="url(#itemShadow)"/>
  <text x="140" y="145" fill="white" font-weight="bold" font-size="16" text-anchor="middle">Item 1</text>
  <rect x="235" y="95" width="140" height="90" rx="10" fill="url(#itemGrad2)" filter="url(#itemShadow)"/>
  <text x="305" y="145" fill="white" font-weight="bold" font-size="16" text-anchor="middle">Item 2</text>
  <rect x="400" y="95" width="180" height="90" rx="10" fill="url(#itemGrad3)" filter="url(#itemShadow)"/>
  <text x="490" y="145" fill="white" font-weight="bold" font-size="16" text-anchor="middle">Item 3</text>
  <!-- flex-grow labels -->
  <text x="140" y="170" fill="rgba(255,255,255,0.8)" font-size="10" text-anchor="middle">flex: 1</text>
  <text x="305" y="170" fill="rgba(255,255,255,0.8)" font-size="10" text-anchor="middle">flex: 1</text>
  <text x="490" y="170" fill="rgba(255,255,255,0.8)" font-size="10" text-anchor="middle">flex: 2</text>
</svg>

Note:
Flexbox работи по две оси - main axis и cross axis.

--

### Основни Flex Свойства

```css
.container {
  display: flex;

  /* Main axis */
  justify-content: space-between;
  /* flex-start | center | space-around | space-evenly */

  /* Cross axis */
  align-items: center;
  /* flex-start | flex-end | stretch | baseline */

  /* Wrap */
  flex-wrap: wrap;

  /* Direction */
  flex-direction: row; /* column | row-reverse */
}
```

--

### Flex Item Свойства

```css
.item {
  /* Grow - колко да расте */
  flex-grow: 1;

  /* Shrink - колко да се свива */
  flex-shrink: 0;

  /* Basis - начален размер */
  flex-basis: 200px;

  /* Shorthand */
  flex: 1 0 200px;

  /* Self alignment */
  align-self: flex-start;
}
```

Note:
flex shorthand е най-често използваният начин за задаване на flex свойства.

---

## CSS Grid Layout

--

### Grid Container

<svg viewBox="0 0 600 400" style="max-width: 600px; margin: 0 auto; display: block;">
  <defs>
    <linearGradient id="gridContainerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#fef3c7"/>
      <stop offset="100%" style="stop-color:#fde68a"/>
    </linearGradient>
    <linearGradient id="gridCell1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#3b82f6"/>
      <stop offset="100%" style="stop-color:#60a5fa"/>
    </linearGradient>
    <linearGradient id="gridCell2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#10b981"/>
      <stop offset="100%" style="stop-color:#34d399"/>
    </linearGradient>
    <linearGradient id="gridCell3" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#8b5cf6"/>
      <stop offset="100%" style="stop-color:#a78bfa"/>
    </linearGradient>
    <linearGradient id="gridCell4" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#f59e0b"/>
      <stop offset="100%" style="stop-color:#fbbf24"/>
    </linearGradient>
    <linearGradient id="gridCell5" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#ef4444"/>
      <stop offset="100%" style="stop-color:#f87171"/>
    </linearGradient>
    <filter id="gridShadow" x="-5%" y="-5%" width="110%" height="115%">
      <feDropShadow dx="0" dy="3" stdDeviation="3" flood-color="#000" flood-opacity="0.15"/>
    </filter>
  </defs>
  <!-- Container background -->
  <rect x="20" y="20" width="560" height="360" rx="15" fill="url(#gridContainerGrad)" stroke="#f59e0b" stroke-width="3" stroke-dasharray="10,5"/>
  <text x="40" y="50" fill="#b45309" font-weight="bold" font-size="14">display: grid</text>
  <!-- Grid lines (visual guides) -->
  <line x1="210" y1="70" x2="210" y2="350" stroke="#d97706" stroke-width="1" stroke-dasharray="5,5" opacity="0.5"/>
  <line x1="400" y1="70" x2="400" y2="350" stroke="#d97706" stroke-width="1" stroke-dasharray="5,5" opacity="0.5"/>
  <line x1="40" y1="160" x2="560" y2="160" stroke="#d97706" stroke-width="1" stroke-dasharray="5,5" opacity="0.5"/>
  <line x1="40" y1="255" x2="560" y2="255" stroke="#d97706" stroke-width="1" stroke-dasharray="5,5" opacity="0.5"/>
  <!-- Grid cells with named areas -->
  <!-- Header (spans full width) -->
  <rect x="40" y="70" width="520" height="80" rx="10" fill="url(#gridCell1)" filter="url(#gridShadow)"/>
  <text x="300" y="115" fill="white" font-weight="bold" font-size="16" text-anchor="middle">header</text>
  <text x="300" y="135" fill="rgba(255,255,255,0.7)" font-size="11" text-anchor="middle">grid-column: 1 / -1</text>
  <!-- Sidebar -->
  <rect x="40" y="165" width="160" height="170" rx="10" fill="url(#gridCell2)" filter="url(#gridShadow)"/>
  <text x="120" y="250" fill="white" font-weight="bold" font-size="15" text-anchor="middle">sidebar</text>
  <text x="120" y="270" fill="rgba(255,255,255,0.7)" font-size="10" text-anchor="middle">grid-row: 2 / 4</text>
  <!-- Main content -->
  <rect x="215" y="165" width="345" height="80" rx="10" fill="url(#gridCell3)" filter="url(#gridShadow)"/>
  <text x="387" y="210" fill="white" font-weight="bold" font-size="15" text-anchor="middle">main</text>
  <!-- Extra content -->
  <rect x="215" y="260" width="175" height="75" rx="10" fill="url(#gridCell4)" filter="url(#gridShadow)"/>
  <text x="302" y="302" fill="white" font-weight="bold" font-size="14" text-anchor="middle">aside</text>
  <rect x="405" y="260" width="155" height="75" rx="10" fill="url(#gridCell5)" filter="url(#gridShadow)"/>
  <text x="482" y="302" fill="white" font-weight="bold" font-size="14" text-anchor="middle">footer</text>
  <!-- Column labels -->
  <text x="120" y="365" fill="#92400e" font-size="11" text-anchor="middle">1fr</text>
  <text x="300" y="365" fill="#92400e" font-size="11" text-anchor="middle">1fr</text>
  <text x="480" y="365" fill="#92400e" font-size="11" text-anchor="middle">1fr</text>
</svg>

Note:
CSS Grid е идеален за двумерни layouts - редове И колони едновременно.

--

### Grid Template

```css
.container {
  display: grid;

  /* Дефиниране на колони */
  grid-template-columns: 200px 1fr 1fr;
  /* или */
  grid-template-columns: repeat(3, 1fr);

  /* Дефиниране на редове */
  grid-template-rows: auto 1fr auto;

  /* Gap между клетките */
  gap: 20px;
  /* row-gap: 20px; column-gap: 10px; */
}
```

--

### Grid Areas

```css
.container {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "sidebar aside footer";
}

.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main    { grid-area: main; }
.aside   { grid-area: aside; }
.footer  { grid-area: footer; }
```

Note:
Grid areas правят кода много по-четим и лесен за разбиране.

--

### Flexbox vs Grid

| Flexbox | Grid |
|---------|------|
| Едномерен | Двумерен |
| Съдържанието определя размера | Контейнерът определя layout |
| Идеален за компоненти | Идеален за page layouts |
| Динамично съдържание | Фиксирана структура |

Note:
Използвайте Grid за страничен layout, Flexbox за компоненти вътре в Grid клетките.

---

## Mobile-First Design

--

### Responsive Breakpoints

<svg viewBox="0 0 700 250" style="max-width: 700px; margin: 0 auto; display: block;">
  <defs>
    <linearGradient id="phoneGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#6366f1"/>
      <stop offset="100%" style="stop-color:#8b5cf6"/>
    </linearGradient>
    <linearGradient id="tabletGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#10b981"/>
      <stop offset="100%" style="stop-color:#34d399"/>
    </linearGradient>
    <linearGradient id="desktopGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#f59e0b"/>
      <stop offset="100%" style="stop-color:#fbbf24"/>
    </linearGradient>
    <filter id="deviceShadow" x="-10%" y="-10%" width="120%" height="130%">
      <feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="#000" flood-opacity="0.2"/>
    </filter>
    <marker id="flowArrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#64748b"/>
    </marker>
  </defs>
  <!-- Mobile Device -->
  <g filter="url(#deviceShadow)">
    <rect x="30" y="30" width="70" height="130" rx="10" fill="url(#phoneGrad)"/>
    <rect x="38" y="48" width="54" height="90" rx="4" fill="white"/>
    <!-- Screen content - 1 column -->
    <rect x="43" y="55" width="44" height="8" rx="2" fill="#c7d2fe"/>
    <rect x="43" y="68" width="44" height="25" rx="2" fill="#e0e7ff"/>
    <rect x="43" y="98" width="44" height="25" rx="2" fill="#e0e7ff"/>
    <circle cx="65" cy="148" r="6" fill="rgba(255,255,255,0.3)"/>
    <rect x="52" y="35" width="26" height="4" rx="2" fill="rgba(255,255,255,0.3)"/>
  </g>
  <text x="65" y="185" fill="#4338ca" font-weight="bold" font-size="12" text-anchor="middle">Mobile</text>
  <text x="65" y="200" fill="#64748b" font-size="10" text-anchor="middle">&lt; 768px</text>
  <!-- Arrow 1 -->
  <line x1="115" y1="95" x2="175" y2="95" stroke="#64748b" stroke-width="2" marker-end="url(#flowArrow)"/>
  <text x="145" y="85" fill="#64748b" font-size="9" text-anchor="middle">min-width</text>
  <text x="145" y="115" fill="#22c55e" font-size="10" font-weight="bold" text-anchor="middle">768px</text>
  <!-- Tablet Device -->
  <g filter="url(#deviceShadow)">
    <rect x="190" y="25" width="130" height="160" rx="12" fill="url(#tabletGradient)"/>
    <rect x="202" y="42" width="106" height="120" rx="5" fill="white"/>
    <!-- Screen content - 2 columns -->
    <rect x="208" y="50" width="94" height="10" rx="2" fill="#a7f3d0"/>
    <rect x="208" y="65" width="43" height="40" rx="2" fill="#d1fae5"/>
    <rect x="257" y="65" width="45" height="40" rx="2" fill="#d1fae5"/>
    <rect x="208" y="110" width="43" height="40" rx="2" fill="#d1fae5"/>
    <rect x="257" y="110" width="45" height="40" rx="2" fill="#d1fae5"/>
    <circle cx="255" cy="175" r="7" fill="rgba(255,255,255,0.3)"/>
  </g>
  <text x="255" y="205" fill="#059669" font-weight="bold" font-size="12" text-anchor="middle">Tablet</text>
  <text x="255" y="220" fill="#64748b" font-size="10" text-anchor="middle">768px - 1024px</text>
  <!-- Arrow 2 -->
  <line x1="335" y1="95" x2="395" y2="95" stroke="#64748b" stroke-width="2" marker-end="url(#flowArrow)"/>
  <text x="365" y="85" fill="#64748b" font-size="9" text-anchor="middle">min-width</text>
  <text x="365" y="115" fill="#f59e0b" font-size="10" font-weight="bold" text-anchor="middle">1024px</text>
  <!-- Desktop Device -->
  <g filter="url(#deviceShadow)">
    <rect x="410" y="30" width="260" height="155" rx="10" fill="url(#desktopGradient)"/>
    <rect x="425" y="45" width="230" height="115" rx="5" fill="white"/>
    <!-- Screen content - 3 columns -->
    <rect x="433" y="53" width="214" height="12" rx="2" fill="#fef3c7"/>
    <rect x="433" y="70" width="68" height="40" rx="2" fill="#fde68a"/>
    <rect x="506" y="70" width="68" height="40" rx="2" fill="#fde68a"/>
    <rect x="579" y="70" width="60" height="40" rx="2" fill="#fde68a"/>
    <rect x="433" y="115" width="214" height="35" rx="2" fill="#fef9c3"/>
    <!-- Stand -->
    <rect x="510" y="185" width="40" height="25" fill="#92400e"/>
    <rect x="485" y="208" width="90" height="8" rx="3" fill="#78350f"/>
  </g>
  <text x="540" y="235" fill="#b45309" font-weight="bold" font-size="12" text-anchor="middle">Desktop</text>
  <text x="540" y="248" fill="#64748b" font-size="10" text-anchor="middle">&gt; 1024px</text>
</svg>

Note:
Mobile-First означава че първо пишем стилове за мобилни и после ги разширяваме.

--

### Mobile-First CSS

```css
/* Базови стилове за мобилни */
.container {
  display: flex;
  flex-direction: column;
  padding: 1rem;
}

/* Таблети (768px+) */
@media (min-width: 768px) {
  .container {
    flex-direction: row;
    padding: 2rem;
  }
}

/* Десктоп (1024px+) */
@media (min-width: 1024px) {
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
}
```

Note:
Винаги min-width за Mobile-First, max-width е Desktop-First.

--

### Относителни Единици

| Единица | Описание |
|---------|----------|
| `%` | Процент от родител |
| `em` | Спрямо font-size на елемента |
| `rem` | Спрямо font-size на root (html) |
| `vw` | 1% от viewport width |
| `vh` | 1% от viewport height |
| `clamp()` | Fluid стойност с min/max |

```css
/* Fluid typography */
font-size: clamp(1rem, 2.5vw, 2rem);
```

---

## Media Queries

--

### Синтаксис

```css
/* Ширина */
@media (min-width: 768px) { ... }
@media (max-width: 1024px) { ... }

/* Комбинирани */
@media (min-width: 768px) and (max-width: 1024px) { ... }

/* Ориентация */
@media (orientation: landscape) { ... }

/* Hover support */
@media (hover: hover) { ... }

/* Prefers reduced motion */
@media (prefers-reduced-motion: reduce) { ... }
```

--

### Нови Media Features

```css
/* Тъмен режим */
@media (prefers-color-scheme: dark) {
  :root {
    --bg-color: #1a1a1a;
    --text-color: #ffffff;
  }
}

/* Висок контраст */
@media (prefers-contrast: high) {
  .button {
    border: 3px solid;
  }
}
```

Note:
Модерните media queries позволяват да се адаптираме към предпочитанията на потребителя.

---

## Accessibility (a11y)

--

### Защо достъпност?

**15%** от световното население има някаква форма на увреждане <!-- .element: class="fragment" -->

**Законово изискване** в EU и USA <!-- .element: class="fragment" -->

**По-добър UX** за всички потребители <!-- .element: class="fragment" -->

**SEO ползи** - семантичен код се индексира по-добре <!-- .element: class="fragment" -->

--

### ARIA Атрибути

```html
<!-- Роли -->
<nav role="navigation" aria-label="Главна навигация">

<!-- Състояния -->
<button aria-expanded="false" aria-controls="menu">
  Меню
</button>

<!-- Описания -->
<img src="chart.png"
     alt="Графика показваща 30% ръст на продажбите"
     aria-describedby="chart-desc">
<p id="chart-desc" class="sr-only">
  Детайлно описание...
</p>
```

--

### Клавиатурна Навигация

```css
/* Видим focus индикатор */
:focus-visible {
  outline: 3px solid #4f46e5;
  outline-offset: 2px;
}

/* Skip link */
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
}

.skip-link:focus {
  top: 0;
}
```

Note:
Никога не скривайте focus outline напълно - хората с клавиатурна навигация го използват.

---

## Съвременни CSS Функции

--

### Container Queries

```css
/* Дефиниране на container */
.card-container {
  container-type: inline-size;
  container-name: card;
}

/* Query базиран на container размер */
@container card (min-width: 400px) {
  .card {
    display: flex;
    flex-direction: row;
  }
}
```

Note:
Container Queries са революция - компонентите се адаптират към контейнера, не към viewport.

--

### CSS Nesting

```css
/* Без nesting */
.card { ... }
.card:hover { ... }
.card .title { ... }
.card .title:hover { ... }

/* С nesting (native CSS) */
.card {
  &:hover { ... }

  .title {
    &:hover { ... }
  }
}
```

--

### :has() Селектор

```css
/* Parent selector! */
.card:has(img) {
  /* Карта, която съдържа изображение */
  display: grid;
  grid-template-rows: auto 1fr;
}

/* Form validation */
.input-group:has(:invalid) {
  border-color: red;
}

/* Conditional styling */
body:has(.modal-open) {
  overflow: hidden;
}
```

Note:
:has() е "parent selector" - нещо, което CSS нямаше 20+ години.

--

### CSS Custom Properties

```css
:root {
  /* Дефиниране */
  --primary-color: #4f46e5;
  --spacing-unit: 8px;
  --font-size-base: 16px;
}

.button {
  /* Използване */
  background: var(--primary-color);
  padding: calc(var(--spacing-unit) * 2);

  /* Fallback стойност */
  color: var(--button-text, white);
}
```

---

## Производителност

--

### CSS Оптимизации

**Минификация** - премахване на whitespace и коментари <!-- .element: class="fragment" -->

**Critical CSS** - inline критични стилове в head <!-- .element: class="fragment" -->

**Async loading** - зареждане на non-critical CSS асинхронно <!-- .element: class="fragment" -->

**Избягване на !important** - увеличава специфичността <!-- .element: class="fragment" -->

--

### Async CSS Loading

```html
<!-- Critical CSS inline -->
<style>
  /* Above-the-fold styles */
  body { margin: 0; font-family: system-ui; }
  .header { background: #4f46e5; color: white; }
</style>

<!-- Non-critical CSS async -->
<link rel="preload"
      href="styles.css"
      as="style"
      onload="this.onload=null;this.rel='stylesheet'">
<noscript>
  <link rel="stylesheet" href="styles.css">
</noscript>
```

---

<!-- .slide: data-background="#4d7e65" -->

## Обобщение

--

### HTML

**Семантични тагове** - header, nav, main, article, section, footer <!-- .element: class="fragment" -->

**DOM структура** - йерархия родител-дете <!-- .element: class="fragment" -->

**Достъпност** - ARIA атрибути, alt текст <!-- .element: class="fragment" -->

--

### CSS

**Box Model** - content, padding, border, margin <!-- .element: class="fragment" -->

**Flexbox** - едномерен layout, justify/align <!-- .element: class="fragment" -->

**Grid** - двумерен layout, редове и колони <!-- .element: class="fragment" -->

**Mobile-First** - min-width media queries <!-- .element: class="fragment" -->

--

### Модерен CSS (2026)

**Container Queries** - компоненти се адаптират към контейнера <!-- .element: class="fragment" -->

**CSS Nesting** - по-четим код без препроцесор <!-- .element: class="fragment" -->

**:has() селектор** - parent selector <!-- .element: class="fragment" -->

**Custom Properties** - CSS променливи <!-- .element: class="fragment" -->

---

## Ресурси

- [MDN Web Docs](https://developer.mozilla.org/) - Документация
- [CSS-Tricks](https://css-tricks.com/) - Уроци и примери
- [web.dev](https://web.dev/) - Google best practices
- [Can I Use](https://caniuse.com/) - Browser support

---

<!-- .slide: data-background="#2d5986" -->

# Въпроси?

### Благодаря за вниманието!

Note:
Готов съм да отговоря на вашите въпроси за HTML, CSS, Flexbox, Grid или accessibility.
