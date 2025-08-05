// Theme toggle logic for switching CSS files
document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('theme-toggle');
    const icon = document.getElementById('theme-icon');
    const themeStyle = document.getElementById('theme-style');
    // Set initial theme
    function setTheme(mode) {
        if (mode === 'light') {
            themeStyle.href = './light.css';
            icon.classList.remove('bi-moon-fill');
            icon.classList.add('bi-sun-fill');
        } else {
            themeStyle.href = './dark.css';
            icon.classList.remove('bi-sun-fill');
            icon.classList.add('bi-moon-fill');
        }
    }
    let saved = localStorage.getItem('theme');
    setTheme(saved === 'light' ? 'light' : 'dark');
    btn.addEventListener('click', function() {
        let current = themeStyle.getAttribute('href').includes('light.css') ? 'light' : 'dark';
        let next = current === 'light' ? 'dark' : 'light';
        setTheme(next);
        localStorage.setItem('theme', next);
    });
});
