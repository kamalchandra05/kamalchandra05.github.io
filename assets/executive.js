// Reveal sections only when the browser can observe them. Content remains readable without scripts.
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  }, {threshold: 0.12});

  document.querySelectorAll('.reveal').forEach(section => observer.observe(section));
}
