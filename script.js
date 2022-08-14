// const BUTTON = document.querySelector('.hamburger')
// // const close = document.querySelector('.header__nav--close')
// const NAV = document.querySelector('.header__nav')

// BUTTON.addEventListener('click', () => {
//     NAV.classList.add('header__nav')
// })

// // .addEventListener('click', () => {
// //     nav.classList.remove('open-nav')
// })

const toggle = document.getElementById('toggle')
const nav = document.getElementById('nav')

toggle.addEventListener('click', () => nav.classList.toggle('active'))