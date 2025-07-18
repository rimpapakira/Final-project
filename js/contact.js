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

const navRight = document.querySelector(".nav-right");
const menu = document.querySelector(".icon");

menu.addEventListener("click", () => {
  navRight.classList.toggle("active");
});
//
const checkbox = document.getElementById("dash");
const icon = document.querySelector("label.icon i");

checkbox.addEventListener("change", () => {
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-times");
});
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

// Close navbar on mobile after clicking a link
document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    const navbarCollapse = document.querySelector(".navbar-collapse");
    if (navbarCollapse.classList.contains("show")) {
      new bootstrap.Collapse(navbarCollapse).toggle();
    }
  });
});

// Form submission with basic validation & success alert
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you! Your message has been successfully sent.");
  this.reset();
});

//

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
