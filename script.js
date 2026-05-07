// // Select all nav links
// const navLinks = document.querySelectorAll(".navLinks a");

// // Smooth scrolling
// navLinks.forEach(link => {
//     link.addEventListener("click", function (e) {
//         e.preventDefault();

//         const targetId = this.getAttribute("href");
//         const targetSection = document.querySelector(targetId);

//         targetSection.scrollIntoView({
//             behavior: "smooth"
//         });
//     });
// });


// // Active link on scroll
// const sections = document.querySelectorAll("section");

// window.addEventListener("scroll", () => {
//     let current = "";

//     sections.forEach(section => {
//         const sectionTop = section.offsetTop - 100;
//         const sectionHeight = section.clientHeight;

//         if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
//             current = section.getAttribute("class");
//         }
//     });

//     navLinks.forEach(link => {
//         link.classList.remove("active");

//         if (link.getAttribute("href").includes(current)) {
//             link.classList.add("active");
//         }
//     });
// });

// function submitForm() {
//     event.preventDefault();
//     let name = document.getElementById("name").value;
//     let email = document.getElementById("email").value;
//     let number = document.getElementById("number").value;
//     let message = document.getElementById("message").value;

//     if (name == "" || email == "" || number == "" || message == "") {
//         document.getElementById("demo").innerHTML = "All fields are required!";
//     } else {
//         document.getElementById("demo").innerHTML = "Thank you for contacting us, " + name + "!";
//     }
// }

// function clearForm() {
//     document.getElementById("demo").innerHTML = "Please Note: All fields are required.";
//     document.getElementById("form-id").reset();
// }

// function emailSend() {

// }

// const MenuToggle = document.getElementById("menuToggle");
// const NavLinks = document.getElementById("navLinks");

// MenuToggle.addEventListener("click", () => {
//     NavLinks.classList.toggle("active");
// });

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