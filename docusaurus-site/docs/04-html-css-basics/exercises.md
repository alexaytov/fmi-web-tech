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

# HTML & CSS Fundamentals - Exercises

<img src={useBaseUrl('/img/diagrams/html-css-basics/header-banner.svg')} alt="HTML and CSS Fundamentals Banner" style={{width: '100%', maxWidth: '800px', margin: '20px auto', display: 'block'}} />

<ProgressTracker />

---

## Лесни Упражнения (EASY)

<ExerciseCard difficulty="easy">

### Exercise 1: Mobile Traffic Statistics

What percentage of global internet traffic comes from mobile devices in Q1 2025?

A) 45%
B) 54%
C) 64%
D) 74%

<CollapsibleSection title="✅ Solution">

**Answer: C) 64%**

<img src={useBaseUrl('/img/diagrams/html-css-basics/mobile-traffic-stats.svg')} alt="Mobile vs Desktop traffic statistics" style={{width: '100%', maxWidth: '500px', margin: '20px auto', display: 'block'}} />

This highlights the importance of **Mobile-First design** and **responsive development**.

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="easy">

### Exercise 2: Main Content Tag

Which HTML tag should be used for the main content, and how many times can it appear on a page?

<CollapsibleSection title="✅ Solution">

**Answer:** `<main>` - appears only **once** per page.

<img src={useBaseUrl('/img/diagrams/html-css-basics/main-content-tag.svg')} alt="HTML page structure with main tag" style={{width: '100%', maxWidth: '400px', margin: '20px auto', display: 'block'}} />

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="easy">

### Exercise 3: Semantic Tags Matching

Match tags with their purpose:

| Tag | Purpose |
|-----|---------|
| 1. `<header>` | A. Navigation links |
| 2. `<nav>` | B. Self-contained content |
| 3. `<article>` | C. Top section |
| 4. `<footer>` | D. Bottom section |

<CollapsibleSection title="✅ Solution">

<img src={useBaseUrl('/img/diagrams/html-css-basics/semantic-tags-matching.svg')} alt="Semantic HTML tags matching" style={{width: '100%', maxWidth: '600px', margin: '20px auto', display: 'block'}} />

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="easy">

### Exercise 4: CSS Inheritance

Which CSS properties are inherited? Choose all correct:

A) `color`
B) `border`
C) `font-family`
D) `margin`
E) `font-size`

<CollapsibleSection title="✅ Solution">

**Answers: A, C, E** (color, font-family, font-size)

<img src={useBaseUrl('/img/diagrams/html-css-basics/css-inheritance.svg')} alt="CSS inheritance diagram" style={{width: '100%', maxWidth: '600px', margin: '20px auto', display: 'block'}} />

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="easy">

### Exercise 5: Convert to Semantic HTML

Convert this non-semantic code:

```html
<div id="header">My Site</div>
<div class="navigation">...</div>
<div class="content">...</div>
<div id="footer">© 2026</div>
```

<CollapsibleSection title="✅ Solution">

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

### Exercise 6: Mobile-First Definition

What does "Mobile-First" mean?

A) Create separate mobile version
B) Start with desktop, adapt to mobile
C) Start with mobile, expand to desktop
D) Use only mobile frameworks

<CollapsibleSection title="✅ Solution">

**Answer: C) Start with mobile, expand to desktop**

<img src={useBaseUrl('/img/diagrams/html-css-basics/mobile-first-approach.svg')} alt="Mobile-First approach diagram" style={{width: '100%', maxWidth: '600px', margin: '20px auto', display: 'block'}} />

```css
/* Mobile-First: Base styles */
.content { font-size: 14px; }

/* Add features for larger screens */
@media (min-width: 768px) { .content { font-size: 16px; } }
@media (min-width: 1024px) { .content { font-size: 18px; } }
```

</CollapsibleSection>

</ExerciseCard>

---

## Средни Упражнения (MEDIUM)

<ExerciseCard difficulty="easy-medium">

### Exercise 7: CSS Specificity

Calculate specificity and order from lowest to highest:

1. `.header`
2. `#main`
3. `div`
4. `div.content#sidebar`

<CollapsibleSection title="✅ Solution">

<img src={useBaseUrl('/img/diagrams/html-css-basics/css-specificity.svg')} alt="CSS specificity calculation" style={{width: '100%', maxWidth: '600px', margin: '20px auto', display: 'block'}} />

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium">

### Exercise 8: Flexbox Navigation

Create horizontal navigation with Flexbox: items evenly distributed, centered vertically, 60px height.

<CollapsibleSection title="✅ Solution">

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

### Exercise 9: Flexbox vs CSS Grid

Fill in the comparison table:

| Feature | Flexbox | CSS Grid |
|---------|---------|----------|
| Dimension | ? | ? |
| Best for | ? | ? |

<CollapsibleSection title="✅ Solution">

<img src={useBaseUrl('/img/diagrams/html-css-basics/flexbox-vs-grid.svg')} alt="Flexbox vs CSS Grid comparison" style={{width: '100%', maxWidth: '600px', margin: '20px auto', display: 'block'}} />

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium">

### Exercise 10: Mobile-First Media Queries

Write media queries: base (mobile), ≥768px (tablet), ≥1024px (desktop).
Change `.content` font-size: 14px → 16px → 18px.

<CollapsibleSection title="✅ Solution">

```css
/* Mobile-First: Base styles */
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

### Exercise 11: Lazy Loading Images

What attribute enables lazy loading, and why is it important?

```html
<img src="photo.jpg" ??? alt="Description">
```

<CollapsibleSection title="✅ Solution">

```html
<img src="photo.jpg" loading="lazy" alt="Description">
```

<img src={useBaseUrl('/img/diagrams/html-css-basics/lazy-loading.svg')} alt="Lazy loading comparison" style={{width: '100%', maxWidth: '550px', margin: '20px auto', display: 'block'}} />

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium">

### Exercise 12: CSS @layer

What is `@layer` and what problem does it solve? Write example with: base, components, utilities.

<CollapsibleSection title="✅ Solution">

`@layer` controls cascade priority regardless of specificity.

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

## Средно-Трудни Упражнения (MEDIUM-HARD)

<ExerciseCard difficulty="medium-hard">

### Exercise 13: Responsive Grid Gallery

Create responsive grid: 1 column (mobile), 2 columns (tablet), 4 columns (desktop), 20px gap.

<CollapsibleSection title="✅ Solution">

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

### Exercise 14: Accessibility Audit

Find 4 accessibility problems and fix them:

```html
<div onclick="navigate()">Go to article</div>
<img src="graph.png">
<div class="button" style="color: #999; background: #aaa;">Buy</div>
<input type="text" placeholder="Enter name">
```

<CollapsibleSection title="✅ Solution">

<img src={useBaseUrl('/img/diagrams/html-css-basics/accessibility-audit.svg')} alt="Accessibility audit issues" style={{width: '100%', maxWidth: '600px', margin: '20px auto', display: 'block'}} />

**Fixed:**
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

### Exercise 15: Container Queries Card

Create card with Container Queries:
- Narrow (\<300px): vertical layout
- Wide (≥300px): horizontal layout (1fr 2fr)

<CollapsibleSection title="✅ Solution">

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

### Exercise 16: Accessible Hover Animation

Create button hover animation with:
1. Background change (0.3s)
2. Scale 1.05
3. Disable for prefers-reduced-motion

<CollapsibleSection title="✅ Solution">

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

<SuccessBox title="Performance Tip">

Use `transform` and `opacity` for animations - they use GPU and don't trigger layout recalculation!

</SuccessBox>

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="hard">

### Exercise 17: async vs defer

Explain the difference between `async` and `defer` for script loading.

<CollapsibleSection title="✅ Solution">

<img src={useBaseUrl('/img/diagrams/html-css-basics/async-vs-defer.svg')} alt="async vs defer script loading timeline" style={{width: '100%', maxWidth: '600px', margin: '20px auto', display: 'block'}} />

| Attribute | Loading | Execution | Order |
|-----------|---------|-----------|-------|
| `async` | Parallel | Immediately | Random |
| `defer` | Parallel | After DOM | Preserved |

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="hard">

### Exercise 18: Complete Blog Page

Create blog page with:
1. Semantic HTML (header, nav, main, article, aside, footer)
2. Mobile-First CSS with Grid layout
3. Flexbox navigation
4. ARIA attributes
5. Optimized image with srcset and loading="lazy"

<CollapsibleSection title="✅ Solution">

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

### Exercise 19: Scroll-Driven Animation

Create fade-in animation on scroll using CSS `animation-timeline: view()`.

<CollapsibleSection title="✅ Solution">

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

/* Fallback for older browsers */
@supports not (animation-timeline: view()) {
    .fade-section { opacity: 1; transform: none; }
}

/* Accessibility */
@media (prefers-reduced-motion: reduce) {
    .fade-section { animation: none; opacity: 1; }
}
```

<WarningBox title="Browser Support">

Scroll-driven animations are new (Chrome 115+, Edge 115+). Always include fallbacks!

</WarningBox>

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="hard">

### Exercise 20: Performance & Accessibility Checklist

Create 10-item checklist for a page that must:
- Load in under 3 seconds on 3G
- Have 4.5:1 contrast
- Be keyboard accessible
- Work on 320px-1920px screens

<CollapsibleSection title="✅ Solution">

<img src={useBaseUrl('/img/diagrams/html-css-basics/performance-accessibility-checklist.svg')} alt="Performance and Accessibility Checklist" style={{width: '100%', maxWidth: '600px', margin: '20px auto', display: 'block'}} />

**Tools for Testing:**

| Category | Tools |
|----------|-------|
| Performance | Lighthouse, WebPageTest, GTmetrix |
| Accessibility | axe DevTools, WAVE, VoiceOver |
| Contrast | WebAIM Contrast Checker |
| Responsive | Chrome DevTools, BrowserStack |

</CollapsibleSection>

</ExerciseCard>
