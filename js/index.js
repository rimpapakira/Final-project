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
// service

// Products
function scrollSlider(direction) {
  const slider = document.getElementById("slider1");
  const cardWidth = slider.querySelector(".card1").offsetWidth + 20;
  slider.scrollLeft += direction * cardWidth;
}
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

const track = document.getElementById("sliderTrack");
let currentIndex = 0;

function getSlideWidth() {
  return track.children[0].offsetWidth + 20;
}

function updateSlider() {
  const slideWidth = getSlideWidth();
  const containerWidth = document.querySelector(".slider").offsetWidth;
  const offset = (containerWidth - slideWidth) / 2;
  track.style.transition = "transform 0.5s ease-in-out";
  track.style.transform = `translateX(${
    -currentIndex * slideWidth + offset
  }px)`;
}

function nextSlide() {
  currentIndex++;
  if (currentIndex >= track.children.length) {
    currentIndex = 0;
  }
  updateSlider();
}

function startAutoSlide() {
  setInterval(nextSlide, 3000);
}

window.addEventListener("resize", updateSlider);

updateSlider();
startAutoSlide();

//

