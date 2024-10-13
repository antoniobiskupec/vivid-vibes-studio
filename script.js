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
