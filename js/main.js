// header-scroll
let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 50) {
        nav.classList.add("header-scrolled");
    } else {
        nav.classList.remove("header-scrolled");
    }
}

// nav hide
let navbar = document.querySelectorAll(".nav-link");
let navcollapse = document.querySelector(".navbar-collapse.collapse");
navbar.forEach(function (e) {
    e.addEventListener("click", function () {
        navcollapse.classList.remove("show");
    })
})




document.getElementById('submit-btn').addEventListener('click', function () {
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const address = document.getElementById('address').value.trim();
    const number = document.getElementById('number').value.trim();
    const message = document.getElementById('message').value.trim();

    // Email regex pattern
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    
    // Validation
    if (!name) {
        alert('Name is required.');
        return;
    }
    if (!email || !emailPattern.test(email)) {
        alert('Enter a valid email address.');
        return;
    }
    if (!address) {
        alert('Address is required.');
        return;
    }
    if (!number || isNaN(number)) {
        alert('Enter a valid phone number.');
        return;
    }
    if (!message) {
        alert('Message is required.');
        return;
    }

    // If all fields are valid
    alert('Form submitted successfully!');
});


