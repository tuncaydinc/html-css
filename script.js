document.addEventListener('DOMContentLoaded', () => {
    // Add hover effect to the title
    const title = document.querySelector('.title');
    title.addEventListener('mouseover', () => {
        title.style.transform = 'scale(1.1)';
        title.style.transition = 'transform 0.3s ease';
    });
    title.addEventListener('mouseout', () => {
        title.style.transform = 'scale(1)';
    });

    // Add pulsing animation to the animated text
    const animatedText = document.querySelector('.animated-text');
    setInterval(() => {
        animatedText.style.transform = 'scale(1.1)';
        setTimeout(() => {
            animatedText.style.transform = 'scale(1)';
        }, 500);
    }, 2000);
});