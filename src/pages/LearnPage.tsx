
import TransitionLayout from '@/components/TransitionLayout';
import Navbar from '@/components/Navbar';
import Tutorial from '@/components/Tutorial';

const LearnPage = () => {
  return (
    <TransitionLayout>
      <Navbar />
      
      <div className="min-h-screen">
        <header className="pt-24 pb-8 bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-950 dark:to-transparent">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold gradient-text">
                Learn Sign Language
              </h1>
              <p className="text-lg text-muted-foreground">
                Master sign language through our interactive tutorials and guided lessons
              </p>
            </div>
          </div>
        </header>
        
        <main>
          <Tutorial />
        </main>
      </div>
    </TransitionLayout>
  );
};

export default LearnPage;
