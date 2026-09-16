// 1. create a constructor function for vehicle

function Vehicle(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
}

// Creating Objects
let vehicle1 = new Vehicle("Toyota", "Fortuner", 2023);
let vehicle2 = new Vehicle("Honda", "City", 2022);

// Display Output
console.log(vehicle1);
console.log(vehicle2);

// 2. create a constructor function with product name, price, display method

// 1. Create a variable using let, const, and var. Print their values.

let name = "John";
const age = 20;
var place = "Kerala";

console.log(name);
console.log(age);
console.log(place);

// 2. Check whether a number is even or odd

let num = 15;

if (num % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

// 3. Find the largest of three numbers.
let a = 10, b = 50, c = 30;

if (a >= b && a >= c) {
    console.log(a + " is largest");
} else if (b >= a && b >= c) {
    console.log(b + " is largest");
} else {
    console.log(c + " is largest");
}

// 4. Print numbers from 1 to 100 using a for loop.
for (let i = 1; i <= 100; i++) {
    console.log(i);
}

// 5. Print the multiplication table of a given number.
let numbers = 5;

for (let i = 1; i <= 10; i++) {
    console.log(`${numbers} x ${i} = ${numbers * i}`);
}

// 6. Reverse a string
let starting = "hello";
let reverse = starting.split("").reverse().join("");

console.log(reverse);

// 7. Check whether a string is a palindrome
let str = "madam";
let rev = str.split("").reverse().join("");

if (str === rev) {
    console.log("Palindrome");
} else {
    console.log("Not Palindrome");
}

// 8. Count vowels in a string.
let start = "javascript";
let count = 0;

for (let ch of start.toLowerCase()) {
    if ("aeiou".includes(ch)) {
        count++;
    }
}

console.log(count);

