// function statement
function greet() {
    console.log("Hi!");
}

greet();


// functions are first-class
function logGreeting(fn) {
    fn();
}

logGreeting(greet);


// function expression
var greetMe = function() {
    console.log('Hi Tony!');
}

greetMe();


// first-class with expression
logGreeting(greetMe);


// use a function expression on the fly
logGreeting(function() {
    console.log("Hello Tony!");
})