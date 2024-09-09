// 1. Basic Types
// Primitive Types
let age = 25;
let firstName = "John";
let isAdmin = true;
// Special Types
let anyValue = 42;
let unknownValue = "hello";
let noReturnValue;
let neverReturns;
// 2. Typings Object
let user = {
    name: "Alice",
    age: 25,
};
let newUser = {
    name: "Max",
    age: 40
};
let myCar = {
    brand: "Toyota",
    year: 2020
};
// 3. Typing von Arrays
let scores = [10, 20, 0, 30];
let names = ["10", "20"];
let users = [
    { name: "Max", age: 30 },
    { name: "Joe", age: 15 }
];
//4. Funktionen
function add(a, b) {
    return a + b;
}
;
let sum = add(4, 10);
function greet(name, greeting) {
    return greeting ? `${greeting}, ${name}` : `Hello, ${name}`;
}
greet("Alice");
greet("Alice", "Good morning");
// default
function multiply(a, b = 1) {
    return a * b;
}
multiply(5); // Output: 5
multiply(5, 10); // Output: 50
// Union Types
let mixedValue = "Hello";
mixedValue = 42;
let person1 = ["Alice", 25, "Alll", 242,];
let person2 = [["avvv"], [222], "2"];
let person3 = [["avvv"], [222], "2"];
// 6. Tuples
let person = ["Alice", 25];
// 7. Enums
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
// Color.Red = 0
// Color.Green = 1
// Color.Blue = 2
// Wird immer um 1 erhöht
let favourite = Color.Green;
var Status;
(function (Status) {
    Status[Status["Success"] = 200] = "Success";
    Status[Status["NotFound"] = 404] = "NotFound";
    Status[Status["InternalSeverError"] = 500] = "InternalSeverError";
})(Status || (Status = {}));
let httpStatus = Status.NotFound;
let myDog = {
    name: "Bud",
    breed: "Golden Retriever"
};
let example = "Hello";
example = 123;
// Classes
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hello, my nama is ${this.name}`;
    }
}
console.log("first");
// Generics
function identity(arg) {
    return arg;
}
identity("Hello");
identity(42);
identity(false);
