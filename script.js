// alert("Good afternoon");

console.log("This is console");


document.write("Welcome to JS class");


var place = 'clt';
let name = 'lisana';
const age = 21;

console.log(place);
console.log(name);
console.log(age);

// primitive data types

// 1. string
let name = 'diya'
console.log(name);


// 2. Number
let age = 21;
let price = 15.50;
console.log(age);
console.log(typeof price);


// 3. Boolean
let is_active = false;
let isLoggedIn = true;
console.log(isLoggedIn);
console.log(is_active);


// 4. Undefined
let x;
console.log(x)

// 5. null
let data = null;
console.log(data);


// non-primitive data types

// 1. Array
let fruits = ['orange','apple','mango']

console.log(fruits)
console.log(fruits[2])

// 2. object
let student = {
    name:'diya',
    age:21,
    course:'PFS'
}
console.log(student)
console.log(student.name)

// 3. function
function greet() {
    console.log('hello good afternoon');
}

greet();

console.log('5' == 5);

console.log('5' === 5);
