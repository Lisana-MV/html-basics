// 1. check wheather numbers is positive or negative
let number = -5;

if(number>0){
    console.log("The number is positive");
}else if (number<0){
    console.log("The number is negative");
}else{
    console.log("The number is Zero");
}

// 2. check whether number is even or odd
let num = 4

if(num % 2 == 0){
    console.log("The number is Even");
}else{
    console.log("The number is Odd");
}

// 3. print numbers from 1 to 10 using for loop
for(let i=1;i<=10;i++){
    console.log(i);
}

// 4. print multiplication table of 5
let numbers = 5;

for (let i = 1; i <= 10; i++) {
    console.log(numbers + " x " + i + " = " + (numbers * i));
}

// 5. print all even numbers between 1 to 50
for (let i = 1; i <= 50; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

// 6. create a simple calculaters using switch
let num1 = 10;
let num2 = 5;
let operator = "+";

switch (operator) {
    case "+":
        console.log(num1 + num2);
        break;

    case "-":
        console.log(num1 - num2);
        break;

    case "*":
        console.log(num1 * num2);
        break;

    case "/":
        console.log(num1 / num2);
        break;

    default:
        console.log("Invalid Operator");
}


// 7. print each charecters of a string using for of
let name = "BEAUTIFULL";

for (let letter of name) {
    console.log(letter);
}

// 8. Use while loop to print numbers from 10 to 1
let i = 10;

while (i >= 1) {
    console.log(i);
    i--;
}



// FUNCTIONS
// 1. create a function to print your name
function printName() {
    console.log("Lisa");
}

printName();

// 2. create a function to add two numbers
function add(a, b) {
    return a + b;
}

let result = add(10, 20);

console.log("Sum = " + result);

// 3. create a function with default parameter for country
function showDetails(country = "India") {
    console.log("Country:" + country);
}

showDetails();

// 4. convert normal function into arrow function
const Name = () => {
    console.log("Diyu");
};

Name();

// 5. create a arrow function to find square of a number
const square = (num) => {
    return num * num;
};

console.log(square(5));

// 6. create arrow function using implicit return
const addNumbers = (a, b) => a + b;

console.log(addNumbers(10, 20));