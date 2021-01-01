const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image-1');
const image2 = document.getElementById('image-2');
const image3 = document.getElementById('image-3');
const textBox = document.getElementById('text-box');

// dark or light Images
function imageMode(color) {
    image1.src= `img/undraw_Code_review_${color}.png`;
    image2.src= `img/undraw_Progress_indicator_${color}.png`;
    image3.src= `img/undraw_Upvote_${color}.png`;
}

// Toggle Between Dark & light Mode
function toggleDarkLightMode(isDark) {
    nav.style.background =  isDark ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
    textBox.style.background = isDark ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = isDark ? ' Dark Mode' : 'Light Mode';
    isDark ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    isDark ? imageMode('dark') : imageMode('light');
    
}

// Swtich Theme
function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        toggleDarkLightMode(true);
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        toggleDarkLightMode(false);
    }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// Check local Storage for Theme

const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        toggleDarkLightMode(true);
    }
}