
import { useState, useRef, useEffect } from 'react';
import { Send, Mic, Sparkles, Bot, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import ModelViewer from './ModelViewer';

export function VirtualAssistant() {
  const [inputText, setInputText] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);
  const [messages, setMessages] = useState<{text: string, type: 'user' | 'bot'}[]>([
    { text: "Hi there! I'm your sign language assistant. Type any phrase and I'll show you the signs.", type: 'bot' }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    
    // Add user message
    setMessages(prev => [...prev, { text: inputText, type: 'user' }]);
    
    // Simulate processing
    setIsAnimating(true);
    
    // Simulate bot response after a delay
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        text: `Now showing sign language for: "${inputText}"`, 
        type: 'bot' 
      }]);
      setIsAnimating(true);
      setInputText('');
    }, 1000);
  };
  
  // Auto-scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  return (
    <div className="section" id="bot">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Virtual Sign Language <span className="gradient-text">Assistant</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Type any phrase and our virtual assistant will demonstrate the corresponding sign language gestures.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-card rounded-xl overflow-hidden border shadow-md">
            <div className="bg-muted p-4 flex items-center justify-between border-b">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Bot className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Sign Language Assistant</h3>
                  <p className="text-xs text-muted-foreground">Ask anything about sign language</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Sparkles className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="p-4 h-[400px] overflow-y-auto">
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <div 
                    key={index} 
                    className={cn(
                      "flex max-w-[80%] animate-fade-in",
                      message.type === 'user' ? "ml-auto" : "mr-auto"
                    )}
                  >
                    <div 
                      className={cn(
                        "rounded-xl p-3",
                        message.type === 'user' 
                          ? "bg-primary text-primary-foreground" 
                          : "bg-muted"
                      )}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="p-4 border-t bg-card">
              <div className="flex items-center gap-2">
                <Button type="button" variant="ghost" size="icon">
                  <Mic className="h-5 w-5" />
                </Button>
                <Input
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Type your question..."
                  className="flex-1"
                />
                <Button type="submit" size="icon" disabled={!inputText.trim()}>
                  <Send className="h-5 w-5" />
                </Button>
              </div>
            </form>
          </div>
          
          <div className="relative h-[530px] rounded-xl overflow-hidden shadow-lg border">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-blue-100 dark:from-indigo-950 dark:to-blue-900">
                <ModelViewer animationSpeed={isAnimating ? 0.03 : 0.005} />
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent text-white">
              <h3 className="font-medium text-lg">
                {isAnimating ? "Signing: " + (messages[messages.length - 1]?.type === 'user' ? messages[messages.length - 1].text : "") : "Waiting for input..."}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VirtualAssistant;
