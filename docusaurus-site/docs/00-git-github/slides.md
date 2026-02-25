---
title: Git и GitHub за Разработчици
theme: white
highlightTheme: github
transition: slide
---

# Git и GitHub

### Основи на Version Control и Collaboration

Note:
Добре дошли в лекцията по Git и GitHub. Днес ще научите основите на контрол на версиите и как да работите в екип.

---

## Учебни Цели

- Инсталирате и конфигурирате Git
- Изпълнявате основния workflow: add, commit, branch, merge
- Синхронизирате с GitHub repositories
- Работите в екип с branches и Pull Requests

Note:
До края на лекцията ще можете да използвате Git самостоятелно за вашите проекти.

---

## Защо Version Control?

--

### Без Git...

```
📁 Моят проект/
├── final_project.py
├── final_project_v2.py
├── final_project_FINAL.py
├── final_project_REALLY_FINAL.py
└── final_project_FINAL_v2_fixed.py
```

😱 Хаос!

Note:
Всички сме били в тази ситуация. Git решава този проблем елегантно.

--

### С Git...

- **Един файл**, пълна история
- Възможност да "пътувате назад във времето"
- Знаете кой какво е променил и защо
- Безопасно експериментиране

Note:
Git е като "save game" за вашия код - можете винаги да се върнете към работеща версия.

---

## Ключови Ползи

📜 **История** - Виждате всяка промяна <!-- .element: class="fragment" data-fragment-index="1" -->

↩️ **Rollback** - Връщате се към работещи версии <!-- .element: class="fragment" data-fragment-index="2" -->

👥 **Паралелна работа** - Екипът работи едновременно <!-- .element: class="fragment" data-fragment-index="3" -->

🔌 **Offline** - Пълна функционалност без интернет <!-- .element: class="fragment" data-fragment-index="4" -->

Note:
Git работи локално - не ви трябва интернет за повечето операции.

---

## Git vs GitHub

--

### Git

- Command-line **инструмент**
- Работи **локално** на вашата машина
- **Безплатен** и open-source
- Управлява branching и merging

Note:
Git е двигателят - основният инструмент за version control.

--

### GitHub

- **Уеб платформа** за хостинг
- Repositories в **облака**
- **Collaboration** tools (Issues, PRs)
- **CI/CD** интеграция

Note:
GitHub е гаражът - мястото където паркирате и споделяте вашия код.

--

### Аналогия

> **Git е двигателят**
>
> **GitHub е гаражът**

Можете да карате без гараж, но не без двигател.

---

## Инсталиране на Git

| OS | Команда |
|----|---------|
| Windows | Изтеглете от git-scm.com |
| macOS | `brew install git` |
| Linux | `sudo apt install git` |

--

### Проверка

```bash
git --version
```

```
git version 2.43.0
```

✅ Готови сте!

---

## Конфигурация

```bash
# Задайте вашето име
git config --global user.name "Вашето Име"

# Задайте вашия email
git config --global user.email "email@example.com"
```

--

### Проверка на настройките

```bash
git config --list
```

Note:
Тези данни се появяват във всеки ваш commit - уверете се че са правилни.

---

## Трите Етапа на Git

--

<svg viewBox="0 0 700 280" style="max-width: 700px; margin: 0 auto; display: block;">
  <defs>
    <linearGradient id="workingGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#e74c3c"/>
      <stop offset="100%" style="stop-color:#c0392b"/>
    </linearGradient>
    <linearGradient id="stagingGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#f39c12"/>
      <stop offset="100%" style="stop-color:#e67e22"/>
    </linearGradient>
    <linearGradient id="repoGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#27ae60"/>
      <stop offset="100%" style="stop-color:#1e8449"/>
    </linearGradient>
    <filter id="gitShadow" x="-10%" y="-10%" width="120%" height="130%">
      <feDropShadow dx="0" dy="3" stdDeviation="3" flood-color="#000" flood-opacity="0.15"/>
    </filter>
    <marker id="arrowHead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#666"/>
    </marker>
  </defs>
  <style>
    .stage-box { opacity: 0; transform: translateY(20px); }
    .box-working { animation: stageSlideUp 0.5s ease-out 0.2s forwards; }
    .box-staging { animation: stageSlideUp 0.5s ease-out 0.5s forwards; }
    .box-repo { animation: stageSlideUp 0.5s ease-out 0.8s forwards; }
    .stage-arrow { stroke-dasharray: 100; stroke-dashoffset: 100; }
    .arrow-1 { animation: drawArrow 0.4s ease-out 0.7s forwards; }
    .arrow-2 { animation: drawArrow 0.4s ease-out 1.0s forwards; }
    .stage-cmd { opacity: 0; }
    .cmd-add { animation: cmdFadeIn 0.3s ease-out 0.9s forwards; }
    .cmd-commit { animation: cmdFadeIn 0.3s ease-out 1.2s forwards; }
    .file-icon { opacity: 0; transform-origin: center; }
    .file-1 { animation: fileFloat 0.4s ease-out 0.4s forwards; }
    .file-2 { animation: fileFloat 0.4s ease-out 0.7s forwards; }
    .file-3 { animation: fileFloat 0.4s ease-out 1.0s forwards; }
    .particle-git { opacity: 0; }
    .particle-git-1 { animation: particleFlow 2s linear 1.3s infinite; }
    .particle-git-2 { animation: particleFlow 2s linear 1.8s infinite; }
    @keyframes stageSlideUp { to { opacity: 1; transform: translateY(0); } }
    @keyframes drawArrow { to { stroke-dashoffset: 0; } }
    @keyframes cmdFadeIn { to { opacity: 1; } }
    @keyframes fileFloat { 0% { opacity: 0; transform: scale(0) rotate(-10deg); } 100% { opacity: 1; transform: scale(1) rotate(0deg); } }
    @keyframes particleFlow { 0% { opacity: 0; transform: translateX(0); } 10% { opacity: 1; } 90% { opacity: 1; } 100% { opacity: 0; transform: translateX(180px); } }
  </style>
  <!-- Working Directory Box -->
  <g class="stage-box box-working" filter="url(#gitShadow)">
    <rect x="40" y="60" width="160" height="100" rx="10" fill="url(#workingGrad)"/>
    <text x="120" y="100" fill="white" font-family="system-ui, sans-serif" font-size="14" font-weight="700" text-anchor="middle">WORKING</text>
    <text x="120" y="120" fill="rgba(255,255,255,0.85)" font-family="system-ui, sans-serif" font-size="12" text-anchor="middle">DIRECTORY</text>
    <text class="file-icon file-1" x="120" y="150" font-size="22" text-anchor="middle">📄</text>
  </g>
  <!-- Staging Area Box -->
  <g class="stage-box box-staging" filter="url(#gitShadow)">
    <rect x="270" y="60" width="160" height="100" rx="10" fill="url(#stagingGrad)"/>
    <text x="350" y="100" fill="white" font-family="system-ui, sans-serif" font-size="14" font-weight="700" text-anchor="middle">STAGING</text>
    <text x="350" y="120" fill="rgba(255,255,255,0.85)" font-family="system-ui, sans-serif" font-size="12" text-anchor="middle">AREA</text>
    <text class="file-icon file-2" x="350" y="150" font-size="22" text-anchor="middle">📋</text>
  </g>
  <!-- Repository Box -->
  <g class="stage-box box-repo" filter="url(#gitShadow)">
    <rect x="500" y="60" width="160" height="100" rx="10" fill="url(#repoGrad)"/>
    <text x="580" y="100" fill="white" font-family="system-ui, sans-serif" font-size="14" font-weight="700" text-anchor="middle">REPOSITORY</text>
    <text x="580" y="120" fill="rgba(255,255,255,0.85)" font-family="system-ui, sans-serif" font-size="12" text-anchor="middle">(Commits)</text>
    <text class="file-icon file-3" x="580" y="150" font-size="22" text-anchor="middle">📦</text>
  </g>
  <!-- Arrow 1: Working → Staging -->
  <line class="stage-arrow arrow-1" x1="200" y1="110" x2="265" y2="110" stroke="#666" stroke-width="3" stroke-linecap="round" marker-end="url(#arrowHead)"/>
  <!-- Arrow 2: Staging → Repository -->
  <line class="stage-arrow arrow-2" x1="430" y1="110" x2="495" y2="110" stroke="#666" stroke-width="3" stroke-linecap="round" marker-end="url(#arrowHead)"/>
  <!-- Command Labels -->
  <g class="stage-cmd cmd-add">
    <rect x="195" y="185" width="90" height="28" rx="6" fill="#2c3e50"/>
    <text x="240" y="204" fill="#7ee787" font-family="monospace" font-size="12" text-anchor="middle">git add</text>
  </g>
  <g class="stage-cmd cmd-commit">
    <rect x="410" y="185" width="100" height="28" rx="6" fill="#2c3e50"/>
    <text x="460" y="204" fill="#7ee787" font-family="monospace" font-size="12" text-anchor="middle">git commit</text>
  </g>
  <!-- Flowing Particles -->
  <circle class="particle-git particle-git-1" cx="205" cy="110" r="5" fill="#f05033"/>
  <circle class="particle-git particle-git-2" cx="435" cy="110" r="5" fill="#27ae60"/>
</svg>

Note:
Това е фундаменталната концепция на Git - разберете тези три етапа и всичко друго ще има смисъл.

--

### 1. Working Directory

Вашата **локална папка** с файлове

```bash
# Инициализирайте Git tracking
git init
```

--

### 2. Staging Area

**Подготовка** - избирате кои промени да commit-нете

```bash
# Stage конкретен файл
git add filename.py

# Stage всичко
git add .
```

--

### 3. Repository (Commits)

**Постоянен snapshot** с описание

```bash
# Създайте commit
git commit -m "Add initial project structure"
```

---

## Практика: Основен Workflow

```bash
# 1. Създайте папка
mkdir my-repo && cd my-repo

# 2. Инициализирайте Git
git init

# 3. Създайте файл
echo "# My Project" > README.md

# 4. Stage
git add README.md

# 5. Commit
git commit -m "Add README file"
```

Note:
Следвайте тези стъпки заедно с мен.

---

## Git Status

```bash
git status
```

- 🟢 **Зелено** = staged, готово за commit
- 🔴 **Червено** = променено, но не staged

Note:
git status е вашият най-добър приятел - използвайте го често!

---

## Commit Messages

--

### ✅ Добри примери

```
Add user authentication module
Fix null pointer exception in login
Update README with installation steps
```

--

### ❌ Лоши примери

```
Fixed stuff
asdfasdf
WIP
changes
```

Note:
Добрите commit messages спестяват време на вас и екипа ви в бъдеще.

---

## Branching

--

### Какво са Branches?

<svg viewBox="0 0 650 200" style="max-width: 650px; margin: 0 auto; display: block;">
  <defs>
    <linearGradient id="brGitOrange" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#f05033"/>
      <stop offset="100%" style="stop-color:#de4c36"/>
    </linearGradient>
    <linearGradient id="brGreen" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#27ae60"/>
      <stop offset="100%" style="stop-color:#2ecc71"/>
    </linearGradient>
    <linearGradient id="brPurple" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#9b59b6"/>
      <stop offset="100%" style="stop-color:#a371f7"/>
    </linearGradient>
    <filter id="brGlow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
      <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <filter id="brShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#000" flood-opacity="0.2"/>
    </filter>
  </defs>
  <style>
    .br-main-line { stroke-dasharray: 580; stroke-dashoffset: 580; animation: brDrawLine 1s ease-out 0.2s forwards; }
    .br-feature-line { stroke-dasharray: 250; stroke-dashoffset: 250; animation: brDrawLine 0.6s ease-out 0.8s forwards; }
    .br-bugfix-line { stroke-dasharray: 150; stroke-dashoffset: 150; animation: brDrawLine 0.5s ease-out 1.0s forwards; }
    .br-commit { transform-origin: center; transform: scale(0); }
    .br-c1 { animation: brPopIn 0.25s ease-out 0.5s forwards; }
    .br-c2 { animation: brPopIn 0.25s ease-out 0.65s forwards; }
    .br-c3 { animation: brPopIn 0.25s ease-out 0.8s forwards; }
    .br-c4 { animation: brPopIn 0.25s ease-out 0.95s forwards; }
    .br-c5 { animation: brPopIn 0.25s ease-out 1.1s forwards; }
    .br-c6 { animation: brPopIn 0.25s ease-out 1.25s forwards; }
    .br-cf1 { animation: brPopIn 0.25s ease-out 1.0s forwards; }
    .br-cf2 { animation: brPopIn 0.25s ease-out 1.15s forwards; }
    .br-cb1 { animation: brPopIn 0.25s ease-out 1.2s forwards; }
    .br-label { opacity: 0; animation: brFadeIn 0.3s ease-out forwards; }
    .br-label-main { animation-delay: 1.0s; }
    .br-label-feature { animation-delay: 1.2s; }
    .br-label-bugfix { animation-delay: 1.35s; }
    @keyframes brDrawLine { to { stroke-dashoffset: 0; } }
    @keyframes brPopIn { 0% { transform: scale(0); } 70% { transform: scale(1.2); } 100% { transform: scale(1); } }
    @keyframes brFadeIn { to { opacity: 1; } }
  </style>
  <!-- Main branch line -->
  <path class="br-main-line" d="M 40 100 L 610 100" stroke="#30363d" stroke-width="4" stroke-linecap="round" fill="none"/>
  <!-- Feature branch (top) -->
  <path class="br-feature-line" d="M 150 100 Q 180 100 200 50 L 350 50 Q 380 50 400 100" stroke="url(#brGreen)" stroke-width="3" stroke-linecap="round" fill="none" filter="url(#brGlow)"/>
  <!-- Bugfix branch (bottom) -->
  <path class="br-bugfix-line" d="M 280 100 Q 310 100 330 150 L 420 150 Q 450 150 470 100" stroke="url(#brPurple)" stroke-width="3" stroke-linecap="round" fill="none" filter="url(#brGlow)"/>
  <!-- Main branch commits -->
  <g filter="url(#brShadow)">
    <circle class="br-commit br-c1" cx="70" cy="100" r="10" fill="url(#brGitOrange)"/>
    <circle class="br-commit br-c2" cx="150" cy="100" r="10" fill="url(#brGitOrange)"/>
    <circle class="br-commit br-c3" cx="280" cy="100" r="10" fill="url(#brGitOrange)"/>
    <circle class="br-commit br-c4" cx="400" cy="100" r="10" fill="url(#brGitOrange)"/>
    <circle class="br-commit br-c5" cx="470" cy="100" r="10" fill="url(#brGitOrange)"/>
    <circle class="br-commit br-c6" cx="570" cy="100" r="10" fill="url(#brGitOrange)"/>
  </g>
  <!-- Feature branch commits -->
  <g filter="url(#brShadow)">
    <circle class="br-commit br-cf1" cx="250" cy="50" r="8" fill="#2ecc71"/>
    <circle class="br-commit br-cf2" cx="320" cy="50" r="8" fill="#2ecc71"/>
  </g>
  <!-- Bugfix branch commit -->
  <g filter="url(#brShadow)">
    <circle class="br-commit br-cb1" cx="375" cy="150" r="8" fill="#a371f7"/>
  </g>
  <!-- Labels -->
  <text class="br-label br-label-main" x="320" y="125" fill="#f05033" font-family="system-ui, sans-serif" font-size="14" font-weight="700" text-anchor="middle">main</text>
  <text class="br-label br-label-feature" x="285" y="35" fill="#27ae60" font-family="system-ui, sans-serif" font-size="12" font-weight="600" text-anchor="middle">feature-branch</text>
  <text class="br-label br-label-bugfix" x="375" y="180" fill="#9b59b6" font-family="system-ui, sans-serif" font-size="12" font-weight="600" text-anchor="middle">bugfix-branch</text>
</svg>

Note:
Branches позволяват паралелна работа без риск за основния код.

--

### Защо Branches?

- 🔒 **Изолация** - експериментирайте безопасно
- 👥 **Паралелна работа** - екипът работи едновременно
- 📦 **Организация** - features остават отделни
- 🛡️ **Безопасност** - лесно отказвате неуспешни опити

--

### Branch Команди

```bash
# Покажи branches
git branch

# Създай нов branch
git checkout -b feature-login

# Премини към съществуващ
git checkout main
```

---

## Merging

```bash
# 1. Отидете на target branch
git checkout main

# 2. Слейте feature branch
git merge feature-login

# 3. Изтрийте feature branch
git branch -d feature-login
```

Note:
Merge интегрира промените от един branch в друг.

---

## Merge Conflicts

--

### Кога възникват?

Когато **едни и същи редове** са редактирани в двата branch-а.

--

### Как изглеждат?

```python
def greet(name):
<<<<<<< HEAD
    return f"Hello, {name}!"
=======
    return f"Hi there, {name}!"
>>>>>>> feature-branch
```

--

### Как се разрешават?

1. Редактирайте файла
2. Изберете правилната версия
3. Премахнете маркерите
4. `git add` + `git commit`

Note:
Конфликтите не са страшни - просто избирате коя версия искате да запазите.

---

## GitHub: Remote Repositories

--

### Свързване

```bash
# Добавете remote
git remote add origin https://github.com/USER/REPO.git

# Проверете
git remote -v
```

--

### Push / Pull / Fetch

| Команда | Действие |
|---------|----------|
| `git push` | Качва локални commits |
| `git pull` | Сваля + слива промени |
| `git fetch` | Сваля без сливане |

---

## Push: Качване

```bash
# Първи път (задава upstream)
git push -u origin main

# След това
git push
```

Note:
Push качва вашата работа към сървъра.

---

## Pull: Сваляне

```bash
# Сваля И слива
git pull origin main

# Или просто
git pull
```

Note:
Винаги правете pull преди да започнете работа - ще имате последната версия.

---

## Clone: Копиране

```bash
# Клонирайте repository
git clone https://github.com/USER/REPO.git

# В конкретна папка
git clone https://github.com/USER/REPO.git my-folder
```

Note:
Clone създава пълно локално копие с цялата история.

---

## Препоръчителен Workflow

```bash
# Сутрин
git pull origin main

# ... работете, add, commit ...

# Вечер
git push origin main
```

Note:
Този прост workflow ще ви предпази от много проблеми.

---

## Feature Branch Workflow

```bash
# 1. Създайте feature branch
git checkout -b feature/new-feature

# 2. Работете и commit-вайте
git add .
git commit -m "Add new feature"

# 3. Push към remote
git push -u origin feature/new-feature

# 4. Създайте Pull Request в GitHub
```

Note:
Това е стандартният професионален workflow.

---

## Pull Requests

- Code review преди merge
- Автоматични тестове (CI/CD)
- Дискусия и документация
- Защита на main branch

Note:
Pull Requests са сърцето на екипното сътрудничество в GitHub.

---

## .gitignore

```gitignore
# Python
__pycache__/
*.pyc
venv/

# Secrets
.env
credentials.json

# IDE
.vscode/
.idea/
```

Note:
Никога не commit-вайте пароли, API keys или generated файлове.

---

<!-- .slide: data-background="#2d5986" -->

## Обобщение

--

### Локални команди

```bash
git init          # Инициализация
git status        # Статус
git add           # Staging
git commit        # Commit
git branch        # Branches
git merge         # Сливане
```

--

### Remote команди

```bash
git clone         # Копиране
git remote add    # Свързване
git push          # Качване
git pull          # Сваляне
git fetch         # Сваляне без merge
```

---

## Best Practices

✅ Commit-вайте често, с ясни съобщения <!-- .element: class="fragment" -->

✅ Pull преди да започнете работа <!-- .element: class="fragment" -->

✅ Използвайте feature branches <!-- .element: class="fragment" -->

✅ Никога не commit-вайте secrets <!-- .element: class="fragment" -->

✅ Code review чрез Pull Requests <!-- .element: class="fragment" -->

---

## Ресурси

- [git-scm.com/doc](https://git-scm.com/doc) - Официална документация
- [learngitbranching.js.org](https://learngitbranching.js.org/) - Интерактивен tutorial
- [skills.github.com](https://skills.github.com/) - GitHub курсове

---

<!-- .slide: data-background="#4d7e65" -->

# Въпроси?

### Благодаря за вниманието!

Note:
Готов съм да отговоря на вашите въпроси.
