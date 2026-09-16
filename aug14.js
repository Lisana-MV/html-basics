// session storage

// sessionStorage - is a built-in Javascript web Storage API
// used to storage data temporarily for a browser tab or window.
// The data is available until the tab is closed.

// setItem() - to storage data
sessionStorage.setItem("username", "John");

// getItem("key") - retrieve data
let username = sessionStorage.getItem("username");
console.log(username);

// update using setItem() - to store data
sessionStorage.setItem("username", "Alice");
sessionStorage.setItem("password", "Alice123");

// removeItem() - remove a specific item
sessionStorage.removeItem("p");

// clear all session storage
sessionStorage.clear();

// Storing Object
// since sessionStorage only store string, convert objects to JSON.

const user = {
    name: "Json",
    age: 25
};

sessionStorage.setItem("user", JSON.stringify(user));

// Retrive the object:

const user = JSON.parse(sessionStorage.getItem("user"));
console.log(user.name);

// check if a key exists

if (sessionStorage.getItem("username")) {
    console.log("username exists");
} else {
    console.log("Username not found");
}
