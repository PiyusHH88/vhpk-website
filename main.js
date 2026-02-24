// This function runs as soon as the script loads
(function() {
    // Add a class to the body so the CSS knows JS is working
    document.documentElement.classList.add('js-enabled');
})();

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. MOBILE MENU LOGIC
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;

    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', (e) => {
            e.preventDefault();
            navLinks.classList.toggle('nav-active');
            
            // Toggle Icon
            const icon = mobileToggle.querySelector('i');
            if (navLinks.classList.contains('nav-active')) {
                icon.className = 'fas fa-times'; // Switch to X
                body.style.overflow = 'hidden'; // Prevent background scroll
            } else {
                icon.className = 'fas fa-bars'; // Switch to Hamburger
                body.style.overflow = 'auto';
            }
        });
    }

    // 2. SCROLL REVEAL LOGIC
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOptions = {
        threshold: 0.3,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // 3. NAVBAR SCROLL EFFECT
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});