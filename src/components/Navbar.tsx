
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScroll } from '@/hooks/use-scroll';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/ThemeToggle';
import { LanguageSelector } from '@/components/LanguageSelector';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const isScrolled = scrollY > 10;

  // Close mobile menu when user navigates
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Detect", href: "#detect" },
    { label: "Learn", href: "#learn" },
    { label: "Practice", href: "#practice" },
    { label: "About", href: "#about" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/10 dark:bg-gray-950/10 backdrop-blur-md border-b border-white/10 dark:border-gray-800/10 py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold gradient-text">SignWave</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-foreground/80 hover:text-foreground transition-colors font-medium"
            >
              {item.label}
            </a>
          ))}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <LanguageSelector />
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-background z-40 animate-fade-in">
          <div className="flex flex-col p-4 gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-lg px-4 py-3 hover:bg-muted rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="px-4 py-2 flex items-center gap-2">
              <LanguageSelector />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
