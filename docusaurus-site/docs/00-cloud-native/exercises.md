---
sidebar_position: 2
title: "Упражнения"
tags: [exercises, practice, cloud-native, kubernetes, containers]
---

import ExerciseCard from '@site/src/components/Exercise/ExerciseCard';
import ProgressTracker from '@site/src/components/Exercise/ProgressTracker';
import CollapsibleSection from '@site/src/components/CollapsibleSection';
import InfoBox from '@site/src/components/InfoBoxes/InfoBox';

# Упражнения: Cloud-Native Development

<ProgressTracker />

---

## Лесни Упражнения (EASY)

<ExerciseCard difficulty="easy">

### Задача 1: Дефиниция на Cloud-Native

Дефинирайте "cloud-native" със собствени думи. Какво е ключовото прозрение за cloud-native - дали е предимно за **къде** работи приложението или **как** е проектирано?

<CollapsibleSection title="Подсказка" icon="💡">

Помислете за разликата между "lift and shift" миграция и redesign на архитектурата.

</CollapsibleSection>

<CollapsibleSection title="Решение" icon="✅">

**Cloud-native** е философия за дизайн на софтуер, която създава приложения, оптимизирани да използват напълно предимствата на cloud computing модела.

**Ключовото прозрение:** Cloud-native е предимно за **как** е проектирано приложението, не за **къде** работи. Може да имате приложение, работещо в AWS, което не е cloud-native (lift and shift), и може да имате cloud-native приложение, работещо on-premises.

Основните характеристики включват:
- Дизайн за мащабируемост (хоризонтално скалиране)
- Автоматизация на всички процеси
- Устойчивост на сривове (resilience)
- Наблюдаемост (observability)

</CollapsibleSection>

</ExerciseCard>

<ExerciseCard difficulty="easy">

### Задача 2: Бизнес Драйвери

Изброете три бизнес драйвера, които мотивират организациите да приемат cloud-native подходи.

<CollapsibleSection title="Подсказка" icon="💡">

Помислете за конкурентно предимство, разходи и надеждност.

</CollapsibleSection>

<CollapsibleSection title="Решение" icon="✅">

**Три основни бизнес драйвера:**

1. **По-бързи иновации и Time-to-Market**
   - Компании като Amazon правят deploy хиляди пъти дневно
   - Нови features достигат до клиентите за часове, не за месеци
   - Конкурентното предимство е за тези, които могат да итерират бързо

2. **Намалени оперативни разходи**
   - Плащате само за ресурси, които реално използвате
   - Без поддръжка на idle сървъри за пикова капацитет
   - Автоматизираните операции намаляват разходите за труд

3. **Подобрена надеждност**
   - Системи, проектирани да издържат на сривове
   - Непрекъсната наличност дори по време на updates
   - Доверието на клиентите се изгражда чрез консистентно представяне

</CollapsibleSection>

</ExerciseCard>

<ExerciseCard difficulty="easy">

### Задача 3: Съпоставяне на Термини

Съпоставете всеки термин с правилната му дефиниция:

| Термин | Дефиниция |
|--------|-----------|
| A. Container | 1. Инструмент, който случайно терминира сервизи за тестване на устойчивост |
| B. Microservices | 2. Стандартна единица софтуер, която пакетира код и всички зависимости |
| C. Chaos Monkey | 3. Архитектурен стил, използващ малки, автономни сервизи |
| D. IaC | 4. Дефиниране на инфраструктура във version-controlled файлове |

<CollapsibleSection title="Решение" icon="✅">

| Термин | Отговор |
|--------|---------|
| A. Container | **2** - Стандартна единица софтуер, която пакетира код и всички зависимости |
| B. Microservices | **3** - Архитектурен стил, използващ малки, автономни сервизи |
| C. Chaos Monkey | **1** - Инструмент, който случайно терминира сервизи за тестване на устойчивост |
| D. IaC | **4** - Дефиниране на инфраструктура във version-controlled файлове |

</CollapsibleSection>

</ExerciseCard>

<ExerciseCard difficulty="easy">

### Задача 4: Трите Стълба на Observability

Какви са трите стълба на observability в cloud-native системи? Дайте еднозначно описание на всеки.

<CollapsibleSection title="Решение" icon="✅">

**Трите стълба на observability:**

1. **Metrics** - Числови измервания на системно поведение като response time, error rate и resource usage, събирани и агрегирани във времето.

2. **Logs** - Подробни, времево маркирани записи на дискретни събития и действия, настъпващи в системата.

3. **Traces** - End-to-end записи на request paths през разпределени системи, показващи как requests се разпространяват през множество сервизи.

</CollapsibleSection>

</ExerciseCard>

<ExerciseCard difficulty="easy">

### Задача 5: Вярно или Невярно

Вярно или Невярно (обяснете отговора си):

*"В cloud-native система, използваща containers, всеки container включва своя собствена пълна операционна система, точно като виртуална машина."*

<CollapsibleSection title="Решение" icon="✅">

**Невярно.**

Containers **споделят host OS kernel** и включват само application code, runtime, библиотеки и конфигурационни файлове - не пълна операционна система.

Ключови разлики от VMs:
- **VMs**: Всяка VM има пълна guest OS (gigabytes)
- **Containers**: Споделят host kernel, само application layer (megabytes)
- **Containers стартират за секунди** vs минути за VMs
- **Containers са много по-леки** - 100+ на host vs 10-20 VMs

Това прави containers много по-ефективни за cloud-native workloads.

</CollapsibleSection>

</ExerciseCard>

---

## Средни Упражнения (MEDIUM)

<ExerciseCard difficulty="medium">

### Задача 6: Монолит vs Microservices Сценарий

Разгледайте този традиционен e-commerce сценарий: Bug в product review feature причинява срив на целия уебсайт - включително checkout.

**a)** Защо това се случва в монолитна архитектура?

**b)** Как microservices архитектура би предотвратила този конкретен проблем?

**c)** Какво ново предизвикателство могат да въведат microservices вместо това?

<CollapsibleSection title="Подсказка" icon="💡">

Помислете за fault isolation и distributed system сложността.

</CollapsibleSection>

<CollapsibleSection title="Решение" icon="✅">

**a) Защо в монолитна архитектура:**
- Всички components споделят един процес и памет
- Bug в една част може да срине целия application process
- Няма fault isolation - един проблем се разпространява навсякъде
- Reviews и checkout са в една codebase, deployed заедно

**b) Как microservices предотвратяват проблема:**
- Product Review Service е отделен от Checkout Service
- Всеки сервиз работи в собствен процес/container
- **Fault isolation**: Crash на review service не засяга checkout
- Checkout продължава да работи независимо
- Health checks автоматично рестартират crashed services

**c) Нови предизвикателства от microservices:**
- **Network complexity**: Сервизите комуникират през мрежа (latency, failures)
- **Distributed debugging**: По-трудно е да се проследи проблем през множество сервизи
- **Data consistency**: Данните са разпределени между сервизи
- **Operational overhead**: Повече deployments, повече monitoring
- **Service discovery**: Сервизите трябва да се намират един друг

</CollapsibleSection>

</ExerciseCard>

<ExerciseCard difficulty="medium">

### Задача 7: Анализ на Dockerfile

Анализирайте следния Dockerfile и отговорете на въпросите:

```dockerfile
FROM python:3.9-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
EXPOSE 8000
CMD ["python", "app.py"]
```

**a)** От какъв base image е построен този container?

**b)** Защо `requirements.txt` се копира и инсталира *преди* да се копира останалата част от application кода?

**c)** Какво се случва когато container-ът стартира (последният ред)?

<CollapsibleSection title="Решение" icon="✅">

**a) Base image:**
`python:3.9-slim` - минимален Python 3.9 image (slim variant е по-малък от пълния).

**b) Защо requirements.txt се копира първо:**
Това е **Docker layer caching optimization**:
- Docker кешира всеки layer от build process
- Ако `requirements.txt` не се промени, pip install layer се reuse-ва
- Application code се променя по-често от dependencies
- Като отделим dependency installation, избягваме reinstall при всяка code промяна
- Значително ускорява build времето за development

**c) При стартиране на container:**
`CMD ["python", "app.py"]` указва default командата:
- Python interpreter стартира `app.py` script
- Това е entry point на приложението
- Port 8000 е exposed за incoming connections
- Container работи докато app.py процесът работи

</CollapsibleSection>

</ExerciseCard>

<ExerciseCard difficulty="medium">

### Задача 8: Containers vs VMs Сравнение

Сравнете containers и virtual machines като попълните таблицата:

| Аспект | Virtual Machines | Containers |
|--------|------------------|------------|
| Типичен размер | ? | ? |
| Време за стартиране | ? | ? |
| Ниво на изолация | ? | ? |
| Типична плътност на host | ? | ? |

На базата на попълнената таблица, в какъв сценарий бихте избрали VMs пред containers?

<CollapsibleSection title="Решение" icon="✅">

**Попълнена таблица:**

| Аспект | Virtual Machines | Containers |
|--------|------------------|------------|
| Типичен размер | Gigabytes | Megabytes |
| Време за стартиране | Минути | Секунди |
| Ниво на изолация | Hardware-level (силна) | Process-level (по-слаба) |
| Типична плътност на host | 10-20 VMs | 100+ containers |

**Сценарии за избор на VMs:**

1. **Security isolation**: Когато е необходима пълна изолация (multi-tenant environments, security-sensitive workloads)

2. **Different OS requirements**: Когато трябва да работите с различни операционни системи на един host (Linux и Windows)

3. **Legacy applications**: Приложения, които изискват специфични kernel версии или full OS access

4. **Regulatory compliance**: Когато регулаторни изисквания налагат hardware-level isolation

</CollapsibleSection>

</ExerciseCard>

<ExerciseCard difficulty="medium">

### Задача 9: Configuration Drift

Обяснете какво означава "configuration drift" и защо е проблем. След това опишете как immutable infrastructure решава този проблем.

<CollapsibleSection title="Решение" icon="✅">

**Какво е Configuration Drift:**
Configuration drift възниква когато сървъри, които би трябвало да са идентични, постепенно стават различни поради:
- Ръчни промени от различни администратори
- Ad-hoc patches и hotfixes
- Различни последователности на updates
- Забравени temporary configurations

**Защо е проблем:**
- **Unreproducible environments**: "Works on my machine" problems
- **Snowflake servers**: Уникални конфигурации, които никой не разбира напълно
- **Deployment failures**: Работи на един сървър, но не на друг
- **Security risks**: Inconsistent security patches
- **Difficult debugging**: Неизвестно състояние на системата

**Как Immutable Infrastructure решава проблема:**
- **Никакви промени след deployment**: Сървърите не се модифицират
- **Replace, don't update**: Нова версия = нов сървър
- **Reproducibility**: Всеки deployment е идентичен
- **Version control**: Infrastructure дефинирана като код
- **Clean rollback**: Предишни версии са винаги достъпни
- **Known state**: Винаги знаете точното състояние на системата

</CollapsibleSection>

</ExerciseCard>

<ExerciseCard difficulty="medium">

### Задача 10: Kubernetes HorizontalPodAutoscaler

Kubernetes HorizontalPodAutoscaler е конфигуриран по следния начин:

```yaml
spec:
  minReplicas: 2
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70
```

**a)** Какво ще се случи когато average CPU utilization надвиши 70%?

**b)** Какво ще се случи ако трафикът падне почти до нула?

**c)** Защо може да зададете `minReplicas: 2` вместо `minReplicas: 1`?

<CollapsibleSection title="Решение" icon="✅">

**a) При CPU > 70%:**
- Kubernetes автоматично **добавя нови pods** (replicas)
- Скалирането е постепенно, не instant
- Продължава да добавя докато average CPU падне под 70%
- Максимумът е 10 replicas (maxReplicas limit)

**b) При много нисък трафик:**
- Kubernetes **намалява броя на pods** към минимума
- Но **никога под 2** (minReplicas constraint)
- Дори при 0% CPU utilization остават 2 pods
- Scale-down е по-консервативен от scale-up (избягва осцилации)

**c) Защо minReplicas: 2:**
- **High availability**: Ако един pod се срине, друг е наличен
- **Rolling updates**: Позволява zero-downtime deployments
- **Load distribution**: Избягва single point of failure
- **Startup time**: Избягва cold starts при sudden traffic spike
- **Redundancy**: Защита срещу node failures

</CollapsibleSection>

</ExerciseCard>

---

## Трудни Упражнения (HARD)

<ExerciseCard difficulty="hard">

### Задача 11: Kubernetes Deployment YAML

**Практическо упражнение:** Напишете Kubernetes Deployment YAML файл за Node.js приложение със следните изисквания:
- Deployment name: `web-frontend`
- Container image: `myregistry/frontend:2.1`
- Брой replicas: 4
- Container port: 3000
- Label за pods: `app: frontend`

<CollapsibleSection title="Подсказка" icon="💡">

Структурата е: apiVersion, kind, metadata, spec (с replicas, selector, template).

</CollapsibleSection>

<CollapsibleSection title="Решение" icon="✅">

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: web-frontend
  labels:
    app: frontend
spec:
  replicas: 4
  selector:
    matchLabels:
      app: frontend
  template:
    metadata:
      labels:
        app: frontend
    spec:
      containers:
      - name: frontend
        image: myregistry/frontend:2.1
        ports:
        - containerPort: 3000
```

**Обяснение на ключовите части:**
- `selector.matchLabels` трябва да съвпада с `template.metadata.labels`
- `replicas: 4` указва желания брой pods
- `containerPort: 3000` expose-ва порта от container
- Labels се използват за service discovery и routing

</CollapsibleSection>

</ExerciseCard>

<ExerciseCard difficulty="hard">

### Задача 12: Ride-Sharing Microservices Design

Архитектурирате ride-sharing приложение. Системата трябва да обработва:
- User authentication
- Driver location tracking (high-frequency GPS updates)
- Ride matching algorithm
- Payment processing
- Trip history и receipts
- Push notifications

**a)** Проектирайте microservices архитектура като идентифицирате 5-6 сервиза и техните отговорности.

**b)** Кой сервиз(и) вероятно ще се нуждае(ят) от най-агресивно auto-scaling и защо?

**c)** Идентифицирайте два сервиза, които трябва да комуникират синхронно и два, които биха могли да комуникират асинхронно. Обосновете изборите си.

<CollapsibleSection title="Решение" icon="✅">

**a) Microservices архитектура:**

| Сервиз | Отговорности |
|--------|--------------|
| **Auth Service** | User/driver authentication, JWT tokens, session management |
| **Location Service** | Real-time GPS tracking, driver position updates, geospatial queries |
| **Matching Service** | Ride request handling, driver-rider matching algorithm, ETA calculations |
| **Payment Service** | Payment processing, fare calculations, refunds, payment methods |
| **Trip Service** | Trip lifecycle, history storage, receipts generation |
| **Notification Service** | Push notifications, SMS, email alerts |

**b) Aggressive auto-scaling:**
- **Location Service**: High-frequency GPS updates от всички active drivers (може да са хиляди updates/секунда)
- **Matching Service**: При пикови часове (rush hour) много заявки за rides се обработват едновременно
- **Reasoning**: Тези сервизи имат variable, spike-prone workloads

**c) Синхронна vs Асинхронна комуникация:**

**Синхронна (трябва незабавен отговор):**
1. **Auth → Matching**: Проверка на потребителя преди да се направи ride request
2. **Matching → Payment**: Валидация на payment method преди потвърждение на ride

**Асинхронна (може да изчака):**
1. **Trip → Notification**: След завършване на trip, notification за receipt може да е async
2. **Payment → Trip**: Запис на payment details в trip history не е time-critical

</CollapsibleSection>

</ExerciseCard>

<ExerciseCard difficulty="hard">

### Задача 13: Imperative vs Declarative Configuration

Сравнете тези два подхода за update на application configuration:

**Подход A (Imperative):**
```bash
ssh production-server-01
vim /etc/myapp/config.yaml  # ръчно редактиране
systemctl restart myapp
# Повторете за servers 02, 03, 04...
```

**Подход B (Declarative):**
```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: myapp-config
data:
  database_url: "postgres://db.example.com:5432"
  cache_ttl: "300"
---
# Reference in Deployment, then: kubectl apply -f config.yaml
```

**a)** Изброете три конкретни проблема, които могат да възникнат с Подход A.

**b)** Как Подход B адресира всеки от тези проблеми?

**c)** Каква допълнителна практика трябва да допълни Подход B за максимална ефективност?

<CollapsibleSection title="Решение" icon="✅">

**a) Проблеми с Imperative подход:**

1. **Human error**: Typos, забравени сървъри, inconsistent changes
2. **No audit trail**: Няма запис кой какво е променил и кога
3. **Configuration drift**: Сървърите стават различни с времето
4. **No rollback**: Трудно връщане към предишна конфигурация
5. **Time-consuming**: Manual process за всеки сървър

**b) Как Declarative адресира проблемите:**

| Проблем | Declarative решение |
|---------|---------------------|
| Human error | Single source of truth, applied consistently |
| No audit trail | Git history показва всички промени |
| Configuration drift | Същата config се apply-ва навсякъде |
| No rollback | Git revert към предишен commit |
| Time-consuming | `kubectl apply` - една команда |

**c) Допълнителни практики:**

1. **Version Control (Git)**: ConfigMap файловете се съхраняват в Git repository
2. **Code Review**: Промените минават през PR review преди apply
3. **CI/CD Pipeline**: Автоматично apply при merge
4. **GitOps**: Tools като ArgoCD автоматично sync-ват cluster state с Git
5. **Secrets Management**: Използвайте separate secure storage за sensitive data

</CollapsibleSection>

</ExerciseCard>

<ExerciseCard difficulty="hard">

### Задача 14: Chaos Engineering

Netflix's "Chaos Monkey" случайно терминира production сервизи. Това изглежда контраинтуитивно - защо умишлено да причинявате сривове?

**a)** Обяснете логиката зад chaos engineering.

**b)** Какви design principles трябва да са на място *преди* да можете безопасно да практикувате chaos engineering?

**c)** Опишете един друг chaos engineering експеримент (освен random termination), който може да разкрие слабости в cloud-native система.

<CollapsibleSection title="Решение" icon="✅">

**a) Логиката зад Chaos Engineering:**

- **Proactive failure discovery**: Намирате слабости преди да засегнат клиентите
- **Build confidence**: Доказвате, че системата издържа на реални failure conditions
- **Validate assumptions**: Тествате дали resilience mechanisms наистина работят
- **Continuous improvement**: Идентифицирате области за подобрение
- **"Anti-fragile" systems**: Системи, които стават по-силни чрез controlled stress

**Философия:** "По-добре контролиран срив в working hours, отколкото непредвиден срив в 3 AM"

**b) Prerequisites за безопасен Chaos Engineering:**

1. **Observability**: Трябва да виждате какво се случва (metrics, logs, traces)
2. **Redundancy**: Multiple replicas на всеки сервиз
3. **Self-healing**: Auto-restart, health checks, circuit breakers
4. **Graceful degradation**: Partial failures не причиняват total outage
5. **Rollback capability**: Бързо спиране на експеримента ако нещо се обърка
6. **Blast radius control**: Ограничаване на impact scope
7. **Steady state definition**: Знаете какво е "нормално"

**c) Други Chaos Engineering експерименти:**

1. **Network latency injection**: Добавете artificial delay между сервизи
2. **Resource exhaustion**: Консумирайте CPU/memory да видите поведението
3. **Dependency failures**: Симулирайте database или external API недостъпност
4. **Zone/Region failures**: Терминирайте цяла availability zone
5. **Clock skew**: Десинхронизирайте system clocks между nodes
6. **DNS failures**: Симулирайте DNS resolution problems

</CollapsibleSection>

</ExerciseCard>

<ExerciseCard difficulty="hard">

### Задача 15: Cloud-Native Migration Roadmap

**Case Study Analysis:**

Компания е направила "lift and shift" на монолитното си Java приложение към AWS EC2 instances. Сега го наричат "cloud application". CTO твърди, че са постигнали cloud-native архитектура.

Оценете това твърдение като:

**a)** Разграничите между "cloud-enabled" и "cloud-native"

**b)** Идентифицирате поне четири cloud-native характеристики, които този подход вероятно липсват

**c)** Предложите roadmap от три конкретни стъпки за движение към истинска cloud-native архитектура

<CollapsibleSection title="Решение" icon="✅">

**a) Cloud-Enabled vs Cloud-Native:**

| Cloud-Enabled | Cloud-Native |
|---------------|--------------|
| Legacy app relocated to cloud | Designed for cloud from inception |
| Same monolithic architecture | Microservices architecture |
| VM-based deployment | Container-based deployment |
| Manual scaling | Auto-scaling built-in |
| Traditional deployment cycles | CI/CD with frequent releases |

**CTO's claim is incorrect** - това е cloud-enabled, не cloud-native.

**b) Липсващи Cloud-Native характеристики:**

1. **Microservices decomposition**: Монолитът е still един голям app
2. **Containerization**: EC2 instances не са containers
3. **Auto-scaling**: Вероятно manual scaling или basic EC2 auto-scaling
4. **Self-healing**: Няма automatic recovery mechanisms
5. **Declarative configuration**: Вероятно manual infrastructure management
6. **Immutable infrastructure**: Servers вероятно се patch-ват in place
7. **CI/CD pipeline**: Deployment вероятно е still manual/slow
8. **Observability**: Липсва distributed tracing, comprehensive metrics

**c) Migration Roadmap:**

**Step 1: Containerization (3-6 months)**
- Package монолита в Docker container
- Setup container registry
- Implement basic CI/CD pipeline
- Deploy на managed Kubernetes (EKS)
- Gain operational experience с containers

**Step 2: Strangler Pattern Decomposition (6-12 months)**
- Идентифицирайте bounded contexts в монолита
- Extract първите 2-3 microservices (start with least coupled)
- Implement API gateway
- Setup service mesh за communication
- Establish observability (Prometheus, Grafana, Jaeger)

**Step 3: Full Cloud-Native Transformation (12-18 months)**
- Continue microservices extraction
- Implement auto-scaling policies
- Add chaos engineering practices
- Adopt GitOps за infrastructure management
- Implement advanced resilience patterns (circuit breakers, bulkheads)

</CollapsibleSection>

</ExerciseCard>
