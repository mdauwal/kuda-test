/* script.js */
document.addEventListener("DOMContentLoaded", function() {
    // This script can dynamically add testimonials or control animation
    const testimonials = [
        "Dynamic Testimonial 1",
        "Dynamic Testimonial 2",
        "Dynamic Testimonial 3"
    ];

    const track = document.querySelector('.testimonial-track');
    
    testimonials.forEach(testimonial => {
        const div = document.createElement('div');
        div.classList.add('testimonial');
        div.textContent = testimonial;
        track.appendChild(div);
    });
});
