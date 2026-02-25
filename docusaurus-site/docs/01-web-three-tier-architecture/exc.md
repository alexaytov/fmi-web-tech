# Exercises: Three-Tier Architecture in Web Applications

---

## EASY LEVEL

**Exercise 1 [EASY]:** What are the three tiers in three-tier architecture? List each tier and provide one sentence describing its primary responsibility.

---

**Exercise 2 [EASY]:** Multiple Choice - Which tier is responsible for displaying information to the user and gathering their input?

A) Data Tier  
B) Application/Business Logic Tier  
C) Presentation Tier  
D) Network Tier

---

**Exercise 3 [EASY]:** True or False - In three-tier architecture, the presentation tier can directly query the database to retrieve user information.

---

**Exercise 4 [EASY]:** Match each technology to its most appropriate tier:

| Technology | Tier |
|------------|------|
| 1. MySQL | A. Presentation |
| 2. React | B. Application/Business Logic |
| 3. Node.js with Express | C. Data |

---

**Exercise 5 [EASY]:** Fill in the blanks: The core principle driving three-tier architecture is called **____________ of ____________**, meaning each tier handles a specific set of responsibilities distinct from the others.

---

## MEDIUM LEVEL

**Exercise 6 [MEDIUM]:** Describe the complete data flow when a user submits a login form in a three-tier web application. Include all six steps from user interaction to the final response displayed.

---

**Exercise 7 [MEDIUM]:** A developer writes the following code in their React component (Presentation Tier):

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

---

**Exercise 8 [MEDIUM]:** Compare and contrast three-tier architecture with a monolithic application. Provide at least three specific differences and explain when you might choose one approach over the other.

---

**Exercise 9 [MEDIUM]:** An e-commerce website experiences a sudden spike in traffic during a Black Friday sale. The database is handling queries efficiently, but users are experiencing slow page loads. Using your knowledge of three-tier architecture, which tier(s) would you scale and how? Justify your answer.

---

**Exercise 10 [MEDIUM]:** Multiple Choice - What is the primary difference between Three-Tier Architecture and Clean Architecture?

A) Three-tier uses three layers while Clean Architecture uses only two  
B) Three-tier focuses on deployment/scaling separation while Clean Architecture focuses on code organization and testability  
C) Clean Architecture doesn't support databases  
D) Three-tier is only for web applications while Clean Architecture is for mobile apps

---

**Exercise 11 [MEDIUM]:** Given the following monolithic code snippet, identify which parts belong to each tier and create a table mapping each component:

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

---

## HARD LEVEL

**Exercise 12 [HARD]:** Design a three-tier architecture for a university course registration system. Your design should include:

1. Specific responsibilities for each tier
2. At least 3 API endpoints the Presentation Tier would call
3. At least 3 business rules that would be enforced in the Application Tier
4. The database tables/collections needed in the Data Tier
5. A diagram showing the data flow for a student registering for a course

---

**Exercise 13 [HARD]:** You are tasked with refactoring a legacy monolithic banking application into a three-tier architecture. The application currently handles: user authentication, account balance checks, fund transfers, transaction history, and fraud detection.

Create a detailed refactoring plan that includes:
- How you would phase the refactoring (using the Strangler Fig Pattern)
- Risk mitigation strategies during the transition
- How you would ensure zero downtime during migration
- Interface contracts between the tiers

---

**Exercise 14 [HARD]:** Critical Analysis - A startup argues that three-tier architecture is unnecessary overhead for their new social media application because "Netflix started as a monolith." 

Write a detailed response evaluating this argument. Consider:
- When this argument might be valid
- When this argument might be flawed
- Specific factors about the social media domain that should influence the decision
- A recommended approach with justification

---

**Exercise 15 [HARD]:** Explain how you would implement "ports and adapters" within the Application Tier of a three-tier architecture to allow switching from a MySQL database to MongoDB without affecting business logic. Provide:

1. A code example (pseudocode is acceptable) showing the port (interface) definition
2. Adapter implementations for both MySQL and MongoDB
3. How the business logic would use these abstractions
4. The benefits this provides beyond basic three-tier separation

---

**Exercise 16 [HARD]:** Practical Exercise - Design and document a complete three-tier architecture for a food delivery application (similar to Uber Eats or DoorDash). Your documentation must include:

1. **Presentation Tier:**
   - List of screens/views needed
   - Client-side validation rules
   - API calls made to the Application Tier

2. **Application Tier:**
   - All business rules for ordering, payments, and delivery tracking
   - How real-time order tracking would be handled
   - Authentication and authorization logic

3. **Data Tier:**
   - Complete database schema (at least 6 tables with relationships)
   - Indexing strategy for performance
   - Data consistency considerations for concurrent orders

4. **Scaling Strategy:**
   - How each tier would scale during peak dinner hours
   - Potential bottlenecks and solutions

5. **Security Considerations:**
   - Security measures at each tier
   - How payment data would be protected

---

**Exercise 17 [HARD]:** Debugging Scenario - A three-tier application is experiencing intermittent failures where some user orders are being duplicated in the database. The system logs show:

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
3. Discuss which solution is most appropriate and why
4. How would you modify the interfaces between tiers to prevent this in the future?

---

**Exercise 18 [HARD]:** Compare how the same feature—"User adds item to shopping cart"—would be implemented in:

A) A monolithic architecture  
B) Three-tier architecture  
C) Clean Architecture within a three-tier deployment  
D) Microservices architecture

For each, describe:
- Code organization
- How components communicate
- Testing approach
- Scaling implications
- Maintenance considerations

Create a decision matrix to help a development team choose between these approaches based on different project requirements.