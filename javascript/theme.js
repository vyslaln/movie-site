// Theme Toggle Elements
const themeToggleSidebar = document.getElementById('theme-toggle');
const themeToggleNav = document.getElementById('theme-toggle-nav');
const htmlElement = document.documentElement;

// Load Saved Theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    htmlElement.setAttribute('data-theme', 'dark');
}

// Toggle Theme Function
function toggleTheme() {
    const currentTheme = htmlElement.getAttribute('data-theme');

    if (currentTheme === 'dark') {
        htmlElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
    } else {
        htmlElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
}

// Event Listeners for Both Buttons
themeToggleSidebar.addEventListener('click', toggleTheme);
themeToggleNav.addEventListener('click', toggleTheme);