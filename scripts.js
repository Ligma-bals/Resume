document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for your message!');
        form.reset();
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
