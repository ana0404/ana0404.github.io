import { useGsapVideoScroll } from '../hooks';

export const VideoScrollDemo = () => {
  const videoRef = useGsapVideoScroll({
    direction: 'vertical',
    duration: 1,
    ease: 'power2.inOut',
    distance: 300,
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4">
      <div className="w-full max-w-2xl">
        <video
          ref={videoRef}
          src="/flower.mp4"
          className="w-full h-auto rounded-lg shadow-2xl"
          loop
          muted
          playsInline
        />
      </div>
      <p className="text-white mt-8 text-center">
        Scroll to see the smooth animation effect
      </p>
    </div>
  );
};
