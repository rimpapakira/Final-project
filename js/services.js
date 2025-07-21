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

//
const track = document.getElementById("logoTrack");
const logos = track.innerHTML;
track.innerHTML += logos;

//

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
