JavaScript Hoisting

Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their scope during the compilation phase before the code is executed.
This means that variables and functions can sometimes be accessed before they are declared in the code.
However, the behavior of hoisting differs depending on how the variable or function is declared.

1. var Hoisting
Variables declared with var are hoisted and initialized with undefined.
This means the variable exists in memory before the line where it is declared, but its value is undefined until the assignment occurs.

2. let and const Hoisting
Variables declared with let and const are also hoisted, but they are not initialized immediately.
Instead, they remain in a special state called the Temporal Dead Zone (TDZ) until the line where they are declared.
Accessing them before declaration results in a ReferenceError.

3. Function Hoisting
Function declarations are fully hoisted, meaning the entire function definition is moved to the top of the scope.
Because of this, functions can be called before they are defined in the code.

4. Temporal Dead Zone (TDZ)
The Temporal Dead Zone is the time between when a variable is hoisted and when it is initialized.
During this period, the variable cannot be accessed.

Conclusion
Hoisting is an important concept in JavaScript that explains why variables and functions behave differently when accessed before declaration.
var is hoisted and initialized with undefined.
let and const are hoisted but remain in the Temporal Dead Zone until initialized.
Function declarations are fully hoisted and can be called before they appear in the code.
Understanding hoisting helps developers avoid unexpected bugs and write more predictable JavaScript code.