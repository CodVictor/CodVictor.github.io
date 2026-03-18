/**
 * UI/UX Interactions for Victor Hugo Portfolio
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // Initialize Animate On Scroll (AOS)
    AOS.init({
        duration: 1000,
        once: true,
        mirror: false,
        offset: 100
    });

    // Smooth Scroll Implementation for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Simple Navbar background opacity toggle on scroll
    const navbar = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-black/60');
        } else {
            navbar.classList.remove('bg-black/60');
        }
    });

    // Log to confirm load
    console.log("Portfolio loaded successfully. Welcome, Victor Hugo.");
});