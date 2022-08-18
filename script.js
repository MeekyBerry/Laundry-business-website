/////  NAVIGATION BAR FUNCTION
const nav = document.getElementById('nav')
const toggle = document.getElementById('toggle')

toggle.addEventListener('click', () => nav.classList.toggle('active'))

///// PAGE SCROLL IN ANIMATION FUNCTION
function reveal() {
    let reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);