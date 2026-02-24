---
title: Въведение в Шаблона
theme: white
highlightTheme: github
transition: slide
---

# Въведение в Шаблона

### Университетски Лекции с Docusaurus

---

## Какво Предоставя Шаблонът?

- Готова Docusaurus инфраструктура
- React компоненти за интерактивно съдържание
- Reveal.js презентации
- Система за проследяване на прогреса

---

## Структура на Проекта

```
docusaurus-site/
├── docs/
│   └── XX-topic-name/
│       ├── _category_.json
│       ├── lecture.md
│       ├── exercises.md
│       └── slides.md
├── src/components/
└── docusaurus.config.ts
```

---

## React Компоненти

--

### Информационни Кутии

- `InfoBox` - обща информация
- `WarningBox` - предупреждения
- `SuccessBox` - съвети и добри практики
- `WhyBox` - обяснения "защо"

--

### Интерактивни Елементи

- `CollapsibleSection` - сгъваеми секции
- `Grid` и `Card` - layout компоненти
- `ComparisonBox` - сравнения
- `ExerciseCard` - задачи с difficulty levels

---

## Система за Упражнения

--

### ProgressTracker

Автоматично проследява завършените упражнения

--

### ExerciseCard

```jsx
<ExerciseCard difficulty="easy">
  ### Заглавие на Задачата

  Описание...

  <CollapsibleSection title="Решение">
    Решение тук...
  </CollapsibleSection>
</ExerciseCard>
```

--

### Нива на Сложност

| Ниво | Описание |
|------|----------|
| EASY | Фундаментални концепции |
| EASY-MEDIUM | Изграждане на разбиране |
| MEDIUM | Приложение |
| MEDIUM-HARD | Напреднали концепции |
| HARD | Комплексни проблеми |

---

## Reveal.js Презентации

--

### Създаване на Слайдове

1. Създайте `slides.md` в директорията на лекцията
2. Използвайте `---` за хоризонтални слайдове
3. Използвайте `--` за вертикални подслайдове
4. Изпълнете `npm run build:slides`

--

### Клавишни Комбинации

- **Стрелки** - Навигация
- **S** - Speaker view
- **F** - Fullscreen
- **ESC** - Overview mode
- **?** - Help

---

## Персонализиране

--

### docusaurus.config.ts

```typescript
const config: Config = {
  title: 'Вашият Курс',
  url: 'https://YOUR_USERNAME.github.io',
  baseUrl: '/YOUR_REPO_NAME/',
  // ...
};
```

--

### Добавяне на Лекция

1. Създайте `docs/XX-topic-name/`
2. Добавете `_category_.json`
3. Добавете `lecture.md`
4. Добавете `exercises.md`
5. (Опционално) Добавете `slides.md`

---

## Deployment

```bash
# GitHub Actions автоматично deploy-ва
git push origin main
```

---

# Въпроси?

### Благодаря за вниманието!
