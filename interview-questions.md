# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.


1. What are React lifecycle methods? Provide three examples.

  Your answer: React lifecycle methods are methods that help facilitate the lifecycle of react components. They help manage the component from being present to the user to the moment it leaves the browser. Three examples of life cycle methods are, component did mount, component did update, and component will unmmount.

  Researched answer:
  Each component in React has a lifecycle which you can monitor and manipulate during its three main phases.



2. What is the difference between a HTML/JSX div and a span?

  Your answer: A div starts on a new line it is a block element that takes up the entire width of the page, where span is an inline block element. It will on the same line as other elements, it will not start on a new line.

  Researched answer:
  The HTML Content Division element (<div>) is the generic container for flow content. It has no effect on the content or layout until styled in some way using CSS (e.g. styling is directly applied to it, or some kind of layout model like Flexbox is applied to its parent element).
  <https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div>
  The HTML <span> element is a generic inline container for phrasing content, which does not inherently represent anything. It can be used to group elements for styling purposes (using the class or id attributes), or because they share attribute values, such as lang. It should be used only when no other semantic element is appropriate. <span> is very much like a <div> element, but <div> is a block-level element whereas a <span> is an inline element.
  <https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span>




3. What is a ternary operator in JavaScript?

  Your answer: A ***ternary operator*** in javascript allows for a shorten version of checking a if else statement that only accepts a true or false condition. It allows either a true condition code block or a false condition code block to execute. 

  Researched answer:
  The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy. This operator is frequently used as a shortcut for the if statement.
  <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator>

4. What are props in React?

  Your answer: ***Props*** in react are variables that are passed down from higher components. Props are usually associated with data that is displayed to the user.

  Researched answer:
  Props” is a special keyword in React, which stands for properties and is being used for passing data from one component to another. But the important part here is that data with props are being passed in a uni-directional flow
  <https://itnext.io/what-is-props-and-how-to-use-it-in-react-da307f500da0>



5. What is `this` in JavaScript?

  Your answer: The ***this*** keyword is a special keyword that references the object that ***this*** keyword is created in. It helps to reference methods and properties and are specifically bind to the object that is binded too. If the ***this*** keyword loses context of their object than it will reference the global window object.x

  Researched answer:
  In most cases, the value of this is determined by how a function is called (runtime binding). It can't be set by assignment during execution, and it may be different each time the function is called. ES5 introduced the bind() method to set the value of a function's this regardless of how it's called, and ES2015 introduced arrow functions which don't provide their own this binding (it retains the this value of the enclosing lexical context).
  <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this>



6. STRETCH: What is an anonymous function in JavaScript?

  Your answer: An anonymous function is a function that is created without a name. 

  Researched answer:
  An anonymous function is a function without a name. An anonymous function is often not accessible after its initial creation.
  <https://www.javascripttutorial.net/javascript-anonymous-functions/>



7. STRETCH: What does it mean to create a responsive UI? What are three options for creating responsive design?

  Your answer:A responsive UI is a user interface that will react to the size of the users screen. It will resize the design to fit. Three ways to create a responsive design is either using media queries, a styling framework, or use of css flexbox/grids/container.

  Researched answer:
  In the early days of web design, pages were built to target a particular screen size. If the user had a larger or smaller screen than the designer expected, results ranged from unwanted scrollbars to overly long line lengths, and poor use of space. As more diverse screen sizes became available, the concept of responsive web design (RWD) appeared, a set of practices that allows web pages to alter their layout and appearance to suit different screen widths, resolutions, etc. It is an idea that changed the way we design for a multi-device web, and in this article, we'll help you understand the main techniques you need to know to master it.
  <https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design>



## Looking Ahead: Terms for Next Week

1. Ruby: Ruby is an open source programming language. It is often used serverside coupled with ruby on rails to create web apps

2. Object oriented programming: Objected oriented programming is a philosophy of programming that uses design patters to encapsulate functionality.

3. RSpec: It is a testing framework for ruby written in ruby. It helps with test driven development, and I assume its similar to how jest works.

4. Ruby blocks: They are anonymous functions that can be passed into methods in a do statement or with curly braces

5. Ruby hashes: Collection of key value pairs, it is similar to an array, but can have objects as indexes.
