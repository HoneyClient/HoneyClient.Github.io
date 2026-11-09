// Add a subtle parallax effect to the stars/background on mouse move
document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    
    const icon = document.querySelector('.app-icon');
    const glow = document.querySelector('.icon-glow');
    
    if (icon) icon.style.transform = `translate(${x * 0.5}px, ${y * 0.5}px)`;
    if (glow) glow.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
});

// Simple fade-in animation on load
window.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('.hero-content');
    hero.style.opacity = 0;
    hero.style.transform = 'translateY(20px)';
    hero.style.transition = 'opacity 1s ease, transform 1s ease';
    
    setTimeout(() => {
        hero.style.opacity = 1;
        hero.style.transform = 'translateY(0)';
    }, 100);
});
