import React, { useEffect } from 'react';

const observerCallback: IntersectionObserverCallback = (
    entries: IntersectionObserverEntry[],
    observerInstance: IntersectionObserver,
) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const classToEnable =
        (entry.target as HTMLElement).dataset.visibilityTrigger ?? '';

      if (classToEnable !== '') {
        const classesToAdd = classToEnable.split(' ');
        entry.target.classList.add(...classesToAdd);
      }

      observerInstance.unobserve(entry.target);
    }
  });
};

export default function VisibilityTrigger() {
  useEffect(() => {
    if ((window as any).hasVisibilityTrigger) {
      throw new Error('There can be only one VisibilityTrigger per document');
    } else {
      (window as any).hasVisibilityTrigger = true;
    }
    const targets = document.querySelectorAll('[data-visibility-trigger]');
    const observer = new IntersectionObserver(observerCallback);
    Array.from(targets).forEach((target) => observer.observe(target));
  }, []);

  return <></>;
}
