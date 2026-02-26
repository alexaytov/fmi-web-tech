---
sidebar_position: 2
slug: exercises
title: "Упражнения"
tags: [exercises, practice, cloud, iaas, paas, saas]
---

import ExerciseCard from '@site/src/components/Exercise/ExerciseCard';
import ProgressTracker from '@site/src/components/Exercise/ProgressTracker';
import CollapsibleSection from '@site/src/components/CollapsibleSection';
import InfoBox from '@site/src/components/InfoBoxes/InfoBox';
import WarningBox from '@site/src/components/InfoBoxes/WarningBox';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Упражнения: Cloud Service Models

<img src={useBaseUrl('/img/diagrams/iaas-saas-paas/header-cloud-service-models.svg')} alt="Cloud Service Models Header" style={{width: '100%', maxWidth: '800px', margin: '0 auto 24px', display: 'block'}} />

<ProgressTracker />

---

## Лесни Упражнения (EASY)

<img src={useBaseUrl('/img/diagrams/iaas-saas-paas/service-models-stack.svg')} alt="Service Models Stack" style={{width: '100%', maxWidth: '750px', margin: '20px auto', display: 'block'}} />

<ExerciseCard difficulty="easy">

### Задача 1: Definition Matching

Свържете всеки cloud service модел с правилната дефиниция:

| Модел | Дефиниция |
|-------|-----------|
| A. IaaS | 1. Доставя готови приложения на крайни потребители през интернет |
| B. PaaS | 2. Предоставя on-demand достъп до виртуални машини, storage и networking |
| C. SaaS | 3. Предоставя managed runtime среда за разработка и deployment |

<CollapsibleSection title="💡 Подсказка">

Помислете за нивото на абстракция:
- Най-ниско ниво = raw infrastructure
- Средно ниво = development platform
- Най-високо ниво = готово приложение

</CollapsibleSection>

<CollapsibleSection title="✅ Решение">

| Модел | Отговор |
|-------|---------|
| A. IaaS | **2** - Виртуални машини, storage и networking |
| B. PaaS | **3** - Managed runtime среда |
| C. SaaS | **1** - Готови приложения |

**Обяснение:** IaaS е фундаменталният слой, PaaS добавя managed runtime, а SaaS е complete application.

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="easy">

### Задача 2: True or False

Определете дали всяко твърдение е Вярно (True) или Невярно (False):

a) В SaaS, клиентът е отговорен за управлението на операционната система.

b) AWS в момента притежава най-големия пазарен дял в cloud computing (приблизително 37%).

c) IaaS предоставя най-високото ниво на абстракция сред трите service модела.

d) PaaS позволява на разработчиците да се фокусират върху писане на код, а не върху управление на инфраструктура.

e) Virtualization позволява на множество изолирани среди да работят на един физически сървър.

<CollapsibleSection title="💡 Подсказка">

Помислете за responsibility модела:
- Кой управлява какво при всеки модел?
- Кое е най-abstracted, кое е най-raw?

</CollapsibleSection>

<CollapsibleSection title="✅ Решение">

| Твърдение | Отговор | Обяснение |
|-----------|---------|-----------|
| a) | **False** | В SaaS provider-ът управлява всичко, включително OS |
| b) | **True** | AWS води с ~37% market share |
| c) | **False** | SaaS е с най-високо ниво на абстракция, IaaS е най-ниско |
| d) | **True** | PaaS абстрахира infrastructure и позволява focus на код |
| e) | **True** | Virtualization създава изолирани виртуални среди |

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="easy">

### Задача 3: Identify the Service Model

За всеки пример определете дали е IaaS, PaaS или SaaS:

1. Microsoft Office 365
2. AWS EC2
3. Google App Engine
4. Salesforce CRM
5. Azure Virtual Machines
6. AWS Elastic Beanstalk
7. Gmail
8. GCP Compute Engine

<CollapsibleSection title="💡 Подсказка">

Питайте се:
- Ако е ready-to-use app → SaaS
- Ако е VM/infrastructure → IaaS
- Ако е deployment platform за код → PaaS

</CollapsibleSection>

<CollapsibleSection title="✅ Решение">

| № | Услуга | Модел | Обяснение |
|---|--------|-------|-----------|
| 1 | Office 365 | **SaaS** | Ready-to-use productivity apps |
| 2 | AWS EC2 | **IaaS** | Virtual machines |
| 3 | Google App Engine | **PaaS** | Managed app deployment platform |
| 4 | Salesforce CRM | **SaaS** | Ready-to-use CRM application |
| 5 | Azure VMs | **IaaS** | Virtual machines |
| 6 | Elastic Beanstalk | **PaaS** | Managed app deployment |
| 7 | Gmail | **SaaS** | Ready-to-use email service |
| 8 | GCP Compute Engine | **IaaS** | Virtual machines |

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="easy">

### Задача 4: Fill in the Blanks

Попълнете празните места с подходящите термини:

1. _____________ scaling добавя повече инстанции за справяне с увеличено натоварване, докато _____________ scaling увеличава ресурсите на съществуващи инстанции.

2. Трите основни cloud providers са _____________, _____________ и _____________.

3. В cloud computing, _____________ технологията позволява създаването на виртуални инстанции на физически хардуер.

4. SaaS обикновено използва _____________ pricing модел, често таксуван per user на месец.

<CollapsibleSection title="✅ Решение">

1. **Horizontal** scaling добавя повече инстанции, **Vertical** scaling увеличава ресурсите на съществуващи

2. **AWS**, **Azure** и **GCP** (или Google Cloud Platform)

3. **Virtualization** технологията

4. **Subscription** pricing модел

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="easy">

### Задача 5: Responsibility Identification

<img src={useBaseUrl('/img/diagrams/iaas-saas-paas/shared-responsibility-model.svg')} alt="Shared Responsibility Model - IaaS" style={{width: '100%', maxWidth: '700px', margin: '20px auto', display: 'block'}} />

За всяка отговорност посочете кой е отговорен в IaaS среда - Provider (P) или Customer (C):

1. Физически сървъри и data centers
2. Operating system patching
3. Application deployment
4. Virtualization layer (hypervisor)
5. Data backup и security
6. Network hardware

<CollapsibleSection title="✅ Решение">

| № | Отговорност | Отговорен |
|---|-------------|-----------|
| 1 | Физически сървъри и data centers | **P** (Provider) |
| 2 | Operating system patching | **C** (Customer) |
| 3 | Application deployment | **C** (Customer) |
| 4 | Virtualization layer | **P** (Provider) |
| 5 | Data backup и security | **C** (Customer) |
| 6 | Network hardware | **P** (Provider) |

**Ключово правило:** В IaaS, provider-ът управлява physical infrastructure и virtualization, клиентът управлява всичко от OS нагоре.

</CollapsibleSection>

</ExerciseCard>

---

## Средни Упражнения (MEDIUM)

<img src={useBaseUrl('/img/diagrams/iaas-saas-paas/big-three-cloud-providers.svg')} alt="The Big Three Cloud Providers" style={{width: '100%', maxWidth: '750px', margin: '20px auto', display: 'block'}} />

<ExerciseCard difficulty="medium">

### Задача 6: Provider Comparison Table

Попълнете липсващите service имена за всеки provider:

| Service Category | AWS | Azure | GCP |
|-----------------|-----|-------|-----|
| IaaS Compute | EC2 | ? | ? |
| PaaS Web/App | ? | App Service | App Engine |
| Serverless | Lambda | ? | ? |

<CollapsibleSection title="💡 Подсказка">

Помислете за:
- Azure VM услугата
- AWS deployment platform
- Azure и GCP serverless функции

</CollapsibleSection>

<CollapsibleSection title="✅ Решение">

| Service Category | AWS | Azure | GCP |
|-----------------|-----|-------|-----|
| IaaS Compute | EC2 | **Virtual Machines** | **Compute Engine** |
| PaaS Web/App | **Elastic Beanstalk** | App Service | App Engine |
| Serverless | Lambda | **Functions** | **Cloud Functions** |

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium">

### Задача 7: Scenario Classification

За всеки сценарий препоръчайте най-подходящия cloud service модел (IaaS, PaaS или SaaS) и дайте кратка обосновка:

**Сценарий A:** Малък маркетинг екип има нужда от email и document collaboration инструменти без IT support персонал.

**Сценарий B:** Development екип иска бързо да deploy-не web application с automatic scaling, без да управлява сървъри или OS.

**Сценарий C:** Компания трябва да стартира legacy application, която изисква специфични OS конфигурации и custom kernel modules.

**Сценарий D:** Startup иска да използва CRM система веднага без development работа.

**Сценарий E:** Data science екип има нужда от пълен контрол над computing средата за инсталиране на custom ML frameworks.

<CollapsibleSection title="✅ Решение">

| Сценарий | Модел | Обосновка |
|----------|-------|-----------|
| A | **SaaS** | Нужда от ready-to-use tools без IT overhead (напр. Google Workspace, Office 365) |
| B | **PaaS** | Бърз deployment с managed infrastructure и auto-scaling (напр. Elastic Beanstalk) |
| C | **IaaS** | Нужда от full OS control за специфични конфигурации (напр. EC2) |
| D | **SaaS** | Ready-to-use CRM без development (напр. Salesforce) |
| E | **IaaS** | Пълен контрол за custom software installations (напр. Azure VMs) |

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium">

### Задача 8: Trade-off Analysis

Определете кой модел има предимство за всеки критерий (напишете "IaaS" или "PaaS"):

| Критерий | Предимство |
|----------|------------|
| Maximum control over infrastructure | ? |
| Faster time-to-market | ? |
| Lower operational overhead | ? |
| Ability to customize OS settings | ? |
| Built-in auto-scaling | ? |
| Suitable for legacy application migration | ? |

<CollapsibleSection title="✅ Решение">

| Критерий | Предимство | Обяснение |
|----------|------------|-----------|
| Maximum control | **IaaS** | Full access до VM, OS, network |
| Faster time-to-market | **PaaS** | Auto-deploy, managed runtime |
| Lower operational overhead | **PaaS** | Provider manages OS, middleware |
| Ability to customize OS | **IaaS** | Full OS control |
| Built-in auto-scaling | **PaaS** | Automatic scaling без configuration |
| Legacy app migration | **IaaS** | Custom configurations за legacy apps |

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium">

### Задача 9: Short Answer Questions

Отговорете на всеки въпрос в 2-3 изречения:

1. Обяснете концепцията "shared responsibility model" в cloud computing и защо е важна.

2. Какво е "vendor lock-in" и как организациите могат да намалят този риск?

3. Опишете две предимства на използването на PaaS пред IaaS за startup, създаващ web application.

4. Защо голямо enterprise с съществуваща Microsoft инфраструктура може да предпочете Azure пред други cloud providers?

<CollapsibleSection title="✅ Решение">

**1. Shared Responsibility Model:**
Shared responsibility model дефинира кои security и management задачи са отговорност на cloud provider-а и кои са на клиента. Важен е, защото clarifies boundaries и предотвратява security gaps между това, което provider-ът управлява и това, което клиентът трябва да осигури.

**2. Vendor Lock-in:**
Vendor lock-in е затрудненото преминаване от един cloud provider към друг поради proprietary technologies или data formats. Организациите могат да го намалят чрез: използване на open standards, containerization (Docker, Kubernetes), multi-cloud strategies и избягване на provider-specific APIs където е възможно.

**3. PaaS предимства за startup:**
- **По-бързо time-to-market:** Auto-deployment и managed runtime позволяват focus върху features вместо infrastructure setup
- **По-ниски operational разходи:** Не е нужен dedicated DevOps екип за OS patching, security updates и scaling

**4. Azure за Microsoft enterprises:**
Azure предлага seamless интеграция с Microsoft продукти като Active Directory, Office 365 и Teams. Hybrid benefit pricing за existing Microsoft licenses значително намалява разходите, а Azure Arc позволява unified management на on-premises и cloud ресурси.

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium">

### Задача 10: Service Selection

Съветвате средно голяма e-commerce компания, която в момента хоства всичко on-premises. Те имат следните изисквания:

- Хостване на custom e-commerce application (built с Node.js)
- Email и productivity tools за 50 служители
- Съхранение и анализ на customer purchase data
- Development/test среда

**Създайте recommendation table, указващa кой cloud service модел (IaaS, PaaS или SaaS) бихте препоръчали за всяко изискване, заедно със специфичен service пример.**

<CollapsibleSection title="✅ Решение">

| Изискване | Модел | Service Пример | Обосновка |
|-----------|-------|----------------|-----------|
| Node.js e-commerce app | **PaaS** | AWS Elastic Beanstalk, Azure App Service | Managed Node.js runtime с auto-scaling |
| Email & productivity | **SaaS** | Google Workspace, Microsoft 365 | Ready-to-use без IT overhead |
| Customer data analysis | **PaaS/SaaS** | Google BigQuery, AWS Redshift | Managed analytics без infrastructure management |
| Dev/test environment | **IaaS** | AWS EC2, Azure VMs | Flexibility за testing различни configurations |

**Алтернативно:** Dev/test може да е PaaS ако екипът предпочита consistency с production environment.

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium">

### Задача 11: Diagram Interpretation

Разгледайте responsibility stack-а и отговорете на въпросите:

```
Layer 7: Data
Layer 6: Applications
Layer 5: Runtime
Layer 4: Middleware
Layer 3: Operating System
Layer 2: Virtualization
Layer 1: Physical Infrastructure
```

a) В IaaS, кои layers (по номер) обикновено се управляват от customer?

b) В PaaS, кои layers се управляват от provider?

c) В SaaS, над кои layer(s) customer може все още да има някакъв configuration контрол?

<CollapsibleSection title="✅ Решение">

**a) IaaS Customer Layers:** **3, 4, 5, 6, 7** (OS, Middleware, Runtime, Applications, Data)

Provider управлява Layers 1-2 (Physical Infrastructure, Virtualization)

**b) PaaS Provider Layers:** **1, 2, 3, 4, 5** (Physical, Virtualization, OS, Middleware, Runtime)

Customer управлява само Layers 6-7 (Applications, Data)

**c) SaaS Customer Control:** **Layer 7 (Data)** - partial configuration

В SaaS, provider управлява всички layers, но customer обикновено има контрол над своите данни и някои application settings (user preferences, permissions).

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium">

### Задача 12: Scaling Concepts Application

<img src={useBaseUrl('/img/diagrams/iaas-saas-paas/horizontal-vs-vertical-scaling.svg')} alt="Horizontal vs Vertical Scaling" style={{width: '100%', maxWidth: '700px', margin: '20px auto', display: 'block'}} />

Web application experience следните traffic patterns:
- Нормален дневен трафик: 1,000 потребители
- Weekend sale events: 10,000 потребители (spikes от 6-8 часа)
- Black Friday: 50,000 потребители (24-часов spike)

**Отговорете на следното:**

1. Horizontal или vertical scaling би било по-подходящо за Black Friday spike? Обяснете защо.

2. Посочете една специфична AWS или Azure услуга, която може автоматично да handle-не този scaling.

3. Как би се различил scaling подходът ако приложението е hosted на IaaS versus PaaS?

<CollapsibleSection title="✅ Решение">

**1. Horizontal scaling е по-подходящо:**
- 50x увеличение на трафика изисква много повече capacity от един сървър може да предостави
- Horizontal scaling добавя нови instances, осигурявайки redundancy и fault tolerance
- Vertical scaling има limits (максимален размер на VM) и изисква downtime за upgrade

**2. AWS/Azure Auto-scaling услуги:**
- **AWS Auto Scaling Groups** - автоматично добавя/премахва EC2 instances
- **Azure Virtual Machine Scale Sets** - managed scaling за Azure VMs
- **AWS Elastic Beanstalk** или **Azure App Service** за PaaS auto-scaling

**3. IaaS vs PaaS scaling разлики:**

| Aspect | IaaS | PaaS |
|--------|------|------|
| Configuration | Manual setup на Auto Scaling Groups, load balancers | Built-in, minimal configuration |
| Complexity | Requires expertise в scaling policies | Automatic, managed by provider |
| Flexibility | Full control над scaling behavior | Limited customization options |
| Time to implement | По-дълго setup time | Бързо, out-of-the-box |

</CollapsibleSection>

</ExerciseCard>

---

## Трудни Упражнения (HARD)

<img src={useBaseUrl('/img/diagrams/iaas-saas-paas/iaas-vs-paas-decision.svg')} alt="IaaS vs PaaS Decision Framework" style={{width: '100%', maxWidth: '750px', margin: '20px auto', display: 'block'}} />

<ExerciseCard difficulty="hard">

### Задача 13: Case Study Analysis

**Case Study:** TechStart Inc. е 2-годишен startup, който първоначално deploy-на своя SaaS продукт на AWS EC2 instances. Текущият им setup включва:
- 10 EC2 instances running Ubuntu с custom configurations
- Manual deployment процес, отнемащ 4 часа
- 2 full-time DevOps engineers managing infrastructure
- Monthly infrastructure incidents averaging 3 на месец
- Growth rate: 40% увеличение на потребителите на тримесечие

**Задачи:**

1. Идентифицирайте три специфични pain points в текущия им IaaS setup.

2. Препоръчайте дали трябва да мигрират към PaaS и обосновете препоръката с поне три supporting arguments.

3. Предложете специфичен migration path, назовавайки actual services.

4. Какви trade-offs би трябвало TechStart да приеме при миграция към PaaS?

<CollapsibleSection title="✅ Решение">

**1. Pain Points в текущия IaaS setup:**
- **High operational overhead:** 2 full-time DevOps engineers + 4-hour deployments
- **Reliability issues:** 3 incidents/месец показва stability проблеми
- **Scaling challenges:** Manual processes не могат да cope с 40% quarterly growth
- **Resource inefficiency:** DevOps focus на infrastructure вместо product development

**2. Препоръка: Да, миграция към PaaS**

Supporting arguments:
- **Cost reduction:** Елиминиране/намаляване на DevOps headcount (2 engineers × $100k+ = $200k+/year)
- **Improved reliability:** Managed platforms имат built-in HA и automatic failover
- **Faster deployments:** Git-based auto-deploy намалява от 4 часа на минути
- **Automatic scaling:** Built-in scaling за 40% growth без manual intervention

**3. Migration Path:**

```
Phase 1: Containerize application (Docker)
Phase 2: Deploy to AWS Elastic Beanstalk или Azure App Service
Phase 3: Migrate data to managed database (RDS, Azure SQL)
Phase 4: Set up CI/CD pipeline (CodePipeline, Azure DevOps)
Phase 5: Decommission EC2 instances
```

**4. Trade-offs при PaaS миграция:**
- **Reduced OS-level control:** Не могат да правят custom kernel modifications
- **Potential vendor lock-in:** По-трудно преминаване към друг provider
- **Limited debugging:** По-малко visibility в underlying infrastructure
- **Supported stacks only:** Трябва да се придържат към PaaS-supported runtimes

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="hard">

### Задача 14: Total Cost of Ownership Calculation

<img src={useBaseUrl('/img/diagrams/iaas-saas-paas/tco-comparison.svg')} alt="TCO Comparison: IaaS vs PaaS" style={{width: '100%', maxWidth: '700px', margin: '20px auto', display: 'block'}} />

**Задача:** Изчислете и сравнете приблизителния Total Cost of Ownership (TCO) за следните два сценария за 12-месечен период:

**Сценарий A - IaaS Approach:**
- 4 виртуални машини по $200/месец всяка
- 1 DevOps engineer по $8,000/месец
- Storage costs: $100/месец
- Estimated downtime costs: $500/месец (поради manual management)

**Сценарий B - PaaS Approach:**
- PaaS platform subscription: $600/месец
- Не е нужен dedicated DevOps engineer
- Storage costs: $150/месец
- Estimated downtime costs: $100/месец

**Въпроси:**

1. Изчислете общите годишни разходи за всеки сценарий.

2. Изчислете cost savings (или increase) при избор на PaaS пред IaaS.

3. Освен директните разходи, изброете три qualitative фактора, които трябва да повлияят на това решение.

<CollapsibleSection title="✅ Решение">

**1. Годишни разходи:**

**Сценарий A (IaaS):**
| Item | Monthly | Annual |
|------|---------|--------|
| 4 VMs × $200 | $800 | $9,600 |
| DevOps engineer | $8,000 | $96,000 |
| Storage | $100 | $1,200 |
| Downtime costs | $500 | $6,000 |
| **Total** | **$9,400** | **$112,800** |

**Сценарий B (PaaS):**
| Item | Monthly | Annual |
|------|---------|--------|
| PaaS subscription | $600 | $7,200 |
| DevOps engineer | $0 | $0 |
| Storage | $150 | $1,800 |
| Downtime costs | $100 | $1,200 |
| **Total** | **$850** | **$10,200** |

**2. Cost Savings:**
$$
Savings = \$112,800 - \$10,200 = \$102,600/year
$$

PaaS спестява **$102,600 годишно** (91% reduction!)

**3. Qualitative фактори:**

1. **Developer Productivity:** PaaS освобождава developers да focus на features вместо infrastructure
2. **Time-to-Market:** По-бързи deployments означават по-бърза delivery на нови features
3. **Scalability:** PaaS automatic scaling е критично за растящ бизнес
4. **Risk Tolerance:** IaaS дава повече control, но изисква expertise за security
5. **Team Skills:** Ако екипът няма DevOps expertise, PaaS е по-safe choice

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="hard">

### Задача 15: Multi-Cloud Architecture Design

<img src={useBaseUrl('/img/diagrams/iaas-saas-paas/multi-cloud-architecture.svg')} alt="Multi-Cloud Architecture Pattern" style={{width: '100%', maxWidth: '700px', margin: '20px auto', display: 'block'}} />

**Сценарий:** Healthcare компания трябва да design-не cloud architecture, която:
- Спазва HIPAA regulations
- Избягва single-vendor lock-in
- Хоства patient-facing web application
- Съхранява и обработва sensitive patient data
- Осигурява disaster recovery capabilities
- Интегрира се със съществуващи Microsoft Office инструменти на персонала

**Задача:** Design-нете multi-cloud solution, която адресира всички изисквания:

1. Посочете кой cloud provider(s) бихте използвали и защо.

2. За всеки основен компонент (web app, data storage, productivity tools, DR), посочете service модела (IaaS/PaaS/SaaS) и обосновете избора.

3. Обяснете как вашият design намалява vendor lock-in.

4. Идентифицирайте две потенциални предизвикателства с multi-cloud подхода.

<CollapsibleSection title="✅ Решение">

**1. Cloud Provider Selection:**

| Provider | Role | Justification |
|----------|------|---------------|
| **Azure** | Primary | HIPAA compliance, Microsoft integration, healthcare focus |
| **AWS** | Secondary/DR | Geographic redundancy, proven healthcare solutions |

**2. Component Architecture:**

| Component | Model | Service | Justification |
|-----------|-------|---------|---------------|
| Patient Web App | **PaaS** | Azure App Service | HIPAA compliant, managed security, auto-scaling |
| Patient Data | **PaaS** | Azure SQL with encryption | Built-in compliance, managed backups |
| Productivity Tools | **SaaS** | Microsoft 365 | Existing staff familiarity, HIPAA BAA available |
| Disaster Recovery | **IaaS** | AWS EC2 + S3 | Geographic separation, full data replication |
| Identity | **SaaS** | Azure Active Directory | Unified access, compliance logging |

**3. Vendor Lock-in Mitigation:**

- **Containerization:** Use Docker containers за web app portability
- **Standard APIs:** Избягване на proprietary Azure services където е възможно
- **Data portability:** Standard SQL format, regular exports
- **Multi-cloud DR:** AWS като fallback означава proven exit path
- **Infrastructure as Code:** Terraform scripts за reproducible deployments

**4. Multi-cloud Challenges:**

1. **Complexity:** Managing two cloud platforms изисква broader expertise и по-сложен monitoring
2. **Data Synchronization:** Maintaining consistent patient data между Azure и AWS DR site изисква careful replication setup и може да introduce latency
3. **Cost Management:** Tracking costs across providers е по-сложно
4. **Compliance Verification:** HIPAA compliance трябва да се verify-не за всеки provider separately

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="hard">

### Задача 16: Migration Strategy Development

<img src={useBaseUrl('/img/diagrams/iaas-saas-paas/cloud-migration-journey.svg')} alt="Cloud Migration Journey: On-Prem to Cloud" style={{width: '100%', maxWidth: '750px', margin: '20px auto', display: 'block'}} />

**Сценарий:** Financial services компания стартира monolithic application на традиционни on-premises сървъри. Приложението се състои от:
- Java-based web frontend
- Transaction processing engine със специфични performance изисквания
- PostgreSQL database с 5TB данни
- Integration с third-party payment processors

Те искат да мигрират към cloud в рамките на 18 месеца.

**Задача:** Разработете phased migration strategy:

1. Кои компоненти бихте мигрирали първо и кой service модел бихте използвали за всеки? Обосновете sequencing-а.

2. За transaction processing engine, която изисква специфични performance гаранции, бихте ли препоръчали IaaS или PaaS? Обяснете reasoning-а.

3. Какъв hybrid подход бихте използвали през transition периода?

4. Идентифицирайте три рискове в тази миграция и предложете mitigation strategies.

<CollapsibleSection title="✅ Решение">

**1. Phased Migration Strategy:**

| Phase | Component | Model | Timeline | Justification |
|-------|-----------|-------|----------|---------------|
| 1 | Web Frontend | **PaaS** | Months 1-4 | Lowest risk, stateless, easy to test |
| 2 | Database | **PaaS** | Months 4-8 | Azure SQL/RDS миграция с minimal downtime |
| 3 | Transaction Engine | **IaaS** | Months 8-14 | Custom tuning за performance |
| 4 | Full cutover | - | Months 14-18 | Testing и decommission |

**Sequencing Rationale:**
- Frontend first: най-малко dependencies, лесен rollback
- Database second: enables testing на frontend с cloud data
- Transaction engine last: най-critical, изисква extensive testing

**2. Transaction Engine: IaaS**

Препоръка: **IaaS** (например Azure VMs с Premium SSD)

Reasons:
- **Performance guarantees:** Dedicated VMs с guaranteed IOPS и CPU
- **Custom tuning:** JVM parameters, kernel settings, network optimization
- **Compliance:** Financial regulations може да изискват dedicated resources
- **Legacy dependencies:** Специфични Java versions или libraries

PaaS е рисково защото:
- Shared resources могат да cause performance variability
- Limited control над underlying infrastructure

**3. Hybrid Approach:**

```
Month 1-8: Hybrid Phase 1
┌──────────────────┐     ┌──────────────────┐
│   On-Premises    │     │      Cloud       │
│ - Transaction    │◄───►│ - Web Frontend   │
│ - Database       │     │                  │
│ - Legacy systems │     │                  │
└──────────────────┘     └──────────────────┘

Month 8-18: Hybrid Phase 2
┌──────────────────┐     ┌──────────────────┐
│   On-Premises    │     │      Cloud       │
│ - Legacy backup  │◄───►│ - Web Frontend   │
│                  │     │ - Database       │
│                  │     │ - Transaction    │
└──────────────────┘     └──────────────────┘
```

- VPN/ExpressRoute за secure connectivity
- Traffic gradually shifted чрез load balancer
- On-premises serves като failback до пълен cutover

**4. Risks и Mitigations:**

| Risk | Impact | Mitigation |
|------|--------|------------|
| **Data loss during migration** | Critical | Blue-green deployment, full backups, staged data sync |
| **Performance degradation** | High | Extensive load testing, right-sizing, performance baselines |
| **Payment processor integration failure** | Critical | Early testing, staged rollout, maintain on-prem fallback |
| **Extended downtime** | High | Off-hours migration windows, automated rollback procedures |
| **Compliance violations** | Critical | Pre-migration audit, compliance validation at each phase |

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="hard">

### Задача 17: Serverless vs Traditional PaaS Evaluation

<img src={useBaseUrl('/img/diagrams/iaas-saas-paas/serverless-vs-traditional-paas.svg')} alt="Serverless (FaaS) vs Traditional PaaS" style={{width: '100%', maxWidth: '700px', margin: '20px auto', display: 'block'}} />

**Въпрос:** Компания решава между deploying на новото си microservices приложение на:
- **Option A:** Traditional PaaS (AWS Elastic Beanstalk)
- **Option B:** Serverless (AWS Lambda + API Gateway)

Характеристики на приложението:
- 20 independent microservices
- Highly variable traffic (близо до нула през нощта, heavy през business hours)
- Всеки request отнема 100-500ms за processing
- Очаквани 1 милион requests на ден в peak times

**Задачи:**

1. Създайте comparison table, оценяваща двете опции по: cost efficiency, operational complexity, scaling behavior и cold start impact.

2. Коя опция бихте препоръчали и защо?

3. При какви обстоятелства бихте променили препоръката си?

<CollapsibleSection title="✅ Решение">

**1. Comparison Table:**

| Criterion | Elastic Beanstalk (PaaS) | Lambda (Serverless) |
|-----------|-------------------------|---------------------|
| **Cost Efficiency** | Платете за running instances 24/7 дори при нисък трафик | Pay-per-invocation, zero cost при нулев трафик |
| **Operational Complexity** | Medium - manage environments, но не OS | Low - само deploy код, no infrastructure management |
| **Scaling Behavior** | Auto-scaling с минути delay | Instant scaling, concurrent executions |
| **Cold Start Impact** | Няма - instances винаги running | 100-300ms cold start penalty при first invocation |
| **20 Microservices** | 20 environments да се manage | 20 functions, по-лесен deployment |
| **Variable Traffic** | Over-provisioning или slow scaling | Perfect fit за variable workloads |

**Cost Analysis (приблизително):**

**Elastic Beanstalk:**
- Minimum 20 instances (1 per service) × $50/month = $1,000/month
- Plus load balancers, etc. ≈ $1,500/month total

**Lambda:**
- 1M requests × 30 days = 30M requests/month
- Average 300ms = 0.3s × 30M = 9M GB-seconds
- Cost ≈ $150-300/month (varies by memory allocation)

**2. Препоръка: Lambda (Serverless)**

Reasons:
- **Cost:** 80%+ savings поради variable traffic и pay-per-use
- **Operations:** По-малко infrastructure да се manage за 20 services
- **Scaling:** Instant scaling за traffic spikes
- **Request duration:** 100-500ms е идеален за Lambda (под 15 min limit)

Cold start concern е manageable:
- 100-300ms initial latency е acceptable за повечето APIs
- Provisioned concurrency може да eliminate cold starts за critical paths

**3. Кога да изберете PaaS instead:**

| Scenario | Защо PaaS е по-добър |
|----------|---------------------|
| **Consistent high traffic** | Ако трафикът е стабилен 24/7, instances са по-cost-effective |
| **Long-running processes** | Lambda има 15 min limit; PaaS няма |
| **WebSocket connections** | Lambda не поддържа persistent connections добре |
| **Strict latency requirements** | Ако \<50ms е критично и cold starts са неприемливи |
| **Complex dependencies** | Heavy frameworks или large deployment packages |
| **State management** | Ако services изискват in-memory state между requests |

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="hard">

### Задача 18: Real-World Trade-off Debate

**Задача:** Екипът ви е разделен дали да използва IaaS или PaaS за нов проект. Подгответе аргументи за ДВЕТЕ страни:

**Position A - Advocate за IaaS:**
Напишете 4 убедителни аргумента за избор на IaaS, с конкретни сценарии където IaaS е явно по-добър.

**Position B - Advocate за PaaS:**
Напишете 4 убедителни аргумента за избор на PaaS, с конкретни сценарии където PaaS е явно по-добър.

**Synthesis:**
Базирано на аргументите, създайте decision framework (flowchart или decision tree), който помага на екип систематично да избере между IaaS и PaaS.

<CollapsibleSection title="✅ Решение">

**Position A - IaaS Arguments:**

1. **Full Control за Custom Requirements**
   - Сценарий: Компания с proprietary ML model изисква specific GPU drivers и custom CUDA versions
   - IaaS позволява: Инсталиране на exact software versions, kernel modifications

2. **Legacy Application Migration**
   - Сценарий: 15-годишно Java приложение с dependencies на специфичен Tomcat version
   - IaaS позволява: Lift-and-shift без code changes

3. **Compliance и Security Requirements**
   - Сценарий: Government contract изисква dedicated hardware и specific security configurations
   - IaaS позволява: Full audit trail, custom firewall rules, encryption at rest

4. **Cost Optimization за Predictable Workloads**
   - Сценарий: 24/7 batch processing system с consistent resource usage
   - IaaS позволява: Reserved instances, spot instances за significant savings

**Position B - PaaS Arguments:**

1. **Rapid Development и Time-to-Market**
   - Сценарий: Startup трябва да launch MVP за 3 месеца
   - PaaS осигурява: Git-deploy, auto-scaling, zero infrastructure setup

2. **Reduced Operational Overhead**
   - Сценарий: 5-person development team без dedicated DevOps
   - PaaS осигурява: Managed patching, security updates, monitoring

3. **Built-in Best Practices**
   - Сценарий: Team без cloud expertise building first cloud app
   - PaaS осигурява: Secure defaults, HA configurations, auto-backups

4. **Scalability без Expertise**
   - Сценарий: E-commerce site expecting 10x traffic на Black Friday
   - PaaS осигурява: Automatic scaling, load balancing, zero configuration

**Decision Framework:**

```
Start: New Cloud Project Decision
│
├─ Q1: Нуждаете ли се от custom OS/kernel modifications?
│   ├─ Yes → IaaS
│   └─ No ↓
│
├─ Q2: Имате ли legacy app изискваща specific dependencies?
│   ├─ Yes → IaaS
│   └─ No ↓
│
├─ Q3: Имате ли dedicated DevOps екип?
│   ├─ No → PaaS
│   └─ Yes ↓
│
├─ Q4: Time-to-market критичен ли е (<3 месеца)?
│   ├─ Yes → PaaS
│   └─ No ↓
│
├─ Q5: Traffic pattern predictable и consistent ли е?
│   ├─ Yes → IaaS (cost savings)
│   └─ No → PaaS (auto-scaling)
│
└─ Default: PaaS (ако никое условие не е силно)
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="hard">

### Задача 19: Future Trends Analysis

<img src={useBaseUrl('/img/diagrams/iaas-saas-paas/cloud-computing-evolution.svg')} alt="Cloud Computing Evolution: Future Trends" style={{width: '100%', maxWidth: '750px', margin: '20px auto', display: 'block'}} />

**Въпрос:** Базирано на лекционния материал за бъдещи тенденции (hybrid/multi-cloud, serverless, edge computing, AI/ML as a Service):

1. Как може традиционните граници между IaaS, PaaS и SaaS да се размият през следващите 5 години? Дайте два конкретни примера.

2. Компания, използваща в момента само SaaS solutions, иска да изгради competitive advantage чрез custom AI/ML capabilities. Design-нете progressive cloud adoption strategy, която ги движи от pure SaaS consumption към developing custom AI solutions, като посочите кои service модели ще използват на всеки етап.

3. Оценете как serverless computing предизвиква традиционното IaaS vs. PaaS разграничение. Къде се вписва serverless в "as-a-Service" спектъра?

<CollapsibleSection title="✅ Решение">

**1. Blurring Boundaries (2 примера):**

**Пример 1: Container-as-a-Service (CaaS)**
- Традиционно: IaaS = VMs, PaaS = managed apps
- Emerging: Kubernetes services (EKS, AKS, GKE) размиват границата
- Характеристики: Container orchestration с IaaS-like control, но PaaS-like management
- Позиция: Между IaaS и PaaS - infrastructure abstraction с application flexibility

**Пример 2: AI-Powered SaaS с Custom Models**
- Традиционно: SaaS = fixed functionality
- Emerging: SaaS platforms (Salesforce Einstein, HubSpot AI) позволяват custom ML model training
- Характеристики: SaaS consumption model с PaaS-like customization capabilities
- Позиция: SaaS платформи стават extensible development platforms

**2. Progressive AI/ML Adoption Strategy:**

| Stage | Timeline | Model | Activities | Services |
|-------|----------|-------|------------|----------|
| **1. AI Consumption** | Months 1-6 | SaaS | Използване на built-in AI features | Salesforce Einstein, Google Analytics Intelligence |
| **2. AI Integration** | Months 6-12 | SaaS + API | Интегриране на AI APIs в workflows | OpenAI API, Azure Cognitive Services |
| **3. Custom Development** | Months 12-18 | PaaS | Training custom models на managed platforms | Azure ML Studio, AWS SageMaker |
| **4. Production ML** | Months 18-24 | PaaS/IaaS | Full ML pipelines, model serving | Kubernetes + ML frameworks |
| **5. ML Operations** | Months 24+ | IaaS/PaaS | Advanced MLOps, custom infrastructure | Custom GPU clusters, edge deployment |

**3. Serverless в "as-a-Service" Spectrum:**

```
Traditional Spectrum:
IaaS ─────── PaaS ─────── SaaS
(VMs)       (Apps)       (Software)

With Serverless:
IaaS ── CaaS ── FaaS ── PaaS ── SaaS
         │       │
    Containers  Lambda
         │       │
    K8s/EKS    Functions
```

**Serverless характеристики:**
- **Abstraction level:** По-висока от traditional PaaS (no server management)
- **Pricing model:** True pay-per-use (не pay-per-hour)
- **Scaling:** Instant, automatic, granular
- **Limitations:** Stateless, time limits, cold starts

**Къде се вписва:**
Serverless е **FaaS (Functions-as-a-Service)** - специализиран PaaS subset:
- По-abstracted от traditional PaaS (Beanstalk, App Service)
- По-flexible от SaaS (custom code execution)
- Идеален за event-driven, variable workloads

**Challenge към IaaS/PaaS distinction:**
Serverless показва, че spectrum-ът не е линеен - различни use cases изискват различни abstraction точки. Бъдещето е **composable cloud** - mix-and-match на услуги от различни abstraction levels.

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="hard">

### Задача 20: Comprehensive Provider Selection

**Сценарий:** Вие сте cloud architect за глобална retail компания със следните изисквания:

| Изискване | Детайли |
|-----------|---------|
| Geographic presence | Магазини в Северна Америка, Европа и Азия |
| Workloads | E-commerce platform, inventory management, customer analytics, employee productivity |
| Constraints | Budget $50,000/месец, екипът има Azure certifications, CEO предпочита избягване на "big tech" dependency |
| Priorities | Cost optimization, AI-powered customer insights, 99.9% uptime |

**Задачи:**

1. Препоръчайте primary cloud provider с детайлна обосновка, адресираща всяко изискване.

2. Design-нете service architecture, посочвайки IaaS, PaaS или SaaS за всеки workload тип.

3. Предложете secondary provider strategy за critical workloads и обяснете risk mitigation подхода.

4. Изчислете как бихте разпределили $50,000 месечния budget между различните услуги (процентаж и reasoning).

5. Идентифицирайте три metrics, които бихте следили за оценка на успеха на cloud strategy след 6 месеца.

<CollapsibleSection title="✅ Решение">

**1. Primary Provider: Azure**

| Requirement | Azure Justification |
|-------------|---------------------|
| Geographic presence | Global regions в NA, Europe, Asia; CDN за retail performance |
| Team skills | Existing Azure certifications = faster implementation, lower training cost |
| AI capabilities | Azure Cognitive Services, ML Studio за customer insights |
| Uptime | 99.99% SLA за most services; Availability Zones |
| CEO concern | Hybrid option (Azure Arc) позволява gradual adoption, reduces lock-in |

**2. Service Architecture:**

| Workload | Model | Service | Justification |
|----------|-------|---------|---------------|
| E-commerce Platform | **PaaS** | Azure App Service + Azure SQL | Managed scaling за traffic spikes, global deployment |
| Inventory Management | **PaaS** | Azure Functions + Cosmos DB | Event-driven updates, multi-region sync |
| Customer Analytics | **PaaS** | Azure Synapse + Power BI | Integrated analytics, AI-ready data platform |
| Employee Productivity | **SaaS** | Microsoft 365 | Seamless Azure AD integration, immediate deployment |
| CDN/Static Assets | **PaaS** | Azure CDN + Blob Storage | Global edge caching за retail performance |

**3. Secondary Provider Strategy:**

**Secondary: AWS**

| Critical Workload | Primary (Azure) | Secondary (AWS) |
|-------------------|-----------------|-----------------|
| E-commerce DB | Azure SQL | AWS RDS (read replica) |
| Static Assets | Azure Blob | AWS S3 (backup) |
| DNS/Traffic | Azure Traffic Manager | AWS Route 53 (failover) |

**Risk Mitigation:**
- Active-passive setup: Azure primary, AWS warm standby
- Data sync: Real-time replication за database
- DNS failover: Automatic routing при Azure outage
- Regular DR testing: Monthly failover drills

**4. Budget Allocation ($50,000/month):**

| Category | % | Amount | Services |
|----------|---|--------|----------|
| E-commerce Platform | 35% | $17,500 | App Service, SQL, CDN |
| Analytics & AI | 20% | $10,000 | Synapse, ML, Power BI |
| Inventory System | 15% | $7,500 | Functions, Cosmos DB |
| Employee Productivity | 10% | $5,000 | M365 licenses |
| DR/Multi-cloud | 10% | $5,000 | AWS standby resources |
| Monitoring & Security | 5% | $2,500 | Azure Monitor, Defender |
| Reserved Capacity | 5% | $2,500 | Reserved instances savings |

**5. Success Metrics (6-month evaluation):**

| Metric | Target | Measurement |
|--------|--------|-------------|
| **Uptime SLA** | >99.9% | Azure Monitor, synthetic tests |
| **Cost per Transaction** | \<$0.02 | Total cloud spend / transactions |
| **Deployment Frequency** | >4/week | CI/CD pipeline metrics |
| **Customer Analytics Latency** | \<1 hour | Time from event to insight availability |
| **DR Recovery Time** | \<15 minutes | Quarterly DR drill results |
| **Employee Satisfaction** | >80% NPS | Survey на productivity tools adoption |

**Additional KPIs:**
- Time to scale (during peak events)
- Security incident count
- Cloud spend variance (actual vs. budget)

</CollapsibleSection>

</ExerciseCard>

---

<InfoBox title="Instructor Notes">

**Grading Guidelines:**

- **Easy (1-5):** Focus на recall и basic understanding. Приемете директни отговори от лекционния материал.

- **Medium (6-12):** Търсете application на концепции и ability да compare/contrast модели. Partial credit за reasonable justifications.

- **Hard (13-20):** Оценявайте critical thinking, synthesis на множество концепции и ability за justified trade-off decisions. Множество valid подходи съществуват; grade-вайте based на quality of reasoning.

</InfoBox>
