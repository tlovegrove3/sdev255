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

