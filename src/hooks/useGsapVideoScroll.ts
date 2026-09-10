import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface UseGsapVideoScrollProps {
  direction?: 'vertical' | 'horizontal';
  duration?: number;
  ease?: string;
  distance?: number; // Distance to move in pixels
}

export const useGsapVideoScroll = ({
  direction = 'vertical',
  duration = 1,
  ease = 'power2.inOut',
  distance = 300,
}: UseGsapVideoScrollProps = {}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;
    // Initialize Lenis for smooth scrolling and wire it to ScrollTrigger
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    // tell ScrollTrigger to use Lenis' scrolling values
    const scroller = document.scrollingElement || document.documentElement;

    ScrollTrigger.scrollerProxy(scroller as any, {
      scrollTop(value: number) {
        if (arguments.length) {
          lenis.scrollTo(value);
        }
        return scroller.scrollTop;
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      // pinType depends on the transform support
      pinType: (scroller as any).style?.transform ? 'transform' : 'fixed',
    });

    lenis.on('scroll', () => ScrollTrigger.update());

    // Create scroll animation
    const scrollAnimation = gsap.fromTo(
      videoElement,
      {
        [direction === 'vertical' ? 'y' : 'x']: 0,
        opacity: 0,
      },
      {
        [direction === 'vertical' ? 'y' : 'x']: direction === 'vertical' ? distance : -distance,
        opacity: 1,
        scrollTrigger: {
          trigger: videoElement,
          start: 'top 80%',
          end: 'top 20%',
          scrub: true, // Smooth scrubbing with Lenis
          markers: false, // Set to true for debugging
          toggleActions: 'play none none reverse',
          scroller,
        },
        duration,
        ease,
      }
    );

    // Cleanup
    return () => {
      scrollAnimation.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      // stop RAF and destroy lenis
      cancelAnimationFrame(rafId);
      lenis.destroy();
      // remove scrollerProxy
      try {
        // @ts-ignore
        ScrollTrigger.scrollerProxy(scroller as any, null);
      } catch (e) {
        // ignore
      }
    };
  }, [direction, duration, ease, distance]);

  return videoRef;
};
