---
sidebar_position: 2
title: "Упражнения"
tags: [exercises, practice, security, owasp, injection, xss, csrf]
---

import ExerciseCard from '@site/src/components/Exercise/ExerciseCard';
import ProgressTracker from '@site/src/components/Exercise/ProgressTracker';
import CollapsibleSection from '@site/src/components/CollapsibleSection';
import InfoBox from '@site/src/components/InfoBoxes/InfoBox';
import WarningBox from '@site/src/components/InfoBoxes/WarningBox';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Упражнения: Уеб Сигурност

<img src={useBaseUrl('/img/diagrams/security/exercises-header.svg')} alt="Exercises Header" style={{width: '100%', maxWidth: '800px', margin: '20px auto', display: 'block'}} />

<ProgressTracker />

---

## Лесни Упражнения (EASY)

<ExerciseCard difficulty="easy">

### Задача 1: OWASP Дефиниция

Какво означава OWASP и каква е основната цел на OWASP Top 10?

<CollapsibleSection title="✅ Решение">

**OWASP** = **O**pen **W**eb **A**pplication **S**ecurity **P**roject

**Основна цел на OWASP Top 10:**
- Идентифициране на **10-те най-критични рискове** за уеб приложения
- Предоставяне на **стандартизирана рамка** за приоритизиране на сигурността
- Базиран на **реални данни** за експлоатируемост и въздействие
- Редовно обновяван (последна версия 2025)

OWASP Top 10 служи като основа за security testing, compliance изисквания и developer training.

</CollapsibleSection>

</ExerciseCard>

<ExerciseCard difficulty="easy">

### Задача 2: Съответствие на Термини

Свържете термините с правилните дефиниции:

| Термин | Дефиниция |
|--------|-----------|
| A. HTTP | 1. Криптира комуникацията между клиент и сървър |
| B. HTTPS | 2. Протоколът, определящ как браузърите и сървърите комуникират |
| C. HTML Form | 3. Основният механизъм за потребителски вход в уеб страници |

<CollapsibleSection title="✅ Решение">

**Правилни съответствия:**

| Термин | Дефиниция |
|--------|-----------|
| A. HTTP | 2. Протоколът, определящ как браузърите и сървърите комуникират |
| B. HTTPS | 1. Криптира комуникацията между клиент и сървър |
| C. HTML Form | 3. Основният механизъм за потребителски вход в уеб страници |

**Обяснение:**
- **HTTP** (HyperText Transfer Protocol) е базовият протокол за уеб комуникация
- **HTTPS** добавя TLS/SSL криптиране за сигурен пренос на данни
- **HTML Forms** позволяват на потребителите да въвеждат данни (login, search, comments)

</CollapsibleSection>

</ExerciseCard>

<ExerciseCard difficulty="easy">

### Задача 3: Trust User Input

Вярно или Невярно: Приемливо е да се доверим на потребителския вход, ако потребителят вече е автентикиран и логнат в системата.

<CollapsibleSection title="✅ Решение">

**Невярно!**

Златното правило е: **НИКОГА не се доверявайте на потребителски вход**, независимо дали потребителят е автентикиран или не.

**Причини:**
1. **Компрометиран акаунт** - атакуващ може да използва валиден акаунт
2. **Privilege escalation** - автентикиран потребител може да се опита да достъпи ресурси на друг
3. **Malicious intent** - легитимен потребител може да има лоши намерения
4. **Browser extensions/malware** - могат да модифицират заявките

Всички входове трябва да бъдат **валидирани** и **санитизирани** на сървърната страна.

</CollapsibleSection>

</ExerciseCard>

<ExerciseCard difficulty="easy">

### Задача 4: Златното Правило

Попълнете празното място: Фундаменталното правило за сигурност гласи "______ trust user input."

<CollapsibleSection title="✅ Решение">

**"NEVER trust user input."** (Никога не се доверявайте на потребителски вход)

**Какво включва потребителски вход:**
- Form fields (text inputs, textareas, selects)
- URL параметри (query strings, path parameters)
- HTTP Headers (cookies, user-agent, referer)
- Uploaded files
- API request bodies

**Защита:**
- Input validation (whitelist approach)
- Sanitization (context-specific encoding)
- Prepared statements за SQL
- Output encoding за HTML

</CollapsibleSection>

</ExerciseCard>

<ExerciseCard difficulty="easy">

### Задача 5: Златен Стандарт за SQL Injection

Кой от следните методи е "златен стандарт" за предотвратяване на SQL injection атаки?

- A) Само input validation
- B) Prepared statements (parameterized queries)
- C) Blacklisting на опасни символи
- D) Използване на HTTPS

<CollapsibleSection title="✅ Решение">

**Отговор: B) Prepared statements (parameterized queries)**

**Защо са златен стандарт:**
- Разделят **кода** от **данните**
- Базата данни третира входа като **литерален текст**, не като SQL код
- Автоматично escaping, без нужда от ръчна санитизация
- Предотвратяват **всички** варианти на SQL injection

**Защо другите не са достатъчни:**
- **A) Input validation** - допълнителна защита, но не е достатъчна сама по себе си
- **C) Blacklisting** - атакуващите постоянно намират заобиколки
- **D) HTTPS** - защитава транспортния слой, не предпазва от injection

</CollapsibleSection>

</ExerciseCard>

<ExerciseCard difficulty="easy">

### Задача 6: Validation vs Sanitization

Обяснете разликата между **validation** и **sanitization** на потребителски вход. Дайте по един пример за всяко.

<CollapsibleSection title="✅ Решение">

**Validation (Валидация):**
- **Какво е:** Проверка дали входът отговаря на очакван формат/тип
- **Цел:** Отхвърляне на невалиден вход
- **Подход:** Whitelist - позволява само валидни стойности

**Пример за validation:**
```javascript
// Email validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(userEmail)) {
    throw new Error("Invalid email format");
}

// Age validation (само числа 1-120)
if (age < 1 || age > 120 || !Number.isInteger(age)) {
    throw new Error("Invalid age");
}
```

**Sanitization (Санитизация):**
- **Какво е:** Премахване или кодиране на потенциално опасни символи
- **Цел:** Обезвреждане на входа
- **Подход:** Context-specific encoding

**Пример за sanitization:**
```php
// HTML sanitization за XSS защита
$safeOutput = htmlspecialchars($userInput, ENT_QUOTES, 'UTF-8');

// Премахване на HTML тагове
$textOnly = strip_tags($userInput);
```

**Важно:** И двете трябва да се използват заедно за пълна защита!

</CollapsibleSection>

</ExerciseCard>

---

## Средни Упражнения (MEDIUM)

<ExerciseCard difficulty="medium">

### Задача 7: XSS Идентификация

Разработчик написва следния код за показване на username на страницата:

```php
echo "Hello, " . $_GET['name'];
```

Идентифицирайте уязвимостта в този код и посочете към коя OWASP категория спада.

<CollapsibleSection title="✅ Решение">

**Уязвимост:** Cross-Site Scripting (XSS)

**OWASP Категория:** A07:2021 Cross-Site Scripting / A10:2025

**Проблем:** Потребителският вход се показва директно в HTML без encoding.

**Как може да се експлоатира:**
```
URL: example.com/?name=<script>alert(document.cookie)</script>
```

Това ще генерира:
```html
Hello, <script>alert(document.cookie)</script>
```

Скриптът ще се изпълни в браузъра на жертвата!

**Сигурен код:**
```php
// ✅ Използвайте htmlspecialchars()
echo "Hello, " . htmlspecialchars($_GET['name'], ENT_QUOTES, 'UTF-8');
```

Това ще encode-не специалните символи:
```html
Hello, &lt;script&gt;alert(document.cookie)&lt;/script&gt;
```

</CollapsibleSection>

</ExerciseCard>

<ExerciseCard difficulty="medium">

### Задача 8: SQL Injection Impacts

Изброете три потенциални последици от успешна SQL injection атака върху уеб приложение.

<CollapsibleSection title="✅ Решение">

**Три основни последици от SQL Injection:**

**1. Data Breach (Изтичане на данни)**
- Достъп до **всички записи** в базата данни
- Кражба на лични данни (имена, адреси, SSN)
- Достъп до финансова информация (кредитни карти)
- Достъп до credentials (usernames, password hashes)

**2. Data Manipulation (Манипулация на данни)**
- **Промяна** на съществуващи записи
- **Изтриване** на данни (DROP TABLE)
- **Вмъкване** на фалшиви записи
- Privilege escalation (промяна на user roles)

**3. System Compromise (Компрометиране на системата)**
- Изпълнение на **OS команди** (xp_cmdshell в MSSQL)
- **Четене на файлове** от файловата система
- **Записване на файлове** (web shells)
- Lateral movement към други системи

**Допълнителни последици:**
- Репутационни щети
- Финансови загуби и глоби (GDPR)
- Denial of Service (тежки заявки)

</CollapsibleSection>

</ExerciseCard>

<ExerciseCard difficulty="medium">

### Задача 9: SQL Injection Refactoring

Разгледайте следния уязвим код:

```java
String query = "SELECT * FROM products WHERE category = '" + userCategory + "'";
Statement stmt = conn.createStatement();
ResultSet rs = stmt.executeQuery(query);
```

**Задачи:**
1. Обяснете какъв тип атака е възможна
2. Дайте пример за злонамерен вход
3. Препишете кода сигурно с prepared statements

<CollapsibleSection title="✅ Решение">

**1. Тип атака:** SQL Injection (A03:2025)

Уязвимостта възниква от директно конкатениране на потребителски вход в SQL заявка.

**2. Пример за злонамерен вход:**
```
userCategory = "books' OR '1'='1' --"
```

Резултатна заявка:
```sql
SELECT * FROM products WHERE category = 'books' OR '1'='1' --'
```

Това връща **всички продукти**, независимо от категорията!

**Още по-опасен вход:**
```
userCategory = "books'; DROP TABLE products; --"
```

**3. Сигурен код с Prepared Statement:**
```java
// ✅ Prepared statement предотвратява SQL injection
String sql = "SELECT * FROM products WHERE category = ?";
PreparedStatement pstmt = conn.prepareStatement(sql);
pstmt.setString(1, userCategory);  // Input се третира като string data
ResultSet rs = pstmt.executeQuery();
```

**Защо работи:** Placeholder `?` казва на базата данни да очаква параметър. Стойността се bind-ва отделно и никога не се интерпретира като SQL код.

</CollapsibleSection>

</ExerciseCard>

<ExerciseCard difficulty="medium">

### Задача 10: XSS vs CSRF Сравнение

Диференцирайте XSS и CSRF като попълните следната таблица:

| Аспект | XSS | CSRF |
|--------|-----|------|
| Какво се инжектира/експлоатира? | | |
| Кой е основната жертва? | | |
| Един защитен механизъм | | |

<CollapsibleSection title="✅ Решение">

| Аспект | XSS | CSRF |
|--------|-----|------|
| **Какво се инжектира/експлоатира?** | Злонамерен JavaScript код | Доверието на сървъра към автентикиран потребител |
| **Кой е основната жертва?** | Други потребители, които виждат заразеното съдържание | Автентикиран потребител, подмамен да изпрати заявка |
| **Един защитен механизъм** | Output encoding (htmlspecialchars) | CSRF токен или SameSite cookie |

**Ключови разлики:**

| Характеристика | XSS | CSRF |
|----------------|-----|------|
| **Локация на атаката** | Изпълнява се в браузъра на жертвата | Заявка от друг сайт |
| **Необходима автентикация** | Не (засяга всички посетители) | Да (жертвата трябва да е логната) |
| **Цел** | Кражба на данни (cookies, keylogging) | Извършване на действия (transfer, change password) |
| **Тип уязвимост** | Input/Output handling | Session management |

</CollapsibleSection>

</ExerciseCard>

<ExerciseCard difficulty="medium">

### Задача 11: Password Hashing Проблеми

Система за login съхранява пароли по следния начин:

```python
stored_password = md5(user_password)
```

Идентифицирайте поне ТРИ проблема с този подход и обяснете как всеки трябва да се адресира.

<CollapsibleSection title="✅ Решение">

**Проблем 1: MD5 е твърде бърз**
- MD5 е проектиран за скорост, което позволява милиарди опити за секунда
- **Решение:** Използвайте **bcrypt** или **Argon2** - алгоритми, проектирани да бъдат бавни

```python
# ✅ Използвайте bcrypt
import bcrypt
hashed = bcrypt.hashpw(password.encode(), bcrypt.gensalt(rounds=12))
```

**Проблем 2: Липсва salt**
- Еднакви пароли дават еднакви хешове
- Rainbow table атаки са възможни
- **Решение:** Използвайте **уникален salt** за всеки потребител

```python
# bcrypt автоматично генерира и съхранява salt
# Argon2 също включва salt
```

**Проблем 3: MD5 е криптографски счупен**
- Намерени са collision attacks
- Не е подходящ за security приложения от 2004г.
- **Решение:** Използвайте **bcrypt**, **Argon2** или поне **SHA-256** с salt

**Правилна имплементация:**
```python
import bcrypt

# При регистрация
def hash_password(password):
    salt = bcrypt.gensalt(rounds=12)  # Cost factor
    return bcrypt.hashpw(password.encode(), salt)

# При login
def verify_password(password, stored_hash):
    return bcrypt.checkpw(password.encode(), stored_hash)
```

</CollapsibleSection>

</ExerciseCard>

<ExerciseCard difficulty="medium">

### Задача 12: Broken Access Control

Откривате уеб приложение със следната URL структура за преглед на фактури:

```
https://app.example.com/invoice?id=1542
```

При промяна на `id` параметъра на `1543` можете да видите фактурата на друг клиент.

1. Към коя OWASP Top 10 категория спада тази уязвимост?
2. Напишете pseudocode, демонстриращ как сървърът трябва правилно да обработи тази заявка.

<CollapsibleSection title="✅ Решение">

**1. OWASP Категория:** A01:2025 Broken Access Control

Това е класически пример за **Insecure Direct Object Reference (IDOR)** - подкатегория на Broken Access Control.

**2. Pseudocode за сигурна обработка:**

```python
def get_invoice(request):
    # Стъпка 1: Вземете параметъра
    requested_invoice_id = request.params['id']

    # Стъпка 2: Вземете текущия потребител от сесията
    current_user = get_authenticated_user(request.session)

    if current_user is None:
        return Response(401, "Unauthorized - Please login")

    # Стъпка 3: Вземете фактурата от базата данни
    invoice = database.get_invoice(requested_invoice_id)

    if invoice is None:
        return Response(404, "Invoice not found")

    # Стъпка 4: КРИТИЧНО - Проверете дали потребителят има право да вижда тази фактура
    if invoice.owner_id != current_user.id and not current_user.is_admin():
        # Log suspicious activity
        log_security_event("Unauthorized access attempt", {
            "user_id": current_user.id,
            "attempted_invoice": requested_invoice_id
        })
        return Response(403, "Forbidden - You don't have access to this invoice")

    # Стъпка 5: Ако проверките минат, върнете данните
    return Response(200, invoice.to_json())
```

**Ключови принципи:**
- **Винаги** проверявайте права на сървъра
- Не разчитайте само на client-side checks
- Логвайте подозрителни опити за достъп
- Използвайте consistent authorization framework

</CollapsibleSection>

</ExerciseCard>

<ExerciseCard difficulty="medium">

### Задача 13: Whitelist vs Blacklist

Обяснете защо "whitelist validation" се предпочита пред "blacklist validation" при обработка на потребителски вход. Дайте практически сценарий, при който blacklist подходът би се провалил.

<CollapsibleSection title="✅ Решение">

**Whitelist (Allow List) Подход:**
- Дефинирате **само позволените** стойности/patterns
- Всичко друго се отхвърля автоматично
- По-сигурен, защото е **explicit**

```javascript
// ✅ Whitelist: Позволява само букви и цифри
const validUsername = /^[a-zA-Z0-9_]{3,20}$/.test(input);
```

**Blacklist (Block List) Подход:**
- Дефинирате **забранените** стойности/patterns
- Всичко друго се позволява
- По-несигурен, защото е **implicit**

```javascript
// ❌ Blacklist: Блокира само известни опасни символи
const forbidden = ['<', '>', '"', "'", ';', '--'];
```

**Защо Blacklist се проваля:**

**Сценарий 1: SQL Injection bypass**
```
Blacklist блокира: OR, AND, --, ;
Атакуващият използва: UNION SELECT или 1=1
```

**Сценарий 2: XSS bypass**
```
Blacklist блокира: <script>
Атакуващият използва: <ScRiPt>, <img onerror="...">, <svg onload="...">
```

**Сценарий 3: File upload bypass**
```
Blacklist блокира: .exe, .php
Атакуващият използва: .php5, .phtml, .php.jpg (double extension)
```

**Извод:** Blacklist е "catch-up game" - винаги сте една стъпка зад атакуващите. Whitelist е "secure by default".

</CollapsibleSection>

</ExerciseCard>

---

## Трудни Упражнения (HARD)

<ExerciseCard difficulty="hard">

### Задача 14: Secure Login Flow Design

Проектирайте диаграма на сигурен login flow, която включва:

- Password hashing with salts
- Multi-Factor Authentication (MFA)
- Session management best practices
- Rate limiting за brute-force защита

Включете поне 6 стъпки и кратко обяснете целта на всяка стъпка от гледна точка на сигурността.

<CollapsibleSection title="✅ Решение">

**Secure Login Flow (8 стъпки):**

```
┌─────────────────────────────────────────────────────────────┐
│  1. USER INPUT                                               │
│  └─> Username + Password изпратени през HTTPS               │
│      Security: Криптиран транспорт, никакъв plain text      │
└────────────────────────┬────────────────────────────────────┘
                         ▼
┌─────────────────────────────────────────────────────────────┐
│  2. RATE LIMITING CHECK                                      │
│  └─> Проверка за брой опити от този IP/username             │
│      Security: Предотвратява brute-force атаки              │
│      Правило: Max 5 опита / 15 минути, exponential backoff  │
└────────────────────────┬────────────────────────────────────┘
                         ▼
┌─────────────────────────────────────────────────────────────┐
│  3. INPUT VALIDATION                                         │
│  └─> Валидиране на формат (username length, char types)     │
│      Security: Предотвратява injection атаки                │
└────────────────────────┬────────────────────────────────────┘
                         ▼
┌─────────────────────────────────────────────────────────────┐
│  4. PASSWORD VERIFICATION                                    │
│  └─> bcrypt.verify(input_password, stored_hash)             │
│      Security: Slow hash + unique salt per user             │
│      Timing: Constant-time comparison за timing attacks     │
└────────────────────────┬────────────────────────────────────┘
                         ▼
┌─────────────────────────────────────────────────────────────┐
│  5. MFA VERIFICATION (ако е enabled)                        │
│  └─> Изпращане и верификация на TOTP/SMS/Push код           │
│      Security: Втори фактор - "something you have"          │
│      Опции: Authenticator app, SMS, Hardware key            │
└────────────────────────┬────────────────────────────────────┘
                         ▼
┌─────────────────────────────────────────────────────────────┐
│  6. SESSION CREATION                                         │
│  └─> Генериране на нов secure session ID                    │
│      Security: Cryptographically random, regenerate on login│
│      Flags: Secure, HttpOnly, SameSite=Strict               │
└────────────────────────┬────────────────────────────────────┘
                         ▼
┌─────────────────────────────────────────────────────────────┐
│  7. AUDIT LOGGING                                            │
│  └─> Записване на успешен login (IP, timestamp, user-agent) │
│      Security: Forensics, anomaly detection                 │
└────────────────────────┬────────────────────────────────────┘
                         ▼
┌─────────────────────────────────────────────────────────────┐
│  8. REDIRECT TO APPLICATION                                  │
│  └─> Safe redirect към dashboard                            │
│      Security: Validate redirect URL (prevent open redirect)│
└─────────────────────────────────────────────────────────────┘
```

**Код за критични стъпки:**

```python
# Rate Limiting
def check_rate_limit(ip, username):
    key = f"login_attempts:{ip}:{username}"
    attempts = redis.get(key) or 0
    if attempts >= 5:
        raise RateLimitError("Too many attempts. Try again later.")
    redis.incr(key)
    redis.expire(key, 900)  # 15 minutes

# Password Verification
def verify_password(input_password, stored_hash):
    return bcrypt.checkpw(input_password.encode(), stored_hash)

# Session Creation
def create_session(user):
    session_id = secrets.token_urlsafe(32)
    response.set_cookie(
        'session_id', session_id,
        secure=True, httponly=True,
        samesite='Strict', max_age=3600
    )
    return session_id
```

</CollapsibleSection>

</ExerciseCard>

<ExerciseCard difficulty="hard">

### Задача 15: Nginx Security Audit

Прегледайте следната Nginx конфигурация и идентифицирайте поне ЧЕТИРИ проблема със сигурността. За всеки проблем обяснете риска и дайте коригирана конфигурация:

```nginx
server {
    listen 80;
    server_name example.com;

    server_tokens on;
    autoindex on;

    location / {
        root /var/www/html;
        error_page 500 502 503 504 /50x.html;
    }

    # SSL Configuration
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
}
```

<CollapsibleSection title="✅ Решение">

**Проблем 1: Слуша само на HTTP (port 80)**
- **Риск:** Данните се предават в clear text, MITM атаки
- **Корекция:**
```nginx
server {
    listen 443 ssl http2;
    server_name example.com;

    # Redirect HTTP to HTTPS
    # (в отделен server block)
}

server {
    listen 80;
    server_name example.com;
    return 301 https://$server_name$request_uri;
}
```

**Проблем 2: server_tokens on**
- **Риск:** Разкрива версията на Nginx, помага за targeted атаки
- **Корекция:**
```nginx
server_tokens off;
```

**Проблем 3: autoindex on**
- **Риск:** Directory listing позволява browsing на файлове
- **Корекция:**
```nginx
autoindex off;
```

**Проблем 4: Остарели TLS версии**
- **Риск:** TLSv1 и TLSv1.1 имат known vulnerabilities (POODLE, BEAST)
- **Корекция:**
```nginx
ssl_protocols TLSv1.2 TLSv1.3;
ssl_ciphers EECDH+AESGCM:EDH+AESGCM;
ssl_prefer_server_ciphers on;
```

**Проблем 5: Липсват Security Headers**
- **Риск:** Уязвими на XSS, clickjacking, MIME sniffing
- **Корекция:**
```nginx
add_header X-Frame-Options "DENY" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
add_header Content-Security-Policy "default-src 'self'" always;
```

**Пълна коригирана конфигурация:**
```nginx
server {
    listen 443 ssl http2;
    server_name example.com;

    # SSL
    ssl_certificate /etc/ssl/certs/example.com.crt;
    ssl_certificate_key /etc/ssl/private/example.com.key;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers EECDH+AESGCM:EDH+AESGCM;
    ssl_prefer_server_ciphers on;

    # Security
    server_tokens off;
    autoindex off;

    # Headers
    add_header X-Frame-Options "DENY" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Strict-Transport-Security "max-age=31536000" always;

    location / {
        root /var/www/html;
        error_page 500 502 503 504 /50x.html;
    }
}
```

</CollapsibleSection>

</ExerciseCard>

<ExerciseCard difficulty="hard">

### Задача 16: Equifax Case Study

Пробивът на Equifax (2017) изложи чувствителни данни на 147 милиона американци.

**Задачи:**
1. Идентифицирайте към коя OWASP Top 10 категория спада този пробив
2. Обяснете root cause на уязвимостта
3. Предложете три конкретни организационни практики, които биха предотвратили пробива

<CollapsibleSection title="✅ Решение">

**1. OWASP Категория:** A06:2025 Vulnerable and Outdated Components

**2. Root Cause:**
- Equifax използваше **Apache Struts** framework
- CVE-2017-5638 - критична Remote Code Execution уязвимост
- Patch беше наличен **2 месеца** преди атаката
- Уязвимостта не беше патчната въпреки known exploit

**Технически детайл:**
- Уязвимостта беше в Content-Type header parsing
- Позволяваше изпълнение на произволен код
- CVSS Score: 10.0 (Critical)

**3. Три организационни практики за превенция:**

**Практика 1: Automated Vulnerability Scanning**
```yaml
# CI/CD Pipeline с dependency scanning
stages:
  - build
  - security-scan
  - deploy

security-scan:
  script:
    - npm audit --production
    - snyk test
    - owasp-dependency-check --project MyApp
  allow_failure: false  # Блокира deploy при критични уязвимости
```

**Практика 2: Patch Management Policy**
- Critical vulnerabilities: Patch в рамките на **24-48 часа**
- High vulnerabilities: Patch в рамките на **7 дни**
- Automatic alerts за нови CVEs
- Regular patching schedule (поне monthly)

**Практика 3: Software Inventory (SBOM)**
- Поддържане на пълен **Software Bill of Materials**
- Tracking на всички dependencies и версии
- Автоматични известия при нови CVEs за използвани компоненти

```json
// Пример SBOM entry
{
  "component": "Apache Struts",
  "version": "2.3.32",
  "license": "Apache-2.0",
  "vulnerabilities": ["CVE-2017-5638"],
  "last_updated": "2017-03-06",
  "owner_team": "Backend Team"
}
```

**Допълнителни мерки:**
- Network segmentation (limit blast radius)
- Web Application Firewall (WAF) с virtual patching
- Regular penetration testing
- Security awareness training

</CollapsibleSection>

</ExerciseCard>

<ExerciseCard difficulty="hard">

### Задача 17: Security Code Review

Извършвате security code review и намирате следния PHP endpoint:

```php
<?php
session_start();
$userID = $_GET['user'];
$action = $_POST['action'];
$amount = $_POST['amount'];

if ($action == 'transfer') {
    $query = "UPDATE accounts SET balance = balance - $amount WHERE user_id = '$userID'";
    mysqli_query($conn, $query);
    echo "Transfer of $$amount completed for user $userID";
}
?>
```

**Задачи:**
1. Идентифицирайте ВСИЧКИ уязвимости (минимум 4)
2. Съпоставете всяка уязвимост с OWASP Top 10 категория
3. Препишете целия код с правилно отстранени уязвимости

<CollapsibleSection title="✅ Решение">

**1. Идентифицирани уязвимости:**

| # | Уязвимост | OWASP | Ред |
|---|-----------|-------|-----|
| 1 | SQL Injection | A03:2025 Injection | Ред 8 |
| 2 | XSS (Reflected) | A07:2021 XSS | Ред 9 |
| 3 | CSRF (липсващ token) | Cross-Site Request Forgery | Ред 6 |
| 4 | Broken Access Control | A01:2025 | Целият endpoint |
| 5 | Missing Input Validation | - | Редове 3-5 |
| 6 | Type Confusion | - | $amount без validation |

**2. Детайлно обяснение:**

**Уязвимост 1: SQL Injection**
```php
// ❌ User input директно в SQL
$query = "UPDATE accounts SET balance = balance - $amount WHERE user_id = '$userID'";
```
Атакуващ може да използва: `$amount = "0; DROP TABLE accounts; --"`

**Уязвимост 2: XSS**
```php
// ❌ Unescaped output
echo "Transfer of $$amount completed for user $userID";
```
Ако `$userID = "<script>alert('XSS')</script>"`, скриптът ще се изпълни.

**Уязвимост 3: CSRF**
Липсва проверка за CSRF token - атакуващ може да създаде форма на evil site, която изпълнява transfers.

**Уязвимост 4: Broken Access Control**
Няма проверка дали текущият потребител има право да прави трансфер от `$userID`.

**3. Сигурен код:**

```php
<?php
session_start();

// CSRF Token verification
if (!isset($_POST['csrf_token']) ||
    $_POST['csrf_token'] !== $_SESSION['csrf_token']) {
    http_response_code(403);
    exit(json_encode(['error' => 'Invalid CSRF token']));
}

// Get authenticated user from session (NOT from URL!)
$authenticatedUserID = $_SESSION['user_id'] ?? null;
if (!$authenticatedUserID) {
    http_response_code(401);
    exit(json_encode(['error' => 'Not authenticated']));
}

// Input validation
$action = filter_input(INPUT_POST, 'action', FILTER_SANITIZE_STRING);
$amount = filter_input(INPUT_POST, 'amount', FILTER_VALIDATE_FLOAT);

// Validate amount
if ($amount === false || $amount <= 0 || $amount > 10000) {
    http_response_code(400);
    exit(json_encode(['error' => 'Invalid amount']));
}

if ($action === 'transfer') {
    // Check balance before transfer
    $checkStmt = $conn->prepare("SELECT balance FROM accounts WHERE user_id = ?");
    $checkStmt->bind_param("i", $authenticatedUserID);
    $checkStmt->execute();
    $result = $checkStmt->get_result();
    $row = $result->fetch_assoc();

    if (!$row || $row['balance'] < $amount) {
        http_response_code(400);
        exit(json_encode(['error' => 'Insufficient funds']));
    }

    // Prepared statement prevents SQL injection
    $stmt = $conn->prepare("UPDATE accounts SET balance = balance - ? WHERE user_id = ?");
    $stmt->bind_param("di", $amount, $authenticatedUserID);

    if ($stmt->execute()) {
        // Log the transaction
        error_log("Transfer: User $authenticatedUserID transferred $amount");

        // Safe output with encoding
        $safeAmount = htmlspecialchars(number_format($amount, 2), ENT_QUOTES, 'UTF-8');
        echo json_encode([
            'success' => true,
            'message' => "Transfer of \$$safeAmount completed"
        ]);
    } else {
        http_response_code(500);
        echo json_encode(['error' => 'Transfer failed']);
    }

    $stmt->close();
}
?>
```

**Подобрения:**
- ✅ CSRF token validation
- ✅ Authentication check
- ✅ Authorization (използва session user, не URL param)
- ✅ Prepared statements
- ✅ Input validation
- ✅ Output encoding
- ✅ Audit logging
- ✅ Balance check
- ✅ JSON responses за API consistency

</CollapsibleSection>

</ExerciseCard>

<ExerciseCard difficulty="hard">

### Задача 18: Cloud Security Strategy

Компания мигрира своята e-commerce платформа към облачни услуги (AWS). Проектирайте цялостна security стратегия, която включва:

1. **Zero Trust principles** - Обяснете как бихте имплементирали поне 3 конкретни Zero Trust мерки
2. **AI-enhanced security** - Опишете 2 начина, по които AI/ML може да подобри security posture
3. **SDLC integration** - Очертайте как security testing (SAST, DAST, penetration testing) ще бъде интегриран в development pipeline
4. **Configuration management** - Изброете 5 конкретни hardening мерки за cloud инфраструктурата

<CollapsibleSection title="✅ Решение">

**1. Zero Trust Implementation (3 мерки):**

**Мярка 1: Identity-Based Access Control**
```hcl
# AWS IAM Policy - Least Privilege
resource "aws_iam_policy" "developer_policy" {
  name = "developer-limited-access"
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Action = [
          "s3:GetObject",
          "s3:PutObject"
        ]
        Resource = "arn:aws:s3:::dev-bucket/*"
        Condition = {
          IpAddress = {
            "aws:SourceIp" = ["10.0.0.0/8"]  # VPN only
          }
          Bool = {
            "aws:MultiFactorAuthPresent" = "true"  # MFA required
          }
        }
      }
    ]
  })
}
```

**Мярка 2: Micro-segmentation с Security Groups**
```hcl
# Web tier can only talk to app tier
resource "aws_security_group" "web_sg" {
  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  egress {
    from_port       = 8080
    to_port         = 8080
    protocol        = "tcp"
    security_groups = [aws_security_group.app_sg.id]
  }
}
```

**Мярка 3: Continuous Verification**
- Just-in-Time access (временни credentials)
- Session-based authentication с кратък TTL
- Device health checks преди достъп

---

**2. AI-Enhanced Security (2 начина):**

**AI Application 1: Anomaly Detection**
```python
# AWS GuardDuty + Custom ML Model
class TransactionAnomalyDetector:
    def __init__(self):
        self.model = IsolationForest(contamination=0.01)

    def detect_anomaly(self, transaction):
        features = [
            transaction.amount,
            transaction.hour_of_day,
            transaction.geo_distance_from_usual,
            transaction.device_fingerprint_score
        ]
        return self.model.predict([features])[0] == -1
```

Функции:
- Откриване на необичайни login patterns
- Fraud detection за транзакции
- Automated threat response

**AI Application 2: AI-Enhanced WAF**
- AWS WAF с ML-based rules
- Real-time threat intelligence feeds
- Automated false positive reduction
- Bot detection и mitigation

---

**3. SDLC Security Integration:**

```yaml
# GitLab CI/CD Pipeline
stages:
  - build
  - sast
  - container-scan
  - deploy-staging
  - dast
  - pentest-gate
  - deploy-prod

sast:
  stage: sast
  script:
    - semgrep --config=auto src/
    - sonar-scanner
  artifacts:
    reports:
      sast: gl-sast-report.json

container-scan:
  stage: container-scan
  script:
    - trivy image $CI_REGISTRY_IMAGE:$CI_COMMIT_SHA
    - snyk container test $CI_REGISTRY_IMAGE:$CI_COMMIT_SHA

dast:
  stage: dast
  script:
    - owasp-zap-baseline.py -t https://staging.example.com
  only:
    - main

pentest-gate:
  stage: pentest-gate
  script:
    - echo "Manual approval required for production"
  when: manual
  only:
    - main
```

---

**4. Cloud Hardening (5 мерки):**

| # | Мярка | Имплементация |
|---|-------|---------------|
| 1 | **Encryption at Rest** | KMS-managed keys за S3, RDS, EBS |
| 2 | **VPC Flow Logs** | Logging на всички мрежови flows за forensics |
| 3 | **Private Subnets** | DB и app servers в private subnets с NAT Gateway |
| 4 | **Secrets Management** | AWS Secrets Manager, не hardcoded credentials |
| 5 | **Immutable Infrastructure** | AMIs вместо mutable servers, auto-scaling groups |

```hcl
# Example: S3 Bucket Hardening
resource "aws_s3_bucket" "secure_bucket" {
  bucket = "my-secure-bucket"
}

resource "aws_s3_bucket_server_side_encryption_configuration" "secure" {
  bucket = aws_s3_bucket.secure_bucket.id
  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm     = "aws:kms"
      kms_master_key_id = aws_kms_key.s3_key.arn
    }
  }
}

resource "aws_s3_bucket_public_access_block" "secure" {
  bucket = aws_s3_bucket.secure_bucket.id
  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}
```

</CollapsibleSection>

</ExerciseCard>

<ExerciseCard difficulty="hard">

### Задача 19: Incident Response

Monitoring системата на вашето уеб приложение открива следната необичайна активност:

- Множество неуспешни login опити от различни IP адреси
- Успешни logins от необичайни географски локации
- SQL error съобщения в логовете, съдържащи фрагменти като `' OR '1'='1`
- Неочаквани outbound мрежови връзки от database сървъра

**Задачи:**
1. Идентифицирайте кои типове атаки вероятно се случват (съпоставете с OWASP категории)
2. Опишете незабавни containment стъпки (първия 1 час)
3. Очертайте remediation мерки за всяка идентифицирана уязвимост
4. Предложете дългосрочни превантивни мерки, включително конкретни security controls

<CollapsibleSection title="✅ Решение">

**1. Идентифицирани атаки:**

| Симптом | Тип атака | OWASP |
|---------|-----------|-------|
| Множество неуспешни logins | Brute-force / Credential Stuffing | A07:2025 Authentication Failures |
| Успешни logins от необичайни локации | Account Takeover | A07:2025 |
| SQL error с `' OR '1'='1` | SQL Injection | A03:2025 Injection |
| Outbound connections от DB | Data Exfiltration | A01:2025 / A09:2025 |

**2. Незабавни Containment Стъпки (Първия Час):**

```bash
# Минута 0-5: Assess & Isolate
- [ ] Alert incident response team
- [ ] Activate incident response plan
- [ ] Begin logging preservation

# Минута 5-15: Network Containment
- [ ] Block suspicious IPs at WAF/firewall
- [ ] Isolate database server from internet
- [ ] Revoke outbound access от DB server
- [ ] Enable enhanced logging

# Минута 15-30: Account Containment
- [ ] Force logout на всички засегнати акаунти
- [ ] Invalidate всички active sessions
- [ ] Temporary disable login от suspicious countries
- [ ] Enable mandatory MFA

# Минута 30-60: Evidence Collection
- [ ] Snapshot на affected systems
- [ ] Export all relevant logs
- [ ] Document timeline of events
- [ ] Identify scope of compromise
```

**Immediate Commands:**
```bash
# Block IPs at firewall
sudo iptables -A INPUT -s <suspicious_ip> -j DROP

# Isolate DB server
aws ec2 modify-instance-attribute --instance-id i-xxx \
  --groups sg-isolated-incident

# Force session invalidation
redis-cli FLUSHDB  # Clear session store

# Enable enhanced logging
aws rds modify-db-parameter-group \
  --db-parameter-group-name mydb-params \
  --parameters "ParameterName=log_statement,ParameterValue=all"
```

**3. Remediation Мерки:**

**За Brute-Force/Credential Stuffing:**
```python
# Implement rate limiting
from flask_limiter import Limiter

limiter = Limiter(
    get_remote_address,
    default_limits=["5 per minute"]
)

@app.route('/login', methods=['POST'])
@limiter.limit("5 per minute")
def login():
    # Login logic
```

**За SQL Injection:**
```python
# Refactor all queries to use prepared statements
def get_user(user_id):
    cursor.execute(
        "SELECT * FROM users WHERE id = %s",  # ✅ Parameterized
        (user_id,)
    )
    return cursor.fetchone()
```

**За Account Takeover:**
```python
# Implement anomaly detection
def check_login_anomaly(user, ip, location):
    usual_locations = get_user_usual_locations(user.id)
    if location not in usual_locations:
        trigger_mfa_challenge(user)
        send_security_alert(user.email, {
            'event': 'unusual_login',
            'location': location,
            'ip': ip
        })
```

**За Data Exfiltration:**
```sql
-- Restrict DB user permissions
REVOKE ALL ON *.* FROM 'app_user'@'%';
GRANT SELECT, INSERT, UPDATE ON app_db.* TO 'app_user'@'10.0.0.%';
-- No DELETE, no FILE, restricted to internal IPs
```

**4. Дългосрочни Превантивни Мерки:**

| Категория | Мярка | Implementation |
|-----------|-------|----------------|
| **Authentication** | MFA за всички акаунти | TOTP с Authenticator app |
| **Detection** | SIEM deployment | Splunk/ELK с custom rules |
| **Prevention** | WAF с OWASP ruleset | AWS WAF / Cloudflare |
| **Network** | Network segmentation | Private subnets, VPC peering |
| **Code** | SAST в CI/CD | SonarQube, Semgrep |
| **Secrets** | Secrets rotation | AWS Secrets Manager |
| **Training** | Security awareness | Quarterly training |

**Security Monitoring Dashboard:**
```yaml
# Alert Rules
alerts:
  - name: "Brute Force Attempt"
    condition: "failed_logins > 10 per minute per IP"
    action: "block_ip, notify_security"

  - name: "SQL Injection Pattern"
    condition: "log contains SQL error with user input"
    action: "block_request, create_ticket"

  - name: "Unusual Data Access"
    condition: "db_queries > 1000 per minute per user"
    action: "rate_limit, notify_security"

  - name: "Outbound Connection from DB"
    condition: "db_server initiates external connection"
    action: "block, immediate_page"
```

</CollapsibleSection>

</ExerciseCard>

<ExerciseCard difficulty="hard">

### Задача 20: Healthcare Security Architecture

Вие сте security архитект за healthcare приложение, обработващо Protected Health Information (PHI). Проектирайте цялостна security архитектура, която адресира:

1. **Authentication & Authorization:** Проектирайте системата за автентикация с конкретни технологии/алгоритми. Имплементирайте RBAC с минимум 4 различни роли и техните permissions.

2. **Data Protection:** Специфицирайте криптиране за data at rest и in transit. Проектирайте secure session management.

3. **Secure Development:** Създайте checklist от 10 security изисквания, които разработчиците трябва да следват. Посочете кой OWASP Top 10 риск адресира всяко изискване.

4. **Monitoring & Response:** Дефинирайте кои събития трябва да се логват. Опишете как bi работило anomaly detection.

Включете code примери или configuration snippets където е подходящо.

<CollapsibleSection title="✅ Решение">

**1. Authentication & Authorization:**

**Authentication System:**
```python
# auth_config.py
AUTH_CONFIG = {
    'password_hashing': {
        'algorithm': 'argon2id',  # OWASP recommended
        'time_cost': 3,
        'memory_cost': 65536,  # 64MB
        'parallelism': 4
    },
    'session': {
        'lifetime': 1800,  # 30 minutes for healthcare
        'idle_timeout': 300,  # 5 minutes idle
        'absolute_timeout': 28800,  # 8 hours max
        'secure_flags': ['Secure', 'HttpOnly', 'SameSite=Strict']
    },
    'mfa': {
        'required': True,
        'methods': ['totp', 'fido2'],  # Hardware keys preferred
        'backup_codes': 10
    }
}
```

**RBAC Implementation:**

```python
# roles.py
ROLES = {
    'PATIENT': {
        'permissions': [
            'view_own_records',
            'update_own_profile',
            'message_provider',
            'schedule_appointment'
        ],
        'data_access': 'own_data_only'
    },
    'NURSE': {
        'permissions': [
            'view_patient_records',
            'update_vitals',
            'add_notes',
            'view_schedule'
        ],
        'data_access': 'assigned_patients'
    },
    'DOCTOR': {
        'permissions': [
            'view_patient_records',
            'update_patient_records',
            'prescribe_medication',
            'order_tests',
            'view_lab_results',
            'refer_patient'
        ],
        'data_access': 'department_patients'
    },
    'ADMIN': {
        'permissions': [
            'manage_users',
            'view_audit_logs',
            'generate_reports',
            'manage_roles',
            'system_configuration'
        ],
        'data_access': 'system_data',
        'phi_access': False  # Admin CANNOT see PHI
    }
}

# Authorization middleware
def require_permission(permission):
    def decorator(f):
        @wraps(f)
        def decorated_function(*args, **kwargs):
            user = get_current_user()
            if permission not in ROLES[user.role]['permissions']:
                audit_log.warning(f"Unauthorized access attempt: {user.id} -> {permission}")
                abort(403)
            return f(*args, **kwargs)
        return decorated_function
    return decorator

# Usage
@app.route('/patient/<int:patient_id>/prescribe', methods=['POST'])
@require_permission('prescribe_medication')
def prescribe(patient_id):
    # Also check if doctor has access to this specific patient
    if not user_has_patient_access(current_user, patient_id):
        abort(403)
    # Prescription logic
```

---

**2. Data Protection:**

**Encryption Configuration:**
```yaml
# encryption_config.yaml
data_at_rest:
  database:
    engine: "AES-256-GCM"
    key_management: "AWS KMS"
    key_rotation: "90 days"

  file_storage:
    algorithm: "AES-256-GCM"
    client_side_encryption: true

  backups:
    encryption: "AES-256"
    key_escrow: "HSM"

data_in_transit:
  tls_version: "1.3"
  cipher_suites:
    - "TLS_AES_256_GCM_SHA384"
    - "TLS_CHACHA20_POLY1305_SHA256"
  certificate_pinning: true
  hsts:
    max_age: 31536000
    include_subdomains: true
    preload: true
```

**Field-Level Encryption for PHI:**
```python
from cryptography.fernet import Fernet

class PHIEncryption:
    def __init__(self, kms_key_id):
        self.kms = boto3.client('kms')
        self.key_id = kms_key_id

    def encrypt_phi(self, data):
        # Generate data key from KMS
        response = self.kms.generate_data_key(
            KeyId=self.key_id,
            KeySpec='AES_256'
        )
        # Encrypt with data key
        fernet = Fernet(base64.urlsafe_b64encode(response['Plaintext']))
        encrypted_data = fernet.encrypt(data.encode())

        return {
            'encrypted_data': encrypted_data,
            'encrypted_key': response['CiphertextBlob']
        }

    def decrypt_phi(self, encrypted_package):
        # Decrypt data key using KMS
        decrypted_key = self.kms.decrypt(
            CiphertextBlob=encrypted_package['encrypted_key']
        )['Plaintext']

        fernet = Fernet(base64.urlsafe_b64encode(decrypted_key))
        return fernet.decrypt(encrypted_package['encrypted_data']).decode()
```

---

**3. Secure Development Checklist:**

| # | Requirement | OWASP Risk | Implementation |
|---|-------------|------------|----------------|
| 1 | Prepared statements за всички DB queries | A03 Injection | PDO/Prepared Statements |
| 2 | Output encoding за всички user data | A03/A07 XSS | htmlspecialchars(), CSP |
| 3 | CSRF tokens на всички state-changing forms | CSRF | SameSite + Synchronizer Token |
| 4 | Authorization check на всеки endpoint | A01 Broken Access | RBAC middleware |
| 5 | Argon2id за password hashing | A07 Auth Failures | argon2-cffi library |
| 6 | TLS 1.3 за всички connections | A02 Crypto Failures | Server config + cert pinning |
| 7 | Input validation (whitelist) | A03 Injection | JSON Schema validation |
| 8 | Dependency scanning в CI/CD | A06 Vulnerable Comp | Snyk/Dependabot |
| 9 | Security headers на всички responses | A05 Misconfig | Helmet.js / nginx config |
| 10 | Audit logging на security events | A09 Logging Failures | Structured logging to SIEM |

---

**4. Monitoring & Response:**

**Events to Log:**
```python
AUDIT_EVENTS = {
    'authentication': [
        'login_success',
        'login_failure',
        'logout',
        'mfa_challenge',
        'password_reset',
        'account_lockout'
    ],
    'authorization': [
        'access_granted',
        'access_denied',
        'privilege_escalation_attempt',
        'role_change'
    ],
    'phi_access': [
        'record_viewed',
        'record_created',
        'record_updated',
        'record_exported',
        'bulk_access'  # Alert trigger
    ],
    'system': [
        'configuration_change',
        'user_created',
        'user_deleted',
        'api_key_generated'
    ]
}

# Structured audit log
def audit_log(event_type, event_name, user, details):
    log_entry = {
        'timestamp': datetime.utcnow().isoformat(),
        'event_type': event_type,
        'event_name': event_name,
        'user_id': user.id,
        'user_role': user.role,
        'ip_address': request.remote_addr,
        'user_agent': request.user_agent.string,
        'session_id': session.get('id'),
        'details': details,
        'hipaa_relevant': event_type == 'phi_access'
    }

    # Send to SIEM
    siem_client.send(log_entry)

    # Check for anomalies
    anomaly_detector.check(log_entry)
```

**Anomaly Detection:**
```python
class HealthcareAnomalyDetector:
    def __init__(self):
        self.baseline = self.load_baseline()

    def check(self, event):
        alerts = []

        # Rule 1: Unusual access hours
        hour = datetime.fromisoformat(event['timestamp']).hour
        if hour < 6 or hour > 22:
            if event['event_type'] == 'phi_access':
                alerts.append({
                    'severity': 'medium',
                    'rule': 'after_hours_phi_access',
                    'event': event
                })

        # Rule 2: Bulk record access
        recent_accesses = self.get_recent_accesses(
            event['user_id'],
            minutes=15
        )
        if len(recent_accesses) > 50:
            alerts.append({
                'severity': 'high',
                'rule': 'bulk_record_access',
                'event': event,
                'access_count': len(recent_accesses)
            })

        # Rule 3: Geographic anomaly
        if self.is_geographic_anomaly(event):
            alerts.append({
                'severity': 'critical',
                'rule': 'impossible_travel',
                'event': event
            })

        # Rule 4: Access to unrelated patients
        if event['event_type'] == 'phi_access':
            if not self.has_care_relationship(
                event['user_id'],
                event['details'].get('patient_id')
            ):
                alerts.append({
                    'severity': 'high',
                    'rule': 'unrelated_patient_access',
                    'event': event
                })

        for alert in alerts:
            self.trigger_alert(alert)

        return alerts
```

**HIPAA Compliance Dashboard:**
```yaml
# Monitoring metrics
metrics:
  - name: "phi_access_per_hour"
    query: "count(phi_access) by user, hour"
    alert_threshold: 100

  - name: "failed_login_rate"
    query: "rate(login_failure[5m])"
    alert_threshold: 10

  - name: "after_hours_access"
    query: "count(phi_access where hour < 6 or hour > 22)"
    alert_threshold: 5

  - name: "cross_department_access"
    query: "count(phi_access where user.department != patient.department)"
    review: "weekly"
```

</CollapsibleSection>

</ExerciseCard>

---

## Отговори и Оценяване

<InfoBox title="Критерии за Оценяване">

**Easy упражнения (1-6):**
- Фактически познания и базово разбиране
- Правилни дефиниции и терминология

**Medium упражнения (7-13):**
- Приложение на концепции
- Идентификация на уязвимости
- Предлагане на решения

**Hard упражнения (14-20):**
- Синтез на множество концепции
- Цялостен security design
- Real-world problem solving
- Code review и refactoring

</InfoBox>

<WarningBox title="Практически съвети">

- Винаги тествайте security код в **изолирана среда**
- Никога не тествайте атаки върху **production системи**
- Използвайте **OWASP Juice Shop** или **WebGoat** за практика
- Документирайте всички findings при security reviews

</WarningBox>
