var obj = {
    name: 'John Doe',
    greet: function() {
        console.log(`Hello ${this.name}`);
    }
};


obj.greet();

obj.greet.call({ name: 'Jane Doe'});
// you can use CALL 
// obj.greet.call({ name: 'Jane Doe'}, param, param...);

obj.greet.apply({ name: 'Tony Doe'});
// you can use APPLY
// obj.greet.call({ name: 'Jane Doe'}, [param, param...]);