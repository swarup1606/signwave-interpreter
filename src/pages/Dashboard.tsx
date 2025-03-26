
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import TransitionLayout from '@/components/TransitionLayout';
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Languages, BookOpen, Bot, Activity, Info } from 'lucide-react';

export function Dashboard() {
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
                Explore our comprehensive suite of sign language tools
              </p>
            </div>
          </div>
        </header>
        
        <main className="py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <Card key={index} className="border shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      {feature.icon}
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link to={feature.link}>
                        {feature.linkText} <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
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
    </TransitionLayout>
  );
}

export default Dashboard;
