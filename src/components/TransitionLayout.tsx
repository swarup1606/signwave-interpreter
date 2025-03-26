
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface TransitionLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export const TransitionLayout: React.FC<TransitionLayoutProps> = ({ 
  children, 
  className 
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={cn(
        'transition-all duration-700 ease-out',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
        className
      )}
    >
      {children}
    </div>
  );
};

export default TransitionLayout;
