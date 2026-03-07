JavaScript Event System
The JavaScript event system allows web pages to respond to user interactions such as clicks, keyboard input, mouse movement, and form submissions. Events are handled using event listeners, which execute functions when specific events occur.
Understanding how events propagate through the DOM is essential for building interactive web applications.
This section covers:
    Event Propagation
    Event Bubbling
    Event Capturing
    Event Delegation
    stopPropagation()

Event Propagation
Event propagation describes how events travel through the DOM hierarchy when an event occurs.
When an event is triggered on an element, it does not stay limited to that element. Instead, it moves through different phases of the DOM.
Event propagation consists of three phases:
    Capturing Phase – the event travels from the root of the DOM down to the target element.
    Target Phase – the event reaches the element where it occurred.
    Bubbling Phase – the event travels from the target element back up to the root.

Event Bubbling
Event bubbling is the default behavior of most DOM events.
Characteristics:
    The event starts at the target element.
    It then propagates upward through its parent elements.
    Each parent element can handle the event if it has a registered listener.
Event bubbling allows multiple elements in the DOM hierarchy to respond to the same event.

Event Capturing
Event capturing is the opposite of event bubbling.
Characteristics:
    The event travels from the outermost element down to the target element.
    It occurs before the bubbling phase.
    Capturing must be explicitly enabled when adding an event listener.

stopPropagation()
The stopPropagation() method is used to prevent an event from continuing its propagation through the DOM.
Characteristics:
    Stops the event from moving to parent elements.
    Prevents additional event listeners in the propagation chain from executing.
Use cases:
    Preventing unintended parent event handlers
    Controlling complex event flows in nested elements

Event Delegation
Event delegation is a technique where a single event listener is attached to a parent element to handle events for multiple child elements.
Instead of attaching event listeners to each child element individually, the parent listens for events that bubble up from its children.
Advantages:
    Improves performance
    Reduces the number of event listeners
    Works well for dynamically added elements
This technique uses the event.target property to determine which child element triggered the event.

Key Takeaways
JavaScript events allow web applications to respond to user interactions.
Event propagation consists of capturing, target, and bubbling phases.
Event bubbling is the default event flow in the DOM.
Event capturing allows events to be intercepted before reaching the target.
stopPropagation() stops events from moving further in the propagation chain.
Event delegation improves performance by using a single listener for multiple elements.

Conclusion
The JavaScript event system is a core part of building interactive web applications. Understanding how events propagate through the DOM and how techniques like event delegation work allows developers to write efficient and maintainable event-handling code.