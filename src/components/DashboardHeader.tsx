
import React from 'react';

export function DashboardHeader() {
  return (
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
  );
}

export default DashboardHeader;
