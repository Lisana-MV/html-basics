// function declaration

// function functionName(){
//      //  code
// }
// functionName();

function greet(){
    console.log("Hello javascript")
}

greet();

// function with parameters

function add(a,b){
    console.log(a+b)
}

add(3,5);

// function with return value

function square(a){
    return a * a;
}

console.log(square(5));

let result = square(5);
console.log(result);

// function expression
function greet(){
    console.log("Hello javascript");
}
greet();

const greeting = function() {
    console.log("Hello javascript");
}

greeting();

// default parameters

function student(name = "Gauri"){
    console.log("Hello "+name);
}
student();
student("Arun");

// rest parameters

function demo(...args){
    console.log(args);
}

demo(1,2,3,4,5,6,7);

// 3. Arrow function ( => )

const greetings = () => {
    console.log("Hellooooooo!!!")
};

greeting();

// arrow function with parameters

const addition = (x,y) => {
    console.log(x+y);
};

addition(2,3);

// arrow function with return

const nul = (x,y) => {
    return x * y
};
console.log(nul(2,3));

// implicity return

const squares = num => num * num;

console.log(square(5))

// implicity return

const square = num => num * num;
console.log(squares(5))

const cal = (num1,num2) => num1 * num2;
console.log(cal(5,2))