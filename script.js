// Hamburger menu in navbar
const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible");

  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else if (visibility === "true") {
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});
// Observer for container-two

document.addEventListener("DOMContentLoaded", function () {
  const containerTwo = document.querySelector(".container-two");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          containerTwo.classList.add("animate");
          observer.unobserve(containerTwo); // Stop observing once animation is triggered
        }
      });
    },
    { threshold: 0.1 }
  );

  observer.observe(containerTwo);
});

document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".info-animate");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.1 }
  ); // Trigger when 10% of the element is visible

  elements.forEach((element) => {
    observer.observe(element);
  });
});
