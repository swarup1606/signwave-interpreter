
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TransitionLayout from '@/components/TransitionLayout';
import Hero from '@/components/Hero';
import { LanguageSelector } from '@/components/LanguageSelector';

const Index = () => {
  const navigate = useNavigate();
  
  const handleGetStarted = () => {
    // Navigate to the dashboard page
    navigate('/dashboard');
  };
  
  return (
    <TransitionLayout>
      <div className="absolute top-4 right-4 z-50">
        <LanguageSelector variant="minimal" />
      </div>
      
      <Hero onGetStarted={handleGetStarted} />
    </TransitionLayout>
  );
};

export default Index;
