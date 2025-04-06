// hooks/useCountUp.ts
import { useEffect, useState, useRef, RefObject } from 'react';

interface UseCountUpProps {
  end: number;
  start?: number;
  duration?: number;
}

const useCountUp = ({ end, start = 0, duration = 2000 }: UseCountUpProps): [string, RefObject<HTMLDivElement>] => {
  const [count, setCount] = useState<string>(start.toString());
  const observerRef = useRef<HTMLDivElement>(null);
  const isInViewRef = useRef<boolean>(false);

  useEffect(() => {
    const currentRef = observerRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInViewRef.current) {
          isInViewRef.current = true;
          animateCount();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(currentRef);

    return () => {
      observer.unobserve(currentRef);
    };
  }, []);

  const animateCount = () => {
    let startTimestamp: number | null = null;
    
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentCount = Math.floor(progress * (end - start) + start);
      setCount(formatNumber(currentCount));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(formatNumber(end));
      }
    };
    
    window.requestAnimationFrame(step);
  };

  const formatNumber = (num: number): string => {
    if (num >= 1000) {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return num.toString();
  };

  return [count, observerRef as RefObject<HTMLDivElement>];
};

export default useCountUp;