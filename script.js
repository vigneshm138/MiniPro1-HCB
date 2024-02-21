const searchIcon = document.querySelector(".header-con3");
const showSearchIcon = document.querySelector(".header-con3-searchBox");

searchIcon.addEventListener("click", () => {
  if (showSearchIcon.style.display === "block") {
    showSearchIcon.style.display = "none";
  } else {
    showSearchIcon.style.display = "block";
  }
});

showSearchIcon.addEventListener("click", (e) => {
  e.stopImmediatePropagation();
});
window.addEventListener("click", (e) => {
  if (e.target.parentElement.className !== "searchBtn") {
    showSearchIcon.style.display = "none";
  }
});

// active navbar
const navLinks = document.querySelectorAll(".navbar-nav .nav-item");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    const btnName = e.target.classList.contains("dropdown-toggle-split");
    if (!btnName) {
      navLinks.forEach((val) => {
        val.childNodes[1].classList.remove("active");
      });
      e.target.classList.add("active");
    } else {
      navLinks.forEach((val) => {
        val.childNodes[1].classList.remove("active");
      });
    }
  });
});

window.addEventListener("scroll", reveal);

function reveal() {
  let reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let revealTop = reveals[i].getBoundingClientRect().top;

    if (revealTop < windowHeight) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

let cont = document.querySelector(".singlePage1-content");
let h1 = document.querySelector(".backtexth1");
let ullist = document.querySelector(".backtextul");

setTimeout(() => {
  cont.classList.add("active");
}, 100);

setTimeout(() => {
  h1.classList.add("active");
}, 700);

setTimeout(() => {
  ullist.classList.add("active");
}, 1000);

const threeFive = document.querySelector(".threeFive");
const fourthou = document.querySelector(".fourthou");
const hundred = document.querySelector(".hundred");
const fifty = document.querySelector(".fifty");

let businessYearStart = 0;
let businessYearEnd = 35;
let happyCustomersStart = 0;
let happyCustomersEnd = 4000;
let hundredStart = 0;
let hundredEnd = 100;
let fiftyStart = 0;
let fiftyEnd = 50;

let fiftyCount = setInterval(() => {
  fifityfun();
}, 100);

function fifityfun() {
  fifty.innerHTML = ++fiftyStart;
  if (fiftyStart == fiftyEnd) {
    clearInterval(fiftyCount);
  }
}

let hunderdCout = setInterval(() => {
  hunderdd();
}, 100);

function hunderdd() {
  hundred.innerHTML = ++hundredStart;
  if (hundredEnd == hundredStart) {
    clearInterval(hunderdCout);
  }
}

let Bunsinesscount = setInterval(() => {
  businessyear();
}, 300);

function businessyear() {
  threeFive.innerHTML = ++businessYearStart;
  if (businessYearStart == businessYearEnd) {
    clearInterval(Bunsinesscount);
  }
}

let happyCus = setInterval(() => {
  happyCustomers();
}, 0);

function happyCustomers() {
  fourthou.innerHTML = ++happyCustomersStart;
  if (happyCustomersStart == happyCustomersEnd) {
    clearInterval(happyCus);
  }
}
