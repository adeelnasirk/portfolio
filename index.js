const menuBtn = document.getElementById("menu-btn");
const navbar = document.querySelector(".navbar");
const contactBtn = document.querySelector('.contact-btn');
const contactPopup = document.querySelector('.contact');

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("open");
  navbar.classList.toggle("active");
});

contactBtn.addEventListener("click", function(){
  contactPopup.classList.toggle('visible');
})

// script.js
document.addEventListener("DOMContentLoaded", function () {
  const helloText = document.querySelector(".about-heading");
  const animateEl = document.querySelectorAll(".animate-element");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fadein");
          // observer.unobserve(entry.target); // Animate only once
        }
      });
    },
    {
      threshold: 0.3,
    }
  );
  animateEl.forEach((el) => observer.observe(el));
});
