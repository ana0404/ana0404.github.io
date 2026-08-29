import { useEffect } from 'react';
import { trackEvent } from './useAnalytics';

export default function useSectionAnalytics(options?: {
  threshold?: number;
  rootMargin?: string;
  sendOnce?: boolean;
}) {
  useEffect(() => {
    const threshold = options?.threshold ?? 0.5;
    const rootMargin = options?.rootMargin ?? '0px';
    const sendOnce = options?.sendOnce ?? true;

    const seen = new Set<string>();

    const elems = Array.from(document.querySelectorAll('section[id]')) as HTMLElement[];
    if (!elems.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id || entry.target.getAttribute('data-section');
          if (!id) return;
          const isVisible = entry.isIntersecting && entry.intersectionRatio >= threshold;
          if (isVisible) {
            if (sendOnce && seen.has(id)) return;
            seen.add(id);
            trackEvent('section_view', { section: id });
          }
        });
      },
      { threshold, rootMargin }
    );

    elems.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [options]);
}
