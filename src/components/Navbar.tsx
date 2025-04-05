
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
    { id: "01", title: 'About', href: '#about' },
    { id: "02", title: 'Skills', href: '#skills' },
    { id: "03", title: 'Projects', href: '#projects' },
    { id: "04", title: 'Contact', href: '#contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/90 backdrop-blur shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold text-primary font-mono">GC</a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.title} 
              href={link.href}
              className="nav-link"
            >
              <span className="nav-indicator">{link.id}.</span> {link.title}
            </a>
          ))}
          
          <a 
            href="#contact" 
            className="btn-primary"
          >
            Contact Me
          </a>
        </nav>
        
        {/* Social Links - Desktop */}
        <div className="hidden md:flex items-center space-x-5 absolute right-6">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <Linkedin size={20} />
          </a>
          <a href="mailto:gunitchawla2604@gmail.com" className="social-icon">
            <Mail size={20} />
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" onClick={toggleMenu} className="md:hidden text-slate-light hover:text-primary">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-secondary/95 backdrop-blur-lg fixed inset-0 z-50 flex flex-col items-center justify-center animate-fade-in">
          <Button variant="ghost" size="icon" onClick={toggleMenu} className="absolute top-6 right-6 text-slate-light hover:text-primary">
            <X size={24} />
          </Button>
          
          <nav className="flex flex-col items-center space-y-8 py-4">
            {navLinks.map((link) => (
              <a 
                key={link.title} 
                href={link.href}
                className="nav-link text-xl"
                onClick={toggleMenu}
              >
                <span className="nav-indicator">{link.id}.</span> {link.title}
              </a>
            ))}
            
            <a 
              href="#contact" 
              onClick={toggleMenu}
              className="btn-primary mt-4"
            >
              Contact Me
            </a>
          </nav>
          
          {/* Social Links - Mobile */}
          <div className="flex items-center space-x-8 mt-12">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Github size={22} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Linkedin size={22} />
            </a>
            <a href="mailto:gunitchawla2604@gmail.com" className="social-icon">
              <Mail size={22} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
