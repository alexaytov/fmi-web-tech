---
title: "Лекция"
sidebar_position: 1
slug: lecture
tags: [cloud, iaas, paas, saas, aws, azure, gcp]
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

# Cloud Service Models: IaaS, PaaS, and SaaS

<ViewSlidesButton lectureSlug="iaas-saas-paas" />

<QuickSummary>

**Ключови познания:**
- **IaaS** предоставя виртуални машини, storage и networking с пълен контрол върху OS
- **PaaS** абстрахира инфраструктурата и позволява фокус върху кода
- **SaaS** доставя готови приложения без нужда от управление
- AWS (37%), Azure (23%) и GCP (9%) доминират пазара

</QuickSummary>

<LearningObjectives objectives={[
  "Дефинирайте и разграничете IaaS, PaaS и SaaS моделите",
  "Сравнете предложенията на AWS, Azure и GCP",
  "Изберете подходящ модел за различни сценарии",
  "Оценете trade-offs в реални случаи"
]} />

---

## Въведение

<WhyBox title="Защо са важни тези модели?">

Cloud service моделите определят не само какви услуги консумирате, но и **кой е отговорен за какво**. Разбирането им е критично за:
- Взимане на стратегически решения за архитектура
- Оптимизиране на разходите
- Ускоряване на иновациите

</WhyBox>

Cloud computing трансформира как бизнесите оперират и как разработчиците създават софтуер. В сърцето на тази трансформация са трите service модела: **IaaS**, **PaaS** и **SaaS**.

---

## Пазарни Дялове

<Grid columns={3}>
  <Card title="AWS" icon="🟠">
    **37%** market share

    Най-голям екосистем
  </Card>
  <Card title="Azure" icon="🔵">
    **23%** market share

    Hybrid cloud лидер
  </Card>
  <Card title="GCP" icon="🔴">
    **9%** market share

    AI/ML специализация
  </Card>
</Grid>

<InfoBox title="Ключови мотивации за cloud adoption">

- **Scalability** - разширяване на ресурси според нуждите
- **Cost Savings** - pay-as-you-go модел без големи начални инвестиции
- **Disaster Recovery** - вградени решения за data integrity
- **Resource Customization** - гъвкавост при избор на ресурси

</InfoBox>

---

## Основни Концепции

### Virtualization и Scalability

<Grid columns={2}>
  <Card title="Virtualization" icon="🖥️">
    Създава виртуални инстанции на физически хардуер:

    - **Hypervisor VMs** - силна изолация
    - **Containers** - леки, бързо скалиране
  </Card>
  <Card title="Scalability" icon="📈">
    Динамично разширяване на ресурси:

    - **Horizontal** - добавяне на инстанции
    - **Vertical** - увеличаване на ресурси
  </Card>
</Grid>

---

## Infrastructure as a Service (IaaS)

<InfoBox title="Дефиниция">

**IaaS** е най-фундаменталният cloud service модел. Предоставя on-demand достъп до виртуални машини, storage и networking на pay-as-you-go база. Вие контролирате OS, приложенията и данните, докато provider-ът управлява физическата инфраструктура.

</InfoBox>

### Ключови Характеристики

| Компонент | Примери |
|-----------|---------|
| **Compute** | VMs, containers, bare metal servers |
| **Storage** | Object (S3), Block (EBS), File (EFS) |
| **Networking** | VPCs, subnets, load balancers, firewalls |

### IaaS Providers

<Grid columns={3}>
  <Card title="AWS EC2" icon="🟠">
    400+ instance типове

    Гъвкаво pricing
  </Card>
  <Card title="Azure VMs" icon="🔵">
    Microsoft интеграция

    Hybrid support
  </Card>
  <Card title="GCP Compute" icon="🔴">
    Global redundancy

    Auto-scaling
  </Card>
</Grid>

### IaaS Responsibility Matrix

| Аспект | Provider | Customer |
|--------|----------|----------|
| **Physical Infrastructure** | ✅ Servers, datacenters | - |
| **Virtualization Layer** | ✅ Hypervisors | - |
| **Operating System** | - | ✅ Deployment, patching |
| **Applications & Data** | - | ✅ Management, security |

<ComparisonBox
  left={{
    title: "Предимства на IaaS",
    content: (
      <ul>
        <li>✅ Максимална гъвкавост и контрол</li>
        <li>✅ Избягване на hardware разходи</li>
        <li>✅ Бързо скалиране</li>
        <li>✅ High reliability</li>
      </ul>
    )
  }}
  right={{
    title: "Недостатъци на IaaS",
    content: (
      <ul>
        <li>❌ Висок management overhead</li>
        <li>❌ OS patching и security</li>
        <li>❌ Изисква skilled IT staff</li>
        <li>❌ Разходите могат да нараснат</li>
      </ul>
    )
  }}
/>

---

## Platform as a Service (PaaS)

<InfoBox title="Дефиниция">

**PaaS** предоставя managed runtime среда за разработка и deployment на приложения. Абстрахира underlying инфраструктурата, позволявайки на разработчиците да се фокусират **изцяло върху кода**.

</InfoBox>

### PaaS Включва

<Grid columns={2}>
  <Card title="Runtime & Frameworks" icon="⚙️">
    - Node.js, Java, Python
    - Development frameworks
    - Middleware
  </Card>
  <Card title="DevOps Tools" icon="🔧">
    - CI/CD pipelines
    - Monitoring
    - Auto-scaling
  </Card>
</Grid>

### PaaS Providers

| Provider | Услуга | Характеристики |
|----------|--------|----------------|
| **AWS** | Elastic Beanstalk | Auto-deploy от Git, managed runtime |
| **Azure** | App Service | Microsoft integration, easy scaling |
| **GCP** | App Engine | Serverless-like, rapid deployment |

### Кога да изберете PaaS?

<SuccessBox title="Идеални Use Cases за PaaS">

- 🚀 **Web applications** с бърз time-to-market
- 📱 **Mobile backends** и APIs
- 🔌 **Microservices** архитектури
- ⚡ **Rapid prototyping** и MVP разработка

</SuccessBox>

<WarningBox title="Ограничения">

PaaS предлага по-малко контрол над underlying инфраструктурата. Това може да означава:
- Ограничена OS customization
- Потенциален vendor lock-in
- По-малка гъвкавост за специфични изисквания

</WarningBox>

---

## Software as a Service (SaaS)

<InfoBox title="Дефиниция">

**SaaS** доставя готови за употреба приложения на крайни потребители през интернет. Provider-ът хоства и управлява **всичко** — приложението, данните и цялата underlying инфраструктура.

</InfoBox>

### Популярни SaaS Примери

<Grid columns={2}>
  <Card title="Productivity" icon="📄">
    - **Office 365** - Word, Excel, PowerPoint
    - **Google Workspace** - Docs, Sheets
  </Card>
  <Card title="Business" icon="💼">
    - **Salesforce** - CRM
    - **Zoom** - Video conferencing
  </Card>
</Grid>

### SaaS Характеристики

| Характеристика | Описание |
|----------------|----------|
| **Pricing** | Subscription per user/month |
| **Updates** | Автоматични, без user intervention |
| **Availability** | 24/7 достъп от всяко устройство |
| **Security** | Built-in encryption и compliance |

<ComparisonBox
  left={{
    title: "SaaS Предимства",
    content: (
      <ul>
        <li>✅ Zero maintenance</li>
        <li>✅ Бърз deployment</li>
        <li>✅ Predictable costs</li>
        <li>✅ Достъп отвсякъде</li>
      </ul>
    )
  }}
  right={{
    title: "SaaS Недостатъци",
    content: (
      <ul>
        <li>❌ Ограничена customization</li>
        <li>❌ Vendor dependency</li>
        <li>❌ Security/privacy рискове</li>
        <li>❌ Complex data integration</li>
      </ul>
    )
  }}
/>

---

## Сравнение на Моделите

### Responsibility Stack

<svg viewBox="0 0 650 340" style={{maxWidth: '650px', margin: '0 auto', display: 'block'}}>
  <defs>
    <linearGradient id="youGradL" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style={{stopColor:'#e74c3c'}}/>
      <stop offset="100%" style={{stopColor:'#c0392b'}}/>
    </linearGradient>
    <linearGradient id="cloudGradL" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style={{stopColor:'#3498db'}}/>
      <stop offset="100%" style={{stopColor:'#2980b9'}}/>
    </linearGradient>
  </defs>
  <style>{`
    .matrix-header-l { opacity: 0; animation: fadeInL 0.4s ease-out forwards; }
    .header-iaas-l { animation-delay: 0.2s; }
    .header-paas-l { animation-delay: 0.3s; }
    .header-saas-l { animation-delay: 0.4s; }
    .matrix-row-l { opacity: 0; animation: fadeInL 0.3s ease-out forwards; }
    .row-1-l { animation-delay: 0.5s; }
    .row-2-l { animation-delay: 0.6s; }
    .row-3-l { animation-delay: 0.7s; }
    .row-4-l { animation-delay: 0.8s; }
    .row-5-l { animation-delay: 0.9s; }
    .row-6-l { animation-delay: 1.0s; }
    .cell-fill-l { transform-origin: center; transform: scale(0); animation: cellPopL 0.3s ease-out forwards; }
    @keyframes fadeInL { to { opacity: 1; } }
    @keyframes cellPopL { 0% { transform: scale(0); } 70% { transform: scale(1.1); } 100% { transform: scale(1); } }
  `}</style>
  <rect x="150" y="30" width="450" height="300" fill="none" stroke="#ddd" strokeWidth="1" rx="4"/>
  <line x1="150" y1="70" x2="600" y2="70" stroke="#ddd" strokeWidth="1"/>
  <line x1="300" y1="30" x2="300" y2="330" stroke="#ddd" strokeWidth="1"/>
  <line x1="400" y1="30" x2="400" y2="330" stroke="#ddd" strokeWidth="1"/>
  <line x1="500" y1="30" x2="500" y2="330" stroke="#ddd" strokeWidth="1"/>
  <line x1="150" y1="113" x2="600" y2="113" stroke="#ddd" strokeWidth="1"/>
  <line x1="150" y1="156" x2="600" y2="156" stroke="#ddd" strokeWidth="1"/>
  <line x1="150" y1="200" x2="600" y2="200" stroke="#ddd" strokeWidth="1"/>
  <line x1="150" y1="243" x2="600" y2="243" stroke="#ddd" strokeWidth="1"/>
  <line x1="150" y1="286" x2="600" y2="286" stroke="#ddd" strokeWidth="1"/>
  <text className="matrix-header-l header-iaas-l" x="350" y="55" fill="#27ae60" fontFamily="system-ui, sans-serif" fontSize="15" fontWeight="700" textAnchor="middle">IaaS</text>
  <text className="matrix-header-l header-paas-l" x="450" y="55" fill="#3498db" fontFamily="system-ui, sans-serif" fontSize="15" fontWeight="700" textAnchor="middle">PaaS</text>
  <text className="matrix-header-l header-saas-l" x="550" y="55" fill="#9b59b6" fontFamily="system-ui, sans-serif" fontSize="15" fontWeight="700" textAnchor="middle">SaaS</text>
  <text className="matrix-row-l row-1-l" x="70" y="96" fill="#333" fontFamily="system-ui, sans-serif" fontSize="13" fontWeight="600" textAnchor="middle">Data</text>
  <text className="matrix-row-l row-2-l" x="70" y="139" fill="#333" fontFamily="system-ui, sans-serif" fontSize="13" fontWeight="600" textAnchor="middle">Applications</text>
  <text className="matrix-row-l row-3-l" x="70" y="182" fill="#333" fontFamily="system-ui, sans-serif" fontSize="13" fontWeight="600" textAnchor="middle">Runtime</text>
  <text className="matrix-row-l row-4-l" x="70" y="225" fill="#333" fontFamily="system-ui, sans-serif" fontSize="13" fontWeight="600" textAnchor="middle">OS</text>
  <text className="matrix-row-l row-5-l" x="70" y="268" fill="#333" fontFamily="system-ui, sans-serif" fontSize="13" fontWeight="600" textAnchor="middle">Virtualization</text>
  <text className="matrix-row-l row-6-l" x="70" y="312" fill="#333" fontFamily="system-ui, sans-serif" fontSize="13" fontWeight="600" textAnchor="middle">Infrastructure</text>
  <rect className="cell-fill-l" style={{animationDelay:'0.6s'}} x="310" y="78" width="80" height="28" rx="4" fill="url(#youGradL)"/>
  <text className="cell-fill-l" style={{animationDelay:'0.6s'}} x="350" y="97" fill="white" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="600" textAnchor="middle">Customer</text>
  <rect className="cell-fill-l" style={{animationDelay:'0.65s'}} x="410" y="78" width="80" height="28" rx="4" fill="url(#youGradL)"/>
  <text className="cell-fill-l" style={{animationDelay:'0.65s'}} x="450" y="97" fill="white" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="600" textAnchor="middle">Customer</text>
  <rect className="cell-fill-l" style={{animationDelay:'0.7s'}} x="510" y="78" width="80" height="28" rx="4" fill="url(#youGradL)"/>
  <text className="cell-fill-l" style={{animationDelay:'0.7s'}} x="550" y="97" fill="white" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="600" textAnchor="middle">Provider*</text>
  <rect className="cell-fill-l" style={{animationDelay:'0.7s'}} x="310" y="121" width="80" height="28" rx="4" fill="url(#youGradL)"/>
  <text className="cell-fill-l" style={{animationDelay:'0.7s'}} x="350" y="140" fill="white" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="600" textAnchor="middle">Customer</text>
  <rect className="cell-fill-l" style={{animationDelay:'0.75s'}} x="410" y="121" width="80" height="28" rx="4" fill="url(#youGradL)"/>
  <text className="cell-fill-l" style={{animationDelay:'0.75s'}} x="450" y="140" fill="white" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="600" textAnchor="middle">Customer</text>
  <rect className="cell-fill-l" style={{animationDelay:'0.8s'}} x="510" y="121" width="80" height="28" rx="4" fill="url(#cloudGradL)"/>
  <text className="cell-fill-l" style={{animationDelay:'0.8s'}} x="550" y="140" fill="white" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="600" textAnchor="middle">Provider</text>
  <rect className="cell-fill-l" style={{animationDelay:'0.8s'}} x="310" y="164" width="80" height="28" rx="4" fill="url(#youGradL)"/>
  <text className="cell-fill-l" style={{animationDelay:'0.8s'}} x="350" y="183" fill="white" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="600" textAnchor="middle">Customer</text>
  <rect className="cell-fill-l" style={{animationDelay:'0.85s'}} x="410" y="164" width="80" height="28" rx="4" fill="url(#cloudGradL)"/>
  <text className="cell-fill-l" style={{animationDelay:'0.85s'}} x="450" y="183" fill="white" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="600" textAnchor="middle">Provider</text>
  <rect className="cell-fill-l" style={{animationDelay:'0.9s'}} x="510" y="164" width="80" height="28" rx="4" fill="url(#cloudGradL)"/>
  <text className="cell-fill-l" style={{animationDelay:'0.9s'}} x="550" y="183" fill="white" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="600" textAnchor="middle">Provider</text>
  <rect className="cell-fill-l" style={{animationDelay:'0.9s'}} x="310" y="207" width="80" height="28" rx="4" fill="url(#youGradL)"/>
  <text className="cell-fill-l" style={{animationDelay:'0.9s'}} x="350" y="226" fill="white" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="600" textAnchor="middle">Customer</text>
  <rect className="cell-fill-l" style={{animationDelay:'0.95s'}} x="410" y="207" width="80" height="28" rx="4" fill="url(#cloudGradL)"/>
  <text className="cell-fill-l" style={{animationDelay:'0.95s'}} x="450" y="226" fill="white" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="600" textAnchor="middle">Provider</text>
  <rect className="cell-fill-l" style={{animationDelay:'1.0s'}} x="510" y="207" width="80" height="28" rx="4" fill="url(#cloudGradL)"/>
  <text className="cell-fill-l" style={{animationDelay:'1.0s'}} x="550" y="226" fill="white" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="600" textAnchor="middle">Provider</text>
  <rect className="cell-fill-l" style={{animationDelay:'1.0s'}} x="310" y="250" width="80" height="28" rx="4" fill="url(#cloudGradL)"/>
  <text className="cell-fill-l" style={{animationDelay:'1.0s'}} x="350" y="269" fill="white" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="600" textAnchor="middle">Provider</text>
  <rect className="cell-fill-l" style={{animationDelay:'1.05s'}} x="410" y="250" width="80" height="28" rx="4" fill="url(#cloudGradL)"/>
  <text className="cell-fill-l" style={{animationDelay:'1.05s'}} x="450" y="269" fill="white" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="600" textAnchor="middle">Provider</text>
  <rect className="cell-fill-l" style={{animationDelay:'1.1s'}} x="510" y="250" width="80" height="28" rx="4" fill="url(#cloudGradL)"/>
  <text className="cell-fill-l" style={{animationDelay:'1.1s'}} x="550" y="269" fill="white" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="600" textAnchor="middle">Provider</text>
  <rect className="cell-fill-l" style={{animationDelay:'1.1s'}} x="310" y="293" width="80" height="28" rx="4" fill="url(#cloudGradL)"/>
  <text className="cell-fill-l" style={{animationDelay:'1.1s'}} x="350" y="312" fill="white" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="600" textAnchor="middle">Provider</text>
  <rect className="cell-fill-l" style={{animationDelay:'1.15s'}} x="410" y="293" width="80" height="28" rx="4" fill="url(#cloudGradL)"/>
  <text className="cell-fill-l" style={{animationDelay:'1.15s'}} x="450" y="312" fill="white" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="600" textAnchor="middle">Provider</text>
  <rect className="cell-fill-l" style={{animationDelay:'1.2s'}} x="510" y="293" width="80" height="28" rx="4" fill="url(#cloudGradL)"/>
  <text className="cell-fill-l" style={{animationDelay:'1.2s'}} x="550" y="312" fill="white" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="600" textAnchor="middle">Provider</text>
</svg>

### Детайлно Сравнение

| Аспект | IaaS | PaaS | SaaS |
|--------|------|------|------|
| **Контрол** | Пълен (VM, OS, network) | Application-level | Минимален |
| **Management** | Висок | Среден | Нисък |
| **Scalability** | Manual/configured | Автоматична | Built-in |
| **Pricing** | Pay-per-resource | Platform + usage | Per user/month |
| **Use Case** | Custom apps, migrations | Web/mobile apps, APIs | Off-the-shelf software |

---

## Provider Comparison: AWS vs Azure vs GCP

### Детайлно Сравнение

| Критерий | AWS | Azure | GCP |
|----------|-----|-------|-----|
| **IaaS Compute** | EC2 (spot instances) | Virtual Machines | Compute Engine |
| **PaaS Web/App** | Elastic Beanstalk | App Service | App Engine |
| **Serverless** | Lambda | Functions | Cloud Functions |
| **Hybrid** | Outposts | Arc/Stack (лидер) | Anthos |
| **Industry Fit** | E-commerce, SaaS | Enterprise, Microsoft | AI/Data, startups |

<CollapsibleSection title="📊 Детайли за всеки provider" icon="📊">

**AWS:**
- Най-голям екосистем с 200+ услуги
- Flexible pricing с spot instances
- 98+ security сертификации
- Идеален за: e-commerce, fintech, startups

**Azure:**
- Силна Microsoft интеграция (Teams, O365, Dynamics)
- Hybrid cloud лидер с Azure Arc и Stack
- HIPAA, ISO compliance
- Идеален за: enterprises, government, healthcare

**GCP:**
- AI/ML и Big Data лидерство
- Strong open-source focus
- Sustained-use discounts
- Идеален за: tech startups, data companies

</CollapsibleSection>

---

## Case Study: Startup Scaling

<InfoBox title="Сценарий">

**TechStart Inc.** е startup, който мигрира от IaaS към PaaS за да се справи с растящия трафик.

</InfoBox>

### Фаза 1: IaaS (AWS EC2)

- 10 EC2 instances с Ubuntu
- Manual deployment: **4 часа**
- 2 full-time DevOps engineers
- 3 incidents/месец

### Фаза 2: PaaS Migration (Elastic Beanstalk)

| Метрика | Преди (IaaS) | След (PaaS) |
|---------|--------------|-------------|
| Deploy time | 4 часа | 15 минути |
| Incidents/месец | 3 | 0.5 |
| DevOps engineers | 2 | 0 |
| Infrastructure focus | 60% | 10% |

<SuccessBox title="Резултат">

Миграцията към PaaS намали **TCO** (Total Cost of Ownership) чрез:
- Елиминиране на dedicated DevOps персонал
- Ускорени development цикли
- Автоматично scaling при traffic spikes

</SuccessBox>

---

## Selection Criteria

### Кога да изберете кой модел?

<Grid columns={3}>
  <Card title="Избери IaaS" icon="🔧">
    - Custom OS configurations
    - Legacy app migrations
    - Maximum flexibility нужда
    - Skilled IT екип
  </Card>
  <Card title="Избери PaaS" icon="🚀">
    - Бърз time-to-market
    - Web/mobile apps
    - CI/CD автоматизация
    - Малък DevOps екип
  </Card>
  <Card title="Избери SaaS" icon="📱">
    - Off-the-shelf нужди
    - Zero IT overhead
    - Email, CRM, productivity
    - Бърз rollout
  </Card>
</Grid>

### Decision Framework

1. **Ниво на контрол:** Нуждаете ли се от пълен контрол над OS? → IaaS
2. **Management tolerance:** Какви ресурси имате за управление? → По-малко = SaaS
3. **Speed to market:** Критично бърз deployment? → PaaS/SaaS
4. **Integration:** Съществуващ Microsoft stack? → Azure

---

## Бъдещи Тенденции

<Grid columns={2}>
  <Card title="Hybrid & Multi-cloud" icon="☁️">
    Комбиниране на on-premises с cloud за оптимизация и compliance
  </Card>
  <Card title="Serverless" icon="⚡">
    Еволюция на PaaS - deploy код без управление на сървъри
  </Card>
</Grid>

<Grid columns={2}>
  <Card title="Edge Computing" icon="📍">
    Compute по-близо до data source за намалена latency
  </Card>
  <Card title="AI/ML as a Service" icon="🤖">
    Достъпни AI услуги за всеки размер организация
  </Card>
</Grid>

<WarningBox title="Best Practices">

- **Prioritize Interoperability** - избягвайте vendor lock-in
- **Adopt Hybrid Tools** - Azure Arc, Anthos за unified management
- **Evaluate TCO** - пълните разходи, не само infrastructure

</WarningBox>

---

## Обобщение

<Grid columns={3}>
  <Card title="IaaS" icon="🏗️">
    Максимален контрол

    Maximum отговорност

    EC2, Azure VMs
  </Card>
  <Card title="PaaS" icon="🚀">
    Фокус върху кода

    Managed infrastructure

    App Engine, Beanstalk
  </Card>
  <Card title="SaaS" icon="📱">
    Ready-to-use apps

    Zero management

    Office 365, Salesforce
  </Card>
</Grid>

---

## Допълнителни Ресурси

### Официална Документация

- [AWS Documentation](https://docs.aws.amazon.com/) - Comprehensive AWS guides
- [Azure Learn](https://learn.microsoft.com/azure/) - Microsoft learning paths
- [Google Cloud Training](https://cloud.google.com/training) - GCP certifications

### Сравнителни Ресурси

- [Cloud Comparison Tool](https://comparecloud.in/) - Side-by-side comparison
- [Gartner Magic Quadrant](https://www.gartner.com/) - Industry analysis

### Видео Материали

- [AWS re:Invent](https://www.youtube.com/user/AmazonWebServices) - AWS conference talks
- [Microsoft Ignite](https://www.youtube.com/c/MicrosoftIgnite) - Azure sessions
