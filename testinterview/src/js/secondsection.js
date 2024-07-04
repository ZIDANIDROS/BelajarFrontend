document.addEventListener('DOMContentLoaded', () => {
  function counter(id, start, end, duration) {
    let obj = document.getElementById(id);
    let current = start;
    let range = end - start;
    let increment = end > start ? 1 : -1;
    let step = Math.abs(Math.floor(duration / range));
    let timer = setInterval(() => {
      current += increment;
      obj.textContent = current;
      if (current === end) {
        clearInterval(timer);
      }
    }, step);
  }

  let options = {
    root: null, // relative to document viewport
    rootMargin: '0px',
    threshold: 0.1, // trigger when 10% of the element is visible
  };

  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        let id = entry.target.querySelector('span').id;
        if (id === 'count1') {
          counter('count1', 0, 400, 3000);
        } else if (id === 'count2') {
          counter('count2', 100, 500, 2500);
        } else if (id === 'count3') {
          counter('count3', 0, 98, 3000);
        }
        observer.unobserve(entry.target); // stop observing after the animation starts
      }
    });
  }, options);

  document.querySelectorAll('.col').forEach((col) => {
    observer.observe(col);
  });
});
