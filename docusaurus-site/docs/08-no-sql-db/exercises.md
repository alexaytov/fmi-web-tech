---
sidebar_position: 2
title: "Упражнения"
tags: [exercises, practice, nosql, mongodb, redis, cassandra, neo4j, cap-theorem]
---

import ExerciseCard from '@site/src/components/Exercise/ExerciseCard';
import ProgressTracker from '@site/src/components/Exercise/ProgressTracker';
import CollapsibleSection from '@site/src/components/CollapsibleSection';
import InfoBox from '@site/src/components/InfoBoxes/InfoBox';
import WarningBox from '@site/src/components/InfoBoxes/WarningBox';
import SuccessBox from '@site/src/components/InfoBoxes/SuccessBox';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Упражнения: NoSQL Бази Данни

<img src={useBaseUrl('/img/diagrams/nosql/exercises-header.svg')} alt="NoSQL Exercises Header" style={{width: '100%', maxWidth: '800px', margin: '20px auto', display: 'block'}} />

<ProgressTracker />

---

## Лесни Упражнения (EASY)

<ExerciseCard difficulty="easy">

### Задача 1: Какво означава NoSQL?

Какво означава акронимът "NoSQL" и какво имплицира това за връзката между NoSQL и SQL базите данни?

<CollapsibleSection title="💡 Подсказка">

Помислете за историята на термина и защо се казва "Not **only** SQL", а не "No SQL".

</CollapsibleSection>

<CollapsibleSection title="✅ Решение">

**NoSQL** означава **"Not only SQL"** (Не само SQL).

**Импликации:**
- NoSQL базите **не заместват** релационните бази данни
- Те са **алтернатива** за специфични случаи
- SQL базите остават подходящи за транзакционни системи
- NoSQL предлага различни модели за различни нужди (документи, графи, key-value)

**Важно:** Терминът подчертава, че има **повече от един начин** за съхранение и обработка на данни.

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="easy">

### Задача 2: Три характеристики на NoSQL

Изброете трите основни характеристики, които дефинират NoSQL базите данни според лекцията.

<CollapsibleSection title="💡 Подсказка">

Помислете за: схеми, мащабиране и архитектура.

</CollapsibleSection>

<CollapsibleSection title="✅ Решение">

**Трите ключови характеристики на NoSQL:**

1. **Гъвкави схеми (Flexible Schemas)**
   - Няма твърди, предварително дефинирани структури
   - Документите могат да имат различни полета

2. **Хоризонтално мащабиране (High Scalability)**
   - Проектирани за добавяне на повече сървъри
   - Scale-out вместо scale-up

3. **Разпределени архитектури (Distributed Architectures)**
   - Работят в клъстери от машини
   - Fault tolerance - устойчивост на откази

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="easy">

### Задача 3: ACID дефиниции

Свържете всеки термин от ACID с правилната му дефиниция:

| Термин | Дефиниция |
|--------|-----------|
| A. Atomicity | 1. Записаните промени се запазват |
| B. Consistency | 2. Транзакциите завършват изцяло или не се изпълняват |
| C. Isolation | 3. Данните остават валидни според правилата |
| D. Durability | 4. Транзакциите се изпълняват независимо |

<CollapsibleSection title="✅ Решение">

**Правилно свързване:**

- **A. Atomicity → 2** - Транзакциите завършват изцяло или не се изпълняват ("всичко или нищо")
- **B. Consistency → 3** - Данните остават валидни според бизнес правилата
- **C. Isolation → 4** - Транзакциите се изпълняват независимо една от друга
- **D. Durability → 1** - Записаните (committed) промени се запазват трайно

**Запомнете:** ACID е фокусиран върху **силен интегритет на данните**, което е критично за финансови системи и inventory.

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="easy">

### Задача 4: 3V на Big Data

Какво означават "3V-тата" на Big Data? Напишете по едно изречение за всяко.

<CollapsibleSection title="✅ Решение">

**3V-тата на Big Data:**

1. **Volume (Обем)**
   - Огромни количества данни - петабайти и повече
   - Изискват разпределено съхранение в клъстери

2. **Velocity (Скорост)**
   - Висока скорост на генериране и обработка на данни
   - Милиони операции в секунда с ниска латентност

3. **Variety (Разнообразие)**
   - Различни типове данни: JSON, изображения, графи, текст
   - Полуструктурирани и неструктурирани формати

**Защо е важно:** RDBMS се затрудняват с 3V-тата, а NoSQL е проектиран специално за тях.

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="easy">

### Задача 5: Типове NoSQL бази данни

Идентифицирайте към кой NoSQL тип принадлежи всеки от следните примери:

- MongoDB
- Redis
- Apache Cassandra
- Neo4j

<CollapsibleSection title="✅ Решение">

| База данни | NoSQL Тип | Кратко описание |
|------------|-----------|-----------------|
| **MongoDB** | Document Store | JSON/BSON документи с гъвкава схема |
| **Redis** | Key-Value Store | In-memory, ултра бързи lookups |
| **Apache Cassandra** | Wide-Column Store | Масивен write throughput, tunable consistency |
| **Neo4j** | Graph Database | Nodes и edges, оптимизирана за traversals |

**Бонус примери:**
- DynamoDB - Key-Value (и Document)
- ArangoDB - Multi-Model (Document + Graph + Key-Value)

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="easy">

### Задача 6: JSON извличане

Даден е следният JSON документ. Извлечете името на потребителя и неговите интереси:

```json
{ "user": { "name": "Alice", "age": 30, "interests": ["coding", "hiking"] } }
```

<CollapsibleSection title="💡 Подсказка">

Използвайте dot notation за достъп до nested полета.

</CollapsibleSection>

<CollapsibleSection title="✅ Решение">

**JavaScript:**
```javascript
const data = { "user": { "name": "Alice", "age": 30, "interests": ["coding", "hiking"] } };

const name = data.user.name;           // "Alice"
const interests = data.user.interests; // ["coding", "hiking"]

console.log(`Name: ${name}`);
console.log(`Interests: ${interests.join(", ")}`);
```

**Python:**
```python
import json

data = { "user": { "name": "Alice", "age": 30, "interests": ["coding", "hiking"] } }

name = data["user"]["name"]           # "Alice"
interests = data["user"]["interests"] # ["coding", "hiking"]

print(f"Name: {name}")
print(f"Interests: {', '.join(interests)}")
```

**Изход:**
```
Name: Alice
Interests: coding, hiking
```

</CollapsibleSection>

</ExerciseCard>

---

## Средни Упражнения (MEDIUM)

<ExerciseCard difficulty="medium">

### Задача 7: BASE vs ACID

Обяснете разликата между BASE и ACID свойствата. В какви сценарии бихте предпочели BASE-compliant система пред ACID-compliant?

<CollapsibleSection title="💡 Подсказка">

Помислете за trade-off между консистентност и достъпност, както и за типа приложения.

</CollapsibleSection>

<CollapsibleSection title="✅ Решение">

**ACID (Atomicity, Consistency, Isolation, Durability):**
- Гарантира силен интегритет на данните
- Транзакциите са "всичко или нищо"
- Типично за релационни бази данни
- **Жертва:** Може да намали availability при мащабиране

**BASE (Basically Available, Soft State, Eventual Consistency):**
- Гарантира висока достъпност
- Състоянието може временно да е inconsistent
- Данните се синхронизират с времето
- **Жертва:** Незабавна консистентност

**Сценарии за BASE:**

1. **Social media feeds** - OK е да видите пост със закъснение от секунди
2. **Product catalog browsing** - временно outdated цени са приемливи
3. **Analytics dashboards** - данните не трябва да са real-time
4. **IoT sensor data** - важен е throughput, не перфектна консистентност
5. **Shopping cart** (non-checkout) - eventual sync е достатъчен

**Сценарии за ACID:**
- Банкови транзакции
- Inventory management
- Order processing (checkout)

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium">

### Задача 8: CAP теорема

CAP теоремата твърди, че разпределените системи не могат едновременно да гарантират три свойства.

- Назовете и трите свойства
- Обяснете защо Partition Tolerance (P) се счита за задължително за NoSQL
- Какъв избор остава за дизайнерите на NoSQL системи?

<CollapsibleSection title="✅ Решение">

**Трите свойства:**

1. **Consistency (C)** - Всички nodes виждат еднакви данни по едно и също време след запис
2. **Availability (A)** - Всяка заявка получава отговор (успех или грешка)
3. **Partition Tolerance (P)** - Системата работи въпреки мрежови прекъсвания между nodes

**Защо P е задължително:**
- NoSQL базите са **разпределени** по дефиниция (множество сървъри)
- Мрежовите проблеми са **неизбежни** в реалния свят
- Без P, системата би спряла напълно при мрежов проблем
- Затова P не е опция, а **изискване**

**Изборът за дизайнерите:**
- **CP системи** (MongoDB, Redis): Приоритет консистентност, жертват availability при partition
- **AP системи** (Cassandra, DynamoDB): Приоритет availability, приемат eventual consistency

**Практически пример:**
- Banking → CP (по-добре спрете система, отколкото да имате грешен баланс)
- Twitter feed → AP (по-добре да виждате стари tweets, отколкото нищо)

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium">

### Задача 9: Избор на NoSQL тип

За всеки use case по-долу, идентифицирайте най-подходящия NoSQL тип (Document, Key-Value, Wide-Column или Graph) и обосновете избора си с 1-2 изречения:

a) Съхранение на user session данни за уеб приложение с милиони едновременни потребители

b) Изграждане на fraud detection система, която анализира transaction patterns и връзки между акаунти

c) Логване на temperature readings от 10,000 IoT сензора всяка секунда

d) Управление на блог платформа, където постовете имат различни структури (някои с изображения, някои с видео, някои само текст)

<CollapsibleSection title="✅ Решение">

**a) User sessions → Key-Value Store (Redis)**
- **Обосновка:** Session данните се достъпват по уникален session ID, изискват ултра ниска латентност и automatic expiration (TTL). Redis е идеален за този pattern - O(1) lookups и in-memory скорост.

**b) Fraud detection → Graph Database (Neo4j)**
- **Обосновка:** Fraud detection изисква анализ на **връзки** между entities (акаунти, транзакции, IP адреси). Graph базите са оптимизирани за traversal заявки като "намери всички акаунти, свързани с този IP през последните 24 часа".

**c) IoT sensor data → Wide-Column Store (Cassandra)**
- **Обосновка:** 10,000 сензора × 1 запис/сек = 10,000 writes/sec. Cassandra е проектирана за **масивен write throughput** и time-series данни. Sparse columns позволяват различни сензори да имат различни метрики.

**d) Blog platform → Document Store (MongoDB)**
- **Обосновка:** Постовете имат **различни структури** (flexible schema). Document базите позволяват всеки документ да има различни полета без промяна на глобална схема. Rich queries за търсене и филтриране.

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium">

### Задача 10: Хоризонтално vs Вертикално мащабиране

Сравнете хоризонтално и вертикално мащабиране, като попълните следната таблица:

| Аспект | Хоризонтално мащабиране | Вертикално мащабиране |
|--------|------------------------|----------------------|
| Метод | ? | ? |
| Цена при голям мащаб | ? | ? |
| Физически лимити | ? | ? |
| NoSQL предпочитание | ? | ? |

<CollapsibleSection title="✅ Решение">

| Аспект | Хоризонтално мащабиране | Вертикално мащабиране |
|--------|------------------------|----------------------|
| **Метод** | Добавяне на повече сървъри (scale-out) | Upgrade на един сървър с повече CPU/RAM (scale-up) |
| **Цена при голям мащаб** | По-евтино (commodity hardware) | Много скъпо (enterprise hardware) |
| **Физически лимити** | Почти неограничено | Има таван (max CPU/RAM на пазара) |
| **NoSQL предпочитание** | ✓ Предпочитано и нативно поддържано | Възможно, но не е основният подход |

**Допълнително:**
- **Хоризонтално:** Изисква distributed архитектура, data partitioning, consistency trade-offs
- **Вертикално:** По-просто за управление, но single point of failure

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium">

### Задача 11: Key-Value операции в Python

Напишете Python pseudocode (или реален код), който демонстрира:

a) Съхранение на user profile като key-value pair

b) Извличане на профила по ключ

c) Обновяване на поле в профила

<CollapsibleSection title="✅ Решение">

```python
import redis
import json

# Свързване към Redis
r = redis.Redis(host='localhost', port=6379, db=0)

# a) Съхранение на user profile
user_profile = {
    "name": "Ivan Petrov",
    "email": "ivan@example.com",
    "age": 28,
    "preferences": {
        "theme": "dark",
        "notifications": True
    }
}

# Ключът е user:123, стойността е JSON string
r.set("user:123", json.dumps(user_profile))
print("Profile saved!")

# b) Извличане на профила
retrieved = r.get("user:123")
if retrieved:
    profile = json.loads(retrieved)
    print(f"Retrieved: {profile['name']}, {profile['email']}")

# c) Обновяване на поле
profile["age"] = 29
profile["preferences"]["theme"] = "light"

# Записваме обратно обновения профил
r.set("user:123", json.dumps(profile))
print("Profile updated!")

# Опционално: използване на TTL (Time-To-Live)
r.setex("session:abc", 3600, "session_token_here")  # expires in 1 hour
```

**Изход:**
```
Profile saved!
Retrieved: Ivan Petrov, ivan@example.com
Profile updated!
```

**Алтернатива с Redis Hash (по-ефективно за partial updates):**
```python
# Използване на HSET за отделни полета
r.hset("user:123", mapping={
    "name": "Ivan Petrov",
    "email": "ivan@example.com",
    "age": "28"
})

# Update само едно поле
r.hset("user:123", "age", "29")

# Get само едно поле
age = r.hget("user:123", "age")
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium">

### Задача 12: Модели на консистентност

Обяснете разликата между strong consistency, eventual consistency и tunable consistency. Дайте по един пример от реалния свят, където всеки модел би бил най-подходящ.

<CollapsibleSection title="✅ Решение">

**1. Strong Consistency (Силна консистентност)**
- **Дефиниция:** Всички четения връщат най-скорошния запис. Данните са винаги актуални навсякъде.
- **Как работи:** Изисква quorum от replicas да потвърдят write преди commit.
- **Trade-off:** По-ниска availability, по-висока латентност
- **Пример:** **Банкови транзакции** - когато теглите пари, балансът ТРЯБВА да е актуален, за да се избегне overdraft.

**2. Eventual Consistency (Евентуална консистентност)**
- **Дефиниция:** Nodes може временно да показват различни данни, но ще се синхронизират с времето.
- **Как работи:** Writes се разпространяват асинхронно.
- **Trade-off:** Висока availability и performance, временни inconsistencies
- **Пример:** **Social media feed** - OK е да видите нов пост със закъснение от няколко секунди. По-важно е feed-ът винаги да зарежда.

**3. Tunable Consistency (Настройваема консистентност)**
- **Дефиниция:** Разработчикът избира ниво на консистентност per-operation.
- **Как работи:** Конфигуриране колко replicas трябва да respond (ONE, QUORUM, ALL).
- **Trade-off:** Гъвкавост, но сложност в дизайна
- **Пример:** **E-commerce сайт**
  - Product views → ONE (бързо, eventual)
  - Add to cart → QUORUM (балансирано)
  - Checkout → ALL (силна консистентност)

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium">

### Задача 13: MongoDB документ за продукт

Проектирате продуктов каталог за e-commerce сайт. Създайте примерен MongoDB документ за лаптоп продукт, който включва:

- Product ID
- Име
- Цена
- Category-specific атрибути (CPU, RAM, storage)
- Schema version поле

След това обяснете защо document stores са предимство за този use case в сравнение с релационни таблици.

<CollapsibleSection title="✅ Решение">

**MongoDB документ:**
```json
{
  "_id": ObjectId("507f1f77bcf86cd799439011"),
  "productId": "LAPTOP-2024-001",
  "name": "ProBook X1 Ultralight",
  "price": 1299.99,
  "currency": "BGN",
  "category": "laptops",
  "brand": "TechCorp",
  "inStock": true,
  "stockQuantity": 42,

  "specs": {
    "cpu": {
      "model": "Intel Core i7-13700H",
      "cores": 14,
      "baseSpeed": "2.4 GHz",
      "turboSpeed": "5.0 GHz"
    },
    "ram": {
      "size": "16GB",
      "type": "DDR5",
      "speed": "4800 MHz"
    },
    "storage": {
      "type": "SSD",
      "capacity": "512GB",
      "interface": "NVMe"
    },
    "display": {
      "size": "14 inch",
      "resolution": "2560x1600",
      "type": "IPS"
    }
  },

  "tags": ["ultrabook", "business", "portable", "intel"],
  "images": [
    "/images/laptop-001-front.jpg",
    "/images/laptop-001-side.jpg"
  ],

  "schemaVersion": 2,
  "createdAt": ISODate("2024-01-15T10:30:00Z"),
  "updatedAt": ISODate("2024-03-01T14:20:00Z")
}
```

**Предимства на Document Stores за продуктови каталози:**

1. **Гъвкава схема:**
   - Лаптоп има CPU, RAM, storage
   - Тениска има size, color, material
   - Всеки продукт има различни атрибути без промяна на database schema

2. **Embedded documents:**
   - `specs.cpu`, `specs.ram` са nested - всичко в един документ
   - В RDBMS би изисквало JOIN между `products`, `cpu_specs`, `ram_specs` таблици

3. **Schema evolution:**
   - Добавяте ново поле (напр. `warranty`) само за нови продукти
   - Старите продукти остават непроменени
   - `schemaVersion` помага за backward compatibility

4. **Performance:**
   - Един read за цялата продуктова информация
   - Няма expensive JOINs

**В RDBMS:**
```sql
-- Би изисквало поне 3 таблици + JOINs
SELECT p.*, c.*, r.*
FROM products p
JOIN cpu_specs c ON p.cpu_id = c.id
JOIN ram_specs r ON p.ram_id = r.id
WHERE p.id = 'LAPTOP-2024-001';
```

</CollapsibleSection>

</ExerciseCard>

---

## Трудни Упражнения (HARD)

<ExerciseCard difficulty="hard">

### Задача 14: CP vs AP за социална платформа

Startup изгражда социална медийна платформа и трябва да избере между CP система (като MongoDB) или AP система (като Cassandra) за user feed функционалността.

Анализирайте trade-offs, като отговорите на:

a) Какво се случва с user experience при CP система по време на network partition?

b) Какво се случва при AP система по време на network partition?

c) Кое бихте препоръчали за user feed функционалността и защо?

d) Има ли други features на платформата, където противоположният избор би бил по-добър?

<CollapsibleSection title="✅ Решение">

**a) CP система при network partition:**
- Системата **отказва** заявки от "minority" страната на partition
- Потребители виждат **грешки** или **timeout** съобщения
- Feed-ът става **недостъпен** за част от потребителите
- Когато partition се възстанови, всички виждат консистентни данни

**b) AP система при network partition:**
- Системата **продължава да работи** и от двете страни
- Потребители могат да **постват и четат** нормално
- Може да има **временни inconsistencies** - различни потребители виждат различни постове
- След възстановяване, данните се **синхронизират** (eventual consistency)

**c) Препоръка за user feed: AP система (Cassandra)**

**Причини:**
1. **Availability е критична** - потребителите очакват feed-ът да работи 24/7
2. **Inconsistency е приемлива** - OK е да видите нов пост със закъснение от секунди
3. **High write volume** - милиони постове на ден изискват high write throughput
4. **Географско разпределение** - AP системи работят по-добре с multi-region deployment
5. **User expectation** - потребителите предпочитат да виждат "стар" feed, отколкото error message

**d) Features, където CP е по-добър:**

| Feature | Защо CP е по-добър |
|---------|-------------------|
| **User authentication** | Трябва да знаем дали password е правилен - не може да е eventual |
| **Account balance/credits** | Грешен баланс може да доведе до fraud |
| **Privacy settings** | Ако потребител блокира някого, трябва да е незабавно |
| **Email/username uniqueness** | Не може двама да имат един email |
| **Payment processing** | Финансови транзакции изискват ACID |

**Polyglot архитектура:**
```
Social Platform Architecture:
├── User Feed → Cassandra (AP)
├── Direct Messages → Cassandra (AP)
├── User Auth → MongoDB/PostgreSQL (CP)
├── Payment → PostgreSQL (ACID)
├── Session Cache → Redis
└── Friend Graph → Neo4j
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="hard">

### Задача 15: Schema Evolution Strategy

Вашата e-commerce платформа в момента съхранява продукти с тази структура:

```json
{ "productId": "P001", "name": "Running Shoes", "price": 89.99 }
```

Нови изисквания налагат добавяне на: `category`, `inventory_count`, `supplier_info` (nested object) и `tags` (array).

Опишете:

a) Как бихте имплементирали schema versioning

b) Как lazy migration би работила, когато потребител заявява old-format документ

c) Напишете updated document структура със schema version

<CollapsibleSection title="✅ Решение">

**a) Schema Versioning имплементация:**

```javascript
// Дефиниране на schema versions
const SCHEMA_VERSIONS = {
  V1: 1,  // Original: productId, name, price
  V2: 2   // Added: category, inventory_count, supplier_info, tags
};

const CURRENT_SCHEMA_VERSION = SCHEMA_VERSIONS.V2;

// Migration functions
const migrations = {
  1: (doc) => {
    // v1 → v2 migration
    return {
      ...doc,
      category: "uncategorized",  // Default value
      inventory_count: 0,         // Default value
      supplier_info: {
        name: "Unknown",
        contact: null
      },
      tags: [],
      schemaVersion: 2
    };
  }
};
```

**b) Lazy Migration процес:**

```javascript
async function getProduct(productId) {
  // 1. Fetch document
  const doc = await db.products.findOne({ productId });

  if (!doc) return null;

  // 2. Check if migration needed
  const docVersion = doc.schemaVersion || 1;  // Default to v1 if missing

  if (docVersion < CURRENT_SCHEMA_VERSION) {
    // 3. Apply migrations sequentially
    let migratedDoc = { ...doc };

    for (let v = docVersion; v < CURRENT_SCHEMA_VERSION; v++) {
      if (migrations[v]) {
        migratedDoc = migrations[v](migratedDoc);
        console.log(`Migrated document ${productId} from v${v} to v${v + 1}`);
      }
    }

    // 4. Save migrated document back to DB
    await db.products.updateOne(
      { productId },
      { $set: migratedDoc }
    );

    return migratedDoc;
  }

  // 5. Return as-is if already current version
  return doc;
}

// Usage
const product = await getProduct("P001");
// First call: migrates and saves
// Subsequent calls: returns directly (no migration needed)
```

**c) Updated Document Structure (v2):**

```json
{
  "productId": "P001",
  "name": "Running Shoes",
  "price": 89.99,

  "category": "footwear",
  "inventory_count": 150,

  "supplier_info": {
    "name": "SportGear Ltd.",
    "contact": {
      "email": "orders@sportgear.com",
      "phone": "+359-2-123-4567"
    },
    "country": "Bulgaria",
    "lead_time_days": 7
  },

  "tags": ["running", "sports", "outdoor", "men", "women"],

  "schemaVersion": 2,
  "createdAt": "2024-01-15T10:00:00Z",
  "updatedAt": "2024-03-01T14:30:00Z"
}
```

**Предимства на този подход:**
1. **No downtime** - няма нужда от масивен migration script
2. **Постепенен преход** - старите документи се мигрират само когато се достъпват
3. **Backward compatible** - кодът работи и със стари, и с нови документи
4. **Audit trail** - `schemaVersion` показва кога документът е мигриран

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="hard">

### Задача 16: Multi-Database Architecture

Финансова технологична компания трябва да съхранява:

- Real-time stock prices (милиони updates в секунда)
- Customer account information и profiles
- Transaction relationships за fraud detection
- Cached authentication tokens

Проектирайте database архитектура, която адресира всички тези нужди. За всеки тип данни:

a) Препоръчайте конкретен NoSQL database тип

b) Обосновете защо този тип е оптимален

c) Посочете дали бихте приоритизирали consistency или availability

d) Препоръчайте managed vs self-managed и обяснете защо

<CollapsibleSection title="✅ Решение">

**Архитектура:**

```
┌─────────────────────────────────────────────────────────────┐
│                    FinTech Data Architecture                │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─────────────────┐  ┌─────────────────┐                  │
│  │  Stock Prices   │  │   Auth Tokens   │                  │
│  │   Cassandra     │  │     Redis       │                  │
│  │    (AP)         │  │     (CP)        │                  │
│  └─────────────────┘  └─────────────────┘                  │
│                                                             │
│  ┌─────────────────┐  ┌─────────────────┐                  │
│  │ Customer Data   │  │ Fraud Detection │                  │
│  │   MongoDB       │  │     Neo4j       │                  │
│  │    (CP)         │  │    (ACID)       │                  │
│  └─────────────────┘  └─────────────────┘                  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

**1. Real-time Stock Prices**

| Аспект | Решение |
|--------|---------|
| **Database** | Apache Cassandra (Wide-Column) |
| **Защо** | Милиони writes/sec, time-series данни, tunable consistency, linear scalability |
| **Consistency** | **AP** - по-важно е да имаме данни (дори малко стари), отколкото downtime |
| **Deployment** | **Managed (DataStax Astra)** - high write throughput изисква експертиза за tuning; managed намалява operational burden |

```cql
CREATE TABLE stock_prices (
  symbol TEXT,
  timestamp TIMESTAMP,
  price DECIMAL,
  volume BIGINT,
  PRIMARY KEY ((symbol), timestamp)
) WITH CLUSTERING ORDER BY (timestamp DESC);
```

---

**2. Customer Account Information**

| Аспект | Решение |
|--------|---------|
| **Database** | MongoDB (Document) |
| **Защо** | Гъвкава схема за profiles, rich queries, добра поддръжка за nested data |
| **Consistency** | **CP** - account balance и personal data трябва да са консистентни |
| **Deployment** | **Managed (MongoDB Atlas)** - GDPR compliance, automatic backups, encryption at rest |

```javascript
{
  "_id": ObjectId("..."),
  "accountId": "ACC-001",
  "personal": {
    "name": "Ivan Petrov",
    "email": "ivan@example.com",
    "phone": "+359..."
  },
  "balance": Decimal128("15420.50"),
  "riskProfile": "moderate",
  "kycVerified": true,
  "schemaVersion": 3
}
```

---

**3. Transaction Relationships (Fraud Detection)**

| Аспект | Решение |
|--------|---------|
| **Database** | Neo4j (Graph) |
| **Защо** | Fraud patterns са **graph traversal** проблеми - "всички акаунти, свързани с този IP" |
| **Consistency** | **ACID** - fraud detection трябва да работи с актуални данни |
| **Deployment** | **Self-managed** - sensitive financial data, custom fraud algorithms, по-строг контрол |

```cypher
// Намери suspicious patterns
MATCH (acc:Account)-[:TRANSFERRED]->(other:Account)
WHERE acc.flagged = true
WITH other, count(*) as transfers
WHERE transfers > 10
MATCH (other)-[:USED_IP]->(ip:IPAddress)
RETURN other.id, ip.address, transfers
ORDER BY transfers DESC
```

---

**4. Cached Authentication Tokens**

| Аспект | Решение |
|--------|---------|
| **Database** | Redis (Key-Value) |
| **Защо** | In-memory, ултра бързо, TTL за automatic expiration, atomic operations |
| **Consistency** | **CP** - auth tokens трябва да са валидни или невалидни, не "може би" |
| **Deployment** | **Managed (Redis Cloud / ElastiCache)** - high availability, automatic failover |

```python
# Store token with 1 hour TTL
redis.setex(f"auth:token:{token_id}", 3600, json.dumps({
    "userId": "ACC-001",
    "permissions": ["read", "trade"],
    "issuedAt": "2024-03-01T10:00:00Z"
}))

# Validate token (O(1) lookup)
token_data = redis.get(f"auth:token:{token_id}")
if not token_data:
    raise InvalidTokenError()
```

---

**Summary Table:**

| Data Type | Database | Type | CAP | Deployment | Reason |
|-----------|----------|------|-----|------------|--------|
| Stock Prices | Cassandra | Wide-Column | AP | Managed | Write throughput, time-series |
| Customer Data | MongoDB | Document | CP | Managed | Compliance, flexible schema |
| Fraud Graph | Neo4j | Graph | ACID | Self-managed | Custom algorithms, control |
| Auth Tokens | Redis | Key-Value | CP | Managed | Speed, TTL, HA |

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="hard">

### Задача 17: MongoDB Aggregation Pipeline

Напишете MongoDB aggregation pipeline, който извършва следните трансформации върху products колекция:

- Изчислява `finalPrice` поле, като прилага discount percentage към base price
- Филтрира продукти, където `finalPrice` е под $50
- Групира резултатите по category и брои продуктите във всяка
- Сортира categories по брой в низходящ ред

Документите имат следната структура:
```json
{ "name": "Item", "basePrice": 100, "discountPercentage": 0.2, "category": "Electronics" }
```

<CollapsibleSection title="💡 Подсказка">

Използвайте `$addFields`, `$match`, `$group`, и `$sort` stages.

</CollapsibleSection>

<CollapsibleSection title="✅ Решение">

```javascript
db.products.aggregate([
  // Stage 1: Calculate finalPrice
  // finalPrice = basePrice * (1 - discountPercentage)
  {
    $addFields: {
      finalPrice: {
        $multiply: [
          "$basePrice",
          { $subtract: [1, "$discountPercentage"] }
        ]
      }
    }
  },

  // Stage 2: Filter products where finalPrice < 50
  {
    $match: {
      finalPrice: { $lt: 50 }
    }
  },

  // Stage 3: Group by category and count
  {
    $group: {
      _id: "$category",
      productCount: { $sum: 1 },
      avgFinalPrice: { $avg: "$finalPrice" },
      products: { $push: "$name" }  // Optional: collect product names
    }
  },

  // Stage 4: Sort by count descending
  {
    $sort: {
      productCount: -1
    }
  },

  // Stage 5 (Optional): Reshape output
  {
    $project: {
      _id: 0,
      category: "$_id",
      productCount: 1,
      avgFinalPrice: { $round: ["$avgFinalPrice", 2] },
      products: 1
    }
  }
]);
```

**Примерен изход:**
```json
[
  {
    "category": "Accessories",
    "productCount": 15,
    "avgFinalPrice": 32.50,
    "products": ["Phone Case", "Screen Protector", ...]
  },
  {
    "category": "Clothing",
    "productCount": 8,
    "avgFinalPrice": 41.20,
    "products": ["T-Shirt Basic", "Socks Pack", ...]
  },
  {
    "category": "Electronics",
    "productCount": 3,
    "avgFinalPrice": 45.99,
    "products": ["USB Cable", "Earbuds", "Charger"]
  }
]
```

**Обяснение на stages:**

1. **$addFields** - Добавя ново поле без да премахва съществуващите
2. **$match** - Филтрира документи (работи като WHERE в SQL)
3. **$group** - Групира по `_id` и прилага aggregation operators
4. **$sort** - Сортира резултатите (-1 = descending)
5. **$project** - Reshape документите (optional cleanup)

**Performance tip:** Поставете `$match` възможно най-рано в pipeline-а, за да филтрирате документи преди скъпите операции.

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="hard">

### Задача 18: NoSQL vs RDBMS критична оценка

Критично оценете следното твърдение:

> "NoSQL базите данни трябва да заместят релационните бази данни за всички съвременни приложения."

Вашият отговор трябва да включва:

a) Поне два сценария, където RDBMS остава по-добрият избор

b) Поне два сценария, където NoSQL е ясно превъзхождащ

c) Обяснение на концепцията "polyglot persistence" и кога се прилага

d) Дискусия как multi-model базите данни могат да променят този ландшафт

<CollapsibleSection title="✅ Решение">

**Твърдението е ГРЕШНО.** NoSQL не е универсално решение и не трябва да замества RDBMS навсякъде.

---

**a) Сценарии, където RDBMS е по-добър:**

**1. Финансови транзакции (Banking)**
- **Причина:** ACID гаранции са критични - не може да има partial transfers
- **Пример:** Прехвърляне на пари между сметки трябва да е atomic
- **RDBMS:** PostgreSQL, Oracle с транзакции
- **Проблем с NoSQL:** Eventual consistency може да доведе до double-spending

**2. Complex Reporting и Ad-hoc Queries**
- **Причина:** SQL е изключително мощен за JOIN-ове и aggregations
- **Пример:** "Покажи sales по region, product category, и quarter за последните 3 години"
- **RDBMS:** Mature query optimizers, indexes, views
- **Проблем с NoSQL:** Document stores не са оптимизирани за cross-collection joins

**3. Регулаторни изисквания**
- **Причина:** Някои индустрии изискват audit trails и data integrity
- **Пример:** Healthcare (HIPAA), Finance (SOX)
- **RDBMS:** Proven compliance, triggers, constraints

---

**b) Сценарии, където NoSQL е превъзхождащ:**

**1. Real-time Web Scale Applications**
- **Причина:** Милиони concurrent users, географско разпределение
- **Пример:** Social media feeds, gaming leaderboards
- **NoSQL:** Cassandra (AP), Redis (caching)
- **Проблем с RDBMS:** Хоризонталното мащабиране е сложно и скъпо

**2. IoT и Time-Series Data**
- **Причина:** Огромен write throughput (хиляди events/sec)
- **Пример:** Sensor data, log aggregation, metrics
- **NoSQL:** Cassandra, InfluxDB, TimescaleDB
- **Проблем с RDBMS:** Write bottlenecks, schema inflexibility

**3. Rapidly Evolving Schemas**
- **Причина:** Agile development с чести промени в data model
- **Пример:** Startup MVP, content management
- **NoSQL:** MongoDB (schema-less documents)
- **Проблем с RDBMS:** ALTER TABLE migrations, downtime

---

**c) Polyglot Persistence:**

**Дефиниция:** Използване на **различни типове бази данни** за различни части на едно приложение, като всеки тип е избран за specific use case.

**Пример архитектура за E-commerce:**
```
┌───────────────────────────────────────────────────┐
│               E-Commerce Platform                 │
├───────────────────────────────────────────────────┤
│ Orders & Payments    → PostgreSQL (ACID)          │
│ Product Catalog      → MongoDB (flexible schema)  │
│ User Sessions        → Redis (fast, TTL)          │
│ Search               → Elasticsearch (full-text)  │
│ Recommendations      → Neo4j (graph traversal)    │
│ Analytics            → ClickHouse (OLAP)          │
└───────────────────────────────────────────────────┘
```

**Кога се прилага:**
- Когато **един тип** база не може да задоволи всички нужди
- Когато имате **различни access patterns** (read-heavy vs write-heavy)
- Когато **различни части** на приложението имат различни consistency изисквания

**Trade-offs:**
- ✓ Оптимална производителност за всеки use case
- ✗ По-сложна инфраструктура
- ✗ Data synchronization между системите
- ✗ Operational overhead

---

**d) Multi-Model Databases - промяна на ландшафта:**

**Какво са:** Бази данни, които поддържат **множество модели** (document, graph, key-value) в една система.

**Примери:** ArangoDB, OrientDB, MarkLogic, CosmosDB

**Как променят нещата:**

1. **Reduced Complexity:**
   - Един продукт вместо 3-4 различни бази
   - Една query language (AQL, GraphQL)
   - По-лесен deployment и monitoring

2. **Unified Data:**
   - Няма нужда от ETL между системи
   - Cross-model queries са native

3. **Flexible Modeling:**
   - Document за content
   - Graph за relationships
   - Key-value за caching
   - **Всичко в една система**

**Пример с ArangoDB:**
```javascript
// Една заявка, комбинираща document и graph
FOR product IN products
  FILTER product.category == "electronics"
  LET recommendations = (
    FOR v, e IN 1..2 OUTBOUND product bought_together
    RETURN v
  )
  RETURN { product, recommendations }
```

**Ограничения:**
- Може да не е "best-of-breed" за нито един модел
- По-малка community в сравнение с MongoDB или Neo4j
- Jack of all trades, master of none?

**Заключение:** Бъдещето вероятно е в **хибриден подход** - specialized бази за критични workloads, multi-model за по-прости use cases.

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="hard">

### Задача 19: Healthcare Data Architecture

Healthcare компания съхранява patient records и трябва да избере между managed services (като MongoDB Atlas) и self-managed infrastructure.

Анализирайте решението, като разгледате:

a) HIPAA compliance и data sovereignty изисквания

b) Cost implications при различни мащаби (startup vs enterprise)

c) Operational expertise изисквания

d) Disaster recovery и backup нужди

e) Направете крайна препоръка с обосновка

<CollapsibleSection title="✅ Решение">

**Контекст:** Healthcare данни са сред най-регулираните. HIPAA (Health Insurance Portability and Accountability Act) налага строги изисквания за protection, privacy, и audit.

---

**a) HIPAA Compliance и Data Sovereignty:**

| Аспект | Managed Services | Self-Managed |
|--------|------------------|--------------|
| **HIPAA BAA** | Големите providers (Atlas, AWS) предлагат BAA (Business Associate Agreement) | Трябва сами да осигурите compliance |
| **Encryption** | Built-in encryption at rest и in transit | Трябва да конфигурирате сами |
| **Audit Logs** | Обикновено включени | Трябва да имплементирате |
| **Data Residency** | Избор на region, но данните са в cloud на provider | Пълен контрол - on-premise или private cloud |
| **Access Control** | Role-based, но управлявано от vendor | Пълен контрол над network и access |

**Ключов въпрос:** Някои healthcare организации имат **data sovereignty** изисквания - данните НЕ могат да напускат определена юрисдикция или трябва да са on-premise.

---

**b) Cost Implications:**

**Startup Scale (1,000 patients, 10GB data):**
| Model | Estimated Monthly Cost |
|-------|----------------------|
| MongoDB Atlas M10 | ~$60-100 |
| Self-managed (1 VM) | ~$100-200 + ops time |

**Winner: Managed** - по-евтино, няма нужда от DevOps expertise

**Enterprise Scale (1M patients, 10TB data):**
| Model | Estimated Monthly Cost |
|-------|----------------------|
| MongoDB Atlas M80+ cluster | $10,000-50,000+ |
| Self-managed (dedicated cluster) | $5,000-15,000 (hardware) + $10,000+ (ops team) |

**Winner: Depends** - self-managed може да е по-евтино, но изисква екип

---

**c) Operational Expertise:**

**Managed Services:**
- Не изисква DBA или DevOps специализация
- Vendor handles: patching, scaling, backups, monitoring
- Екипът се фокусира върху application development
- **Trade-off:** По-малко control, vendor lock-in

**Self-Managed:**
- Изисква **dedicated DBA** (salary: $80,000-150,000/year)
- Нужда от expertise в: clustering, replication, backup strategies, security hardening
- On-call rotation за incidents
- **Trade-off:** Пълен контрол, но висок operational burden

**Healthcare-specific:** Compliance audits, penetration testing, security reviews - всичко това изисква expertise независимо от deployment модела.

---

**d) Disaster Recovery и Backups:**

| Aspect | Managed | Self-Managed |
|--------|---------|--------------|
| **Automated Backups** | Включени, configurable | Трябва да настроите (pg_dump, mongodump, etc.) |
| **Point-in-time Recovery** | Обикновено да | Зависи от вашата имплементация |
| **Multi-region Replication** | Click to enable | Complex setup, networking |
| **RTO/RPO** | SLA-backed (99.95%+) | Зависи от вашия design |
| **Tested Restores** | Vendor отговорност | Вие трябва да тествате редовно |

**Healthcare критично:** HIPAA изисква **documented backup procedures** и **tested restore processes**. Managed services улесняват compliance доказването.

---

**e) Крайна Препоръка:**

**За Startup/SMB Healthcare:**
→ **Managed Services (MongoDB Atlas)** с следните настройки:
- HIPAA-eligible cluster с signed BAA
- Region в съответната юрисдикция (EU за GDPR, US за HIPAA)
- Encryption at rest и in transit enabled
- Audit logging turned on
- Dedicated cluster (не shared) за изолация

**Причини:**
1. По-бързо time-to-market
2. Намалена operational complexity
3. Built-in compliance features
4. Predictable costs
5. 24/7 support от vendor

**За Enterprise Healthcare с Data Sovereignty Requirements:**
→ **Hybrid Approach:**
- Self-managed за **най-чувствителните данни** (PHI, PII) в private infrastructure
- Managed services за **analytics, non-sensitive workloads**
- API layer за secure data access

**Decision Matrix:**

| Фактор | Startup | Enterprise |
|--------|---------|------------|
| Budget | Limited → Managed | Flexible → Either |
| Team Size | Small → Managed | Large → Self-managed possible |
| Compliance | Standard → Managed | Custom → Self-managed |
| Data Sovereignty | Standard → Managed | Strict → Self-managed |
| Time-to-market | Critical → Managed | Flexible → Either |

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="hard">

### Задача 20: Global Video Streaming Architecture

Проектирайте и диаграмирайте distributed NoSQL архитектура за глобален video streaming service, който трябва да:

- Обслужва 100 милиона потребители в 5 континента
- Поддържа под 100ms латентност за video metadata queries
- Обработва 10,000 нови video uploads на час
- Поддържа персонализирани препоръки базирани на viewing history
- Осигурява 99.99% availability

Вашият дизайн трябва да посочи:

a) Кои NoSQL типове бихте използвали за различните data needs

b) Geographic distribution strategy

c) Consistency model choices за различни операции

d) Как бихте handle-нали network partition между два data centers

e) Scaling strategy при растеж на user base

<CollapsibleSection title="✅ Решение">

**High-Level Architecture:**

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    GLOBAL VIDEO STREAMING ARCHITECTURE                      │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │                         CDN LAYER (Edge)                             │   │
│  │   ┌─────┐  ┌─────┐  ┌─────┐  ┌─────┐  ┌─────┐                       │   │
│  │   │ NA  │  │ EU  │  │ ASIA│  │ SA  │  │ AU  │  ← Video files cached │   │
│  │   └─────┘  └─────┘  └─────┘  └─────┘  └─────┘                       │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │                      REGIONAL DATA CENTERS                           │   │
│  │                                                                       │   │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐                   │   │
│  │  │  US-EAST    │  │   EU-WEST   │  │  ASIA-EAST  │                   │   │
│  │  │             │  │             │  │             │                   │   │
│  │  │ ┌─────────┐ │  │ ┌─────────┐ │  │ ┌─────────┐ │                   │   │
│  │  │ │ Redis   │ │  │ │ Redis   │ │  │ │ Redis   │ │ ← Session/Cache   │   │
│  │  │ │ Cluster │ │  │ │ Cluster │ │  │ │ Cluster │ │                   │   │
│  │  │ └─────────┘ │  │ └─────────┘ │  │ └─────────┘ │                   │   │
│  │  │             │  │             │  │             │                   │   │
│  │  │ ┌─────────┐ │  │ ┌─────────┐ │  │ ┌─────────┐ │                   │   │
│  │  │ │Cassandra│ │  │ │Cassandra│ │  │ │Cassandra│ │ ← Viewing History │   │
│  │  │ │ Nodes   │ │  │ │ Nodes   │ │  │ │ Nodes   │ │   (AP, Multi-DC)  │   │
│  │  │ └─────────┘ │  │ └─────────┘ │  │ └─────────┘ │                   │   │
│  │  │             │  │             │  │             │                   │   │
│  │  │ ┌─────────┐ │  │ ┌─────────┐ │  │ ┌─────────┐ │                   │   │
│  │  │ │ MongoDB │ │  │ │ MongoDB │←┼──┼→│ MongoDB │ │ ← Video Metadata  │   │
│  │  │ │ Replica │ │  │ │ Primary │ │  │ │ Replica │ │   (CP, Primary)   │   │
│  │  │ └─────────┘ │  │ └─────────┘ │  │ └─────────┘ │                   │   │
│  │  └─────────────┘  └─────────────┘  └─────────────┘                   │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │                    CENTRAL SERVICES (Single Region)                  │   │
│  │                                                                       │   │
│  │  ┌─────────────┐        ┌─────────────┐                              │   │
│  │  │    Neo4j    │        │  PostgreSQL │                              │   │
│  │  │ Recommend.  │        │   Billing   │                              │   │
│  │  │   Engine    │        │   Accounts  │                              │   │
│  │  └─────────────┘        └─────────────┘                              │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

**a) NoSQL типове за различни data needs:**

| Data Type | Database | Type | Justification |
|-----------|----------|------|---------------|
| **Video Metadata** | MongoDB | Document | Гъвкава схема за различни video types, rich queries |
| **Viewing History** | Cassandra | Wide-Column | High write throughput (100M users × actions), time-series |
| **Session/Cache** | Redis | Key-Value | Sub-ms latency, TTL за sessions |
| **Recommendations** | Neo4j | Graph | User-video relationships, collaborative filtering |
| **User Accounts** | PostgreSQL | RDBMS | Billing transactions, ACID за subscriptions |

---

**b) Geographic Distribution Strategy:**

**Multi-Region Deployment:**
```
Region 1: US-East (Virginia)      - Primary for Americas
Region 2: EU-West (Frankfurt)     - Primary for Europe/Africa
Region 3: Asia-East (Singapore)   - Primary for Asia/Oceania
```

**Data Distribution:**

1. **Redis:** Regional clusters, NOT replicated globally
   - Sessions са local - user винаги достъпва nearest region
   - Cache е regional - video metadata се кешира per-region

2. **Cassandra:** Global ring с LOCAL_QUORUM
   - Data се реплицира в **всички региони**
   - Writes са LOCAL - бързи, eventual sync
   - Replication Factor: 3 per datacenter

3. **MongoDB:** Single primary cluster с global secondaries
   - Writes отиват в EU-West (primary)
   - Reads могат да са от nearest secondary
   - Video metadata промени са редки → acceptable latency

---

**c) Consistency Model Choices:**

| Operation | Consistency | Reason |
|-----------|-------------|--------|
| **Play video** | Eventual | OK да видите slightly stale metadata |
| **Viewing history write** | LOCAL_QUORUM | Бърз write, eventual sync |
| **Recommendation read** | Eventual | Препоръките могат да са cached |
| **Video upload metadata** | Strong | Трябва да е consistent след upload |
| **Subscription change** | ACID (PostgreSQL) | Billing трябва да е correct |

---

**d) Network Partition Handling:**

**Scenario:** US-East губи връзка с EU-West

**По database:**

1. **Redis:**
   - Не affected - regional clusters са независими
   - US users продължават нормално

2. **Cassandra (AP):**
   - И двата региона **продължават да работят**
   - Writes се буферират, sync при reconnect
   - Conflict resolution: Last-Write-Wins (LWW)

3. **MongoDB (CP):**
   - Ако primary (EU) е недостъпен от US:
     - US може да чете от local secondary (stale data)
     - US writes се буферират или failват
   - **Mitigation:** Arbiter node в 3-ти регион за automatic failover

**Partition Response:**
```
┌──────────────────────────────────────────────────────────────┐
│                 PARTITION DETECTED: US ↔ EU                  │
├──────────────────────────────────────────────────────────────┤
│  US Region:                      EU Region:                  │
│  ✓ Video playback works          ✓ Full functionality        │
│  ✓ History writes (buffered)     ✓ Primary for writes        │
│  ✓ Recommendations (cached)      ✓ Sync to Asia continues    │
│  ⚠ New video uploads queued      ✓ New uploads accepted      │
│  ⚠ Subscription changes fail     ✓ Billing works             │
├──────────────────────────────────────────────────────────────┤
│  AFTER RECONNECT:                                            │
│  - Cassandra auto-syncs viewing history                      │
│  - MongoDB replicas catch up                                 │
│  - Queued uploads process                                    │
│  - Conflict resolution via LWW                               │
└──────────────────────────────────────────────────────────────┘
```

---

**e) Scaling Strategy:**

**Current: 100M users**
**Target: 500M users (5x growth)**

**1. Horizontal Scaling per Layer:**

| Component | Current | Target | Strategy |
|-----------|---------|--------|----------|
| Redis | 3 nodes/region | 9 nodes/region | Add shards |
| Cassandra | 6 nodes/region | 18 nodes/region | Add nodes to ring |
| MongoDB | 3-node replica | Sharded cluster | Add shards by region |

**2. CDN Expansion:**
- Add edge locations в underserved areas
- Pre-warm popular content in new regions

**3. Database Sharding Strategy:**

**Cassandra - already distributed:**
```
Partition Key: user_id
Clustering: timestamp DESC
→ Linear scaling by adding nodes
```

**MongoDB - sharding за metadata:**
```javascript
sh.shardCollection("videos.metadata", { "region": 1, "upload_date": 1 })
// Shard by region first, then by date
// Keeps regional queries efficient
```

**4. Read Replicas:**
- Add MongoDB read replicas в всеки регион
- Route read traffic to local replicas

**5. Caching Layer Expansion:**
```
Current:  User → Redis → MongoDB
Enhanced: User → Edge Cache → Redis → MongoDB
                    ↓
          Cache popular videos at CDN edge
```

**Scaling Milestones:**

| Users | Infrastructure Change |
|-------|----------------------|
| 100M → 200M | Add Cassandra nodes |
| 200M → 300M | Shard MongoDB |
| 300M → 400M | Add 4th region (South America) |
| 400M → 500M | Add 5th region (Africa) |

---

**99.99% Availability Design:**

- **4 nines = 52 min downtime/year**
- Multi-region deployment с automatic failover
- No single point of failure
- Chaos engineering tests
- Blue-green deployments за zero-downtime updates

</CollapsibleSection>

</ExerciseCard>

---

## Обобщение

<SuccessBox title="Какво научихте">

След тези упражнения трябва да можете да:

- ✓ Разпознавате кой NoSQL тип е подходящ за конкретен use case
- ✓ Обяснявате CAP trade-offs и избирате между CP и AP
- ✓ Проектирате schema evolution strategies за document stores
- ✓ Изграждате multi-database архитектури за комплексни приложения
- ✓ Взимате informed решения за managed vs self-managed deployment

</SuccessBox>
