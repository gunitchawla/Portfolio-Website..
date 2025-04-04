
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-dark/20 rounded-full blur-3xl -z-10 animate-pulse-glow"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-dark/20 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 py-20 flex flex-col items-center text-center">
        <p className="text-lg md:text-xl text-primary mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Hello, I'm
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text tracking-tight animate-slide-up" style={{ animationDelay: '0.4s' }}>
          Gunit Chawla
        </h1>
        <div className="h-1 w-20 bg-gradient-to-r from-purple-light to-accent rounded-full my-8 animate-slide-up" style={{ animationDelay: '0.6s' }}></div>
        <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.8s' }}>
          Developer & AI Enthusiast
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center animate-slide-up" style={{ animationDelay: '1s' }}>
          <a 
            href="#projects" 
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium transition-all hover:bg-primary/80"
          >
            View Projects
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3 bg-transparent border border-primary text-primary rounded-lg font-medium transition-all hover:bg-primary/10"
          >
            Contact Me
          </a>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-foreground/60 hover:text-primary transition-colors duration-300 animate-fade-in"
        style={{ animationDelay: '1.5s' }}
      >
        <span className="mb-2 text-sm">Scroll Down</span>
        <ArrowDown className="animate-bounce" size={20} />
      </a>
    </section>
  );
};

export default Hero;
