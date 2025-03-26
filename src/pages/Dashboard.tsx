
import { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { ChevronUp } from 'lucide-react';
import TransitionLayout from '@/components/TransitionLayout';
import { useScroll } from '@/hooks/use-scroll';
import Navbar from '@/components/Navbar';
import Tutorial from '@/components/Tutorial';
import VirtualAssistant from '@/components/VirtualAssistant';
import Practice from '@/components/Practice';
import LanguageSelector from '@/components/LanguageSelector';

export function Dashboard() {
  const { scrollY } = useScroll();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState('detect');
  
  useEffect(() => {
    setShowScrollTop(scrollY > 300);
    
    const sections = ['detect', 'learn', 'bot', 'practice'];
    
    // Find which section is currently in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );
    
    sections.forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    
    return () => {
      sections.forEach(id => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, [scrollY]);
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <TransitionLayout>
      <Navbar />
      
      <div className="min-h-screen">
        <header className="pt-24 pb-8 bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-950 dark:to-transparent">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold gradient-text">
                Sign Language Interpreter
              </h1>
              <p className="text-lg text-muted-foreground">
                Start exploring and using our advanced sign language tools
              </p>
              
              <Tabs 
                defaultValue={activeSection} 
                onValueChange={(value) => {
                  document.getElementById(value)?.scrollIntoView({ behavior: 'smooth' });
                }}
                value={activeSection}
                className="w-full max-w-xl mx-auto mt-8"
              >
                <TabsList className="grid grid-cols-4 w-full">
                  <TabsTrigger value="detect">Detect</TabsTrigger>
                  <TabsTrigger value="learn">Learn</TabsTrigger>
                  <TabsTrigger value="bot">Assistant</TabsTrigger>
                  <TabsTrigger value="practice">Practice</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
        </header>
        
        <main>
          <section id="detect" className="py-16 bg-white dark:bg-gray-950">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Sign Language <span className="gradient-text">Detection</span>
                </h2>
                <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                  Detect and translate sign language in real-time with our advanced recognition system.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <div className="bg-card rounded-xl overflow-hidden border shadow-lg p-6 text-center flex flex-col items-center justify-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-primary">हिं</span>
                  </div>
                  <h3 className="text-xl font-medium">Hindi Sign Language</h3>
                  <p className="text-muted-foreground">
                    Detect and interpret Indian Sign Language (ISL) gestures and phrases.
                  </p>
                  <Button className="mt-4">Launch Detector</Button>
                </div>
                
                <div className="bg-card rounded-xl overflow-hidden border shadow-lg p-6 text-center flex flex-col items-center justify-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-primary">En</span>
                  </div>
                  <h3 className="text-xl font-medium">English Sign Language</h3>
                  <p className="text-muted-foreground">
                    Detect and interpret American Sign Language (ASL) gestures and phrases.
                  </p>
                  <Button className="mt-4">Launch Detector</Button>
                </div>
              </div>
              
              <div className="mt-12 text-center">
                <div className="inline-flex items-center gap-2 text-muted-foreground text-sm">
                  Change Language: <LanguageSelector variant="minimal" />
                </div>
              </div>
            </div>
          </section>
          
          <Tutorial />
          
          <VirtualAssistant />
          
          <Practice />
          
          <section id="about" className="py-16 bg-gradient-to-b from-transparent to-blue-50 dark:from-transparent dark:to-blue-950">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  About <span className="gradient-text">SignWave</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  SignWave is a cutting-edge 3D sign language interpreter designed to bridge communication gaps and make sign language accessible to everyone. Our mission is to empower both the hearing and deaf communities by providing intuitive tools for learning, practicing, and communicating through sign language.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                  <div className="p-6 rounded-xl bg-card shadow-sm border">
                    <h3 className="text-xl font-medium mb-2">Accessibility</h3>
                    <p className="text-muted-foreground">
                      Making sign language accessible to everyone through technology.
                    </p>
                  </div>
                  
                  <div className="p-6 rounded-xl bg-card shadow-sm border">
                    <h3 className="text-xl font-medium mb-2">Education</h3>
                    <p className="text-muted-foreground">
                      Providing comprehensive learning tools for sign language education.
                    </p>
                  </div>
                  
                  <div className="p-6 rounded-xl bg-card shadow-sm border">
                    <h3 className="text-xl font-medium mb-2">Innovation</h3>
                    <p className="text-muted-foreground">
                      Using 3D technology to create realistic and accurate sign language representations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <footer className="py-8 bg-blue-50 dark:bg-blue-950 border-t border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                  <span className="text-xl font-bold gradient-text">SignWave</span>
                  <p className="text-sm text-muted-foreground mt-1">
                    Breaking communication barriers with 3D sign language technology.
                  </p>
                </div>
                
                <div className="flex items-center gap-4">
                  <LanguageSelector />
                  <Button variant="outline">Contact Us</Button>
                </div>
              </div>
              
              <div className="mt-8 pt-4 border-t text-sm text-muted-foreground text-center">
                &copy; {new Date().getFullYear()} SignWave. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </div>
      
      {showScrollTop && (
        <Button 
          variant="secondary" 
          size="icon" 
          className="fixed bottom-8 right-8 rounded-full shadow-lg opacity-80 hover:opacity-100 z-50 animate-fade-in"
          onClick={scrollToTop}
        >
          <ChevronUp className="h-5 w-5" />
        </Button>
      )}
    </TransitionLayout>
  );
}

export default Dashboard;
