const uiMenuOpen = document.querySelector('.menu-open-icon');
const uiNavMenuList = document.querySelector('.nav-list');
const uiCloseIcon = document.querySelector('.close-icon');


uiMenuOpen.addEventListener('click', ()=> {
    uiNavMenuList.classList.add('active');
    document.querySelector('body').classList.add('no-scroll')
})

uiCloseIcon.addEventListener('click', ()=> {
    uiNavMenuList.classList.remove('active')
    document.querySelector('body').classList.remove('no-scroll')

})