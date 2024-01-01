const uiMenuOpen = document.querySelector('.menu-open-icon');
const uiNavMenuList = document.querySelector('.nav-list');
const uiCloseIcon = document.querySelector('.close-icon');
const uiThemeIcon = document.querySelector('.theme i');
const uiThemeText = document.querySelector('.theme p');
const uiThemeBtn = document.querySelector('.theme');
const uiScrollHiddens = document.querySelectorAll('.scrl-hidden')

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-scrl')
        } else {
            entry.target.classList.remove('show-scrl')
        }
    })
})

uiScrollHiddens.forEach((scrl) => observer.observe(scrl))

let isLightG = true;

document.addEventListener('DOMContentLoaded', function () {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Check if the user prefers dark mode
    if (prefersDarkMode) {
        setThemeMode(true)
    }

    uiMenuOpen.addEventListener('click', () => {
        uiNavMenuList.classList.add('active');
        document.querySelector('body').classList.add('no-scroll')
    })
    
    uiCloseIcon.addEventListener('click', () => {
        uiNavMenuList.classList.remove('active')
        document.querySelector('body').classList.remove('no-scroll')
    
    })
    
    uiThemeBtn.addEventListener('click', () => {
        setThemeMode(isLightG)
    })
});



function setThemeMode(isLight){
    console.log('Theme is about to change ' + isLight)
    if (isLight) {
        uiThemeIcon.classList.remove('fa-moon')
        uiThemeIcon.classList.add('fa-sun')
        uiThemeText.textContent = 'Light Mode'
        document.querySelector('body').classList.add('dark-mode')
        isLightG = false
    } else {
        uiThemeIcon.classList.remove('fa-sun')
        uiThemeIcon.classList.add('fa-moon')
        uiThemeText.textContent = 'Dark Mode'
        document.querySelector('body').classList.remove('dark-mode')
        isLightG = true
    }
}