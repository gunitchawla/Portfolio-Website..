
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const navLinks = [
    { title: 'About', href: '#about' },
    { title: 'Skills', href: '#skills' },
    { title: 'Projects', href: '#projects' },
    { title: 'Contact', href: '#contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/90 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" className="text-xl font-bold gradient-text">GC</a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a 
              key={link.title} 
              href={link.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {link.title}
            </a>
          ))}
        </nav>
        
        {/* Social Links - Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors duration-300">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors duration-300">
            <Linkedin size={20} />
          </a>
          <a href="mailto:contact@example.com" className="text-foreground/70 hover:text-primary transition-colors duration-300">
            <Mail size={20} />
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" onClick={toggleMenu} className="md:hidden">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-lg border-t border-border animate-fade-in">
          <div className="container mx-auto p-4">
            <nav className="flex flex-col space-y-4 py-4">
              {navLinks.map((link) => (
                <a 
                  key={link.title} 
                  href={link.href}
                  className="text-foreground/80 hover:text-primary transition-colors duration-300 py-2"
                  onClick={toggleMenu}
                >
                  {link.title}
                </a>
              ))}
            </nav>
            
            {/* Social Links - Mobile */}
            <div className="flex items-center space-x-6 py-4 border-t border-border/30">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors duration-300">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="mailto:contact@example.com" className="text-foreground/70 hover:text-primary transition-colors duration-300">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
