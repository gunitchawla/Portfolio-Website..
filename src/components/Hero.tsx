
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative py-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl">
          <p className="font-mono text-primary mb-5 text-sm md:text-base">Hi, my name is</p>
          <h1 className="text-4xl md:text-7xl font-bold mb-4 text-slate-lighter">
            Gunit Chawla.
          </h1>
          <h2 className="text-3xl md:text-6xl font-bold text-slate mb-6">
            I build things for the web.
          </h2>
          <p className="text-slate mb-10 max-w-xl text-lg">
            I'm a developer specialized in creating digital experiences with a focus on AI integration. 
            Currently, I'm focused on building intelligent applications with OpenAI tools and APIs.
          </p>
          
          <div className="mt-10">
            <a 
              href="#projects" 
              className="btn-primary inline-block"
            >
              Check out my projects!
            </a>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-slate hover:text-primary transition-colors duration-300 animate-bounce"
      >
        <ArrowDown className="h-6 w-6" />
      </a>
    </section>
  );
};

export default Hero;
