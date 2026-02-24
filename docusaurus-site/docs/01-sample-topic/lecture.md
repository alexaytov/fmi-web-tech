---
title: "Лекция"
sidebar_position: 1
slug: lecture
tags: [примерна-тема]
---

{/*
  TODO: Импортирайте компонентите, които ще използвате.
  Изтрийте тези, които не са необходими.
*/}
import InfoBox from '@site/src/components/InfoBoxes/InfoBox';
import WarningBox from '@site/src/components/InfoBoxes/WarningBox';
import SuccessBox from '@site/src/components/InfoBoxes/SuccessBox';
import LearningObjectives from '@site/src/components/LearningObjectives';
import QuickSummary from '@site/src/components/QuickSummary';
import CollapsibleSection from '@site/src/components/CollapsibleSection';

{/* TODO: Заменете заглавието */}
# Примерна Тема

{/* TODO: Добавете бутон за презентация ако имате slides.md */}
{/* <ViewSlidesButton lectureSlug="sample-topic" /> */}

<QuickSummary>

{/* TODO: Персонализирайте ключовите познания */}
**Ключови познания:**
- Точка 1
- Точка 2
- Точка 3

</QuickSummary>

{/* TODO: Персонализирайте учебните цели */}
<LearningObjectives objectives={[
  "Цел 1",
  "Цел 2",
  "Цел 3"
]} />

---

{/* TODO: Заменете съдържанието по-долу */}

## Секция 1

Съдържание на първата секция...

<InfoBox title="Информация">
Допълнителна информация тук.
</InfoBox>

---

## Секция 2

Съдържание на втората секция...

```python
# Примерен код
def example():
    return "Hello, World!"
```

---

## Секция 3

<CollapsibleSection title="Допълнителни детайли">

Скрито съдържание, което може да се разгъне.

</CollapsibleSection>

---

## Допълнителни Ресурси

{/* TODO: Добавете подходящи ресурси */}

### Онлайн Материали
- [Ресурс 1](https://example.com) - Описание
- [Ресурс 2](https://example.com) - Описание

### Видео Лекции
- [Видео 1](https://youtube.com) - Описание
