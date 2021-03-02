'use strict';

// const Person = function(firstName, birthYear) {
//     //Instance properties
//     this.firstName = firstName;
//     this.birthYear = birthYear;
// };

// const jonas = new Person('Jonas', 1991);
// console.log(jonas);

// const matilda = new Person('Matilda', 2017);
// const lucas = new Person('Lucas', 2000);

// console.log(matilda, lucas);

// console.log(lucas instanceof Person);

// console.log(Person.prototype);

// Person.prototype.calcAge = function () {
//     console.log(2021 - this.birthYear);
// };

// jonas.calcAge();
// matilda.calcAge();
// lucas.calcAge();

// console.log(jonas.__proto__);
// console.log(jonas.__proto__ == Person.prototype);

// console.log(Person.prototype.isPrototypeOf(jonas));
// console.log(Person.prototype.isPrototypeOf(matilda));
// console.log(Person.prototype.isPrototypeOf(Person));
// Nauka

// Person.prototype.species = 'Homo Sapiens';
// console.log(jonas.species, matilda.species);

// console.log(jonas.hasOwnProperty('firstName'));
// console.log(jonas.hasOwnProperty('species'));

// console.log(jonas.__proto__);
// console.log(jonas.__proto__.__proto__);
// console.log(jonas.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

// const arr = [3,4,5,5,5,2,4,5,6];
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function() {
//     return [...new Set(this)]
// };

// console.log(arr.unique());

// const h1 = document.querySelector('h1');

// console.dir(x => x + 1);


// const car = function(mark, speed) {
//     this.mark = mark;
//     this.speed = speed;
// };

// car.prototype.accelerate = function() {
//     this.speed += 10;
//     console.log(`${this.mark} going at ${this.speed} km/h`);
// };

// car.prototype.break = function() {
//     this.speed -= 5;
//     console.log(`${this.mark} going at ${this.speed} km/h`);
// };

// const BMW = new car('BMW', 120);
// const Mercedes = new car('Mercedes', 95);

// BMW.accelerate();
// Mercedes.accelerate();

class PersonCl {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    calcAge() {
        console.log(2021 - this.birthYear);
    }

    greet() {
        console.log(`Hey ${this.firstName}`);
    }
};

const jessica = new PersonCl('Jescica', 1996);
console.log(jessica);
jessica.calcAge();

console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function() {
//     console.log(`Hey ${this.firstName}`);
// }

jessica.greet();



