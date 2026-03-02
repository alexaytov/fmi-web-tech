---
title: Въведение в Angular
theme: white
highlightTheme: github
transition: slide
---

# Въведение в Angular

### Цялостен Frontend Framework

🅰️ Angular 17+ • Standalone • Signals

---

## Какво е Angular?

**Цялостен frontend framework** от Google

📦 **Components** - UI building blocks <!-- .element: class="fragment" -->

🔀 **Routing** - SPA навигация <!-- .element: class="fragment" -->

💉 **Dependency Injection** - споделена логика <!-- .element: class="fragment" -->

📝 **Forms** - user input handling <!-- .element: class="fragment" -->

🌐 **HTTP Client** - API комуникация <!-- .element: class="fragment" -->

---

## Защо Angular?

🏢 **Enterprise Ready** - банки, healthcare, government <!-- .element: class="fragment" -->

📐 **Опинионирана структура** - ясни guidelines <!-- .element: class="fragment" -->

📘 **TypeScript by default** - type safety <!-- .element: class="fragment" -->

⚡ **Signals-first APIs** - модерна реактивност <!-- .element: class="fragment" -->

---

## Prerequisites

Преди да започнете:

- **HTML** - структуриране
- **CSS** - стилизиране
- **JavaScript** - интерактивност
- **TypeScript** - типове, интерфейси

---

## Setup

```bash
# Проверете Node.js и npm
node -v    # >= 18.x
npm -v     # >= 9.x

# Инсталирайте Angular CLI
npm install -g @angular/cli

# Създайте приложение
ng new my-app --standalone --routing

# Стартирайте
cd my-app && ng serve
```

📍 Отворете http://localhost:4200

---

## Структура на Приложение

```
my-app/
├── src/
│   ├── main.ts              # Entry point
│   ├── app/
│   │   ├── app.component.ts # Root компонент
│   │   ├── app.routes.ts    # Routing
│   │   └── app.config.ts    # Config
│   └── index.html           # HTML shell
├── angular.json             # CLI config
└── package.json
```

---

<!-- .slide: data-background="#dd0031" -->

# Standalone Компоненти

### Модерният начин в Angular 17+

---

## Старият начин: NgModules

```typescript
// ❌ Стар подход с NgModule
@NgModule({
  declarations: [AppComponent, UserComponent],
  imports: [CommonModule, FormsModule],
  exports: [UserComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

⚠️ Много boilerplate!

---

## Новият начин: Standalone

```typescript
// ✅ Нов подход - standalone
@Component({
  selector: 'app-greeting',
  standalone: true,              // ← Ключово!
  imports: [CommonModule],       // ← Директен import
  template: `
    <h1>Hello, {{ name }}!</h1>
    <button (click)="changeName()">Change</button>
  `
})
export class GreetingComponent {
  name = 'Angular';
  changeName() { this.name = 'World'; }
}
```

---

## Предимства на Standalone

✅ **Директен import** - без declarations/exports <!-- .element: class="fragment" -->

✅ **По-малък bundle** - по-добро tree-shaking <!-- .element: class="fragment" -->

✅ **Лесен lazy loading** - по компонент <!-- .element: class="fragment" -->

✅ **По-малко boilerplate** <!-- .element: class="fragment" -->

---

<!-- .slide: data-background="#9b59b6" -->

# Signals

### Реактивно състояние в Angular

---

## Какво са Signals?

**Нови reactive примитиви** в Angular

🎯 **Fine-grained reactivity** <!-- .element: class="fragment" -->

📊 **Автоматичен tracking** <!-- .element: class="fragment" -->

⚡ **По-добра performance** <!-- .element: class="fragment" -->

🔧 **Прост API** - signal(), computed(), effect() <!-- .element: class="fragment" -->

---

## Writable Signals

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
  count = signal(0);  // ← Writable signal

  increment() {
    this.count.update(c => c + 1);  // ← update()
  }

  reset() {
    this.count.set(0);  // ← set()
  }
}
```

---

## Signal Methods

| Метод | Употреба |
|-------|----------|
| `signal(value)` | Създава writable signal |
| `.set(value)` | Задава нова стойност |
| `.update(fn)` | Обновява базирано на текуща |
| `count()` | Чете стойността (в template) |

---

## Computed Signals

```typescript
import { signal, computed } from '@angular/core';

@Component({
  template: `
    <p>Price: {{ price() }} лв.</p>
    <p>With VAT: {{ priceWithVat() }} лв.</p>
  `
})
export class PriceComponent {
  price = signal(100);

  // Автоматично се преизчислява!
  priceWithVat = computed(() => this.price() * 1.20);
}
```

💡 Computed signals са **read-only** и **автоматично обновявани**

---

<!-- .slide: data-background="#3498db" -->

# Data Binding

### Свързване на данни

---

## Три Типа Binding

| Синтаксис | Посока | Пример |
|-----------|--------|--------|
| `[property]` | Component → Template | `[src]="imageUrl"` |
| `(event)` | Template → Component | `(click)="save()"` |
| `[(two-way)]` | Двупосочно | `[(ngModel)]="name"` |

---

## Property Binding

```html
<!-- Стойности от component → template -->
<img [src]="user.avatar" [alt]="user.name">
<button [disabled]="isLoading()">Submit</button>
<div [class.active]="isActive">...</div>
<p [style.color]="textColor">Text</p>
```

➡️ Component данни → DOM атрибути

---

## Event Binding

```html
<!-- Събития от template → component -->
<button (click)="handleClick()">Click me</button>
<input (input)="onInput($event)">
<input (keyup.enter)="onEnter()">
<form (ngSubmit)="onSubmit()">...</form>
```

⬅️ Потребителски действия → Component методи

---

## Two-Way Binding

```typescript
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],  // ← Задължителен import!
  template: `
    <input [(ngModel)]="searchTerm" name="search">
    <p>Searching: {{ searchTerm }}</p>
  `
})
export class SearchComponent {
  searchTerm = '';
}
```

↔️ Синхронизация в **двете посоки**

---

<!-- .slide: data-background="#2ecc71" -->

# Modern Control Flow

### @if, @for, @switch

---

## Стар vs Нов Синтаксис

| Стар (директиви) | Нов (Angular 17+) |
|------------------|-------------------|
| `*ngIf` | `@if` |
| `*ngFor` | `@for` |
| `*ngSwitch` | `@switch` |

✅ По-чист синтаксис

✅ По-добра performance

✅ Интеграция със signals

---

## @if / @else

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

---

## @for / @empty

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

⚠️ **`track` е задължителен!**

---

## track Expression

```html
<!-- По уникален ID (препоръчително) -->
@for (item of items(); track item.id) { ... }

<!-- По индекс (за прости списъци) -->
@for (name of names(); track $index) { ... }

<!-- $index, $first, $last, $even, $odd са достъпни -->
@for (item of items(); track item.id; let i = $index) {
  <p>{{ i + 1 }}. {{ item.name }}</p>
}
```

---

## @switch / @case

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
    <span>Unknown</span>
  }
}
```

---

<!-- .slide: data-background="#e74c3c" -->

# Component Communication

### input() и model()

---

## input() - Parent → Child

```typescript
// child.component.ts
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-user-card',
  template: `
    <h3>{{ name() }}</h3>
    <p>{{ email() }}</p>
  `
})
export class UserCardComponent {
  name = input<string>('Anonymous');   // Optional
  email = input.required<string>();    // Required
}
```

```html
<!-- parent.component.html -->
<app-user-card [name]="userName()" [email]="userEmail()">
</app-user-card>
```

---

## model() - Two-Way Binding

```typescript
// counter.component.ts
import { Component, model } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <button (click)="count.update(c => c - 1)">-</button>
    <span>{{ count() }}</span>
    <button (click)="count.update(c => c + 1)">+</button>
  `
})
export class CounterComponent {
  count = model<number>(0);  // ← Two-way binding
}
```

```html
<!-- parent -->
<app-counter [(count)]="parentCount"></app-counter>
```

---

## input() vs model()

| Feature | `input()` | `model()` |
|---------|-----------|-----------|
| Посока | Parent → Child | Two-way |
| Промяна | Read-only | Writable |
| Синтаксис | `[prop]` | `[(prop)]` |
| Use case | Данни надолу | Синхронизация |

---

<!-- .slide: data-background="#f39c12" -->

# Services & DI

### Dependency Injection

---

## Какво са Services?

TypeScript класове, които:

🔧 **Капсулират бизнес логика** <!-- .element: class="fragment" -->

📦 **Споделят данни** между компоненти <!-- .element: class="fragment" -->

💉 **Инжектират се** чрез DI <!-- .element: class="fragment" -->

🔄 **Singleton** - една инстанция за цялото app <!-- .element: class="fragment" -->

---

## Създаване на Service

```typescript
import { Injectable, signal, computed } from '@angular/core';

@Injectable({ providedIn: 'root' })  // ← Singleton!
export class TodoService {
  private _todos = signal<Todo[]>([]);

  todos = this._todos.asReadonly();  // Public read-only

  completedCount = computed(() =>
    this._todos().filter(t => t.done).length
  );

  addTodo(text: string) {
    this._todos.update(t => [...t, { id: Date.now(), text, done: false }]);
  }

  toggleTodo(id: number) {
    this._todos.update(t => t.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ));
  }
}
```

---

## inject() Function

```typescript
import { Component, inject } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo-list',
  template: `
    <h2>Todos ({{ todoService.completedCount() }} done)</h2>

    @for (todo of todoService.todos(); track todo.id) {
      <div [class.done]="todo.done">
        <input type="checkbox"
               [checked]="todo.done"
               (change)="todoService.toggleTodo(todo.id)">
        {{ todo.text }}
      </div>
    }
  `
})
export class TodoListComponent {
  todoService = inject(TodoService);  // ← Modern way!
}
```

---

## DI Предимства

✅ **Singleton** - споделено състояние <!-- .element: class="fragment" -->

✅ **Testability** - лесен mocking <!-- .element: class="fragment" -->

✅ **Separation of Concerns** <!-- .element: class="fragment" -->

✅ **Loose Coupling** <!-- .element: class="fragment" -->

---

<!-- .slide: data-background="#9b59b6" -->

# Routing

### SPA Навигация

---

## Какво е SPA Routing?

**Single Page Application** навигация:

📄 Една HTML страница <!-- .element: class="fragment" -->

🔀 URL се променя без reload <!-- .element: class="fragment" -->

⚡ Бърза навигация <!-- .element: class="fragment" -->

📦 Компоненти се сменят динамично <!-- .element: class="fragment" -->

---

## Route Configuration

```typescript
// app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'user/:id', component: UserProfileComponent },
  { path: '**', redirectTo: '/home' }  // 404
];
```

---

## Navigation

```html
<!-- app.component.html -->
<nav>
  <a routerLink="/home" routerLinkActive="active">Home</a>
  <a routerLink="/about" routerLinkActive="active">About</a>
  <a [routerLink]="['/user', userId]">Profile</a>
</nav>

<!-- Тук се рендерира активният компонент -->
<router-outlet></router-outlet>
```

💡 `routerLinkActive` добавя CSS клас на активния линк

---

## Route Parameters

```typescript
import { ActivatedRoute } from '@angular/router';

@Component({
  template: `<h1>User: {{ userId }}</h1>`
})
export class UserProfileComponent implements OnInit {
  private route = inject(ActivatedRoute);
  userId: string | null = null;

  ngOnInit() {
    // Snapshot (еднократно)
    this.userId = this.route.snapshot.paramMap.get('id');

    // Или reactive (при промяна)
    this.route.paramMap.subscribe(params => {
      this.userId = params.get('id');
    });
  }
}
```

---

<!-- .slide: data-background="#16a085" -->

# Forms

### Template-Driven Forms

---

## Template-Driven Forms

```typescript
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [FormsModule],  // ← Важен import!
  template: `
    <form (ngSubmit)="onSubmit()">
      <input [(ngModel)]="formData.name" name="name" required>
      <input [(ngModel)]="formData.email" name="email" required>
      <textarea [(ngModel)]="formData.message" name="message">
      </textarea>
      <button type="submit">Send</button>
    </form>
  `
})
export class ContactFormComponent {
  formData = { name: '', email: '', message: '' };

  onSubmit() {
    console.log('Form:', this.formData);
  }
}
```

---

## Важни Правила

⚠️ **name атрибут е задължителен!**

```html
<!-- ❌ Грешно -->
<input [(ngModel)]="email">

<!-- ✅ Правилно -->
<input [(ngModel)]="email" name="email">
```

⚠️ **Import FormsModule!**

```typescript
imports: [FormsModule]  // За [(ngModel)]
```

---

<!-- .slide: data-background="#c0392b" -->

# Често Срещани Грешки

### И как да ги избегнем

---

## Грешки с Signals

```typescript
// ❌ Забравено () в template
<p>Count: {{ count }}</p>

// ✅ Правилно - извикваме signal-а
<p>Count: {{ count() }}</p>
```

```typescript
// ❌ set() с текуща стойност
this.count.set(this.count() + 1);

// ✅ Правилно - използваме update()
this.count.update(c => c + 1);
```

---

## Грешки с @for

```html
<!-- ❌ Липсващ track -->
@for (item of items()) { ... }

<!-- ✅ Правилно - track е задължителен -->
@for (item of items(); track item.id) { ... }
```

---

## Грешки с ngModel

```html
<!-- ❌ Липсващ name -->
<input [(ngModel)]="email">

<!-- ✅ Правилно -->
<input [(ngModel)]="email" name="email">
```

```typescript
// ❌ Липсващ import
@Component({ imports: [] })

// ✅ Правилно
@Component({ imports: [FormsModule] })
```

---

## Грешки със Standalone

```typescript
// ❌ Забравено standalone: true
@Component({
  selector: 'app-my',
  template: `...`
})

// ✅ Правилно
@Component({
  selector: 'app-my',
  standalone: true,  // ← Добавете това!
  template: `...`
})
```

---

<!-- .slide: data-background="#2c3e50" -->

# Best Practices

---

## Препоръки

✅ **Standalone компоненти** - бъдещето на Angular <!-- .element: class="fragment" -->

✅ **Signals** за reactive state <!-- .element: class="fragment" -->

✅ **Services** за бизнес логика <!-- .element: class="fragment" -->

✅ **inject()** вместо constructor injection <!-- .element: class="fragment" -->

✅ **track** винаги в @for <!-- .element: class="fragment" -->

✅ **TypeScript** types навсякъде <!-- .element: class="fragment" -->

---

## Структура на Компонент

```typescript
@Component({
  selector: 'app-feature',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `...`,
  styles: [`...`]
})
export class FeatureComponent {
  // 1. Injected services
  private myService = inject(MyService);

  // 2. Signals
  data = signal<Data[]>([]);
  isLoading = signal(false);

  // 3. Computed
  filteredData = computed(() => this.data().filter(...));

  // 4. Methods
  loadData() { ... }
}
```

---

# Обобщение

---

## Научихме

📦 **Standalone Components** - без NgModules <!-- .element: class="fragment" -->

📊 **Signals** - signal(), computed() <!-- .element: class="fragment" -->

🔀 **Data Binding** - [], (), [()] <!-- .element: class="fragment" -->

🔄 **Control Flow** - @if, @for, @switch <!-- .element: class="fragment" -->

💬 **Communication** - input(), model() <!-- .element: class="fragment" -->

💉 **Services & DI** - inject() <!-- .element: class="fragment" -->

🧭 **Routing** - router-outlet <!-- .element: class="fragment" -->

---

## Следващи Стъпки

📝 **Reactive Forms** - FormGroup, FormControl

🌐 **HTTP Client** - API заявки

🚀 **Lazy Loading** - оптимизация

🛡️ **Route Guards** - защита на routes

📚 **RxJS** - advanced patterns

🎨 **Angular Material** - UI components

---

## Ресурси

📖 [angular.dev](https://angular.dev/) - Официална документация

📺 [Angular YouTube](https://www.youtube.com/angular)

🛠️ [Angular DevTools](https://angular.dev/tools/devtools)

🎮 [StackBlitz](https://stackblitz.com/) - Online playground

---

<!-- .slide: data-background="#dd0031" -->

# Въпроси?

### 🅰️ Happy Angular Coding!
