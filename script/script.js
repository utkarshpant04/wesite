const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if (top >= 100) {
        header.classList.add('navbarDark');
    } else {
        header.classList.remove('navbarDark');
    }
}

// Form submission handling
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Simulate sending data to a server
    setTimeout(function() {
        // Display response
        var responseDiv = document.getElementById('response');
        responseDiv.innerHTML = '<p>Thank you, ' + name + '! Your message has been sent.</p>';

        // Clear form fields
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
    }, 1000);
});

// Collapse navbar when clicking outside
document.addEventListener("click", function(event) {
    var isClickInsideNavbar = document.querySelector(".navbar").contains(event.target);
    var isClickOnNavbarToggle = event.target.closest(".navbar-toggler");
    if (!isClickInsideNavbar && !isClickOnNavbarToggle) {
        var navbarCollapse = document.querySelector(".navbar-collapse");
        if (navbarCollapse.classList.contains("show")) {
            navbarCollapse.classList.remove("show");
        }
    }
});
