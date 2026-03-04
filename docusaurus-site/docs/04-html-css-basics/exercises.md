---
sidebar_position: 2
slug: exercises
title: "Упражнения"
tags: [exercises, practice, html, css, flexbox, grid, responsive, accessibility]
---

import ExerciseCard from '@site/src/components/Exercise/ExerciseCard';
import ProgressTracker from '@site/src/components/Exercise/ProgressTracker';
import CollapsibleSection from '@site/src/components/CollapsibleSection';
import InfoBox from '@site/src/components/InfoBoxes/InfoBox';
import WarningBox from '@site/src/components/InfoBoxes/WarningBox';
import SuccessBox from '@site/src/components/InfoBoxes/SuccessBox';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Упражнения: HTML и CSS Основи

<img src={useBaseUrl('/img/diagrams/html-css-basics/header-banner.svg')} alt="HTML and CSS Fundamentals Banner" style={{width: '100%', maxWidth: '800px', margin: '20px auto', display: 'block'}} />

<ProgressTracker />

---

## Лесни Упражнения (EASY)

<ExerciseCard difficulty="easy">

### Задача 1: Статистика за мобилен трафик

Какъв процент от глобалния интернет трафик идва от мобилни устройства през Q1 2025?

A) 45%
B) 54%
C) 64%
D) 74%

<CollapsibleSection title="✅ Решение">

**Отговор: C) 64%**

<img src={useBaseUrl('/img/diagrams/html-css-basics/mobile-traffic-stats.svg')} alt="Mobile vs Desktop traffic statistics" style={{width: '100%', maxWidth: '500px', margin: '20px auto', display: 'block'}} />

Това подчертава важността на **Mobile-First дизайна** и **респонсивната разработка**.

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="easy">

### Задача 2: Таг за основно съдържание

Кой HTML таг трябва да се използва за основното съдържание и колко пъти може да се появи на страница?

<CollapsibleSection title="✅ Решение">

**Отговор:** `<main>` - появява се само **веднъж** на страница.

<img src={useBaseUrl('/img/diagrams/html-css-basics/main-content-tag.svg')} alt="HTML page structure with main tag" style={{width: '100%', maxWidth: '400px', margin: '20px auto', display: 'block'}} />

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="easy">

### Задача 3: Съпоставяне на семантични тагове

Свържете таговете с тяхното предназначение:

| Таг | Предназначение |
|-----|----------------|
| 1. `<header>` | A. Навигационни връзки |
| 2. `<nav>` | B. Самостоятелно съдържание |
| 3. `<article>` | C. Горна секция |
| 4. `<footer>` | D. Долна секция |

<CollapsibleSection title="✅ Решение">

<img src={useBaseUrl('/img/diagrams/html-css-basics/semantic-tags-matching.svg')} alt="Semantic HTML tags matching" style={{width: '100%', maxWidth: '600px', margin: '20px auto', display: 'block'}} />

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="easy">

### Задача 4: CSS Наследяване

Кои CSS свойства се наследяват? Изберете всички правилни:

A) `color`
B) `border`
C) `font-family`
D) `margin`
E) `font-size`

<CollapsibleSection title="✅ Решение">

**Отговори: A, C, E** (color, font-family, font-size)

<img src={useBaseUrl('/img/diagrams/html-css-basics/css-inheritance.svg')} alt="CSS inheritance diagram" style={{width: '100%', maxWidth: '600px', margin: '20px auto', display: 'block'}} />

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="easy">

### Задача 5: Преобразуване към семантичен HTML

Преобразувайте този несемантичен код:

```html
<div id="header">My Site</div>
<div class="navigation">...</div>
<div class="content">...</div>
<div id="footer">© 2026</div>
```

<CollapsibleSection title="✅ Решение">

```html
<header>
    <h1>My Site</h1>
</header>
<nav>...</nav>
<main>...</main>
<footer>© 2026</footer>
```

<img src={useBaseUrl('/img/diagrams/html-css-basics/semantic-html-conversion.svg')} alt="Semantic HTML conversion before and after" style={{width: '100%', maxWidth: '550px', margin: '20px auto', display: 'block'}} />

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="easy">

### Задача 6: Дефиниция на Mobile-First

Какво означава "Mobile-First"?

A) Създаване на отделна мобилна версия
B) Започване от десктоп, адаптиране за мобилни
C) Започване от мобилни, разширяване за десктоп
D) Използване само на мобилни frameworks

<CollapsibleSection title="✅ Решение">

**Отговор: C) Започване от мобилни, разширяване за десктоп**

<img src={useBaseUrl('/img/diagrams/html-css-basics/mobile-first-approach.svg')} alt="Mobile-First approach diagram" style={{width: '100%', maxWidth: '600px', margin: '20px auto', display: 'block'}} />

```css
/* Mobile-First: Базови стилове */
.content { font-size: 14px; }

/* Добавяне на функции за по-големи екрани */
@media (min-width: 768px) { .content { font-size: 16px; } }
@media (min-width: 1024px) { .content { font-size: 18px; } }
```

</CollapsibleSection>

</ExerciseCard>

---

## Средни Упражнения (MEDIUM)

<ExerciseCard difficulty="easy-medium">

### Задача 7: CSS Специфичност

Изчислете специфичността и подредете от най-ниска до най-висока:

1. `.header`
2. `#main`
3. `div`
4. `div.content#sidebar`

<CollapsibleSection title="✅ Решение">

<img src={useBaseUrl('/img/diagrams/html-css-basics/css-specificity.svg')} alt="CSS specificity calculation" style={{width: '100%', maxWidth: '600px', margin: '20px auto', display: 'block'}} />

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium">

### Задача 8: Flexbox Навигация

Създайте хоризонтална навигация с Flexbox: елементи равномерно разпределени, центрирани вертикално, 60px височина.

<CollapsibleSection title="✅ Решение">

<img src={useBaseUrl('/img/diagrams/html-css-basics/flexbox-navigation.svg')} alt="Flexbox navigation example" style={{width: '100%', maxWidth: '550px', margin: '20px auto', display: 'block'}} />

```css
.main-nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 60px;
    background-color: #333;
}
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium">

### Задача 9: Flexbox срещу CSS Grid

Попълнете таблицата за сравнение:

| Характеристика | Flexbox | CSS Grid |
|----------------|---------|----------|
| Измерение | ? | ? |
| Най-добър за | ? | ? |

<CollapsibleSection title="✅ Решение">

<img src={useBaseUrl('/img/diagrams/html-css-basics/flexbox-vs-grid.svg')} alt="Flexbox vs CSS Grid comparison" style={{width: '100%', maxWidth: '600px', margin: '20px auto', display: 'block'}} />

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium">

### Задача 10: Mobile-First Media Queries

Напишете media queries: база (мобилни), ≥768px (таблет), ≥1024px (десктоп).
Променете `.content` font-size: 14px → 16px → 18px.

<CollapsibleSection title="✅ Решение">

```css
/* Mobile-First: Базови стилове */
.content { font-size: 14px; }

/* Tablet (≥768px) */
@media (min-width: 768px) {
    .content { font-size: 16px; }
}

/* Desktop (≥1024px) */
@media (min-width: 1024px) {
    .content { font-size: 18px; }
}
```

<img src={useBaseUrl('/img/diagrams/html-css-basics/mobile-first-breakpoints.svg')} alt="Mobile-First breakpoints" style={{width: '100%', maxWidth: '550px', margin: '20px auto', display: 'block'}} />

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium">

### Задача 11: Lazy Loading на изображения

Кой атрибут активира lazy loading и защо е важен?

```html
<img src="photo.jpg" ??? alt="Description">
```

<CollapsibleSection title="✅ Решение">

```html
<img src="photo.jpg" loading="lazy" alt="Description">
```

<img src={useBaseUrl('/img/diagrams/html-css-basics/lazy-loading.svg')} alt="Lazy loading comparison" style={{width: '100%', maxWidth: '550px', margin: '20px auto', display: 'block'}} />

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium">

### Задача 12: CSS @layer

Какво е `@layer` и какъв проблем решава? Напишете пример с: base, components, utilities.

<CollapsibleSection title="✅ Решение">

`@layer` контролира приоритета на каскадата независимо от специфичността.

```css
@layer base, components, utilities;

@layer base { body { font-family: system-ui; } }
@layer components { .button { padding: 10px; } }
@layer utilities { .text-center { text-align: center; } }
```

<img src={useBaseUrl('/img/diagrams/html-css-basics/css-layer.svg')} alt="CSS @layer priority diagram" style={{width: '100%', maxWidth: '500px', margin: '20px auto', display: 'block'}} />

</CollapsibleSection>

</ExerciseCard>

---

## Средно-трудни Упражнения (MEDIUM-HARD)

<ExerciseCard difficulty="medium-hard">

### Задача 13: Респонсивна Grid галерия

Създайте респонсивен grid: 1 колона (мобилни), 2 колони (таблет), 4 колони (десктоп), 20px разстояние.

<CollapsibleSection title="✅ Решение">

```css
.gallery {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
}

@media (min-width: 768px) {
    .gallery { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 1024px) {
    .gallery { grid-template-columns: repeat(4, 1fr); }
}
```

<img src={useBaseUrl('/img/diagrams/html-css-basics/responsive-grid-gallery.svg')} alt="Responsive grid gallery layouts" style={{width: '100%', maxWidth: '600px', margin: '20px auto', display: 'block'}} />

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium-hard">

### Задача 14: Одит за достъпност

Намерете 4 проблема с достъпността и ги поправете:

```html
<div onclick="navigate()">Go to article</div>
<img src="graph.png">
<div class="button" style="color: #999; background: #aaa;">Buy</div>
<input type="text" placeholder="Enter name">
```

<CollapsibleSection title="✅ Решение">

<img src={useBaseUrl('/img/diagrams/html-css-basics/accessibility-audit.svg')} alt="Accessibility audit issues" style={{width: '100%', maxWidth: '600px', margin: '20px auto', display: 'block'}} />

**Поправено:**
```html
<button onclick="navigate()">Go to article</button>
<img src="graph.png" alt="Sales graph for Q1 2025">
<button style="color: #fff; background: #007bff;">Buy</button>
<label for="name">Name:</label>
<input type="text" id="name" placeholder="e.g., John">
```

</CollapsibleSection>

</ExerciseCard>

---

## Трудни Упражнения (HARD)

<ExerciseCard difficulty="hard">

### Задача 15: Карта с Container Queries

Създайте карта с Container Queries:
- Тясна (\<300px): вертикално оформление
- Широка (≥300px): хоризонтално оформление (1fr 2fr)

<CollapsibleSection title="✅ Решение">

```css
.card-container {
    container-type: inline-size;
}

.card {
    display: grid;
    grid-template-columns: 1fr;
}

@container (min-width: 300px) {
    .card {
        grid-template-columns: 1fr 2fr;
    }
}
```

<img src={useBaseUrl('/img/diagrams/html-css-basics/container-queries-card.svg')} alt="Container queries card layout" style={{width: '100%', maxWidth: '550px', margin: '20px auto', display: 'block'}} />

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="hard">

### Задача 16: Достъпна Hover Анимация

Създайте hover анимация за бутон с:
1. Промяна на фона (0.3s)
2. Scale 1.05
3. Деактивиране за prefers-reduced-motion

<CollapsibleSection title="✅ Решение">

```css
.cta-button {
    background-color: #007bff;
    transition: background-color 0.3s, transform 0.3s;
}

.cta-button:hover {
    background-color: #0056b3;
    transform: scale(1.05);
}

@media (prefers-reduced-motion: reduce) {
    .cta-button {
        transition: none;
    }
    .cta-button:hover {
        transform: none;
    }
}
```

<SuccessBox title="Съвет за производителност">

Използвайте `transform` и `opacity` за анимации - те използват GPU и не предизвикват преизчисляване на layout!

</SuccessBox>

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="hard">

### Задача 17: async срещу defer

Обяснете разликата между `async` и `defer` за зареждане на скриптове.

<CollapsibleSection title="✅ Решение">

<img src={useBaseUrl('/img/diagrams/html-css-basics/async-vs-defer.svg')} alt="async vs defer script loading timeline" style={{width: '100%', maxWidth: '600px', margin: '20px auto', display: 'block'}} />

| Атрибут | Зареждане | Изпълнение | Ред |
|---------|-----------|------------|-----|
| `async` | Паралелно | Веднага | Случаен |
| `defer` | Паралелно | След DOM | Запазен |

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="hard">

### Задача 18: Пълна блог страница

Създайте блог страница с:
1. Семантичен HTML (header, nav, main, article, aside, footer)
2. Mobile-First CSS с Grid layout
3. Flexbox навигация
4. ARIA атрибути
5. Оптимизирано изображение със srcset и loading="lazy"

<CollapsibleSection title="✅ Решение">

```html
<header>
    <h1>My Blog</h1>
    <nav aria-label="Main navigation">
        <a href="/">Home</a>
        <a href="/about">About</a>
    </nav>
</header>

<main>
    <article>
        <h2>Article Title</h2>
        <img
            src="image-800.jpg"
            srcset="image-400.jpg 400w, image-800.jpg 800w"
            sizes="(max-width: 768px) 100vw, 800px"
            alt="Description"
            loading="lazy"
        >
        <p>Content...</p>
    </article>
    <aside aria-label="Sidebar">Related posts...</aside>
</main>

<footer>© 2026</footer>
```

```css
/* Mobile-First */
.main { display: grid; grid-template-columns: 1fr; }

@media (min-width: 768px) {
    .main { grid-template-columns: 2fr 1fr; }
}

nav { display: flex; gap: 20px; }
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="hard">

### Задача 19: Scroll-Driven Анимация

Създайте fade-in анимация при скролиране използвайки CSS `animation-timeline: view()`.

<CollapsibleSection title="✅ Решение">

```css
.fade-section {
    opacity: 0;
    transform: translateY(50px);

    animation: fadeInUp linear both;
    animation-timeline: view();
    animation-range: entry 0% entry 100%;
}

@keyframes fadeInUp {
    to { opacity: 1; transform: translateY(0); }
}

/* Резервен вариант за по-стари браузъри */
@supports not (animation-timeline: view()) {
    .fade-section { opacity: 1; transform: none; }
}

/* Достъпност */
@media (prefers-reduced-motion: reduce) {
    .fade-section { animation: none; opacity: 1; }
}
```

<WarningBox title="Поддръжка от браузъри">

Scroll-driven анимациите са нови (Chrome 115+, Edge 115+). Винаги включвайте резервни варианти!

</WarningBox>

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="hard">

### Задача 20: Чеклист за производителност и достъпност

Създайте чеклист от 10 точки за страница, която трябва да:
- Се зарежда за под 3 секунди на 3G
- Има контраст 4.5:1
- Е достъпна с клавиатура
- Работи на екрани от 320px до 1920px

<CollapsibleSection title="✅ Решение">

<img src={useBaseUrl('/img/diagrams/html-css-basics/performance-accessibility-checklist.svg')} alt="Performance and Accessibility Checklist" style={{width: '100%', maxWidth: '600px', margin: '20px auto', display: 'block'}} />

**Инструменти за тестване:**

| Категория | Инструменти |
|-----------|-------------|
| Производителност | Lighthouse, WebPageTest, GTmetrix |
| Достъпност | axe DevTools, WAVE, VoiceOver |
| Контраст | WebAIM Contrast Checker |
| Респонсивност | Chrome DevTools, BrowserStack |

</CollapsibleSection>

</ExerciseCard>
