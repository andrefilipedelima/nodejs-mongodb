function Greet() {
    this.greeting = "Hello world 3!";
    this.greet = function() {
        console.log(this.greeting);
    }
}

module.exports = new Greet();