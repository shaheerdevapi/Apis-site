// script.js

document.addEventListener('DOMContentLoaded', function () {
    console.log("Shaheer APIs site loaded");

    // Handle contact form submission (if contact.html is loaded)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent default form submission

            // Get form fields
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');

            // Trim values
            const name = nameInput.value.trim();
            const email = emailInput.value.trim();
            const message = messageInput.value.trim();

            // Validation: Check for empty fields
            if (!name) {
                alert("Please enter your name.");
                nameInput.focus();
                return;
            }

            if (!email) {
                alert("Please enter your email address.");
                emailInput.focus();
                return;
            }

            // Email format validation (simple but effective regex)
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert("Please enter a valid email address (e.g., user@example.com).");
                emailInput.focus();
                return;
            }

            if (!message) {
                alert("Please enter a message.");
                messageInput.focus();
                return;
            }

            // ✅ All validations passed
            // Note: For GitHub Pages, form submission requires a 3rd-party service (e.g., Formspree)
            // For now, show success and reset (or redirect as needed)
            alert("Thank you! Your message has been sent.");
            contactForm.reset();
        });
    }
});
