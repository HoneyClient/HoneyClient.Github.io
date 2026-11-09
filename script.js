// Add a subtle parallax effect to the stars/background on mouse move
document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    
    const icon = document.querySelector('.app-icon');
    const glow = document.querySelector('.icon-glow');
    
    if (icon) icon.style.transform = `translate(${x * 0.5}px, ${y * 0.5}px)`;
    if (glow) glow.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
});

// Fade-in animation on load
window.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('.hero-content');
    hero.style.opacity = 0;
    hero.style.transform = 'translateY(20px)';
    hero.style.transition = 'opacity 1s ease, transform 1s ease';
    
    setTimeout(() => {
        hero.style.opacity = 1;
        hero.style.transform = 'translateY(0)';
    }, 100);

    // Fetch Discord Live Stats using the Invite API
    // We use the invite code to get the approximate member and online counts
    const discordInviteCode = 'qAKpyKM3GP';
    
    fetch(`https://discord.com/api/v10/invites/${discordInviteCode}?with_counts=true`)
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.json();
        })
        .then(data => {
            // Update the DOM with the counts
            const memberCountEl = document.getElementById('member-count');
            const onlineCountEl = document.getElementById('online-count');
            
            if (memberCountEl && data.approximate_member_count) {
                memberCountEl.textContent = data.approximate_member_count;
            }
            if (onlineCountEl && data.approximate_presence_count) {
                onlineCountEl.textContent = data.approximate_presence_count;
            }
        })
        .catch(error => {
            console.warn('Could not fetch Discord stats:', error);
            // If it fails (e.g., rate limited), leave the "--" placeholder
        });
});
