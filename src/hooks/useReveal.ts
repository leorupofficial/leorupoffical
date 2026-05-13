import { useEffect, useRef } from 'react';

export function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-5');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    // Observe all children with data-reveal attribute
    const targets = el.querySelectorAll('[data-reveal]');
    targets.forEach(t => observer.observe(t));

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
