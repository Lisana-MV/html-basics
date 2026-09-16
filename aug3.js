// // async function - always return a promise

async function greet(){
    return "Hello Javascript"
}

greet()
.then((gt)=>{
    console.log(gt)
})

// await keyword .-pauses execution until promise completes.

function fetchData() {
    return new Promise(function (resolve) {
        setTimeout(() => {
            resolve("Data loaded")
        }, 200);
    })
}

async function getData() {
    let result = await fetchData();
    console.log(result);
}
getData();

// // Error handling with try...catch

// try{
//     //code
// }catch(error){
// }

function login() {
    return new Promise(function(resolve,reject){
        let password = "1234";
        if (password === "1234") {
            resolve("Login Successful");
        } else {
            reject("Invalid password");
        }
    });
}

// with try...catch
async function checkLogin() {
    try {
        let res = await login();
        console.log(res)
    } catch (error) {
        console.log(error)
    }
}

checkLogin()

// with try...catch...finally
async function checkLogin() {
    try {
        let res = await login();
        console.log(res)
    } catch (error) {
        console.log(error)
    }finally{
        console.log("Thankyouu!!!")
    }
}

checkLogin()

// converting promise chain to async / await

function fetchData() {
    return new Promise(function (resolve) {
        resolve(10);
    })
}
fetchData().then((data)=>{
    console.log(data*2)
}).then(function(result){
    console.log(result);
})

fetchData().then((data)=>{
    let result = data * 2;
    console.log(result);
    return result;
}).then(function(result){
    console.log(result);
});

// async/ await version

function fetchData() {
    return new Promise(function (resolve) {
        resolve(10);
    })
}
async function showData() {
    let data = await fetchData();
    let result = data * 2
    console.log(result)
}

Promise.resolve(5)
.then(function (num) {
    return num + 5
})
.then(function (res) {
    return res * 5
})
.then(function (final) {
    return final * 5
})