// 1. Basic Types

// Primitive Types
let age: number = 25; // Eine Zahl
let firstName: string = "John"; // Ein String
let isAdmin: boolean = true; // Ein Boolean

// Special Types
let anyValue: any = 42; // Der Typ 'any' kann jeden Wert annehmen
let unknownValue: unknown = "hello"; // Der Typ 'unknown' ist ähnlich wie 'any', aber sicherer
let noReturnValue: void; // Der Typ 'void' wird für Funktionen verwendet, die keinen Wert zurückgeben
let neverReturns: never; // Der Typ 'never' wird für Funktionen verwendet, die niemals einen Wert zurückgeben (z.B. Fehler werfen)

// 2. Typings Object

let user: {name: string; age: number} = {
    name: "Alice",
    age: 25,
}; // Ein Objekt mit den Eigenschaften 'name' und 'age'

// Best practice: interface
interface User {
    name: string;
    age: number;
}

let newUser: User = {
    name: "Max",
    age: 40,
}; // Ein Objekt, das das 'User'-Interface implementiert

// Aliases
type Car = {
    brand: string;
    year: number;
};

let myCar: Car = {
    brand: "Toyota",
    year: 2020,
}; // Ein Objekt vom Typ 'Car'

// 3. Typing von Arrays

let scores: number[] = [10, 20, 0, 30]; // Ein Array von Zahlen
let names: string[] = ["10", "20"]; // Ein Array von Strings
let users: User[] = [
    {name: "Max", age: 30},
    {name: "Joe", age: 15},
]; // Ein Array von 'User'-Objekten

// 4. Funktionen

function add(a: number, b: number): number {
    return a + b;
}

let sum: number = add(4, 10); // Die Funktion 'add' addiert zwei Zahlen und gibt das Ergebnis zurück

function greet(name: string, greeting?: string): string {
    return greeting ? `${greeting}, ${name}` : `Hello, ${name}`;
}

greet("Alice"); // Ausgabe: "Hello, Alice"
greet("Alice", "Good morning"); // Ausgabe: "Good morning, Alice"

// Default Parameter
function multiply(a: number, b: number = 1): number {
    return a * b;
}

multiply(5); // Ausgabe: 5 (da b den Standardwert 1 hat)
multiply(5, 10); // Ausgabe: 50

// Union Types

let mixedValue: string | number = "Hello"; // Kann entweder ein String oder eine Zahl sein
mixedValue = 42;

let person1: (string | number)[] = ["Alice", 25, "Alll", 242]; // Ein Array, das Strings und Zahlen enthalten kann
let person2: (string[] | number[] | string)[] = [["avvv"], [222], "2"]; // Ein Array, das Arrays von Strings, Arrays von Zahlen oder Strings enthalten kann

type StringArray = string[];
type NumberArray = number[];

let person3: (StringArray | NumberArray | string)[] = [["avvv"], [222], "2"]; // Ein Array, das Arrays von Strings, Arrays von Zahlen oder Strings enthalten kann

// 6. Tuples

let person: [string, number] = ["Alice", 25]; // Ein Tupel mit einem String und einer Zahl

// 7. Enums

enum Color {
    Red,
    Green,
    Blue,
}

let favourite: Color = Color.Green; // Enum-Wert 'Green'

enum Status {
    Success = 200,
    NotFound = 404,
    InternalSeverError = 500,
}

let httpStatus: Status = Status.NotFound; // Enum-Wert 'NotFound'

// Interface Extends

interface Animal {
    name: string;
}

interface Dog extends Animal {
    breed: string;
}

let myDog: Dog = {
    name: "Bud",
    breed: "Golden Retriever",
}; // Ein Objekt, das das 'Dog'-Interface implementiert und somit auch das 'Animal'-Interface

// Aliases
type StringOrNumber = string | number;

let example: StringOrNumber = "Hello";
example = 123; // Kann entweder ein String oder eine Zahl sein

// Classes

class Person {
    name!: string;
    age!: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): string {
        return `Hello, my name is ${this.name}`;
    }
}

console.log("first");

// Generics

function identity<T>(arg: T): T {
    return arg;
}

identity<string>("Hello"); // Generische Funktion, die einen String zurückgibt
identity<number>(42); // Generische Funktion, die eine Zahl zurückgibt
identity<boolean>(false); // Generische Funktion, die einen Boolean zurückgibt