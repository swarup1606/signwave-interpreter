
import TransitionLayout from '@/components/TransitionLayout';
import Navbar from '@/components/Navbar';
import VirtualAssistant from '@/components/VirtualAssistant';

const AssistantPage = () => {
  return (
    <TransitionLayout>
      <Navbar />
      
      <div className="min-h-screen">
        <header className="pt-24 pb-8 bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-950 dark:to-transparent">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold gradient-text">
                Virtual Sign Language Assistant
              </h1>
              <p className="text-lg text-muted-foreground">
                Chat with our AI assistant that demonstrates sign language for any phrase you enter
              </p>
            </div>
          </div>
        </header>
        
        <main className="py-8">
          <VirtualAssistant />
        </main>
      </div>
    </TransitionLayout>
  );
};

export default AssistantPage;
