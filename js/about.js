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
