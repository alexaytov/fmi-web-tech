---
title: Уеб Сигурност - OWASP Top 10
theme: white
highlightTheme: github
transition: slide
---

# Уеб Сигурност

### OWASP Top 10 и Best Practices

🔒 Защитете вашите приложения

---

## Защо е важна уеб сигурността?

Уеб приложенията са **главна мишена** за атаки

💰 **$5.9M** - средна цена на data breach (finance) <!-- .element: class="fragment" -->

🤖 **Автоматизирани атаки** - AI-driven scanning <!-- .element: class="fragment" -->

📈 **Растящи заплахи** - APIs, cloud, mobile <!-- .element: class="fragment" -->

⚖️ **GDPR глоби** - до 4% от годишния оборот <!-- .element: class="fragment" -->

---

## Какво е OWASP?

**Open Web Application Security Project**

📊 Evidence-based ranking на рискове <!-- .element: class="fragment" -->

🔄 Редовно обновяван (2025) <!-- .element: class="fragment" -->

📖 Индустриален стандарт <!-- .element: class="fragment" -->

🆓 Безплатни ресурси <!-- .element: class="fragment" -->

---

## OWASP Top 10 (2025)

| # | Риск | Описание |
|---|------|----------|
| A01 | Broken Access Control | Неоторизиран достъп |
| A02 | Security Misconfiguration | Грешна конфигурация |
| A03 | Injection | SQL, Command injection |
| A04 | Cryptographic Failures | Слаба криптография |
| A05-A10 | SSRF, Components, Auth... | Допълнителни рискове |

---

<!-- .slide: data-background="#c0392b" -->

# Златно Правило

## НИКОГА не се доверявайте на потребителски вход!

---

## Input Handling

**Validation** - Проверка на формат <!-- .element: class="fragment" -->

**Sanitization** - Премахване на опасни символи <!-- .element: class="fragment" -->

**Whitelist** > Blacklist <!-- .element: class="fragment" -->

---

## Validation vs Sanitization

| Validation | Sanitization |
|------------|--------------|
| Проверява формат | Почиства данни |
| Отхвърля невалидни | Обезврежда опасни |
| Whitelist подход | Context-specific |
| `email.match(regex)` | `htmlspecialchars()` |

---

<!-- .slide: data-background="#e74c3c" -->

# SQL Injection

### A03:2025

---

## Как работи SQL Injection?

```java
// ❌ Уязвим код
String query = "SELECT * FROM users WHERE id = '"
             + userId + "'";
```

Ако userId = `' OR '1'='1' --`

```sql
SELECT * FROM users WHERE id = '' OR '1'='1' --'
```

💀 Връща ВСИЧКИ записи!

---

## Prepared Statements

```java
// ✅ Сигурен код
String sql = "SELECT * FROM users WHERE id = ?";
PreparedStatement pstmt = conn.prepareStatement(sql);
pstmt.setString(1, userId);
ResultSet results = pstmt.executeQuery();
```

Базата данни третира входа като **DATA**, не като **CODE**

---

## SQL Injection Защита

✅ **Prepared Statements** - златен стандарт <!-- .element: class="fragment" -->

✅ **Input Validation** - whitelist <!-- .element: class="fragment" -->

✅ **Least Privilege** - минимални права за DB user <!-- .element: class="fragment" -->

✅ **Escaping** - като допълнителна защита <!-- .element: class="fragment" -->

---

<!-- .slide: data-background="#9b59b6" -->

# Cross-Site Scripting (XSS)

### Инжектиране на JavaScript

---

## XSS Атака

```php
// ❌ Уязвим код
echo "Hello, " . $_GET['name'];
```

Ако name = `<script>steal(cookie)</script>`

Скриптът се изпълнява в **браузъра на жертвата**!

---

## Типове XSS

| Тип | Описание |
|-----|----------|
| **Stored** | Записан в DB, засяга всички |
| **Reflected** | Чрез URL, изисква клик |
| **DOM-based** | Изцяло client-side |

---

## XSS Защита

```php
// ✅ Output Encoding
echo htmlspecialchars($input, ENT_QUOTES, 'UTF-8');
```

```http
# Content Security Policy
Content-Security-Policy: default-src 'self'
```

```http
# HttpOnly cookies
Set-Cookie: session=abc; HttpOnly; Secure
```

---

<!-- .slide: data-background="#e67e22" -->

# CSRF

### Cross-Site Request Forgery

---

## Как работи CSRF?

1. Жертва е логната в bank.com <!-- .element: class="fragment" -->

2. Посещава evil.com (друг таб) <!-- .element: class="fragment" -->

3. evil.com съдържа: <!-- .element: class="fragment" -->

```html
<img src="bank.com/transfer?to=hacker&amount=10000">
```

4. Браузърът изпраща **автоматично** session cookie <!-- .element: class="fragment" -->

5. 💸 Парите изчезват! <!-- .element: class="fragment" -->

---

## XSS vs CSRF

| | XSS | CSRF |
|---|-----|------|
| **Инжектира** | JavaScript код | HTTP заявка |
| **Жертва** | Други потребители | Логнат потребител |
| **Цел** | Кражба на данни | Изпълнение на действие |
| **Защита** | Output encoding | CSRF token |

---

## CSRF Защита

```html
<!-- CSRF Token -->
<input type="hidden" name="csrf_token"
       value="random_unique_xyz">
```

```http
# SameSite Cookie
Set-Cookie: session=abc; SameSite=Strict; Secure
```

---

<!-- .slide: data-background="#27ae60" -->

# Authentication

### A07:2025

---

## Password Security

❌ **НИКОГА** plain text или MD5 <!-- .element: class="fragment" -->

✅ **bcrypt** или **Argon2** <!-- .element: class="fragment" -->

✅ Unique **salt** per user <!-- .element: class="fragment" -->

✅ **MFA** за важни акаунти <!-- .element: class="fragment" -->

---

## Secure Password Hashing

```python
import bcrypt

# При регистрация
hashed = bcrypt.hashpw(
    password.encode(),
    bcrypt.gensalt(rounds=12)
)

# При login
if bcrypt.checkpw(input_password.encode(), stored_hash):
    # Valid!
```

---

## Session Security

```http
Set-Cookie: session_id=xyz123;
  Secure;        # HTTPS only
  HttpOnly;      # No JS access
  SameSite=Strict;
  Max-Age=3600;
```

🔑 Regenerate session ID при login <!-- .element: class="fragment" -->

🚪 Invalidate при logout <!-- .element: class="fragment" -->

⏰ Short timeouts <!-- .element: class="fragment" -->

---

<!-- .slide: data-background="#3498db" -->

# Broken Access Control

### A01:2025

---

## IDOR пример

```
https://app.com/invoice?id=1542
```

Промяна на `id=1543` показва **чужда** фактура!

---

## Правилен Access Control

```php
// ✅ Server-side проверка
$requestedUserId = $_GET['userId'];

if ($_SESSION['user_id'] !== $requestedUserId
    && !isAdmin()) {
    http_response_code(403);
    exit("Access denied");
}
```

**Винаги** проверявайте права на сървъра!

---

<!-- .slide: data-background="#34495e" -->

# Secure Configuration

### A02:2025

---

## Common Misconfigurations

📂 Directory listing enabled <!-- .element: class="fragment" -->

🏷️ Server version в headers <!-- .element: class="fragment" -->

⚠️ Verbose error messages <!-- .element: class="fragment" -->

🔓 Default credentials <!-- .element: class="fragment" -->

📜 TLS 1.0/1.1 enabled <!-- .element: class="fragment" -->

---

## Security Headers

```nginx
# Nginx configuration
add_header X-Frame-Options "DENY";
add_header X-Content-Type-Options "nosniff";
add_header X-XSS-Protection "1; mode=block";
add_header Strict-Transport-Security
           "max-age=31536000; includeSubDomains";
add_header Content-Security-Policy "default-src 'self'";

server_tokens off;
```

---

## TLS Configuration

```nginx
# ✅ Modern TLS
ssl_protocols TLSv1.2 TLSv1.3;
ssl_ciphers EECDH+AESGCM:EDH+AESGCM;
ssl_prefer_server_ciphers on;
```

❌ Никога TLSv1 или TLSv1.1

---

<!-- .slide: data-background="#2c3e50" -->

# Real-World Breaches

---

## Sony PSN (2011)

**Риск:** SQL Injection

**Въздействие:** 77M компрометирани акаунти

**Урок:** Prepared statements

---

## Equifax (2017)

**Риск:** Vulnerable Components (Apache Struts)

**Въздействие:** 147M изложени записи

**Урок:** Regular patching!

---

## Capital One (2019)

**Риск:** SSRF + Misconfiguration

**Въздействие:** 100M кредитни заявления

**Урок:** Cloud security + segmentation

---

<!-- .slide: data-background="#8e44ad" -->

# Secure SDLC

### Shift-Left Security

---

## Security в Development

| Фаза | Дейност |
|------|---------|
| **Plan** | Threat Modeling |
| **Code** | SAST, Code Review |
| **Test** | DAST, Pen Testing |
| **Deploy** | Secure Config |
| **Monitor** | Logging, Alerts |

---

## Security Tools

| Tool | Тип | Кога |
|------|-----|------|
| SonarQube | SAST | При commit |
| OWASP ZAP | DAST | При тестване |
| Snyk | SCA | При build |
| Burp Suite | Pentest | Преди release |

---

<!-- .slide: data-background="#16a085" -->

# Zero Trust

### "Never Trust, Always Verify"

---

## Zero Trust Principles

🔒 **Continuous Verification** - всяка заявка <!-- .element: class="fragment" -->

🎯 **Least Privilege** - минимален достъп <!-- .element: class="fragment" -->

🔲 **Micro-segmentation** - изолация <!-- .element: class="fragment" -->

📊 **Context-based Access** - identity + device + location <!-- .element: class="fragment" -->

---

## AI в Security

**Защита:**

🛡️ AI-enhanced WAFs <!-- .element: class="fragment" -->

🔍 Anomaly detection <!-- .element: class="fragment" -->

⚡ Automated response <!-- .element: class="fragment" -->

**Заплахи:**

🤖 AI-powered attacks <!-- .element: class="fragment" -->

---

# Обобщение

---

## Ключови Защити

| Атака | Защита |
|-------|--------|
| SQL Injection | Prepared Statements |
| XSS | Output Encoding + CSP |
| CSRF | Tokens + SameSite |
| Auth Failures | bcrypt + MFA |
| Misconfig | Hardening + Updates |

---

## Security Checklist

✅ Never trust user input <!-- .element: class="fragment" -->

✅ Prepared statements за SQL <!-- .element: class="fragment" -->

✅ Output encoding за HTML <!-- .element: class="fragment" -->

✅ HTTPS everywhere <!-- .element: class="fragment" -->

✅ Strong password hashing <!-- .element: class="fragment" -->

✅ Regular patching <!-- .element: class="fragment" -->

✅ Security logging <!-- .element: class="fragment" -->

---

## Ресурси

📖 [OWASP Top 10](https://owasp.org/Top10/)

🎮 [OWASP Juice Shop](https://owasp.org/www-project-juice-shop/)

📚 [OWASP Cheat Sheets](https://cheatsheetseries.owasp.org/)

🔧 [OWASP ZAP](https://www.zaproxy.org/)

---

<!-- .slide: data-background="#c0392b" -->

# Въпроси?

### 🔒 Stay Secure!
