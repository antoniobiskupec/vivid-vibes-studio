// Observer for container-two

document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".container-two");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          container.classList.add("animate");
          observer.unobserve(container); // Stop observing once animation is triggered
        }
      });
    },
    { threshold: 0.1 }
  );

  observer.observe(container);
});
