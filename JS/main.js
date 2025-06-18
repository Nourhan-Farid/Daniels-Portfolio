let scrollsTop = document.querySelector(".scrollTop");
let navbarNav = document.querySelector(".navbar-nav");
let navbarToggler = document.querySelector(".navbar-toggler");
let navItems = document.querySelectorAll(".nav-item");
let blackBurger = document.getElementById("blackBurger");
let whiteBurger = document.getElementById("whiteBurger");
// OnScroll Navbar----Start
window.onscroll = function () {
  myFunction();
};

function myFunction() {
  if (document.documentElement.scrollTop > 100) {
    document.getElementById("scroll").className = "navBar-scroll";
    blackBurger.classList.replace("d-none", "d-flex");
    whiteBurger.classList.replace("d-flex", "d-none");
  } else {
    document.getElementById("scroll").className = "navbar";
    whiteBurger.classList.replace("d-none", "d-flex");
    blackBurger.classList.replace("d-flex", "d-none");
  }
}

// OnScroll Navbar----End
// --------------------------------------------------
// Mini-Section-Counter

let valueDisplays = document.querySelectorAll(".nums");
let interval = 7000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));

  let dauration = Math.floor(interval / endValue);

  let counter = setInterval(function () {
    startValue += 10;
    valueDisplay.textContent = startValue;

    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, dauration);
});

let valuesDisplays = document.querySelectorAll(".num");
let intervals = 4000;

valuesDisplays.forEach((valuesDisplay) => {
  let startValues = 0;
  let endValues = parseInt(valuesDisplay.getAttribute("data-val"));

  let dauration = Math.floor(intervals / endValues);

  let counter = setInterval(function () {
    startValues += 90;
    valuesDisplay.textContent = startValues;

    if (startValues == endValues) {
      clearInterval(counter);
    }
  }, dauration);
});

// scrolling up button

const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

scrollsTop.addEventListener("click", scrollTop);

const topBtn = () => {
  if (window.scrollY >= 100) {
    scrollsTop.classList.replace("d-none", "d-flex");
  } else {
    scrollsTop.classList.replace("d-flex", "d-none");
  }
};

window.addEventListener("scroll", topBtn);
