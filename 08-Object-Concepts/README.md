JavaScript Object Concepts
Objects are one of the most fundamental data structures in JavaScript. They allow developers to store and organize data using key-value pairs. Understanding how objects behave in memory and how they are copied or referenced is important for writing efficient JavaScript code.
This section covers important object-related concepts including pass by value vs reference, object creation methods, shallow vs deep copy, and flattening nested objects.

Pass by Value vs Pass by Reference
JavaScript handles primitive values and objects differently when they are assigned or passed to functions.
Pass by Value
-Primitive data types such as numbers, strings, booleans, null, undefined, symbol, and bigint are passed by value.
-When a primitive value is assigned to another variable, a copy of the value is created.
-Changing the copied value does not affect the original variable.

Pass by Reference
-Objects and arrays are passed by reference.
-Instead of copying the actual object, JavaScript copies the reference (memory address).
-Multiple variables can point to the same object in memory.
-Modifying the object through one reference affects the original object

Object Creation Methods
JavaScript provides multiple ways to create objects.
Common methods include:
-Object literal syntax
-Object constructor
-Constructor functions
-Object.create()
-ES6 classes
Each method allows developers to structure objects differently depending on the use case.

Shallow Copy vs Deep Copy
Copying objects in JavaScript can behave differently depending on how the copy is created.

Shallow Copy
-A shallow copy duplicates only the top-level properties of an object.
-Nested objects are still referenced from the original object.
-If a nested object is modified, the change affects both the original and copied objects.

Common shallow copy techniques:
-Spread operator
-Object.assign()

Deep Copy
-A deep copy duplicates all levels of the object, including nested objects.
-The copied object becomes completely independent of the original.
-Changes made to the copied object do not affect the original object.
Deep copies can be created using techniques such as structured cloning or serialization methods.

Flattening Nested Objects
Flattening an object means converting a nested object structure into a single-level object.
Characteristics:
-Nested keys are combined to form a single key path.
-Useful when working with APIs, configuration objects, or data transformation.
-Helps simplify complex object structures.
Flattening is often implemented using recursion, where nested properties are traversed and converted into a flattened structure.

Key Takeaways
-Objects store data using key-value pairs.
-Primitive values are copied by value, while objects are copied by reference.
-JavaScript provides multiple methods to create objects.
-Shallow copies duplicate only top-level properties.
-Deep copies duplicate the entire object structure.
-Flattening objects simplifies nested data structures.

Conclusion
Understanding object behavior in JavaScript is essential for managing data effectively. Concepts such as reference behavior, object creation, and object copying help developers avoid unintended side effects and write more reliable code. These concepts are widely used in real-world applications when handling complex data structures.