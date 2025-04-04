
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const Projects = () => {
  const projects = [
    {
      title: 'Custom Chat GPT',
      description: 'A personalized ChatGPT implementation with custom knowledge base and specialized responses for specific domains.',
      tags: ['OpenAI API', 'React', 'Node.js'],
      image: 'bg-gradient-to-br from-purple-dark/40 to-purple/20'
    },
    {
      title: 'Custom Recipe Generator',
      description: 'AI-powered application that generates personalized recipes based on available ingredients, dietary restrictions, and preferences.',
      tags: ['OpenAI API', 'Python', 'Flask'],
      image: 'bg-gradient-to-br from-purple/20 to-accent/20'
    },
    {
      title: 'DALL-E Image Generation',
      description: 'Web application that utilizes DALL-E to generate unique images from textual descriptions with customizable parameters.',
      tags: ['DALL-E API', 'JavaScript', 'HTML/CSS'],
      image: 'bg-gradient-to-br from-accent/20 to-purple-dark/40'
    },
    {
      title: 'Telegram Image Bot with OpenAI',
      description: 'A Telegram bot that generates and sends AI-created images based on user prompts using OpenAI\'s image generation capabilities.',
      tags: ['Telegram API', 'OpenAI API', 'Python'],
      image: 'bg-gradient-to-br from-accent/30 to-purple/20'
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">My Projects</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-light to-accent rounded-full mx-auto mb-6"></div>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Here are some of the AI-powered projects I've developed
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={project.title} className="project-card overflow-hidden border-purple/20 h-full flex flex-col">
              <div className={`h-48 ${project.image} flex items-center justify-center`}>
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              </div>
              <CardContent className="p-6 flex-grow">
                <p className="text-foreground/80 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-secondary text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex justify-between border-t border-border/30">
                <a href="#" className="text-primary hover:text-primary/80 flex items-center gap-2">
                  <Github size={18} /> Code
                </a>
                <a href="#" className="text-primary hover:text-primary/80 flex items-center gap-2">
                  <ExternalLink size={18} /> Live Demo
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-secondary rounded-lg text-foreground hover:bg-secondary/80 transition-colors"
          >
            <Github size={20} />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
