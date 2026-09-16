emailjs.init({
    publicKey: "O4gNuTlJsPdf0kb0m"
});

let loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // login check
    if (email === "test@gmail.com" && password === "1234") {

        let templateParams = {
            email: email,
            message: "A user has successfully logged in."
        };

        emailjs.send(
            "O4gNuTlJsPdf0kb0m",
            "template_frz791s",
            templateParams
        )
        .then(() => {

            console.log("Login email sent!");

            window.location.href = "home.html";

        })
        .catch((error) => {

            console.log("Email failed:", error);

            window.location.href = "home.html";
        });

    } else {

        document.getElementById("status").textContent =
            "Invalid email or password.";
    }
});