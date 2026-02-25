# GitHub Copilot Instructions - University Lectures Template

Comprehensive guide for GitHub Copilot when working with this Docusaurus-based university lectures template.

## Project Overview

This is a template for creating university course materials with:
- **Docusaurus 3** - Static site generator
- **React components** - Interactive UI elements
- **Reveal.js** - Slide presentations from Markdown
- **Exercise system** - Progress tracking with LocalStorage

---

## Project Structure

```
university-lectures-template/
├── docusaurus-site/
│   ├── docs/                     # Lecture content
│   │   ├── XX-topic-name/        # Each lecture directory
│   │   │   ├── _category_.json   # Sidebar metadata
│   │   │   ├── lecture.md        # Theory content
│   │   │   ├── exercises.md      # Practice problems
│   │   │   └── slides.md         # Reveal.js presentation (optional)
│   ├── src/
│   │   ├── components/           # React components
│   │   │   ├── InfoBoxes/        # InfoBox, WarningBox, SuccessBox, WhyBox
│   │   │   ├── Exercise/         # ExerciseCard, ProgressTracker
│   │   │   ├── Grid/             # Grid, Card
│   │   │   ├── Comparison/       # ComparisonBox
│   │   │   ├── CollapsibleSection/
│   │   │   ├── LearningObjectives/
│   │   │   ├── QuickSummary/
│   │   │   └── ViewSlidesButton/
│   │   └── pages/                # Homepage, slides index
│   ├── plugins/
│   │   ├── lectures-plugin.js    # Loads lectures for homepage
│   │   └── reveal-slides-plugin.js # Generates Reveal.js slides
│   ├── static/slides/            # Generated presentations
│   └── docusaurus.config.ts      # Main configuration
├── .github/workflows/deploy.yml  # GitHub Pages deployment
├── CLAUDE.md                     # Full documentation
└── README.md                     # Template overview
```

---

## Creating New Lectures

### Step 1: Create Directory

```bash
cd docusaurus-site/docs
mkdir XX-topic-name  # e.g., 02-arrays, 03-linked-lists
```

**Naming rules:**
- Format: `XX-topic-name`
- XX = two-digit number (01, 02, ..., 15)
- topic-name = lowercase with hyphens

### Step 2: Create _category_.json

```json
{
  "label": "02. Topic Title",
  "position": 2,
  "collapsed": false,
  "link": {
    "type": "generated-index",
    "description": "Brief description of the topic"
  }
}
```

### Step 3: Create lecture.md

**Full template:**

```markdown
---
title: "Лекция"
sidebar_position: 1
slug: lecture
tags: [topic-tag, concept-tag]
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

# Topic Title

<ViewSlidesButton lectureSlug="topic-name" />

<QuickSummary>

**Key Points:**
- Point 1
- Point 2
- Point 3

</QuickSummary>

<LearningObjectives objectives={[
  "First learning objective",
  "Second learning objective",
  "Third learning objective"
]} />

---

## Introduction

<WhyBox title="Why is this important?">
Explanation of why students should learn this...
</WhyBox>

---

## Main Concepts

<InfoBox title="Definition">
Key definition or concept.
</InfoBox>

### Subtopic 1

Content...

```python
# Example code
def example():
    return "Hello"
```

<SuccessBox title="Best Practice">
Tip or recommendation.
</SuccessBox>

---

## Comparison

<ComparisonBox
  left={{
    title: "Approach A",
    content: (
      <ul>
        <li>Advantage 1</li>
        <li>Advantage 2</li>
      </ul>
    )
  }}
  right={{
    title: "Approach B",
    content: (
      <ul>
        <li>Advantage 1</li>
        <li>Advantage 2</li>
      </ul>
    )
  }}
/>

---

## Summary

<Grid columns={3}>
  <Card title="Concept 1" icon="📚">
    Brief description
  </Card>
  <Card title="Concept 2" icon="💡">
    Brief description
  </Card>
  <Card title="Concept 3" icon="🔧">
    Brief description
  </Card>
</Grid>

---

## Additional Resources

### Online Materials
- [Resource 1](https://example.com) - Description
- [Resource 2](https://example.com) - Description

### Video Tutorials
- [YouTube Channel](https://youtube.com) - Description
```

### Step 4: Create exercises.md

**IMPORTANT: Zero Config - DO NOT set `id` or `exercises` props!**

```markdown
---
sidebar_position: 2
title: "Упражнения"
tags: [exercises, practice, topic-tag]
---

import ExerciseCard from '@site/src/components/Exercise/ExerciseCard';
import ProgressTracker from '@site/src/components/Exercise/ProgressTracker';
import CollapsibleSection from '@site/src/components/CollapsibleSection';
import InfoBox from '@site/src/components/InfoBoxes/InfoBox';

# Exercises: Topic

<ProgressTracker />

---

## Easy Exercises

<ExerciseCard difficulty="easy">

### Task 1: Title

Problem description...

**Input:**
```
sample input
```

**Output:**
```
expected output
```

<CollapsibleSection title="💡 Hint" icon="💡">

Guidance for solving...

</CollapsibleSection>

<CollapsibleSection title="✅ Solution" icon="✅">

```python
def solution(input_data):
    # Implementation
    return result
```

**Explanation:** How the solution works.

**Complexity:**
- Time: $O(n)$
- Space: $O(1)$

</CollapsibleSection>

</ExerciseCard>

---

## Medium Exercises

<ExerciseCard difficulty="medium">

### Task 2: More Complex Task

Description...

<CollapsibleSection title="✅ Solution" icon="✅">

```python
def medium_solution():
    pass
```

**Explanation:** ...

**Pros:**
- ✅ Advantage 1
- ✅ Advantage 2

**Cons:**
- ❌ Disadvantage 1

</CollapsibleSection>

</ExerciseCard>

---

## Hard Exercises

<ExerciseCard difficulty="hard">

### Task 3: Complex Task

Description...

<CollapsibleSection title="✅ Solution" icon="✅">

```python
def hard_solution():
    pass
```

**Explanation:** Detailed explanation.

**Practical Tips:**
1. Tip 1
2. Tip 2

</CollapsibleSection>

</ExerciseCard>
```

### Step 5: Create slides.md (Optional)

```markdown
---
title: Topic Title
theme: white
highlightTheme: github
transition: slide
---

# Topic Title

### Subtitle

---

## Contents

- Point 1
- Point 2
- Point 3

---

## Code Example

\`\`\`python
def example():
    return "Hello"
\`\`\`

Note:
Speaker notes - press S to see

--

### Vertical Subslide

Use `--` for vertical slides

---

<!-- .slide: data-background="#4d7e65" -->

## Colored Background Slide

---

# Questions?
```

---

## Component Reference

### InfoBox Variants

```jsx
// General information (blue)
<InfoBox title="Information">Content</InfoBox>

// Positive/success (green)
<SuccessBox title="Tip">Content</SuccessBox>

// Warning (orange/red)
<WarningBox title="Warning">Content</WarningBox>

// Explanation "why" (purple)
<WhyBox title="Why?">Content</WhyBox>
```

### LearningObjectives

```jsx
<LearningObjectives objectives={[
  "Understand concept X",
  "Implement Y",
  "Analyze complexity of Z"
]} />
```

### QuickSummary

```jsx
<QuickSummary>

**Key Points:**
- Point 1
- Point 2

</QuickSummary>
```

### CollapsibleSection

```jsx
<CollapsibleSection title="Title" icon="📚">

Hidden content that can be expanded.

\`\`\`python
# Code here
\`\`\`

</CollapsibleSection>
```

**Common icons:** 💡 (hint), ✅ (solution), 📚 (info), 🎯 (goal), ⚠️ (warning)

### Grid and Card

```jsx
// 2 columns
<Grid columns={2}>
  <Card title="Card 1" icon="📊">Content 1</Card>
  <Card title="Card 2" icon="📈">Content 2</Card>
</Grid>

// 3 columns
<Grid columns={3}>
  <Card title="A">Content</Card>
  <Card title="B">Content</Card>
  <Card title="C">Content</Card>
</Grid>
```

**⚠️ IMPORTANT:**
- Grid requires **minimum 2 Card** components
- Each Card **MUST have** `title` prop
- For single item, use `<InfoBox>` instead of Grid

### ComparisonBox

```jsx
<ComparisonBox
  left={{
    title: "Approach A",
    content: (
      <ul>
        <li>Point 1</li>
        <li>Point 2</li>
      </ul>
    )
  }}
  right={{
    title: "Approach B",
    content: (
      <ul>
        <li>Point 1</li>
        <li>Point 2</li>
      </ul>
    )
  }}
/>
```

**Alternative props:**
- `left`/`right` - neutral comparison
- `wrong`/`correct` - shows ❌/✅ icons

### ExerciseCard

```jsx
<ExerciseCard difficulty="easy">

### Task Title

Problem description...

</ExerciseCard>
```

**Difficulty levels:**
- `"easy"` - Green (5-15 min)
- `"easy-medium"` - Light green (15-25 min)
- `"medium"` - Yellow (25-40 min)
- `"medium-hard"` - Orange (40-60 min)
- `"hard"` - Red (60+ min)

**⚠️ DO NOT set `id` prop!** System auto-generates from title.

### ProgressTracker

```jsx
<ProgressTracker />
```

**⚠️ DO NOT set `exercises` prop!** Auto-detects ExerciseCard components.

### ViewSlidesButton

```jsx
<ViewSlidesButton lectureSlug="topic-name" />
```

`lectureSlug` must match directory (without number): `02-topic-name` → `"topic-name"`

---

## MDX and LaTeX

### LaTeX Escaping (CRITICAL)

In MDX v3, all `{` and `}` in LaTeX **MUST** be escaped:

```markdown
✅ CORRECT:
$O(n \log n)$                           // No braces - OK
$O(n^\{2\})$                            // Escaped braces
\sum_\{i=0\}^\{n\} i                     // Escaped subscript/superscript

$$
T(n) = \begin\{cases\}
  O(1) & \text\{if \} n = 1 \\
  2T(n/2) + O(n) & \text\{otherwise\}
\end\{cases\}
$$

❌ WRONG:
$O(n^{2})$                              // Unescaped - MDX error!
\frac{n}{2}                             // Unescaped
```

### Special Characters

```markdown
✅ CORRECT:
E &lt;&lt; V²                            // << as HTML entity

❌ WRONG:
E << V²                                 // MDX parse error
```

**In code blocks, no escaping needed!**

---

## Reveal.js Slides

### Structure

```markdown
---
title: Title
theme: white           # white, black, league, beige, sky, night, serif, simple, solarized
highlightTheme: github # github, monokai, zenburn, vs, atom-one-dark
transition: slide      # none, fade, slide, convex, concave, zoom
---

# Horizontal Slide 1

Content

---

# Horizontal Slide 2

--

## Vertical Subslide 2.1

--

## Vertical Subslide 2.2

---

<!-- .slide: data-background="#4d7e65" -->

# Colored Background

---

# Code with Highlighting

\`\`\`python {2-3}
def example():
    x = 10    # Highlighted
    y = 20    # Highlighted
    return x + y
\`\`\`

---

# Fragments

- Appears first <!-- .element: class="fragment" -->
- Appears second <!-- .element: class="fragment" -->
- Appears third <!-- .element: class="fragment fade-in" -->

---

Note:
Speaker notes - press S for presenter view
```

### Separators

| Separator | Meaning |
|-----------|---------|
| `---` | Horizontal slide (← →) |
| `--` | Vertical subslide (↑ ↓) |
| `Note:` | Speaker notes |

### Fragments (Incremental Reveal)

Fragments are used to reveal elements step by step on a slide. The `<!-- .element: -->` comment **MUST** come **AFTER** the element, not before.

**Markdown Syntax:**

```markdown
- First element <!-- .element: class="fragment" -->
- Second element <!-- .element: class="fragment" -->
- Third element <!-- .element: class="fragment fade-up" -->
```

**Available Fragment Styles:**

| Style | Effect |
|-------|--------|
| `fragment` | Fade in (default) |
| `fragment fade-out` | Start visible, fade out |
| `fragment fade-up` | Slide up while fading in |
| `fragment fade-down` | Slide down while fading in |
| `fragment fade-left` | Slide left while fading in |
| `fragment fade-right` | Slide right while fading in |
| `fragment fade-in-then-out` | Fade in, then out on next step |
| `fragment fade-in-then-semi-out` | Fade in, then 50% opacity |
| `fragment highlight-red` | Turn text red |
| `fragment highlight-green` | Turn text green |
| `fragment highlight-blue` | Turn text blue |
| `fragment grow` | Scale up |
| `fragment shrink` | Scale down |
| `fragment strike` | Strike through |

**Controlling Order:**

```markdown
- Last <!-- .element: class="fragment" data-fragment-index="3" -->
- First <!-- .element: class="fragment" data-fragment-index="1" -->
- Second <!-- .element: class="fragment" data-fragment-index="2" -->
```

**⚠️ IMPORTANT:** Comment MUST be on the **SAME line** after the element!

```markdown
✅ CORRECT:
- Text <!-- .element: class="fragment" -->

❌ WRONG:
<!-- .element: class="fragment" -->
- Text
```

### Keyboard Shortcuts

| Key | Action |
|-----|--------|
| ←→↑↓ | Navigate |
| Space | Next slide |
| S | Speaker view |
| F | Fullscreen |
| ESC | Overview |
| ? | Help |

---

## Language Guidelines

- **Bulgarian** for content and explanations
- **English** for code, variable names, and comments
- Component props use English

---

## Common Mistakes to Avoid

1. ❌ **Missing imports** at top of file
2. ❌ **Wrong component paths** (use `@site/src/components/...`)
3. ❌ **Grid with single Card** (use InfoBox instead)
4. ❌ **Card without `title` prop** (required)
5. ❌ **Setting `id` prop on ExerciseCard** (auto-generated)
6. ❌ **Setting `exercises` prop on ProgressTracker** (auto-detected)
7. ❌ **Unescaped `{` `}` in LaTeX** outside code blocks
8. ❌ **Using `<<` or `>>`** outside code blocks
9. ❌ **Not testing locally** before committing
10. ❌ **Missing "Additional Resources"** section in lectures

---

## Best Practices

### Content

1. **Always use components** instead of plain markdown
2. **Add LearningObjectives** at the start of every lecture
3. **Include QuickSummary** for quick overview
4. **End with "Additional Resources"** section
5. **Use appropriate InfoBox variants** for different content types

### Exercises

6. **Zero Config** - don't set `id` and `exercises` props
7. **Unique titles** - each exercise with different title
8. **Include hints** in CollapsibleSection
9. **Add complexity analysis** in solutions
10. **Use 3-5 exercises** with different difficulty levels

### Code

11. **Always specify language** after \`\`\`
12. **Comments in English** in code
13. **Content in Bulgarian** outside code blocks

### MDX

14. **Escape LaTeX braces** with `\{` and `\}`
15. **Escape `<<` and `>>`** as `&lt;&lt;` and `&gt;&gt;`
16. **Clear cache** on errors: `rm -rf .docusaurus`

---

## Testing Commands

```bash
cd docusaurus-site

# Development
npm start              # Dev server with hot reload
npm run build          # Production build
npm run serve          # Test production build

# Presentations
npm run build:slides   # Rebuild presentations only

# Maintenance
npm run clear          # Clear Docusaurus cache
rm -rf .docusaurus     # Manual cache clear
```

---

## Checklist for New Lecture

- [ ] Directory created: `docs/XX-topic-name/`
- [ ] `_category_.json` with correct `position`
- [ ] `lecture.md`:
  - [ ] Frontmatter with tags
  - [ ] Component imports
  - [ ] ViewSlidesButton (if slides exist)
  - [ ] QuickSummary
  - [ ] LearningObjectives
  - [ ] Content with components
  - [ ] Code examples
  - [ ] "Additional Resources" section
- [ ] `exercises.md`:
  - [ ] Frontmatter
  - [ ] Imports
  - [ ] ProgressTracker (without props!)
  - [ ] Minimum 3 ExerciseCard (without id prop!)
  - [ ] Hints in CollapsibleSection
  - [ ] Solutions in CollapsibleSection
- [ ] `slides.md` (optional):
  - [ ] Frontmatter with title, theme
  - [ ] Horizontal and vertical slides
  - [ ] Speaker notes
- [ ] Tested locally: `npm start`
- [ ] Build successful: `npm run build`
- [ ] Slides generated: `npm run build:slides`

---

**University Lectures Template - Comprehensive Documentation for GitHub Copilot**
