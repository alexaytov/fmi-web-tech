---
sidebar_position: 2
title: "Упражнения"
tags: [exercises, practice, демонстрация]
---

import ExerciseCard from '@site/src/components/Exercise/ExerciseCard';
import ProgressTracker from '@site/src/components/Exercise/ProgressTracker';
import CollapsibleSection from '@site/src/components/CollapsibleSection';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Упражнения: Въведение

<ProgressTracker />

---

## Лесни упражнения (EASY)

<ExerciseCard difficulty="easy">

### Задача 1: Персонализиране на Конфигурацията

Отворете `docusaurus.config.ts` и персонализирайте следните полета:
- Заглавие на сайта (`title`)
- Tagline
- GitHub URL
- Footer линкове

<CollapsibleSection title="Решение" icon="✅">

Отворете файла `docusaurus-site/docusaurus.config.ts` и заменете placeholder стойностите:

```typescript
const config: Config = {
  title: 'Моят Курс',           // Заменете с вашето заглавие
  tagline: 'Описание на курса', // Заменете с вашия tagline

  url: 'https://YOUR_USERNAME.github.io',  // Вашият GitHub Pages URL
  baseUrl: '/YOUR_REPO_NAME/',              // Името на вашето репозитори

  organizationName: 'YOUR_USERNAME',        // Вашето GitHub потребителско име
  projectName: 'YOUR_REPO_NAME',            // Името на репозиторито
};
```

**Обяснение:** Тези стойности се използват за генериране на URL адреси и метаданни в целия сайт.

**Времева сложност:** N/A (конфигурационна задача)

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="easy">

### Задача 2: Създаване на Нова Лекция

Създайте нова директория за лекция с правилната структура.

<CollapsibleSection title="Решение" icon="✅">

1. Създайте директория `docs/02-my-topic/`

2. Създайте `_category_.json`:
```json
{
  "label": "02. Моята Тема",
  "position": 2,
  "collapsed": false,
  "link": {
    "type": "generated-index",
    "description": "Описание на темата"
  }
}
```

3. Създайте `lecture.md`:
```markdown
---
title: "Лекция"
sidebar_position: 1
slug: lecture
tags: [моята-тема]
---

# Моята Тема

Съдържание на лекцията...
```

4. Създайте `exercises.md`:
```markdown
---
sidebar_position: 2
title: "Упражнения"
tags: [exercises, practice]
---

import ExerciseCard from '@site/src/components/Exercise/ExerciseCard';
import ProgressTracker from '@site/src/components/Exercise/ProgressTracker';

# Упражнения: Моята Тема

<ProgressTracker />

<!-- Добавете упражнения тук -->
```

**Обяснение:** Всяка лекция следва една и съща структура - `_category_.json` за метаданни, `lecture.md` за теория, и `exercises.md` за практика.

</CollapsibleSection>

</ExerciseCard>

---

## Средни упражнения (MEDIUM)

<ExerciseCard difficulty="medium">

### Задача 3: Добавяне на Reveal.js Презентация

Създайте слайдове за вашата лекция.

<CollapsibleSection title="Решение" icon="✅">

Създайте файл `slides.md` в директорията на лекцията:

```markdown
---
title: Моята Презентация
theme: white
highlightTheme: github
transition: slide
---

# Заглавие на Презентацията

Първи слайд

---

## Втора Секция

- Точка 1
- Точка 2
- Точка 3

---

## Код Пример

\`\`\`python
def hello():
    print("Здравей!")
\`\`\`

Note:
Speaker notes тук - видими само при натискане на 'S'

--

### Вертикален Подслайд

Използвайте `--` за вертикални слайдове

---

<!-- .slide: data-background="#4d7e65" -->

## Слайд с Цветен Фон

Текст на цветен фон
```

След това изпълнете:
```bash
npm run build:slides
```

**Обяснение:**
- `---` създава хоризонтални слайдове (навигация ← →)
- `--` създава вертикални подслайдове (навигация ↑ ↓)
- `Note:` добавя speaker notes
- Атрибути като `data-background` персонализират отделни слайдове

</CollapsibleSection>

</ExerciseCard>

---

## Трудни упражнения (HARD)

<ExerciseCard difficulty="hard">

### Задача 4: Създаване на Персонализиран Компонент

Създайте нов React компонент за вашия курс.

<CollapsibleSection title="Решение" icon="✅">

1. Създайте файл `src/components/MyComponent/MyComponent.tsx`:

```tsx
import React from 'react';
import styles from './MyComponent.module.css';

interface MyComponentProps {
  title: string;
  children: React.ReactNode;
}

export default function MyComponent({ title, children }: MyComponentProps) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}
```

2. Създайте `src/components/MyComponent/MyComponent.module.css`:

```css
.container {
  border: 1px solid var(--ifm-color-primary);
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem 0;
}

.title {
  color: var(--ifm-color-primary);
  margin-bottom: 0.5rem;
}

.content {
  line-height: 1.6;
}
```

3. Използвайте в markdown:

```mdx
import MyComponent from '@site/src/components/MyComponent/MyComponent';

<MyComponent title="Моят Компонент">
  Съдържание тук...
</MyComponent>
```

**Обяснение:**
- React компонентите в Docusaurus използват CSS Modules за стилове
- CSS променливите (`--ifm-*`) осигуряват консистентност с темата
- MDX позволява импортиране на компоненти директно в markdown

**Предимства:**
- ✅ Преизползваемост в множество лекции
- ✅ Type-safe props с TypeScript
- ✅ Автоматична поддръжка на тъмен режим

**Недостатъци:**
- ❌ Изисква познания по React
- ❌ По-сложно от plain markdown

</CollapsibleSection>

</ExerciseCard>
