---
title: "Лекция"
sidebar_position: 1
slug: lecture
tags: [angular, components, signals, routing, typescript, spa, dependency-injection, standalone]
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
import {
  SignalsFlow,
  DataBinding,
  ComponentCommunication,
  ServicesDI,
  ControlFlow,
  AngularHeader
} from '@site/src/components/Diagrams';

# Въведение в Angular

<AngularHeader />

<ViewSlidesButton lectureSlug="angular-introduction" />

<QuickSummary>

**Ключови познания:**
- **Angular** е цялостен frontend framework от Google за enterprise приложения
- **Standalone компоненти** премахват нуждата от NgModules (Angular 17+)
- **Signals** са новите reactive примитиви за управление на състояние
- **Модерен control flow**: `@if`, `@for`, `@switch` заменят директивите
- **Dependency Injection** и **Routing** са вградени в framework-а

</QuickSummary>

<LearningObjectives objectives={[
  "Създаване и конфигуриране на Angular приложения с CLI",
  "Изграждане на standalone компоненти с модерен синтаксис",
  "Имплементация на data binding, signals и control flow",
  "Използване на services, DI и базов routing",
  "Прилагане на концепциите в практически примери"
]} />

---

## Въведение: Защо Angular в 2026?

<WhyBox title="Защо да учим Angular днес?">

Angular е **цялостен frontend framework**, проектиран от Google за изграждане на **мащабируеми, enterprise-grade** уеб приложения. В 2026 година Angular предлага:

- **Опинионирана структура** - ясни guidelines за големи екипи
- **Signals-first APIs** - модерна реактивност без Zone.js
- **TypeScript by default** - type safety и по-добра developer experience
- **Enterprise готовност** - използва се в банки, healthcare, government

Angular властва в enterprise проекти, където поддръжката и мащабируемостта са критични.

</WhyBox>

<InfoBox title="Какво е Angular?">

**Angular** е comprehensive frontend framework, предоставящ:

- **Компоненти** - UI building blocks
- **Routing** - SPA навигация
- **Dependency Injection** - споделяне на логика
- **Forms** - обработка на потребителски вход
- **HTTP Client** - API комуникация

Всичко е **интегрирано** - не трябва да избирате отделни библиотеки.

</InfoBox>

---

## Prerequisites и Setup

<InfoBox title="Какво трябва да знаете">

Преди да започнете с Angular, уверете се че владеете:

- **HTML** - структуриране на съдържание
- **CSS** - стилизиране
- **JavaScript** - основна интерактивност
- **TypeScript** - типове, интерфейси, декоратори

</InfoBox>

### Инсталиране на Angular CLI

```bash
# Проверете Node.js и npm
node -v    # >= 18.x
npm -v     # >= 9.x

# Инсталирайте Angular CLI глобално
npm install -g @angular/cli

# Проверете инсталацията
ng version
```

### Създаване на Ново Приложение

```bash
# Създайте standalone приложение с routing
ng new my-first-app --standalone --routing

# Влезте в директорията и стартирайте
cd my-first-app
ng serve
```

<SuccessBox title="Отворете браузъра">

След `ng serve`, приложението работи на `http://localhost:4200`. Angular CLI автоматично презарежда при промени в кода!

</SuccessBox>

### Структура на Приложението

```
my-first-app/
├── src/
│   ├── main.ts              # Entry point - bootstrap
│   ├── app/
│   │   ├── app.component.ts # Root компонент
│   │   ├── app.routes.ts    # Routing конфигурация
│   │   └── app.config.ts    # Application config
│   └── index.html           # HTML shell
├── angular.json             # Angular CLI config
└── package.json
```

---

## Standalone Компоненти

<img src={useBaseUrl('/img/diagrams/angular/standalone-vs-modules.svg')} alt="Standalone vs NgModules" style={{width: '100%', maxWidth: '750px', margin: '20px auto', display: 'block'}} />

<InfoBox title="Какво са Standalone компоненти?">

**Standalone компоненти** са модерният подход в Angular 17+. Те **премахват нуждата от NgModules** и предлагат:

- **Директен import** - импортирате зависимости директно в компонента
- **По-малък bundle** - по-добро tree-shaking
- **Лесен lazy loading** - зареждате отделни компоненти
- **По-малко boilerplate** - без `declarations`, `exports`

</InfoBox>

### Анатомия на Компонент

```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-greeting',       // HTML tag
  standalone: true,               // ← Ключово свойство!
  imports: [CommonModule],        // ← Директен import
  template: `
    <h1>Hello, {{ name }}!</h1>
    <button (click)="changeName()">Change Name</button>
  `,
  styles: [`h1 { color: #dd0031; }`]
})
export class GreetingComponent {
  name = 'Angular';

  changeName() {
    this.name = 'World';
  }
}
```

<WarningBox title="standalone: true">

Винаги добавяйте `standalone: true` в новите компоненти. Това е default в Angular 17+, но е добра практика да го указвате explicit.

</WarningBox>

---

## Signals: Реактивно Състояние

<SignalsFlow />

<InfoBox title="Какво са Signals?">

**Signals** са нови reactive примитиви в Angular, които осигуряват:

- **Fine-grained reactivity** - само засегнатите части от DOM се обновяват
- **Автоматичен tracking** - Angular знае кои сигнали се четат в template-а
- **По-добра performance** - без Zone.js overhead
- **Прост API** - `signal()`, `computed()`, `effect()`

</InfoBox>

### Writable Signals

```typescript
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  template: `
    <p>Count: {{ count() }}</p>
    <button (click)="increment()">+1</button>
    <button (click)="reset()">Reset</button>
  `
})
export class CounterComponent {
  // Създаване на writable signal
  count = signal(0);

  increment() {
    // update() - базирано на текущата стойност
    this.count.update(current => current + 1);
  }

  reset() {
    // set() - задаване на нова стойност
    this.count.set(0);
  }
}
```

### Computed Signals

```typescript
import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-price-calculator',
  standalone: true,
  template: `
    <p>Price: {{ price() }} лв.</p>
    <p>With VAT (20%): {{ priceWithVat() }} лв.</p>
    <button (click)="increasePrice()">+10 лв.</button>
  `
})
export class PriceCalculatorComponent {
  price = signal(100);

  // computed() - автоматично се преизчислява при промяна на price
  priceWithVat = computed(() => this.price() * 1.20);

  increasePrice() {
    this.price.update(p => p + 10);
  }
}
```

<SuccessBox title="Signals vs RxJS">

Signals са по-прости за повечето use cases. Използвайте RxJS за сложни асинхронни операции (HTTP заявки, WebSockets, комплексни event streams).

</SuccessBox>

---

## Data Binding

<DataBinding />

### Три Типа Binding

<Grid columns={3}>
  <Card title="[Property]" icon="➡️">
    Component → Template

    ```html
    <img [src]="imageUrl">
    <button [disabled]="!isValid">
    ```
  </Card>
  <Card title="(Event)" icon="⬅️">
    Template → Component

    ```html
    <button (click)="save()">
    <input (input)="onType($event)">
    ```
  </Card>
  <Card title="[(Two-Way)]" icon="↔️">
    Bidirectional

    ```html
    <input [(ngModel)]="name">
    <app-counter [(count)]="myCount">
    ```
  </Card>
</Grid>

### Примери за Binding

```typescript
@Component({
  selector: 'app-binding-demo',
  standalone: true,
  imports: [FormsModule],
  template: `
    <!-- Property binding -->
    <img [src]="user.avatar" [alt]="user.name">
    <button [disabled]="isLoading()">Submit</button>

    <!-- Event binding -->
    <button (click)="handleClick()">Click me</button>
    <input (keyup.enter)="onEnter()">

    <!-- Two-way binding (forms) -->
    <input [(ngModel)]="searchTerm" placeholder="Search...">
    <p>Searching for: {{ searchTerm }}</p>
  `
})
export class BindingDemoComponent {
  user = { name: 'Ivan', avatar: '/avatar.png' };
  isLoading = signal(false);
  searchTerm = '';

  handleClick() {
    console.log('Button clicked!');
  }

  onEnter() {
    console.log('Enter pressed!');
  }
}
```

---

## Modern Control Flow

<ControlFlow />

<InfoBox title="Нов синтаксис в Angular 17+">

Модерният control flow заменя старите директиви:
- `@if` / `@else` заменя `*ngIf`
- `@for` / `@empty` заменя `*ngFor`
- `@switch` / `@case` заменя `*ngSwitch`

По-чист синтаксис, по-добра performance, интеграция със signals!

</InfoBox>

### @if / @else

```html
@if (isLoggedIn()) {
  <nav>
    <a routerLink="/dashboard">Dashboard</a>
    <button (click)="logout()">Logout</button>
  </nav>
} @else if (isLoading()) {
  <p>Loading...</p>
} @else {
  <a routerLink="/login">Please login</a>
}
```

### @for / @empty

```html
@for (product of products(); track product.id) {
  <div class="product-card">
    <h3>{{ product.name }}</h3>
    <p>{{ product.price | currency }}</p>
  </div>
} @empty {
  <p>No products found.</p>
}
```

<WarningBox title="track е задължителен!">

`track` expression е **задължителен** в `@for`. Той помага на Angular да идентифицира елементите уникално и подобрява performance при промени в списъка.

```html
<!-- Правилно -->
@for (item of items(); track item.id) { ... }

<!-- Също правилно за прости списъци -->
@for (name of names(); track $index) { ... }
```

</WarningBox>

### @switch / @case

```html
@switch (orderStatus()) {
  @case ('pending') {
    <span class="badge warning">⏳ Pending</span>
  }
  @case ('shipped') {
    <span class="badge info">📦 Shipped</span>
  }
  @case ('delivered') {
    <span class="badge success">✅ Delivered</span>
  }
  @default {
    <span class="badge">Unknown</span>
  }
}
```

---

## Комуникация между Компоненти

<ComponentCommunication />

### input() - Данни от Parent към Child

```typescript
// child.component.ts
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-user-card',
  standalone: true,
  template: `
    <div class="card">
      <h3>{{ name() }}</h3>
      <p>{{ email() }}</p>
    </div>
  `
})
export class UserCardComponent {
  // Signal-based inputs
  name = input<string>('Anonymous');       // Optional с default
  email = input.required<string>();        // Задължителен input
}
```

```html
<!-- parent.component.html -->
<app-user-card
  [name]="userName()"
  [email]="userEmail()">
</app-user-card>
```

### model() - Two-Way Binding с Parent

```typescript
// counter.component.ts
import { Component, model } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  template: `
    <button (click)="count.update(c => c - 1)">-</button>
    <span>{{ count() }}</span>
    <button (click)="count.update(c => c + 1)">+</button>
  `
})
export class CounterComponent {
  // model() позволява two-way binding
  count = model<number>(0);
}
```

```html
<!-- parent.component.html -->
<p>Parent count: {{ parentCount() }}</p>
<app-counter [(count)]="parentCount"></app-counter>
```

---

## Services и Dependency Injection

<ServicesDI />

<InfoBox title="Какво са Services?">

**Services** са TypeScript класове, които:
- Капсулират бизнес логика и данни
- Споделят се между компоненти чрез **Dependency Injection**
- Обикновено са **singletons** (`providedIn: 'root'`)

</InfoBox>

### Създаване на Service

```typescript
// todo.service.ts
import { Injectable, signal, computed } from '@angular/core';

export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

@Injectable({ providedIn: 'root' })  // Singleton за цялото приложение
export class TodoService {
  private nextId = 1;

  // Private writable signal
  private _todos = signal<Todo[]>([]);

  // Public read-only signal
  todos = this._todos.asReadonly();

  // Computed signal
  completedCount = computed(() =>
    this._todos().filter(t => t.done).length
  );

  addTodo(text: string) {
    this._todos.update(todos => [
      ...todos,
      { id: this.nextId++, text, done: false }
    ]);
  }

  toggleTodo(id: number) {
    this._todos.update(todos =>
      todos.map(t => t.id === id ? { ...t, done: !t.done } : t)
    );
  }

  deleteTodo(id: number) {
    this._todos.update(todos => todos.filter(t => t.id !== id));
  }
}
```

### Използване на Service с inject()

```typescript
// todo-list.component.ts
import { Component, inject } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  template: `
    <h2>Todos ({{ todoService.completedCount() }} done)</h2>

    @for (todo of todoService.todos(); track todo.id) {
      <div [class.done]="todo.done">
        <input type="checkbox"
               [checked]="todo.done"
               (change)="todoService.toggleTodo(todo.id)">
        {{ todo.text }}
        <button (click)="todoService.deleteTodo(todo.id)">🗑️</button>
      </div>
    } @empty {
      <p>No todos yet!</p>
    }
  `
})
export class TodoListComponent {
  // Modern way - inject() function
  todoService = inject(TodoService);
}
```

---

## Routing

<img src={useBaseUrl('/img/diagrams/angular/routing-overview.svg')} alt="Routing Overview" style={{width: '100%', maxWidth: '750px', margin: '20px auto', display: 'block'}} />

<InfoBox title="SPA Routing">

Angular Router позволява **Single Page Application** навигация - страниците се сменят без презареждане на целия HTML документ. Това прави приложенията бързи и responsive.

</InfoBox>

### Конфигуриране на Routes

```typescript
// app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UserProfileComponent } from './user/user-profile.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'user/:id', component: UserProfileComponent },  // Route parameter
  { path: '**', redirectTo: '/home' }  // Wildcard - 404
];
```

### Навигация в Template

```html
<!-- app.component.html -->
<nav>
  <a routerLink="/home" routerLinkActive="active">Home</a>
  <a routerLink="/about" routerLinkActive="active">About</a>
  <a [routerLink]="['/user', userId]">My Profile</a>
</nav>

<!-- Тук се рендерира активният компонент -->
<router-outlet></router-outlet>
```

### Четене на Route Parameters

```typescript
// user-profile.component.ts
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  template: `<h1>User Profile: {{ userId }}</h1>`
})
export class UserProfileComponent implements OnInit {
  private route = inject(ActivatedRoute);
  userId: string | null = null;

  ngOnInit() {
    // Четене на route parameter
    this.userId = this.route.snapshot.paramMap.get('id');

    // Или reactive subscription
    this.route.paramMap.subscribe(params => {
      this.userId = params.get('id');
    });
  }
}
```

---

## Forms и Two-Way Binding

<InfoBox title="Template-Driven Forms">

За прости форми използвайте `[(ngModel)]` от `FormsModule`. За по-сложни форми разгледайте **Reactive Forms** с `FormGroup` и `FormControl`.

</InfoBox>

```typescript
// contact-form.component.ts
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule],  // ← Важен import!
  template: `
    <form (ngSubmit)="onSubmit()">
      <label>
        Name:
        <input type="text" [(ngModel)]="formData.name" name="name" required>
      </label>

      <label>
        Email:
        <input type="email" [(ngModel)]="formData.email" name="email" required>
      </label>

      <label>
        Message:
        <textarea [(ngModel)]="formData.message" name="message"></textarea>
      </label>

      <button type="submit">Send</button>
    </form>

    <p>Preview: {{ formData.name }} - {{ formData.email }}</p>
  `
})
export class ContactFormComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    console.log('Form submitted:', this.formData);
    // Send to API...
  }
}
```

<WarningBox title="name атрибут">

Когато използвате `[(ngModel)]` във форма, **задължително** добавете `name` атрибут на всеки input. Без него Angular не може правилно да проследява стойностите.

</WarningBox>

---

## Практически Пример: Todo App

```typescript
// Пълен пример: Simple Todo Application

// 1. Todo Model
export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

// 2. Todo Service (todo.service.ts)
@Injectable({ providedIn: 'root' })
export class TodoService {
  private nextId = 1;
  todos = signal<Todo[]>([]);

  addTodo(text: string) {
    if (!text.trim()) return;
    this.todos.update(t => [...t, { id: this.nextId++, text, done: false }]);
  }

  toggleTodo(id: number) {
    this.todos.update(t => t.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ));
  }

  deleteTodo(id: number) {
    this.todos.update(t => t.filter(todo => todo.id !== id));
  }
}

// 3. App Component (app.component.ts)
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  template: `
    <h1>📝 My Todos</h1>

    <form (ngSubmit)="addTodo()">
      <input [(ngModel)]="newTodoText" name="newTodo" placeholder="Add todo...">
      <button type="submit">Add</button>
    </form>

    @for (todo of todoService.todos(); track todo.id) {
      <div class="todo" [class.done]="todo.done">
        <input type="checkbox"
               [checked]="todo.done"
               (change)="todoService.toggleTodo(todo.id)">
        <span (click)="todoService.toggleTodo(todo.id)">{{ todo.text }}</span>
        <button (click)="todoService.deleteTodo(todo.id)">❌</button>
      </div>
    } @empty {
      <p>No todos yet. Add one above!</p>
    }

    <style>
      .done { text-decoration: line-through; opacity: 0.6; }
    </style>
  `
})
export class AppComponent {
  todoService = inject(TodoService);
  newTodoText = '';

  addTodo() {
    this.todoService.addTodo(this.newTodoText);
    this.newTodoText = '';
  }
}
```

---

## Обобщение

<Grid columns={2}>
  <Card title="Основни Концепции" icon="📚">
    - **Standalone Components** - без NgModules
    - **Signals** - reactive state management
    - **Modern Control Flow** - @if, @for, @switch
    - **Data Binding** - property, event, two-way
  </Card>
  <Card title="Архитектура" icon="🏗️">
    - **Services** - споделена логика с DI
    - **Routing** - SPA навигация
    - **input() / model()** - component communication
    - **inject()** - модерен DI syntax
  </Card>
</Grid>

---

## Best Practices

<SuccessBox title="Препоръки за Angular разработка">

1. **Използвайте standalone компоненти** - това е бъдещето на Angular
2. **Предпочитайте signals** пред class properties за reactive state
3. **Разделяйте логиката в services** - компонентите трябва да са thin
4. **Използвайте `inject()`** вместо constructor injection
5. **track е задължителен** в `@for` - не го забравяйте!
6. **Типизирайте всичко** - TypeScript е вашият приятел

</SuccessBox>

<WarningBox title="Често срещани грешки">

- Забравен `standalone: true` в нови компоненти
- Липсващ `track` expression в `@for`
- Липсващ `name` атрибут при `[(ngModel)]`
- Четене на signal без `()` в template: `{{ count }}` вместо `{{ count() }}`
- Забравен import на `FormsModule` за `ngModel`

</WarningBox>

---

## Следващи Стъпки

<InfoBox title="Какво следва?">

След като разбирате основите, можете да научите:

- **Reactive Forms** - по-мощна обработка на форми
- **HTTP Client** - API заявки
- **Lazy Loading** - оптимизация на bundle size
- **Route Guards** - защита на routes
- **RxJS** - advanced reactive patterns
- **Angular Material** - UI component library

</InfoBox>

---

## Допълнителни Ресурси

### Документация
- [Angular.dev](https://angular.dev/) - Официална документация
- [Angular Signals Guide](https://angular.dev/guide/signals) - Signals в детайли
- [Angular CLI Reference](https://angular.dev/tools/cli) - CLI команди

### Обучение
- [Angular YouTube Channel](https://www.youtube.com/angular) - Официални видеа
- [Angular University](https://angular-university.io/) - Курсове
- [Fireship Angular](https://fireship.io/courses/angular/) - Бързи tutorials

### Инструменти
- [Angular DevTools](https://angular.dev/tools/devtools) - Browser extension
- [StackBlitz](https://stackblitz.com/) - Online Angular playground
- [Angular Material](https://material.angular.io/) - UI компоненти
