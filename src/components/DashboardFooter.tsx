
import React from 'react';
import { Button } from '@/components/ui/button';
import { LanguageSelector } from '@/components/LanguageSelector';

export function DashboardFooter() {
  return (
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
  );
}

export default DashboardFooter;
