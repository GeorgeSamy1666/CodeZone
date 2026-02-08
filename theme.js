// theme.js

// Function to toggle between dark and light mode
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    // Save the current theme in localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

// Function to load the saved theme from localStorage
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    const body = document.body;
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
    }
}

// Load the saved theme on page load
window.onload = loadTheme;

// Example: Attach toggleTheme to a button click
// document.getElementById('theme-toggle-btn').addEventListener('click', toggleTheme);