---
sidebar_position: 2
title: "Упражнения"
tags: [exercises, practice]
---

{/*
  TODO: Използвайте този файл като шаблон за упражнения.

  ВАЖНО: Не задавайте id prop на ExerciseCard - системата
  автоматично генерира ID от заглавието на задачата.
*/}

import ExerciseCard from '@site/src/components/Exercise/ExerciseCard';
import ProgressTracker from '@site/src/components/Exercise/ProgressTracker';
import CollapsibleSection from '@site/src/components/CollapsibleSection';

{/* TODO: Заменете заглавието */}
# Упражнения: Примерна Тема

<ProgressTracker />

---

## Лесни упражнения (EASY)

{/* TODO: Персонализирайте задачите */}

<ExerciseCard difficulty="easy">

### Задача 1: Заглавие на Задачата

Описание на задачата. Обяснете какво трябва да направи студентът.

**Вход:**
```
примерен вход
```

**Изход:**
```
очакван изход
```

<CollapsibleSection title="Решение" icon="✅">

```python
# Вашето решение тук
def solution():
    pass
```

**Обяснение:** Обяснете как работи решението.

**Времева сложност:** $O(n)$
**Пространствена сложност:** $O(1)$

</CollapsibleSection>

</ExerciseCard>

---

## Средни упражнения (MEDIUM)

<ExerciseCard difficulty="medium">

### Задача 2: По-сложна Задача

Описание на по-сложната задача.

<CollapsibleSection title="Решение" icon="✅">

```python
def medium_solution():
    # Имплементация
    pass
```

**Обяснение:** Детайлно обяснение на подхода.

**Предимства:**
- ✅ Предимство 1
- ✅ Предимство 2

**Недостатъци:**
- ❌ Недостатък 1

</CollapsibleSection>

</ExerciseCard>

---

## Трудни упражнения (HARD)

<ExerciseCard difficulty="hard">

### Задача 3: Комплексна Задача

Описание на комплексната задача. Включете всички необходими детайли.

<CollapsibleSection title="Решение" icon="✅">

```python
def hard_solution():
    # Сложна имплементация
    pass
```

**Обяснение:** Подробно обяснение на алгоритъма и подхода.

**Анализ на сложност:**
- Времева сложност: $O(n \log n)$
- Пространствена сложност: $O(n)$

**Практически съвети:**
- Съвет 1 за справяне с edge cases
- Съвет 2 за оптимизация

</CollapsibleSection>

</ExerciseCard>
