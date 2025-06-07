
export const initializeScrollAnimations = () => {
  const observerOptions = {
    threshold: [0.1],
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        requestAnimationFrame(() => {
          entry.target.classList.add('is-visible');
        });
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const elementsToAnimate = document.querySelectorAll('.scroll-animate');
  elementsToAnimate.forEach((el) => observer.observe(el));

  return () => observer.disconnect();
};
