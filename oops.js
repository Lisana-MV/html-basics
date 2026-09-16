// // OOP in JS

// class class_name {
//  constructor(parenter) {
//     this.parenter = parmenter;
//  }

// methodName() {
//  code
// }
// }

class person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log('Hi, I'm ${this.name} and I'm ${this.age} years old.');
    }
}

const person1 = new person("Alice", 25);
const person2 = new person("Bob", 30);
person1.introduce();
person2.introduce();

class car {
    constructor(brand, model) {
        this.brand = brand;
        this,model = model;
    }

    start() {
        console.log('${this.brand} ${this.model} is starting...');
    }
}

// Creating objects
const car1 = new Car("Toyota", "Corolla");
const car2 = new Car("Tesla", "Model 3");

// Accessing properties
console.log(car1.brand); // Toyota
console.log(car2.model); // Model 3

// Calling method
car1.srarting();
car2.srarting();

// constructor method
class student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

let student1 = new student("Diya", 25);
let student2 = new student("Rahul", 22);

console.log(student1.name);
console.log(student2.name);

// inhance method
class student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    display() {
        console.log(this.name);
        console.log(this.age);
    }
}

let student1 = new student("Diya", 25);
student1.display();

// inhance
class Anime {
    eat() {
        console.log("Animal is eating");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Dog is barking");
    }
}

let d = new Dog();
d.eat();
d.bark();

// Super keyword
class person {
    constructor(name) {
        this.name = name;
    }
}

// super()
class student extends person {
    constructor(name. course) {
        super(name);
        this.course = course;
    }

    display() {
        console.log(this.name);
        console.log(this.course);
    }
}

let s = new student("Diya", "Python");
s.display();

// 
class Animal {
    speak() {
        console.log("Animal makes a sound");
    }
}
// super.method()
class Dog extends Animal {
    speak() {
        super.speak();
        console.log("Dog barks");
    }
}
let d = new Dog();
d.speak();


// 
class vehicle {
    constructor(brand) {
        this.brand = brand;
    }
    start() {
        console.log("Vehicle starting");
    }
}

class car extends vehicle {
    constructor(brand, model) {
        super(brand);
        this.model = model;
    }
    start() {
        super.start();
        console.log("Car is ready to drive");
    }
}

let car = new car("Toyota", "Fortuner");
console.log(car.brand);
console.log(car.model1);
car.start();