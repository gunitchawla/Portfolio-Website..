
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="mb-6">
            <h2 className="text-2xl font-bold gradient-text">Gunit Chawla</h2>
          </div>
          
          <div className="flex space-x-8 mb-8">
            <a href="#about" className="text-foreground/80 hover:text-primary transition-colors">About</a>
            <a href="#skills" className="text-foreground/80 hover:text-primary transition-colors">Skills</a>
            <a href="#projects" className="text-foreground/80 hover:text-primary transition-colors">Projects</a>
            <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors">Contact</a>
          </div>
          
          <div className="flex space-x-6 mb-8">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors p-2 bg-secondary rounded-full">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors p-2 bg-secondary rounded-full">
              <Linkedin size={20} />
            </a>
            <a href="mailto:contact@example.com" className="text-foreground/70 hover:text-primary transition-colors p-2 bg-secondary rounded-full">
              <Mail size={20} />
            </a>
          </div>
          
          <div className="text-foreground/60 text-sm border-t border-border/30 pt-8 w-full text-center">
            <p>&copy; {currentYear} Gunit Chawla. All rights reserved.</p>
            <p className="mt-2">
              Designed and built with <span className="text-red-500">❤</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
