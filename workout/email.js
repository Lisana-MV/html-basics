emailjs.init({
    publicKey: "O4gNuTlJsPdf0kb0m"
});

let contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    let templateParams = {
        name: name,
        email: email,
        subject: subject,
        message: message
    };

    emailjs.send(
        "O4gNuTlJsPdf0kb0m",
        "template_frz791s",
        templateParams
    )
    .then((response) => {
        console.log("SUCCESS!");

        document.getElementById("status").textContent =
            "Message sent successfully!";

        let stat = document.getElementById("status");
        stat.classList.add("success");

        contactForm.reset();
    })
    .catch((error) => {
        console.log("FAILED...", error);

        document.getElementById("status").textContent =
            "Failed to send message.";

        let stat = document.getElementById("status");
        stat.classList.add("error");
    });
});