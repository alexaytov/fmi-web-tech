---
title: Cloud Service Models - IaaS, PaaS, SaaS
theme: white
highlightTheme: github
transition: slide
---

# Cloud Service Models

### IaaS, PaaS & SaaS

Note:
Welcome to the lecture on cloud service models. Today we'll explore the fundamental building blocks of modern cloud computing.

---

## Agenda

- The "as-a-Service" Spectrum
- Infrastructure as a Service (IaaS)
- Platform as a Service (PaaS)
- Software as a Service (SaaS)
- Provider Comparison
- Selection Criteria

Note:
We'll cover all three models, compare major providers, and learn how to choose the right model.

---

<!-- .slide: data-background="#2c3e50" -->

# The "as-a-Service" Spectrum

---

## Cloud Computing Revolution

🔄 **Transformed** how businesses operate <!-- .element: class="fragment" -->

📈 Enabled **scalability** and **cost-efficiency** <!-- .element: class="fragment" -->

🎚️ Different levels of **abstraction** and **management** <!-- .element: class="fragment" -->

Note:
The cloud has fundamentally changed software development and IT operations.

---

## Market Dominance

| Provider | Market Share |
|----------|-------------|
| AWS | 37% |
| Azure | 23% |
| GCP | 9% |

Note:
These three providers dominate the cloud market with their comprehensive service offerings.

---

## The Three Models

<svg viewBox="0 0 600 320" style="max-width: 600px; margin: 0 auto; display: block;">
  <defs>
    <linearGradient id="saasGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#9b59b6"/>
      <stop offset="100%" style="stop-color:#8e44ad"/>
    </linearGradient>
    <linearGradient id="paasGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#3498db"/>
      <stop offset="100%" style="stop-color:#2980b9"/>
    </linearGradient>
    <linearGradient id="iaasGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#27ae60"/>
      <stop offset="100%" style="stop-color:#1e8449"/>
    </linearGradient>
    <filter id="stackShadow" x="-10%" y="-10%" width="120%" height="130%">
      <feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="#000" flood-opacity="0.2"/>
    </filter>
  </defs>
  <style>
    .stack-layer { transform-origin: center; }
    .layer-iaas { opacity: 0; transform: translateY(30px); animation: slideUp 0.6s ease-out 0.3s forwards; }
    .layer-paas { opacity: 0; transform: translateY(30px); animation: slideUp 0.6s ease-out 0.6s forwards; }
    .layer-saas { opacity: 0; transform: translateY(30px); animation: slideUp 0.6s ease-out 0.9s forwards; }
    .stack-text { opacity: 0; animation: fadeIn 0.4s ease-out forwards; }
    .text-iaas { animation-delay: 0.6s; }
    .text-paas { animation-delay: 0.9s; }
    .text-saas { animation-delay: 1.2s; }
    .stack-label { opacity: 0; animation: fadeIn 0.4s ease-out forwards; }
    .label-iaas { animation-delay: 0.8s; }
    .label-paas { animation-delay: 1.1s; }
    .label-saas { animation-delay: 1.4s; }
    .stack-icon { opacity: 0; transform: scale(0); animation: popIn 0.4s ease-out forwards; }
    .icon-iaas { animation-delay: 0.7s; }
    .icon-paas { animation-delay: 1.0s; }
    .icon-saas { animation-delay: 1.3s; }
    @keyframes slideUp { to { opacity: 1; transform: translateY(0); } }
    @keyframes fadeIn { to { opacity: 1; } }
    @keyframes popIn { 0% { opacity: 0; transform: scale(0); } 70% { transform: scale(1.1); } 100% { opacity: 1; transform: scale(1); } }
  </style>
  <!-- IaaS Layer (bottom) -->
  <g class="stack-layer layer-iaas" filter="url(#stackShadow)">
    <rect x="50" y="210" width="380" height="80" rx="8" fill="url(#iaasGrad)"/>
    <text class="stack-text text-iaas" x="240" y="245" fill="white" font-family="system-ui, sans-serif" font-size="22" font-weight="700" text-anchor="middle">IaaS</text>
    <text class="stack-text text-iaas" x="240" y="270" fill="rgba(255,255,255,0.8)" font-family="system-ui, sans-serif" font-size="12" text-anchor="middle">EC2, Azure VMs, Compute Engine</text>
  </g>
  <text class="stack-label label-iaas" x="470" y="250" fill="#27ae60" font-family="system-ui, sans-serif" font-size="14" font-weight="600">← Ops: Manage VMs</text>
  <text class="stack-icon icon-iaas" x="80" y="260" font-size="28">🖥️</text>
  <!-- PaaS Layer (middle) -->
  <g class="stack-layer layer-paas" filter="url(#stackShadow)">
    <rect x="50" y="120" width="380" height="80" rx="8" fill="url(#paasGrad)"/>
    <text class="stack-text text-paas" x="240" y="155" fill="white" font-family="system-ui, sans-serif" font-size="22" font-weight="700" text-anchor="middle">PaaS</text>
    <text class="stack-text text-paas" x="240" y="180" fill="rgba(255,255,255,0.8)" font-family="system-ui, sans-serif" font-size="12" text-anchor="middle">App Engine, Elastic Beanstalk</text>
  </g>
  <text class="stack-label label-paas" x="470" y="160" fill="#3498db" font-family="system-ui, sans-serif" font-size="14" font-weight="600">← Dev: Deploy Code</text>
  <text class="stack-icon icon-paas" x="80" y="170" font-size="28">⚙️</text>
  <!-- SaaS Layer (top) -->
  <g class="stack-layer layer-saas" filter="url(#stackShadow)">
    <rect x="50" y="30" width="380" height="80" rx="8" fill="url(#saasGrad)"/>
    <text class="stack-text text-saas" x="240" y="65" fill="white" font-family="system-ui, sans-serif" font-size="22" font-weight="700" text-anchor="middle">SaaS</text>
    <text class="stack-text text-saas" x="240" y="90" fill="rgba(255,255,255,0.8)" font-family="system-ui, sans-serif" font-size="12" text-anchor="middle">Office 365, Salesforce</text>
  </g>
  <text class="stack-label label-saas" x="470" y="70" fill="#9b59b6" font-family="system-ui, sans-serif" font-size="14" font-weight="600">← User: Use App</text>
  <text class="stack-icon icon-saas" x="80" y="80" font-size="28">☁️</text>
</svg>

Note:
Each model represents a different level of abstraction. Moving up means less management responsibility.

---

<!-- .slide: data-background="#27ae60" -->

# Infrastructure as a Service

## IaaS

---

## What is IaaS?

**Virtual machines, storage, networking** <!-- .element: class="fragment" -->

On-demand, pay-as-you-go <!-- .element: class="fragment" -->

**You manage:** OS, applications, data <!-- .element: class="fragment" -->

**Provider manages:** Physical hardware <!-- .element: class="fragment" -->

Note:
IaaS gives you the building blocks. You have maximum control but also maximum responsibility.

---

## IaaS Key Features

- **Compute:** VMs, containers, bare metal
- **Storage:** Object, block, file storage
- **Networking:** VPCs, load balancers, firewalls

Note:
These resources can be provisioned and scaled dynamically.

--

## IaaS Providers

| Provider | Service |
|----------|---------|
| AWS | EC2 |
| Azure | Virtual Machines |
| GCP | Compute Engine |

Note:
All major providers offer similar core IaaS capabilities.

---

## IaaS Advantages

✅ **Maximum flexibility** and control <!-- .element: class="fragment" -->

✅ **No hardware** purchases <!-- .element: class="fragment" -->

✅ **Rapid scaling** for any workload <!-- .element: class="fragment" -->

--

## IaaS Limitations

❌ **High management overhead** <!-- .element: class="fragment" -->

❌ OS patching, security, updates <!-- .element: class="fragment" -->

❌ Requires **skilled IT staff** <!-- .element: class="fragment" -->

---

<!-- .slide: data-background="#3498db" -->

# Platform as a Service

## PaaS

---

## What is PaaS?

**Managed runtime environment** <!-- .element: class="fragment" -->

Focus on **code, not infrastructure** <!-- .element: class="fragment" -->

Built-in **CI/CD, scaling, monitoring** <!-- .element: class="fragment" -->

Note:
PaaS abstracts away the infrastructure, letting developers focus purely on their applications.

---

## PaaS Includes

- Runtime support (Node.js, Java, Python)
- Development frameworks
- Middleware & databases
- DevOps tools
- Auto-scaling

--

## PaaS Providers

| Provider | Service |
|----------|---------|
| AWS | Elastic Beanstalk |
| Azure | App Service |
| GCP | App Engine |

---

## PaaS Use Cases

🚀 **Web applications** <!-- .element: class="fragment" -->

📱 **Mobile backends** <!-- .element: class="fragment" -->

🔌 **APIs & microservices** <!-- .element: class="fragment" -->

⚡ **Rapid prototyping** <!-- .element: class="fragment" -->

Note:
PaaS is ideal when speed to market matters more than infrastructure control.

---

## IaaS vs PaaS

| Aspect | IaaS | PaaS |
|--------|------|------|
| Control | Full | Application-level |
| Speed | Slower setup | Fast deployment |
| Overhead | High | Low |
| Customization | Unlimited | Limited |

---

<!-- .slide: data-background="#9b59b6" -->

# Software as a Service

## SaaS

---

## What is SaaS?

**Ready-to-use applications** <!-- .element: class="fragment" -->

Accessed via **web browser** <!-- .element: class="fragment" -->

**Provider manages everything** <!-- .element: class="fragment" -->

Note:
SaaS is the highest level of abstraction. Users just consume the service.

---

## SaaS Examples

- **Office 365** - Productivity
- **Salesforce** - CRM
- **Gmail** - Email
- **Zoom** - Video conferencing

Note:
These are applications that millions use daily without any infrastructure management.

---

## SaaS Characteristics

💳 **Subscription pricing** <!-- .element: class="fragment" -->

🔄 **Automatic updates** <!-- .element: class="fragment" -->

🌐 **Access from anywhere** <!-- .element: class="fragment" -->

🔒 **Built-in security** <!-- .element: class="fragment" -->

--

## SaaS Trade-offs

| Pros | Cons |
|------|------|
| Zero maintenance | Limited customization |
| Rapid deployment | Vendor dependency |
| Predictable costs | Less control |

---

<!-- .slide: data-background="#e74c3c" -->

# Responsibility Model

---

## Who Manages What?

<svg viewBox="0 0 650 320" style="max-width: 650px; margin: 0 auto; display: block;">
  <defs>
    <linearGradient id="youGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#e74c3c"/>
      <stop offset="100%" style="stop-color:#c0392b"/>
    </linearGradient>
    <linearGradient id="cloudGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#3498db"/>
      <stop offset="100%" style="stop-color:#2980b9"/>
    </linearGradient>
  </defs>
  <style>
    .matrix-header { opacity: 0; animation: fadeIn 0.4s ease-out forwards; }
    .header-iaas { animation-delay: 0.2s; }
    .header-paas { animation-delay: 0.3s; }
    .header-saas { animation-delay: 0.4s; }
    .matrix-row { opacity: 0; animation: fadeIn 0.3s ease-out forwards; }
    .row-1 { animation-delay: 0.5s; }
    .row-2 { animation-delay: 0.6s; }
    .row-3 { animation-delay: 0.7s; }
    .row-4 { animation-delay: 0.8s; }
    .row-5 { animation-delay: 0.9s; }
    .cell-fill { transform-origin: center; transform: scale(0); animation: cellPop 0.3s ease-out forwards; }
    .cell-1-1 { animation-delay: 0.6s; } .cell-1-2 { animation-delay: 0.65s; } .cell-1-3 { animation-delay: 0.7s; }
    .cell-2-1 { animation-delay: 0.7s; } .cell-2-2 { animation-delay: 0.75s; } .cell-2-3 { animation-delay: 0.8s; }
    .cell-3-1 { animation-delay: 0.8s; } .cell-3-2 { animation-delay: 0.85s; } .cell-3-3 { animation-delay: 0.9s; }
    .cell-4-1 { animation-delay: 0.9s; } .cell-4-2 { animation-delay: 0.95s; } .cell-4-3 { animation-delay: 1.0s; }
    .cell-5-1 { animation-delay: 1.0s; } .cell-5-2 { animation-delay: 1.05s; } .cell-5-3 { animation-delay: 1.1s; }
    @keyframes fadeIn { to { opacity: 1; } }
    @keyframes cellPop { 0% { transform: scale(0); } 70% { transform: scale(1.1); } 100% { transform: scale(1); } }
  </style>
  <!-- Grid lines -->
  <rect x="150" y="30" width="450" height="280" fill="none" stroke="#ddd" stroke-width="1" rx="4"/>
  <line x1="150" y1="70" x2="600" y2="70" stroke="#ddd" stroke-width="1"/>
  <line x1="300" y1="30" x2="300" y2="310" stroke="#ddd" stroke-width="1"/>
  <line x1="400" y1="30" x2="400" y2="310" stroke="#ddd" stroke-width="1"/>
  <line x1="500" y1="30" x2="500" y2="310" stroke="#ddd" stroke-width="1"/>
  <line x1="150" y1="118" x2="600" y2="118" stroke="#ddd" stroke-width="1"/>
  <line x1="150" y1="166" x2="600" y2="166" stroke="#ddd" stroke-width="1"/>
  <line x1="150" y1="214" x2="600" y2="214" stroke="#ddd" stroke-width="1"/>
  <line x1="150" y1="262" x2="600" y2="262" stroke="#ddd" stroke-width="1"/>
  <!-- Headers -->
  <text class="matrix-header header-iaas" x="350" y="55" fill="#27ae60" font-family="system-ui, sans-serif" font-size="16" font-weight="700" text-anchor="middle">IaaS</text>
  <text class="matrix-header header-paas" x="450" y="55" fill="#3498db" font-family="system-ui, sans-serif" font-size="16" font-weight="700" text-anchor="middle">PaaS</text>
  <text class="matrix-header header-saas" x="550" y="55" fill="#9b59b6" font-family="system-ui, sans-serif" font-size="16" font-weight="700" text-anchor="middle">SaaS</text>
  <!-- Row labels -->
  <text class="matrix-row row-1" x="70" y="99" fill="#333" font-family="system-ui, sans-serif" font-size="14" font-weight="600" text-anchor="middle">Data</text>
  <text class="matrix-row row-2" x="70" y="147" fill="#333" font-family="system-ui, sans-serif" font-size="14" font-weight="600" text-anchor="middle">Applications</text>
  <text class="matrix-row row-3" x="70" y="195" fill="#333" font-family="system-ui, sans-serif" font-size="14" font-weight="600" text-anchor="middle">Runtime</text>
  <text class="matrix-row row-4" x="70" y="243" fill="#333" font-family="system-ui, sans-serif" font-size="14" font-weight="600" text-anchor="middle">OS</text>
  <text class="matrix-row row-5" x="70" y="291" fill="#333" font-family="system-ui, sans-serif" font-size="14" font-weight="600" text-anchor="middle">Infrastructure</text>
  <!-- Row 1: Data - You, You, You* -->
  <rect class="cell-fill cell-1-1" x="310" y="78" width="80" height="32" rx="4" fill="url(#youGrad)"/>
  <text class="cell-fill cell-1-1" x="350" y="99" fill="white" font-family="system-ui, sans-serif" font-size="12" font-weight="600" text-anchor="middle">You</text>
  <rect class="cell-fill cell-1-2" x="410" y="78" width="80" height="32" rx="4" fill="url(#youGrad)"/>
  <text class="cell-fill cell-1-2" x="450" y="99" fill="white" font-family="system-ui, sans-serif" font-size="12" font-weight="600" text-anchor="middle">You</text>
  <rect class="cell-fill cell-1-3" x="510" y="78" width="80" height="32" rx="4" fill="url(#youGrad)"/>
  <text class="cell-fill cell-1-3" x="550" y="99" fill="white" font-family="system-ui, sans-serif" font-size="12" font-weight="600" text-anchor="middle">You*</text>
  <!-- Row 2: Applications - You, You, Cloud -->
  <rect class="cell-fill cell-2-1" x="310" y="126" width="80" height="32" rx="4" fill="url(#youGrad)"/>
  <text class="cell-fill cell-2-1" x="350" y="147" fill="white" font-family="system-ui, sans-serif" font-size="12" font-weight="600" text-anchor="middle">You</text>
  <rect class="cell-fill cell-2-2" x="410" y="126" width="80" height="32" rx="4" fill="url(#youGrad)"/>
  <text class="cell-fill cell-2-2" x="450" y="147" fill="white" font-family="system-ui, sans-serif" font-size="12" font-weight="600" text-anchor="middle">You</text>
  <rect class="cell-fill cell-2-3" x="510" y="126" width="80" height="32" rx="4" fill="url(#cloudGrad)"/>
  <text class="cell-fill cell-2-3" x="550" y="147" fill="white" font-family="system-ui, sans-serif" font-size="12" font-weight="600" text-anchor="middle">Cloud</text>
  <!-- Row 3: Runtime - You, Cloud, Cloud -->
  <rect class="cell-fill cell-3-1" x="310" y="174" width="80" height="32" rx="4" fill="url(#youGrad)"/>
  <text class="cell-fill cell-3-1" x="350" y="195" fill="white" font-family="system-ui, sans-serif" font-size="12" font-weight="600" text-anchor="middle">You</text>
  <rect class="cell-fill cell-3-2" x="410" y="174" width="80" height="32" rx="4" fill="url(#cloudGrad)"/>
  <text class="cell-fill cell-3-2" x="450" y="195" fill="white" font-family="system-ui, sans-serif" font-size="12" font-weight="600" text-anchor="middle">Cloud</text>
  <rect class="cell-fill cell-3-3" x="510" y="174" width="80" height="32" rx="4" fill="url(#cloudGrad)"/>
  <text class="cell-fill cell-3-3" x="550" y="195" fill="white" font-family="system-ui, sans-serif" font-size="12" font-weight="600" text-anchor="middle">Cloud</text>
  <!-- Row 4: OS - You, Cloud, Cloud -->
  <rect class="cell-fill cell-4-1" x="310" y="222" width="80" height="32" rx="4" fill="url(#youGrad)"/>
  <text class="cell-fill cell-4-1" x="350" y="243" fill="white" font-family="system-ui, sans-serif" font-size="12" font-weight="600" text-anchor="middle">You</text>
  <rect class="cell-fill cell-4-2" x="410" y="222" width="80" height="32" rx="4" fill="url(#cloudGrad)"/>
  <text class="cell-fill cell-4-2" x="450" y="243" fill="white" font-family="system-ui, sans-serif" font-size="12" font-weight="600" text-anchor="middle">Cloud</text>
  <rect class="cell-fill cell-4-3" x="510" y="222" width="80" height="32" rx="4" fill="url(#cloudGrad)"/>
  <text class="cell-fill cell-4-3" x="550" y="243" fill="white" font-family="system-ui, sans-serif" font-size="12" font-weight="600" text-anchor="middle">Cloud</text>
  <!-- Row 5: Infrastructure - Cloud, Cloud, Cloud -->
  <rect class="cell-fill cell-5-1" x="310" y="270" width="80" height="32" rx="4" fill="url(#cloudGrad)"/>
  <text class="cell-fill cell-5-1" x="350" y="291" fill="white" font-family="system-ui, sans-serif" font-size="12" font-weight="600" text-anchor="middle">Cloud</text>
  <rect class="cell-fill cell-5-2" x="410" y="270" width="80" height="32" rx="4" fill="url(#cloudGrad)"/>
  <text class="cell-fill cell-5-2" x="450" y="291" fill="white" font-family="system-ui, sans-serif" font-size="12" font-weight="600" text-anchor="middle">Cloud</text>
  <rect class="cell-fill cell-5-3" x="510" y="270" width="80" height="32" rx="4" fill="url(#cloudGrad)"/>
  <text class="cell-fill cell-5-3" x="550" y="291" fill="white" font-family="system-ui, sans-serif" font-size="12" font-weight="600" text-anchor="middle">Cloud</text>
</svg>

Note:
The responsibility shifts from customer to provider as you move from IaaS to SaaS.

---

<!-- .slide: data-background="#2c3e50" -->

# Provider Comparison

---

## AWS Strengths

📊 **Largest ecosystem** (200+ services) <!-- .element: class="fragment" -->

💰 **Flexible pricing** (spot instances) <!-- .element: class="fragment" -->

🏭 **Best for:** E-commerce, SaaS, startups <!-- .element: class="fragment" -->

---

## Azure Strengths

🔗 **Microsoft integration** (Teams, O365) <!-- .element: class="fragment" -->

☁️ **Hybrid cloud leader** (Azure Arc) <!-- .element: class="fragment" -->

🏢 **Best for:** Enterprises, government <!-- .element: class="fragment" -->

---

## GCP Strengths

🤖 **AI/ML leadership** <!-- .element: class="fragment" -->

📈 **Big data & analytics** <!-- .element: class="fragment" -->

💻 **Best for:** Tech startups, data companies <!-- .element: class="fragment" -->

---

## Quick Comparison

| | AWS | Azure | GCP |
|--|-----|-------|-----|
| IaaS | EC2 | VMs | Compute Engine |
| PaaS | Beanstalk | App Service | App Engine |
| Serverless | Lambda | Functions | Cloud Functions |

---

<!-- .slide: data-background="#16a085" -->

# Case Study

---

## Startup Journey

### Phase 1: IaaS (EC2)
- Full control needed
- Custom configurations
- **High operational burden**

--

### Phase 2: PaaS Migration

- Traffic growing 40%/quarter
- DevOps team overwhelmed
- Moved to **Elastic Beanstalk**

--

### Results

| Metric | Before | After |
|--------|--------|-------|
| Deploy time | 4 hours | 15 min |
| Incidents/month | 3 | 0.5 |
| DevOps engineers | 2 | 0 |

---

<!-- .slide: data-background="#8e44ad" -->

# Selection Criteria

---

## Decision Framework

1. **Control needed?** → IaaS <!-- .element: class="fragment" -->

2. **Speed to market?** → PaaS <!-- .element: class="fragment" -->

3. **Off-the-shelf app?** → SaaS <!-- .element: class="fragment" -->

4. **Hybrid needs?** → Azure <!-- .element: class="fragment" -->

5. **AI/ML focus?** → GCP <!-- .element: class="fragment" -->

---

## Future Trends

☁️ **Hybrid & Multi-cloud** <!-- .element: class="fragment" -->

⚡ **Serverless computing** <!-- .element: class="fragment" -->

📍 **Edge computing** <!-- .element: class="fragment" -->

🤖 **AI/ML as a Service** <!-- .element: class="fragment" -->

---

## Key Takeaways

1. **IaaS** = Maximum control, maximum responsibility
2. **PaaS** = Focus on code, not infrastructure
3. **SaaS** = Ready-to-use applications
4. **Choose based on** control, speed, and cost needs

---

<!-- .slide: data-background="#2c3e50" -->

# Questions?

### Thank you!
