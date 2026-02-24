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

<!-- .element: class="fragment" data-fragment-index="1" -->
📜 **История** - Виждате всяка промяна

<!-- .element: class="fragment" data-fragment-index="2" -->
↩️ **Rollback** - Връщате се към работещи версии

<!-- .element: class="fragment" data-fragment-index="3" -->
👥 **Паралелна работа** - Екипът работи едновременно

<!-- .element: class="fragment" data-fragment-index="4" -->
🔌 **Offline** - Пълна функционалност без интернет

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

```
┌─────────────┐   ┌─────────────┐   ┌─────────────┐
│   WORKING   │──▶│   STAGING   │──▶│ REPOSITORY  │
│  DIRECTORY  │   │    AREA     │   │  (Commits)  │
└─────────────┘   └─────────────┘   └─────────────┘
       │                │                  │
       │   git add      │   git commit     │
       └────────────────┴──────────────────┘
```

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

```
        feature-branch
            ┌───●───●
           /         \
main ●───●───●───●───●───●
              \     /
               └───●
           bugfix-branch
```

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

<!-- .element: class="fragment" -->
✅ Commit-вайте често, с ясни съобщения

<!-- .element: class="fragment" -->
✅ Pull преди да започнете работа

<!-- .element: class="fragment" -->
✅ Използвайте feature branches

<!-- .element: class="fragment" -->
✅ Никога не commit-вайте secrets

<!-- .element: class="fragment" -->
✅ Code review чрез Pull Requests

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
