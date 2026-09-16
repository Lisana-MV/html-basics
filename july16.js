// sync , async , & callbacks

// synchronous js => sync

console.log("Start");

for(let i = 0; i < 10000; i++){
    console.log(i);
}

console.log("End");

// asynchronous js => async

console.log("Start");

setTimeout(function(){
    console.log("Inside Timeout");
},2000);

console.log("End");

// setTimeout()

console.log("Hello");

setTimeout(function(){
    console.log("JavaScript");
},3000);

console.log("Welcome to");

// callback function

function greet(name, callback){
    console.log("Hello " + name);
    callback();
}

function bye(){
    console.log("Byee");
}

greet("Lisana", bye);

// callback using anonymous function

function add(a, b, callback){
    let result = a + b;
    callback(result);
}

add(2, 3, function(result){
    console.log(result);
});

// async

console.log("Loading...");

setTimeout(function(){
    console.log("Loaded!!");
},1000);

// async callback pattern

function fetchData(callback){
    setTimeout(function(){
        console.log("Fetching data!!");
        callback();
    },3000);
}

function displayData(){
    console.log("Displaying data");
}

fetchData(displayData);

// callback hell

setTimeout(function(){
    console.log("Step 1");

    setTimeout(function(){

        console.log("Step 2");

        setTimeout(function(){

            console.log("Step 3");

        },1000);

    },1000);

},1000);