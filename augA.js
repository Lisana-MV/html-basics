function getName(callback) {
    console.log("Name: Rahul");
    callback();
}

function getCourse(callback) {
    console.log("Course: Python");
    callback();
}

function getLocation() {
    console.log("Location: Kochi");
}

getName(function () {
    getCourse(function () {
        getLocation();
    });
});

// food ordering system

const output = document.getElementById("output");

function selectFood(callback) {
    output.innerHTML += "Food Selected <br>";
    callback();
}

function prepareFood(callback) {
    output.innerHTML += "Preparing Food <br>";
    callback();
}

function deliverFood() {
    output.innerHTML += "Food Delivered";
}

function orderFood() {
    output.innerHTML = "";

    selectFood(function () {
        prepareFood(function () {
            deliverFood();
        });
    });
}