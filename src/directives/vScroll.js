const options = { threshold: 1 };

const observer = new IntersectionObserver((entries, observer) => {
  let delay = 0;
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add("enter");
        entry.target.classList.remove("before-enter");
      }, delay);
      delay += 50;
      observer.unobserve(entry.target);
    }
  });
}, options);

export default {
  mounted(el) {
    el.classList.add("before-enter");
    observer.observe(el);
  },
};