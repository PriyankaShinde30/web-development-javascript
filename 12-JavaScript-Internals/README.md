JavaScript Internals
JavaScript internals describe how the JavaScript engine processes code behind the scenes. These concepts help developers understand how JavaScript manages memory, executes code, compares values, and handles variable scope.
Understanding these internal mechanisms allows developers to write more efficient and predictable JavaScript programs.
This section covers:
Equality Comparison
Garbage Collection
JavaScript Single-Threaded Nature
Lexical Environment
Strict Mode
Type Coercion vs Type Conversion

Equality Comparison
JavaScript provides two main operators for comparing values.

Loose Equality (==)
Characteristics:
Performs type coercion before comparison.
Converts operands to a common type.
Can produce unexpected results if types differ.

Strict Equality (===)
Characteristics:
Does not perform type coercion.
Values must have the same type and value.
Safer and recommended for most comparisons.

Garbage Collection
Garbage collection is the process used by JavaScript engines to automatically free memory that is no longer needed.
Key characteristics:
Removes objects that are no longer reachable.
Prevents memory leaks.
Happens automatically without developer intervention.
Most modern JavaScript engines use the Mark and Sweep algorithm:
The engine marks all reachable objects.
Unreachable objects are considered garbage.

Garbage objects are removed from memory.
JavaScript Single-Threaded Nature
JavaScript is a single-threaded programming language, meaning it executes one task at a time using a single call stack.
Characteristics:
Only one operation executes at a time.
Code is executed sequentially.
Long-running tasks can block execution.
To handle asynchronous operations efficiently, JavaScript uses:
Event Loop
Callback Queue
Microtask Queue
These mechanisms allow JavaScript to perform non-blocking operations while remaining single-threaded.

Lexical Environment
A lexical environment is the structure that stores variables and functions defined in a specific scope.
Characteristics:
Created whenever a function is executed.
Determines how variables are resolved during execution.
Follows lexical scoping rules, meaning scope is determined by where code is written.
Inner functions can access variables from their outer functions because they share the same lexical environment.
This concept is also the foundation for closures.

Strict Mode
Strict mode is a special JavaScript mode that enables stricter parsing and error handling.
It is enabled using:
"use strict";
Characteristics:
Prevents the use of undeclared variables.
Eliminates silent errors.
Disallows certain unsafe language features.
Improves code security and reliability.
Strict mode helps developers write cleaner and more predictable JavaScript code.

Type Coercion vs Type Conversion
JavaScript can change data types automatically or manually.
Type Coercion
Automatic conversion performed by JavaScript.
Occurs during operations involving different data types.
Type Conversion
Explicit conversion performed by the developer.
Done using functions such as:
Number()
String()
Boolean()
Type conversion provides more control over how values are transformed.

Key Takeaways
JavaScript internals explain how the engine executes and manages code.
Loose equality performs type coercion, while strict equality does not.
Garbage collection automatically removes unused memory.
JavaScript is single-threaded and executes tasks sequentially.
Lexical environments determine how variables are scoped and accessed.
Strict mode enforces safer coding practices.
Type coercion is automatic, while type conversion is explicit.

Conclusion
Understanding JavaScript internals helps developers gain deeper insight into how the language operates behind the scenes. Concepts such as memory management, lexical environments, and type handling are essential for writing efficient, predictable, and maintainable JavaScript applications.