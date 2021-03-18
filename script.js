'use strict';

// const Person = function(firstName, birthYear) {
//     //Instance properties
//     this.firstName = firstName;
//     this.birthYear = birthYear;
// };

// const jonas = new Person('Jonas', 1991);
// // console.log(jonas);

// const matilda = new Person('Matilda', 2017);
// const lucas = new Person('Lucas', 2000);

// console.log(matilda, lucas);

// console.log(lucas instanceof Person);

// Person.hey = function() {
//     console.log('Hey');
//     console.log(this );
// }

// Person.hey();

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

// class PersonCl {
//     constructor(firstName, birthYear) {
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     }

//     calcAge() {
//         console.log(2021 - this.birthYear);
//     }

//     greet() {
//         console.log(`Hey ${this.firstName}`);
//     }

//     get age() {
//         return 2021 - this.birthYear;
//     }

//     set firstName(name) {
//         if(name.includes(' ')) this._fullName = name;
//         else alert(`${name} is not a full name!`)
//     }

//     get firstName() {
//         return this._fullName;
//     }

//     static hey() {
//         console.log('hey');
//         console.log(this);
//     }
// };

// const jessica = new PersonCl('Jescica Smith', 1996);
// console.log(jessica);
// jessica.calcAge();
// console.log(jessica.age);

// console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function() {
//     console.log(`Hey ${this.firstName}`);
// }

// jessica.greet();

// const walter = new PersonCl('Walter White', 1965);



// const account = {
//     owner: 'Jiotr',
//     movements: [200,530, 120, 300],

//     get latest() {
//         return this.movements.slice(-1).pop();
//     },

//     set latest(mov) {
//         this.movements.push(mov);
//     },
// }

// console.log(account.latest);

// account.latest = 50;
// console.log(account.movements);

// PersonCl.hey();




// const PersonProto = {
//     calcAge() {

//         console.log(2021 - this.birthYear);
//     },

//     init(firstName, birthYear) {
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     }
// }

// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = 'Steven';
// steven.birthYear = 2002;
// steven.calcAge();

// console.log(steven.__proto__ === PersonProto);

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1998);
// sarah.calcAge();

// class car {
//     constructor(mark, speed) {
//         this.mark = mark;
//         this.speed = speed;
//     }

//     accelerate() {
//         this.speed += 10;
//         console.log(`${this.mark} going at ${this.speed} km/h`);
//     }

//     break() {
//         this.speed -= 5;
//         console.log(`${this.mark} going at ${this.speed} km/h`);
//     }

//     get speedUS() {
//         return this.speed / 1.6;
//     }

//     set speedUS(speed) {
//         this.speed = speed * 1.6;
//     }
// }

// const ford = new car('Ford', 120);
// console.log(ford.speedUS);
// ford.accelerate();
// ford.break();
// ford.speedUS = 50;
// console.log(ford.speed);



// const Person = function(firstName, birthYear) {
//     //Instance properties
//     this.firstName = firstName;
//     this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//     console.log(2021 - this.birthYear);
// };

// const Student = function(firstName, birthYear, course) {
//     Person.call(this, firstName, birthYear);
//     this.course = course;
// };

// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function() {
//     console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const mike = new Student('Mike', 2000, 'Computer Science');

// mike.introduce();
// mike.calcAge();

// console.log(mike.__proto__);

// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);

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

// const EV = function(make, speed, charge) {
//     car.call(this, make, speed);
//     this.charge = charge;
// };

// EV.prototype = Object.create(car.prototype);

// EV.prototype.chargeBattery = function(chargeTo) {
//     this.charge = chargeTo;
// };

// EV.prototype.accelerate = function() {
//     this.speed += 20;
//     this.charge--;
//     console.log(`${this.mark} going at ${this.speed} km/h, with a charge of ${this.charge}`);
// }

// const tesla = new EV('Tesla', 120, 23);

// tesla.chargeBattery(90);
// console.log(tesla);
// tesla.break();
// tesla.accelerate();


// class PersonCl {
//     constructor(fullName, birthYear) {
//         this.fullName = fullName;
//         this.birthYear = birthYear;
//     }

//     calcAge() {
//         console.log(2021 - this.birthYear);
//     }

//     greet() {
//         console.log(`Hey ${this.firstName}`);
//     }

//     get age() {
//         return 2021 - this.birthYear;
//     }

//     set firstName(name) {
//         if(name.includes(' ')) this._fullName = name;
//         else alert(`${name} is not a full name!`)
//     }

//     get firstName() {
//         return this._fullName;
//     }

//     static hey() {
//         console.log('hey');
//     }
// };

// class StudentCl extends PersonCl {
//     constructor(fullName, birthYear, course) {

//         super(fullName, birthYear);
//         this.course = course;
//     };

//     introduce() {
//         console.log(`My name is ${this.fullName} and I study ${this.course}`);
//     };

//     calcAge() {
//         console.log(`I'm ${2021 - this.birthYear} years old, but I feel more like ${2021 - this.birthYear + 10}`);
//     }
// };

// const martha = new StudentCl('Marta Jonas', 2002, 'Computer Science');
// martha.introduce();
// martha.calcAge();

// const PersonProto = {
//     calcAge() {
//         console.log(2021 - this.birthYear);
//     },

//     init(firstName, birthYear) {
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     },
// };

// const steven = Object.create(PersonProto);

// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function(firstName, birthYear, course) {
//     PersonProto.init.call(this, firstName, birthYear);
//     this.course = course;
// };

// StudentProto.introduce = function() {
//     console.log(`${this.firstName} I study ${this.course}`);
// };

// const jay = Object.create(StudentProto);

// jay.init('Jay', 2000, 'Informatic');
// jay.introduce();
// jay.calcAge();



// class Account {
//     locale = navigator.language;
    
    
//     _movments = [];



//     constructor(owner, currency, pin) {
//         this.owner = owner;
//         this.currency = currency;
//         this._pin = pin;
//         // this._movments = [];
//         // this.locale = navigator.language;

//         console.log(`Thanks for opening an account, ${owner}`);
//     }

//     getMovements() {
//         return this._movments;
//     }

//     deposit(val) {
//         this._movments.push(val);
//         return this;
//     }

//     withdraw(val) {
//         this.deposit(-val);
//         return this;
//     }

//     _approveLoan(val) {
//         return true;
//         return this;
//     }

//     requestLoan(val) {
//         if(this._approveLoan(val)) {
//             this.deposit(val);
//             console.log(`Loan approved`);
//             return this;
//         }
//     }

//     static helper() {
//         console.log('Helper');
//     }
    
// }

// const acc1 = new Account('Jonas', 'EUR', 1111, []);

// acc1.deposit(250);
// acc1.withdraw(140);
// acc1.requestLoan(1000);
// acc1._approveLoan(1000);
// console.log(acc1.getMovements());
  

// Account.helper();

// acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
// console.log(acc1.getMovements());

class CarCl {
        constructor(mark, speed) {
            this.mark = mark;
            this.speed = speed;
        }
    
        accelerate() {
            this.speed += 10;
            console.log(`${this.mark} going at ${this.speed} km/h`);
        }
    
        break() {
            this.speed -= 5;
            console.log(`${this.mark} going at ${this.speed} km/h`);
            return this;
        }
    
        get speedUS() {
            return this.speed / 1.6;
        }
    
        set speedUS(speed) {
            this.speed = speed * 1.6;
        }
}

class EVCL extends CarCl {

    constructor(make, speed, charge) {
        super(make, speed);
        this.charge = charge;
    };

    chargeBattery(chargeTo) {
        this.charge = chargeTo;
        return this;
    }

    accelerate() {
        this.speed += 20;
        this.charge--;
        console.log(`${this.mark} is going at ${this.speed} km/h, with a charge of ${this.charge}`);
        return this;
    }
};

const rivian = new EVCL('Revian', 120, 23);
console.log(rivian);
rivian.accelerate().accelerate().accelerate().break().chargeBattery(50).accelerate();

console.log(rivian.speedUS);