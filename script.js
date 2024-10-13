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
