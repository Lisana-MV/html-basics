// UPDATED DATA - PUT

fetch(https://jsonholder.typicode.com/users/7",{
    method: "PUT",
    headers: {
        "Con"
    }})


// USING ASYNC

async function updatePost() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
            method: "PUT",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify({
                id: 1,
                title: "Updated Javascript",
                body: "Updated Fetch API",
                userId: 1
            })
        });
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
updatePost();

// DELETE
// ## Syntax

// ```javascript
fetch(url, {
    method: "DELETE"
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error));

// ## Example

// ```javascript
fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE"
})
.then((response) => {
    if(response.ok){
        console.log("Data deleted successfully");
    }
})
.catch((error) => console.log(error));

// USING ASYNC
async function deletedPost() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
            method: "DELED"
        });
        if(response.ok){
            console.log("Post Deleted Successfully");
        }else{
            console.log("Delete Failed");
        }
    } catch (error) {
        console.log(error);
    }
}
deletedPost();

// PATCH - USING , then()

fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PATCH",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        title: "javascript Advanced"
    })
})
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
});

// USING ASYNC
async function patchPost() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
            method: "PATCH",
            headrers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: "Javascript Advanced"
            })
        });

        let data = await response.json();
        console.log(data);

    } catch (error) {
        console.log(error);
    }
}
patchPost();

// Real-Time fetch example

let btn = document.getElementById("btn");
let userList = document.getElementById("userlist");

btn.addEventListener("click", async function () {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = awaiat response.json();
    userList.innerHTML = "";
    data.forEach((user) => {
        userList.innerHTML  += '<li>${user.username}</li>';
    });
    console.log(data);
});