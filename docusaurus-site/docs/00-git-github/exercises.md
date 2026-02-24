---
sidebar_position: 2
title: "Упражнения"
tags: [exercises, practice, git, github]
---

import ExerciseCard from '@site/src/components/Exercise/ExerciseCard';
import ProgressTracker from '@site/src/components/Exercise/ProgressTracker';
import CollapsibleSection from '@site/src/components/CollapsibleSection';
import InfoBox from '@site/src/components/InfoBoxes/InfoBox';
import WarningBox from '@site/src/components/InfoBoxes/WarningBox';
import SuccessBox from '@site/src/components/InfoBoxes/SuccessBox';

# Упражнения: Git и GitHub

<ProgressTracker />

<InfoBox title="Инструкции">

- Решете упражненията последователно - те са подредени по трудност
- Използвайте **подсказките** ако се затрудните
- Проверете решенията си след като опитате самостоятелно
- За практическите задачи ви е нужен терминал и Git инсталиран на компютъра

</InfoBox>

---

## Лесни Упражнения (EASY)

<ExerciseCard difficulty="easy">

### Задача 1: Цел на Version Control

**Multiple Choice - Version Control Concepts**

Каква е ОСНОВНАТА цел на система за контрол на версиите като Git?

A) Да прави файловете по-малки за съхранение
B) Да записва всяка промяна направена върху файлове и да създава пълна история на проекта
C) Да поправя автоматично бъгове в кода
D) Да замени нуждата от backups

<CollapsibleSection title="💡 Подсказка" icon="💡">

Помислете какво означава "version" в "version control" - системата трябва да следи различните версии на вашите файлове във времето.

</CollapsibleSection>

<CollapsibleSection title="✅ Решение" icon="✅">

**Верен отговор: B**

Git записва всяка промяна направена върху файлове и създава пълна история на проекта.

**Защо другите са грешни:**
- A) Git не компресира файлове за по-малко място
- C) Git не поправя бъгове автоматично - той само проследява промени
- D) Git е допълнение към backups, не заместител

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="easy">

### Задача 2: Git срещу GitHub

**Short Answer - Git vs GitHub**

В по едно изречение обяснете разликата между Git и GitHub. Използвайте аналогията от лекцията ако ви помага.

<CollapsibleSection title="💡 Подсказка" icon="💡">

Помислете за Git като инструмент, а за GitHub като място/услуга. Един работи локално, другият е в облака.

</CollapsibleSection>

<CollapsibleSection title="✅ Решение" icon="✅">

**Примерен отговор:**

**Git** е command-line инструмент за контрол на версиите, който работи локално на вашия компютър.

**GitHub** е уеб платформа, която хоства Git repositories в облака и предоставя инструменти за сътрудничество.

**Аналогия:** Git е двигателят, GitHub е гаражът където паркирате и споделяте превозното си средство.

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="easy">

### Задача 3: Трите етапа на Git

**Ordering - Git's Three Stages**

Подредете следните Git етапи в правилния ред от първи до последен:
- Repository (Commits)
- Staging Area
- Working Directory

Кои команди преместват файлове между тези етапи?

<CollapsibleSection title="💡 Подсказка" icon="💡">

Започнете от там където създавате и редактирате файлове. Помислете за процеса като "подготовка преди запис".

</CollapsibleSection>

<CollapsibleSection title="✅ Решение" icon="✅">

**Правилен ред:**
1. **Working Directory** (вашите файлове)
2. **Staging Area** (готови за commit)
3. **Repository** (постоянна история)

**Команди:**
- `git add` - премества от Working Directory към Staging Area
- `git commit` - премества от Staging Area към Repository

```
Working Directory --[git add]--> Staging Area --[git commit]--> Repository
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="easy">

### Задача 4: Навигация в терминала

**Practical Exercise - Terminal Navigation**

Отворете терминала и изпълнете следната последователност от команди. Запишете изхода от последната `pwd` команда:

```bash
mkdir git-exercise-test
cd git-exercise-test
mkdir subfolder
cd subfolder
pwd
```

<CollapsibleSection title="💡 Подсказка" icon="💡">

- `mkdir` създава нова директория
- `cd` влиза в директория
- `pwd` показва пълния път до текущата директория

</CollapsibleSection>

<CollapsibleSection title="✅ Решение" icon="✅">

**Очакван изход:**
```
/Users/your-username/git-exercise-test/subfolder
```

(Пътят ще варира в зависимост от вашата система и началната директория)

**Обяснение:**
1. `mkdir git-exercise-test` - създава папка
2. `cd git-exercise-test` - влиза в нея
3. `mkdir subfolder` - създава подпапка
4. `cd subfolder` - влиза в подпапката
5. `pwd` - показва пълния път

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="easy">

### Задача 5: Команди за конфигурация

**Fill in the Blank - Configuration Commands**

Попълнете следните Git команди за конфигурация:

1. За да зададете вашето име: `git config --global __________ "Your Name"`
2. За да зададете вашия email: `git config --global __________ "email@example.com"`
3. За да проверите настройките си: `git config __________`

<CollapsibleSection title="💡 Подсказка" icon="💡">

Настройките се наричат `user.name` и `user.email`. За преглед на всички настройки има специална опция.

</CollapsibleSection>

<CollapsibleSection title="✅ Решение" icon="✅">

1. `git config --global user.name "Your Name"`
2. `git config --global user.email "email@example.com"`
3. `git config --list`

**Допълнително:** Можете да проверите конкретна настройка с:
```bash
git config user.name
git config user.email
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="easy">

### Задача 6: Добри Commit съобщения

**Multiple Choice - Commit Messages**

Кои от следните са ДОБРИ commit съобщения според best practices? (Изберете всички верни)

A) `Add user authentication module`
B) `Fixed stuff`
C) `Fix null pointer exception in login`
D) `asdfasdf`
E) `Update README with installation steps`
F) `WIP`

<CollapsibleSection title="💡 Подсказка" icon="💡">

Добрите commit съобщения трябва да:
- Описват какво прави промяната
- Са написани в imperative mood (Add, Fix, Update)
- Са кратки но информативни

</CollapsibleSection>

<CollapsibleSection title="✅ Решение" icon="✅">

**Верни отговори: A, C, E**

- ✅ A) `Add user authentication module` - ясно описва какво е добавено
- ❌ B) `Fixed stuff` - твърде неясно, какво е "stuff"?
- ✅ C) `Fix null pointer exception in login` - специфично описва бъга
- ❌ D) `asdfasdf` - безсмислено
- ✅ E) `Update README with installation steps` - ясно описва промяната
- ❌ F) `WIP` - Work In Progress не обяснява нищо

**Добра практика:** Започвайте с глагол (Add, Fix, Update, Remove, Refactor)

</CollapsibleSection>

</ExerciseCard>

---

## Средни Упражнения (MEDIUM)

<ExerciseCard difficulty="medium">

### Задача 7: Инициализация и първи Commit

**Practical Exercise - Initialize and First Commit**

Изпълнете следните задачи и запишете изхода от `git log --oneline` накрая:

1. Създайте нова директория наречена `my-git-practice`
2. Влезте в нея
3. Инициализирайте Git repository
4. Създайте файл `hello.txt` със съдържание "Hello, Git!"
5. Проверете статуса на repository-то
6. Stage-нете файла
7. Направете commit със съобщение "Add hello.txt file"
8. Вижте commit историята

Запишете всички команди които използвате.

<CollapsibleSection title="💡 Подсказка" icon="💡">

Последователността е:
1. `mkdir` за създаване на директория
2. `cd` за влизане
3. `git init` за инициализация
4. `echo "текст" > файл` за създаване на файл
5. `git status` за проверка
6. `git add` за staging
7. `git commit -m` за commit

</CollapsibleSection>

<CollapsibleSection title="✅ Решение" icon="✅">

```bash
# 1-2. Създаване и влизане в директория
mkdir my-git-practice
cd my-git-practice

# 3. Инициализация на Git
git init

# 4. Създаване на файл
echo "Hello, Git!" > hello.txt

# 5. Проверка на статуса
git status

# 6. Staging на файла
git add hello.txt

# 7. Commit
git commit -m "Add hello.txt file"

# 8. Преглед на историята
git log --oneline
```

**Очакван изход от `git log --oneline`:**
```
a1b2c3d Add hello.txt file
```
(Hash-ът ще е различен)

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium">

### Задача 8: Цел на Staging Area

**Short Answer - Staging Area Purpose**

Обяснете защо Git има staging area вместо да commit-ва всички промени директно. Дайте практически сценарий където staging area е полезна.

<CollapsibleSection title="💡 Подсказка" icon="💡">

Помислете за ситуация където сте променили много файлове, но искате да запазите промените в няколко отделни, логически групирани commit-а.

</CollapsibleSection>

<CollapsibleSection title="✅ Решение" icon="✅">

**Защо съществува Staging Area:**

Staging area позволява **прецизен контрол** върху това кои промени влизат в commit-а. Можете да изберете само релевантните промени за един логически commit.

**Практически сценарий:**

Работите по feature и сте променили:
- `login.py` - нова функционалност за login
- `styles.css` - styling промени
- `debug.py` - временен debug код

Със staging area можете:
```bash
# Commit само login промените
git add login.py
git commit -m "Add new login functionality"

# Commit styling отделно
git add styles.css
git commit -m "Update login page styles"

# НЕ commit-вате debug.py изобщо
```

Без staging area всичко щеше да влезе в един commit.

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium">

### Задача 9: Push, Pull и Fetch

**Matching Exercise - Push/Pull/Fetch**

Свържете всяка команда с правилното описание и кога да я използвате:

| Команда | Описание | Кога да използвате |
|---------|----------|-------------------|
| `git push` | A. Сваля без сливане | 1. След като commit-нете локално |
| `git pull` | B. Качва локални commits към remote | 2. Преди да започнете работа |
| `git fetch` | C. Сваля + слива remote промени | 3. Когато искате да прегледате първо |

<CollapsibleSection title="💡 Подсказка" icon="💡">

- Push = "бутам" нагоре към сървъра
- Pull = "дърпам" надолу от сървъра (и сливам)
- Fetch = "взимам" информация за преглед

</CollapsibleSection>

<CollapsibleSection title="✅ Решение" icon="✅">

| Команда | Описание | Кога да използвате |
|---------|----------|-------------------|
| `git push` | **B** - Качва локални commits | **1** - След като commit-нете локално |
| `git pull` | **C** - Сваля + слива | **2** - Преди да започнете работа |
| `git fetch` | **A** - Сваля без сливане | **3** - Когато искате да прегледате |

**Запомнете:**
- `push` ↑ качва вашата работа
- `pull` ↓ сваля работата на други и я слива автоматично
- `fetch` ↓ сваля информация но не променя вашите файлове

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium">

### Задача 10: Основи на Branching

**Practical Exercise - Branching Basics**

Започвайки от съществуващо repository с поне един commit, изпълнете:

1. Създайте нов branch наречен `feature-test`
2. Преминете към този branch
3. Създайте файл `feature.py` със съдържание `print("New feature")`
4. Stage-нете и commit-нете със съобщение "Add new feature"
5. Покажете всички branches за да потвърдите че новият съществува
6. Преминете обратно към `main` branch

Запишете всички команди. Какво забелязвате за файла `feature.py` когато сте на `main` branch?

<CollapsibleSection title="💡 Подсказка" icon="💡">

- `git checkout -b name` създава И превключва към нов branch
- `git branch` показва всички локални branches
- Файловете които създадете в един branch не се виждат в друг

</CollapsibleSection>

<CollapsibleSection title="✅ Решение" icon="✅">

```bash
# 1-2. Създаване и преминаване към нов branch
git checkout -b feature-test

# 3. Създаване на файл
echo 'print("New feature")' > feature.py

# 4. Stage и commit
git add feature.py
git commit -m "Add new feature"

# 5. Показване на всички branches
git branch

# 6. Преминаване обратно към main
git checkout main
```

**Какво забелязваме:**

Когато сте на `main` branch, файлът `feature.py` **не съществува**!

Това е защото промените са само в `feature-test` branch. Всеки branch има своя собствена версия на файловете. Файлът ще се появи в main едва след `git merge feature-test`.

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium">

### Задача 11: Remote Repositories

**Short Answer - Remote Repositories**

Какво означава терминът "origin" в Git? Каква команда бихте използвали за да:
1. Добавите remote repository наречено "origin"?
2. Проверите дали remote е добавено правилно?

<CollapsibleSection title="💡 Подсказка" icon="💡">

"Origin" е просто конвенционално име - можете да използвате всяко име. Командата `git remote` управлява remote connections.

</CollapsibleSection>

<CollapsibleSection title="✅ Решение" icon="✅">

**Какво е "origin":**

"Origin" е **конвенционално име** за основното remote repository от което сте клонирали или към което push-вате. Не е специална дума - просто стандарт.

**Команди:**

1. Добавяне на remote:
```bash
git remote add origin https://github.com/USERNAME/REPO-NAME.git
```

2. Проверка:
```bash
git remote -v
```

**Изход:**
```
origin  https://github.com/USERNAME/REPO-NAME.git (fetch)
origin  https://github.com/USERNAME/REPO-NAME.git (push)
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium">

### Задача 12: Интерпретация на Branch диаграма

**Diagram Interpretation**

Дадена е следната branch диаграма:

```
        feature-A
            ┌───●───●
           /
main ●───●───●───●
              \
               └───●
           feature-B
```

Отговорете на следните въпроси:
1. Колко общо commits съществуват във всички branches?
2. Ако сте на `main` и изпълните `git merge feature-A`, какъв тип merge би настъпил (fast-forward или three-way)?
3. Кой branch е diverged от `main`?

<CollapsibleSection title="💡 Подсказка" icon="💡">

- Всяка точка (●) е един commit
- Fast-forward merge е възможен когато main не е напреднал след създаването на branch
- Diverged означава че и двата branch-а имат уникални commits

</CollapsibleSection>

<CollapsibleSection title="✅ Решение" icon="✅">

**1. Общо commits:**

- main: 4 commits (●───●───●───●)
- feature-A: 2 допълнителни commits
- feature-B: 1 допълнителен commit

**Общо уникални commits: 7**

(Първите 2 commits на main са споделени с feature-A, третият с feature-B)

**2. Тип merge за feature-A:**

**Three-way merge** - защото main има нови commits (3-ти и 4-ти) след точката на разклонение на feature-A. Не може да е fast-forward.

**3. Кой branch е diverged:**

**И двата** са diverged от main:
- feature-A се е отделил от 2-рия commit на main
- feature-B се е отделил от 3-тия commit на main

Но feature-A е най-силно diverged защото main има повече commits след разклонението.

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium">

### Задача 13: Пълен Local-to-Remote Workflow

**Practical Exercise - Complete Local-to-Remote Workflow**

Изпълнете този пълен workflow (нужен ви е GitHub акаунт):

1. Създайте ново локално repository
2. Добавете README.md файл с заглавие на проекта
3. Направете първия си commit
4. Създайте ново празно repository в GitHub
5. Свържете локалното repo с GitHub
6. Push-нете кода си
7. Проверете в GitHub че файловете се появяват

Документирайте всяка команда която използвате.

<CollapsibleSection title="💡 Подсказка" icon="💡">

Последователност:
1. `mkdir` + `cd` + `git init`
2. Създайте README.md
3. `git add` + `git commit`
4. В GitHub: New repository (без README!)
5. `git remote add origin URL`
6. `git push -u origin main`

</CollapsibleSection>

<CollapsibleSection title="✅ Решение" icon="✅">

```bash
# 1. Създаване на локално repository
mkdir my-project
cd my-project
git init

# 2. Създаване на README.md
echo "# My Awesome Project" > README.md

# 3. Първи commit
git add README.md
git commit -m "Initial commit with README"

# 4. В GitHub: Create new repository (оставете празно, без README)

# 5. Свързване с GitHub
git remote add origin https://github.com/YOUR-USERNAME/my-project.git

# 6. Push към GitHub
git push -u origin main

# 7. Отворете GitHub и refresh-нете страницата
```

**Важно:** Когато създавате repository в GitHub, **не** добавяйте README автоматично ако вече имате локален README - ще създаде конфликт.

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium">

### Задача 14: Анализ на Git Status

**Code Analysis - Status Interpretation**

След изпълнение на `git status`, виждате следния изход:

```
On branch main
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   app.py

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
        modified:   config.txt

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        temp.log
```

Отговорете на следните въпроси:
1. Кой файл/файлове ще бъдат включени в следващия commit ако изпълните `git commit -m "message"` сега?
2. Каква команда би stage-нала `config.txt`?
3. Каква е разликата между `config.txt` и `temp.log` от гледна точка на Git tracking?

<CollapsibleSection title="💡 Подсказка" icon="💡">

- "Changes to be committed" = staged файлове
- "Changes not staged" = tracked файлове с промени, но не staged
- "Untracked files" = файлове които Git не проследява

</CollapsibleSection>

<CollapsibleSection title="✅ Решение" icon="✅">

**1. Кой файл ще влезе в commit:**

Само **`app.py`** ще бъде включен в commit-а, защото е единственият файл в секцията "Changes to be committed".

**2. Команда за staging на config.txt:**

```bash
git add config.txt
```

**3. Разлика между config.txt и temp.log:**

- **`config.txt`** е **tracked** файл - Git вече го познава от предишен commit. Той е "modified" - променен след последния commit, но промените не са staged.

- **`temp.log`** е **untracked** - Git никога не е проследявал този файл. Той е напълно нов за repository-то.

**Ключова разлика:** `git add -u` ще stage-не config.txt но НЕ temp.log (защото -u работи само с tracked файлове).

</CollapsibleSection>

</ExerciseCard>

---

## Трудни Упражнения (HARD)

<ExerciseCard difficulty="hard">

### Задача 15: Разрешаване на Merge Conflict

**Practical Exercise - Merge Conflict Resolution**

Създайте и разрешете merge conflict следвайки тези стъпки:

1. Създайте ново repository и направете начален commit с файл `greeting.py`:
   ```python
   def greet():
       return "Hello"
   ```

2. Създайте branch `feature-formal` и променете функцията да връща `"Good morning"`

3. Върнете се на `main` и променете същата функция да връща `"Hey there"`

4. Опитайте да merge-нете `feature-formal` в `main`

5. Разрешете конфликта като комбинирате двата поздрава: `"Good morning! Hey there!"`

6. Завършете merge-а

Документирайте всички команди и покажете крайното съдържание на `greeting.py`.

<CollapsibleSection title="💡 Подсказка" icon="💡">

Конфликтът ще изглежда така:
```python
<<<<<<< HEAD
    return "Hey there"
=======
    return "Good morning"
>>>>>>> feature-formal
```

Трябва ръчно да редактирате файла, да премахнете маркерите, и да оставите желания код.

</CollapsibleSection>

<CollapsibleSection title="✅ Решение" icon="✅">

```bash
# 1. Създаване на repository и начален commit
mkdir conflict-practice
cd conflict-practice
git init
echo 'def greet():
    return "Hello"' > greeting.py
git add greeting.py
git commit -m "Add initial greeting function"

# 2. Създаване на feature branch и промяна
git checkout -b feature-formal
echo 'def greet():
    return "Good morning"' > greeting.py
git add greeting.py
git commit -m "Change greeting to formal"

# 3. Връщане на main и различна промяна
git checkout main
echo 'def greet():
    return "Hey there"' > greeting.py
git add greeting.py
git commit -m "Change greeting to casual"

# 4. Опит за merge (ще има конфликт!)
git merge feature-formal
# CONFLICT: Merge conflict in greeting.py
```

**5. Разрешаване на конфликта:**

Отворете `greeting.py` в редактор. Ще видите:
```python
def greet():
<<<<<<< HEAD
    return "Hey there"
=======
    return "Good morning"
>>>>>>> feature-formal
```

Редактирайте да стане:
```python
def greet():
    return "Good morning! Hey there!"
```

**6. Завършване на merge:**
```bash
git add greeting.py
git commit -m "Resolve merge conflict: combine greetings"
```

**Краен резултат в greeting.py:**
```python
def greet():
    return "Good morning! Hey there!"
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="hard">

### Задача 16: Push Rejection Problem

**Scenario-Based Problem Solving**

Работите по екипен проект и срещате следната ситуация:

- Направили сте няколко commits на вашия локален `main` branch
- Колегата ви е push-нал промени към remote `main` branch
- Когато се опитате да push-нете, Git отказва с: "Updates were rejected because the remote contains work that you do not have locally"

Обяснете:
1. Защо възникна тази грешка?
2. Каква е правилната последователност от команди за разрешаване?
3. Какво може да се случи по време на разрешаването и как бихте го handle-нали?

<CollapsibleSection title="💡 Подсказка" icon="💡">

Git не позволява push който би "презаписал" commit-и на колегата. Трябва първо да получите техните промени и да ги интегрирате с вашите.

</CollapsibleSection>

<CollapsibleSection title="✅ Решение" icon="✅">

**1. Защо възникна грешката:**

Remote repository съдържа commits които вашето локално repository няма. Git отказва push-а за да предотврати загуба на работата на колегата ви. Вашата история и remote историята са се "разделили" (diverged).

**2. Правилна последователност:**

```bash
# Вариант A: Pull (fetch + merge)
git pull origin main
# Разрешете евентуални конфликти...
git push origin main

# Вариант B: Fetch първо за преглед
git fetch origin
git log origin/main  # вижте какво е новото
git merge origin/main
# Разрешете евентуални конфликти...
git push origin main
```

**3. Какво може да се случи:**

**Сценарий A - Няма конфликти:**
Git автоматично merge-ва промените и можете да push-нете.

**Сценарий B - Има конфликти:**
Ако вие и колегата ви сте редактирали едни и същи редове:
```bash
# Git ще покаже конфликтни файлове
git status

# Редактирайте файловете, разрешете конфликтите
# Премахнете <<<<<<, ======, >>>>>> маркерите

# Stage-нете resolved файловете
git add conflicted-file.py

# Commit-нете merge-а
git commit -m "Merge remote changes, resolve conflicts"

# Сега push ще работи
git push origin main
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="hard">

### Задача 17: Пълен Feature Branch Workflow

**Practical Exercise - Complete Feature Branch Workflow**

Симулирайте професионален workflow:

1. Клонирайте съществуващо repository (можете да използвате публично repo или да създадете свое)
2. Създайте feature branch с име `feature/user-profile`
3. Направете поне 2 commits на този branch със смислени промени
4. Push-нете feature branch-а към remote
5. Преминете на main, направете малка промяна и commit-нете
6. Merge-нете feature branch-а в main
7. Push-нете обновения main към remote
8. Изтрийте локалния и remote feature branch

Запишете всички команди и обяснете защо всяка стъпка е важна в екипна среда.

<CollapsibleSection title="💡 Подсказка" icon="💡">

За изтриване на remote branch: `git push origin --delete branch-name`
За изтриване на локален branch: `git branch -d branch-name`

</CollapsibleSection>

<CollapsibleSection title="✅ Решение" icon="✅">

```bash
# 1. Клониране на repository
git clone https://github.com/username/project.git
cd project

# 2. Създаване на feature branch
git checkout -b feature/user-profile
# ВАЖНО: Изолира работата ви от main

# 3. Правене на промени и commits
echo "# User Profile Feature" > profile.md
git add profile.md
git commit -m "Add user profile documentation"

echo "def get_profile(): pass" > profile.py
git add profile.py
git commit -m "Add profile module skeleton"
# ВАЖНО: Чести commits = по-добра история

# 4. Push на feature branch
git push -u origin feature/user-profile
# ВАЖНО: Backup + видимост за екипа + готовност за PR

# 5. Промяна на main (симулира работа на колега)
git checkout main
echo "# Updated" >> README.md
git add README.md
git commit -m "Update README"

# 6. Merge на feature в main
git merge feature/user-profile
# ВАЖНО: Интегрира feature-а в основния код

# 7. Push на обновения main
git push origin main
# ВАЖНО: Споделя интеграцията с екипа

# 8. Почистване - изтриване на branches
git branch -d feature/user-profile        # локален
git push origin --delete feature/user-profile  # remote
# ВАЖНО: Поддържа чисто repository
```

**Защо всяка стъпка е важна:**

| Стъпка | Значение в екип |
|--------|----------------|
| Feature branch | Изолация на работата, няма риск за main |
| Push на branch | Backup, code review възможност |
| Малки commits | По-лесен review, по-добра история |
| Merge в main | Контролирана интеграция |
| Изтриване | Чисто repo, избягване на объркване |

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="hard">

### Задача 18: Troubleshooting сценарии

**Troubleshooting Exercise**

За всеки проблемен сценарий, идентифицирайте проблема и предоставете решение:

**Сценарий A:** Случайно сте commit-нали чувствителни данни (като парола) в последния си commit който все още не е push-нат. Как да отмените това?

**Сценарий B:** Намирате се на грешен branch и сте направили промени по файлове, но все още не сте commit-нали. Как да преместите тези промени на правилния branch?

**Сценарий C:** Вашият `git log` показва commits от колегата ви, но не виждате неговите нови файлове в работната си директория. Каква команда вероятно сте използвали и какво трябва да направите след това?

<CollapsibleSection title="💡 Подсказка" icon="💡">

- A: `git reset` може да отмени commits
- B: `git stash` може временно да съхрани промени
- C: Разликата е между `fetch` и `pull`

</CollapsibleSection>

<CollapsibleSection title="✅ Решение" icon="✅">

**Сценарий A - Чувствителни данни в commit:**

```bash
# Отменете последния commit, запазвайки промените
git reset --soft HEAD~1

# Редактирайте файла, премахнете паролата
# Добавете файла в .gitignore ако е нужно

# Stage-нете отново (без чувствителния файл)
git add .
git commit -m "Add feature (without sensitive data)"
```

**Алтернатива ако искате да изтриете и промените:**
```bash
git reset --hard HEAD~1  # ⚠️ ИЗТРИВА промените!
```

---

**Сценарий B - Промени на грешен branch:**

```bash
# Запазете промените временно
git stash

# Преминете на правилния branch
git checkout correct-branch

# Възстановете промените
git stash pop

# Сега можете да commit-нете на правилния branch
git add .
git commit -m "Add feature on correct branch"
```

---

**Сценарий C - Виждам commits но не файлове:**

**Проблем:** Вероятно сте използвали `git fetch` вместо `git pull`.

`git fetch` сваля информацията за commits, но **не променя** вашите локални файлове.

**Решение:**
```bash
# Вариант 1: Merge remote промените
git merge origin/main

# Вариант 2: Или просто pull (fetch + merge)
git pull origin main
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="hard">

### Задача 19: Проектна Структура от Нулата

**Application Exercise - Project Setup**

Започвате нов екипен проект. Проектирайте и имплементирайте пълен Git/GitHub setup:

1. Създайте repository с правилна структура:
   ```
   project-name/
   ├── src/
   ├── tests/
   ├── docs/
   ├── README.md
   └── .gitignore
   ```

2. Напишете подходящ README.md с:
   - Заглавие и описание на проекта
   - Инструкции за инсталация
   - Основна употреба

3. Създайте `.gitignore` файл подходящ за Python проект

4. Направете смислени commits за всеки компонент

5. Push-нете към GitHub и споделете URL-а на repository-то

Документирайте целия процес с команди и обяснения.

<CollapsibleSection title="💡 Подсказка" icon="💡">

Структура на добър .gitignore за Python:
- `__pycache__/`
- `*.pyc`
- `venv/`
- `.env`
- `.idea/` или `.vscode/`

</CollapsibleSection>

<CollapsibleSection title="✅ Решение" icon="✅">

```bash
# Създаване на основна структура
mkdir my-awesome-project
cd my-awesome-project
git init

# Създаване на директории
mkdir src tests docs

# Създаване на placeholder файлове
touch src/.gitkeep tests/.gitkeep docs/.gitkeep
```

**README.md:**
```markdown
# My Awesome Project

A brief description of what this project does.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/username/my-awesome-project.git
   cd my-awesome-project
   ```

2. Create virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

## Usage

```python
from src.main import run
run()
```

## License

MIT
```

**.gitignore:**
```gitignore
# Python
__pycache__/
*.py[cod]
*$py.class
*.so
.Python
venv/
ENV/

# Environment
.env
.env.local

# IDE
.idea/
.vscode/
*.swp
*.swo

# OS
.DS_Store
Thumbs.db

# Testing
.pytest_cache/
.coverage
htmlcov/

# Distribution
dist/
build/
*.egg-info/
```

**Commits:**
```bash
# Commit 1: Structure
git add src/.gitkeep tests/.gitkeep docs/.gitkeep
git commit -m "Add project directory structure"

# Commit 2: Documentation
git add README.md
git commit -m "Add README with installation instructions"

# Commit 3: Git configuration
git add .gitignore
git commit -m "Add .gitignore for Python project"

# Push to GitHub
git remote add origin https://github.com/username/my-awesome-project.git
git push -u origin main
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="hard">

### Задача 20: Анализ на Workflow

**Comprehensive Workflow Analysis**

Анализирайте следната последователност от команди и отговорете на въпросите:

```bash
git clone https://github.com/team/project.git
cd project
git checkout -b feature/analytics
# ... editing files ...
git add .
git commit -m "Add analytics dashboard"
git push -u origin feature/analytics
git checkout main
git pull origin main
git merge feature/analytics
git push origin main
git branch -d feature/analytics
git push origin --delete feature/analytics
```

**Въпроси:**
1. Каква е целта на всяка команда в контекста на екипно сътрудничество?
2. Защо разработчикът прави pull от main преди merge?
3. Какво правят двете команди накрая и защо са нужни и двете?
4. Ако възникне конфликт по време на merge, на кой ред ще спре процесът? Какви допълнителни команди ще са нужни?
5. Предложете едно подобрение на този workflow което е често срещано в професионални среди.

<CollapsibleSection title="💡 Подсказка" icon="💡">

- Помислете за Pull Requests като допълнителна стъпка
- Конфликтите се случват при `merge` командата
- Branch-ове съществуват и локално и remote

</CollapsibleSection>

<CollapsibleSection title="✅ Решение" icon="✅">

**1. Цел на всяка команда:**

| Команда | Цел |
|---------|-----|
| `git clone` | Получава копие на проекта |
| `cd project` | Влиза в директорията |
| `git checkout -b feature/analytics` | Създава изолиран branch за feature |
| `git add .` | Stage-ва всички промени |
| `git commit -m "..."` | Записва snapshot с описание |
| `git push -u origin feature/analytics` | Качва branch-а за backup и review |
| `git checkout main` | Преминава към основния branch |
| `git pull origin main` | Взема последните промени от екипа |
| `git merge feature/analytics` | Интегрира feature-а в main |
| `git push origin main` | Споделя интеграцията с екипа |
| `git branch -d feature/analytics` | Изтрива локалния branch |
| `git push origin --delete feature/analytics` | Изтрива remote branch-а |

**2. Защо pull преди merge:**

За да се увери че има **най-новата версия** на main преди merge. Ако колеги са push-нали промени, без pull:
- Merge-ът може да е с остаряла версия на main
- Push след това може да е отказан
- Или по-лошо - може да презапише работата на колеги

**3. Двете команди накрая:**

- `git branch -d feature/analytics` - изтрива **локалния** branch
- `git push origin --delete feature/analytics` - изтрива **remote** branch-а

**Защо и двете:** Branch-ове съществуват независимо локално и на сървъра. Изтриването на единия не засяга другия.

**4. При конфликт:**

Процесът ще спре на ред:
```bash
git merge feature/analytics  # ← ТУК
```

**Допълнителни команди:**
```bash
# 1. Проверете кои файлове имат конфликт
git status

# 2. Редактирайте файловете, разрешете конфликтите

# 3. Stage-нете resolved файловете
git add resolved-file.js

# 4. Завършете merge-а
git commit -m "Merge feature/analytics, resolve conflicts"

# 5. Продължете с push
git push origin main
```

**5. Подобрение - Pull Request:**

Вместо директен merge в main:
```bash
# След push на feature branch
git push -u origin feature/analytics

# Създайте Pull Request в GitHub
# Екипът прави code review
# CI/CD тестове се изпълняват автоматично
# След одобрение - merge през GitHub UI
```

**Предимства на PR:**
- Code review преди интеграция
- Автоматични тестове
- Дискусия и документация
- Защита на main branch

</CollapsibleSection>

</ExerciseCard>

---

<SuccessBox title="Поздравления!">

Завършихте всички 20 упражнения по Git и GitHub! Вече имате солидна основа за работа с version control системи и екипна колаборация.

**Следващи стъпки:**
- Практикувайте ежедневно с реални проекти
- Допринасяйте към open source проекти
- Изследвайте advanced теми като rebase и cherry-pick

</SuccessBox>
