/////  NAVIGATION BAR FUNCTION
const nav = document.getElementById('nav')
const toggle = document.getElementById('toggle')

toggle.addEventListener('click', () => nav.classList.toggle('active'))

// ///// PAGE SCROLL IN ANIMATION FUNCTION
// function reveal() {
//   let reveals = document.querySelectorAll(".reveal");

//   for (let i = 0; i < reveals.length; i++) {
//     let windowHeight = window.innerHeight;
//     let elementTop = reveals[i].getBoundingClientRect().top;
//     let elementVisible = 150;

//     if (elementTop < windowHeight - elementVisible) {
//       reveals[i].classList.add("active");
//     } else {
//       reveals[i].classList.remove("active");
//     }
//   }
// }

// window.addEventListener("scroll", reveal);

// // /// DARK MODE TOGGLE
// // function myFunction() {
// //   let toggleOn = document.body
// //   toggleOn.classList.toggle("dark-mode");
// // }

/// NAVIGATION BAR SCROLL REVEAL
let section = document.querySelectorAll("section");
let menu = document.querySelectorAll("header nav a");

window.onscroll = () => {
  section.forEach((i) => {
    let top = window.scrollY;
    let offset = i.offsetTop - 150;
    let height = i.offsetHeight;
    let id = i.getAttribute("id");

    if (top >= offset && top < offset + height) {
      menu.forEach((link) => {
        link.classList.remove("active");
        document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
      });
    }
  });
};

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();