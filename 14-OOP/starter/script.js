'use strict';

// Function constructors

const Person = function(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;

    // Never create a function inside a function constructor
}

const raymond = new Person('Raymond', '1987');
console.log(raymond)
// These four steps happen when calling the 'new' keyword
// 1. New empty object is created, {}
// 2. function is called, this = {}
// 3. {} is linked to prototype
// 4. function automatically returns {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);

console.log(matilda, jack)

console.log(raymond instanceof Person)

// Add a function to a prototype
Person.prototype.calcAge = function (){
    return 2022 - this.birthYear
};

console.log(raymond.calcAge());

// ES6 Classes
// Classes are NOT hoisted
// Classes are first class citizens
// Classes are executed in strict mode
class PersonCl{
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    // the functions declared
    // outside the constructor are part of the prototype

    calcAge() {
        return 2022 - birthYear;
    }

}

// Can also define prototype methods outside of class declaration
PersonCl.prototype.greet = function (){
    return `Hey ${this.firstName}`
}

// Setters and Getters





css('font-size', `${newFontSize}px`)


console.log($(this).css('font-size'))

