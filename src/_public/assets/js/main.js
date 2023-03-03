//animation on scroll starts
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-shown");
    } else {
      entry.target.classList.remove("is-shown");
    }
  });
});

const hiddenElements = document.querySelectorAll(".is-hidden");
hiddenElements.forEach((el) => observer.observe(el));
//animation on scroll ends
