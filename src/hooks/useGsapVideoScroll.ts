import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
          scrub: true, // Smooth scrubbing with scrollbar
          markers: false, // Set to true for debugging
          toggleActions: 'play none none reverse',
        },
        duration,
        ease,
      }
    );

    // Cleanup
    return () => {
      scrollAnimation.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [direction, duration, ease, distance]);

  return videoRef;
};
