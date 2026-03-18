/**
 * CodVictor Portfolio - Interactive Script 2026
 */

document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.getElementById('custom-cursor');
    const glowBlob = document.getElementById('glow-blob');
    
    // 1. Mouse Follower / Glow Blob Logic
    document.addEventListener('mousemove', (e) => {
        // Update Custom Cursor
        cursor.style.left = `${e.clientX - 10}px`;
        cursor.style.top = `${e.clientY - 10}px`;

        // Update Glow Background Blob (with a slight delay/smoothness)
        requestAnimationFrame(() => {
            glowBlob.style.left = `${e.clientX - 300}px`;
            glowBlob.style.top = `${e.clientY - 300}px`;
        });
    });

    // 2. Interactive Tilt Effect (Geeky 3D Cards)
    const cards = document.querySelectorAll('[data-tilt]');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
        });
    });

    // 3. Scroll Reveal Observer
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-10');
            }
        });
    }, observerOptions);

    // Apply reveal to project cards
    document.querySelectorAll('.project-grid-card, .stilnovo-card').forEach(el => {
        el.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-10');
        observer.observe(el);
    });
});