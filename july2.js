// let obj = {
//      key:value,
//      key: value,
//      key: value
// }

let student = {
    name:"Rohan",
    age:22,
    course:'PFS'
};

console.log(student);

// ACCESS OBJECT VALUES
    // 1. Dot Notation
    // object.property

console.log(student.name);
console.log(student.age);

      // 2. Bracket Notation
      // object["property"]

console.log(student["course"]);

// ADD NEW VALUE

student.city = 'calicut';
console.log(student);

// UPDATE VALUE

student.course = "MERN"
console.log(student);

// Delete value

delete student.age;
console.log(student);

// Object destructuring

let student = {
    name:"Neha",
    age:22
}

// withoud destructuring
let std_name = student.name;
let std_age = student.age;

console.log(std_name);
console.log(std_age);

// with destructuring
const { name,age } = student;
console.log(name);
console.log(age);

// rename variables
// const { property : newVar} = object;

let user = {
    name:"Anu"
};

const { name: username} = user;
console.log(username);

const {name, age = 22 } = user;
console.log(name);
console.log(age);

// spread operator (...)

// copy Object
let user = {
    name:"Neja",
    age:22
}

let copyy = user;
console.log(copyy);

let copy = {...user};
console.log(copy)

// merge objects

let obj1 = {
    name:"Anu"
};
let obj2 = {
    city:"clt"
};

let res = {
    ...obj1,
    ...obj2,
};
console.log(res);

// update object

let product = {
    name:"Phone",
    price:50000
}
let update_product = {
    ...product,
    price:20000,
    stock:true
};

console.log(updated_product);

// Rest operator (...)
// Const { property: ...others} = Object;

let employee = {
    emp_name:"Rahul",
    dept:"IT",
    salary:30000
};

const {emp_name,...details} = emplayee;
console.log(emp_name);
console.log(details)

