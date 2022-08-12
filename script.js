const menu = document.querySelector('.header__nav--menu')
const close = document.querySelector('.header__nav--close')
const nav = document.querySelector('.header__nav')

menu.addEventListener('click', () => {
    nav.classList.add('open-nav')
})

close.addEventListener('click', () => {
    nav.classList.remove('open-nav')
})