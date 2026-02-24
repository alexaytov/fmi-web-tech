---
title: Cloud-Native Development
theme: white
highlightTheme: github
transition: slide
---

# Cloud-Native Development

### Въведение в Cloud-Native Архитектура

Note:
Добре дошли в лекцията за Cloud-Native разработка. Ще научим как модерните организации изграждат приложения, които наистина използват силата на облачните услуги.

---

## Учебни Цели

- Дефинирате cloud-native и обясните основните принципи
- Идентифицирате петте технологични стълба
- Разграничите cloud-native от cloud-enabled
- Разберете ролята на Kubernetes
- Свържете cloud-native с DevOps практики

Note:
До края на лекцията ще можете да обясните защо cloud-native е стандарт за нови приложения.

---

## Защо Cloud-Native?

--

### Бизнес Драйвери

<!-- .element: class="fragment" data-fragment-index="1" -->
🚀 **По-бързи иновации** - Deploy хиляди пъти дневно

<!-- .element: class="fragment" data-fragment-index="2" -->
💰 **Намалени разходи** - Плащате само за реално използвани ресурси

<!-- .element: class="fragment" data-fragment-index="3" -->
🛡️ **Подобрена надеждност** - Системи, които издържат на сривове

Note:
Amazon прави deploy хиляди пъти дневно. Cloud-native архитектурата прави това възможно.

--

### Технически Драйвери

- 👨‍💻 **Developer Productivity** - Малки, фокусирани екипи
- ⚙️ **Operational Efficiency** - Автоматизация навсякъде
- 📈 **Scalability On-Demand** - Скалирайте за Black Friday, намалете след това

Note:
Инженерите прекарват повече време в изграждане на features, а не в борба с инфраструктура.

---

## Проблемът с Монолитите

--

### Традиционен Подход

```
┌─────────────────────────────────────┐
│        MONOLITHIC APPLICATION       │
│  ┌───────────────────────────────┐  │
│  │   User Auth + Products +      │  │
│  │   Cart + Orders + Payments    │  │
│  │   + Notifications + Reports   │  │
│  └───────────────────────────────┘  │
│           ALL IN ONE 📦             │
└─────────────────────────────────────┘
```

Note:
Всичко е в едно - една грешка може да срине цялото приложение.

--

### Предизвикателства

| Проблем | Последица |
|---------|-----------|
| Single Point of Failure | Продължителен downtime |
| Трудно скалиране | Загуба на ресурси |
| Бавни deployments | Седмици между releases |
| Technology lock-in | Не може да се сменят технологии |

Note:
Bug в product reviews може да срине checkout системата.

---

## Какво е Cloud-Native?

--

### Дефиниция

> **Cloud-native е философия за дизайн** на приложения, които напълно използват предимствата на cloud computing.

Ключова идея: **НЕ** къде работи приложението, а **КАК** е проектирано.

Note:
CNCF дефинира cloud-native технологиите като тези, които позволяват изграждане на scalable приложения в динамични среди.

--

### Четири Основни Принципа

```
┌─────────────────────────────────────────────┐
│         CLOUD-NATIVE PRINCIPLES             │
├───────────────┬───────────────┬─────────────┤
│ 📈 SCALABILITY │ ⚙️ AUTOMATION  │ 🛡️ RESILIENCE│
├───────────────┴───────────────┴─────────────┤
│           👁️ OBSERVABILITY                   │
└─────────────────────────────────────────────┘
```

Note:
Тези четири принципа ръководят всяко cloud-native решение.

---

## Петте Технологични Стълба

--

### Обзор

```
┌─────────────────────────────────────────────┐
│        CLOUD-NATIVE PILLARS                 │
├──────────┬──────────┬──────────┬───────────┤
│MICROSER- │CONTAINERS│KUBERNETES│ IMMUTABLE │
│  VICES   │  🐳      │   ☸️      │  INFRA    │
├──────────┴──────────┴──────────┴───────────┤
│         DECLARATIVE APIs 📝                 │
└─────────────────────────────────────────────┘
```

Note:
Всеки стълб допринася за цялостната архитектура.

---

## Стълб 1: Microservices

--

### От Монолит към Микросервизи

```
┌────────────────────────────────────────────┐
│          MICROSERVICES ARCHITECTURE        │
├──────────┬──────────┬──────────┬──────────┤
│   User   │ Product  │   Cart   │  Order   │
│ Service  │ Service  │ Service  │ Service  │
├──────────┼──────────┼──────────┼──────────┤
│ Payment  │ Inventory│ Shipping │Notificat.│
│ Service  │ Service  │ Service  │ Service  │
└──────────┴──────────┴──────────┴──────────┘
```

Note:
Всеки сервиз е независим, deployable и scalable.

--

### Ползи на Микросервизите

<!-- .element: class="fragment" -->
🚀 **Independent Deployment** - Update payment без да пипате inventory

<!-- .element: class="fragment" -->
🔧 **Technology Freedom** - Python за ML, Go за performance

<!-- .element: class="fragment" -->
🛡️ **Fault Isolation** - Notification fail не засяга checkout

<!-- .element: class="fragment" -->
📈 **Targeted Scaling** - Скалирайте само натоварените сервизи

Note:
Микросервизите позволяват на малки екипи да работят независимо.

---

## Стълб 2: Containers

--

### Какво е Container?

```
┌───────────────────────────────────────┐
│              CONTAINER 🐳              │
│  ┌─────────────────────────────────┐  │
│  │      Application Code           │  │
│  ├─────────────────────────────────┤  │
│  │   Runtime (Node, Python, Java)  │  │
│  ├─────────────────────────────────┤  │
│  │      System Libraries           │  │
│  ├─────────────────────────────────┤  │
│  │      Configuration Files        │  │
│  └─────────────────────────────────┘  │
└───────────────────────────────────────┘
```

Note:
Контейнерите пакетират код и зависимости заедно - работи навсякъде еднакво.

--

### Containers vs VMs

| Aspect | VMs | Containers |
|--------|-----|------------|
| Size | Gigabytes | Megabytes |
| Startup | Minutes | Seconds |
| OS | Full OS | Shared kernel |
| Density | 10-20/host | 100s/host |

Note:
Контейнерите са много по-леки и по-бързи от виртуалните машини.

--

### Docker Example

```dockerfile
FROM python:3.9-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
EXPOSE 8000
CMD ["python", "app.py"]
```

Note:
Dockerfile описва как да се построи контейнер - репродуцируемо и версионирано.

---

## Стълб 3: Kubernetes

--

### Защо Orchestration?

Един контейнер е лесен. Хиляди контейнери?

- 🤔 Кой сървър да изпълни контейнера?
- 💥 Какво се случва при срив?
- 🔗 Как контейнерите се намират?
- 🔄 Как да update-нем без downtime?
- 📈 Как да скалираме?

Note:
Kubernetes отговаря на всички тези въпроси автоматично.

--

### Kubernetes Architecture

```
┌────────────────────────────────────────────┐
│           KUBERNETES CLUSTER               │
│  ┌──────────────────────────────────────┐  │
│  │         CONTROL PLANE                │  │
│  │  API Server │ Scheduler │ etcd       │  │
│  └──────────────────────────────────────┘  │
│  ┌──────────────────────────────────────┐  │
│  │          WORKER NODES                │  │
│  │  ┌─────────┐  ┌─────────┐            │  │
│  │  │ Pod Pod │  │ Pod Pod │   ...      │  │
│  │  └─────────┘  └─────────┘            │  │
│  └──────────────────────────────────────┘  │
└────────────────────────────────────────────┘
```

Note:
Control plane взема решения, worker nodes изпълняват контейнерите.

--

### Self-Healing

Kubernetes автоматично:

- 🔄 Рестартира crashed контейнери
- 🔀 Премества при node failure
- ❌ Убива нездрави контейнери
- ✅ Не изпраща трафик докато не са готови

Note:
Self-healing намалява драматично нощните будни дежурства.

---

## Стълб 4: Immutable Infrastructure

--

### Mutable vs Immutable

**Традиционен (Mutable):**
```
Server → Patch → Config → Update → ???
 Day 1   Day 30   Day 60    Day 90  😱
```

**Cloud-Native (Immutable):**
```
v1.0 Deploy → v1.1 Deploy → v1.2 Deploy
  (Server A)    (Server B)    (Server C)
              Server A 🗑️   Server B 🗑️
```

Note:
Не ъпдейтваме сървъри - заменяме ги с нови версии.

--

### Ползи от Immutability

- ✅ **Репродуцируемост** - Всеки deploy е идентичен
- ✅ **Rollback** - Предишни версии са винаги достъпни
- ✅ **Без drift** - Няма "снежинки" сървъри
- ✅ **Опростен debug** - Известно начално състояние

Note:
Вместо SSH и ръчен ъпдейт - нов image, deploy, ready.

---

## Стълб 5: Declarative APIs

--

### Imperative vs Declarative

**Imperative (КАК):**
```bash
docker run my-app
docker run my-app
docker run my-app
# Сега имам 3 instances... надявам се?
```

**Declarative (КАКВО):**
```yaml
apiVersion: apps/v1
kind: Deployment
spec:
  replicas: 3  # Искам 3 instances
```

Note:
Декларативният подход казва КАКВО искаме, не КАК да го постигнем.

--

### Self-Correction

```
You: "I want 3 replicas"
     ↓
Kubernetes: "OK, I see 2 running"
     ↓
Kubernetes: "Starting 1 more..."
     ↓
Kubernetes: "Done! 3 running ✅"
```

Note:
Системата сама се коригира към желаното състояние.

---

## Cloud-Native vs Cloud-Enabled

--

### Сравнение

```
┌─────────────────────────────────────────────┐
│  CLOUD-NATIVE      │    CLOUD-ENABLED       │
├────────────────────┼────────────────────────┤
│ Born in the cloud  │ Migrated to cloud      │
│ Microservices      │ Monolith               │
│ Containers         │ VMs                    │
│ Auto-scaling       │ Manual scaling         │
│ Self-healing       │ Manual recovery        │
└────────────────────┴────────────────────────┘
```

Note:
Cloud-enabled е просто lift-and-shift на съществуващо приложение.

--

### Key Insight

> Преместването на монолит в AWS **НЕ** го прави cloud-native.

Cloud-native е **архитектурен подход**, не локация.

Note:
Много компании правят тази грешка - плащат за cloud без да получат ползите.

---

## DevOps и Cloud-Native

--

### CI/CD Pipeline

```
Code → Build → Test → Deploy → Monitor
  │      │       │       │        │
  └──────┴───────┴───────┴────────┘
         AUTOMATED 🤖
```

Note:
Cloud-native архитектурата позволява бързи, надеждни deployment цикли.

--

### Infrastructure as Code

```yaml
# terraform / kubernetes manifests
resources:
  - type: compute.v1.instance
    name: web-server
    properties:
      machineType: n1-standard-1
      zone: europe-west1-b
```

- 📝 Version controlled
- 🔄 Reproducible
- 👥 Code reviewable

Note:
Инфраструктурата е код - същите практики като за приложенията.

---

<!-- .slide: data-background="#2d5986" -->

## Обобщение

--

### Ключови Концепции

```
CLOUD-NATIVE = Design Philosophy
             + Microservices
             + Containers
             + Kubernetes
             + Immutable Infra
             + Declarative APIs
```

--

### Takeaways

<!-- .element: class="fragment" -->
✅ Cloud-native е **философия за дизайн**, не локация

<!-- .element: class="fragment" -->
✅ Петте стълба работят **заедно** за scalability и resilience

<!-- .element: class="fragment" -->
✅ Cloud-native е **стандарт** за нови приложения

<!-- .element: class="fragment" -->
✅ Следваща стъпка: containers, Kubernetes, CI/CD

---

<!-- .slide: data-background="#4d7e65" -->

# Въпроси?

### Благодаря за вниманието!

Note:
Готов съм да отговоря на вашите въпроси за cloud-native архитектура.
