---
title: "Лекция"
sidebar_position: 1
slug: lecture
tags: [nosql, mongodb, redis, cassandra, neo4j, cap-theorem, base, document-store, key-value, graph-database]
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
import useBaseUrl from '@docusaurus/useBaseUrl';
import {
  CAPTheorem,
  ACIDvsBase,
  NoSQLTypes,
  ConsistencyModels,
  ScalingModels,
  ThreeVsBigData,
  SelectionMatrix,
  NoSQLHeader
} from '@site/src/components/Diagrams';

# Въведение в NoSQL Бази Данни

<NoSQLHeader />

<ViewSlidesButton lectureSlug="no-sql-db" />

<QuickSummary>

**Ключови познания:**
- **NoSQL** означава "Not only SQL" - алтернатива, не замяна на релационните бази
- **Четири основни типа**: Document, Key-Value, Wide-Column, Graph
- **CAP теоремата** определя избора между консистентност и достъпност
- **BASE** модел за евентуална консистентност vs **ACID** за силна
- **Хоризонтално мащабиране** е ключово предимство на NoSQL

</QuickSummary>

<LearningObjectives objectives={[
  "Класифициране на NoSQL типовете и техните модели на данни",
  "Разбиране на CAP теоремата и модели на консистентност",
  "Избор на подходящ NoSQL тип за конкретни приложения",
  "Сравняване на хоризонтално и вертикално мащабиране",
  "Оценка кога NoSQL е по-добър избор от RDBMS"
]} />

---

## Въведение: Защо NoSQL?

<WhyBox title="Защо се появиха NoSQL базите данни?">

В началото на 2000-те, експлозивният растеж на интернета създаде предизвикателства, с които традиционните релационни бази данни не можеха да се справят:

- **Милиони едновременни заявки** от уеб приложения
- **Разнообразни данни** - потребителски профили, социални постове, IoT сензори
- **Нужда от мащабиране** отвъд възможностите на един сървър

Пионерски системи като Google **Bigtable** (2006) и Amazon **Dynamo** (2007) показаха нов подход - разпределени, fault-tolerant бази данни.

</WhyBox>

<InfoBox title="Какво означава NoSQL?">

**NoSQL** (Not only SQL) са **нерелационни** системи, проектирани за:

- **Гъвкави схеми** - без твърди табличи структури
- **Хоризонтално мащабиране** - добавяне на повече сървъри
- **Разпределени архитектури** - работа в клъстери от машини

Важно: NoSQL **не замества** SQL базите, а предлага **алтернативи** за специфични случаи.

</InfoBox>

### 3V-тата на Big Data

<ThreeVsBigData />

| Фактор | RDBMS Ограничение | NoSQL Предимство |
|--------|-------------------|------------------|
| **Volume** | Скъпо вертикално мащабиране | Хоризонтално разпределение |
| **Velocity** | Бавни joins и транзакции | Оптимизирано за throughput |
| **Variety** | Твърди схеми | Гъвкави модели за разнородни данни |

---

## ACID vs BASE

Едно от ключовите различия между традиционните RDBMS и NoSQL е моделът на транзакциите.

<ACIDvsBase />

<ComparisonBox
  left={{
    title: "ACID (RDBMS)",
    content: (
      <ul>
        <li><strong>Atomicity</strong> - Всичко или нищо</li>
        <li><strong>Consistency</strong> - Данните са валидни</li>
        <li><strong>Isolation</strong> - Независими транзакции</li>
        <li><strong>Durability</strong> - Промените се запазват</li>
        <li><em>Фокус: Силен интегритет</em></li>
      </ul>
    )
  }}
  right={{
    title: "BASE (NoSQL)",
    content: (
      <ul>
        <li><strong>Basically Available</strong> - Винаги достъпно</li>
        <li><strong>Soft State</strong> - Променливо състояние</li>
        <li><strong>Eventual Consistency</strong> - С времето консистентно</li>
        <li><em>Фокус: Висока достъпност и мащаб</em></li>
      </ul>
    )
  }}
/>

---

## Четирите Типа NoSQL Бази Данни

<NoSQLTypes />

### 1. Document Stores

<InfoBox title="Document бази данни">

Съхраняват данни като гъвкави **JSON/BSON документи**. Всеки документ е самостоятелна единица с различни полета.

**Примери:** MongoDB, Couchbase, DynamoDB

</InfoBox>

```json
{
  "productId": "P123",
  "name": "Laptop",
  "price": 1299.99,
  "specs": {
    "cpu": "Intel i7",
    "ram": "16GB",
    "storage": "512GB SSD"
  },
  "tags": ["electronics", "computers"],
  "schemaVersion": 2
}
```

<SuccessBox title="Предимства на Document stores">

- **Гъвкава схема** - лесна еволюция на данните
- **Богати заявки** - мощни query езици
- **Developer-friendly** - добре се интегрират с OOP

**Приложения:** CMS, e-commerce каталози, потребителски профили

</SuccessBox>

### 2. Key-Value Stores

<InfoBox title="Key-Value бази данни">

Най-простият NoSQL модел - **ключ-стойност** двойки. Стойността е "черна кутия" за базата.

**Примери:** Redis, DynamoDB, Memcached

</InfoBox>

```python
# Примери с Redis
redis.set("user:123", '{"name": "Ivan", "email": "ivan@example.com"}')
redis.set("session:abc", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...")
redis.set("cache:products:featured", json.dumps(featured_products))

# Извличане
user = json.loads(redis.get("user:123"))
```

<SuccessBox title="Предимства на Key-Value stores">

- **Ултра бързо** - O(1) lookups, in-memory операции
- **Просто** - лесен за разбиране и използване
- **Универсално** - съхранява всякакъв тип данни

**Приложения:** Кеширане, сесии, leaderboards, message queues

</SuccessBox>

### 3. Wide-Column Stores

<InfoBox title="Wide-Column бази данни">

Организират данни в **column families** - всеки ред може да има различен брой колони. Ефективни за sparse данни.

**Примери:** Apache Cassandra, ScyllaDB, HBase

</InfoBox>

```
// Пример: IoT сензорни данни
Row Key: sensor_001:2024-01-15
  ├── temperature:08:00 → 22.5
  ├── temperature:09:00 → 23.1
  ├── humidity:08:00 → 45%
  └── humidity:09:00 → 47%

Row Key: sensor_002:2024-01-15
  ├── temperature:08:00 → 18.2
  └── pressure:08:00 → 1013hPa  // Различни колони!
```

<SuccessBox title="Предимства на Wide-Column stores">

- **Масивен запис** - оптимизирани за high write throughput
- **Tunable консистентност** - избирате ниво per-operation
- **Висока достъпност** - без single point of failure

**Приложения:** IoT данни, time-series, логове, analytics

</SuccessBox>

### 4. Graph Databases

<InfoBox title="Graph бази данни">

Моделират данни като **nodes** (възли), **edges** (връзки) и **properties** (свойства). Оптимизирани за traversals между свързани данни.

**Примери:** Neo4j, Amazon Neptune, ArangoDB

</InfoBox>

```cypher
// Cypher заявка в Neo4j
// Намери приятели на приятели

MATCH (user:Person {name: "Alice"})-[:FRIEND]->(friend)-[:FRIEND]->(foaf)
WHERE NOT (user)-[:FRIEND]->(foaf) AND user <> foaf
RETURN foaf.name AS recommendation
```

<SuccessBox title="Предимства на Graph databases">

- **Ефективни traversals** - бързи заявки за свързани данни
- **Интуитивно моделиране** - визуално представяне на връзки
- **Откриване на patterns** - идеални за намиране на скрити връзки

**Приложения:** Социални мрежи, fraud detection, препоръчващи системи

</SuccessBox>

### 5. Multi-Model Databases

<InfoBox title="Multi-Model бази данни">

Една система, поддържаща **множество модели** (document + key-value + graph) с **унифициран query език**.

**Примери:** ArangoDB, OrientDB, MarkLogic

**Предимства:** Намалена сложност, един продукт за различни нужди.

</InfoBox>

---

## CAP Теорема

<CAPTheorem />

<WarningBox title="CAP Теорема">

В разпределена система е **невъзможно** да гарантирате едновременно и трите:

1. **Consistency (C)** - Всички nodes виждат еднакви данни
2. **Availability (A)** - Системата винаги отговаря
3. **Partition Tolerance (P)** - Работи при мрежови проблеми

**За NoSQL P е задължително** → избор между C и A!

</WarningBox>

### CP vs AP Системи

<ComparisonBox
  left={{
    title: "CP Системи",
    content: (
      <ul>
        <li><strong>Приоритет:</strong> Консистентност</li>
        <li><strong>При partition:</strong> Спира да приема заявки</li>
        <li><strong>Примери:</strong> MongoDB, Redis</li>
        <li><strong>За:</strong> Банкови системи, inventory</li>
      </ul>
    )
  }}
  right={{
    title: "AP Системи",
    content: (
      <ul>
        <li><strong>Приоритет:</strong> Достъпност</li>
        <li><strong>При partition:</strong> Продължава да работи</li>
        <li><strong>Примери:</strong> Cassandra, DynamoDB</li>
        <li><strong>За:</strong> Social feeds, analytics</li>
      </ul>
    )
  }}
/>

---

## Модели на Консистентност

<ConsistencyModels />

| Модел | Описание | Пример |
|-------|----------|--------|
| **Strong** | Всички четат последния запис | MongoDB (primary) |
| **Eventual** | Данните се синхронизират с времето | Cassandra default |
| **Tunable** | Избирате ниво per-operation | Cassandra (ONE/QUORUM/ALL) |

---

## Мащабиране: Вертикално vs Хоризонтално

<ScalingModels />

<ComparisonBox
  left={{
    title: "Вертикално (Scale-Up)",
    content: (
      <ul>
        <li>По-мощен единичен сървър</li>
        <li>По-лесно за управление</li>
        <li>❌ Има физически лимит</li>
        <li>❌ Скъпо при голям мащаб</li>
      </ul>
    )
  }}
  right={{
    title: "Хоризонтално (Scale-Out)",
    content: (
      <ul>
        <li>Добавяне на повече сървъри</li>
        <li>✓ Почти неограничено</li>
        <li>✓ Евтин commodity hardware</li>
        <li>NoSQL е проектиран за това!</li>
      </ul>
    )
  }}
/>

---

## Managed vs Self-Managed

<Grid columns={2}>
  <Card title="Managed Services" icon="☁️">
    **MongoDB Atlas, DynamoDB, etc.**

    ✓ Автоматично мащабиране
    ✓ Backups, patching, monitoring
    ✓ По-бърза разработка
    ❌ По-малко контрол
    ❌ Vendor lock-in
  </Card>
  <Card title="Self-Managed" icon="🔧">
    **Self-hosted Cassandra, Neo4j, etc.**

    ✓ Пълен контрол
    ✓ Потенциално по-евтино при scale
    ❌ Изисква експертиза
    ❌ Голяма оперативна тежест
  </Card>
</Grid>

---

## Case Study: MongoDB за E-commerce

<InfoBox title="Защо MongoDB за продуктови каталози?">

E-commerce продуктите имат **силно различаващи се атрибути**:
- Тениска: размер, цвят, материал
- Лаптоп: CPU, RAM, storage
- Книга: автор, ISBN, жанр

**Релационните бази** изискват сложни JOIN-ове или EAV модели. **MongoDB** позволява гъвкави документи.

</InfoBox>

### Schema Evolution Patterns

**1. Schema Versioning:**
```json
{
  "productId": "P001",
  "name": "T-Shirt",
  "price": 25.00,
  "schemaVersion": 1
}

// След добавяне на нови полета:
{
  "productId": "P001",
  "name": "T-Shirt",
  "price": 25.00,
  "material": "cotton",
  "colorOptions": ["red", "blue"],
  "schemaVersion": 2
}
```

**2. Lazy Migration:**
```python
def get_product(product_id):
    doc = db.products.find_one({"productId": product_id})

    if doc.get("schemaVersion", 1) < CURRENT_VERSION:
        doc = migrate_document(doc)
        db.products.update_one({"productId": product_id}, {"$set": doc})

    return doc
```

**3. Aggregation Pipelines:**
```javascript
db.products.aggregate([
  {
    $addFields: {
      finalPrice: {
        $multiply: ["$basePrice", { $subtract: [1, "$discountPercentage"] }]
      }
    }
  }
])
```

---

## NoSQL Матрица за Избор

<SelectionMatrix />

---

## Кога да Използвате NoSQL vs RDBMS?

<Grid columns={2}>
  <Card title="✓ Използвайте NoSQL" icon="🚀">
    - Гъвкави, променящи се схеми
    - Масивен мащаб (милиони потребители)
    - Бърз read/write throughput
    - Разнородни данни (JSON, графи)
    - Географски разпределени системи
  </Card>
  <Card title="✓ Използвайте RDBMS" icon="🏦">
    - Комплексни транзакции (банкиране)
    - Силен интегритет на данните
    - Сложни JOIN-ове и отчети
    - Стабилна, позната схема
    - Регулаторни изисквания
  </Card>
</Grid>

<SuccessBox title="Polyglot Persistence">

Много съвременни приложения използват **комбинация от бази данни**:
- **PostgreSQL** за транзакции
- **Redis** за кеширане
- **MongoDB** за потребителски данни
- **Neo4j** за препоръки

Изберете правилния инструмент за всяка задача!

</SuccessBox>

---

## Тенденции в 2026

<Grid columns={3}>
  <Card title="Multi-Model" icon="🔀">
    Бази като ArangoDB предлагат document + graph + key-value в една система
  </Card>
  <Card title="Cloud-Native" icon="☁️">
    Serverless опции, auto-sharding, multi-region replication
  </Card>
  <Card title="AI Integration" icon="🤖">
    Vector search, ML pipelines, generative AI workloads
  </Card>
</Grid>

---

## Обобщение

<Grid columns={2}>
  <Card title="NoSQL Типове" icon="📊">
    - **Document**: MongoDB, гъвкави JSON документи
    - **Key-Value**: Redis, ултра бързи lookups
    - **Wide-Column**: Cassandra, масивен запис
    - **Graph**: Neo4j, връзки и traversals
  </Card>
  <Card title="Ключови Концепции" icon="💡">
    - **CAP**: Избор между C и A (P е задължително)
    - **BASE**: Евентуална консистентност
    - **Хоризонтално мащабиране**: Scale-out
    - **Polyglot**: Правилният инструмент за задачата
  </Card>
</Grid>

---

## Best Practices

<SuccessBox title="Препоръки за работа с NoSQL">

1. **Разберете data access patterns** преди да изберете база
2. **Започнете с managed services** за по-бърза разработка
3. **Проектирайте за query patterns**, не за нормализация
4. **Използвайте schema versioning** за еволюция на данните
5. **Мониторирайте consistency trade-offs** в production
6. **Не се страхувайте от polyglot** - комбинирайте бази

</SuccessBox>

<WarningBox title="Често срещани грешки">

- Избор на NoSQL "защото е модерно" без реална нужда
- Неразбиране на CAP trade-offs за вашия use case
- Липса на план за schema evolution
- Подценяване на оперативната сложност при self-hosting
- Третиране на eventual consistency като "грешка"

</WarningBox>

---

## Допълнителни Ресурси

### Документация
- [MongoDB Manual](https://docs.mongodb.com/manual/) - Официална документация
- [Redis Documentation](https://redis.io/docs/) - Redis команди и patterns
- [Cassandra Documentation](https://cassandra.apache.org/doc/) - Apache Cassandra

### Инструменти
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) - Managed MongoDB
- [Redis Cloud](https://redis.com/redis-enterprise-cloud/) - Managed Redis
- [Neo4j Sandbox](https://neo4j.com/sandbox/) - Безплатно Neo4j за експерименти

### Практика
- [MongoDB University](https://university.mongodb.com/) - Безплатни курсове
- [DataStax Academy](https://academy.datastax.com/) - Cassandra обучение
