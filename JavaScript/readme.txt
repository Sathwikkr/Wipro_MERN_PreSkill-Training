What is JavaScript ?
JavaScript is a high-level, interpreted programming language that allows you to make web pages
 interactive and dynamic. 
 Alongside HTML and CSS, it is one of the core technologies of web development.
	• HTML → Builds the structure of a webpage (headings, paragraphs, buttons).
	• CSS → Adds style and design (colors, fonts, layouts).
	• JavaScript → Adds behavior and interactivity (clicks, animations, live updates).
Who Created JavaScript?
	• Originally named Mocha, then LiveScript, and finally renamed to JavaScript.
	• Amazingly, the first version was developed in just 10 days.
	• Today, JavaScript is maintained by ECMA International under the standard ECMAScript (ES).
Latest versions (ES6 and beyond) introduced features like let, const, arrow functions, promises, and classes — making JavaScript more powerful and modern.
Why Use JavaScript?
JavaScript is used everywhere — from simple web pages to large-scale applications.
Here’s what you can do with it:
	1. Interactive Web Pages – Respond to user actions like clicks, hover, or form submissions.
	2. DOM Manipulation – Dynamically change HTML content or CSS styles.
	3. Web Applications – Build apps like Gmail, Facebook, or e-commerce websites.
	4. Server-Side Development – Use Node.js for backend tasks like APIs and databases.
	5. Games and Animations – Create browser games and animations.
Event Handling – React to keyboard, mouse, or page events.

Javascript keywords &  reserved words
break, continue, if else, throw
void , class , for , try , cons, let , var 

identifiers : names you are giving to a variable ,
             function , classes etc.

const  - fixed value

student = []

variable names use camelCase, for eg rollNo
to declare the variable we can either let or var
 
 generally we prefer to use let keyword to declare a variable

 let var1  =10;
 const pi = 3.14;


 a company wants to automate monthly salary calculation for employees based on their working days, basic pay and bonus
 . create a script file to 
 a) calculate gross salary
 b) apply tax deduction 
 c) display employee net salary 
 
 
 The DOM is a programming interface that allows js to access , change add or remove html elements on a webpage
HTML page is converted into a tree structure that java script can control

HTML is a static (all alone we cannot change by itself)


Functional Programming and Pure Functions.

Functional Programming and Pure Functions.

What is pure functions  ---    where we focus on what to do rather then how to do 
traditional functions --- like for , foreach --
 here we were focussing on what to do but also on how to do (logic)


Pure functions are like : - map(), reduce() and filter()

map() -> when we want to transform each element in an array and it return a new array.

filter() -- when we want to select specific elements that meet a condition or when we want to extract the data 

reduce() -- when we want to return a single value after accumulating array values that we have or we want to 
summarize or to get aggregate data 

== We want to calculate the total sum of 10 natural numbers  sum += sum +n

// p arrow function will take each product p from an array and return a new object 
// ...(spread) means- it will copy all properties of the original product and apply discount on it




JSON -- It is a lightweight data- interchange format used to store and exchange data between client and Server
though there are different other sources too -- xml , csv ,mysql

format of json   :   "key":"stringvalue"  or    "key":numbervalue

JSON.parse(jsonString) -- converts json string to js object -- mainly we use when receiving the data from a server
JSON.stringify(obj) -- converts js object to json string -- mainly used when sending data to a server.



Asynchronous / Synchronous Based:

Sysnchronous --  when one execution will get completed then the other execution will take place --- Blocker 
               line by line , if there is any blocker then in that case the rest of the code will not work  

			   it is slow in process

			   XMLHttpRequest(sync)

Asynchronous -- It's a non-blocker , next code runs immediately 
We can implement asynchronous using
fetch() , either Promise() or fetch() , asyn/await , XMLHttpRequest(async)

basically fetch() will return a Promise Object and 
		 .then() will be called on that Promise object when it's fulfilled ( means data is received) 
		 .catch() will run if the Promise is rejected(due to wrong api , network error)