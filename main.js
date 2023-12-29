const uiMenuOpen = document.querySelector('.menu-open-icon');
const uiNavMenuList = document.querySelector('.nav-list');
const uiCloseIcon = document.querySelector('.close-icon');


uiMenuOpen.addEventListener('click', ()=> {
    uiNavMenuList.classList.add('active');
})

uiCloseIcon.addEventListener('click', ()=> {
    uiNavMenuList.classList.remove('active')
})