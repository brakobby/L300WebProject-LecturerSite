window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

// Intersection Observer for fade-up animation.
let options = {
  threshold: 0.4, // Trigger when 40% of the element is in view
};

let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Add 'fade-in' class when element is in the viewport
      entry.target.classList.add("fade-in");

      // Stop observing after fade-in is triggered
      observer.unobserve(entry.target);
    } else {
      // Optionally remove 'fade-in' if the element is out of view
      entry.target.classList.remove("fade-in");
    }
  });
}, options);

// Select all elements with the class 'animate-on-scroll' and observe them with a 0.2 delay
document.querySelectorAll(".animate-on-scroll").forEach((item, index) => {
  const delay = index * 0.1;
  item.style.transitionDelay = `${delay}s`;
  observer.observe(item);
});
