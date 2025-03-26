
import { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import ModelViewer from './ModelViewer';

interface HeroProps {
  onGetStarted: () => void;
}

export function Hero({ onGetStarted }: HeroProps) {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-indigo-950 -z-10" />
      
      {/* Animated circles */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-floating" style={{ animationDelay: '0s' }} />
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-floating" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-floating" style={{ animationDelay: '2s' }} />
      
      <div className="max-w-5xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div className={cn(
          "transition-all duration-1000 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <div className="space-y-6 text-center lg:text-left">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-4">
                <span className="gradient-text">SignWave</span><br />
                <span>Hindi Sign Language Interpreter</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
                Breaking barriers through technology. Learn, practice, and communicate with our 3D sign language interpreter.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Button 
                size="lg" 
                className="px-8 relative overflow-hidden group"
                onClick={onGetStarted}
              >
                <span className="relative z-10">Get Started</span>
                <span className="absolute inset-0 w-full h-full bg-white/20 scale-0 rounded-full group-hover:scale-150 transition-all duration-500" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2"
                onClick={onGetStarted}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
        
        <div className={cn(
          "relative h-[400px] transition-all duration-1000 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          "delay-300"
        )}>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-2xl overflow-hidden">
            <ModelViewer animationSpeed={0.005} />
          </div>
        </div>
      </div>
      
      <Button 
        variant="ghost" 
        size="icon" 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
        onClick={onGetStarted}
      >
        <ArrowDown className="h-6 w-6" />
      </Button>
    </div>
  );
}

export default Hero;
