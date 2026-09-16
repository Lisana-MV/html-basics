// constructor function

const obj1 = {
    name:"Anu",
    age:23
};

// constructor with custom parameters

function student(name,age){
    this.name = name;
    this.age = age;
}

const s1 = new student("Anu",22)
const s2 = new student("Arya",24)
const s3 = new student("Alli",25)

console.log(s1)
console.log(s2)
console.log(s3)

// default parameters

function person(){
    this.name = "Neha";
}
const p1 = new person();
console.log(p1.name);

// methods

function Employee(name,salary){
    this.name = name;
    this.salary = salary;

    this.showDetails = function(){
        console.log(this.name + ";" + this.salary);
    };
}

const emp = new Employee("Midhun",50000);
console.log(emp);
emp.shoeDetails();

