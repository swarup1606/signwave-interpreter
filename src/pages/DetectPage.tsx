
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import TransitionLayout from '@/components/TransitionLayout';
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { LanguageSelector } from '@/components/LanguageSelector';

const DetectPage = () => {
  return (
    <TransitionLayout>
      <Navbar />
      
      <div className="min-h-screen">
        <header className="pt-24 pb-8 bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-950 dark:to-transparent">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold gradient-text">
                Sign Language Detection
              </h1>
              <p className="text-lg text-muted-foreground">
                Detect and translate sign language in real-time with our advanced recognition system
              </p>
            </div>
          </div>
        </header>
        
        <main className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="bg-card rounded-xl overflow-hidden border shadow-lg">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-2xl font-bold text-primary">हिं</span>
                  </div>
                  <CardTitle>Hindi Sign Language</CardTitle>
                  <CardDescription>
                    Detect and interpret Indian Sign Language (ISL) gestures and phrases
                  </CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-center">
                  <Button className="w-full md:w-auto">Launch Detector</Button>
                </CardFooter>
              </Card>
              
              <Card className="bg-card rounded-xl overflow-hidden border shadow-lg">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-2xl font-bold text-primary">En</span>
                  </div>
                  <CardTitle>English Sign Language</CardTitle>
                  <CardDescription>
                    Detect and interpret American Sign Language (ASL) gestures and phrases
                  </CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-center">
                  <Button className="w-full md:w-auto">Launch Detector</Button>
                </CardFooter>
              </Card>
            </div>
            
            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-2 text-muted-foreground text-sm">
                Change Language: <LanguageSelector variant="minimal" />
              </div>
            </div>
          </div>
        </main>
      </div>
    </TransitionLayout>
  );
};

export default DetectPage;
