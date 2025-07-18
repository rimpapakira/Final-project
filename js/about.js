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

//
const track = document.getElementById("logoTrack");
const logos = track.innerHTML;
track.innerHTML += logos;

//

var swiper = new Swiper("#mySwiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 30,
  mousewheel: true,
});

//

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
