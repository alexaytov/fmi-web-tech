<div align="center">

# 📚 University Lectures Template

### Шаблон за университетски курсове с Docusaurus

[![Built with Docusaurus](https://img.shields.io/badge/Built%20with-Docusaurus%203-green?logo=docusaurus)](https://docusaurus.io/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

</div>

---

## ✨ Какво Предоставя Шаблонът?

<table>
<tr>
<td width="50%">

### 🎯 Интерактивно Обучение
- 📖 Готова структура за лекции
- 💡 Упражнения с hints и решения
- 🎨 Красиви React компоненти
- 📊 Progress tracking система
- 📊 Reveal.js презентации

</td>
<td width="50%">

### 🚀 Модерна Платформа
- ⚡ Бърз Docusaurus 3 site
- 🌓 Dark/Light mode
- 📱 Responsive дизайн
- 🔍 Пълнотекстово търсене
- 🚀 GitHub Actions deployment

</td>
</tr>
</table>

---

## 🚀 Бърз Старт

### 1. Използвай като Template

Натиснете бутона **"Use this template"** в GitHub, за да създадете ново репозитори.

### 2. Клонирайте и Инсталирайте

```bash
# Клонирай вашето ново репозитори
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME/docusaurus-site

# Инсталирай dependencies
npm install

# Стартирай development server
npm start
```

🎉 Отворете [http://localhost:3000](http://localhost:3000) в браузъра!

### 3. Персонализирайте Конфигурацията

Редактирайте `docusaurus-site/docusaurus.config.ts`:

```typescript
const config: Config = {
  title: 'Вашият Курс',                    // Заменете
  tagline: 'Описание на курса',            // Заменете

  url: 'https://YOUR_USERNAME.github.io',  // Заменете
  baseUrl: '/YOUR_REPO_NAME/',             // Заменете

  organizationName: 'YOUR_USERNAME',       // Заменете
  projectName: 'YOUR_REPO_NAME',           // Заменете
};
```

### 4. Добавете Съдържание

Вижте примерните лекции в `docs/00-getting-started/` и `docs/01-sample-topic/`.

---

## 📁 Структура на Проекта

```
university-lectures-template/
│
├── 📂 docusaurus-site/           # Главно приложение
│   ├── 📂 docs/                  # Лекционни материали
│   │   ├── 00-getting-started/   # Примерна въведителна лекция
│   │   │   ├── _category_.json
│   │   │   ├── lecture.md
│   │   │   ├── exercises.md
│   │   │   └── slides.md
│   │   └── 01-sample-topic/      # Шаблон за копиране
│   │
│   ├── 📂 src/
│   │   ├── 📂 components/        # React компоненти
│   │   │   ├── InfoBoxes/
│   │   │   ├── Exercise/
│   │   │   ├── Grid/
│   │   │   └── ...
│   │   └── 📂 css/               # Стилове
│   │
│   ├── 📂 plugins/               # Docusaurus плъгини
│   ├── 📂 static/                # Статични файлове
│   └── docusaurus.config.ts      # Конфигурация
│
├── 📂 .github/workflows/         # CI/CD pipeline
├── CLAUDE.md                     # AI инструкции
└── README.md                     # Този файл
```

---

## 📝 Създаване на Нови Лекции

### Бърз Workflow

```bash
# 1. Създайте директория
mkdir docs/02-my-topic

# 2. Създайте файлове (копирайте от 01-sample-topic)
cp docs/01-sample-topic/_category_.json docs/02-my-topic/
cp docs/01-sample-topic/lecture.md docs/02-my-topic/
cp docs/01-sample-topic/exercises.md docs/02-my-topic/

# 3. Персонализирайте съдържанието

# 4. (Опционално) Добавете презентация
touch docs/02-my-topic/slides.md

# 5. Rebuild презентации (ако има slides.md)
npm run build:slides
```

### Структура на Лекция

| Файл | Описание |
|------|----------|
| `_category_.json` | Метаданни за sidebar |
| `lecture.md` | Теоретично съдържание |
| `exercises.md` | Практически задачи |
| `slides.md` | Reveal.js презентация (опционално) |

---

## 🎨 Налични Компоненти

### Информационни Кутии

```jsx
<InfoBox title="Информация">Основна информация</InfoBox>
<SuccessBox title="Съвет">Положителна информация</SuccessBox>
<WarningBox title="Внимание">Важни предупреждения</WarningBox>
<WhyBox title="Защо?">Мотивация и обяснения</WhyBox>
```

### Упражнения

```jsx
<ExerciseCard difficulty="easy">
  ### Заглавие на Задачата

  Описание...

  <CollapsibleSection title="Решение" icon="✅">
    Решение тук...
  </CollapsibleSection>
</ExerciseCard>

<ProgressTracker />
```

### Layout Компоненти

```jsx
<Grid columns={2}>
  <Card title="Вариант А">Съдържание А</Card>
  <Card title="Вариант Б">Съдържание Б</Card>
</Grid>

<CollapsibleSection title="Подсказка" icon="💡">
  Скрито съдържание...
</CollapsibleSection>

<ComparisonBox
  title="Сравнение"
  leftLabel="Подход А"
  rightLabel="Подход Б"
  leftItems={["Точка 1", "Точка 2"]}
  rightItems={["Точка 1", "Точка 2"]}
/>
```

---

## 📊 Reveal.js Презентации

### Създаване на Презентация

Създайте `slides.md` в директорията на лекцията:

```markdown
---
title: Моята Презентация
theme: white
highlightTheme: github
transition: slide
---

# Първи Слайд

Съдържание

---

## Втори Слайд

- Точка 1
- Точка 2

--

### Вертикален Подслайд

Използвайте `--` за подслайдове

---

## Код

\`\`\`python
def hello():
    print("Здравей!")
\`\`\`
```

### Rebuild Презентации

```bash
npm run build:slides
```

### Клавишни Комбинации

| Клавиш | Действие |
|--------|----------|
| Стрелки | Навигация |
| S | Speaker view |
| F | Fullscreen |
| ESC | Overview |
| ? | Help |

---

## 🔄 Deployment

### GitHub Pages (Автоматично)

Всеки push към `main` автоматично:

1. ✅ Build-ва сайта
2. ✅ Генерира презентации
3. ✅ Deploy-ва към GitHub Pages

### Ръчен Build

```bash
npm run build    # Production build
npm run serve    # Тест на build-а
```

---

## 🛠️ Tech Stack

- **Framework**: [Docusaurus 3](https://docusaurus.io/)
- **Frontend**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Презентации**: [Reveal.js](https://revealjs.com/)
- **Markdown**: [MDX](https://mdxjs.com/)
- **CI/CD**: [GitHub Actions](https://github.com/features/actions)
- **Hosting**: [GitHub Pages](https://pages.github.com/)

---

## 📚 Документация

| Документ | Описание |
|----------|----------|
| [CLAUDE.md](CLAUDE.md) | Пълно ръководство за структурата |
| [docs/00-getting-started](docusaurus-site/docs/00-getting-started/) | Примерна лекция с всички компоненти |
| [docs/01-sample-topic](docusaurus-site/docs/01-sample-topic/) | Минимален шаблон за копиране |

---

## 📄 Лиценз

Този проект е лицензиран под **MIT License**.

---

<div align="center">

**Изграден с ❤️ за университетски курсове**

</div>
