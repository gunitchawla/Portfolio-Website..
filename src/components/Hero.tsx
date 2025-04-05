
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16 bg-black">
      {/* Code-like decorations */}
      <div className="absolute top-20 left-20 code-style opacity-30">{'<html>'}</div>
      <div className="absolute top-32 left-28 code-style opacity-30">{'<body>'}</div>
      <div className="absolute bottom-32 left-28 code-style opacity-30">{'</body>'}</div>
      <div className="absolute bottom-20 left-20 code-style opacity-30">{'</html>'}</div>
      
      <div className="absolute top-20 right-20 code-style opacity-30">{'//'}</div>
      <div className="absolute bottom-20 right-20 code-style opacity-30">{'<//>'}</div>
      
      <div className="container mx-auto px-4 py-20 flex flex-col items-start text-left">
        <div className="max-w-3xl">
          <div className="mb-4 code-style opacity-70 slash-decoration">hello</div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight leading-tight">
            Hi,<br />
            I'm <span className="text-accent">G</span><span className="text-primary">unit</span>,<br />
            web developer
          </h1>
          <p className="text-sm md:text-base text-foreground/80 mb-8 code-style slash-decoration">
            Developer & AI Enthusiast
          </p>
          
          <div className="flex flex-wrap gap-4 mt-12">
            <a 
              href="#contact" 
              className="px-6 py-2 border border-accent text-accent hover:bg-accent/10 transition-colors duration-300 text-sm font-medium"
            >
              Contact me!
            </a>
          </div>
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
