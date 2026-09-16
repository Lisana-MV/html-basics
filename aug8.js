const output = document.getElementById("output");

// GET
function getUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
            output.innerHTML = JSON.stringify(data, null, 2);
        });
}

// POST
function addUser() {
    fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: {                      // Corrected
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: "Lisana",
            email: "lisana@gmail.com"
        })
    })
    .then(response => response.json())
    .then(data => {
        output.innerHTML = JSON.stringify(data, null, 2);
    });
}

// PUT
function updatedUser() {
    fetch("https://jsonplaceholder.typicode.com/users/1", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: 1,
            name: "Updated User"
        })
    })
    .then(response => response.json())
    .then(data => {
        output.innerHTML = JSON.stringify(data, null, 2);
    });
}

// DELETE
function deleteUser() {
    fetch("https://jsonplaceholder.typicode.com/users/1", {
        method: "DELETE"
    })
    .then(() => {
        output.innerHTML = "User Deleted Successfully";
    });
}