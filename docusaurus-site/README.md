# 🎓 University Lectures - Docusaurus Site

> **Шаблон за университетски лекции с модерна платформа**

---

## 🚀 Бърз Старт

```bash
# Инсталирай dependencies
npm install

# Стартирай development server
npm start

# Build за production
npm run build

# Rebuild презентации
npm run build:slides

# Тествай production build
npm run serve
```

Отвори `http://localhost:3000` след стартиране на dev server.

---

## 📚 Документация

- **[../CLAUDE.md](../CLAUDE.md)** - Пълно ръководство за структурата и компонентите
- **[../README.md](../README.md)** - Общ преглед на шаблона

---

## 🧩 Налични Компоненти

### Информационни Кутии
- `<InfoBox>`, `<WarningBox>`, `<SuccessBox>`, `<WhyBox>` - Стилизирани кутии

### Интерактивни Елементи
- `<CollapsibleSection>` - Сгъваеми секции
- `<ComparisonBox>` - Сравнения
- `<Grid>` & `<Card>` - Гъвкави layouts
- `<LearningObjectives>` - Учебни цели

### Система за Упражнения
- `<ExerciseCard>` - Карти за задачи (5 нива на сложност)
- `<ProgressTracker>` - Автоматично проследяване на прогреса

### Презентации
- `<ViewSlidesButton>` - Линк към Reveal.js презентация

---

## 📁 Структура

```
docusaurus-site/
├── docs/                        # Лекционни материали
│   ├── 00-getting-started/     # Примерна въведителна лекция
│   └── 01-sample-topic/        # Шаблон за копиране
├── src/
│   ├── components/             # React компоненти
│   ├── pages/                  # Страници (home, slides)
│   └── css/                    # Стилове
├── plugins/                    # Docusaurus плъгини
│   ├── lectures-plugin.js      # Зарежда лекции за homepage
│   └── reveal-slides-plugin.js # Генерира презентации
├── static/                     # Статични файлове
└── docusaurus.config.ts        # Конфигурация
```

---

## ✨ Основни Възможности

- **Reveal.js Презентации** - Markdown → HTML slides
- **Progress Tracking** - LocalStorage базирано проследяване
- **Dark/Light Mode** - Автоматично превключване
- **Responsive** - Mobile-first дизайн
- **Търсене** - Вградено пълнотекстово търсене
- **Hot Reload** - Незабавни промени в dev mode

---

## 🎯 Създаване на Нова Лекция

```bash
# 1. Копирай шаблона
cp -r docs/01-sample-topic docs/02-my-topic

# 2. Редактирай _category_.json (номер и заглавие)

# 3. Персонализирай lecture.md и exercises.md

# 4. (Опционално) Добави slides.md

# 5. Rebuild slides
npm run build:slides

# 6. Провери локално
npm start
```

---

## 📖 Научи Повече

- [Docusaurus Documentation](https://docusaurus.io/)
- [Reveal.js Documentation](https://revealjs.com/)
- [MDX Documentation](https://mdxjs.com/)

---

**Happy Teaching! 🎓**
