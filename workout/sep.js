let registrationForm =
    document.getElementById("registrationForm");

registrationForm.addEventListener("submit", (e) => {

   e.preventDefault();
   let name =

        document.getElementById("name").value;

    let email =
        document.getElementById("email").value;

    let phone =
        document.getElementById("phone").value;

    let age =
        document.getElementById("age").value;

    let course =
        document.getElementById("course").value;


    // Successful registration
    else {
        document.getElementById("status").textContent =
            "Registration Successful! Welcome, " + name + ".";
        let stat =
            document.getElementById("status");

        stat.classList.add("success");

        // create student card
        let card = 
            document.createElement("div");
        card.classList.add("student-card");

        let heading =
            document.createElement("h3");
        heading.textContent = "Registered Student";

        let nameText =
            document.createElement("p");

        nameText.textContent = "Name: " + name;

        let emailText =
            document


    }

});



