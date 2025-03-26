
import TransitionLayout from '@/components/TransitionLayout';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';

const AboutPage = () => {
  return (
    <TransitionLayout>
      <Navbar />
      
      <div className="min-h-screen">
        <header className="pt-24 pb-8 bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-950 dark:to-transparent">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold gradient-text">
                About SignWave
              </h1>
              <p className="text-lg text-muted-foreground">
                Our mission, vision, and the technology behind our sign language interpreter
              </p>
            </div>
          </div>
        </header>
        
        <main className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="gradient-text">Mission</span>
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
              
              <div className="mt-16">
                <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="bg-card rounded-xl p-6 border shadow-sm">
                      <div className="w-24 h-24 rounded-full bg-muted mx-auto mb-4"></div>
                      <h3 className="text-lg font-medium">Team Member {i}</h3>
                      <p className="text-sm text-muted-foreground">Role / Position</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-16">
                <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
                <p className="text-muted-foreground mb-6">
                  Have questions or suggestions? We'd love to hear from you.
                </p>
                <Button size="lg">Get in Touch</Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </TransitionLayout>
  );
};

export default AboutPage;
