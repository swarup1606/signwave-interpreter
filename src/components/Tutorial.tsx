
import { useState } from 'react';
import { Search, ArrowRight, BookOpen, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import ModelViewer from './ModelViewer';
import { cn } from '@/lib/utils';

export function Tutorial() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentWord, setCurrentWord] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const sampleWords = [
    { word: 'नमस्ते', translation: 'Hello' },
    { word: 'धन्यवाद', translation: 'Thank you' },
    { word: 'हाँ', translation: 'Yes' },
    { word: 'नहीं', translation: 'No' },
    { word: 'कृपया', translation: 'Please' },
    { word: 'मैं', translation: 'I/Me' },
    { word: 'तुम', translation: 'You' },
    { word: 'हम', translation: 'We' },
  ];
  
  const featuredLessons = [
    { title: 'Greetings', description: 'Learn common greeting signs', count: 8 },
    { title: 'Numbers', description: 'Master numbers from 1-20', count: 20 },
    { title: 'Daily Conversations', description: 'Essential phrases for daily use', count: 15 },
    { title: 'Alphabet', description: 'Learn to fingerspell the alphabet', count: 52 },
  ];
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      setCurrentWord(searchTerm);
      setCurrentIndex(0);
    }
  };
  
  const selectWord = (word: string) => {
    setSearchTerm(word);
    setCurrentWord(word);
    setCurrentIndex(0);
  };
  
  return (
    <div className="section" id="learn">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Interactive Sign Language <span className="gradient-text">Tutorials</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Type any word or phrase to see the corresponding sign, or choose from our featured lessons to start learning.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <form onSubmit={handleSearch} className="relative">
              <Input
                type="text"
                placeholder="Type any word or phrase..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 py-6 text-lg"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Button
                type="submit"
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2"
              >
                <ArrowRight className="h-5 w-5" />
              </Button>
            </form>
            
            <div className="space-y-2">
              <h3 className="font-medium text-lg flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Featured Lessons
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                {featuredLessons.map((lesson, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{lesson.title}</CardTitle>
                      <CardDescription>{lesson.description}</CardDescription>
                    </CardHeader>
                    <CardFooter className="pt-2 flex justify-between">
                      <div className="text-sm text-muted-foreground">
                        {lesson.count} signs
                      </div>
                      <Button size="sm" variant="ghost">Start</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
            
            <div className="space-y-2">
              <h3 className="font-medium text-lg">Popular Searches</h3>
              <div className="flex flex-wrap gap-2">
                {sampleWords.map((item, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => selectWord(item.word)}
                    className={cn(
                      currentWord === item.word && "border-primary text-primary"
                    )}
                  >
                    {item.word}
                    <span className="ml-1 text-muted-foreground text-xs">
                      ({item.translation})
                    </span>
                  </Button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            {currentWord ? (
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl">{currentWord}</CardTitle>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>Step {currentIndex + 1} of {currentWord.length}</span>
                      <div className="flex gap-1">
                        {Array.from({ length: currentWord.length }).map((_, i) => (
                          <div 
                            key={i} 
                            className={cn(
                              "w-2 h-2 rounded-full",
                              i <= currentIndex ? "bg-primary" : "bg-muted"
                            )}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <CardDescription>
                    {currentWord.split('').map((char, i) => (
                      <span 
                        key={i} 
                        className={cn(
                          "inline-block transition-all duration-300",
                          i === currentIndex 
                            ? "text-primary font-bold text-lg transform scale-110" 
                            : "text-muted-foreground"
                        )}
                      >
                        {char}
                      </span>
                    ))}
                  </CardDescription>
                </CardHeader>
                <CardContent className="h-[400px] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900 rounded-md overflow-hidden">
                    <ModelViewer animationSpeed={0.01} />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
                    disabled={currentIndex === 0}
                  >
                    Previous
                  </Button>
                  <Button
                    onClick={() => {
                      if (currentIndex < currentWord.length - 1) {
                        setCurrentIndex(currentIndex + 1);
                      } else {
                        // Completed
                        // TODO: handle completion
                      }
                    }}
                  >
                    {currentIndex < currentWord.length - 1 ? "Next" : "Complete"}
                  </Button>
                </CardFooter>
              </Card>
            ) : (
              <div className="h-full flex items-center justify-center border-2 border-dashed rounded-xl p-12 text-center">
                <div className="max-w-md space-y-4">
                  <BookOpen className="h-12 w-12 text-muted-foreground mx-auto" />
                  <h3 className="text-xl font-medium">Start Learning Sign Language</h3>
                  <p className="text-muted-foreground">
                    Type any word or select one from the list to see the corresponding sign language tutorial.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tutorial;
