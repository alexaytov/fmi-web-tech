---
title: "Лекция"
sidebar_position: 1
slug: lecture
tags: [въведение, шаблон, демонстрация]
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

# Въведение в Шаблона

<ViewSlidesButton lectureSlug="getting-started" />

<QuickSummary>

**Какво предоставя този шаблон:**
- Готова Docusaurus инфраструктура за университетски курсове
- React компоненти за интерактивно съдържание
- Reveal.js презентации от Markdown
- Система за проследяване на прогреса по упражнения

</QuickSummary>

<LearningObjectives objectives={[
  "Да разберете структурата на шаблона",
  "Да се запознаете с наличните React компоненти",
  "Да научите как да създавате нови лекции",
  "Да разберете как работят презентациите"
]} />

---

## Информационни Кутии

Шаблонът предоставя няколко типа информационни кутии:

<InfoBox title="Информация">
Това е стандартна информационна кутия. Използвайте я за допълнителна информация или обяснения.
</InfoBox>

<SuccessBox title="Съвет">
Тази кутия е идеална за подчертаване на добри практики или успешни резултати.
</SuccessBox>

<WarningBox title="Внимание">
Използвайте тази кутия за предупреждения или важни забележки.
</WarningBox>

<WhyBox title="Защо е важно?">
Тази кутия обяснява защо дадена концепция е важна за разбиране.
</WhyBox>

---

## Сгъваеми Секции

<CollapsibleSection title="Натиснете за да видите повече" icon="📚">

Сгъваемите секции са полезни за:
- Дълги обяснения
- Решения на задачи
- Допълнителни ресурси
- Код примери

```javascript
// Пример код в сгъваема секция
function greet(name) {
  return `Здравей, ${name}!`;
}
```

</CollapsibleSection>

---

## Grid Layout

<Grid columns={3}>
  <Card title="Компонент 1" icon="🎯">
    Описание на първия компонент
  </Card>
  <Card title="Компонент 2" icon="💡">
    Описание на втория компонент
  </Card>
  <Card title="Компонент 3" icon="🔧">
    Описание на третия компонент
  </Card>
</Grid>

---

## Сравнения

<ComparisonBox
  left={{
    title: "Подход А",
    content: (
      <ul>
        <li>По-прост за разбиране</li>
        <li>По-малко код</li>
        <li>По-бърз за имплементация</li>
      </ul>
    )
  }}
  right={{
    title: "Подход Б",
    content: (
      <ul>
        <li>По-мащабируем</li>
        <li>По-гъвкав</li>
        <li>По-добра производителност</li>
      </ul>
    )
  }}
/>

---

## Код с Подчертаване

Синтаксисът се подчертава автоматично:

```python
def factorial(n):
    """Изчислява факториел на число."""
    if n <= 1:
        return 1
    return n * factorial(n - 1)

# Пример за използване
print(factorial(5))  # Резултат: 120
```

```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Здравей, свят!" << endl;
    return 0;
}
```

---

## Математически Формули

Inline формули: Времева сложност $O(n \log n)$.

Block формули:

$$
f(x) = \int_\{-\infty\}^\{\infty\} \hat\{f\}(\xi) e^\{2\pi i \xi x\} d\xi
$$

---

## Таблици

| Операция | Масив | Списък |
|----------|-------|--------|
| Достъп по индекс | $O(1)$ | $O(n)$ |
| Вмъкване в началото | $O(n)$ | $O(1)$ |
| Вмъкване в края | $O(1)$* | $O(1)$ |
| Търсене | $O(n)$ | $O(n)$ |

---

## Допълнителни Ресурси

### Документация
- [Docusaurus](https://docusaurus.io/) - Официална документация
- [Reveal.js](https://revealjs.com/) - Презентационна библиотека
- [React](https://react.dev/) - React документация

### Видео Материали
- [YouTube](https://youtube.com) - Видео уроци

