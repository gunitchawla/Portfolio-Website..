
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-background border-t border-tertiary">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center">
          <div className="md:hidden flex space-x-6 mb-6">
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
          
          <div className="font-mono text-xs text-slate text-center">
            <p>Designed & Built by Gunit Chawla</p>
            <p className="mt-2">&copy; {currentYear} All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
