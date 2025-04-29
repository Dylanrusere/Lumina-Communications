const preloader = document.getElementById("preloader");
preloader.style.display = "flex"; // Show the preloader

// Hide the preloader once the page has fully loaded
window.addEventListener("load", () => {
    preloader.classList.add("preloader_hidden");

    preloader.addEventListener("transitionend", () => {
        document.body.removeChild(preloader); // Correct way to remove the loader
    });
});

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("show");

    // Toggle between Hamburger (☰) and Close (✖) icon
    if (navLinks.classList.contains("show")) {
        menuToggle.textContent = "✖";
    } else {
        menuToggle.textContent = "☰";
    }
});

// sticky Navigation
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });


const services = [
    "Corporate Branding and Identity Development",
    "Corporate Events and Communications",
    "Communications for Development",
    "Design and Creative Solutions",
    "Strategic Communication Consulting",
    "Photography and Video Production"
];

const backgrounds = [
    "url('../assets/images/hero.jpg')",
    "url('../assets/images/about-page.jpg')",
    "url('../assets/images/hero.jpg')",
    "url('../assets/images/img24.jpg')",
    "url('../assets/images/hero.jpg')"
];

let textIndex = 0;
let bgIndex = 0;
const typingText = document.getElementById("typingText");
const carousel = document.querySelector(".carousel");

function typeText(text, i = 0) {
    if (i < text.length) {
        typingText.innerHTML += text.charAt(i);
        setTimeout(() => typeText(text, i + 1), 100);
    } else {
        setTimeout(() => eraseText(), 2000); // Pause before erasing
    }
}

function eraseText() {
    if (typingText.innerHTML.length > 0) {
        typingText.innerHTML = typingText.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50);
    } else {
        textIndex = (textIndex + 1) % services.length;
        typeText(services[textIndex]);
    }
}

function changeBackground() {
    bgIndex = (bgIndex + 1) % backgrounds.length;
    carousel.style.backgroundImage = backgrounds[bgIndex];
}

// Start typing effect and background change
typeText(services[textIndex]);
setInterval(changeBackground, 5000);


// Portfolio
function filterProjects(category, buttonId) {
    const projectCards = document.querySelectorAll('.project-card');
    const filterButtons = document.querySelectorAll('.filter-btn');

    // Show or hide projects based on selected category
    projectCards.forEach((card) => {
      const projectCategory = card.getAttribute('data-category');

      if (category === 'All' || projectCategory === category) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });

    // Remove active class from all buttons
    filterButtons.forEach((btn) => {
      btn.classList.remove('active');
    });

    // Add active class to the clicked button
    document.getElementById(buttonId).classList.add('active');
  }

  // Default to showing all projects on page load
  filterProjects('All', 'all');