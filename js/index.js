// location
function toggleDropdown() {
  const modal = document.getElementById("locationModal");
  modal.classList.toggle("hidden");
}

function closeModal() {
  document.getElementById("locationModal").classList.add("hidden");
}

function selectLocation(name) {
  document.getElementById("selectedLocation").textContent = name;
  closeModal();
}
// navbar

// const navRight = document.querySelector(".nav-right");
// const menu = document.querySelector(".icon");

// menu.addEventListener("click", () => {
//   navRight.classList.toggle("active");
// });
// function toggleNav(el) {
//   const nav = document.getElementById("navRight");
//   const icon = el.querySelector("i");
//   nav.classList.toggle("active");
//   icon.classList.toggle("fa-bars");
//   icon.classList.toggle("fa-xmark");
// }

// function closeNav() {
//   const nav = document.getElementById("navRight");
//   const icon = document.querySelector("#menuIcon i");
//   nav.classList.remove("active");
//   icon.classList.remove("fa-xmark");
//   icon.classList.add("fa-bars");
// }

// function openLogin(e) {
//   e.preventDefault();
//   document.getElementById("overlay").classList.add("active");
// }

// function closeLogin() {
//   document.getElementById("overlay").classList.remove("active");
// }
// //
// function closeNav() {
//   document.getElementById("navRight").classList.remove("active");
// }

// function openLogin(e) {
//   e.preventDefault();
//   document.getElementById("overlay").classList.add("active");
// }
//
function toggleNav() {
  document.getElementById("navRight").classList.add("active");
}

function closeNav() {
  document.getElementById("navRight").classList.remove("active");
}

function openLogin(e) {
  e.preventDefault();
  document.getElementById("overlay").classList.add("active");
}

function closeLogin() {
  document.getElementById("overlay").classList.remove("active");
}
//

function openLogin(e) {
  e.preventDefault();
  document.getElementById("overlay").style.display = "flex";
  document.body.classList.add("no-scroll");
}
function closeLogin() {
  document.getElementById("overlay").style.display = "none";
  document.body.classList.remove("no-scroll");
}
// service

// step
const cards = document.querySelectorAll(".step-card");

cards.forEach((card, index) => {
  card.addEventListener("mouseover", () => {
    if (index > 0) {
      const previousLine = cards[index - 1].querySelector(".step-line");
      if (previousLine) {
        previousLine.classList.add("animate");
      }
    }
  });

  card.addEventListener("mouseout", () => {
    if (index > 0) {
      const previousLine = cards[index - 1].querySelector(".step-line");
      if (previousLine) {
        previousLine.classList.remove("animate");
      }
    }
  });
});
// testimonial
document.addEventListener("DOMContentLoaded", function () {
  new Splide("#autoScrollSlider", {
    type: "loop",
    perPage: 4,
    gap: "1rem",
    arrows: false,
    pagination: false,
    autoScroll: {
      speed: 1, // lower = slower scroll
    },
    breakpoints: {
      768: { perPage: 2 },
      480: { perPage: 1 },
    },
  }).mount(window.splide.Extensions);
});
//

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
