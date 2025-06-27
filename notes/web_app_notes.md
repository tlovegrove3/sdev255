### Window object

JavaScript running in a web browser has access to the window object, which represents an open browser window. In a tabbed browser, each tab has a `window` object. The `document` object is a property of the `window` object and can be accessed as `window.document` or just `document`. Other properties of the `window` object include:

- window.location is a location object that contains information about the window's current URL. Ex: `window.location.hostname` is the URL's hostname.

- window.navigator is a navigator object that contains information about the browser. Ex: `window.navigator.userAgent` returns the browser's user agent string.

- window.innerHeight and window.innerWidth are the height and width in pixels of the window's content area. Ex: `window.innerWidth` returns 600 if the browser's content area is 600 pixels wide.

The `window` object defines some useful methods:

- window.alert() displays an alert dialog box. Ex: `window.alert("Hello")` displays a dialog box with the message "Hello".

- window.confirm() displays a confirmation dialog box with OK and Cancel buttons. `confirm()` returns true if OK is pressed and false if Cancel is pressed. Ex: `window.confirm("Are you sure?")` displays a dialog box with the question.

- window.open() opens a new browser window. Ex: `window.open("https://www.twitter.com/")` opens a new browser that loads the Twitter webpage.
-

The browser provides a `console` object with a defined set of methods, or API, that the `console` object supports. An API (Application Programming Interface) is a specification of the methods and objects that defines how a programmer should interact with software components. The console API includes the following methods:

- console.log() displays informational data to the console.

- console.warn() displays warnings to the console. The browser usually has a special indicator to differentiate a warning from the standard log message. Ex: A yellow warning box.

- console.error() displays errors to the console. The browser usually has a special indicator to differentiate an error from a warning or the standard log message. Ex: A red error box.

- console.dir() displays a JavaScript object to the console. The browser usually supports a method for compactly representing the object. Ex: A hierarchical tree representation allowing a developer to expand and collapse the object contents.

Good practice is to use `<script>` elements to load JavaScript from an external file rather than writing the JavaScript directly within the HTML file. The `<script>` element's `src` attribute specifies a JavaScript file to load.

Example 2.7.1: Loading JavaScript from an external file.

---------------------------------------------------------

```
<script src\="bootstrap.js"\></script\>

```

Feedback?

A common error when loading an external JavaScript file is to forget the closing `</script>` tag or trying to use a self-closing `<script />` tag as in `<script src="bootstrap.js" />`. All modern browsers require a closing `</script>` tag.

### Loading JavaScript with async and defer

Although the `<script>` element can be included anywhere in the head or body, good practice is to include the `<script>` element in the head with the `async` or `defer` attributes set.

The `<script>` element's async attribute allows the browser to process the webpage concurrently with loading and processing the JavaScript.

The `<script>` element's defer attribute allows the browser to load the webpage concurrently with loading the JavaScript, but the JavaScript is not processed until the webpage is completely loaded.

To reduce the amount of JavaScript that must be downloaded from a web server, developers often minify a website's JavaScript. Minification or minimization is the process of removing unnecessary characters (like whitespace and comments) from JavaScript code so the code executes the same but with fewer characters. Minification software may also rename identifiers into shorter ones to reduce space. Ex: `let totalReturns = 10;` may be converted into `let a=10;`.

Minified JavaScript is typically stored in a file with a ".min.js" file extension. An example of minified code from the [Bootstrap project](http://getbootstrap.com/getting-started/) is shown below.

```
// Excerpt from bootstrap.min.js
a.fn.button\=b,a.fn.button.Constructor\=c,a.fn.button.noConflict\=function(){
return a.fn.button\=d,this},a(document).on("click.bs.button.data-api",
'\[data-toggle^="button"\]',function(c){let d\=a(c.target).closest(".btn");
b.call(d,"toggle"),a(c.target).is('input\[type\="radio"\],

```

A JavaScript obfuscator is software that converts JavaScript into an unreadable form that is very difficult to convert back into readable JavaScript. Developers obfuscate a website's JavaScript to prevent the code from being read or re-purposed by others. Obfuscated code may also be minified and appear in a ".min.js" file.

Exploring further:

- [Window object](https://developer.mozilla.org/en-US/docs/Web/API/Window) from MDN
- [Console object](https://developer.mozilla.org/en-US/docs/Web/API/Console) from MDN
- [async vs defer attributes](http://www.growingwiththeweb.com/2014/02/async-vs-defer-attributes.html) from Growing with the Web
- JavaScript minifiers: [javascript-minifier.com](https://javascript-minifier.com/) and [jscompress.com](https://jscompress.com/)
- JavaScript obfuscators: [javascriptobfuscator.com](https://javascriptobfuscator.com//) and [JS-obfus](http://stunnix.com/prod/jo/)

## 2.9 Document Object Model (DOM)

### DOM structure

The Document Object Model (DOM) is a data structure corresponding to the HTML document displayed in a web browser. A DOM tree is a visualization of the DOM data structure. A node is an individual object in the DOM tree. Nodes are created for each element, the text between an element's tags, and the element's attributes.

- The root node is the node at the top of the DOM.
- A child node is the node directly under another node. A node can have zero, one, or more child nodes (children).
- A parent node is the node directly above another node. All nodes, except the root node, have one parent node.

Viewing the DOM in Chrome

--------------------------

The Chrome DevTools can display an HTML document's DOM by pressing Ctrl+Shift+C on Windows or Ctrl+Option+C on a Mac. The DOM may differ from the HTML. Ex: The `<head>` element may be missing from the HTML file but is visible in the DOM below because `<meta>` and `<title>` elements are always placed in the `<head>` element.

![Screenshot of Chrome DevTools showing the DOM for a webpage that did not include a head tag. However, the head tag is shown in the DevTool with meta and title children.](https://zytools.zybooks.com/zyAuthor/WebProgramming/72/IMAGES/6bcb447c-60d9-43cd-9cc6-2311966a9d09)

### Searching the DOM

JavaScript is commonly used to search the DOM for a specific node or set of nodes and then change the nodes' attributes or content. Ex: In an email application, the user may click a Delete button to delete an email. The JavaScript must search the DOM for the node containing the email's contents and then change the contents to read "Email deleted".

The `document` object provides five primary methods that search the DOM for specific nodes:

1. The document.getElementById() method returns the DOM node whose `id` attribute is the same as the method's parameter.
    Ex: `document.getElementById("early_languages")` returns the p node in the HTML below.

2. The document.getElementsByTagName() method returns an array of all the DOM nodes whose type is the same as the method's parameter.
    Ex: `document.getElementsByTagName("li")` returns an array containing the four li nodes from in the HTML below.

3. The document.getElementsByClassName() method returns an array containing all the DOM nodes whose `class` attribute matches the method's parameter.
    Ex: `document.getElementsByClassName("traditional")` returns an array containing the `ol` node with the `class` attribute matching the word traditional.

4. The document.querySelectorAll() method returns an array containing all the DOM nodes that match the CSS selector passed as the method's parameter.
    Ex: `document.querySelectorAll("li a")` returns an array containing the two anchor nodes in the HTML below.

5. The document.querySelector() method returns the first element found in the DOM that matches the CSS selector passed as the method's parameter. `querySelector()` expects the same types of parameters as `querySelectorAll()` but only returns the first element found while navigating the DOM tree in a depth-first traversal.
    Ex: `document.querySelector("li")` returns the li node about Fortran.

A DOM search method name indicates whether the method returns one node or an array of nodes. If the method name starts with "getElements" or ends in "All", then the method returns an array, even if the array contains one node or is empty. `getElementById()` and `querySelector()` either return a single node or null if no node matches the method arguments.

### Modifying DOM node attributes

After searching the DOM for an element, JavaScript may be used to examine the element's attributes or to change the attributes. By modifying attributes, JavaScript programs can perform actions including:

- Change which image is displayed by modifying an img element's `src` attribute.
- Determine which image is currently displayed by reading the img element's `src` attribute.
- Change an element's CSS styling by modifying an element's `style` attribute.

Every attribute for an HTML element has an identically named property in the element's DOM node. Ex: `<a href="https://www.nasa.gov/" id="nasa_link">NASA</a>` has a corresponding DOM node with properties named `href` and `id`. Each attribute property name acts as both a getter and a setter.

- Getter: Using the property name to read the value allows a program to examine the attribute's value. Ex: `nasaUrl = document.getElementById("nasa_link").href` assigns `nasaUrl` the string `"https://www.nasa.gov/"` from the anchor element's `href` attribute.

- Setter: Writing to a property allows a program to modify the attribute, which is reflected in the rendered webpage. Ex: `document.getElementById("nasa_link").href = "https://www.spacex.com/"` changes the element's hyperlink to the SpaceX URL.

An element's attribute can be removed using the element method removeAttribute(). Ex: `document.getElementById("nasa_link").removeAttribute("href")` removes the link from the anchor element so that clicking on the HTML element no longer performs an action.

### Modifying DOM node content

After searching the DOM for an element, JavaScript may be used to examine or change the element's content.

Two common properties are used to get or set an element's content:

1. The textContent property gets or sets a DOM node's text content. Ex: `document.querySelector("p").textContent = "$25.99";` changes the paragraph to `<p>$25.99</p>`.

2. The innerHTML property gets or sets a DOM node's content, including all of the node's children, using an HTML-formatted string. Ex: `document.querySelector("p").innerHTML = "<strong>$25.99</strong>";` changes the paragraph to `<p><strong>$25.99</strong></p>`.

The `innerHTML` property uses an internal parser to create any new DOM nodes. `textContent`, however, only creates or changes a single text node. For setting an element's text, `textContent` is somewhat faster than `innerHTML` because no HTML parsing is performed.

Less common ways to change node content

----------------------------------------

The nodeValue property gets or sets the value of text nodes. As the DOM tree represents textual content separately from HTML elements, the textual content of an HTML element is the first child node of the HTML element's node. So, to access the textual content of an HTML element within the DOM, `firstChild.nodeValue` is used to access the value of the HTML's element's first child.

Ex: `document.getElementById("saleprice").firstChild.nodeValue = "$25.99"`:

1. Gets the DOM node for the element with id "saleprice".
2. Uses `firstChild` to access the textual content node for the element.
3. Uses `nodeValue` to update the content.

The innerText property gets or sets a DOM node's rendered content. `innerText` is similar to `textContent`, but `innerText` is aware of how text is rendered in the browser. Ex: In `<p>Testing   one</p>`, `textContent` returns "Testing    one" with spaces, but `innerText` returns "Testing one" with the spaces collapsed into a single space.

Modify the DOM nodes.

----------------------

An HTML element using the hidden attribute is not displayed by the web browser.

Add JavaScript in the `changePage()` function so that clicking on the Use Current Astronomy button does the following:

1. Uses `removeAttribute()` to remove the `hidden` attribute from the paragraph with the id `p2`, causing the paragraph to become visible.

2. Uses the `textContent` property of the span with id `lastPlanet` to change the name of the farthest planet to "Neptune".

3. Uses the `innerHTML` property of the paragraph with id `p4` to add a link: `<a href="https://en.wikipedia.org/wiki/Pluto">Source</a>`

Use an appropriate DOM search method like `document.getElementById()` to access the DOM nodes.

--- START FILE: HTML ---

```html
<body>
   <h1>The farthest planet</h1>

   <p id="p1">Pluto was discovered in 1930 and designated as a planet.</p>
   <p id="p2" hidden>In 2006, Pluto was reclassified as a dwarf planet.</p>
   <p id="p3"><span id="lastPlanet">Pluto</span> is the farthest planet from the Sun.</p>
   <p id="p4"></p>

   <input type="button" value="Use Current Astronomy">
</body>
```

--- END FILE: HTML ---

--- START FILE: JavaScript ---

const button = document.getElementsByTagName["input"](0);
button.addEventListener("click", changePage);

function changePage() {
   let p = document.getElementById("p2");
   p.removeAttribute("hidden");
  
   let span = document.getElementById("lastPlanet");
   span.textContent = "Neptune";

   p = document.getElementById("p4");
   p.innerHTML = '<a href="https://en.wikipedia.org/wiki/Pluto">Source</a>';
}

--- END FILE: JavaScript ---

### Accessing nodes

The JavaScript object document.documentElement is the root of the DOM tree. Ex: `let html = document.documentElement;` assigns the `html` variable with the HTML document's root node.

DOM nodes have properties for accessing a node's parent, children, and siblings:

1. The parentNode property refers to the node's parent. Ex: In the figure below, the ol node is the `parentNode` for all li nodes.

2. The childNodes property is an array-like collection of objects for each of the node's children. Ex: In the figure below, the li nodes and whitespace text nodes are the ol node's `childNodes`.

3. The children property is similar to the `childNodes` except the array contains only element nodes and no text nodes. Ex: In the figure below, the li nodes are the ol node's `children`.

4. The nextElementSibling property refers to the element node with the same parent following the current node in the document. Ex: In the figure below, the ol node is the p node's `nextElementSibling`.

5. The previousElementSibling property refers to the element node with the same parent preceding the current node in the document. Ex: In the figure below, the p node is the ol node's `previousElementSibling`.

A common error is to use the `childNodes` property instead of the `children` property when iterating through the items of a list. The `children` property only contains the list items, while the `childNodes` property also contains the whitespace text nodes between the list items.

### Modifying the DOM structure

Various DOM node methods can change a node's location within the DOM or remove nodes:

- The appendChild() method appends a DOM node to the object's child nodes. The code below moves the ordered list's first list item to the last list item of the same ordered list.

    ```
    ol \= document.getElementsByTagName("ol")\[0\];
    li \= ol.getElementsByTagName("li")\[0\];
    ol.appendChild(li);

    ```

- The insertBefore() method inserts a DOM node as a child node before an object's existing child node. The code below moves the ordered list's first list item before the fourth list item.

    ```
    ol \= document.getElementsByTagName("ol")\[0\];
    items \= ol.getElementsByTagName("li");
    ol.insertBefore(items\[0\], items\[3\]);

    ```

- The removeChild() method removes a node from the object's children. The most common usage pattern is to get a DOM node, n, and call `removeChild()` on n's parent passing n as an argument. Ex: `n.parentNode.removeChild(n)`

The following methods are for creating new nodes or duplicating existing nodes:

- The `document` method createElement() returns a new element node, created from a string argument that names the HTML element. Ex: `document.createElement("p")` creates a new paragraph node.

- The `document` method createTextNode() returns a new text node containing the text specified by a string argument. Ex: `document.createTextNode("Hello there!")` creates the text node with "Hello there!", which can then be appended to an element node.

- The node method cloneNode() returns an identical copy of a DOM node. The method's boolean argument indicates whether the method should also clone the node's children. Ex: `x.cloneNode(true)` creates an identical tree rooted at x, but `x.cloneNode(false)` creates only a single node identical to x. A common error is to forget to modify any id attributes in the cloned tree. The `cloneNode()` method does not ensure that new nodes have unique id attributes.

After creating or cloning a node, the node does not appear in the webpage until the node is attached to the DOM tree. A programmer must use `appendChild()` or `insertBefore()` to add the new node to the existing DOM tree.

## 2.11 Event-driven programming

### Events and event handlers

An event is an action, usually caused by a user, that the web browser responds to. Ex: A mouse movement, a key press, or a network response from a web server. Typically, the occurrence and timing of an event are unpredictable, since the user or web server can perform an action at any time.

Event-driven programming is a programming style where code runs only in response to various events. Code that runs in response to an event is called an event handler or event listener.

The web browser supports event-driven programming to simplify handling the many events a webpage must process. When an event happens, the browser calls the event's specified handlers. The web browser internally implements the code for detecting events and executing event handlers.

The example below modifies an input's `style` property, which sets the element's inline CSS styles. The input's border color changes colors when the input receives the focus or when focus is removed.

```html
<p>
   <label for="name">Name:</label>
   <input type="text" id="name">   
</p>
<p>
   <label for="answer">Answer:</label>
   <input type="number" id="answer">
</p>
```

```js
let inputs = document.querySelectorAll("input");

for (let i = 0; i < inputs.length; i++) {
   let input = inputs[i];
   input.style.border = "1px solid red";
   input.addEventListener("focus", function() {
      this.style.border = "1px solid green";
   });
   input.addEventListener("blur", function() {
      this.style.border = "1px solid blue";
   });
}
```

The following are events for which web developers commonly write handlers:

- A change event is caused by an element value being modified. Ex: Selecting an item in a radio button group causes a change event.

- An input event is caused when the value of an input or textarea element is changed.

- A load event is caused when the browser completes loading a resource and dependent resources. Usually load is used with the body element to execute code once all the webpage's CSS, JavaScript, images, etc. have finished loading.

- A DOMContentLoaded event is caused when the HTML file has been loaded and parsed, although other related resources such as CSS, JavaScript, and image files may not yet be loaded.

- A focus event is caused when an element becomes the current receiver of keyboard input. Ex: Clicking in an input field causes a focus event.

- A blur event is caused when an element loses focus and the element will no longer receive future keyboard input.

- A submit event is caused when the user submits a form to the web server.

### Registering event handlers

Handlers are written in three ways:

1. Embedding the handler as part of the HTML. Ex: `<button onclick="clickHandler()">Click Me</button>` sets the click event handler for the button element by using the `onclick` attribute. The attribute name used to register the handler adds the prefix "on" to the event name. Ex: The attribute for a mousemove event is `onmousemove`. Embedding a handler in HTML mixes content and functionality and thus should be avoided whenever possible.

2. Setting the DOM node event handler property directly using JavaScript. Ex: `document.querySelector("#myButton").onclick = clickHandler` sets the click event handler for the element with an id of "myButton" by overwriting the `onclick` JavaScript property. Using DOM node properties is better than embedding handlers within the HTML but has the disadvantage that setting the property only allows one handler for that element to be registered.

3. Using the JavaScript addEventListener() method to register an event handler for a DOM object. Ex: `document.querySelector("#myButton").addEventListener("click", clickHandler)` registers a click event handler for the element with the id "myButton". Good practice is to use the  `addEventListener()` method whenever possible, rather than using element attributes or overwriting JavaScript properties. The `addEventListener()` method allows for separation of content and functionality and allows multiple handlers to be registered with an element for the same event.

Every handler has an optional event object parameter that provides details of the event. Ex: For a keyup event, the event object indicates which key was pressed and released, or for a click event, which element was clicked.

In the animation below, `keyupHandler()` uses `event.target` to access the text box object where the keyup event occurred. Inside an event handler, the `this` keyword refers to the element to which the handler is attached. So `event.target` and `this` both refer to the text box object in the event handler.

```html
<!DOCTYPE html>
<html>
  <title>Keyup Demo</title>
  <script>
    function loadedHandler() {        
   let textBox = document.querySelector("#name");
   textBox.addEventListener("keyup", keyupHandler);
}
        
    function keyupHandler(event) {
   if (event.key == "Enter") {
      let textBox = event.target;
      alert("Hello, " + textBox.value + "!");
   }
}
  </script>
  <body>
    <label for="id">Name?</label>
    <input type="text" id="name">
  </body>        
</html>
```

### Capturing, at target, and bubbling phases

When an event occurs, the browser follows a simple DOM traversal process to determine which handlers are relevant and need to be called. The DOM traversal process has three phases: capturing, at target, and bubbling.

1. In the event capturing phase, the browser traverses the DOM tree from the root to the event target node, at each node calling any event-specific handlers that were explicitly registered for activation during the capturing phase.

2. In the at target phase, the browser calls all event-specific handlers registered on the target node.

3. In the event bubbling phase, the browser traverses the DOM tree from the event target node back to the root node, at each node calling all event-specific handlers registered for the bubbling phase on the current node.

The optional third parameter for the `addEventListener()` method indicates whether the handler is registered for the capturing phase or bubbling phase. If the third parameter is `false` or not specified, or if the event handler is registered using any other mechanism, the browser registers the handler for the event bubbling phase. If the parameter is `true`, the browser registers the handler for the capturing phase.

Some events do not bubble, such as blur, focus, and change. When a non-bubbling event occurs, the browser will follow the event capturing phase, the at target phase, and then stop.

### Preventing default behavior

The event capturing and bubbling process can be stopped by calling the stopPropagation() method on the event object provided to the handler. Once `stopPropagation()` is called, the browser stops the traversal process but still calls relevant registered handlers on the current node.

A web developer may want to prevent the browser from using a built-in handler for an event. Ex: Whenever a user clicks a form's submit button, the web browser sends the form data to the web server. The event object's preventDefault() method stops the web browser from performing the built-in handler. The built-in handlers that are often prevented are clicking elements, submitting forms, and moving the mouse into or out of an element.

The example below uses two event handlers for the password textbox:

1. `preventSpaces()` is a keydown event handler that listens for key presses. If the space key is pressed, `event.preventDefault()` stops the space from appearing in the textbox.

2. `checkPassword()` is an input event handler that is called when the password input changes. `checkPassword()` displays Weak, Stronger, Moderate, or Strong in the `<span>` element depending on various criteria for the password.

Exploring further:

- [Event reference](https://developer.mozilla.org/en-US/docs/Web/Events) from MDN
- [EventTarget.addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) from MDN
- [Event flow tutorial](http://www.java2s.com/Tutorials/Javascript/DOM_Event/Event_Flow_capture_target_and_bubbling_in_Javascript.htm) from Java2s

## 3.1 Classes

### Constructor functions

A JavaScript class is a special function, called a constructor function, that defines properties and methods from which an object may inherit. A constructor function is a function that initializes a new object when an object is instantiated with the `new` operator. The this keyword refers to the current object and is used to access properties inside the class.

### Prototype object

Every JavaScript object is associated with a second object called the prototype. The prototype object contains properties that an associated object inherits when the associated object is created.

When an object is instantiated with the `new` keyword, the object is assigned the `prototype` property that is associated with the constructor function. Ex: When a date object is instantiated with `new Date()`, the date object is assigned the `Date.prototype` from the `Date` constructor function. All date objects have access to the same methods like `getDate()` and `getYear()` because `getDate()` and `getYear()` are methods assigned to `Date.prototype`.

Developers often assign methods to the class' `prototype` instead of the constructor function because prototype methods are more memory efficient. The JavaScript interpreter must allocate memory for each method defined in a constructor function, but a prototype method is only allocated memory once and is shared by all objects created with the same constructor function.

### Private properties and closures

A private property is a property that is only accessible to object methods but is not accessible from outside the class. Private properties may be simulated in JavaScript by creating local variables in a constructor function with getters and setters to get and set the properties.

Figure 3.1.2: Creating a private property called "secret" with a getter and setter.

```js
function Person(name, age) {
   this.name = name;
   this.age = age;

   // private
   let secret;

   // public methods have access to private properties
   this.setSecret = function(s) {
      secret = s;
   };

   this.getSecret = function() {
      return secret;
   };
};

let bob = new Person("Bob", 21);
bob.setSecret("I have mutant powers!");
console.log(bob.getSecret());   // I have mutant powers!
console.log(bob.secret);        // undefined
```

Private class variables can be simulated in JavaScript because of closures. A closure is a special object that is automatically created and maintains a function's local variables and values after the function has returned. The `secret` variable defined in the `Person` constructor function above is remembered because of a closure that remembers the `Person` constructor function's local variables.

### Inheritance

Inheritance creates a new child class that adopts properties of a parent class. Ex: A Student class (child) may inherit from a Person class (parent), so a Student class has the same properties of a Person and may add even more properties.

Implementing inheritance in JavaScript is more complicated than most other programming languages. For a child class to inherit from a parent class, 3 operations must be performed:

1.  The child class calls the parent class' constructor function from the child's constructor function using the `call()` method.

2.  The Object.create() method copies the parent's prototype, and the new copy is assigned to the child's prototype to give the child class the same functionality as the parent class.

3.  The child class' `prototype.constructor` is explicitly set to the child's constructor function.

```js
// Parent class
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function() {
  console.log("Hello. My name is " + this.name);
};
Person.prototype.sayGoodbye = function() {
  console.log("Goodbye!");
};

// Child class
function Student(name, gpa) {   
  Person.call(this, name);
  this.gpa = gpa;
}

// Duplicate functionality of parent
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

// Replace the parent's sayHello with a new method
Student.prototype.sayHello = function() {
  console.log("Hi, I'm " + this.name + " with a "
      + this.gpa + " GPA!");
}


let bob = new Student("Bob", 3.5);
bob.sayHello();
bob.sayGoodbye();

```

3.1.8: Practice with inheritance and private properties.

The JavaScript code defines a `Game` class and two methods.

1.  Add a `VideoGame` class and all the necessary code so `VideoGame` inherits from the `Game` class.

2.  Add a private variable to the `VideoGame` class called `totalPoints`, and initialize `totalPoints` to 0.

3.  Add a getter method called `getScore()` to get the `totalPoints` variable.

4.  Add a method called `addToScore(points)` that adds the `points` to `totalPoints`.

5.  Instantiate a new `VideoGame` object with the title "Pac-Man". Call the appropriate methods to:

    1.  Start playing the game.
    2.  Show the score (should be 0).
    3.  Add 20 points.
    4.  Add 50 points.
    5.  Show the score (should be 70).
    6.  Stop playing the game.

```js
function Game(title) {
  this.title = title;  
}

Game.prototype.startPlaying = function() {
  console.log("Now playing " + this.title + "!");
};

Game.prototype.stopPlaying = function() {
  console.log("Taking a break.");
};

function VideoGame(title) {
   Game.call(this, title);
   
   let totalPoints = 0;
   
   this.getScore = function() {
      return totalPoints;
   };
   
   this.addToScore = function(score) {
      totalPoints += score;
   };
}
VideoGame.prototype = Object.create(Game.prototype);
VideoGame.prototype.constructor = VideoGame;

let game1 = new VideoGame("Pac-Man");
game1.startPlaying();
console.log(game1.getScore());
game1.addToScore(50);
console.log(game1.getScore());
game1.stopPlaying();

```

Console output:

```cmd
Now playing Pac-Man!
0
50
Taking a break.
```

## 3.2 Classes (ES6)

### Classes in EcmaScript 6

EcmaScript 6 (ES6) simplifies class declarations, introducing syntax that looks more familiar to a Java or C# programmer. Although the syntax is different, the underlying prototype model is not changed.

A class is declared by using the **class keyword** followed by a class name. The class is implemented by declaring methods within braces. Each method declaration is similar to a function declaration, but without the `function` keyword. The method name constructor() is reserved for the class constructor.

### Inheritance in ES6

The **extends keyword** allows one class to inherit from another. In the inheriting class' constructor, calling the **super()** function calls the parent class' constructor. `super()` must be called before using the `this` keyword in the inheriting class' constructor.

### Getters and setters

A class method declaration preceded by the **get keyword** defines a getter method for a property. A class method declaration preceded by the **set keyword** defines a setter method for a property. Defining either a getter or setter method named X, adds a property named X to each class instance. Ex: A `Square` class may have a getter method declared as:

```js
get area() {
   return this.width * this.height;
}
```

After creating a Square instance named s1, the expression s1.area, without parentheses, gets the square's area.
A get method must not have parameters. A set method must have one parameter. A property can be defined via a getter only, a setter only, or both a getter and setter.

A **static method** is a method that can be called without creating an instance of the class. A static method is declared with the **static** keyword preceding the method name. The method is called with the syntax: `ClassName.methodName(arguments)`.

Exploring further:

- [Classes (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

### 3.3 Classes (ES13)

### Classes in EcmaScript 2022

EcmaScript 2022 (ES13) introduces class syntax that differs in some ways from earlier versions of EcmaScript. Although the syntax is different, the underlying prototype model is not changed.

A class is declared by using the **class keyword** followed by a class name. The class is implemented by declaring fields and methods within braces. A **field** is a variable that stores data for a class. Each method declaration is similar to a function declaration, but without the `function` keyword. The method name **constructor()** is reserved for the class constructor.

### Private fields and methods

By default, fields and methods are public, meaning the fields and methods are accessible from outside the class. Fields and methods can be made private, or inaccessible from outside the class, by prefixing the field or method name with `#`. Ex: `#privateField` and `#privateMethod()`.

The `City` class in the figure below declares a private field called `#foundingYear`. The public fields `name` and `state` are not declared because, unlike private fields, public field declarations are not required.

Figure 3.3.1: City class with private field.

```js
class City {
   #foundingYear;
   
   constructor(name, state, foundingYear) {
      this.name = name;
      this.state = state;
      this.#foundingYear = foundingYear;
   }
   
   toString() {
      return this.name + ", " + this.state +
         " (" + this.#foundingYear + ")";
   }
}
```

### Getters and setters ES13 (2022)

A class method declaration preceded by the **get keyword** defines a getter method for a property. A class method declaration preceded by the **set keyword** defines a setter method for a property. Defining either a getter or setter method named X, adds a property named X to each class instance. Ex: A `Square` class may have a getter method declared as:

```css
get area() {
   return this.width * this.height;
}
```

After creating a `Square` instance named `s1`, the expression `s1.area`, without parentheses, gets the square's area.

A get method must not have parameters. A set method must have one parameter. A property can be defined via a getter only, a setter only, or both a getter and setter.

## 3.4 Regular expressions

### Introduction to regular expressions

Programs often need to determine if a string conforms to a pattern. Ex: A user is asked for their phone number, and the program must recognize if the input is formatted like a phone number. Or perhaps a program needs to search through a large collection of DNA sequences and replace defective gene sequences with correct sequences. Developers use regular expressions to solve these types of problems.

A **regular expression** (often shortened to **regex**) is a string pattern that is matched against a string. Regular expressions may be defined with a **RegExp** object or between two forward slashes. Ex: `let re = new RegExp("abc");` or more simply: `let re = /abc/;` The pattern "abc" matches any string that contains "abc". Ex: "abcde" matches but "abd" does not. The RegExp method **test(str)** returns true if the string `str` matches the regex, and false otherwise.

### Special characters

Regular expressions use characters with special meaning to create more sophisticated patterns. The + character matches the preceding character at least once. Ex: `/ab+c/` matches one "a" followed by at least one "b" and one "c", so "abc" and "abbbbc" both match. However, "ac" does not match because the required "b" is missing.

Parentheses are used in a regex to match consecutive characters with \*, +, and ?. Ex: `/(ab)+/` matches one or more "ab", so "abab" and "abbb" both match. However, "acb" does not match because the "c" is between "a" and "b".

Table 3.4.1: Selected special characters in regex patterns.

| Character | Description | Example |
| --- |  --- |  --- |
| `*` | Match the preceding character 0 or more times. | `/ab*c/` matches "abc", "abbbbc", and "ac". |
| `+` | Match the preceding character 1 or more times. | `/ab+c/` matches "abc" and "abbbbc" but not "ac". |
| `?` | Match the preceding character 0 or 1 time. | `/ab?c/` matches "abc" and "ac", but not "abbc". |
| `^` | Match at the beginning. | `/^ab/` matches "abc" but not "cab". |
| `$` | Match at the end. | `/ab$/` matches "cab" but not "abc". |
| `|` | Match string on the left OR string on the right. | `/ab|cd/` matches "abc" and "bcd". |

### Character ranges

Square brackets are used in regular expressions to match any character in a range of characters. Ex: `/[aeiou]/` matches any vowel, and `/[0-9]/` matches any digit. The not operator (`^`) negates a range. Ex: `[^str]` matches any character except s, t, or r.

### Metacharacters

A **metacharacter** is a character or character sequence that matches a class of characters in a regular expression. Ex: The period character matches any single character except the newline character. So `/ab.c/` matches "abZc" and "ab2c", but not "abc" since the period must match a single character. Other metacharacters begin with a backslash.

| Metacharacter | Description | Example |
| --- |  --- |  --- |
| `.` | Match any single character except newline. | `/a.b/` matches "aZb" and "a b". |
| `\w` | Match any word character (alphanumeric and underscore). | `/a\wb/` matches "aAb" and "a5b" but not "a b". |
| `\W` | Match any non-word character. | `/a\Wb/` matches "a-b" and "a b" but not "aZb". |
| `\d` | Match any digit. | `/a\db/` matches "a2b" and "a9b", but not "aZb". |
| `\D` | Match any non-digit. | `/a\Db/` matches "aZb" and "a b", but not "a2b". |
| `\s` | Match any whitespace character (space, tab, form feed, line feed). | `/a\sb/` matches "a b" but not "a4b". |
| `\S` | Match any non-whitespace character. | `/a\Sb/` matches "a!b" but not "a b". |

### Mode modifiers

A **mode modifier** (sometimes called a **flag**) changes how a regex matches and is placed after the second slash in a regex. Ex: `/abc*/i` specifies the mode modifier `i`, which performs case-insensitive matching.

Table 3.4.3: Selected mode modifiers.

| Mode modifier | Description | Example |
| --- |  --- |  --- |
| `i` | Case insensitivity - Pattern matches upper or lowercase. | `/aBc/i` matches "abc" and "AbC". |
| `m` | Multiline - Pattern with `^` and `$` match beginning and end of any line in a multiline string. | `/^ab/m` matches the second line of "cab\\nabc", and `/ab$/m` matches the first line. |
| `g` | Global search - Pattern is matched repeatedly instead of just once. | `/ab/g` matches "ab" twice in "cababc". |

participation activity

3.4.7: Using regular expressions to identify secret messages.

A criminal organization is using Reddit to communicate. To keep from being detected, the criminals are posting comments that look innocuous but use a secret pattern.

-   The pattern contains one or more digits followed by any number of characters, followed by the word "star". Ex: "3stars" and "99 bright stars!" should both match.
-   The letters in the word "star" may be separated by a single space. Ex: "1 blast ark" and "1 s t a r" should match.
-   The comments can include upper or lowercase characters. Ex: "2 STar" should match.

Loop through the Reddit posts in the `posts` array and output to the console the lines that match the criminal's pattern. Use a single regex to identify the suspected posts. Hint: The 2nd, 3rd, and 5th lines should match the regex.

```js
let posts = [
   "The starting time was 6pm.",
   "If the 2nd string QB gets hurt, they have no starting QB.",
   "My email is sis1@yahoo.com.  Last are first.",
   "Stare into the abyss 1 time.",
   "90210 for Beverly Hills. Thick as TAR."
];

// Modify to output only lines that match regex
let re = /\d+.*s\s?t\s?a\s?r\s?/i;

posts.forEach(function(line) {
   if(re.test(line)){
      console.log(line); 
   }
});
```

output:

```cmd

If the 2nd string QB gets hurt, they have no starting QB.
My email is sis1@yahoo.com.  Last are first.
90210 for Beverly Hills. Thick as TAR.
```

### Determining what matches

The RegExp method exec(str) determines what part of the string `str` matches a regex. The `exec()` method returns a result array, or returns `null` if the pattern does not match.

Figure 3.4.1: Using exec() to discover what characters matched the regex.

```js
let re = /t.+r/;
let result = re.exec("Raise the bar high.");

if (result === null) {
   console.log("No match.");
}
else {
   // Index 0 is the full string that matched
   console.log(result[0]);   // the bar
```

Parentheses in a regex are used to "remember" different parts of a matched string. Ex: `/a(b+)c/` remembers anything matching `(b+)`, so "bbb" is remembered when applying the regex to "abbbc". The remembered parts are accessible from the result array returned by `exec()`. The first array element is the complete matched string, and the following elements are the remembered parts. If the regex contains no parentheses, the returned array contains only the complete string that matches.

```js
let re = /(B.+)'s (.+day)/;
let result = re.exec("When is Becky's birthday?");

// Index 0 is the full string that matched
console.log(result[0]);   // Becky's birthday

// Index 1 is the first remembered part
console.log(result[1]);   // Becky

// Index 2 is the second remembered part
console.log(result[2]);   // birthday
```

3.4.8: Extracting regex matches.

Twitter wants to know which hashtags are currently trending and what websites are tweeted most often. A selection of tweets are given in the `tweets` array. Create two regular expressions that will:

1.  Extract all the hashtags used in the tweets. A hashtag begins with a pound sign and contains all following word characters. Ex: #myHashTag. Output each hashtag to the console.

2.  Extract all the domain names from the URLs in the tweets. A URL begins with a protocol and double slash: "https://" or "https://". The domain name is the string of characters immediately after the double slash and before the next forward slash (/). Ex: The domain name for `https://en.wikipedia.org/wiki/URL` is `en.wikipedia.org`. Output each domain name to the console.

Multiple hashtags and URLs may exist in a single tweet, so use the "g" mode modifier on both regexes and loop until the pattern is no longer found. To extract the domain name, use `.+?` to match the characters after the double slash and before the first slash. The `+?` operator is "lazy" and matches as few characters as possible, whereas `+` matches as many characters as possible.

String methods that use regex

Several String methods work with regular expressions:

-   match() returns an array of the matches made when matching the string against a regex.
-   replace() returns a new string that replaces matching strings with a replacement string.
-   search() returns the index of the first match between the regex and the given string, or -1 if no match is found.
-   split() returns an array of strings created by separating the string into substrings based on a regex.

Exploring further:

-   [Regular Expressions (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
-   [RegExr](http://regexr.com/) \- For testing regular expressions

## 3.10 Form validation

### Validating data in the web browser

Since data integrity is essential to most applications, many web forms require specific formats for users to enter data. Ex: A credit card must contain 16 digits, a date cannot have a fifteenth month, and only 50 valid names of states exist for the United States of America.

Data validation is checking input for correctness. While a web server must perform data validation on submitted data, a better user experience occurs when the web browser performs the same data validation before submitting. Any invalid data in the webpage can be immediately flagged as needing modifications without waiting for the server to respond.

Data validation can either be performed while the user enters form data by adding a JavaScript function as the change handler for the appropriate field, or immediately prior to submitting the entire form by adding a function as the form's submit handler.

### Validating form input with JavaScript

Each textual input element in an HTML document has a value attribute that is associated with the user-entered text. The `value` attribute can be used to validate user-entered text by checking desired properties, such as:

-   Checking for a specific length using the `length` property on the `value` attribute
-   Checking if entered text is a specific value using `===`
-   Checking if the text contains a specific value using the string `indexOf()` method on the `value` attribute
-   Checking if the text is a number using `isNaN()`
-   Checking that text matches a desired pattern using a regular expression and the string `match()` method

Drop-down menus also have a `value` attribute that is associated with the user-selected menu option.

Checkboxes and radio buttons have a checked attribute that is a boolean value indicating whether the user has chosen a particular checkbox or radio button. The checked attribute can be used to ensure an input element is either checked or unchecked before form submission. Ex: Agreeing to a website's terms of service.

### Validating form data upon submission

Validating form data using JavaScript that executes when the user submits the form can be performed by:

1.  Register a handler for the form's submit event that executes a validation function.

2.  Within the validation function, inspect the form's input fields via the appropriate DOM elements and element attributes.

3.  If the form is invalid, call the `preventDefault()` method on the event to cancel the form submission and prevent the form data from being sent to the server.

Figure 3.10.1: Ensuring a checkbox is selected before the form is submitted.

```html
<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="UTF-8">
      <title>Terms of Service</title>
      <script src="validate.js" defer></script>
   </head>
   <body>
      <form id="tosForm" action="https://example.com" target="_blank" method="POST">
         <p>
            <label for="tos">I agree to the terms of service:</label>
            <input type="checkbox" id="tos">
         </p>
         <input type="submit">
      </form>
   </body>
</html>
```

```js
// validate.js

function checkForm(event) {
   let tosWidget = document.querySelector("#tos");

   // Cancel form submission if tos not checked
   if (!tosWidget.checked) {
      event.preventDefault();
   }
}

let tosForm = document.querySelector("#tosForm");
tosForm.addEventListener("submit", checkForm);
```

### Validating each field as data is entered

Alternatively, form data can be validated as the user enters data in the form by:

1.  For each field that should be validated:

    1.  Register an input event handler for the field.

    2.  Create a global variable to track whether the field is currently valid. In most cases, this global variable should be initialized to false since the form typically starts with the field as invalid.

    3.  Modify the global variable as appropriate within the field's event handler.

2.  Register a submit event handler for the form that verifies the global variables for each field are true.

3.  If one or more of the global variables are false, call the `preventDefault()` method on the submit event to prevent the form from submitting to the server.

The example below uses a regular expression to verify the user enters five digits for the ZIP code. Regular expressions are discussed in more detail elsewhere. The form does not submit unless the ZIP is valid.

Figure 3.10.2: Checking a ZIP code field as the user updates the field.

```html
<!DOCTYPE html>
<html lang\="en"\>
   <head\>
      <meta charset\="UTF-8"\>
      <title\>Terms of Service</title\>
      <script src\="validate.js" defer\></script\>
   </head\>
   <body\>
      <form id\="tosForm"\>
         <label for\="zip"\>ZIP:</label\>
         <input type\="text" id\="zip"\>
         <input type\="submit"\>
      </form\>
   </body\>
</html\>
```

```js
// validate.js

let zipCodeValid = false;
let zipCodeWidget = document.querySelector("#zip");
zipCodeWidget.addEventListener("input", checkZipCode);

function checkZipCode() {
   let regex = /^\d\d\d\d\d$/;
   let zip = zipCodeWidget.value.trim();
   zipCodeValid = zip.match(regex);
}

let tosForm = document.querySelector("#tosForm");
tosForm.addEventListener("submit", checkForm);

function checkForm(event) {
   if (!zipCodeValid) {
      event.preventDefault();
   }
}
```

### Using HTML form validation

Some HTML form elements and attributes enable the browser to do form validation automatically, which reduces the need for JavaScript validation.

Note

-----

A browser that does not support a particular HTML input element will transform an unsupported element into a text input, which then requires JavaScript to validate the form data.

Some customized HTML input elements can only contain valid values, such as date or color. Customized elements are automatically checked by the browser and/or filled in by a pop-up input picker in the browser, ensuring the submitted value matches a common specification.

Various element attributes allow the browser to do validation without using JavaScript:

-   The **required** attribute indicates that the field must have a value (text or selection) prior to submitting the form.
-   The **max** and **min** attributes indicate the maximum and minimum values respectively that can be entered in an input field with ranges, such as a date or number.
-   The **maxlength** and **minlength** attributes indicate the maximum and minimum length of input allowed by an input field.
-   The **pattern** attribute provides a regular expression that valid input must match.
-   The **title** attribute can be used to provide a description of valid input when using the pattern attribute.

#### Figure 3.10.3: Using HTML form validation

```html
<form\>
  <input type\="range" name\="age" min\="5" max\="120"\>
  <input type\="checkbox" name\="agree" required\>
  <input type\="password" name\="password" minlength\="10" maxlength\="16"\>
  <input type\="text" name\="credit" pattern\="^\\d{16}$" title\="exactly 16 digits"\>
  <input type\="submit"\>
</form\>
```

Several CSS pseudo-classes exist to style input and form elements:

-   The **:valid** pseudo-class is active on an element when the element meets all the stated requirements in field attributes.
-   The **:invalid** pseudo-class is active on an element when one or more of the attributes in the field are not fully met.
-   The **:required** pseudo-class is active on an element if the element has the `required` attribute set.
-   The **:optional** pseudo-class is active on an element if the element does not have the `required` attribute set.

Exploring further:

-   [Form data validation](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms/Data_form_validation) from MDN

Use HTML validation attributes to ensure the entered age is between 21 and 99, inclusive, and the username is 16 characters or less.

```html
<form>
   <p>
      <label for="userAge">User Age:</label>
      <input id="userAge" type="number" name="age">
   </p>
   <p>
      <label for="userName">Username:</label>
      <input id="userName" type="text" name="username">
   </p>
   <input type="submit">
</form>
```

