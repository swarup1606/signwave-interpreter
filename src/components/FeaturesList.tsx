
import React from 'react';
import { Languages, BookOpen, Bot, Activity, Info } from 'lucide-react';
import FeatureCard from './FeatureCard';

export function FeaturesList() {
  const features = [
    {
      title: "Sign Language Detection",
      description: "Detect and translate sign language in real-time with our advanced recognition system.",
      icon: <Languages className="h-10 w-10 text-primary" />,
      link: "/detect",
      linkText: "Start Detection"
    },
    {
      title: "Learn Sign Language",
      description: "Interactive tutorials to learn sign language through guided lessons and examples.",
      icon: <BookOpen className="h-10 w-10 text-primary" />,
      link: "/learn",
      linkText: "Start Learning"
    },
    {
      title: "Virtual Assistant",
      description: "Communicate with our AI-powered assistant that demonstrates signs for any phrase.",
      icon: <Bot className="h-10 w-10 text-primary" />,
      link: "/assistant",
      linkText: "Chat with Assistant"
    },
    {
      title: "Practice & Test",
      description: "Test your sign language skills with interactive exercises and fingerspelling practice.",
      icon: <Activity className="h-10 w-10 text-primary" />,
      link: "/practice",
      linkText: "Start Practice"
    },
    {
      title: "About SignWave",
      description: "Learn about our mission to make sign language accessible to everyone.",
      icon: <Info className="h-10 w-10 text-primary" />,
      link: "/about",
      linkText: "Learn More"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {features.map((feature, index) => (
        <FeatureCard 
          key={index}
          title={feature.title}
          description={feature.description}
          icon={feature.icon}
          link={feature.link}
          linkText={feature.linkText}
        />
      ))}
    </div>
  );
}

export default FeaturesList;
