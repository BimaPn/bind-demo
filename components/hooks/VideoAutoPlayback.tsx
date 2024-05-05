import { useRef, useEffect } from 'react';

const useVideoAutoPlayback = (options: IntersectionObserverInit) => {
  const containerRef = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const cb = (entries:IntersectionObserverEntry[]) => {
    const [entry] = entries;

    if (videoRef.current && entry.isIntersecting) {
      videoRef.current.play()
    } else {
      if(videoRef.current) {
        videoRef.current.pause()
      }
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(cb, options)

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    };
  }, [containerRef, options]);

  return [containerRef, videoRef];
};

export { useVideoAutoPlayback };
