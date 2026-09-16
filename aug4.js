// what is an API (Application programming Interface)
// is a bridge that allows two applications to communicatate with each other.

// what is fetch API?
// The Fetch API is a modern Javascript method used to communication with servers.

// it can: CRUD 
//   Read data - GET - retrieve data
//   Add data - post - sent data
//   Update data - put - Update data
//   Delete data - DELETE - deleted data

// syntax :- fetch(url)
// fetch("https://jsonplaceholder.typicode.com/users")

// fetcg() -> sends request
// URL -> API endpoint
// Returns -> Promise

// Since it returns a Promise, we use:-
   // then()
   // catch()

// or:
   // async
   // await

// APIS usually return data in JSON format.
   // {
   //          "id":1,
   //           "name":"John",
   //            "email":"john@gmail.com"
   // }

// JSON means - Javascript Object Notification

// GET REQUEST - used to retrieve data from server

fetch("https://jsonplaceholder.typicode.com/users")

.then((res)=>{
    return res.json();
})
.then((data)=>{
    console.log(data);
});

// READING JSON DATA - response.json() converts JSON  response to js object

fetch("https://jsonplaceholder.typicode.com/posts/1")

.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data.body);
});

// response.ok Check - used to check whether request was successfull.
// it returns - true(success)/ false(failed)

fetch("https://jsonplaceholder.typicode.com/usersasdfghjk")

.then((response)=>{
    if(response.ok){
        return response.json();
    }else{
        throw new Error("Request failed");
    }
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
});

// POST REQUEST
// syntax :

   // fetch(URL,{
   //       method: "POST",
   //       headers:{},
   //       body:JSON.stringify()
   // })

fetch("https://jsonplaceholder.typicode.com/posts",{
    method: "POOST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify({
        title:"Javascript",
        body:"Fetch API",
        userId:2
    })
})

.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
});

// FETCH USING ASYNC/ AWAIT
async function getUsers() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error)
    }
}
getUsers();

// POST request with async/await

async function addPosts() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                title:"New post",
                body:"Hello javascript",
                userId:1
            })
        });
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error)
    }
}
addPosts();