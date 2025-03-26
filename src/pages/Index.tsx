import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TransitionLayout from '@/components/TransitionLayout';
import Hero from '@/components/Hero';
import { LanguageSelector } from '@/components/LanguageSelector';

const Index = () => {
  const navigate = useNavigate();
  const [showDashboard, setShowDashboard] = useState(false);
  
  const handleGetStarted = () => {
    // Scroll down to dashboard content if already showing,
    // otherwise show the dashboard section
    if (showDashboard) {
      document.getElementById('dashboard')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      setShowDashboard(true);
      setTimeout(() => {
        document.getElementById('dashboard')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };
  
  return (
    <TransitionLayout>
      <div className="absolute top-4 right-4 z-50">
        <LanguageSelector variant="minimal" />
      </div>
      
      <Hero onGetStarted={handleGetStarted} />
      
      {showDashboard && (
        <div id="dashboard" className="min-h-screen">
          <iframe 
            src="/dashboard" 
            title="Dashboard" 
            className="w-full h-screen border-none"
          />
        </div>
      )}
    </TransitionLayout>
  );
};

export default Index;
