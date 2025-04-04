
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">About Me</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-light to-accent rounded-full mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-light to-accent animate-pulse-glow"></div>
              <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-accent/50">
                {/* Use a placeholder for the profile image */}
                <div className="w-full h-full bg-secondary flex items-center justify-center">
                  <span className="text-6xl font-bold text-primary">GC</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bio */}
          <Card className="bg-card/50 backdrop-blur-sm border-purple/20 overflow-hidden">
            <CardContent className="p-6 md:p-8">
              <p className="text-lg leading-relaxed mb-6">
                I am a passionate developer and AI enthusiast with a focus on creating intuitive and engaging digital experiences. 
                My journey in tech began with a love for problem-solving and has evolved into a diverse skill set spanning from 
                frontend development to artificial intelligence.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                I enjoy exploring the intersection of technology and creativity, finding innovative solutions to complex problems. 
                When I'm not coding, you'll find me learning about the latest advancements in AI and machine learning.
              </p>
              <p className="text-primary">
                Let's build something amazing together!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
