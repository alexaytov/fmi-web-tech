---
sidebar_position: 2
slug: exercises
title: "Упражнения"
tags: [exercises, practice, three-tier-architecture, web-architecture]
---

import ExerciseCard from '@site/src/components/Exercise/ExerciseCard';
import ProgressTracker from '@site/src/components/Exercise/ProgressTracker';
import CollapsibleSection from '@site/src/components/CollapsibleSection';
import InfoBox from '@site/src/components/InfoBoxes/InfoBox';
import WarningBox from '@site/src/components/InfoBoxes/WarningBox';
import SuccessBox from '@site/src/components/InfoBoxes/SuccessBox';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Упражнения: Трислойна Архитектура в Уеб Приложения

<img src={useBaseUrl('/img/diagrams/three-tier/exercises-header.svg')} alt="Three-Tier Architecture Exercises Header" style={{width: '100%', maxWidth: '800px', margin: '20px auto', display: 'block'}} />

<ProgressTracker />

---

## Лесни Упражнения (EASY)

<ExerciseCard difficulty="easy">

### Задача 1: Идентифициране на Трите Слоя

Кои са трите слоя в трислойната архитектура? Изброй всеки слой и предостави едно изречение, описващо основната му отговорност.

<CollapsibleSection title="✅ Решение">

<img src={useBaseUrl('/img/diagrams/three-tier/ex1-three-tiers.svg')} alt="Three Tiers Diagram" style={{width: '100%', maxWidth: '600px', margin: '20px auto', display: 'block'}} />

1. **Presentation Tier** - Отговаря за показването на информация на потребителите и събирането на техния вход чрез потребителския интерфейс.
2. **Application/Business Logic Tier** - Обработва бизнес правилата, валидира данните и координира комуникацията между слоевете.
3. **Data Tier** - Управлява съхранението, извличането и устойчивостта на данните в бази данни или други системи за съхранение.

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="easy">

### Задача 2: Избор от Много Варианти - Слой за Потребителски Интерфейс

Кой слой е отговорен за показването на информация на потребителя и събирането на неговия вход?

A) Data Tier
B) Application/Business Logic Tier
C) Presentation Tier
D) Network Tier

<CollapsibleSection title="✅ Решение">

**Отговор: C) Presentation Tier**

<img src={useBaseUrl('/img/diagrams/three-tier/ex2-multiple-choice.svg')} alt="Multiple Choice Answer" style={{width: '100%', maxWidth: '500px', margin: '20px auto', display: 'block'}} />

Presentation Tier (наричан още UI слой или клиентски слой) е специално проектиран да обработва всички взаимодействия с потребителя, включително показване на данни и събиране на потребителски вход.

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="easy">

### Задача 3: Вярно или Невярно - Директен Достъп до Базата Данни

Вярно или Невярно - В трислойната архитектура Presentation Tier може директно да прави заявки към базата данни за извличане на информация за потребителя.

<CollapsibleSection title="✅ Решение">

**Отговор: Невярно**

<img src={useBaseUrl('/img/diagrams/three-tier/ex3-wrong-vs-correct.svg')} alt="Wrong vs Correct Approach" style={{width: '100%', maxWidth: '600px', margin: '20px auto', display: 'block'}} />

В правилната трислойна архитектура Presentation Tier **никога** не трябва директно да осъществява достъп до базата данни. Всички заявки за данни трябва да минават през Application/Business Logic Tier, който след това комуникира с Data Tier. Това разделение осигурява:
- Сигурност (идентификационните данни не са изложени на клиента)
- Централизирана бизнес логика
- По-лесна поддръжка и мащабируемост

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="easy">

### Задача 4: Съпоставяне на Технологии

Съпостави всяка технология с най-подходящия слой:

| Технология | Слой |
|------------|------|
| 1. MySQL | A. Presentation |
| 2. React | B. Application/Business Logic |
| 3. Node.js with Express | C. Data |

<CollapsibleSection title="✅ Решение">

<img src={useBaseUrl('/img/diagrams/three-tier/ex4-technology-matching.svg')} alt="Technology Matching" style={{width: '100%', maxWidth: '650px', margin: '20px auto', display: 'block'}} />

| Технология | Слой |
|------------|------|
| 1. MySQL | **C. Data** |
| 2. React | **A. Presentation** |
| 3. Node.js with Express | **B. Application/Business Logic** |

**Обяснение:**
- **MySQL** е система за управление на релационни бази данни → Data Tier
- **React** е frontend JavaScript библиотека за изграждане на потребителски интерфейси → Presentation Tier
- **Node.js with Express** е backend framework за API-та → Application Tier

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="easy">

### Задача 5: Попълни Празните Места

Попълни празните места: Основният принцип, движещ трислойната архитектура, се нарича **____________ of ____________**, което означава, че всеки слой обработва специфичен набор от отговорности, различни от останалите.

<CollapsibleSection title="✅ Решение">

**Отговор: Separation of Concerns**

<img src={useBaseUrl('/img/diagrams/three-tier/ex5-separation-of-concerns.svg')} alt="Separation of Concerns" style={{width: '100%', maxWidth: '600px', margin: '20px auto', display: 'block'}} />

Този фундаментален принцип осигурява:
- Всеки слой има единствена, добре дефинирана отговорност
- Промените в един слой не изискват промени в другите
- Екипите могат да работят независимо по различните слоеве
- Тестването и поддръжката стават по-лесни

</CollapsibleSection>

</ExerciseCard>

---

## Средни Упражнения (MEDIUM)

<ExerciseCard difficulty="medium">

### Задача 6: Път на Данните при Вход в Системата

Опиши пълния поток от данни, когато потребител изпраща форма за вход в трислойно уеб приложение. Включи всичките шест стъпки от взаимодействието с потребителя до крайния показан отговор.

<CollapsibleSection title="💡 Подсказка">

Помисли за ролята на всеки слой: Къде потребителят взаимодейства? Къде се валидира паролата? Къде се съхраняват данните за потребителя?

</CollapsibleSection>

<CollapsibleSection title="✅ Решение">

<img src={useBaseUrl('/img/diagrams/three-tier/ex6-login-flow.svg')} alt="Login Flow Diagram" style={{width: '100%', maxWidth: '700px', margin: '20px auto', display: 'block'}} />

**Пълен Поток на Данните при Вход:**

1. **Взаимодействие с Потребителя (Presentation):** Потребителят въвежда потребителско име и парола във формата за вход и натиска "Submit"

2. **Заявка към Сървъра (Presentation → Application):** Frontend-ът изпраща HTTP POST заявка с идентификационните данни към API endpoint-а (напр. `/api/auth/login`)

3. **Обработка на Бизнес Логика (Application):** Backend-ът валидира формата на входа и хешира паролата

4. **Заявка към Базата Данни (Application → Data):** Базата данни търси потребителя и връща съхранения хеш на паролата

5. **Решение за Автентикация (Application):** Backend-ът сравнява хешовете на паролите, генерира session token/JWT ако са валидни

6. **Показване на Отговор (Presentation):** Frontend-ът съхранява токена (ако е успешно), пренасочва към dashboard или показва съобщение за грешка

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium">

### Задача 7: Анализ на Архитектурни Нарушения

Разработчик пише следния код в своя React компонент (Presentation Tier):

```javascript
const getUserData = async (userId) => {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password123',
    database: 'users_db'
  });
  const result = await connection.query(`SELECT * FROM users WHERE id = ${userId}`);
  return result;
}
```

Идентифицирай какво архитектурно нарушение се случва тук и обясни защо това е проблематично. Как трябва да бъде преструктурирано?

<CollapsibleSection title="💡 Подсказка">

Помисли: Къде трябва да живеят връзките към базата данни? Какви рискове за сигурността съществуват? Какво се случва, ако идентификационните данни на базата данни се променят?

</CollapsibleSection>

<CollapsibleSection title="✅ Решение">

<img src={useBaseUrl('/img/diagrams/three-tier/ex7-architectural-violation.svg')} alt="Architectural Violation Analysis" style={{width: '100%', maxWidth: '700px', margin: '20px auto', display: 'block'}} />

**Идентифицирани Нарушения:**

1. **Директен Достъп до Базата Данни от Presentation Tier** - Frontend-ът никога не трябва да се свързва директно с базата данни

2. **Изложени Идентификационни Данни** - Идентификационните данни за базата данни са hardcoded в клиентския код, видими за всички

3. **SQL Injection Уязвимост** - String интерполацията позволява злонамерена SQL injection атака

4. **Липсва Слой за Бизнес Логика** - Заобикаля проверките за валидация и авторизация

**Правилна Архитектура:**

```javascript
// Presentation Tier (React)
const getUserData = async (userId) => {
  const response = await fetch(`/api/users/${userId}`, {
    headers: { 'Authorization': `Bearer ${token}` }
  });
  return response.json();
}

// Application Tier (Express)
app.get('/api/users/:id', authMiddleware, async (req, res) => {
  const user = await userService.findById(req.params.id);
  res.json(user);
});

// Data Tier (Repository)
class UserRepository {
  async findById(id) {
    return db.query('SELECT * FROM users WHERE id = ?', [id]);
  }
}
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium">

### Задача 8: Сравнение на Трислойна и Монолитна Архитектура

Сравни трислойната архитектура с монолитно приложение. Предостави поне три конкретни разлики и обясни кога може да избереш единия подход пред другия.

<CollapsibleSection title="✅ Решение">

<img src={useBaseUrl('/img/diagrams/three-tier/ex8-monolith-vs-three-tier.svg')} alt="Monolith vs Three-Tier Comparison" style={{width: '100%', maxWidth: '700px', margin: '20px auto', display: 'block'}} />

| Аспект | Монолитна | Трислойна |
|--------|------------|------------|
| **Разполагане** | Единична deployable единица | Всеки слой се разполага независимо |
| **Мащабиране** | Мащабиране на цялото приложение | Мащабиране на отделните слоеве при нужда |
| **Разработка** | Целият код в една codebase | Възможни са отделни codebases |
| **Сложност** | По-проста начална настройка | Повече инфраструктурни разходи |
| **Структура на Екипа** | Един екип управлява всичко | Екипите могат да се специализират по слой |

**Избери Монолитна Когато:**
- Изграждаш MVP или прототип
- Малък екип (1-5 разработчици)
- Прости изисквания към приложението

**Избери Трислойна Когато:**
- Приложението ще се мащабира значително
- Множество екипи работят едновременно
- Необходимо е независимо мащабиране на компонентите

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium">

### Задача 9: Сценарий за Мащабиране на Black Friday

Уебсайт за електронна търговия изпитва внезапен скок в трафика по време на Black Friday разпродажба. Базата данни обработва заявките ефективно, но потребителите изпитват бавно зареждане на страниците. Използвайки знанията си за трислойната архитектура, кой слой/слоеве би мащабирал и как? Обоснови отговора си.

<CollapsibleSection title="💡 Подсказка">

Ако базата данни работи добре, но страниците са бавни, къде е тесното място? Помисли какво се случва между заявката на потребителя и заявката към базата данни.

</CollapsibleSection>

<CollapsibleSection title="✅ Решение">

**Основна Цел за Мащабиране: Application Tier и Presentation Tier**

<img src={useBaseUrl('/img/diagrams/three-tier/ex9-horizontal-scaling.svg')} alt="Horizontal Scaling Architecture" style={{width: '100%', maxWidth: '700px', margin: '20px auto', display: 'block'}} />

**Обосновка:**
Тъй като базата данни работи добре, тесното място вероятно е в:

1. **Application Tier (Backend):**
   - Добави повече сървърни инстанции зад load balancer
   - Имплементирай хоризонтално мащабиране с auto-scaling групи
   - Добави кеширащ слой (Redis/Memcached) за намаляване на излишната обработка

2. **Presentation Tier (Frontend):**
   - Разположи статичните ресурси в CDN (Content Delivery Network)
   - Активирай кеширане в браузъра за статични ресурси
   - Имплементирай кеширане на server-side rendering

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium">

### Задача 10: Трислойна срещу Clean Архитектура

Избор от Много Варианти - Коя е основната разлика между Трислойната Архитектура и Clean Architecture?

A) Трислойната използва три слоя, докато Clean Architecture използва само два
B) Трислойната се фокусира върху разделение на deployment/scaling, докато Clean Architecture се фокусира върху организация на кода и тестваемост
C) Clean Architecture не поддържа бази данни
D) Трислойната е само за уеб приложения, докато Clean Architecture е за мобилни приложения

<CollapsibleSection title="✅ Решение">

**Отговор: B) Трислойната се фокусира върху разделение на deployment/scaling, докато Clean Architecture се фокусира върху организация на кода и тестваемост**

<img src={useBaseUrl('/img/diagrams/three-tier/ex10-three-tier-vs-clean.svg')} alt="Three-Tier vs Clean Architecture" style={{width: '100%', maxWidth: '700px', margin: '20px auto', display: 'block'}} />

**Ключови Разлики:**

| Трислойна Архитектура | Clean Architecture |
|------------------------|-------------------|
| **Физическо разделение** на отговорностите | **Логическо разделение** на отговорностите |
| Фокус върху **deployment** | Фокус върху **структура на кода** |
| Слоевете могат да са на различни сървъри | Слоевете са в рамките на същото приложение |
| Позволява **хоризонтално мащабиране** | Позволява **тестваемост** |
| Ориентирана към инфраструктурата | Ориентирана към домейна |

**Могат да се комбинират:** Трислойното разполагане може да използва принципите на Clean Architecture във всеки слой за по-добра организация на кода.

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium">

### Задача 11: Анализ на Монолитен Код

Като вземеш следния фрагмент от монолитен код, идентифицирай кои части принадлежат на всеки слой и създай таблица, съпоставяща всеки компонент:

```php
<?php
// Display product page
echo "<html><body>";
echo "<h1>Product Catalog</h1>";

// Connect to database
$conn = mysqli_connect("localhost", "user", "pass", "store");

// Get products
$result = mysqli_query($conn, "SELECT * FROM products WHERE price > 10");

// Apply 10% discount for logged-in users
if (isset($_SESSION['user_id'])) {
    $discount = 0.10;
} else {
    $discount = 0;
}

// Display products
while ($row = mysqli_fetch_assoc($result)) {
    $final_price = $row['price'] * (1 - $discount);
    echo "<div class='product'>";
    echo "<p>" . $row['name'] . " - $" . $final_price . "</p>";
    echo "</div>";
}

echo "</body></html>";
?>
```

<CollapsibleSection title="✅ Решение">

<img src={useBaseUrl('/img/diagrams/three-tier/ex11-monolithic-code-analysis.svg')} alt="Monolithic Code Analysis" style={{width: '100%', maxWidth: '700px', margin: '20px auto', display: 'block'}} />

| Редове Код | Слой | Отговорност |
|------------|------|----------------|
| `echo "<html><body>"`, `echo "<h1>..."` | **Presentation** | HTML структура и оформление |
| `echo "<div class='product'>..."` | **Presentation** | Визуализиране на продуктови данни |
| `mysqli_connect(...)` | **Data** | Връзка с база данни |
| `mysqli_query(...)`, `mysqli_fetch_assoc()` | **Data** | Извличане на данни |
| `if (isset($_SESSION['user_id']))` | **Application** | Проверка за авторизация |
| `$discount = 0.10` логика | **Application** | Бизнес правило (ценообразуване) |
| `$final_price = ...` | **Application** | Бизнес изчисление |

**Проблеми с този подход:**
- Всички слоеве смесени в един файл
- Няма разделение на отговорностите
- Трудно тестване на отделните компоненти
- Невъзможно независимо мащабиране на слоевете
- Изложени уязвимости в сигурността

</CollapsibleSection>

</ExerciseCard>

---

## Трудни Упражнения (HARD)

<ExerciseCard difficulty="hard">

### Задача 12: Проектиране на Университетска Система за Записване за Курсове

Проектирай трислойна архитектура за университетска система за записване за курсове. Твоят дизайн трябва да включва:

1. Конкретни отговорности за всеки слой
2. Поне 3 API endpoint-а, които Presentation Tier би извиквал
3. Поне 3 бизнес правила, които биха се прилагали в Application Tier
4. Таблиците/колекциите в базата данни, необходими в Data Tier
5. Диаграма, показваща потока от данни при записване на студент за курс

<CollapsibleSection title="💡 Подсказка">

Помисли: Каква информация трябва да вижда студентът? Кои правила предотвратяват невалидни записвания? Какви релации между данните съществуват?

</CollapsibleSection>

<CollapsibleSection title="✅ Решение">

<img src={useBaseUrl('/img/diagrams/three-tier/ex12-university-registration.svg')} alt="University Course Registration System" style={{width: '100%', maxWidth: '750px', margin: '20px auto', display: 'block'}} />

**1. Отговорности на Слоевете:**

| Слой | Отговорности |
|------|------------------|
| **Presentation** | Студентски портал UI, показване на каталог с курсове, форми за записване, изглед на разписание |
| **Application** | Автентикация, валидация на записването, проверка на предпоставки, управление на капацитета |
| **Data** | Записи на студенти, каталог с курсове, история на записвания, данни за разписание |

**2. API Endpoint-и:**

```
GET  /api/courses                    - Списък на налични курсове
GET  /api/courses/:id/sections       - Вземане на секции за курс
POST /api/enrollments                - Записване за курс
GET  /api/students/:id/schedule      - Вземане на разписанието на студент
DELETE /api/enrollments/:id          - Отписване от курс
```

**3. Бизнес Правила (Application Tier):**

1. **Валидация на Предпоставки:** Студентът трябва да е завършил всички предварителни курсове с оценка C или по-добра
2. **Управление на Капацитета:** Не може да се надвишава максималният размер на класа; добавяне в списък на чакащи, ако е пълен
3. **Лимит на Кредити:** Студентите не могат да се записват за повече от 18 кредита на семестър
4. **Конфликт в Разписанието:** Не може записване за курсове с припокриващо се време

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="hard">

### Задача 13: План за Рефакториране на Банково Приложение

Възложена ти е задача да рефакторираш наследено монолитно банково приложение в трислойна архитектура. Приложението в момента обработва: автентикация на потребители, проверки на баланс по сметка, преводи на средства, история на транзакции и откриване на измами.

Създай детайлен план за рефакториране, който включва:
- Как би фазирал рефакторирането (използвайки Strangler Fig Pattern)
- Стратегии за намаляване на риска по време на прехода
- Как би осигурил нулев престой по време на миграцията

<CollapsibleSection title="💡 Подсказка">

Strangler Fig Pattern включва постепенна замяна на части от старата система, докато тя продължава да работи. Започни с най-малко рисковите компоненти.

</CollapsibleSection>

<CollapsibleSection title="✅ Решение">

<img src={useBaseUrl('/img/diagrams/three-tier/ex13-strangler-fig-pattern.svg')} alt="Strangler Fig Pattern - Migration Phases" style={{width: '100%', maxWidth: '750px', margin: '20px auto', display: 'block'}} />

**Миграция Фаза по Фаза:**

| Фаза | Продължителност | Фокус | Ниво на Риск |
|-------|----------|-------|------------|
| **Фаза 1** | Седмици 1-4 | Настройка на инфраструктурата | Нисък |
| **Фаза 2** | Седмици 5-8 | Операции за четене | Нисък |
| **Фаза 3** | Седмици 9-16 | Автентикация и Преводи | Висок |
| **Фаза 4** | Седмици 17-24 | Измами и Почистване | Среден |

**Подход за Нулев Престой:**
1. Изпълнение на двете системи паралелно
2. Използване на feature flags за контрол на маршрутизирането
3. Постепенно прехвърляне на трафика с мониторинг
4. Възможност за незабавно връщане назад

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="hard">

### Задача 14: Критичен Анализ - Архитектурно Решение за Стартъп

Стартъп твърди, че трислойната архитектура е ненужно натоварване за тяхното ново приложение за социални медии, защото "Netflix започна като монолит."

Напиши детайлен отговор, оценяващ този аргумент. Помисли за:
- Кога този аргумент може да е валиден
- Кога този аргумент може да е грешен
- Препоръчителен подход с обосновка

<CollapsibleSection title="✅ Решение">

<img src={useBaseUrl('/img/diagrams/three-tier/ex14-startup-architecture-decision.svg')} alt="Startup Architecture Decision Analysis" style={{width: '100%', maxWidth: '700px', margin: '20px auto', display: 'block'}} />

**Резюме на Анализа:**

| Фактор | Монолит ОК | Нужна е Трислойна |
|--------|-------------|-------------------|
| Размер на Екипа | 1-5 разработчици | 10+ разработчици |
| Растеж | Предвидим | Вирусен потенциал |
| Бюджет | Ограничен | Адекватен |
| График | MVP/Бързо | Дългосрочен продукт |

**Препоръчан Подход: Модулен Монолит**

Започни с добре структуриран монолит, който има ясни вътрешни граници. Това ти дава:
- Бърза първоначална разработка
- Ясен път за извличане по-късно
- Най-доброто от двата свята

Аргументът на стартъпа има основание за началната фаза, но те трябва да планират пътя за извличане от първия ден и да зададат прагове на мащабиране, които задействат миграцията.

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="hard">

### Задача 15: Имплементация на Ports and Adapters

Обясни как би имплементирал "ports and adapters" в рамките на Application Tier на трислойна архитектура, за да позволиш превключване от MySQL база данни към MongoDB без да засегнеш бизнес логиката.

<CollapsibleSection title="💡 Подсказка">

Мисли за "port" като интерфейс, от който бизнес логиката ти зависи, и "adapters" като имплементации, които се свързват с конкретни технологии.

</CollapsibleSection>

<CollapsibleSection title="✅ Решение">

<img src={useBaseUrl('/img/diagrams/three-tier/ex15-ports-and-adapters.svg')} alt="Ports and Adapters Architecture" style={{width: '100%', maxWidth: '700px', margin: '20px auto', display: 'block'}} />

**Дефиниция на Port (Interface):**

```typescript
// ports/UserRepository.ts - The "Port"
interface UserRepository {
  findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  save(user: User): Promise<User>;
  delete(id: string): Promise<void>;
}
```

**Имплементации на Adapter:**

```typescript
// MySQL Adapter
class MySQLUserRepository implements UserRepository {
  async findById(id: string): Promise<User | null> {
    const [rows] = await this.connection.execute(
      'SELECT * FROM users WHERE id = ?', [id]
    );
    return rows[0] ? this.mapToUser(rows[0]) : null;
  }
}

// MongoDB Adapter
class MongoUserRepository implements UserRepository {
  async findById(id: string): Promise<User | null> {
    const doc = await this.collection.findOne({ _id: id });
    return doc ? this.mapToUser(doc) : null;
  }
}
```

**Предимства:**
- Независимост от технологията
- Лесно тестване с mock adapters
- Поддръжка на постепенна миграция
- Чист фокус върху домейна

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="hard">

### Задача 16: Архитектура на Приложение за Доставка на Храна

Проектирай и документирай пълна трислойна архитектура за приложение за доставка на храна (подобно на Uber Eats или DoorDash).

<CollapsibleSection title="✅ Решение">

<img src={useBaseUrl('/img/diagrams/three-tier/ex16-food-delivery.svg')} alt="Food Delivery System Architecture" style={{width: '100%', maxWidth: '750px', margin: '20px auto', display: 'block'}} />

**Ключови Компоненти:**

| Слой | Компоненти | Технологии |
|------|------------|--------------|
| **Presentation** | Customer App, Restaurant Dashboard, Driver App | React Native, React |
| **Application** | Order Service, Payment Service, Tracking Service | Node.js, WebSocket |
| **Data** | Users, Orders, Restaurants, Payments, Locations | PostgreSQL, Redis |

**Бизнес Правила:**
- Валидация на радиус за доставка
- Динамично ценообразуване в пиковите часове
- Алгоритъм за назначаване на шофьор
- Проследяване на поръчки в реално време чрез WebSocket

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="hard">

### Задача 17: Дебъгване на Дублиране на Поръчки

Трислойно приложение изпитва периодични грешки, при които някои потребителски поръчки се дублират в базата данни. Системните логове показват:

```
[Presentation] Order submitted: ORDER-12345
[Application] Processing order: ORDER-12345
[Application] Timeout waiting for Data Tier response
[Application] Retrying order: ORDER-12345
[Data] INSERT order ORDER-12345 - Success
[Data] INSERT order ORDER-12345 - Success (duplicate)
```

1. Обясни какъв архитектурен проблем причинява този проблем
2. Предложи поне две различни решения на различни слоеве
3. Как би предотвратил това в бъдеще?

<CollapsibleSection title="✅ Решение">

<img src={useBaseUrl('/img/diagrams/three-tier/ex17-order-duplication.svg')} alt="Order Duplication Bug Analysis" style={{width: '100%', maxWidth: '700px', margin: '20px auto', display: 'block'}} />

**Коренна Причина:** Timeout-ът настъпва преди отговора от базата данни, но INSERT-ът всъщност успява. Повторният опит след това създава дубликат.

**Решения:**

| Слой | Решение | Предимство |
|------|----------|---------|
| **Data** | `UNIQUE (order_id)` ограничение | Гарантирано няма дубликати |
| **Application** | Idempotency key + Redis cache | Бързо отхвърляне, без заявка към БД |
| **Presentation** | Деактивиране на бутона за изпращане | Предотвратява двойно кликване |

**Най-добра Практика:** Използвай **и трите** за защита в дълбочина!

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="hard">

### Задача 18: Сравнение на Архитектури - Добавяне в Количка

Сравни как същата функционалност - "Потребителят добавя артикул в количката за пазаруване" - би се имплементирала в:

A) Монолитна архитектура
B) Трислойна архитектура
C) Микросървизна архитектура

За всяка опиши организацията на кода и импликациите за мащабиране.

<CollapsibleSection title="✅ Решение">

<img src={useBaseUrl('/img/diagrams/three-tier/ex18-architecture-comparison.svg')} alt="Architecture Comparison - Add to Cart" style={{width: '100%', maxWidth: '750px', margin: '20px auto', display: 'block'}} />

**Матрица за Решение:**

| Фактор | Монолит | Трислойна | Микросървизи |
|--------|----------|------------|---------------|
| Размер на Екипа | 1-5 | 5-15 | 15+ |
| Време до Пазара | ⭐⭐⭐ | ⭐⭐ | ⭐ |
| Мащабируемост | ⭐ | ⭐⭐ | ⭐⭐⭐ |
| Поддръжка | ⭐ | ⭐⭐ | ⭐⭐⭐ |
| Сложност | Ниска | Средна | Висока |

**Препоръка:** Започни с **Трислойна** като избор по подразбиране. Тя предлага най-добрия баланс между простота и мащабируемост за повечето приложения.

</CollapsibleSection>

</ExerciseCard>
