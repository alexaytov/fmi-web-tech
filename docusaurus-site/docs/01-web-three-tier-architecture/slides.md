---
title: Трислойна Архитектура в Уеб Приложения
theme: white
highlightTheme: github
transition: slide
---

# Трислойна Архитектура

### Модерен Подход за Изграждане на Уеб Приложения

Note:
Добре дошли в лекцията за трислойна архитектура. Този модел е фундаментален за изграждането на скалируеми и поддържаеми уеб приложения.

---

## Учебни Цели 🎯

📚 Описвате трите слоя и техните отговорности <!-- .element: class="fragment" -->

🔄 Обяснявате потока на данни между слоевете <!-- .element: class="fragment" -->

⚖️ Разграничавате трислойна от Clean Architecture <!-- .element: class="fragment" -->

🛠️ Прилагате архитектурата към уеб сценарии <!-- .element: class="fragment" -->

📈 Оценявате ползите за скалируемост <!-- .element: class="fragment" -->

Note:
До края на лекцията ще разбирате защо трислойната архитектура е толкова популярна.

---

## Защо е Важна Тази Архитектура?

--

### Реалността на Уеб Разработката

- Приложенията растат и се усложняват
- Екипите стават по-големи
- Изискванията се променят често
- Трафикът варира драстично

Note:
Всяко успешно приложение рано или късно се сблъсква с тези предизвикателства.

--

### Решението

**Разделяй и владей!**

Разделяме приложението на **независими слоеве** с ясни отговорности.

Note:
Separation of concerns - един от най-важните принципи в софтуерното инженерство.

---

## Трите Слоя

--

<svg viewBox="0 0 500 380" style="max-width: 500px; margin: 0 auto; display: block;">
  <defs>
    <linearGradient id="presGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#3498db"/>
      <stop offset="100%" stop-color="#2980b9"/>
    </linearGradient>
    <linearGradient id="appGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#e67e22"/>
      <stop offset="100%" stop-color="#d35400"/>
    </linearGradient>
    <linearGradient id="dataGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#27ae60"/>
      <stop offset="100%" stop-color="#1e8449"/>
    </linearGradient>
    <filter id="shadow1" x="-10%" y="-10%" width="120%" height="130%">
      <feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="#000" flood-opacity="0.15"/>
    </filter>
    <marker id="arrowDown1" markerWidth="10" markerHeight="7" refX="5" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#7f8c8d"/>
    </marker>
    <marker id="arrowUp1" markerWidth="10" markerHeight="7" refX="5" refY="3.5" orient="auto">
      <polygon points="10 0, 0 3.5, 10 7" fill="#7f8c8d"/>
    </marker>
  </defs>

  <!-- Presentation Layer -->
  <g filter="url(#shadow1)">
    <rect x="80" y="30" width="340" height="80" rx="12" fill="url(#presGrad)"/>
    <text x="250" y="60" fill="white" font-family="system-ui, sans-serif" font-size="16" font-weight="700" text-anchor="middle">🖥️ ПРЕЗЕНТАЦИОНЕН СЛОЙ</text>
    <text x="250" y="82" fill="rgba(255,255,255,0.85)" font-family="system-ui, sans-serif" font-size="12" text-anchor="middle">HTML, CSS, JavaScript, React</text>
  </g>

  <!-- Arrows 1 -->
  <line x1="230" y1="115" x2="230" y2="145" stroke="#7f8c8d" stroke-width="2" marker-end="url(#arrowDown1)"/>
  <line x1="270" y1="145" x2="270" y2="115" stroke="#7f8c8d" stroke-width="2" marker-end="url(#arrowUp1)"/>
  <text x="250" y="138" fill="#7f8c8d" font-family="system-ui, sans-serif" font-size="9" text-anchor="middle">HTTP/REST</text>

  <!-- Application Layer -->
  <g filter="url(#shadow1)">
    <rect x="80" y="155" width="340" height="80" rx="12" fill="url(#appGrad)"/>
    <text x="250" y="185" fill="white" font-family="system-ui, sans-serif" font-size="16" font-weight="700" text-anchor="middle">⚙️ ПРИЛОЖЕН СЛОЙ</text>
    <text x="250" y="207" fill="rgba(255,255,255,0.85)" font-family="system-ui, sans-serif" font-size="12" text-anchor="middle">Java, Python, Node.js, .NET</text>
  </g>

  <!-- Arrows 2 -->
  <line x1="230" y1="240" x2="230" y2="270" stroke="#7f8c8d" stroke-width="2" marker-end="url(#arrowDown1)"/>
  <line x1="270" y1="270" x2="270" y2="240" stroke="#7f8c8d" stroke-width="2" marker-end="url(#arrowUp1)"/>
  <text x="250" y="263" fill="#7f8c8d" font-family="system-ui, sans-serif" font-size="9" text-anchor="middle">SQL/ORM</text>

  <!-- Data Layer -->
  <g filter="url(#shadow1)">
    <rect x="80" y="280" width="340" height="80" rx="12" fill="url(#dataGrad)"/>
    <text x="250" y="310" fill="white" font-family="system-ui, sans-serif" font-size="16" font-weight="700" text-anchor="middle">💾 СЛОЙ ЗА ДАННИ</text>
    <text x="250" y="332" fill="rgba(255,255,255,0.85)" font-family="system-ui, sans-serif" font-size="12" text-anchor="middle">MySQL, PostgreSQL, MongoDB</text>
  </g>
</svg>

Note:
Това е фундаменталната структура на трислойната архитектура.

--

### 1. Презентационен Слой 🖥️

**Какво вижда потребителят**

- HTML, CSS, JavaScript
- React, Angular, Vue.js
- Форми и валидации
- Визуализация на данни

Note:
Този слой НИКОГА не достъпва директно базата данни!

--

### 2. Приложен Слой ⚙️

**Сърцето на приложението**

- Бизнес логика и правила
- Валидация на данни
- Координация между слоевете
- Сигурност и автентикация

Note:
Тук живее интелигентността на приложението.

--

### 3. Слой за Данни 💾

**Паметта на приложението**

- Съхранение на данни
- SQL заявки
- CRUD операции
- Data integrity

Note:
Този слой отговаря САМО на заявки от приложния слой.

---

## Поток на Данни

--

<svg viewBox="0 0 800 200" style="max-width: 800px; margin: 0 auto; display: block;">
  <defs>
    <linearGradient id="userGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#9b59b6"/>
      <stop offset="100%" stop-color="#8e44ad"/>
    </linearGradient>
    <linearGradient id="browserGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#3498db"/>
      <stop offset="100%" stop-color="#2980b9"/>
    </linearGradient>
    <linearGradient id="serverGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#e67e22"/>
      <stop offset="100%" stop-color="#d35400"/>
    </linearGradient>
    <linearGradient id="dbGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#27ae60"/>
      <stop offset="100%" stop-color="#1e8449"/>
    </linearGradient>
    <filter id="shadow2" x="-15%" y="-15%" width="130%" height="150%">
      <feDropShadow dx="0" dy="3" stdDeviation="3" flood-color="#000" flood-opacity="0.12"/>
    </filter>
    <marker id="arrowRight" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#3498db"/>
    </marker>
    <marker id="arrowLeft" markerWidth="8" markerHeight="6" refX="1" refY="3" orient="auto">
      <polygon points="8 0, 0 3, 8 6" fill="#e74c3c"/>
    </marker>
  </defs>

  <!-- User -->
  <g filter="url(#shadow2)">
    <rect x="30" y="60" width="100" height="70" rx="10" fill="url(#userGrad)"/>
    <text x="80" y="90" fill="white" font-family="system-ui, sans-serif" font-size="11" font-weight="600" text-anchor="middle">USER</text>
    <text x="80" y="115" font-size="22" text-anchor="middle">👤</text>
  </g>

  <!-- Browser -->
  <g filter="url(#shadow2)">
    <rect x="180" y="60" width="120" height="70" rx="10" fill="url(#browserGrad)"/>
    <text x="240" y="90" fill="white" font-family="system-ui, sans-serif" font-size="11" font-weight="600" text-anchor="middle">BROWSER</text>
    <text x="240" y="115" font-size="22" text-anchor="middle">🌐</text>
  </g>

  <!-- Server -->
  <g filter="url(#shadow2)">
    <rect x="350" y="60" width="120" height="70" rx="10" fill="url(#serverGrad)"/>
    <text x="410" y="90" fill="white" font-family="system-ui, sans-serif" font-size="11" font-weight="600" text-anchor="middle">SERVER</text>
    <text x="410" y="115" font-size="22" text-anchor="middle">⚙️</text>
  </g>

  <!-- Database -->
  <g filter="url(#shadow2)">
    <rect x="520" y="60" width="120" height="70" rx="10" fill="url(#dbGrad)"/>
    <text x="580" y="90" fill="white" font-family="system-ui, sans-serif" font-size="11" font-weight="600" text-anchor="middle">DATABASE</text>
    <text x="580" y="115" font-size="22" text-anchor="middle">💾</text>
  </g>

  <!-- Request arrows -->
  <line x1="132" y1="85" x2="175" y2="85" stroke="#3498db" stroke-width="2" marker-end="url(#arrowRight)"/>
  <line x1="302" y1="85" x2="345" y2="85" stroke="#3498db" stroke-width="2" marker-end="url(#arrowRight)"/>
  <line x1="472" y1="85" x2="515" y2="85" stroke="#3498db" stroke-width="2" marker-end="url(#arrowRight)"/>

  <!-- Response arrows -->
  <line x1="515" y1="105" x2="472" y2="105" stroke="#e74c3c" stroke-width="2" marker-end="url(#arrowLeft)"/>
  <line x1="345" y1="105" x2="302" y2="105" stroke="#e74c3c" stroke-width="2" marker-end="url(#arrowLeft)"/>
  <line x1="175" y1="105" x2="132" y2="105" stroke="#e74c3c" stroke-width="2" marker-end="url(#arrowLeft)"/>

  <!-- Labels -->
  <text x="400" y="165" fill="#3498db" font-family="system-ui, sans-serif" font-size="12" font-weight="600" text-anchor="middle">→ REQUEST</text>
  <text x="400" y="185" fill="#e74c3c" font-family="system-ui, sans-serif" font-size="12" font-weight="600" text-anchor="middle">← RESPONSE</text>
</svg>

Note:
Заявките преминават през всеки слой последователно - никога не се прескачат слоеве!

--

### Стъпки в Request-Response цикъла

1️⃣ Потребителят натиска бутон <!-- .element: class="fragment" -->

2️⃣ Browser изпраща HTTP заявка <!-- .element: class="fragment" -->

3️⃣ Server обработва бизнес логиката <!-- .element: class="fragment" -->

4️⃣ Database връща данни <!-- .element: class="fragment" -->

5️⃣ Server форматира отговор <!-- .element: class="fragment" -->

6️⃣ Browser показва резултата <!-- .element: class="fragment" -->

Note:
Всяка стъпка има своя отговорност - това е ключът към maintainability.

---

## Монолит vs Трислойна Архитектура

--

<svg viewBox="0 0 700 300" style="max-width: 700px; margin: 0 auto; display: block;">
  <defs>
    <linearGradient id="monoGrayGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#95a5a6"/>
      <stop offset="100%" stop-color="#7f8c8d"/>
    </linearGradient>
    <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#3498db"/>
      <stop offset="100%" stop-color="#2980b9"/>
    </linearGradient>
    <linearGradient id="orangeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#e67e22"/>
      <stop offset="100%" stop-color="#d35400"/>
    </linearGradient>
    <linearGradient id="greenGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#27ae60"/>
      <stop offset="100%" stop-color="#1e8449"/>
    </linearGradient>
    <linearGradient id="purpleArrow" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#9b59b6"/>
      <stop offset="100%" stop-color="#8e44ad"/>
    </linearGradient>
    <filter id="shadow3" x="-10%" y="-10%" width="120%" height="130%">
      <feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="#000" flood-opacity="0.15"/>
    </filter>
  </defs>

  <!-- Titles -->
  <text x="115" y="30" fill="#2c3e50" font-family="system-ui, sans-serif" font-size="16" font-weight="700" text-anchor="middle">❌ МОНОЛИТ</text>
  <text x="520" y="30" fill="#2c3e50" font-family="system-ui, sans-serif" font-size="16" font-weight="700" text-anchor="middle">✅ ТРИСЛОЙНА</text>

  <!-- Monolith block -->
  <g filter="url(#shadow3)">
    <rect x="30" y="50" width="170" height="200" rx="12" fill="url(#monoGrayGrad)"/>
    <rect x="45" y="65" width="140" height="45" rx="6" fill="#3498db" fill-opacity="0.7"/>
    <text x="115" y="93" fill="white" font-family="system-ui, sans-serif" font-size="11" font-weight="600" text-anchor="middle">UI Code</text>
    <rect x="45" y="120" width="140" height="45" rx="6" fill="#e67e22" fill-opacity="0.7"/>
    <text x="115" y="148" fill="white" font-family="system-ui, sans-serif" font-size="11" font-weight="600" text-anchor="middle">Business Logic</text>
    <rect x="45" y="175" width="140" height="45" rx="6" fill="#27ae60" fill-opacity="0.7"/>
    <text x="115" y="203" fill="white" font-family="system-ui, sans-serif" font-size="11" font-weight="600" text-anchor="middle">Data Access</text>
    <!-- Cross lines showing coupling -->
    <line x1="50" y1="88" x2="180" y2="143" stroke="rgba(255,255,255,0.4)" stroke-width="1" stroke-dasharray="3"/>
    <line x1="180" y1="88" x2="50" y2="143" stroke="rgba(255,255,255,0.4)" stroke-width="1" stroke-dasharray="3"/>
    <line x1="50" y1="143" x2="180" y2="198" stroke="rgba(255,255,255,0.4)" stroke-width="1" stroke-dasharray="3"/>
    <line x1="180" y1="143" x2="50" y2="198" stroke="rgba(255,255,255,0.4)" stroke-width="1" stroke-dasharray="3"/>
  </g>

  <!-- Arrow -->
  <path d="M 230 150 L 300 150" stroke="url(#purpleArrow)" stroke-width="4" stroke-linecap="round" fill="none"/>
  <polygon points="305,150 290,140 290,160" fill="#8e44ad"/>
  <text x="265" y="130" fill="#9b59b6" font-family="system-ui, sans-serif" font-size="11" font-weight="600" text-anchor="middle">Refactor</text>

  <!-- Three-tier layers -->
  <g filter="url(#shadow3)">
    <rect x="340" y="50" width="180" height="55" rx="10" fill="url(#blueGrad)"/>
    <text x="430" y="75" fill="white" font-family="system-ui, sans-serif" font-size="12" font-weight="700" text-anchor="middle">Presentation</text>
    <text x="430" y="92" fill="rgba(255,255,255,0.85)" font-family="system-ui, sans-serif" font-size="10" text-anchor="middle">React, Vue, Angular</text>
  </g>

  <line x1="430" y1="108" x2="430" y2="125" stroke="#7f8c8d" stroke-width="2"/>

  <g filter="url(#shadow3)">
    <rect x="340" y="130" width="180" height="55" rx="10" fill="url(#orangeGrad)"/>
    <text x="430" y="155" fill="white" font-family="system-ui, sans-serif" font-size="12" font-weight="700" text-anchor="middle">Application</text>
    <text x="430" y="172" fill="rgba(255,255,255,0.85)" font-family="system-ui, sans-serif" font-size="10" text-anchor="middle">Node.js, Java, Python</text>
  </g>

  <line x1="430" y1="188" x2="430" y2="205" stroke="#7f8c8d" stroke-width="2"/>

  <g filter="url(#shadow3)">
    <rect x="340" y="210" width="180" height="55" rx="10" fill="url(#greenGrad)"/>
    <text x="430" y="235" fill="white" font-family="system-ui, sans-serif" font-size="12" font-weight="700" text-anchor="middle">Data</text>
    <text x="430" y="252" fill="rgba(255,255,255,0.85)" font-family="system-ui, sans-serif" font-size="10" text-anchor="middle">PostgreSQL, MongoDB</text>
  </g>

  <!-- Checkmarks -->
  <text x="550" y="82" fill="#27ae60" font-family="system-ui, sans-serif" font-size="20">✓</text>
  <text x="550" y="162" fill="#27ae60" font-family="system-ui, sans-serif" font-size="20">✓</text>
  <text x="550" y="242" fill="#27ae60" font-family="system-ui, sans-serif" font-size="20">✓</text>

  <!-- Bottom labels -->
  <text x="115" y="275" fill="#c0392b" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle">Тясно свързан код</text>
  <text x="520" y="290" fill="#27ae60" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle">Независими слоеве</text>
</svg>

Note:
Разликата е драматична - от хаос към ред и яснота.

--

### Проблеми с Монолита

❌ Всяка промяна е рискована <!-- .element: class="fragment" -->

❌ Невъзможно независимо скалиране <!-- .element: class="fragment" -->

❌ Debugging е кошмар <!-- .element: class="fragment" -->

❌ Една грешка = цялото приложение пада <!-- .element: class="fragment" -->

Note:
Тези проблеми стават по-остри с растежа на приложението.

--

### Пример: Проблемен Код

```php
<?php
// ❌ Всичко е смесено в един файл!

$result = mysqli_query($conn,
  "SELECT * FROM users");

echo "<html><body>";
while ($row = mysqli_fetch_assoc($result)) {
    echo "<p>" . $row['name'] . "</p>";
}
echo "</body></html>";
?>
```

Note:
UI, бизнес логика и достъп до данни - всичко в един файл. Кошмар за поддръжка!

---

## Ключови Ползи 🚀

--

### 🔒 Сигурност

- Базата данни е изолирана
- Няма директен достъп от клиента
- Защитени API endpoints
- Контролиран достъп до данни

Note:
Сигурността е много по-лесна когато слоевете са разделени.

--

### 🔧 Поддръжка

- Всеки слой се разработва независимо
- Ясни отговорности
- По-лесно тестване
- Бърз onboarding на нови разработчици

Note:
Новите членове на екипа могат да работят върху един слой без да разбират цялата система.

--

### 📈 Скалируемост

- Всеки слой се скалира самостоятелно
- Black Friday? Добавете web servers!
- Тежки изчисления? Скалирайте app servers!
- Много данни? Оптимизирайте базата!

Note:
Това е огромно предимство за high-traffic приложения.

--

### 🎨 Гъвкавост

- Смяна на технологии в един слой
- React → Vue без промяна на backend
- MySQL → PostgreSQL без промяна на UI
- Поддръжка на множество клиенти

Note:
Технологичната независимост е безценна в дългосрочен план.

---

## Практически Пример

--

### Регистрация на Потребител

<svg viewBox="0 0 700 350" style="max-width: 700px; margin: 0 auto; display: block;">
  <defs>
    <linearGradient id="step1Grad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#3498db"/>
      <stop offset="100%" stop-color="#2980b9"/>
    </linearGradient>
    <linearGradient id="step2Grad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#e67e22"/>
      <stop offset="100%" stop-color="#d35400"/>
    </linearGradient>
    <linearGradient id="step3Grad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#27ae60"/>
      <stop offset="100%" stop-color="#1e8449"/>
    </linearGradient>
    <filter id="shadow4" x="-10%" y="-10%" width="120%" height="130%">
      <feDropShadow dx="0" dy="3" stdDeviation="3" flood-color="#000" flood-opacity="0.12"/>
    </filter>
    <marker id="flowArrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#9b59b6"/>
    </marker>
  </defs>

  <!-- Step 1: User fills form -->
  <g filter="url(#shadow4)">
    <rect x="50" y="30" width="180" height="80" rx="10" fill="url(#step1Grad)"/>
    <text x="140" y="55" fill="white" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle">1. PRESENTATION</text>
    <text x="140" y="75" fill="rgba(255,255,255,0.9)" font-family="system-ui, sans-serif" font-size="10" text-anchor="middle">Потребителят попълва</text>
    <text x="140" y="90" fill="rgba(255,255,255,0.9)" font-family="system-ui, sans-serif" font-size="10" text-anchor="middle">формата за регистрация</text>
  </g>

  <line x1="230" y1="70" x2="280" y2="70" stroke="#9b59b6" stroke-width="2" marker-end="url(#flowArrow)"/>

  <!-- Step 2: Server validates -->
  <g filter="url(#shadow4)">
    <rect x="290" y="30" width="180" height="80" rx="10" fill="url(#step2Grad)"/>
    <text x="380" y="55" fill="white" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle">2. APPLICATION</text>
    <text x="380" y="75" fill="rgba(255,255,255,0.9)" font-family="system-ui, sans-serif" font-size="10" text-anchor="middle">Валидира email формат</text>
    <text x="380" y="90" fill="rgba(255,255,255,0.9)" font-family="system-ui, sans-serif" font-size="10" text-anchor="middle">Хешира паролата</text>
  </g>

  <line x1="380" y1="110" x2="380" y2="140" stroke="#9b59b6" stroke-width="2" marker-end="url(#flowArrow)"/>

  <!-- Step 3: Check if exists -->
  <g filter="url(#shadow4)">
    <rect x="290" y="150" width="180" height="60" rx="10" fill="url(#step3Grad)"/>
    <text x="380" y="175" fill="white" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle">3. DATA</text>
    <text x="380" y="195" fill="rgba(255,255,255,0.9)" font-family="system-ui, sans-serif" font-size="10" text-anchor="middle">Проверява дали email съществува</text>
  </g>

  <line x1="290" y1="180" x2="240" y2="180" stroke="#9b59b6" stroke-width="2" marker-end="url(#flowArrow)"/>

  <!-- Step 4: Back to app -->
  <g filter="url(#shadow4)">
    <rect x="50" y="150" width="180" height="60" rx="10" fill="url(#step2Grad)"/>
    <text x="140" y="175" fill="white" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle">4. APPLICATION</text>
    <text x="140" y="195" fill="rgba(255,255,255,0.9)" font-family="system-ui, sans-serif" font-size="10" text-anchor="middle">Генерира user ID</text>
  </g>

  <line x1="140" y1="210" x2="140" y2="240" stroke="#9b59b6" stroke-width="2" marker-end="url(#flowArrow)"/>

  <!-- Step 5: Insert user -->
  <g filter="url(#shadow4)">
    <rect x="50" y="250" width="180" height="60" rx="10" fill="url(#step3Grad)"/>
    <text x="140" y="275" fill="white" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle">5. DATA</text>
    <text x="140" y="295" fill="rgba(255,255,255,0.9)" font-family="system-ui, sans-serif" font-size="10" text-anchor="middle">INSERT нов потребител</text>
  </g>

  <line x1="230" y1="280" x2="280" y2="280" stroke="#9b59b6" stroke-width="2" marker-end="url(#flowArrow)"/>

  <!-- Step 6: Response -->
  <g filter="url(#shadow4)">
    <rect x="290" y="250" width="180" height="60" rx="10" fill="url(#step1Grad)"/>
    <text x="380" y="275" fill="white" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle">6. PRESENTATION</text>
    <text x="380" y="295" fill="rgba(255,255,255,0.9)" font-family="system-ui, sans-serif" font-size="10" text-anchor="middle">"Успешна регистрация!" ✅</text>
  </g>
</svg>

Note:
Всяка стъпка има ясна отговорност - това прави debugging много по-лесен.

--

### Ползата?

> Ако искате да смените React на Vue.js, можете да го направите **без да пипате** приложния или data слоя!

Note:
Това е истинската сила на добрата архитектура.

---

## E-Commerce Скалиране

--

### Black Friday Сценарий 📦

**Проблем:** 10x повече трафик!

--

### Решение с Трислойна Архитектура

🌐 Web Servers: **2 → 10** (auto-scaling) <!-- .element: class="fragment" -->

⚙️ App Servers: **4 → 8** (add capacity) <!-- .element: class="fragment" -->

💾 Database: **Read replicas** (caching) <!-- .element: class="fragment" -->

Note:
Скалирате само това, което е нужно - спестявате пари и ресурси.

--

### AWS Deployment

<svg viewBox="0 0 600 280" style="max-width: 600px; margin: 0 auto; display: block;">
  <defs>
    <linearGradient id="albGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#f39c12"/>
      <stop offset="100%" stop-color="#e67e22"/>
    </linearGradient>
    <linearGradient id="ec2Grad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#3498db"/>
      <stop offset="100%" stop-color="#2980b9"/>
    </linearGradient>
    <linearGradient id="rdsGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#27ae60"/>
      <stop offset="100%" stop-color="#1e8449"/>
    </linearGradient>
    <filter id="shadow5" x="-10%" y="-10%" width="120%" height="130%">
      <feDropShadow dx="0" dy="3" stdDeviation="3" flood-color="#000" flood-opacity="0.12"/>
    </filter>
  </defs>

  <!-- Users -->
  <text x="60" y="140" font-size="40" text-anchor="middle">👥</text>
  <text x="60" y="170" fill="#2c3e50" font-family="system-ui, sans-serif" font-size="10" text-anchor="middle">Users</text>

  <!-- Arrow to ALB -->
  <line x1="100" y1="130" x2="140" y2="130" stroke="#7f8c8d" stroke-width="2"/>

  <!-- ALB -->
  <g filter="url(#shadow5)">
    <rect x="150" y="100" width="100" height="60" rx="8" fill="url(#albGrad)"/>
    <text x="200" y="125" fill="white" font-family="system-ui, sans-serif" font-size="10" font-weight="700" text-anchor="middle">Load Balancer</text>
    <text x="200" y="145" fill="rgba(255,255,255,0.9)" font-family="system-ui, sans-serif" font-size="9" text-anchor="middle">ALB</text>
  </g>

  <!-- Arrows to EC2s -->
  <line x1="250" y1="115" x2="290" y2="75" stroke="#7f8c8d" stroke-width="2"/>
  <line x1="250" y1="130" x2="290" y2="130" stroke="#7f8c8d" stroke-width="2"/>
  <line x1="250" y1="145" x2="290" y2="185" stroke="#7f8c8d" stroke-width="2"/>

  <!-- EC2 instances -->
  <g filter="url(#shadow5)">
    <rect x="300" y="45" width="90" height="50" rx="6" fill="url(#ec2Grad)"/>
    <text x="345" y="68" fill="white" font-family="system-ui, sans-serif" font-size="9" font-weight="600" text-anchor="middle">EC2 Web</text>
    <text x="345" y="82" fill="rgba(255,255,255,0.9)" font-family="system-ui, sans-serif" font-size="8" text-anchor="middle">Nginx</text>
  </g>

  <g filter="url(#shadow5)">
    <rect x="300" y="105" width="90" height="50" rx="6" fill="url(#ec2Grad)"/>
    <text x="345" y="128" fill="white" font-family="system-ui, sans-serif" font-size="9" font-weight="600" text-anchor="middle">EC2 App</text>
    <text x="345" y="142" fill="rgba(255,255,255,0.9)" font-family="system-ui, sans-serif" font-size="8" text-anchor="middle">Node.js</text>
  </g>

  <g filter="url(#shadow5)">
    <rect x="300" y="165" width="90" height="50" rx="6" fill="url(#ec2Grad)"/>
    <text x="345" y="188" fill="white" font-family="system-ui, sans-serif" font-size="9" font-weight="600" text-anchor="middle">EC2 App</text>
    <text x="345" y="202" fill="rgba(255,255,255,0.9)" font-family="system-ui, sans-serif" font-size="8" text-anchor="middle">Node.js</text>
  </g>

  <!-- Arrows to RDS -->
  <line x1="390" y1="130" x2="430" y2="130" stroke="#7f8c8d" stroke-width="2"/>
  <line x1="390" y1="190" x2="410" y2="190" stroke="#7f8c8d" stroke-width="2"/>
  <line x1="410" y1="190" x2="410" y2="130" stroke="#7f8c8d" stroke-width="2"/>

  <!-- RDS -->
  <g filter="url(#shadow5)">
    <rect x="440" y="95" width="110" height="70" rx="8" fill="url(#rdsGrad)"/>
    <text x="495" y="123" fill="white" font-family="system-ui, sans-serif" font-size="10" font-weight="700" text-anchor="middle">Aurora MySQL</text>
    <text x="495" y="140" fill="rgba(255,255,255,0.9)" font-family="system-ui, sans-serif" font-size="9" text-anchor="middle">RDS</text>
    <text x="495" y="155" fill="rgba(255,255,255,0.9)" font-family="system-ui, sans-serif" font-size="8" text-anchor="middle">Auto Scaling</text>
  </g>

  <!-- Labels -->
  <text x="200" y="250" fill="#e67e22" font-family="system-ui, sans-serif" font-size="10" font-weight="600" text-anchor="middle">Presentation</text>
  <text x="345" y="250" fill="#3498db" font-family="system-ui, sans-serif" font-size="10" font-weight="600" text-anchor="middle">Application</text>
  <text x="495" y="250" fill="#27ae60" font-family="system-ui, sans-serif" font-size="10" font-weight="600" text-anchor="middle">Data</text>
</svg>

Note:
Това е реална production архитектура за high-traffic приложения.

---

## Best Practices ✅

--

### Правила за Успех

🎯 **Ясни контракти** - Дефинирайте APIs между слоевете <!-- .element: class="fragment" -->

🎯 **Separation of concerns** - Всеки слой САМО своята работа <!-- .element: class="fragment" -->

🎯 **No layer leakage** - Никога не прескачайте слоеве! <!-- .element: class="fragment" -->

🎯 **Security boundaries** - Различни мерки на всеки слой <!-- .element: class="fragment" -->

Note:
Тези правила са ключови за дългосрочния успех на архитектурата.

--

### ⚠️ Layer Leakage

**Какво е?** Когато слой заобикаля предвидените отговорности

--

### ❌ Примери за Layer Leakage

```javascript
// Презентационен слой директно query-ва базата!
const users = await mysql.query("SELECT * FROM users");

// UI съдържа бизнес правила!
if (user.age >= 18 && user.verified) {
  showAdultContent();
}
```

Note:
Това компрометира цялата архитектура - избягвайте го на всяка цена!

--

### ✅ Правилен Подход

```javascript
// Presentation → Application
const users = await api.get('/users');

// Application layer handles business rules
// UI just displays the result
if (response.canViewContent) {
  showContent();
}
```

Note:
Бизнес логиката остава в application слоя.

---

## Обобщение

--

### Трите Слоя

| Слой | Отговорност |
|------|-------------|
| 🖥️ **Presentation** | UI, форми, визуализация |
| ⚙️ **Application** | Бизнес логика, валидация |
| 💾 **Data** | Съхранение, CRUD операции |

--

### Ключови Ползи

📈 **Скалируемост** - Независимо скалиране <!-- .element: class="fragment" -->

🔧 **Поддръжка** - Промени без side effects <!-- .element: class="fragment" -->

🔒 **Сигурност** - Изолирани данни <!-- .element: class="fragment" -->

🎨 **Гъвкавост** - Смяна на технологии <!-- .element: class="fragment" -->

--

### Кога да Използвате?

✅ Висок трафик и натоварване <!-- .element: class="fragment" -->

✅ Множество клиентски приложения <!-- .element: class="fragment" -->

✅ Чести промени и добавяне на функции <!-- .element: class="fragment" -->

✅ Нужда от висока надеждност <!-- .element: class="fragment" -->

---

## Ресурси 📚

- [AWS Three-Tier Architecture](https://aws.amazon.com/architecture/)
- "Clean Architecture" - Robert C. Martin
- "Patterns of Enterprise Application Architecture" - Martin Fowler

---

<!-- .slide: data-background="#4d7e65" -->

# Въпроси? 🤔

### Благодаря за вниманието!

Note:
Готов съм да отговоря на вашите въпроси за трислойната архитектура.
