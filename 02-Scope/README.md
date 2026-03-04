JavaScript Scope
Scope in JavaScript determines where variables are accessible within a program.
It defines the visibility and lifetime of variables.

JavaScript has the following types of scope:
Global Scope
Function Scope
Block Scope
Scope Chaining
Variable Shadowing
Understanding scope is important for managing variables properly and avoiding unexpected behavior in programs.
JavaScript Scope
Scope in JavaScript determines where variables are accessible within a program.
It defines the visibility and lifetime of variables.

1. Global Scope
A variable declared outside any function or block is in the global scope.
Global variables can be accessed from anywhere in the program.

2. Function Scope
Variables declared inside a function are only accessible within that function.
This type of scope mainly applies to variables declared with var.

3. Block Scope
Block scope refers to variables declared inside a block of code {}.
Variables declared with let and const are block scoped.

4. Scope Chaining
JavaScript uses scope chaining to resolve variables.
When JavaScript cannot find a variable in the current scope, it searches the outer scope, continuing until the global scope is reached.

5. Variable Shadowing
Variable shadowing occurs when a variable declared in an inner scope has the same name as a variable in an outer scope.
The inner variable overrides (shadows) the outer variable within its scope.


Conclusion
Scope is a fundamental concept in JavaScript that controls how variables are accessed and used in different parts of a program. Understanding scope helps prevent variable conflicts and improves code maintainability.