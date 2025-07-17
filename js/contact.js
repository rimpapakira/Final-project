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
      window.scrollTo({ top: 0, behavior: 'smooth' });}
