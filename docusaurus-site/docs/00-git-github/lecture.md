---
title: "Лекция"
sidebar_position: 1
slug: lecture
tags: [git, github, version-control, collaboration]
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

# Git и GitHub за Разработчици

<ViewSlidesButton lectureSlug="git-github" />

<QuickSummary>

**Ключови познания за изпита:**
- **Git** е локален инструмент за контрол на версиите; **GitHub** е облачна платформа за хостинг и сътрудничество
- Трите етапа на Git: Working Directory → Staging Area → Repository (чрез `git add` и `git commit`)
- **Branches** позволяват паралелна работа без да се засяга main кода
- **Push** качва локални промени; **Pull** сваля и слива; **Fetch** сваля без сливане
- При **merge conflict** ръчно избирате коя версия да запазите

</QuickSummary>

<LearningObjectives objectives={[
  "Инсталирате и конфигурирате Git с GitHub акаунт",
  "Изпълнявате основния Git workflow: add, commit, branch, merge",
  "Синхронизирате локални промени с отдалечени GitHub repositories",
  "Прилагате GitHub функционалности за екипна работа",
  "Отстранявате често срещани Git проблеми самостоятелно"
]} />

---

## Въведение: Защо контрол на версиите?

<WhyBox title="Защо Git е задължителен за всеки програмист?">

Представете си следната ситуация:

```
📁 Моят проект/
├── final_project.py
├── final_project_v2.py
├── final_project_FINAL.py
├── final_project_REALLY_FINAL.py
└── final_project_FINAL_v2_fixed.py  😱
```

**С Git:** Един файл, пълна история, възможност да "пътувате назад във времето".

Git не е просто инструмент - той е **застраховка** за вашия код. Позволява ви да експериментирате свободно, защото винаги можете да се върнете към работеща версия.

</WhyBox>

<InfoBox title="Какво е Version Control System?">

Системите за контрол на версиите **записват всяка промяна** направена върху файловете в проекта, създавайки пълна история на неговото развитие.

**Ключови ползи:**
- 📜 **История** - Виждате кой какво е променил, кога и защо
- ↩️ **Връщане назад** - Възстановявате работещи версии моментално
- 👥 **Паралелна работа** - Няколко души работят едновременно
- 🔌 **Offline режим** - Пълна функционалност без интернет
- ✅ **Code Review** - Преглеждате промените преди интеграция

</InfoBox>

---

## Git vs GitHub: Ключовата Разлика

<ComparisonBox
  left={{
    title: "Git",
    content: (
      <ul>
        <li><strong>Command-line инструмент</strong> за контрол на версиите</li>
        <li><strong>Разпределена архитектура</strong> - всеки потребител има пълно копие</li>
        <li>Работи <strong>локално</strong> на вашата машина</li>
        <li>Управлява <strong>branching и merging</strong></li>
        <li><strong>Безплатен</strong> и open-source</li>
      </ul>
    )
  }}
  right={{
    title: "GitHub",
    content: (
      <ul>
        <li><strong>Уеб платформа</strong> построена върху Git</li>
        <li><strong>Хоства repositories</strong> в облака</li>
        <li>Предоставя <strong>инструменти за сътрудничество</strong> (Issues, PRs)</li>
        <li>Предлага <strong>контрол на достъпа</strong> (public/private)</li>
        <li>Интегрира се с <strong>CI/CD pipelines</strong></li>
      </ul>
    )
  }}
/>

<InfoBox title="Аналогия за запомняне">

> **Git е двигателят, GitHub е гаражът** където паркирате и споделяте превозното си средство с други.

Можете да използвате Git без GitHub (локално), но не можете да използвате GitHub без Git (в основата си).

</InfoBox>

---

## Предварителни Изисквания

### Команди в терминала

Преди да работите с Git, уверете се, че сте комфортни с тези команди:

<CollapsibleSection title="Основни терминални команди" icon="💻">

```bash
# Покажи файлове в текущата директория
ls

# Смени директория
cd folder-name

# Покажи текущата директория (къде съм?)
pwd

# Създай нова директория
mkdir new-folder

# Отиди едно ниво нагоре
cd ..
```

**Бърза проверка:** Отворете терминала и опитайте:
```bash
mkdir git-practice && cd git-practice && pwd
```

</CollapsibleSection>

### Структура на проект

```
my-project/
├── src/              # Основен source code
│   ├── main.py
│   └── utils.py
├── data/             # Входни данни
├── tests/            # Тестове
│   └── test_main.py
├── README.md         # Описание на проекта
└── requirements.txt  # Dependencies
```

<InfoBox title="Защо структурата е важна за Git?">

- Git проследява промени **в цялата структура** на проекта
- Организираните проекти = **по-чиста commit история**
- Групирането на свързани файлове = **по-лесна колаборация**

</InfoBox>

---

## Инсталиране на Git

<Grid columns={3}>
  <Card title="Windows" icon="🪟">
    Изтеглете инсталатора от [git-scm.com](https://git-scm.com/downloads) и стартирайте с настройки по подразбиране
  </Card>
  <Card title="macOS" icon="🍎">
    Използвайте Homebrew: `brew install git` или изтеглете инсталатора
  </Card>
  <Card title="Linux" icon="🐧">
    Ubuntu/Debian: `sudo apt install git`
    Fedora: `sudo dnf install git`
  </Card>
</Grid>

### Проверка на инсталацията

```bash
git --version
```

<SuccessBox title="Очакван резултат">

```
git version 2.43.0
```

Ако виждате версия (2.x или по-нова), Git е инсталиран успешно!

</SuccessBox>

---

## Конфигуриране на Git

### Задаване на идентичност

Тези данни се появяват във всеки ваш commit:

```bash
# Задайте вашето име
git config --global user.name "Вашето Име"

# Задайте вашия email (трябва да съвпада с GitHub акаунта)
git config --global user.email "your.email@example.com"
```

### Проверка на конфигурацията

```bash
# Покажи всички настройки
git config --list

# Провери конкретна настройка
git config user.name
git config user.email
```

<CollapsibleSection title="Създаване на GitHub акаунт" icon="🔐">

1. Посетете [github.com](https://github.com)
2. Кликнете **"Sign up"**
3. Въведете username, email и парола
4. Завършете email верификацията
5. Изберете безплатния план (достатъчен за учене)

**Свързване на Git с GitHub:**
- **HTTPS** (username/password или token) - по-лесно за начало
- **SSH keys** (по-сигурно, препоръчва се за редовна употреба)

</CollapsibleSection>

---

## Трите Етапа на Git

<InfoBox title="Git Workflow Диаграма">

<img src={useBaseUrl('/img/diagrams/git-github/git-three-stages.svg')} alt="Git Three Stages" style={{maxWidth: '700px', margin: '0 auto', display: 'block'}} />

</InfoBox>

<Grid columns={3}>
  <Card title="1. Working Directory" icon="📁">
    Локалната папка на проекта където създавате и модифицирате файлове
  </Card>
  <Card title="2. Staging Area" icon="📋">
    Зона за подготовка - избирате кои промени да включите в следващия commit
  </Card>
  <Card title="3. Repository" icon="💾">
    Постоянна снимка (snapshot) на staged промените с описателно съобщение
  </Card>
</Grid>

---

### Етап 1: Working Directory

```bash
# Създайте нова папка за проект
mkdir my-first-repo
cd my-first-repo

# Инициализирайте Git tracking
git init
```

**Резултат:**
```
Initialized empty Git repository in /path/to/my-first-repo/.git/
```

```bash
# Проверете статуса на repository-то
git status
```

Това показва:
- На кой branch се намирате
- Untracked файлове (нови, непроследявани)
- Modified файлове (променени)
- Файлове готови за commit

---

### Етап 2: Staging Area

```bash
# Stage-нете конкретен файл
git add filename.py

# Stage-нете няколко файла
git add file1.py file2.py

# Stage-нете всичко в текущата директория
git add .

# Stage-нете само tracked файлове (не нови)
git add -u
```

<InfoBox title="Разчитане на git status">

- 🟢 **Зелени файлове** = staged, готови за commit
- 🔴 **Червени файлове** = modified, но не staged

</InfoBox>

---

### Етап 3: Commits

```bash
# Commit с съобщение
git commit -m "Add initial project structure"

# Stage и commit tracked файлове в една стъпка
git commit -a -m "Update main function logic"
```

<SuccessBox title="Добри Commit Съобщения">

**Формат:**
```
<тип>: <кратко описание> (макс. 50 символа)
```

**Примери:**
- ✅ `Add user authentication module`
- ✅ `Fix null pointer exception in login`
- ✅ `Update README with installation steps`
- ❌ `Fixed stuff`
- ❌ `asdfasdf`
- ❌ `WIP`

</SuccessBox>

### Преглед на историята

```bash
# Пълен commit log
git log

# Компактен изглед (един ред на commit)
git log --oneline

# Визуална графика на branches
git log --oneline --graph --all
```

---

## Практическо Упражнение: Основен Workflow

```bash
# 1. Създайте папка за проекта
mkdir practice-repo && cd practice-repo

# 2. Инициализирайте Git
git init

# 3. Създайте файл
echo "# My Practice Project" > README.md

# 4. Проверете статуса (файлът е untracked)
git status

# 5. Stage-нете файла
git add README.md

# 6. Проверете статуса отново (файлът е staged)
git status

# 7. Направете commit
git commit -m "Add README file"

# 8. Вижте историята
git log --oneline
```

---

## Branching: Паралелна Разработка

<InfoBox title="Какво са Branches?">

Branches позволяват да **работите върху различни features независимо** без да засягате основния код.

<img src={useBaseUrl('/img/diagrams/git-github/git-branching.svg')} alt="Git Branching" style={{maxWidth: '650px', margin: '1rem auto', display: 'block'}} />

</InfoBox>

### Защо да използвате Branches?

<Grid columns={2}>
  <Card title="Изолация" icon="🔒">
    Експериментирайте без да чупите main кода
  </Card>
  <Card title="Паралелна работа" icon="👥">
    Екипът работи едновременно върху различни features
  </Card>
</Grid>

### Branch Команди

```bash
# Покажи всички локални branches
git branch

# Покажи всички branches (включително remote)
git branch -a

# Създай нов branch
git branch feature-login

# Създай И премини към нов branch (препоръчително)
git checkout -b feature-login

# Модерна алтернатива (Git 2.23+)
git switch -c feature-login

# Премини към съществуващ branch
git checkout main
git switch main  # модерна алтернатива
```

---

## Merging: Сливане на Branches

Когато feature-ът е готов, **слейте го обратно** към main branch.

```bash
# 1. Преминете към target branch (обикновено main)
git checkout main

# 2. Слейте feature branch-а
git merge feature-login

# 3. Изтрийте feature branch-а (почистване)
git branch -d feature-login
```

### Видове Merge

<ComparisonBox
  left={{
    title: "Fast-Forward Merge",
    content: (
      <ul>
        <li>Main <strong>не се е променил</strong> откакто сте създали branch</li>
        <li>Просто премества main pointer напред</li>
        <li>Чиста, линейна история</li>
      </ul>
    )
  }}
  right={{
    title: "Three-Way Merge",
    content: (
      <ul>
        <li><strong>И двата branch-а</strong> имат нови commits</li>
        <li>Създава merge commit</li>
        <li>Запазва историята на branch-овете</li>
      </ul>
    )
  }}
/>

---

## Merge Conflicts

<WarningBox title="Кога възникват конфликти?">

Конфликти се появяват когато **едни и същи редове са редактирани** в двата branch-а.

```python
def greet(name):
<<<<<<< HEAD
    return f"Hello, {name}!"
=======
    return f"Hi there, {name}!"
>>>>>>> feature-branch
```

</WarningBox>

### Разрешаване на конфликти

1. **Отворете** файла с конфликт
2. **Изберете** коя версия да запазите (или комбинирайте двете)
3. **Премахнете** conflict маркерите (`<<<<<<<`, `=======`, `>>>>>>>`)
4. **Stage-нете** resolved файла
5. **Направете commit** за резолюцията

```bash
# След ръчно редактиране на файла
git add resolved-file.py
git commit -m "Resolve merge conflict in greet function"
```

---

## Работа с GitHub: Remote Repositories

### Създаване на Repository в GitHub

**Метод 1: GitHub Web Interface**
1. Кликнете **"+"** в горния десен ъгъл
2. Изберете **"New repository"**
3. Въведете **име на repository**
4. Изберете **Public** или **Private**
5. Кликнете **"Create repository"**

**Метод 2: GitHub CLI**
```bash
gh repo create my-repo --public --clone
```

---

### Свързване на Local към Remote

```bash
# Добавете remote repository (по конвенция се казва "origin")
git remote add origin https://github.com/USERNAME/REPO-NAME.git

# Проверете дали remote е добавен
git remote -v
```

**Резултат:**
```
origin  https://github.com/USERNAME/REPO-NAME.git (fetch)
origin  https://github.com/USERNAME/REPO-NAME.git (push)
```

---

## Push, Pull и Fetch

<Grid columns={3}>
  <Card title="git push" icon="⬆️">
    **Качва** локални commits към remote repository

    ```bash
    git push -u origin main
    git push  # след първия път
    ```
  </Card>
  <Card title="git pull" icon="⬇️">
    **Сваля И слива** remote промени в локалния branch

    ```bash
    git pull origin main
    git pull  # ако upstream е зададен
    ```
  </Card>
  <Card title="git fetch" icon="📥">
    **Сваля без сливане** - за преглед първо

    ```bash
    git fetch origin
    git log origin/main
    git merge origin/main
    ```
  </Card>
</Grid>

<SuccessBox title="Препоръчителен Дневен Workflow">

```bash
# Начало на работния ден
git pull origin main

# ... правете промени, add, commit ...

# Край на работния ден
git push origin main
```

</SuccessBox>

---

## Клониране на Съществуващи Repositories

```bash
# Клониране чрез HTTPS
git clone https://github.com/USERNAME/REPO-NAME.git

# Клониране в конкретна папка
git clone https://github.com/USERNAME/REPO-NAME.git my-folder

# Клониране чрез SSH (ако е конфигурирано)
git clone git@github.com:USERNAME/REPO-NAME.git
```

Това създава пълно локално копие с:
- Всички файлове и папки
- Пълна commit история
- Remote connection вече конфигуриран

---

## Collaboration Workflows

### Solo Developer Workflow

```bash
# Сутрин: Започнете свежо
git pull origin main

# Работете по задачи
git add changed-file.py
git commit -m "Implement feature X"

# Вечер: Качете работата си
git push origin main
```

### Team Feature Branch Workflow

```bash
# 1. Клонирайте проекта
git clone https://github.com/team/project.git
cd project

# 2. Създайте feature branch
git checkout -b feature/user-profile

# 3. Работете и commit-вайте
git add .
git commit -m "Add user profile page"

# 4. Push-нете branch-а към remote
git push -u origin feature/user-profile

# 5. Създайте Pull Request в GitHub

# 6. След одобрение, merge-нете към main
git checkout main
git pull origin main
git merge feature/user-profile

# 7. Почистете
git branch -d feature/user-profile
git push origin --delete feature/user-profile
```

---

## Advanced Topics Overview

<CollapsibleSection title="Git Stash - Временно съхранение" icon="📦">

Когато трябва да смените branch, но имате uncommitted промени:

```bash
# Запазете текущите промени временно
git stash

# Смените branch, направете нещо друго...
git checkout other-branch

# Върнете се и възстановете промените
git checkout original-branch
git stash pop
```

</CollapsibleSection>

<CollapsibleSection title="Git Reset - Отмяна на промени" icon="↩️">

```bash
# Отмени последния commit, запази промените
git reset --soft HEAD~1

# Отмени последния commit и staging
git reset --mixed HEAD~1

# ⚠️ ОПАСНО: Отмени напълно (губите промените!)
git reset --hard HEAD~1
```

</CollapsibleSection>

<CollapsibleSection title="SSH Setup за GitHub" icon="🔑">

```bash
# Генерирайте SSH key
ssh-keygen -t ed25519 -C "your.email@example.com"

# Стартирайте ssh-agent
eval "$(ssh-agent -s)"

# Добавете key към agent
ssh-add ~/.ssh/id_ed25519

# Копирайте public key (добавете го в GitHub Settings → SSH Keys)
cat ~/.ssh/id_ed25519.pub
```

</CollapsibleSection>

---

## .gitignore: Игнориране на файлове

<InfoBox title="Защо .gitignore?">

Някои файлове **не трябва да се commit-ват**:
- Credentials и API keys
- Compiled файлове
- IDE настройки
- Node modules / virtual environments

</InfoBox>

**Пример за Python проект:**

```gitignore
# Virtual environment
venv/
.env

# Python compiled files
__pycache__/
*.pyc

# IDE settings
.vscode/
.idea/

# OS files
.DS_Store
Thumbs.db

# Secrets
*.pem
credentials.json
```

---

## Обобщение: Основни Команди

<Grid columns={2}>
  <Card title="Локални операции" icon="💻">

    - `git init` - Инициализира repo
    - `git status` - Показва състоянието
    - `git add` - Stage-ва промени
    - `git commit` - Записва snapshot
    - `git log` - Показва историята
    - `git branch` - Управлява branches
    - `git checkout/switch` - Сменя branch
    - `git merge` - Слива branches

  </Card>
  <Card title="Remote операции" icon="🌐">

    - `git clone` - Копира remote repo
    - `git remote add` - Свързва с remote
    - `git push` - Качва към remote
    - `git pull` - Сваля и слива
    - `git fetch` - Сваля без сливане

  </Card>
</Grid>

---

## Допълнителни Ресурси

### Онлайн Материали
- [Git Documentation](https://git-scm.com/doc) - Официална документация
- [GitHub Docs](https://docs.github.com) - GitHub guides и tutorials
- [Learn Git Branching](https://learngitbranching.js.org/) - Интерактивен tutorial за branching

### Практика
- [GitHub Skills](https://skills.github.com/) - Hands-on курсове
- [Git Cheat Sheet PDF](https://education.github.com/git-cheat-sheet-education.pdf) - Бърза референция

### Видео Уроци
- [Git and GitHub for Beginners - Crash Course](https://www.youtube.com/watch?v=RGOj5yH7evk) - freeCodeCamp
