JavaScript Basics
This section covers fundamental JavaScript concepts that form the foundation for understanding how JavaScript works. These concepts include:
Primitive vs Non-Primitive Data Types
var, let, and const
undefined, null, and not defined
Understanding these basics is important before moving on to advanced topics such as scope, closures, asynchronous programming, and prototypes.



Primitive vs Non-Primitive Data Types
In JavaScript, data types are broadly classified into Primitive and Non-Primitive (Reference) types.
The main difference between them lies in how values are stored in memory and how they are copied when assigned to another variable.

Primitive Data Types
Primitive data types store simple values directly in memory.
When a primitive value is assigned to another variable, the value itself is copied.

Primitive Types in JavaScript
Number
String
Boolean
Undefined
Null
Symbol
BigInt

Non-Primitive (Reference) Data Types
Non-primitive data types store references to memory locations rather than the actual value.

Examples include:
Objects
Arrays
Functions
When a non-primitive value is assigned to another variable, the reference is copied, not the value itself. 


var vs let vs const
In JavaScript, var, let, and const are used to declare variables, but they differ in terms of scope, redeclaration, and reassignment behavior.

var
var was the original way of declaring variables in JavaScript.
Characteristics
Function scoped
Allows redeclaration
Allows reassignment
Hoisted and initialized with undefined

let
let was introduced in ES6 (2015) to overcome some limitations of var.
Characteristics
Block scoped
Cannot be redeclared
Allows reassignment
Hoisted but placed in the Temporal Dead Zone (TDZ)

const
const is used to declare variables whose values should not be reassigned.
Characteristics
Block scoped
Cannot be redeclared
Cannot be reassigned
Must be initialized at the time of declaration
Important Note
If const is used with objects or arrays, their properties can still be modified, but the variable reference itself cannot change. 


Undefined vs Null vs Not Defined
In JavaScript, undefined, null, and not defined represent different states of variables.
Understanding these differences is important when debugging JavaScript programs.

Undefined
undefined means a variable has been declared but not assigned a value.
JavaScript automatically assigns undefined to such variables.

Null
null represents an intentional absence of value.
It is explicitly assigned by the developer.

Not Defined
A variable is not defined when it has never been declared in the program.
Accessing such a variable results in a ReferenceError.



Conclusion
Primitive and non-primitive data types define how values are stored and copied in memory.
Understanding var, let, and const helps manage variable scope and reassignment safely.
Knowing the difference between undefined, null, and not defined helps prevent common JavaScript errors and improves debugging skills.
These concepts form the foundation of JavaScript programming and are essential before moving on to more advanced topics.