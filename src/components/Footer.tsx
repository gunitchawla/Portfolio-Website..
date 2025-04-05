
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black py-12 border-t border-foreground/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="mb-6">
            <h2 className="text-2xl font-bold">
              <span className="text-accent">G</span><span className="text-primary">unit</span> Chawla
            </h2>
          </div>
          
          <div className="flex space-x-8 mb-8">
            <a href="#about" className="text-foreground/80 hover:text-accent transition-colors">About</a>
            <a href="#skills" className="text-foreground/80 hover:text-accent transition-colors">Skills</a>
            <a href="#projects" className="text-foreground/80 hover:text-accent transition-colors">Projects</a>
            <a href="#contact" className="text-foreground/80 hover:text-accent transition-colors">Contact</a>
          </div>
          
          <div className="flex space-x-6 mb-8">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-accent transition-colors p-2 bg-secondary/20 rounded-full">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-accent transition-colors p-2 bg-secondary/20 rounded-full">
              <Linkedin size={20} />
            </a>
            <a href="mailto:gunitchawla2604@gmail.com" className="text-foreground/70 hover:text-accent transition-colors p-2 bg-secondary/20 rounded-full">
              <Mail size={20} />
            </a>
          </div>
          
          <div className="text-foreground/60 text-sm border-t border-foreground/10 pt-8 w-full text-center code-style">
            <p>&copy; {currentYear} Gunit Chawla. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
