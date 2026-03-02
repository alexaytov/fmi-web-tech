---
title: NoSQL Бази Данни
theme: white
highlightTheme: github
transition: slide
---

# NoSQL Бази Данни

### Типове, Trade-offs и Приложения

---

## Какво ще научим днес?

🎯 **Цели:**

📊 Четирите типа NoSQL бази <!-- .element: class="fragment" -->

⚖️ CAP теорема и trade-offs <!-- .element: class="fragment" -->

🔧 Кога NoSQL, кога RDBMS <!-- .element: class="fragment" -->

🚀 Практически примери <!-- .element: class="fragment" -->

---

## Какво е NoSQL?

**"Not only SQL"**

Не заместват SQL, а предлагат **алтернативи**

--

### Характеристики

🔓 **Гъвкави схеми** <!-- .element: class="fragment" -->

📈 **Хоризонтално мащабиране** <!-- .element: class="fragment" -->

🌐 **Разпределени архитектури** <!-- .element: class="fragment" -->

---

## Защо се появиха?

**Ограничения на RDBMS:**

❌ Милиони concurrent заявки <!-- .element: class="fragment" -->

❌ Твърди схеми <!-- .element: class="fragment" -->

❌ Вертикално мащабиране = скъпо <!-- .element: class="fragment" -->

--

### Пионерите

🔵 **Google Bigtable** (2006)

🟠 **Amazon Dynamo** (2007)

→ Вдъхновиха open-source NoSQL движението

---

## 3V-тата на Big Data

--

### Volume (Обем)

📊 **Петабайти данни**

- RDBMS: Скъпо вертикално мащабиране
- NoSQL: Хоризонтално разпределение

--

### Velocity (Скорост)

⚡ **Милиони операции/секунда**

- RDBMS: Бавни JOINs
- NoSQL: Оптимизирано за throughput

--

### Variety (Разнообразие)

🎨 **JSON, изображения, графи**

- RDBMS: Твърди схеми
- NoSQL: Гъвкави модели

---

## ACID vs BASE

--

### ACID (RDBMS)

**A**tomicity - Всичко или нищо

**C**onsistency - Валидни данни

**I**solation - Независими транзакции

**D**urability - Промените се запазват

🎯 **Фокус: Силен интегритет**

--

### BASE (NoSQL)

**B**asically Available

**S**oft State

**E**ventual Consistency

🚀 **Фокус: Висока достъпност**

---

# Четирите Типа NoSQL

---

## 1. Document Stores

📄 JSON/BSON документи

```json
{
  "name": "Ivan",
  "age": 25,
  "skills": ["JS", "Python"]
}
```

**Примери:** MongoDB, Couchbase

--

### Document - Приложения

✅ CMS системи

✅ E-commerce каталози

✅ Потребителски профили

✅ Мобилни приложения

---

## 2. Key-Value Stores

🔑 Прости ключ-стойност двойки

```python
redis.set("user:123", "{...}")
redis.get("user:123")
```

**Примери:** Redis, DynamoDB

--

### Key-Value - Приложения

✅ Кеширане

✅ Session management

✅ Leaderboards

✅ Message queues

⚡ **O(1) lookups!**

---

## 3. Wide-Column Stores

📊 Column families, sparse данни

```
sensor_001:2024-01-15
  ├── temp:08:00 → 22.5
  ├── temp:09:00 → 23.1
  └── humidity:08:00 → 45%
```

**Примери:** Cassandra, ScyllaDB

--

### Wide-Column - Приложения

✅ IoT сензорни данни

✅ Time-series

✅ Log aggregation

✅ Analytics

🔥 **Масивен write throughput**

---

## 4. Graph Databases

🕸️ Nodes + Edges + Properties

```cypher
MATCH (user)-[:FRIEND]->(friend)
WHERE user.name = "Ivan"
RETURN friend.name
```

**Примери:** Neo4j, Neptune

--

### Graph - Приложения

✅ Социални мрежи

✅ Fraud detection

✅ Препоръчващи системи

✅ Knowledge graphs

🔗 **Ефективни traversals**

---

## Сравнителна Таблица

| Тип | Модел | Силни страни | Use Case |
|-----|-------|-------------|----------|
| Document | JSON | Гъвкавост | Каталози |
| Key-Value | K→V | Скорост | Cache |
| Column | Sparse | Throughput | IoT |
| Graph | Nodes | Relationships | Social |

---

# CAP Теорема

---

## CAP: Трите Свойства

**C**onsistency - Еднакви данни навсякъде

**A**vailability - Системата отговаря

**P**artition Tolerance - Работи при network split

--

### Изберете ДВЕ

⚠️ **Невъзможно е да имате и трите**

За NoSQL: **P е задължително**

→ Избор между **C** и **A**

--

### CP Системи

🔒 **Приоритет: Консистентност**

- При partition → спира да пише
- Примери: MongoDB, Redis
- За: Банкови системи

--

### AP Системи

🟢 **Приоритет: Достъпност**

- При partition → продължава да работи
- Примери: Cassandra, DynamoDB
- За: Social feeds, analytics

---

## Модели на Консистентност

--

### Strong Consistency

🔒 Всички четат последния запис

- Quorum writes
- По-ниска availability

**Пример:** Банкови транзакции

--

### Eventual Consistency

⏳ Данните се синхронизират с времето

- Асинхронна репликация
- Висока availability

**Пример:** Social media feeds

--

### Tunable Consistency

🎛️ Избирате ниво per-operation

```
ONE → QUORUM → ALL
Бързо        Консистентно
```

**Пример:** Cassandra

---

# Мащабиране

---

## Vertical vs Horizontal

--

### Вертикално (Scale-Up)

⬆️ По-мощен сървър

- По-лесно
- ❌ Има физически лимит
- ❌ Скъпо

--

### Хоризонтално (Scale-Out)

↔️ Повече сървъри

- ✅ Почти неограничено
- ✅ Евтин hardware
- NoSQL е проектиран за това!

---

## Managed vs Self-Managed

--

### Managed Services

☁️ **MongoDB Atlas, DynamoDB**

✅ Автоматично мащабиране

✅ Backups, patching

✅ По-бърза разработка

❌ По-малко контрол

--

### Self-Managed

🔧 **Self-hosted**

✅ Пълен контрол

✅ Потенциално по-евтино

❌ Изисква експертиза

❌ Голям operational burden

---

# Case Study: MongoDB

---

## E-commerce Каталог

**Проблем:** Продуктите имат различни атрибути

- Тениска: размер, цвят
- Лаптоп: CPU, RAM
- Книга: автор, ISBN

--

### Релационно Решение

```sql
-- 5+ таблици + JOINs
SELECT * FROM products p
JOIN laptop_specs ON ...
JOIN clothing_specs ON ...
```

😰 Сложно и бавно

--

### MongoDB Решение

```json
{
  "productId": "LAPTOP-001",
  "name": "ProBook",
  "specs": {
    "cpu": "i7",
    "ram": "16GB"
  },
  "schemaVersion": 2
}
```

✅ Всичко в един документ

--

### Schema Evolution

**1. Versioning**
```json
{ "schemaVersion": 2 }
```

**2. Lazy Migration**
```python
if doc.version < CURRENT:
    migrate(doc)
```

---

# Кога NoSQL vs RDBMS?

---

## Използвайте NoSQL

✅ Гъвкави схеми

✅ Масивен мащаб

✅ High throughput

✅ Географско разпределение

--

## Използвайте RDBMS

✅ Комплексни транзакции

✅ Силен интегритет

✅ Сложни JOINs

✅ Регулаторни изисквания

--

## Polyglot Persistence

🔀 **Комбинирайте бази данни!**

- PostgreSQL → Транзакции
- MongoDB → Каталози
- Redis → Кеш
- Neo4j → Препоръки

---

# Тенденции 2026

---

## Multi-Model

🔀 Document + Graph + Key-Value

**В една система**

Примери: ArangoDB, CosmosDB

--

## Cloud-Native

☁️ Serverless, auto-sharding

**Pay-per-query pricing**

MongoDB Atlas, DynamoDB

--

## AI Integration

🤖 Vector search, ML pipelines

**Generative AI workloads**

Redis като AI data platform

---

# Обобщение

---

## Ключови Точки

📊 **4 типа NoSQL** - Document, Key-Value, Column, Graph

⚖️ **CAP trade-off** - Изберете C или A

📈 **Хоризонтално мащабиране** - Ключово предимство

🔀 **Polyglot persistence** - Правилният инструмент за задачата

---

## Матрица за Избор

| Нужда | Избор |
|-------|-------|
| Гъвкави данни | Document |
| Ултра бързо | Key-Value |
| Масивен запис | Wide-Column |
| Връзки | Graph |
| Транзакции | RDBMS |

---

# Въпроси?

🙋 Какво ще питате?

---

## Допълнителни Ресурси

📚 **MongoDB University** - Безплатни курсове

📚 **DataStax Academy** - Cassandra обучение

🔧 **Redis Documentation** - redis.io/docs

🔧 **Neo4j Sandbox** - Безплатен playground
