document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        const currentTheme = body.classList.contains('light-mode') ? 'light' : 'dark';
        localStorage.setItem('theme', currentTheme);
    });

    const greetBtn = document.getElementById('greet-btn');
    const heroCard = document.querySelector('.glass-card');
    
    greetBtn.addEventListener('click', () => {
        // Simple micro-interaction
        heroCard.style.transition = 'transform 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55)';
        heroCard.style.transform = 'scale(1.05) rotate(2deg)';
        
        setTimeout(() => {
            heroCard.style.transform = 'scale(1) rotate(0deg)';
        }, 500);

        // Add fun message
        const originalSubtitle = document.querySelector('.subtitle').textContent;
        document.querySelector('.subtitle').textContent = "Thanks for clicking! You're awesome.";
        document.querySelector('.subtitle').style.color = "#ec4899";
        
        setTimeout(() => {
            document.querySelector('.subtitle').textContent = originalSubtitle;
            document.querySelector('.subtitle').style.color = "#94a3b8";
        }, 3000);
    });

    // Subtle parallax effect on mouse move
    document.addEventListener('mousemove', (e) => {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 40;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 40;
        
        const blobs = document.querySelectorAll('.blob');
        blobs.forEach((blob, index) => {
            const speed = (index + 1) * 0.5;
            blob.style.transform = `translate(${xAxis * speed}px, ${yAxis * speed}px)`;
        });
    });
});
