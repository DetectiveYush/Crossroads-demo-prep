const revealNodes = document.querySelectorAll(".card, .feature");

const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    }
  },
  { threshold: 0.2 }
);

for (const node of revealNodes) {
  node.classList.add("reveal");
  observer.observe(node);
}
