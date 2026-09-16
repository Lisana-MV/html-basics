// READ - GET

const output = document.getElementById("output");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");


// GET
function getUsers() {

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {

            output.innerHTML = "";

            data.forEach(student => {

                output.innerHTML += `
                    <div>
                        <h3>${student.name}</h3>
                        <p>Email: ${student.email}</p>
                        <p>Phone: ${student.phone}</p>

                        <button onclick="editStudent(${student.id}, '${student.name}', '${student.email}', '${student.phone}')">
                            Edit
                        </button>

                        <button onclick="deleteStudent(${student.id})">
                            Delete
                        </button>
                    </div>
                    <hr>
                `;
            });

        })
        .catch(error => {
            console.log(error);
        });
}


// CREATE - POST

function addStudent() {

    const student = {
        name: nameInput.value,
        email: emailInput.value,
        phone: phoneInput.value
    };

    fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(student)
    })
        .then(response => response.json())
        .then(data => {

            alert("Student added successfully!");

            console.log(data);

            nameInput.value = "";
            emailInput.value = "";
            phoneInput.value = "";

            getUsers();
        });
}

// UPDATED - PUT

function editsStudent(id, name, email, phone) {
    editId = id;

    nameInput.value = name;
    emailInput.value = email;
    phoneInput.value = phone;

    document.getElementById("addBtn").style.display = "none";
    document.getElementById("updateBtn").style.display = "inline";
}


// DELETE

function deleteStudent(id) {

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: "DELETE"
    })
    .then(response => {

        alert("Student deleted successfully!");

        getUsers();
    })
    .catch(error => {
        console.log(error);
    });
}

// Page load
getUsers();