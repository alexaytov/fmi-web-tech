---
sidebar_position: 2
slug: exercises
title: "Упражнения"
tags: [exercises, practice, three-tier-architecture, web-architecture]
---

import ExerciseCard from '@site/src/components/Exercise/ExerciseCard';
import ProgressTracker from '@site/src/components/Exercise/ProgressTracker';
import CollapsibleSection from '@site/src/components/CollapsibleSection';
import InfoBox from '@site/src/components/InfoBoxes/InfoBox';
import WarningBox from '@site/src/components/InfoBoxes/WarningBox';
import SuccessBox from '@site/src/components/InfoBoxes/SuccessBox';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Exercises: Three-Tier Architecture in Web Applications

<img src={useBaseUrl('/img/diagrams/three-tier/exercises-header.svg')} alt="Three-Tier Architecture Exercises Header" style={{width: '100%', maxWidth: '800px', margin: '20px auto', display: 'block'}} />

<ProgressTracker />

---

## Лесни Упражнения (EASY)

<ExerciseCard difficulty="easy">

### Exercise 1: Three Tiers Identification

What are the three tiers in three-tier architecture? List each tier and provide one sentence describing its primary responsibility.

<CollapsibleSection title="✅ Solution">

<img src={useBaseUrl('/img/diagrams/three-tier/ex1-three-tiers.svg')} alt="Three Tiers Diagram" style={{width: '100%', maxWidth: '600px', margin: '20px auto', display: 'block'}} />

1. **Presentation Tier** - Responsible for displaying information to users and gathering their input through the user interface.
2. **Application/Business Logic Tier** - Processes business rules, handles data validation, and orchestrates communication between tiers.
3. **Data Tier** - Manages data storage, retrieval, and persistence in databases or other storage systems.

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="easy">

### Exercise 2: Multiple Choice - User Interface Tier

Which tier is responsible for displaying information to the user and gathering their input?

A) Data Tier
B) Application/Business Logic Tier
C) Presentation Tier
D) Network Tier

<CollapsibleSection title="✅ Solution">

**Answer: C) Presentation Tier**

<img src={useBaseUrl('/img/diagrams/three-tier/ex2-multiple-choice.svg')} alt="Multiple Choice Answer" style={{width: '100%', maxWidth: '500px', margin: '20px auto', display: 'block'}} />

The Presentation Tier (also called the UI tier or client tier) is specifically designed to handle all user interactions, including displaying data and collecting user input.

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="easy">

### Exercise 3: True or False - Direct Database Access

True or False - In three-tier architecture, the presentation tier can directly query the database to retrieve user information.

<CollapsibleSection title="✅ Solution">

**Answer: False**

<img src={useBaseUrl('/img/diagrams/three-tier/ex3-wrong-vs-correct.svg')} alt="Wrong vs Correct Approach" style={{width: '100%', maxWidth: '600px', margin: '20px auto', display: 'block'}} />

In proper three-tier architecture, the presentation tier should **never** directly access the database. All data requests must go through the Application/Business Logic Tier, which then communicates with the Data Tier. This separation ensures:
- Security (credentials not exposed to client)
- Centralized business logic
- Easier maintenance and scalability

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="easy">

### Exercise 4: Technology Matching

Match each technology to its most appropriate tier:

| Technology | Tier |
|------------|------|
| 1. MySQL | A. Presentation |
| 2. React | B. Application/Business Logic |
| 3. Node.js with Express | C. Data |

<CollapsibleSection title="✅ Solution">

<img src={useBaseUrl('/img/diagrams/three-tier/ex4-technology-matching.svg')} alt="Technology Matching" style={{width: '100%', maxWidth: '650px', margin: '20px auto', display: 'block'}} />

| Technology | Tier |
|------------|------|
| 1. MySQL | **C. Data** |
| 2. React | **A. Presentation** |
| 3. Node.js with Express | **B. Application/Business Logic** |

**Explanation:**
- **MySQL** is a relational database management system → Data Tier
- **React** is a frontend JavaScript library for building UIs → Presentation Tier
- **Node.js with Express** is a backend framework for APIs → Application Tier

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="easy">

### Exercise 5: Fill in the Blanks

Fill in the blanks: The core principle driving three-tier architecture is called **____________ of ____________**, meaning each tier handles a specific set of responsibilities distinct from the others.

<CollapsibleSection title="✅ Solution">

**Answer: Separation of Concerns**

<img src={useBaseUrl('/img/diagrams/three-tier/ex5-separation-of-concerns.svg')} alt="Separation of Concerns" style={{width: '100%', maxWidth: '600px', margin: '20px auto', display: 'block'}} />

This fundamental principle ensures that:
- Each tier has a single, well-defined responsibility
- Changes to one tier don't require changes to others
- Teams can work independently on different tiers
- Testing and maintenance become easier

</CollapsibleSection>

</ExerciseCard>

---

## Средни Упражнения (MEDIUM)

<ExerciseCard difficulty="medium">

### Exercise 6: Login Flow Data Path

Describe the complete data flow when a user submits a login form in a three-tier web application. Include all six steps from user interaction to the final response displayed.

<CollapsibleSection title="💡 Hint">

Think about each tier's role: Where does the user interact? Where is the password validated? Where is user data stored?

</CollapsibleSection>

<CollapsibleSection title="✅ Solution">

<img src={useBaseUrl('/img/diagrams/three-tier/ex6-login-flow.svg')} alt="Login Flow Diagram" style={{width: '100%', maxWidth: '700px', margin: '20px auto', display: 'block'}} />

**Complete Login Data Flow:**

1. **User Interaction (Presentation):** User enters username and password in the login form and clicks "Submit"

2. **Request to Server (Presentation → Application):** The frontend sends an HTTP POST request with credentials to the API endpoint (e.g., `/api/auth/login`)

3. **Business Logic Processing (Application):** The backend validates input format and hashes the password

4. **Database Query (Application → Data):** The database searches for the user and returns the stored password hash

5. **Authentication Decision (Application):** The backend compares password hashes, generates a session token/JWT if valid

6. **Response Display (Presentation):** The frontend stores the token (if successful), redirects to dashboard or shows error message

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium">

### Exercise 7: Architectural Violation Analysis

A developer writes the following code in their React component (Presentation Tier):

```javascript
const getUserData = async (userId) => {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password123',
    database: 'users_db'
  });
  const result = await connection.query(`SELECT * FROM users WHERE id = ${userId}`);
  return result;
}
```

Identify what architectural violation is occurring here and explain why this is problematic. How should this be restructured?

<CollapsibleSection title="💡 Hint">

Consider: Where should database connections live? What security risks exist? What happens if database credentials change?

</CollapsibleSection>

<CollapsibleSection title="✅ Solution">

<img src={useBaseUrl('/img/diagrams/three-tier/ex7-architectural-violation.svg')} alt="Architectural Violation Analysis" style={{width: '100%', maxWidth: '700px', margin: '20px auto', display: 'block'}} />

**Violations Identified:**

1. **Direct Database Access from Presentation Tier** - The frontend should never connect directly to the database

2. **Exposed Credentials** - Database credentials are hardcoded in client-side code, visible to anyone

3. **SQL Injection Vulnerability** - String interpolation allows malicious SQL injection

4. **No Business Logic Layer** - Bypasses validation and authorization checks

**Correct Architecture:**

```javascript
// Presentation Tier (React)
const getUserData = async (userId) => {
  const response = await fetch(`/api/users/${userId}`, {
    headers: { 'Authorization': `Bearer ${token}` }
  });
  return response.json();
}

// Application Tier (Express)
app.get('/api/users/:id', authMiddleware, async (req, res) => {
  const user = await userService.findById(req.params.id);
  res.json(user);
});

// Data Tier (Repository)
class UserRepository {
  async findById(id) {
    return db.query('SELECT * FROM users WHERE id = ?', [id]);
  }
}
```

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium">

### Exercise 8: Three-Tier vs Monolithic Comparison

Compare and contrast three-tier architecture with a monolithic application. Provide at least three specific differences and explain when you might choose one approach over the other.

<CollapsibleSection title="✅ Solution">

<img src={useBaseUrl('/img/diagrams/three-tier/ex8-monolith-vs-three-tier.svg')} alt="Monolith vs Three-Tier Comparison" style={{width: '100%', maxWidth: '700px', margin: '20px auto', display: 'block'}} />

| Aspect | Monolithic | Three-Tier |
|--------|------------|------------|
| **Deployment** | Single deployable unit | Each tier deployed independently |
| **Scaling** | Scale entire application | Scale individual tiers as needed |
| **Development** | All code in one codebase | Separate codebases possible |
| **Complexity** | Simpler initial setup | More infrastructure overhead |
| **Team Structure** | Single team manages all | Teams can specialize by tier |

**Choose Monolithic When:**
- Building MVP or prototype
- Small team (1-5 developers)
- Simple application requirements

**Choose Three-Tier When:**
- Application will scale significantly
- Multiple teams working simultaneously
- Need independent scaling of components

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium">

### Exercise 9: Black Friday Scaling Scenario

An e-commerce website experiences a sudden spike in traffic during a Black Friday sale. The database is handling queries efficiently, but users are experiencing slow page loads. Using your knowledge of three-tier architecture, which tier(s) would you scale and how? Justify your answer.

<CollapsibleSection title="💡 Hint">

If the database is fine but pages are slow, where is the bottleneck? Consider what happens between user request and database query.

</CollapsibleSection>

<CollapsibleSection title="✅ Solution">

**Primary Scaling Target: Application Tier and Presentation Tier**

<img src={useBaseUrl('/img/diagrams/three-tier/ex9-horizontal-scaling.svg')} alt="Horizontal Scaling Architecture" style={{width: '100%', maxWidth: '700px', margin: '20px auto', display: 'block'}} />

**Reasoning:**
Since the database is performing well, the bottleneck is likely in:

1. **Application Tier (Backend):**
   - Add more server instances behind a load balancer
   - Implement horizontal scaling with auto-scaling groups
   - Add caching layer (Redis/Memcached) to reduce redundant processing

2. **Presentation Tier (Frontend):**
   - Deploy static assets to CDN (Content Delivery Network)
   - Enable browser caching for static resources
   - Implement server-side rendering caching

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium">

### Exercise 10: Three-Tier vs Clean Architecture

Multiple Choice - What is the primary difference between Three-Tier Architecture and Clean Architecture?

A) Three-tier uses three layers while Clean Architecture uses only two
B) Three-tier focuses on deployment/scaling separation while Clean Architecture focuses on code organization and testability
C) Clean Architecture doesn't support databases
D) Three-tier is only for web applications while Clean Architecture is for mobile apps

<CollapsibleSection title="✅ Solution">

**Answer: B) Three-tier focuses on deployment/scaling separation while Clean Architecture focuses on code organization and testability**

<img src={useBaseUrl('/img/diagrams/three-tier/ex10-three-tier-vs-clean.svg')} alt="Three-Tier vs Clean Architecture" style={{width: '100%', maxWidth: '700px', margin: '20px auto', display: 'block'}} />

**Key Distinctions:**

| Three-Tier Architecture | Clean Architecture |
|------------------------|-------------------|
| **Physical separation** of concerns | **Logical separation** of concerns |
| Focuses on **deployment** | Focuses on **code structure** |
| Tiers can be on different servers | Layers within same application |
| Enables **horizontal scaling** | Enables **testability** |
| Infrastructure-oriented | Domain-oriented |

**They can be combined:** A three-tier deployment can use Clean Architecture principles within each tier for better code organization.

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="medium">

### Exercise 11: Monolithic Code Analysis

Given the following monolithic code snippet, identify which parts belong to each tier and create a table mapping each component:

```php
<?php
// Display product page
echo "<html><body>";
echo "<h1>Product Catalog</h1>";

// Connect to database
$conn = mysqli_connect("localhost", "user", "pass", "store");

// Get products
$result = mysqli_query($conn, "SELECT * FROM products WHERE price > 10");

// Apply 10% discount for logged-in users
if (isset($_SESSION['user_id'])) {
    $discount = 0.10;
} else {
    $discount = 0;
}

// Display products
while ($row = mysqli_fetch_assoc($result)) {
    $final_price = $row['price'] * (1 - $discount);
    echo "<div class='product'>";
    echo "<p>" . $row['name'] . " - $" . $final_price . "</p>";
    echo "</div>";
}

echo "</body></html>";
?>
```

<CollapsibleSection title="✅ Solution">

<img src={useBaseUrl('/img/diagrams/three-tier/ex11-monolithic-code-analysis.svg')} alt="Monolithic Code Analysis" style={{width: '100%', maxWidth: '700px', margin: '20px auto', display: 'block'}} />

| Code Lines | Tier | Responsibility |
|------------|------|----------------|
| `echo "<html><body>"`, `echo "<h1>..."` | **Presentation** | HTML structure and layout |
| `echo "<div class='product'>..."` | **Presentation** | Rendering product data |
| `mysqli_connect(...)` | **Data** | Database connection |
| `mysqli_query(...)`, `mysqli_fetch_assoc()` | **Data** | Data retrieval |
| `if (isset($_SESSION['user_id']))` | **Application** | Authorization check |
| `$discount = 0.10` logic | **Application** | Business rule (pricing) |
| `$final_price = ...` | **Application** | Business calculation |

**Problems with this approach:**
- All tiers mixed in single file
- No separation of concerns
- Difficult to test individual components
- Cannot scale tiers independently
- Security vulnerabilities exposed

</CollapsibleSection>

</ExerciseCard>

---

## Трудни Упражнения (HARD)

<ExerciseCard difficulty="hard">

### Exercise 12: University Course Registration System Design

Design a three-tier architecture for a university course registration system. Your design should include:

1. Specific responsibilities for each tier
2. At least 3 API endpoints the Presentation Tier would call
3. At least 3 business rules that would be enforced in the Application Tier
4. The database tables/collections needed in the Data Tier
5. A diagram showing the data flow for a student registering for a course

<CollapsibleSection title="💡 Hint">

Consider: What information does a student need to see? What rules prevent invalid registrations? What data relationships exist?

</CollapsibleSection>

<CollapsibleSection title="✅ Solution">

<img src={useBaseUrl('/img/diagrams/three-tier/ex12-university-registration.svg')} alt="University Course Registration System" style={{width: '100%', maxWidth: '750px', margin: '20px auto', display: 'block'}} />

**1. Tier Responsibilities:**

| Tier | Responsibilities |
|------|------------------|
| **Presentation** | Student portal UI, course catalog display, registration forms, schedule view |
| **Application** | Authentication, enrollment validation, prerequisite checking, capacity management |
| **Data** | Student records, course catalog, enrollment history, schedule data |

**2. API Endpoints:**

```
GET  /api/courses                    - List available courses
GET  /api/courses/:id/sections       - Get sections for a course
POST /api/enrollments                - Register for a course
GET  /api/students/:id/schedule      - Get student's schedule
DELETE /api/enrollments/:id          - Drop a course
```

**3. Business Rules (Application Tier):**

1. **Prerequisite Validation:** Student must have completed all prerequisite courses with grade C or better
2. **Capacity Management:** Cannot exceed maximum class size; add to waitlist if full
3. **Credit Limit:** Students cannot register for more than 18 credits per semester
4. **Schedule Conflict:** Cannot enroll in courses with overlapping times

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="hard">

### Exercise 13: Banking Application Refactoring Plan

You are tasked with refactoring a legacy monolithic banking application into a three-tier architecture. The application currently handles: user authentication, account balance checks, fund transfers, transaction history, and fraud detection.

Create a detailed refactoring plan that includes:
- How you would phase the refactoring (using the Strangler Fig Pattern)
- Risk mitigation strategies during the transition
- How you would ensure zero downtime during migration

<CollapsibleSection title="💡 Hint">

The Strangler Fig Pattern involves gradually replacing parts of the old system while keeping it running. Start with the least risky components.

</CollapsibleSection>

<CollapsibleSection title="✅ Solution">

<img src={useBaseUrl('/img/diagrams/three-tier/ex13-strangler-fig-pattern.svg')} alt="Strangler Fig Pattern - Migration Phases" style={{width: '100%', maxWidth: '750px', margin: '20px auto', display: 'block'}} />

**Phase-by-Phase Migration:**

| Phase | Duration | Focus | Risk Level |
|-------|----------|-------|------------|
| **Phase 1** | Weeks 1-4 | Infrastructure setup | Low |
| **Phase 2** | Weeks 5-8 | Read operations | Low |
| **Phase 3** | Weeks 9-16 | Auth & Transfers | High |
| **Phase 4** | Weeks 17-24 | Fraud & Cleanup | Medium |

**Zero Downtime Approach:**
1. Run both systems in parallel
2. Use feature flags to control routing
3. Gradual traffic shift with monitoring
4. Instant rollback capability

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="hard">

### Exercise 14: Critical Analysis - Startup Architecture Decision

A startup argues that three-tier architecture is unnecessary overhead for their new social media application because "Netflix started as a monolith."

Write a detailed response evaluating this argument. Consider:
- When this argument might be valid
- When this argument might be flawed
- A recommended approach with justification

<CollapsibleSection title="✅ Solution">

<img src={useBaseUrl('/img/diagrams/three-tier/ex14-startup-architecture-decision.svg')} alt="Startup Architecture Decision Analysis" style={{width: '100%', maxWidth: '700px', margin: '20px auto', display: 'block'}} />

**Analysis Summary:**

| Factor | Monolith OK | Three-Tier Needed |
|--------|-------------|-------------------|
| Team Size | 1-5 devs | 10+ devs |
| Growth | Predictable | Viral potential |
| Budget | Limited | Adequate |
| Timeline | MVP/Fast | Long-term product |

**Recommended Approach: Modular Monolith**

Start with a well-structured monolith that has clear internal boundaries. This gives you:
- Fast initial development
- Clear extraction path for later
- Best of both worlds

The startup's argument has merit for the initial phase, but they should plan the extraction path from day one and set scaling thresholds that trigger migration.

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="hard">

### Exercise 15: Ports and Adapters Implementation

Explain how you would implement "ports and adapters" within the Application Tier of a three-tier architecture to allow switching from a MySQL database to MongoDB without affecting business logic.

<CollapsibleSection title="💡 Hint">

Think of a "port" as an interface that your business logic depends on, and "adapters" as implementations that connect to specific technologies.

</CollapsibleSection>

<CollapsibleSection title="✅ Solution">

<img src={useBaseUrl('/img/diagrams/three-tier/ex15-ports-and-adapters.svg')} alt="Ports and Adapters Architecture" style={{width: '100%', maxWidth: '700px', margin: '20px auto', display: 'block'}} />

**Port (Interface) Definition:**

```typescript
// ports/UserRepository.ts - The "Port"
interface UserRepository {
  findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  save(user: User): Promise<User>;
  delete(id: string): Promise<void>;
}
```

**Adapter Implementations:**

```typescript
// MySQL Adapter
class MySQLUserRepository implements UserRepository {
  async findById(id: string): Promise<User | null> {
    const [rows] = await this.connection.execute(
      'SELECT * FROM users WHERE id = ?', [id]
    );
    return rows[0] ? this.mapToUser(rows[0]) : null;
  }
}

// MongoDB Adapter
class MongoUserRepository implements UserRepository {
  async findById(id: string): Promise<User | null> {
    const doc = await this.collection.findOne({ _id: id });
    return doc ? this.mapToUser(doc) : null;
  }
}
```

**Benefits:**
- Technology independence
- Easy testing with mock adapters
- Gradual migration support
- Clean domain focus

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="hard">

### Exercise 16: Food Delivery Application Architecture

Design and document a complete three-tier architecture for a food delivery application (similar to Uber Eats or DoorDash).

<CollapsibleSection title="✅ Solution">

<img src={useBaseUrl('/img/diagrams/three-tier/ex16-food-delivery.svg')} alt="Food Delivery System Architecture" style={{width: '100%', maxWidth: '750px', margin: '20px auto', display: 'block'}} />

**Key Components:**

| Tier | Components | Technologies |
|------|------------|--------------|
| **Presentation** | Customer App, Restaurant Dashboard, Driver App | React Native, React |
| **Application** | Order Service, Payment Service, Tracking Service | Node.js, WebSocket |
| **Data** | Users, Orders, Restaurants, Payments, Locations | PostgreSQL, Redis |

**Business Rules:**
- Delivery radius validation
- Dynamic pricing during peak hours
- Driver assignment algorithm
- Real-time order tracking via WebSocket

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="hard">

### Exercise 17: Debugging Order Duplication

A three-tier application is experiencing intermittent failures where some user orders are being duplicated in the database. The system logs show:

```
[Presentation] Order submitted: ORDER-12345
[Application] Processing order: ORDER-12345
[Application] Timeout waiting for Data Tier response
[Application] Retrying order: ORDER-12345
[Data] INSERT order ORDER-12345 - Success
[Data] INSERT order ORDER-12345 - Success (duplicate)
```

1. Explain what architectural issue is causing this problem
2. Propose at least two different solutions at different tiers
3. How would you prevent this in the future?

<CollapsibleSection title="✅ Solution">

<img src={useBaseUrl('/img/diagrams/three-tier/ex17-order-duplication.svg')} alt="Order Duplication Bug Analysis" style={{width: '100%', maxWidth: '700px', margin: '20px auto', display: 'block'}} />

**Root Cause:** The timeout occurs before the database response, but the INSERT actually succeeds. The retry then creates a duplicate.

**Solutions:**

| Tier | Solution | Benefit |
|------|----------|---------|
| **Data** | `UNIQUE (order_id)` constraint | Guaranteed no duplicates |
| **Application** | Idempotency key + Redis cache | Fast rejection, no DB hit |
| **Presentation** | Disable submit button | Prevents double-click |

**Best Practice:** Use **all three** for defense in depth!

</CollapsibleSection>

</ExerciseCard>

---

<ExerciseCard difficulty="hard">

### Exercise 18: Architecture Comparison - Add to Cart

Compare how the same feature—"User adds item to shopping cart"—would be implemented in:

A) Monolithic architecture
B) Three-tier architecture
C) Microservices architecture

For each, describe code organization and scaling implications.

<CollapsibleSection title="✅ Solution">

<img src={useBaseUrl('/img/diagrams/three-tier/ex18-architecture-comparison.svg')} alt="Architecture Comparison - Add to Cart" style={{width: '100%', maxWidth: '750px', margin: '20px auto', display: 'block'}} />

**Decision Matrix:**

| Factor | Monolith | Three-Tier | Microservices |
|--------|----------|------------|---------------|
| Team Size | 1-5 | 5-15 | 15+ |
| Time to Market | ⭐⭐⭐ | ⭐⭐ | ⭐ |
| Scalability | ⭐ | ⭐⭐ | ⭐⭐⭐ |
| Maintainability | ⭐ | ⭐⭐ | ⭐⭐⭐ |
| Complexity | Low | Medium | High |

**Recommendation:** Start with **Three-Tier** as the default choice. It offers the best balance of simplicity and scalability for most applications.

</CollapsibleSection>

</ExerciseCard>
