
import { useState } from 'react';
import { CheckCircle2, XCircle, RefreshCw, Video, Camera, Book } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { cn } from '@/lib/utils';
import ModelViewer from './ModelViewer';

export function Practice() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [showResult, setShowResult] = useState<'correct' | 'incorrect' | null>(null);
  
  const practiceData = [
    { prompt: "नमस्ते (Hello)", complexity: "Easy" },
    { prompt: "आपका नाम क्या है? (What is your name?)", complexity: "Medium" },
    { prompt: "मुझे खुशी हुई आपसे मिलकर (Nice to meet you)", complexity: "Hard" },
    { prompt: "धन्यवाद (Thank you)", complexity: "Easy" },
    { prompt: "माफ़ कीजिये (Sorry/Excuse me)", complexity: "Medium" },
  ];
  
  const currentItem = practiceData[currentIndex];
  const progress = ((currentIndex + 1) / practiceData.length) * 100;
  
  const handleRecord = () => {
    setIsRecording(true);
    
    // Simulate recording and processing
    setTimeout(() => {
      setIsRecording(false);
      // Randomly show correct or incorrect for demo
      setShowResult(Math.random() > 0.3 ? 'correct' : 'incorrect');
    }, 3000);
  };
  
  const handleNext = () => {
    setShowResult(null);
    if (currentIndex < practiceData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Exercise completed, reset
      setCurrentIndex(0);
    }
  };
  
  const handleRetry = () => {
    setShowResult(null);
  };
  
  return (
    <div className="section" id="practice">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Interactive <span className="gradient-text">Practice</span> & Tests
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Perfect your sign language skills with interactive exercises and tests to track your progress.
          </p>
        </div>
        
        <Tabs defaultValue="practice" className="w-full">
          <TabsList className="grid grid-cols-2 w-full max-w-md mx-auto mb-8">
            <TabsTrigger value="practice" className="flex items-center gap-2">
              <Video className="h-4 w-4" />
              <span>Practice</span>
            </TabsTrigger>
            <TabsTrigger value="fingerspelling" className="flex items-center gap-2">
              <Book className="h-4 w-4" />
              <span>Fingerspelling</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="practice" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="order-2 lg:order-1">
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex justify-between items-center mb-2">
                      <div className="text-sm font-medium text-muted-foreground">
                        Exercise {currentIndex + 1} of {practiceData.length}
                      </div>
                      <div className="text-sm font-medium px-2 py-1 bg-muted rounded">
                        {currentItem.complexity}
                      </div>
                    </div>
                    <Progress value={progress} className="h-2" />
                    <CardTitle className="mt-4 text-2xl">{currentItem.prompt.split('(')[0]}</CardTitle>
                    <CardDescription>
                      {currentItem.prompt.includes('(') && (
                        <span>{currentItem.prompt.split('(')[1].replace(')', '')}</span>
                      )}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="flex flex-col items-center justify-center space-y-6 p-6">
                    {showResult === null ? (
                      <div className="text-center space-y-6">
                        <div className="text-muted-foreground">
                          Watch the sign demonstration and practice. When ready, record yourself signing the phrase.
                        </div>
                        
                        <div className="flex justify-center">
                          <Button
                            onClick={handleRecord}
                            disabled={isRecording}
                            className={cn(
                              "relative",
                              isRecording && "bg-red-500 hover:bg-red-600"
                            )}
                          >
                            {isRecording ? (
                              <>
                                <span className="animate-pulse mr-2">Recording...</span>
                                <span className="relative flex h-3 w-3">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                                </span>
                              </>
                            ) : (
                              <>
                                <Camera className="mr-2 h-5 w-5" />
                                Record Sign
                              </>
                            )}
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center space-y-6 w-full">
                        <div 
                          className={cn(
                            "mx-auto w-20 h-20 rounded-full flex items-center justify-center",
                            showResult === 'correct' 
                              ? "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300" 
                              : "bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300"
                          )}
                        >
                          {showResult === 'correct' ? (
                            <CheckCircle2 className="h-10 w-10" />
                          ) : (
                            <XCircle className="h-10 w-10" />
                          )}
                        </div>
                        
                        <div className="text-lg font-medium">
                          {showResult === 'correct' 
                            ? "Great job! That's correct." 
                            : "Not quite right. Try again!"}
                        </div>
                        
                        <div className="flex justify-center gap-4">
                          {showResult === 'correct' ? (
                            <Button onClick={handleNext}>
                              Next
                            </Button>
                          ) : (
                            <Button onClick={handleRetry} variant="outline">
                              <RefreshCw className="mr-2 h-4 w-4" />
                              Try Again
                            </Button>
                          )}
                        </div>
                      </div>
                    )}
                  </CardContent>
                  
                  <CardFooter className="justify-between border-t p-4">
                    <Button 
                      variant="ghost" 
                      onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
                      disabled={currentIndex === 0 || showResult !== null}
                    >
                      Previous
                    </Button>
                    <Button 
                      variant="ghost"
                      onClick={() => setCurrentIndex(Math.min(practiceData.length - 1, currentIndex + 1))}
                      disabled={currentIndex === practiceData.length - 1 || showResult !== null}
                    >
                      Skip
                    </Button>
                  </CardFooter>
                </Card>
              </div>
              
              <div className="order-1 lg:order-2 relative rounded-xl overflow-hidden shadow-lg border h-[500px]">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-900">
                  <ModelViewer animationSpeed={0.02} />
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="fingerspelling" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Fingerspelling Practice</CardTitle>
                <CardDescription>
                  Master the Hindi manual alphabet with our interactive fingerspelling exercises.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {['Level 1: Basics', 'Level 2: Words', 'Level 3: Sentences', 'Level 4: Speed', 'Level 5: Recognition', 'Level 6: Mastery'].map((level, i) => (
                    <Card key={i} className="shadow-sm hover:shadow-md transition-shadow">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">{level}</CardTitle>
                      </CardHeader>
                      <CardFooter className="pt-2">
                        <Button size="sm" className="w-full">Start</Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
                
                <div className="bg-muted rounded-xl p-6 text-center">
                  <h3 className="text-xl font-medium mb-2">Track Your Progress</h3>
                  <p className="text-muted-foreground mb-4">Complete exercises to unlock new levels and track your improvement.</p>
                  <div className="flex justify-center">
                    <Button>View Your Stats</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default Practice;
