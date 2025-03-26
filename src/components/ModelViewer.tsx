
import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface ModelViewerProps {
  className?: string;
  animationSpeed?: number;
}

export const ModelViewer: React.FC<ModelViewerProps> = ({
  className,
  animationSpeed = 0.01
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    // For now, we'll use a placeholder that simulates 3D rendering
    // In a real implementation, we would use Three.js, React Three Fiber, or similar
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let frameId: number;
    let angle = 0;
    
    const resizeCanvas = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    };
    
    const renderFrame = () => {
      if (!ctx) return;
      
      // Clear the canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update angle for rotation
      angle += animationSpeed;
      
      // Center of the canvas
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      // Size based on canvas dimensions
      const size = Math.min(canvas.width, canvas.height) * 0.5;
      
      // Draw a hand shape that rotates
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(Math.sin(angle) * 0.1);
      
      // Hand palm
      ctx.beginPath();
      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
      ctx.ellipse(0, 0, size * 0.4, size * 0.5, 0, 0, Math.PI * 2);
      ctx.fill();
      
      // Fingers
      for (let i = 0; i < 5; i++) {
        const fingerAngle = (i - 2) * 0.3 + Math.sin(angle * 3 + i) * 0.1;
        const fingerLength = size * (0.4 + i * 0.05);
        
        ctx.save();
        ctx.rotate(fingerAngle);
        ctx.beginPath();
        ctx.roundRect(0, -size * 0.1, fingerLength, size * 0.2, size * 0.1);
        ctx.fill();
        ctx.restore();
      }
      
      ctx.restore();
      
      // Continue animation loop
      frameId = requestAnimationFrame(renderFrame);
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    renderFrame();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(frameId);
    };
  }, [animationSpeed]);
  
  return (
    <canvas 
      ref={canvasRef} 
      className={cn("w-full h-full", className)}
    />
  );
};

export default ModelViewer;
