---
sidebar_position: 2
title: "Упражнения"
tags: [exercises, practice, angular, components, signals, routing, typescript]
---

import ExerciseCard from '@site/src/components/Exercise/ExerciseCard';
import ProgressTracker from '@site/src/components/Exercise/ProgressTracker';
import CollapsibleSection from '@site/src/components/CollapsibleSection';
import InfoBox from '@site/src/components/InfoBoxes/InfoBox';
import WarningBox from '@site/src/components/InfoBoxes/WarningBox';
import SuccessBox from '@site/src/components/InfoBoxes/SuccessBox';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Упражнения: Angular Fundamentals

<img src={useBaseUrl('/img/diagrams/angular/exercises-header.svg')} alt="Angular Exercises Header" style={{width: '100%', maxWidth: '800px', margin: '20px auto', display: 'block'}} />

<ProgressTracker />

---

## Лесни Упражнения (EASY)

<ExerciseCard difficulty="easy">

### Задача 1: Angular предназначение

**Multiple Choice** - За какво е проектиран Angular предимно?

A) Изграждане само на мобилни приложения
B) Изграждане на мащабируеми, enterprise-grade уеб приложения
C) Управление на бази данни
D) Разработка на операционни системи

<CollapsibleSection title="✅ Решение">

**Правилен отговор: B) Изграждане на мащабируеми, enterprise-grade уеб приложения**

**Обяснение:**
- Angular е **frontend framework** от Google
- Проектиран за **large-scale** приложения с комплексна логика
- Използва се широко в enterprise среда (банки, healthcare, government)
- Предоставя цялостна екосистема: routing, forms, HTTP, DI
- **Не е** за мобилни приложения (за това има Ionic/NativeScript), бази данни или OS

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="easy">

### Задача 2: Node.js проверка

**Short Answer** - Каква команда изпълнявате в терминала, за да проверите дали Node.js е правилно инсталиран?

<CollapsibleSection title="💡 Подсказка">

Командата показва версията на инсталирания софтуер.

</CollapsibleSection>

<CollapsibleSection title="✅ Решение">

```bash
node -v
# или
node --version
```

**Примерен изход:**
```
v20.11.0
```

**Допълнителни проверки:**
```bash
npm -v           # Проверка на npm
ng version       # Проверка на Angular CLI (след инсталация)
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="easy">

### Задача 3: standalone: true

**Multiple Choice** - Какво означава `standalone: true` свойството в Angular компонент?

A) Компонентът може да се използва само веднъж
B) Компонентът не изисква NgModules
C) Компонентът не може да има imports
D) Компонентът работи на отделен сървър

<CollapsibleSection title="✅ Решение">

**Правилен отговор: B) Компонентът не изисква NgModules**

**Обяснение:**
- `standalone: true` е ключовото свойство за модерни Angular компоненти (17+)
- Позволява **директен import** на зависимости в компонента
- Премахва нуждата от `declarations` в модули
- Компонентът **може** да има imports - дори трябва да импортира каквото му е нужно

```typescript
@Component({
  selector: 'app-example',
  standalone: true,        // ← Не изисква NgModule!
  imports: [CommonModule], // ← Може да има imports
  template: '...'
})
export class ExampleComponent { }
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="easy">

### Задача 4: Angular CLI команда

**Fill in the Blank** - Попълнете Angular CLI командата за създаване на standalone приложение с routing:

```bash
ng new my-app --________ --routing
```

<CollapsibleSection title="✅ Решение">

```bash
ng new my-app --standalone --routing
```

**Обяснение:**
- `ng new` - създава ново Angular приложение
- `--standalone` - използва standalone компоненти (без NgModules)
- `--routing` - добавя routing конфигурация

**Други полезни флагове:**
```bash
ng new my-app --standalone --routing --style=scss
ng new my-app --standalone --routing --prefix=app
ng new my-app --standalone --routing --skip-tests
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="easy">

### Задача 5: Property Binding синтаксис

**Short Answer** - Какъв синтаксис се използва за property binding в Angular templates? Дайте пример за binding на image source.

<CollapsibleSection title="✅ Решение">

**Синтаксис:** `[property]="expression"`

Квадратни скоби обграждат свойството на елемента.

**Примери:**
```html
<!-- Image source binding -->
<img [src]="imageUrl" [alt]="imageDescription">

<!-- Други примери за property binding -->
<button [disabled]="isLoading">Submit</button>
<div [class.active]="isActive">Content</div>
<input [value]="userName">
<a [href]="linkUrl">Click here</a>
```

**В компонента:**
```typescript
export class MyComponent {
  imageUrl = '/assets/photo.jpg';
  imageDescription = 'Profile photo';
  isLoading = false;
}
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="easy">

### Задача 6: Създаване на Signal

**Multiple Choice** - Коя функция се използва за създаване на writable signal в Angular?

A) `createSignal()`
B) `signal()`
C) `reactive()`
D) `observable()`

<CollapsibleSection title="✅ Решение">

**Правилен отговор: B) signal()**

**Обяснение:**
```typescript
import { signal } from '@angular/core';

// Създаване на writable signal
const count = signal(0);

// Четене на стойността
console.log(count()); // 0

// Промяна на стойността
count.set(5);         // Директно задаване
count.update(v => v + 1); // Базирано на текущата стойност
```

**Други signal функции:**
- `signal()` - writable signal
- `computed()` - read-only signal, базиран на други signals
- `effect()` - side effects при промяна на signals

</CollapsibleSection>

</ExerciseCard>

---

## Средни Упражнения (MEDIUM)

<ExerciseCard difficulty="medium">

### Задача 7: Signal-based Counter Component

**Code Completion** - Попълнете следния signal-based компонент за показване на брояч с increment функция:

```typescript
import { Component, _______, computed } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  template: `
    <p>Count: {{ count() }}</p>
    <button (click)="increment()">+1</button>
  `
})
export class CounterComponent {
  count = _______(0);

  increment() {
    this.count._______(value => value + 1);
  }
}
```

<CollapsibleSection title="✅ Решение">

```typescript
import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  template: `
    <p>Count: {{ count() }}</p>
    <button (click)="increment()">+1</button>
  `
})
export class CounterComponent {
  count = signal(0);

  increment() {
    this.count.update(value => value + 1);
  }
}
```

**Попълнени места:**
1. `signal` - import от @angular/core
2. `signal(0)` - създаване на writable signal с начална стойност 0
3. `update` - метод за обновяване базирано на текущата стойност

**Алтернативен вариант с set():**
```typescript
increment() {
  this.count.set(this.count() + 1);
}
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium">

### Задача 8: Конвертиране на Control Flow

**Practical Exercise** - Конвертирайте следния стар Angular control flow синтаксис към модерен 2026 синтаксис:

```html
<!-- Стар синтаксис -->
<div *ngIf="isVisible">
  <p>Content is visible</p>
</div>
<div *ngIf="!isVisible">
  <p>Content is hidden</p>
</div>
```

Напишете еквивалента използвайки `@if` и `@else`.

<CollapsibleSection title="✅ Решение">

```html
<!-- Модерен синтаксис (Angular 17+) -->
@if (isVisible) {
  <div>
    <p>Content is visible</p>
  </div>
} @else {
  <div>
    <p>Content is hidden</p>
  </div>
}
```

**Или по-опростено:**
```html
@if (isVisible) {
  <p>Content is visible</p>
} @else {
  <p>Content is hidden</p>
}
```

**Предимства на новия синтаксис:**
- По-четим и интуитивен
- По-добра performance
- Native интеграция със signals
- Поддържа @else if за множество условия

```html
@if (status === 'loading') {
  <p>Loading...</p>
} @else if (status === 'error') {
  <p>Error occurred!</p>
} @else {
  <p>Content loaded.</p>
}
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium">

### Задача 9: track в @for

**Multiple Choice** - Каква е целта на `track` expression в `@for` control flow block?

A) За добавяне на tracking analytics
B) За помощ на Angular да идентифицира елементите уникално за performance оптимизация
C) За броене на итерациите
D) За логване на всеки елемент в конзолата

<CollapsibleSection title="✅ Решение">

**Правилен отговор: B) За помощ на Angular да идентифицира елементите уникално за performance оптимизация**

**Обяснение:**
- `track` е **задължителен** в `@for` (Angular 17+)
- Позволява на Angular да проследява кои елементи са се променили
- При промяна на списъка, Angular обновява само засегнатите DOM елементи
- Без track, Angular би трябвало да re-render-ва целия списък

**Примери:**
```html
<!-- track по уникален идентификатор (най-добре) -->
@for (user of users(); track user.id) {
  <div>{{ user.name }}</div>
}

<!-- track по индекс (за прости списъци) -->
@for (name of names(); track $index) {
  <li>{{ name }}</li>
}

<!-- track по самия елемент (ако е уникален) -->
@for (item of items(); track item) {
  <span>{{ item }}</span>
}
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium">

### Задача 10: Computed Signal

**Code Writing** - Напишете computed signal `fullName`, който комбинира `firstName` и `lastName` signals:

```typescript
firstName = signal('John');
lastName = signal('Doe');

// Напишете computed signal тук:
fullName = ???
```

<CollapsibleSection title="✅ Решение">

```typescript
import { signal, computed } from '@angular/core';

firstName = signal('John');
lastName = signal('Doe');

// Computed signal
fullName = computed(() => `${this.firstName()} ${this.lastName()}`);
```

**Пълен компонент:**
```typescript
@Component({
  selector: 'app-name-display',
  standalone: true,
  template: `
    <p>First: {{ firstName() }}</p>
    <p>Last: {{ lastName() }}</p>
    <p>Full: {{ fullName() }}</p>

    <button (click)="changeName()">Change Name</button>
  `
})
export class NameDisplayComponent {
  firstName = signal('John');
  lastName = signal('Doe');

  // Автоматично се преизчислява при промяна на firstName или lastName
  fullName = computed(() => `${this.firstName()} ${this.lastName()}`);

  changeName() {
    this.firstName.set('Jane');
    // fullName() автоматично става "Jane Doe"
  }
}
```

**Ключови точки:**
- `computed()` приема функция без аргументи
- Резултатът е read-only signal
- Автоматично се преизчислява при промяна на зависимостите
- Angular проследява кои signals се четат в computed функцията

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium">

### Задача 11: Fruits List Component

**Practical Exercise** - Създайте standalone компонент, който показва списък от плодове използвайки модерния `@for` синтаксис. Компонентът трябва да:

- Има signal със масив от fruit обекти с `id` и `name` свойства
- Показва всяко име на плод в list item
- Показва "No fruits available" когато масивът е празен

<CollapsibleSection title="✅ Решение">

```typescript
import { Component, signal } from '@angular/core';

interface Fruit {
  id: number;
  name: string;
}

@Component({
  selector: 'app-fruit-list',
  standalone: true,
  template: `
    <h2>🍎 Fruit List</h2>

    <ul>
      @for (fruit of fruits(); track fruit.id) {
        <li>{{ fruit.name }}</li>
      } @empty {
        <li class="empty">No fruits available</li>
      }
    </ul>

    <button (click)="addFruit()">Add Fruit</button>
    <button (click)="clearFruits()">Clear All</button>
  `,
  styles: [`
    .empty { color: #999; font-style: italic; }
    ul { list-style: none; padding: 0; }
    li { padding: 8px; margin: 4px 0; background: #f5f5f5; border-radius: 4px; }
  `]
})
export class FruitListComponent {
  private nextId = 4;

  fruits = signal<Fruit[]>([
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Orange' }
  ]);

  addFruit() {
    const newFruits = ['Mango', 'Grape', 'Pear', 'Kiwi'];
    const randomFruit = newFruits[Math.floor(Math.random() * newFruits.length)];

    this.fruits.update(fruits => [
      ...fruits,
      { id: this.nextId++, name: randomFruit }
    ]);
  }

  clearFruits() {
    this.fruits.set([]);
  }
}
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium">

### Задача 12: set() vs update()

**Short Answer** - Обяснете разликата между `set()` и `update()` методите на writable signal. Кога бихте използвали всеки от тях?

<CollapsibleSection title="✅ Решение">

**`set(newValue)`** - Директно задава нова стойност

```typescript
const count = signal(0);

// set() - когато знаете точната нова стойност
count.set(10);
count.set(0);  // Reset
```

**`update(updaterFn)`** - Обновява базирано на текущата стойност

```typescript
const count = signal(0);

// update() - когато новата стойност зависи от текущата
count.update(current => current + 1);  // Increment
count.update(current => current * 2);  // Double
```

**Кога да използвате кое:**

| Сценарий | Използвайте |
|----------|-------------|
| Reset към фиксирана стойност | `set()` |
| Increment/Decrement | `update()` |
| Toggle boolean | `update()` |
| Добавяне към масив | `update()` |
| Замяна на целия масив | `set()` |
| Обновяване на обект property | `update()` |

**Примери:**
```typescript
// Toggle
isOpen = signal(false);
toggle() { this.isOpen.update(v => !v); }

// Add to array
items = signal<string[]>([]);
addItem(item: string) {
  this.items.update(list => [...list, item]);
}

// Reset array
clearItems() {
  this.items.set([]);
}
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium">

### Задача 13: Service Debugging

**Code Debugging** - Следният service има грешка. Идентифицирайте и поправете я:

```typescript
import { Injectable, signal } from '@angular/core';

@Injectable()
export class TaskService {
  tasks = signal<string[]>([]);

  addTask(task: string) {
    this.tasks.push(task);
  }
}
```

<CollapsibleSection title="💡 Подсказка">

Signals не са масиви - те **съдържат** масиви. Как обновявате стойността на signal?

</CollapsibleSection>

<CollapsibleSection title="✅ Решение">

**Грешки:**
1. `this.tasks.push(task)` - signals нямат `push` метод
2. Липсва `providedIn: 'root'` за singleton service

**Поправен код:**
```typescript
import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })  // ← Добавено за singleton
export class TaskService {
  tasks = signal<string[]>([]);

  addTask(task: string) {
    // ← Правилно използване на update()
    this.tasks.update(currentTasks => [...currentTasks, task]);
  }

  // Или с set():
  // addTask(task: string) {
  //   this.tasks.set([...this.tasks(), task]);
  // }
}
```

**Обяснение:**
- `signal()` създава обект с методи `set()`, `update()`, и getter функция
- За да обновите стойността, използвайте `update()` или `set()`
- `...this.tasks()` spread-ва текущия масив и добавя новия елемент

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium">

### Задача 14: Route Configuration

**Practical Exercise** - Напишете route configuration за приложение със следните изисквания:

- Празен path пренасочва към '/dashboard'
- '/dashboard' зарежда DashboardComponent
- '/settings' зарежда SettingsComponent
- '/user/:userId' зарежда UserProfileComponent (с route parameter)
- Непознати paths пренасочват към '/dashboard'

<CollapsibleSection title="✅ Решение">

```typescript
// app.routes.ts
import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { UserProfileComponent } from './user/user-profile.component';

export const routes: Routes = [
  // Redirect empty path to dashboard
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },

  // Dashboard route
  {
    path: 'dashboard',
    component: DashboardComponent
  },

  // Settings route
  {
    path: 'settings',
    component: SettingsComponent
  },

  // User profile with route parameter
  {
    path: 'user/:userId',
    component: UserProfileComponent
  },

  // Wildcard - catch all unknown routes
  {
    path: '**',
    redirectTo: '/dashboard'
  }
];
```

**Четене на route parameter в компонента:**
```typescript
// user-profile.component.ts
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  template: `<h1>User ID: {{ userId }}</h1>`
})
export class UserProfileComponent implements OnInit {
  private route = inject(ActivatedRoute);
  userId: string | null = null;

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('userId');
  }
}
```

</CollapsibleSection>

</ExerciseCard>

---

## Трудни Упражнения (HARD)

<ExerciseCard difficulty="hard">

### Задача 15: Parent-Child Component Integration

**Component Integration** - Създайте parent-child компонент setup, където:

1. Parent компонентът има signal `selectedColor` инициализиран на 'blue'
2. Child компонентът използва `input()` за получаване на цвета
3. Child компонентът използва `model()` за two-way binding
4. Child компонентът показва цвета и има бутони за промяна към 'red', 'green' или 'blue'

Напишете и двата компонента с техните templates.

<CollapsibleSection title="✅ Решение">

**Child Component (color-picker.component.ts):**
```typescript
import { Component, input, model } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  standalone: true,
  template: `
    <div class="color-picker">
      <h3>Color Picker</h3>

      <!-- Display current color (from input) -->
      <div class="color-display" [style.background-color]="displayColor()">
        Current: {{ displayColor() }}
      </div>

      <!-- Buttons to change color (using model for two-way) -->
      <div class="buttons">
        <button (click)="selectedColor.set('red')"
                [class.active]="selectedColor() === 'red'">
          🔴 Red
        </button>
        <button (click)="selectedColor.set('green')"
                [class.active]="selectedColor() === 'green'">
          🟢 Green
        </button>
        <button (click)="selectedColor.set('blue')"
                [class.active]="selectedColor() === 'blue'">
          🔵 Blue
        </button>
      </div>
    </div>
  `,
  styles: [`
    .color-picker { padding: 16px; border: 1px solid #ddd; border-radius: 8px; }
    .color-display {
      padding: 20px;
      color: white;
      text-align: center;
      margin: 10px 0;
      border-radius: 4px;
    }
    .buttons { display: flex; gap: 8px; }
    button { padding: 8px 16px; cursor: pointer; }
    button.active { font-weight: bold; box-shadow: 0 0 5px currentColor; }
  `]
})
export class ColorPickerComponent {
  // Read-only input from parent
  displayColor = input<string>('gray');

  // Two-way binding with parent
  selectedColor = model<string>('blue');
}
```

**Parent Component (app.component.ts):**
```typescript
import { Component, signal } from '@angular/core';
import { ColorPickerComponent } from './color-picker/color-picker.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ColorPickerComponent],
  template: `
    <h1>Color Selection Demo</h1>

    <p>Parent's selected color: <strong>{{ parentColor() }}</strong></p>

    <app-color-picker
      [displayColor]="parentColor()"
      [(selectedColor)]="parentColor">
    </app-color-picker>

    <div class="preview" [style.background-color]="parentColor()">
      Preview in parent
    </div>
  `,
  styles: [`
    .preview {
      margin-top: 20px;
      padding: 40px;
      color: white;
      text-align: center;
      border-radius: 8px;
    }
  `]
})
export class AppComponent {
  parentColor = signal('blue');
}
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="hard">

### Задача 16: BookService Implementation

**Service Implementation** - Създайте пълен `BookService`, който:

- Съхранява списък от книги (всяка с id, title, author, isRead свойства) като signal
- Има методи за: добавяне на книга, маркиране като прочетена/непрочетена, изтриване на книга
- Има computed signal за получаване само на непрочетените книги
- Е правилно конфигуриран като singleton service

<CollapsibleSection title="✅ Решение">

```typescript
// book.model.ts
export interface Book {
  id: number;
  title: string;
  author: string;
  isRead: boolean;
}

// book.service.ts
import { Injectable, signal, computed } from '@angular/core';
import { Book } from './book.model';

@Injectable({ providedIn: 'root' })
export class BookService {
  private nextId = 1;

  // Private writable signal
  private _books = signal<Book[]>([
    { id: this.nextId++, title: '1984', author: 'George Orwell', isRead: true },
    { id: this.nextId++, title: 'Brave New World', author: 'Aldous Huxley', isRead: false },
    { id: this.nextId++, title: 'Fahrenheit 451', author: 'Ray Bradbury', isRead: false }
  ]);

  // Public read-only signal for all books
  books = this._books.asReadonly();

  // Computed signal for unread books only
  unreadBooks = computed(() =>
    this._books().filter(book => !book.isRead)
  );

  // Computed signal for read count
  readCount = computed(() =>
    this._books().filter(book => book.isRead).length
  );

  // Computed signal for total count
  totalCount = computed(() => this._books().length);

  addBook(title: string, author: string): void {
    if (!title.trim() || !author.trim()) return;

    this._books.update(books => [
      ...books,
      {
        id: this.nextId++,
        title: title.trim(),
        author: author.trim(),
        isRead: false
      }
    ]);
  }

  toggleReadStatus(id: number): void {
    this._books.update(books =>
      books.map(book =>
        book.id === id ? { ...book, isRead: !book.isRead } : book
      )
    );
  }

  markAsRead(id: number): void {
    this._books.update(books =>
      books.map(book =>
        book.id === id ? { ...book, isRead: true } : book
      )
    );
  }

  markAsUnread(id: number): void {
    this._books.update(books =>
      books.map(book =>
        book.id === id ? { ...book, isRead: false } : book
      )
    );
  }

  deleteBook(id: number): void {
    this._books.update(books => books.filter(book => book.id !== id));
  }

  getBookById(id: number): Book | undefined {
    return this._books().find(book => book.id === id);
  }
}
```

**Използване в компонент:**
```typescript
@Component({
  selector: 'app-book-list',
  standalone: true,
  template: `
    <h2>📚 My Books ({{ bookService.readCount() }}/{{ bookService.totalCount() }} read)</h2>

    <h3>Unread Books:</h3>
    @for (book of bookService.unreadBooks(); track book.id) {
      <div>
        {{ book.title }} by {{ book.author }}
        <button (click)="bookService.markAsRead(book.id)">✓ Mark Read</button>
      </div>
    } @empty {
      <p>All books are read! 🎉</p>
    }
  `
})
export class BookListComponent {
  bookService = inject(BookService);
}
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="hard">

### Задача 17: ProductFilterComponent

**Full Component Exercise** - Създайте `ProductFilterComponent`, който:

- Инжектира предоставен `ProductService`
- Показва продукти използвайки `@for` с правилен tracking
- Има search input с two-way binding използвайки `[(ngModel)]`
- Използва `@if` за показване на "No products found" съобщение когато филтрираните резултати са празни
- Използва `@switch` за показване на различни икони базирано на product category ('electronics', 'clothing', 'food')

Напишете пълния компонент включително imports.

<CollapsibleSection title="✅ Решение">

````typescript
// product.model.ts
export interface Product {
  id: number;
  name: string;
  category: 'electronics' | 'clothing' | 'food';
  price: number;
}

// product.service.ts
import { Injectable, signal, computed } from '@angular/core';
import { Product } from './product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  products = signal<Product[]>([
    { id: 1, name: 'Laptop', category: 'electronics', price: 1200 },
    { id: 2, name: 'T-Shirt', category: 'clothing', price: 25 },
    { id: 3, name: 'Headphones', category: 'electronics', price: 150 },
    { id: 4, name: 'Pizza', category: 'food', price: 12 },
    { id: 5, name: 'Jeans', category: 'clothing', price: 60 },
    { id: 6, name: 'Smartphone', category: 'electronics', price: 800 },
    { id: 7, name: 'Burger', category: 'food', price: 8 }
  ]);
}

// product-filter.component.ts
import { Component, inject, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from './product.service';
import { Product } from './product.model';

@Component({
  selector: 'app-product-filter',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="product-filter">
      <h2>🛒 Product Filter</h2>

      <!-- Search input with two-way binding -->
      <div class="search-box">
        <input
          type="text"
          [(ngModel)]="searchTerm"
          placeholder="Search products..."
          name="search">
        <span class="result-count">
          {{ filteredProducts().length }} results
        </span>
      </div>

      <!-- Products list -->
      @if (filteredProducts().length > 0) {
        <ul class="product-list">
          @for (product of filteredProducts(); track product.id) {
            <li class="product-item">
              <!-- Category icon using @switch -->
              <span class="icon">
                @switch (product.category) {
                  @case ('electronics') { 💻 }
                  @case ('clothing') { 👕 }
                  @case ('food') { 🍕 }
                  @default { 📦 }
                }
              </span>

              <span class="name">{{ product.name }}</span>
              <span class="category">({{ product.category }})</span>
              <span class="price">{{ product.price }} лв.</span>
            </li>
          }
        </ul>
      } @else {
        <div class="no-results">
          <p>😕 No products found for "{{ searchTerm }}"</p>
          <button (click)="searchTerm = ''">Clear search</button>
        </div>
      }
    </div>
  `,
  styles: [`
    .product-filter { padding: 20px; }
    .search-box {
      display: flex;
      gap: 10px;
      align-items: center;
      margin-bottom: 20px;
    }
    .search-box input {
      padding: 10px;
      font-size: 16px;
      border: 1px solid #ddd;
      border-radius: 4px;
      flex: 1;
    }
    .result-count { color: #666; }
    .product-list { list-style: none; padding: 0; }
    .product-item {
      display: flex;
      gap: 10px;
      align-items: center;
      padding: 12px;
      border-bottom: 1px solid #eee;
    }
    .product-item:hover { background: #f9f9f9; }
    .icon { font-size: 24px; }
    .name { font-weight: bold; flex: 1; }
    .category { color: #666; font-size: 14px; }
    .price { font-weight: bold; color: #dd0031; }
    .no-results {
      text-align: center;
      padding: 40px;
      background: #f5f5f5;
      border-radius: 8px;
    }
    .no-results button {
      margin-top: 10px;
      padding: 8px 16px;
      cursor: pointer;
    }
  `]
})
export class ProductFilterComponent {
  // Inject ProductService
  productService = inject(ProductService);

  // Search term (could also be a signal)
  searchTerm = '';

  // Computed filtered products
  filteredProducts = computed(() => {
    const term = this.searchTerm.toLowerCase().trim();

    if (!term) {
      return this.productService.products();
    }

    return this.productService.products().filter(product =>
      product.name.toLowerCase().includes(term) ||
      product.category.toLowerCase().includes(term)
    );
  });
}
````

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="hard">

### Задача 18: Note-Taking App Architecture

**Architecture Design** - Дадени са следните изисквания за "Note-Taking" приложение:

**Изисквания:**
- Потребителите могат да създават, редактират и изтриват бележки
- Бележките имат title, content и creation date
- Бележките могат да се маркират като "favorite"
- Приложението има два views: "All Notes" и "Favorites Only"

Опишете:
1. Какви компоненти бихте създали и техните отговорности
2. Структурата на service със signal-based state management
3. Routing конфигурацията
4. Как данните протичат между компонентите

<CollapsibleSection title="✅ Решение">

**1. Компоненти и отговорности:**

```
app/
├── app.component.ts           # Root - navigation, router-outlet
├── notes/
│   ├── note-list.component.ts    # Показва списък с бележки
│   ├── note-card.component.ts    # Единична бележка card
│   ├── note-form.component.ts    # Create/Edit форма
│   └── note-detail.component.ts  # Детайлен view (опционално)
└── shared/
    └── search-bar.component.ts   # Reusable search input
```

| Компонент | Отговорности |
|-----------|--------------|
| `AppComponent` | Navigation bar, routing, global state display |
| `NoteListComponent` | Fetch notes от service, filter logic, @for rendering |
| `NoteCardComponent` | Display single note, emit edit/delete/favorite events |
| `NoteFormComponent` | Create/Edit form с validation, two-way binding |
| `SearchBarComponent` | Reusable search input с debounce |

**2. NoteService структура:**

```typescript
// note.model.ts
export interface Note {
  id: number;
  title: string;
  content: string;
  createdAt: Date;
  isFavorite: boolean;
}

// note.service.ts
@Injectable({ providedIn: 'root' })
export class NoteService {
  private nextId = 1;
  private _notes = signal<Note[]>([]);

  // Public read-only signals
  notes = this._notes.asReadonly();

  favoriteNotes = computed(() =>
    this._notes().filter(n => n.isFavorite)
  );

  favoriteCount = computed(() =>
    this._notes().filter(n => n.isFavorite).length
  );

  // CRUD operations
  addNote(title: string, content: string): void {
    this._notes.update(notes => [...notes, {
      id: this.nextId++,
      title,
      content,
      createdAt: new Date(),
      isFavorite: false
    }]);
  }

  updateNote(id: number, updates: Partial<Note>): void {
    this._notes.update(notes =>
      notes.map(n => n.id === id ? { ...n, ...updates } : n)
    );
  }

  deleteNote(id: number): void {
    this._notes.update(notes => notes.filter(n => n.id !== id));
  }

  toggleFavorite(id: number): void {
    this._notes.update(notes =>
      notes.map(n => n.id === id ? { ...n, isFavorite: !n.isFavorite } : n)
    );
  }

  getNoteById(id: number): Note | undefined {
    return this._notes().find(n => n.id === id);
  }
}
```

**3. Routing конфигурация:**

```typescript
// app.routes.ts
export const routes: Routes = [
  { path: '', redirectTo: '/notes', pathMatch: 'full' },
  { path: 'notes', component: NoteListComponent },
  { path: 'notes/new', component: NoteFormComponent },
  { path: 'notes/edit/:id', component: NoteFormComponent },
  { path: 'favorites', component: NoteListComponent, data: { showFavoritesOnly: true } },
  { path: '**', redirectTo: '/notes' }
];
```

**4. Data Flow:**

```
┌─────────────────────────────────────────────────────────┐
│                    NoteService                          │
│  _notes = signal<Note[]>([])                           │
│  favoriteNotes = computed(...)                         │
│  addNote(), updateNote(), deleteNote(), toggleFavorite()│
└─────────────────────────────────────────────────────────┘
         ↑ inject()              ↑ inject()
         │                       │
┌─────────────────┐     ┌─────────────────┐
│  NoteListComponent    │  NoteFormComponent │
│  - @for notes()       │  - [(ngModel)]     │
│  - filter logic       │  - onSubmit()      │
└─────────────────┘     └─────────────────┘
         │ [note]="..."          ↑
         ↓ (delete)="..."        │ Router.navigate()
┌─────────────────┐              │
│  NoteCardComponent │────────────┘
│  - input() note     │ (edit)="..."
│  - (favorite)       │
│  - (delete)         │
└─────────────────┘
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="hard">

### Задача 19: NgModule to Standalone Refactoring

**Code Refactoring** - Рефакторирайте следния NgModule-based компонент към модерна standalone архитектура със signals:

```typescript
// Стар подход
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-card',
  template: `
    <div class="card">
      <h3>{{ title }}</h3>
      <p *ngIf="description">{{ description }}</p>
      <button (click)="onSelect.emit(id)">Select</button>
    </div>
  `
})
export class ItemCardComponent {
  @Input() id: number;
  @Input() title: string;
  @Input() description?: string;
  @Output() onSelect = new EventEmitter<number>();
}
```

Конвертирайте към standalone с `input()` и модерен control flow.

<CollapsibleSection title="✅ Решение">

```typescript
// Модерен подход (Angular 17+)
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-item-card',
  standalone: true,  // ← Standalone component
  // Не е нужен import за @if - вграден е
  template: `
    <div class="card">
      <h3>{{ title() }}</h3>

      <!-- Modern control flow syntax -->
      @if (description()) {
        <p>{{ description() }}</p>
      }

      <button (click)="handleSelect()">Select</button>
    </div>
  `,
  styles: [`
    .card {
      padding: 16px;
      border: 1px solid #ddd;
      border-radius: 8px;
      margin: 8px 0;
    }
    .card:hover { box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
    button { margin-top: 10px; padding: 8px 16px; cursor: pointer; }
  `]
})
export class ItemCardComponent {
  // Signal-based inputs (replace @Input)
  id = input.required<number>();
  title = input.required<string>();
  description = input<string>();  // Optional input

  // Output (replace @Output + EventEmitter)
  onSelect = output<number>();

  handleSelect() {
    this.onSelect.emit(this.id());
  }
}
```

**Промени:**

| Стар синтаксис | Нов синтаксис |
|----------------|---------------|
| `@Input() id: number` | `id = input.required<number>()` |
| `@Input() title: string` | `title = input.required<string>()` |
| `@Input() description?` | `description = input<string>()` |
| `@Output() onSelect = new EventEmitter()` | `onSelect = output<number>()` |
| `*ngIf="description"` | `@if (description()) { }` |
| `{{ title }}` | `{{ title() }}` (signal getter) |

**Използване в parent:**
```html
<app-item-card
  [id]="item.id"
  [title]="item.title"
  [description]="item.description"
  (onSelect)="handleItemSelect($event)">
</app-item-card>
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="hard">

### Задача 20: Shopping Cart Application

**Complete Application Exercise** - Създайте mini "Shopping Cart" приложение със следните спецификации:

1. **ProductListComponent**: Показва налични продукти с "Add to Cart" бутони
2. **CartComponent**: Показва items в cart с quantity controls и remove опция
3. **CartService**: Управлява cart state използвайки signals, с computed signal за total price
4. **Routing**: Навигация между '/products' и '/cart' views
5. **App Component**: Navigation bar с cart item count badge

Предоставете пълната код структура включително:
- Всички component файлове с templates
- Service с пълна имплементация
- Route конфигурация
- Main.ts bootstrap setup

<CollapsibleSection title="✅ Решение">

````typescript
// === MODELS ===

// product.model.ts
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

// cart-item.model.ts
export interface CartItem {
  product: Product;
  quantity: number;
}


// === SERVICE ===

// cart.service.ts
import { Injectable, signal, computed } from '@angular/core';
import { Product } from './product.model';
import { CartItem } from './cart-item.model';

@Injectable({ providedIn: 'root' })
export class CartService {
  private _items = signal<CartItem[]>([]);

  // Public signals
  items = this._items.asReadonly();

  itemCount = computed(() =>
    this._items().reduce((sum, item) => sum + item.quantity, 0)
  );

  totalPrice = computed(() =>
    this._items().reduce((sum, item) =>
      sum + (item.product.price * item.quantity), 0
    )
  );

  addToCart(product: Product): void {
    this._items.update(items => {
      const existing = items.find(i => i.product.id === product.id);
      if (existing) {
        return items.map(i =>
          i.product.id === product.id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...items, { product, quantity: 1 }];
    });
  }

  removeFromCart(productId: number): void {
    this._items.update(items =>
      items.filter(i => i.product.id !== productId)
    );
  }

  updateQuantity(productId: number, quantity: number): void {
    if (quantity <= 0) {
      this.removeFromCart(productId);
      return;
    }
    this._items.update(items =>
      items.map(i =>
        i.product.id === productId ? { ...i, quantity } : i
      )
    );
  }

  clearCart(): void {
    this._items.set([]);
  }
}


// === PRODUCT SERVICE (mock data) ===

// product.service.ts
import { Injectable, signal } from '@angular/core';
import { Product } from './product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  products = signal<Product[]>([
    { id: 1, name: 'Laptop', price: 1200, image: '💻' },
    { id: 2, name: 'Headphones', price: 150, image: '🎧' },
    { id: 3, name: 'Keyboard', price: 80, image: '⌨️' },
    { id: 4, name: 'Mouse', price: 40, image: '🖱️' },
    { id: 5, name: 'Monitor', price: 350, image: '🖥️' },
    { id: 6, name: 'Webcam', price: 90, image: '📷' }
  ]);
}


// === COMPONENTS ===

// product-list.component.ts
import { Component, inject } from '@angular/core';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  template: `
    <h2>🛍️ Products</h2>
    <div class="products">
      @for (product of productService.products(); track product.id) {
        <div class="product-card">
          <span class="emoji">{{ product.image }}</span>
          <h3>{{ product.name }}</h3>
          <p class="price">{{ product.price }} лв.</p>
          <button (click)="cartService.addToCart(product)">
            Add to Cart
          </button>
        </div>
      }
    </div>
  `,
  styles: [`
    .products { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
    .product-card {
      padding: 20px;
      border: 1px solid #ddd;
      border-radius: 8px;
      text-align: center;
    }
    .emoji { font-size: 48px; }
    .price { color: #dd0031; font-weight: bold; font-size: 18px; }
    button { padding: 10px 20px; background: #dd0031; color: white;
             border: none; border-radius: 4px; cursor: pointer; }
    button:hover { background: #c3002f; }
  `]
})
export class ProductListComponent {
  productService = inject(ProductService);
  cartService = inject(CartService);
}


// cart.component.ts
import { Component, inject } from '@angular/core';
import { CartService } from '../cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterLink],
  template: `
    <h2>🛒 Shopping Cart</h2>

    @if (cartService.items().length > 0) {
      <div class="cart-items">
        @for (item of cartService.items(); track item.product.id) {
          <div class="cart-item">
            <span class="emoji">{{ item.product.image }}</span>
            <div class="details">
              <h3>{{ item.product.name }}</h3>
              <p>{{ item.product.price }} лв. x {{ item.quantity }}</p>
            </div>
            <div class="quantity">
              <button (click)="decrease(item.product.id, item.quantity)">-</button>
              <span>{{ item.quantity }}</span>
              <button (click)="increase(item.product.id, item.quantity)">+</button>
            </div>
            <button class="remove" (click)="cartService.removeFromCart(item.product.id)">
              🗑️
            </button>
          </div>
        }
      </div>

      <div class="total">
        <strong>Total: {{ cartService.totalPrice() }} лв.</strong>
      </div>

      <div class="actions">
        <button (click)="cartService.clearCart()">Clear Cart</button>
        <button class="checkout">Checkout</button>
      </div>
    } @else {
      <div class="empty">
        <p>Your cart is empty 😢</p>
        <a routerLink="/products">Browse Products</a>
      </div>
    }
  `,
  styles: [`
    .cart-items { margin: 20px 0; }
    .cart-item {
      display: flex; align-items: center; gap: 16px;
      padding: 16px; border-bottom: 1px solid #eee;
    }
    .emoji { font-size: 32px; }
    .details { flex: 1; }
    .quantity { display: flex; align-items: center; gap: 8px; }
    .quantity button { width: 30px; height: 30px; }
    .remove { background: none; border: none; cursor: pointer; font-size: 20px; }
    .total { font-size: 24px; text-align: right; padding: 20px; }
    .actions { display: flex; gap: 16px; justify-content: flex-end; }
    .checkout { background: #27ae60; color: white; padding: 12px 24px;
                border: none; border-radius: 4px; cursor: pointer; }
    .empty { text-align: center; padding: 60px; }
    .empty a { color: #dd0031; }
  `]
})
export class CartComponent {
  cartService = inject(CartService);

  increase(productId: number, currentQty: number) {
    this.cartService.updateQuantity(productId, currentQty + 1);
  }

  decrease(productId: number, currentQty: number) {
    this.cartService.updateQuantity(productId, currentQty - 1);
  }
}


// app.component.ts
import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CartService } from './cart.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <nav>
      <a routerLink="/products" routerLinkActive="active">Products</a>
      <a routerLink="/cart" routerLinkActive="active">
        Cart
        @if (cartService.itemCount() > 0) {
          <span class="badge">{{ cartService.itemCount() }}</span>
        }
      </a>
    </nav>
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [`
    nav {
      display: flex; gap: 20px; padding: 16px;
      background: #dd0031; color: white;
    }
    nav a { color: white; text-decoration: none; padding: 8px 16px; }
    nav a.active { background: rgba(255,255,255,0.2); border-radius: 4px; }
    .badge {
      background: white; color: #dd0031;
      padding: 2px 8px; border-radius: 12px;
      font-size: 12px; font-weight: bold;
    }
    main { padding: 20px; max-width: 1200px; margin: 0 auto; }
  `]
})
export class AppComponent {
  cartService = inject(CartService);
}


// === ROUTES ===

// app.routes.ts
import { Routes } from '@angular/router';
import { ProductListComponent } from './products/product-list.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products', component: ProductListComponent },
  { path: 'cart', component: CartComponent },
  { path: '**', redirectTo: '/products' }
];


// === BOOTSTRAP ===

// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)
  ]
}).catch(err => console.error(err));
````

</CollapsibleSection>

</ExerciseCard>

---

## Обобщение

<SuccessBox title="Какво научихте">

След тези упражнения трябва да можете да:

- ✓ Създавате standalone Angular компоненти
- ✓ Използвате signals за reactive state management
- ✓ Прилагате модерния control flow (@if, @for, @switch)
- ✓ Изграждате services с DI pattern
- ✓ Конфигурирате routing за SPA навигация
- ✓ Комуникирате между parent-child компоненти

</SuccessBox>
