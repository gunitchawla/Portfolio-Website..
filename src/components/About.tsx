
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="section-heading">About Me</h2>
        
        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Bio */}
          <div className="md:col-span-3 text-slate">
            <p className="mb-4 text-lg">
              I am a passionate developer and AI enthusiast with a focus on creating intuitive and engaging digital experiences. 
              My journey in tech began with a love for problem-solving and has evolved into a diverse skill set spanning from 
              frontend development to artificial intelligence.
            </p>
            <p className="mb-4 text-lg">
              I enjoy exploring the intersection of technology and creativity, finding innovative solutions to complex problems. 
              When I'm not coding, you'll find me learning about the latest advancements in AI and machine learning.
            </p>
            <p className="text-lg">
              Here are a few technologies I've been working with recently:
            </p>
            
            <div className="grid grid-cols-2 mt-5">
              <ul className="numbered-list">
                <li className="font-mono text-sm text-slate-light">HTML</li>
                <li className="font-mono text-sm text-slate-light">CSS</li>
              </ul>
              <ul className="numbered-list">
                <li className="font-mono text-sm text-slate-light">C</li>
                <li className="font-mono text-sm text-slate-light">C++</li>
              </ul>
              <ul className="numbered-list mt-4">
                <li className="font-mono text-sm text-slate-light">Python (Basic)</li>
                <li className="font-mono text-sm text-slate-light">OpenAI APIs</li>
              </ul>
              <ul className="numbered-list mt-4">
                <li className="font-mono text-sm text-slate-light">Artificial Intelligence</li>
                <li className="font-mono text-sm text-slate-light">Problem Solving</li>
              </ul>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="md:col-span-2 flex justify-center md:justify-end">
            <div className="relative w-60 h-60 md:w-72 md:h-72 group">
              <div className="absolute inset-0 rounded border-2 border-primary group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-200"></div>
              <div className="absolute inset-0 rounded overflow-hidden border-2 border-primary bg-secondary/20 group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-200">
                {/* Placeholder profile image */}
                <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                  <span className="text-6xl font-bold text-primary">GC</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
