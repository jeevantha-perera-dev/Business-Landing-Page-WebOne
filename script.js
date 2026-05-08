

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

        document.getElementById("demo").innerHTML =
            `Thank you for contacting us, ${name}!`;
    }
}


// CLEAR FORM
function clearForm() {

    document.getElementById("form-id").reset();

    document.getElementById("demo").innerHTML =
        "Please Note: All fields are required.";
}