---
title: "Лекция"
sidebar_position: 1
slug: lecture
tags: [cloud-native, containers, kubernetes, microservices, devops]
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

# Въведение в Cloud-Native Разработка

<ViewSlidesButton lectureSlug="cloud-native" />

<QuickSummary>

**Ключови познания:**
- **Cloud-native** е философия за дизайн на приложения, не просто локация в облака
- **Петте стълба**: Microservices, Containers, Kubernetes, Immutable Infrastructure, Declarative APIs
- **Cloud-native ≠ Cloud-enabled**: "lift and shift" не е cloud-native
- **Kubernetes** автоматизира deployment, scaling и self-healing
- **DevOps практики** (CI/CD, IaC) са неразривно свързани с cloud-native

</QuickSummary>

<LearningObjectives objectives={[
  "Дефинирате cloud-native софтуер и обясните основните му принципи",
  "Идентифицирате петте технологични стълба на cloud-native архитектура",
  "Разграничавате cloud-native, cloud-enabled и традиционни архитектури",
  "Разберете ролята на Kubernetes и container orchestration",
  "Свържете cloud-native архитектура с DevOps и continuous delivery"
]} />

---

## Въведение: Защо Cloud-Native?

<WhyBox title="Защо cloud-native е важен за съвременната разработка?">

Представете си Netflix с над 230 милиона абонати, стриймващ милиарди часове съдържание месечно. По време на пиковите часове системите им трябва да издържат на масивни traffic spikes без никакъв проблем.

**Как го постигат?** Отговорът е **cloud-native архитектура** - фундаментална промяна в начина, по който мислим за изграждане на софтуер.

</WhyBox>

### Бизнес Драйвери

<Grid columns={3}>
  <Card title="По-бързи иновации" icon="🚀">
    Amazon прави deploy хиляди пъти дневно. Нови features достигат до клиентите за часове, не за месеци.
  </Card>
  <Card title="Намалени разходи" icon="💰">
    Плащате само за ресурси, които реално използвате. Без поддръжка на idle сървъри за пикови натоварвания.
  </Card>
  <Card title="Подобрена надеждност" icon="🛡️">
    Системи, проектирани да издържат на сривове. Непрекъсната наличност дори по време на updates.
  </Card>
</Grid>

### Технически Драйвери

<Grid columns={3}>
  <Card title="Developer Productivity" icon="👨‍💻">
    Малки, фокусирани екипи работят независимо. По-бърз feedback цикъл ускорява разработката.
  </Card>
  <Card title="Operational Efficiency" icon="⚙️">
    Автоматизацията елиминира повтарящи се задачи. Инфраструктурата се управлява като код.
  </Card>
  <Card title="Scalability On-Demand" icon="📈">
    Скалирайте за Black Friday, намалете след това. Глобален deployment става управляем.
  </Card>
</Grid>

---

## Проблемът с Традиционните Подходи

<InfoBox title="Ограничения на монолитните приложения">

Традиционните монолитни приложения страдат от значителни ограничения:

| Предизвикателство | Традиционен Подход | Последица |
|-------------------|-------------------|-----------|
| **Single Point of Failure** | Един bug може да срине цялото приложение | Продължителен downtime, загуба на приходи |
| **Трудности при скалиране** | Трябва да скалирате цялото приложение заедно | Разхищение на ресурси |
| **Бавни deployments** | Промените изискват пълен redeploy | Седмици между releases |
| **Technology lock-in** | Цялото приложение използва един технологичен стек | Не може да приемете по-добри инструменти |
| **Team Dependencies** | Всички разработчици работят в една и съща codebase | Координационен overhead |

</InfoBox>

<WarningBox title="Реален пример">

Представете си e-commerce сайт, където bug в product review функционалността сваля цялата checkout система. В монолитна архитектура това не е просто възможно - **то е често срещано**.

</WarningBox>

---

## Какво е Cloud-Native Архитектура?

<InfoBox title="Дефиниция">

**Cloud-native е философия за дизайн** за изграждане на приложения, които напълно използват предимствата на cloud computing.

Cloud Native Computing Foundation (CNCF) дефинира cloud-native технологиите като тези, които:

> "Позволяват на организациите да изграждат и изпълняват мащабируеми приложения в модерни, динамични среди като public, private и hybrid clouds."

**Ключовото прозрение:** Cloud-native не е за **къде** работи приложението ви, а за **как** е проектирано.

</InfoBox>

---

## Основни Принципи на Cloud-Native

### 1. Проектиране за Мащабируемост (Scalability)

<InfoBox title="Хоризонтално скалиране">

Cloud-native приложенията се скалират хоризонтално - добавяне на повече инстанции, а не по-големи машини.

**Ключови практики:**
- **Auto-scaling**: Системите автоматично добавят или премахват ресурси според натоварването
- **Load Balancing**: Трафикът се разпределя между множество инстанции
- **Decoupled Services**: Всеки компонент се скалира независимо
- **Event-Driven Patterns**: Асинхронната комуникация обработва променливи натоварвания

</InfoBox>

**Пример:** По време на flash sale, e-commerce платформа автоматично добавя checkout service инстанции, докато product catalog сервизът остава непроменен.

### 2. Обхващане на Автоматизацията (Automation)

Ръчните процеси са враг на надеждността. Cloud-native системите автоматизират всичко възможно:

- Infrastructure provisioning (сървъри, мрежи, storage)
- Application deployment и updates
- Scaling decisions
- Security scanning и compliance checks
- Backup и recovery процедури

<SuccessBox title="Infrastructure as Code (IaC)">

Вместо да кликате през cloud console интерфейси, екипите дефинират инфраструктурата във version-controlled файлове. Това гарантира:
- **Репродуцируемост**: Същата конфигурация всеки път
- **Одитируемост**: Проследяване на всички промени във времето
- **Колаборация**: Review на infrastructure changes като код

</SuccessBox>

### 3. Изграждане за Устойчивост (Resilience)

<InfoBox title="Resilience Strategies">

Cloud-native системите приемат, че сривове ще се случват и проектират съответно:

- **Redundancy**: Множество копия на всичко, на множество локации
- **Self-Healing**: Системите автоматично откриват и се възстановяват от сривове
- **Graceful Degradation**: Частични сривове не причиняват пълни прекъсвания
- **Chaos Engineering**: Умишлено инжектиране на сривове за тестване на устойчивост

</InfoBox>

**Netflix's Подход:** Техният известен "Chaos Monkey" инструмент случайно терминира сервизи в production, гарантирайки че екипите изграждат системи, които оцеляват на реални сривове.

### 4. Приоритизиране на Наблюдаемостта (Observability)

Не можете да поправите това, което не можете да видите. Cloud-native системите са изградени да бъдат наблюдаеми.

<Grid columns={3}>
  <Card title="Metrics" icon="📊">
    Числови измервания - response time, error rate, resource usage
  </Card>
  <Card title="Logs" icon="📝">
    Подробни записи на събития и действия
  </Card>
  <Card title="Traces" icon="🔍">
    End-to-end видимост на request flows през сервизите
  </Card>
</Grid>

---

## Петте Технологични Стълба

Cloud-native архитектурата се основава на пет взаимосвързани технологични основи. Разбирането на всеки един - и как работят заедно - е от съществено значение.

<svg viewBox="0 0 600 180" style={{maxWidth: '600px', margin: '1rem auto', display: 'block'}}>
  <defs>
    <linearGradient id="pillarGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style={{stopColor:'#3498db'}}/>
      <stop offset="100%" style={{stopColor:'#2980b9'}}/>
    </linearGradient>
    <linearGradient id="pillarGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style={{stopColor:'#9b59b6'}}/>
      <stop offset="100%" style={{stopColor:'#8e44ad'}}/>
    </linearGradient>
    <linearGradient id="pillarGrad3" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style={{stopColor:'#27ae60'}}/>
      <stop offset="100%" style={{stopColor:'#1e8449'}}/>
    </linearGradient>
    <linearGradient id="pillarGrad4" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style={{stopColor:'#e67e22'}}/>
      <stop offset="100%" style={{stopColor:'#d35400'}}/>
    </linearGradient>
    <filter id="pillarShadow" x="-5%" y="-5%" width="110%" height="115%">
      <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000" floodOpacity="0.15"/>
    </filter>
  </defs>
  <style>{`
    .pillar-title { opacity: 0; animation: pillarFadeIn 0.4s ease-out 0.1s forwards; }
    .pillar-base { opacity: 0; transform: translateY(10px); animation: pillarSlideUp 0.4s ease-out 0.2s forwards; }
    .pillar-box { opacity: 0; transform: scale(0.9); }
    .pillar-1 { animation: pillarPopIn 0.3s ease-out 0.4s forwards; }
    .pillar-2 { animation: pillarPopIn 0.3s ease-out 0.5s forwards; }
    .pillar-3 { animation: pillarPopIn 0.3s ease-out 0.6s forwards; }
    .pillar-4 { animation: pillarPopIn 0.3s ease-out 0.7s forwards; }
    @keyframes pillarFadeIn { to { opacity: 1; } }
    @keyframes pillarSlideUp { to { opacity: 1; transform: translateY(0); } }
    @keyframes pillarPopIn { to { opacity: 1; transform: scale(1); } }
  `}</style>
  <rect className="pillar-title" x="30" y="15" width="540" height="35" rx="6" fill="#2c3e50"/>
  <text className="pillar-title" x="300" y="40" fill="white" fontFamily="system-ui, sans-serif" fontSize="14" fontWeight="700" textAnchor="middle">CLOUD-NATIVE ARCHITECTURE</text>
  <g className="pillar-box pillar-1" filter="url(#pillarShadow)">
    <rect x="40" y="60" width="120" height="60" rx="6" fill="url(#pillarGrad1)"/>
    <text x="100" y="88" fill="white" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="600" textAnchor="middle">MICROSERVICES</text>
    <text x="100" y="108" fontSize="16" textAnchor="middle">🔧</text>
  </g>
  <g className="pillar-box pillar-2" filter="url(#pillarShadow)">
    <rect x="170" y="60" width="120" height="60" rx="6" fill="url(#pillarGrad2)"/>
    <text x="230" y="88" fill="white" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="600" textAnchor="middle">CONTAINERS</text>
    <text x="230" y="108" fontSize="16" textAnchor="middle">🐳</text>
  </g>
  <g className="pillar-box pillar-3" filter="url(#pillarShadow)">
    <rect x="300" y="60" width="120" height="60" rx="6" fill="url(#pillarGrad3)"/>
    <text x="360" y="88" fill="white" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="600" textAnchor="middle">KUBERNETES</text>
    <text x="360" y="108" fontSize="16" textAnchor="middle">☸️</text>
  </g>
  <g className="pillar-box pillar-4" filter="url(#pillarShadow)">
    <rect x="430" y="60" width="120" height="60" rx="6" fill="url(#pillarGrad4)"/>
    <text x="490" y="82" fill="white" fontFamily="system-ui, sans-serif" fontSize="10" fontWeight="600" textAnchor="middle">IMMUTABLE</text>
    <text x="490" y="96" fill="white" fontFamily="system-ui, sans-serif" fontSize="10" fontWeight="600" textAnchor="middle">INFRA</text>
    <text x="490" y="114" fontSize="16" textAnchor="middle">🔒</text>
  </g>
  <rect className="pillar-base" x="40" y="130" width="510" height="35" rx="6" fill="#34495e"/>
  <text className="pillar-base" x="295" y="153" fill="white" fontFamily="system-ui, sans-serif" fontSize="12" fontWeight="600" textAnchor="middle">📝 DECLARATIVE APIs</text>
</svg>

---

### Стълб 1: Microservices Архитектура

<InfoBox title="Дефиниция">

**Microservices** е архитектурен стил, който структурира приложение като колекция от малки, автономни сервизи, всеки работещ в собствен процес и комуникиращ чрез леки механизми.

</InfoBox>

#### От Монолит към Микросервизи

Представете си традиционно e-commerce приложение като единична, голяма codebase, обработваща: User authentication, Product catalog, Shopping cart, Order processing, Payment handling, Inventory management, Shipping calculation, Notification sending.

В microservices архитектура, всяка от тези функции става независим сервиз:

<svg viewBox="0 0 600 240" style={{maxWidth: '600px', margin: '1rem auto', display: 'block'}}>
  <defs>
    <linearGradient id="msGradL1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style={{stopColor:'#3498db'}}/>
      <stop offset="100%" style={{stopColor:'#2980b9'}}/>
    </linearGradient>
    <linearGradient id="msGradL2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style={{stopColor:'#9b59b6'}}/>
      <stop offset="100%" style={{stopColor:'#8e44ad'}}/>
    </linearGradient>
    <linearGradient id="msGradL3" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style={{stopColor:'#27ae60'}}/>
      <stop offset="100%" style={{stopColor:'#1e8449'}}/>
    </linearGradient>
    <linearGradient id="msGradL4" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style={{stopColor:'#e67e22'}}/>
      <stop offset="100%" style={{stopColor:'#d35400'}}/>
    </linearGradient>
    <filter id="msShadowL" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000" floodOpacity="0.15"/>
    </filter>
  </defs>
  <style>{`
    .ms-title-l { opacity: 0; animation: msFadeInL 0.4s ease-out 0.1s forwards; }
    .ms-box-l { opacity: 0; transform: scale(0.8); }
    .ms-1-l { animation: msPopInL 0.3s ease-out 0.2s forwards; }
    .ms-2-l { animation: msPopInL 0.3s ease-out 0.3s forwards; }
    .ms-3-l { animation: msPopInL 0.3s ease-out 0.4s forwards; }
    .ms-4-l { animation: msPopInL 0.3s ease-out 0.5s forwards; }
    .ms-5-l { animation: msPopInL 0.3s ease-out 0.6s forwards; }
    .ms-6-l { animation: msPopInL 0.3s ease-out 0.7s forwards; }
    .ms-7-l { animation: msPopInL 0.3s ease-out 0.8s forwards; }
    .ms-8-l { animation: msPopInL 0.3s ease-out 0.9s forwards; }
    @keyframes msFadeInL { to { opacity: 1; } }
    @keyframes msPopInL { to { opacity: 1; transform: scale(1); } }
  `}</style>
  <rect className="ms-title-l" x="50" y="10" width="500" height="30" rx="6" fill="#2c3e50"/>
  <text className="ms-title-l" x="300" y="32" fill="white" fontFamily="system-ui, sans-serif" fontSize="13" fontWeight="700" textAnchor="middle">MICROSERVICES ARCHITECTURE</text>
  <g className="ms-box-l ms-1-l" filter="url(#msShadowL)">
    <rect x="60" y="55" width="110" height="65" rx="6" fill="url(#msGradL1)"/>
    <text x="115" y="82" fill="white" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="600" textAnchor="middle">User Service</text>
    <text x="115" y="105" fontSize="16" textAnchor="middle">👤</text>
  </g>
  <g className="ms-box-l ms-2-l" filter="url(#msShadowL)">
    <rect x="185" y="55" width="110" height="65" rx="6" fill="url(#msGradL2)"/>
    <text x="240" y="82" fill="white" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="600" textAnchor="middle">Product Service</text>
    <text x="240" y="105" fontSize="16" textAnchor="middle">📦</text>
  </g>
  <g className="ms-box-l ms-3-l" filter="url(#msShadowL)">
    <rect x="310" y="55" width="110" height="65" rx="6" fill="url(#msGradL3)"/>
    <text x="365" y="82" fill="white" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="600" textAnchor="middle">Cart Service</text>
    <text x="365" y="105" fontSize="16" textAnchor="middle">🛒</text>
  </g>
  <g className="ms-box-l ms-4-l" filter="url(#msShadowL)">
    <rect x="435" y="55" width="110" height="65" rx="6" fill="url(#msGradL4)"/>
    <text x="490" y="82" fill="white" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="600" textAnchor="middle">Order Service</text>
    <text x="490" y="105" fontSize="16" textAnchor="middle">📋</text>
  </g>
  <g className="ms-box-l ms-5-l" filter="url(#msShadowL)">
    <rect x="60" y="135" width="110" height="65" rx="6" fill="url(#msGradL4)"/>
    <text x="115" y="162" fill="white" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="600" textAnchor="middle">Payment Service</text>
    <text x="115" y="185" fontSize="16" textAnchor="middle">💳</text>
  </g>
  <g className="ms-box-l ms-6-l" filter="url(#msShadowL)">
    <rect x="185" y="135" width="110" height="65" rx="6" fill="url(#msGradL3)"/>
    <text x="240" y="162" fill="white" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="600" textAnchor="middle">Inventory Service</text>
    <text x="240" y="185" fontSize="16" textAnchor="middle">📊</text>
  </g>
  <g className="ms-box-l ms-7-l" filter="url(#msShadowL)">
    <rect x="310" y="135" width="110" height="65" rx="6" fill="url(#msGradL2)"/>
    <text x="365" y="162" fill="white" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="600" textAnchor="middle">Shipping Service</text>
    <text x="365" y="185" fontSize="16" textAnchor="middle">🚚</text>
  </g>
  <g className="ms-box-l ms-8-l" filter="url(#msShadowL)">
    <rect x="435" y="135" width="110" height="65" rx="6" fill="url(#msGradL1)"/>
    <text x="490" y="162" fill="white" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="600" textAnchor="middle">Notification</text>
    <text x="490" y="185" fontSize="16" textAnchor="middle">🔔</text>
  </g>
</svg>

#### Ползи от Microservices

| Полза | Обяснение |
|-------|-----------|
| **Independent Deployment** | Обновете payment service без да пипате inventory |
| **Technology Freedom** | Използвайте Python за ML, Go за performance-critical сервизи |
| **Fault Isolation** | Срив на notification service не засяга checkout |
| **Team Autonomy** | Малки екипи притежават цели сервизи end-to-end |
| **Targeted Scaling** | Скалирайте само сервизите под натоварване |

<WarningBox title="Предизвикателства">

Microservices въвеждат сложност:
- Мрежовата комуникация добавя latency и точки на срив
- Distributed data management изисква внимателен дизайн
- Тестването през сервизи става по-сложно
- Operational overhead се увеличава (повече неща за мониторинг)

**Ключово прозрение:** Microservices не са автоматично по-добри. Те разменят един тип сложност (монолит) за друг (distribution). Правилният избор зависи от вашия контекст.

</WarningBox>

---

### Стълб 2: Containers

<InfoBox title="Дефиниция">

**Container** е стандартна единица софтуер, която пакетира код и всички негови зависимости, така че приложението да работи бързо и надеждно в различни computing среди.

</InfoBox>

#### Container Концепцията

Мислете за containers като за shipping containers в глобалната търговия. Преди стандартизираните shipping containers:
- Всяко пристанище имаше различно оборудване за разтоварване
- Стоките се пакетираха различно всеки път
- Преместването на товар между кораби, влакове и камиони беше трудоемко

Shipping containers решиха това със стандартизация. **Software containers правят същото:**

<svg viewBox="0 0 450 260" style={{maxWidth: '450px', margin: '1rem auto', display: 'block'}}>
  <defs>
    <linearGradient id="dockerBlueL" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style={{stopColor:'#0db7ed'}}/>
      <stop offset="100%" style={{stopColor:'#0a8dc4'}}/>
    </linearGradient>
    <linearGradient id="layerAppL" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style={{stopColor:'#9b59b6'}}/>
      <stop offset="100%" style={{stopColor:'#8e44ad'}}/>
    </linearGradient>
    <linearGradient id="layerRuntimeL" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style={{stopColor:'#3498db'}}/>
      <stop offset="100%" style={{stopColor:'#2980b9'}}/>
    </linearGradient>
    <linearGradient id="layerLibsL" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style={{stopColor:'#27ae60'}}/>
      <stop offset="100%" style={{stopColor:'#1e8449'}}/>
    </linearGradient>
    <linearGradient id="layerConfigL" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style={{stopColor:'#e67e22'}}/>
      <stop offset="100%" style={{stopColor:'#d35400'}}/>
    </linearGradient>
    <filter id="containerShadowL" x="-5%" y="-5%" width="110%" height="115%">
      <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#000" floodOpacity="0.15"/>
    </filter>
  </defs>
  <style>{`
    .container-frame-l { opacity: 0; animation: containerFadeInL 0.5s ease-out 0.1s forwards; }
    .container-layer-l { opacity: 0; transform: translateY(15px); }
    .layer-config-l { animation: layerBuildL 0.4s ease-out 0.3s forwards; }
    .layer-libs-l { animation: layerBuildL 0.4s ease-out 0.5s forwards; }
    .layer-runtime-l { animation: layerBuildL 0.4s ease-out 0.7s forwards; }
    .layer-app-l { animation: layerBuildL 0.4s ease-out 0.9s forwards; }
    .docker-whale-l { opacity: 0; transform-origin: center; animation: whalePopL 0.5s ease-out 1.1s forwards; }
    .container-title-l { opacity: 0; animation: containerFadeInL 0.4s ease-out 1.3s forwards; }
    @keyframes containerFadeInL { to { opacity: 1; } }
    @keyframes layerBuildL { to { opacity: 1; transform: translateY(0); } }
    @keyframes whalePopL { 0% { opacity: 0; transform: scale(0) rotate(-10deg); } 70% { transform: scale(1.1) rotate(5deg); } 100% { opacity: 1; transform: scale(1) rotate(0deg); } }
  `}</style>
  <g className="container-frame-l" filter="url(#containerShadowL)">
    <rect x="50" y="25" width="350" height="210" rx="10" fill="#f8f9fa" stroke="url(#dockerBlueL)" strokeWidth="3"/>
  </g>
  <text className="container-title-l" x="225" y="52" fill="#0db7ed" fontFamily="system-ui, sans-serif" fontSize="16" fontWeight="700" textAnchor="middle">CONTAINER</text>
  <g className="container-layer-l layer-config-l" filter="url(#containerShadowL)">
    <rect x="75" y="185" width="300" height="38" rx="5" fill="url(#layerConfigL)"/>
    <text x="225" y="209" fill="white" fontFamily="system-ui, sans-serif" fontSize="12" fontWeight="600" textAnchor="middle">Configuration Files</text>
  </g>
  <g className="container-layer-l layer-libs-l" filter="url(#containerShadowL)">
    <rect x="75" y="140" width="300" height="38" rx="5" fill="url(#layerLibsL)"/>
    <text x="225" y="164" fill="white" fontFamily="system-ui, sans-serif" fontSize="12" fontWeight="600" textAnchor="middle">System Libraries</text>
  </g>
  <g className="container-layer-l layer-runtime-l" filter="url(#containerShadowL)">
    <rect x="75" y="95" width="300" height="38" rx="5" fill="url(#layerRuntimeL)"/>
    <text x="225" y="119" fill="white" fontFamily="system-ui, sans-serif" fontSize="12" fontWeight="600" textAnchor="middle">Runtime (Node, Python)</text>
  </g>
  <g className="container-layer-l layer-app-l" filter="url(#containerShadowL)">
    <rect x="75" y="55" width="300" height="38" rx="5" fill="url(#layerAppL)"/>
    <text x="225" y="79" fill="white" fontFamily="system-ui, sans-serif" fontSize="12" fontWeight="600" textAnchor="middle">Application Code</text>
  </g>
  <text className="docker-whale-l" x="380" y="50" fontSize="26">🐳</text>
</svg>

#### Containers vs. Virtual Machines

<ComparisonBox
  left={{
    title: "Virtual Machines",
    content: (
      <ul>
        <li><strong>Размер:</strong> Gigabytes</li>
        <li><strong>Startup Time:</strong> Минути</li>
        <li><strong>OS:</strong> Всяка VM има пълна OS</li>
        <li><strong>Изолация:</strong> Силна (hardware-level)</li>
        <li><strong>Плътност:</strong> 10-20 на host</li>
      </ul>
    )
  }}
  right={{
    title: "Containers",
    content: (
      <ul>
        <li><strong>Размер:</strong> Megabytes</li>
        <li><strong>Startup Time:</strong> Секунди</li>
        <li><strong>OS:</strong> Споделят host OS kernel</li>
        <li><strong>Изолация:</strong> Process-level</li>
        <li><strong>Плътност:</strong> 100+ на host</li>
      </ul>
    )
  }}
/>

#### Docker: Container Стандартът

Docker се наложи като доминиращата container технология:

```dockerfile
FROM python:3.9-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
EXPOSE 8000
CMD ["python", "app.py"]
```

Този файл напълно описва как да се построи работещ container за Python приложение.

---

### Стълб 3: Container Orchestration (Kubernetes)

<InfoBox title="Дефиниция">

**Container orchestration** автоматизира deployment, управление, scaling и networking на containers през клъстери от хостове.

</InfoBox>

#### Защо Orchestration?

Изпълнението на един container е просто. Изпълнението на стотици или хиляди през множество сървъри въвежда предизвикателства:
- Кой сървър трябва да изпълни всеки container?
- Какво се случва когато сървър се провали?
- Как containers се намират и комуникират помежду си?
- Как обновяваме containers без downtime?
- Как скалираме според търсенето?

**Kubernetes** отговаря на всички тези въпроси и още.

#### Kubernetes Архитектура

<svg viewBox="0 0 620 300" style={{maxWidth: '620px', margin: '1rem auto', display: 'block'}}>
  <defs>
    <linearGradient id="k8sBlueL" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style={{stopColor:'#326ce5'}}/>
      <stop offset="100%" style={{stopColor:'#2956b8'}}/>
    </linearGradient>
    <linearGradient id="k8sGreenL" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style={{stopColor:'#27ae60'}}/>
      <stop offset="100%" style={{stopColor:'#1e8449'}}/>
    </linearGradient>
    <linearGradient id="k8sPurpleL" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style={{stopColor:'#9b59b6'}}/>
      <stop offset="100%" style={{stopColor:'#8e44ad'}}/>
    </linearGradient>
    <filter id="k8sShadowL" x="-5%" y="-5%" width="110%" height="115%">
      <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000" floodOpacity="0.15"/>
    </filter>
  </defs>
  <style>{`
    .k8s-frame-l { opacity: 0; animation: k8sFadeInL 0.5s ease-out 0.1s forwards; }
    .k8s-title-l { opacity: 0; animation: k8sFadeInL 0.4s ease-out 0.2s forwards; }
    .k8s-control-l { opacity: 0; transform: translateY(-10px); animation: k8sSlideInL 0.4s ease-out 0.3s forwards; }
    .k8s-workers-l { opacity: 0; transform: translateY(10px); animation: k8sSlideInL 0.4s ease-out 0.5s forwards; }
    .k8s-comp-l { opacity: 0; transform: scale(0.8); }
    .k8s-api-l { animation: k8sPopInL 0.3s ease-out 0.5s forwards; }
    .k8s-sched-l { animation: k8sPopInL 0.3s ease-out 0.6s forwards; }
    .k8s-etcd-l { animation: k8sPopInL 0.3s ease-out 0.7s forwards; }
    .k8s-node-l { opacity: 0; transform: scale(0.9); }
    .k8s-node1-l { animation: k8sNodeInL 0.4s ease-out 0.7s forwards; }
    .k8s-node2-l { animation: k8sNodeInL 0.4s ease-out 0.85s forwards; }
    .k8s-pod-l { opacity: 0; transform: scale(0); }
    .k8s-pod1-l { animation: k8sPodPopL 0.25s ease-out 0.9s forwards; }
    .k8s-pod2-l { animation: k8sPodPopL 0.25s ease-out 1.0s forwards; }
    .k8s-pod3-l { animation: k8sPodPopL 0.25s ease-out 1.1s forwards; }
    .k8s-pod4-l { animation: k8sPodPopL 0.25s ease-out 1.2s forwards; }
    @keyframes k8sFadeInL { to { opacity: 1; } }
    @keyframes k8sSlideInL { to { opacity: 1; transform: translateY(0); } }
    @keyframes k8sPopInL { to { opacity: 1; transform: scale(1); } }
    @keyframes k8sNodeInL { to { opacity: 1; transform: scale(1); } }
    @keyframes k8sPodPopL { 0% { opacity: 0; transform: scale(0); } 70% { transform: scale(1.15); } 100% { opacity: 1; transform: scale(1); } }
  `}</style>
  <rect className="k8s-frame-l" x="30" y="15" width="560" height="270" rx="10" fill="#f8f9fa" stroke="url(#k8sBlueL)" strokeWidth="3"/>
  <text className="k8s-title-l" x="310" y="42" fill="#326ce5" fontFamily="system-ui, sans-serif" fontSize="15" fontWeight="700" textAnchor="middle">☸️ KUBERNETES CLUSTER</text>
  <g className="k8s-control-l">
    <rect x="50" y="55" width="520" height="65" rx="6" fill="#e8f4fd" stroke="#326ce5" strokeWidth="1.5"/>
    <text x="310" y="75" fill="#326ce5" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="700" textAnchor="middle">CONTROL PLANE</text>
  </g>
  <g className="k8s-comp-l k8s-api-l" filter="url(#k8sShadowL)">
    <rect x="70" y="85" width="90" height="26" rx="4" fill="url(#k8sBlueL)"/>
    <text x="115" y="103" fill="white" fontFamily="system-ui, sans-serif" fontSize="10" fontWeight="600" textAnchor="middle">API Server</text>
  </g>
  <g className="k8s-comp-l k8s-sched-l" filter="url(#k8sShadowL)">
    <rect x="175" y="85" width="90" height="26" rx="4" fill="url(#k8sBlueL)"/>
    <text x="220" y="103" fill="white" fontFamily="system-ui, sans-serif" fontSize="10" fontWeight="600" textAnchor="middle">Scheduler</text>
  </g>
  <g className="k8s-comp-l k8s-etcd-l" filter="url(#k8sShadowL)">
    <rect x="280" y="85" width="90" height="26" rx="4" fill="url(#k8sPurpleL)"/>
    <text x="325" y="103" fill="white" fontFamily="system-ui, sans-serif" fontSize="10" fontWeight="600" textAnchor="middle">etcd</text>
  </g>
  <g className="k8s-workers-l">
    <rect x="50" y="130" width="520" height="140" rx="6" fill="#e8f8f0" stroke="#27ae60" strokeWidth="1.5"/>
    <text x="310" y="150" fill="#27ae60" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="700" textAnchor="middle">WORKER NODES</text>
  </g>
  <g className="k8s-node-l k8s-node1-l" filter="url(#k8sShadowL)">
    <rect x="70" y="160" width="180" height="90" rx="5" fill="white" stroke="#27ae60" strokeWidth="1.5"/>
    <text x="160" y="178" fill="#27ae60" fontFamily="system-ui, sans-serif" fontSize="10" fontWeight="600" textAnchor="middle">Node 1</text>
  </g>
  <g className="k8s-node-l k8s-node2-l" filter="url(#k8sShadowL)">
    <rect x="270" y="160" width="180" height="90" rx="5" fill="white" stroke="#27ae60" strokeWidth="1.5"/>
    <text x="360" y="178" fill="#27ae60" fontFamily="system-ui, sans-serif" fontSize="10" fontWeight="600" textAnchor="middle">Node 2</text>
  </g>
  <rect className="k8s-pod-l k8s-pod1-l" x="85" y="190" width="50" height="45" rx="4" fill="url(#k8sGreenL)" filter="url(#k8sShadowL)"/>
  <text className="k8s-pod-l k8s-pod1-l" x="110" y="218" fill="white" fontFamily="system-ui, sans-serif" fontSize="9" fontWeight="600" textAnchor="middle">Pod</text>
  <rect className="k8s-pod-l k8s-pod2-l" x="145" y="190" width="50" height="45" rx="4" fill="url(#k8sGreenL)" filter="url(#k8sShadowL)"/>
  <text className="k8s-pod-l k8s-pod2-l" x="170" y="218" fill="white" fontFamily="system-ui, sans-serif" fontSize="9" fontWeight="600" textAnchor="middle">Pod</text>
  <rect className="k8s-pod-l k8s-pod3-l" x="285" y="190" width="50" height="45" rx="4" fill="url(#k8sGreenL)" filter="url(#k8sShadowL)"/>
  <text className="k8s-pod-l k8s-pod3-l" x="310" y="218" fill="white" fontFamily="system-ui, sans-serif" fontSize="9" fontWeight="600" textAnchor="middle">Pod</text>
  <rect className="k8s-pod-l k8s-pod4-l" x="345" y="190" width="50" height="45" rx="4" fill="url(#k8sGreenL)" filter="url(#k8sShadowL)"/>
  <text className="k8s-pod-l k8s-pod4-l" x="370" y="218" fill="white" fontFamily="system-ui, sans-serif" fontSize="9" fontWeight="600" textAnchor="middle">Pod</text>
  <text className="k8s-node-l k8s-node2-l" x="490" y="215" fill="#27ae60" fontFamily="system-ui, sans-serif" fontSize="16" fontWeight="600">...</text>
</svg>

#### Ключови Kubernetes Възможности

<CollapsibleSection title="Automated Scheduling" icon="🎯">

Kubernetes решава къде да изпълни containers на базата на:
- Resource requirements (CPU, memory)
- Hardware constraints (GPU availability)
- Affinity rules (дръж свързани containers заедно)
- Anti-affinity rules (разпредели replicas през nodes)

</CollapsibleSection>

<CollapsibleSection title="Self-Healing" icon="🔄">

Когато се случат сривове, Kubernetes автоматично:
- Рестартира containers, които се сриват
- Замества containers на провалени nodes
- Убива containers, които не отговарят на health checks
- Не рекламира containers докато не са готови

</CollapsibleSection>

<CollapsibleSection title="Horizontal Scaling" icon="📈">

Скалирайте приложението с една команда:

```bash
kubectl scale deployment my-app --replicas=10
```

Или конфигурирайте автоматично scaling на базата на метрики:

```yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
spec:
  scaleTargetRef:
    kind: Deployment
    name: my-app
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

</CollapsibleSection>

---

### Стълб 4: Immutable Infrastructure

<InfoBox title="Дефиниция">

**Immutable infrastructure** е парадигма, при която сървърите никога не се модифицират след deployment. Вместо да обновявате съществуващи сървъри, вие ги заменяте изцяло с нови.

</InfoBox>

#### Традиционен (Mutable) Подход

```
Server Created → Patches Applied → Config Changed → More Updates → ???
     Day 1          Day 30           Day 60           Day 90
```

С времето сървърите натрупват промени, създавайки:
- **Configuration Drift**: Сървъри, които трябва да са идентични, стават различни
- **Snowflake Servers**: Уникални конфигурации, които никой не разбира напълно
- **Unreproducible Environments**: "Works on my machine" проблеми

#### Immutable Подход

```
Version 1.0 Deployed → Version 1.1 Deployed → Version 1.2 Deployed
    (Server A)            (Server B)              (Server C)
                         Server A destroyed     Server B destroyed
```

<SuccessBox title="Ползи от Immutability">

- **Репродуцируемост**: Всеки deployment е идентичен
- **Rollback Възможност**: Предишни версии остават достъпни
- **Без Configuration Drift**: Свежи deployments всеки път
- **Опростен Troubleshooting**: Известно начално състояние

</SuccessBox>

**Практически пример:**
Вместо да се свързвате чрез SSH към сървър за обновяване на Java от версия 11 до 17, вие:
1. Построявате нов container image с Java 17
2. Deploy-вате новия image в Kubernetes
3. Kubernetes грациозно прехвърля трафика към новите containers
4. Старите containers се терминират

---

### Стълб 5: Declarative APIs

<InfoBox title="Дефиниция">

**Declarative APIs** е подход за конфигурация, при който указвате желаното крайно състояние, а системата сама решава как да го постигне.

</InfoBox>

<ComparisonBox
  left={{
    title: "Imperative (КАК)",
    content: (
      <div>
        <p>Стъпка по стъпка команди:</p>
        <pre><code>docker run my-app{'\n'}docker run my-app{'\n'}docker run my-app{'\n'}# Сега имам 3 instances... надявам се?</code></pre>
      </div>
    )
  }}
  right={{
    title: "Declarative (КАКВО)",
    content: (
      <div>
        <p>Спецификация на желано състояние:</p>
        <pre><code>spec:{'\n'}  replicas: 3  # Искам 3 instances</code></pre>
        <p>Kubernetes прави останалото!</p>
      </div>
    )
  }}
/>

<SuccessBox title="Self-Correcting Systems">

Декларативният подход позволява **self-correction**:
- Вие казвате: "Искам 3 replicas"
- Kubernetes вижда: "Сега има 2 работещи"
- Kubernetes действа: "Стартирам още 1..."
- Резултат: Състоянието съвпада с декларацията

</SuccessBox>

---

## Cloud-Native vs Cloud-Enabled vs Traditional

<ComparisonBox
  left={{
    title: "Cloud-Native",
    content: (
      <ul>
        <li>✅ Проектирано <strong>за облака от началото</strong></li>
        <li>✅ Microservices архитектура</li>
        <li>✅ Containerized deployments</li>
        <li>✅ Auto-scaling и self-healing</li>
        <li>✅ Максимизира cloud ползите</li>
      </ul>
    )
  }}
  right={{
    title: "Cloud-Enabled",
    content: (
      <ul>
        <li>⚠️ Монолитно legacy приложение <strong>преместено в облака</strong></li>
        <li>⚠️ "Lift and shift" миграция</li>
        <li>⚠️ VM-based deployment</li>
        <li>⚠️ Ръчно scaling и recovery</li>
        <li>⚠️ Ограничени cloud ползи</li>
      </ul>
    )
  }}
/>

<WarningBox title="Ключово прозрение">

Просто преместването на приложение в AWS **НЕ** го прави cloud-native.

Cloud-native е **архитектурен подход**, не локация за deployment. Студентите трябва да разберат, че cloud placement сам по себе си е недостатъчен без архитектурен redesign.

</WarningBox>

---

## Cloud-Native и DevOps

<InfoBox title="Continuous Integration / Continuous Delivery (CI/CD)">

Cloud-native практиките позволяват CI/CD pipelines:
- **Бързи, надеждни release цикли**
- Автоматично тестване и deployment
- Feature flags за постепенно rollout
- Бърз rollback при проблеми

</InfoBox>

<Grid columns={3}>
  <Card title="Infrastructure as Code" icon="📝">
    Cloud-native намалява ръчния operational toil и подобрява консистентността чрез версиониране на инфраструктурата.
  </Card>
  <Card title="Cross-functional Teams" icon="👥">
    Малки екипи притежават сервизи end-to-end - от разработка до production.
  </Card>
  <Card title="Rapid Deployment" icon="🚀">
    Deploy десетки или стотици пъти дневно с увереност.
  </Card>
</Grid>

---

## Практически Примери

<CollapsibleSection title="Пример 1: E-commerce платформа (Cloud-Native)" icon="🛒">

**Сценарий:** Онлайн магазин с милиони потребители

**Cloud-Native Архитектура:**
- Separate microservices за catalog, cart, checkout, payments
- Всеки сервиз в собствен container
- Kubernetes управлява scaling при пикови натоварвания
- Auto-scaling за Black Friday traffic
- Self-healing при срив на отделен сервиз

**Резултат:** Висока наличност, бърз deployment на нови features, ефективно използване на ресурси.

</CollapsibleSection>

<CollapsibleSection title="Пример 2: Legacy Banking System (Cloud-Enabled)" icon="🏦">

**Сценарий:** 20-годишно банково приложение мигрирано в AWS

**Cloud-Enabled Подход:**
- Същият монолитен код, сега на EC2 instances
- Ръчно scaling чрез добавяне на по-големи машини
- Full redeploy за всяка промяна
- Downtime при updates

**Резултат:** Плащате за cloud без да получавате реалните ползи. Ограничена scalability и resilience.

</CollapsibleSection>

---

## Обобщение

<Grid columns={2}>
  <Card title="Cloud-Native Философия" icon="☁️">
    Cloud-native е холистичен подход за дизайн на модерен софтуер - не просто където работи, а как е изграден.
  </Card>
  <Card title="Петте Стълба" icon="🏛️">
    Microservices, Containers, Kubernetes, Immutable Infrastructure и Declarative APIs работят заедно.
  </Card>
</Grid>

<SuccessBox title="Ключови Takeaways">

1. **Cloud-native е философия**, не локация
2. **Петте стълба работят в синергия** за scalability, resilience и velocity
3. **Cloud-native е стандарт** за разработка на нови приложения
4. **Следващи стъпки:** Explore container orchestration, CI/CD pipelines и managed cloud services

</SuccessBox>

---

## Допълнителни Ресурси

### Онлайн Материали
- [CNCF Cloud Native Definition](https://github.com/cncf/toc/blob/main/DEFINITION.md) - Официална дефиниция
- [Kubernetes Documentation](https://kubernetes.io/docs/) - Kubernetes docs
- [Docker Documentation](https://docs.docker.com/) - Container basics

### Видео Уроци
- [Cloud Native 101](https://www.youtube.com/results?search_query=cloud+native+101) - Въведение в концепциите
- [Kubernetes Crash Course](https://www.youtube.com/results?search_query=kubernetes+crash+course) - Практическо въведение

### Книги
- "Cloud Native Patterns" - Cornelia Davis
- "Kubernetes in Action" - Marko Luksa
