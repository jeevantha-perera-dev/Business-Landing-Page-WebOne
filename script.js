

// MOBILE MENU
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});




// SMOOTH SCROLL
document.querySelectorAll(".navLinks a").forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({
            behavior: "smooth"
        });

        navLinks.classList.remove("active");
    });
});


// CONTACT FORM
function submitForm(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let number = document.getElementById("number").value;
    let message = document.getElementById("message").value;

    if (
        name === "" ||
        email === "" ||
        number === "" ||
        message === ""
    ) {

        document.getElementById("demo").innerHTML =
            "All fields are required!";

    } else {

        const formData = {
            name: name,
            email: email,
            number: number,
            message: message
        };

        document.getElementById("demo").innerHTML = "Sending message......";

        fetch('http://localhost:3000/api/contact', {
            method: 'POST',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }).then(response => response.json())
            .then(data => {
                if (data.success) {
                    document.getElementById("demo").innerHTML = data.message;
                    document.getElementById("form-id").reset();
                }
            }).catch(error => {
                console.error('Error:', error);
                document.getElementById("demo").innerHTML = "There was an error sending the message. Please try again later.";
            });
    }
}


// CLEAR FORM
function clearForm() {

    document.getElementById("form-id").reset();

    document.getElementById("demo").innerHTML =
        "Please Note: All fields are required.";
}