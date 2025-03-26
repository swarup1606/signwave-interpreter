
import { useEffect, useState } from 'react';

interface ScrollPosition {
  scrollY: number;
  scrollX: number;
  scrollDirection: 'up' | 'down' | 'none';
  scrollPercentage: number;
}

export function useScroll(): ScrollPosition {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    scrollY: 0,
    scrollX: 0,
    scrollDirection: 'none',
    scrollPercentage: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY || document.documentElement.scrollTop;
      const currentScrollLeft = window.scrollX || document.documentElement.scrollLeft;
      
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercentage = scrollHeight > 0 ? (currentScrollTop / scrollHeight) * 100 : 0;
      
      const direction = 
        currentScrollTop > lastScrollTop ? 'down' :
        currentScrollTop < lastScrollTop ? 'up' : 'none';
      
      setScrollPosition({
        scrollY: currentScrollTop,
        scrollX: currentScrollLeft,
        scrollDirection: direction,
        scrollPercentage,
      });
      
      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initialize values

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  return scrollPosition;
}
