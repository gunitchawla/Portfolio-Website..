
import React from 'react';
import { Github, ExternalLink, Folder, Brain } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Custom Chat GPT',
      description: 'A personalized ChatGPT implementation with custom knowledge base and specialized responses for specific domains.',
      tags: ['OpenAI API', 'React', 'Node.js'],
      links: {
        github: 'https://github.com',
        demo: '#'
      }
    },
    {
      title: 'Custom Recipe Generator',
      description: 'AI-powered application that generates personalized recipes based on available ingredients, dietary restrictions, and preferences.',
      tags: ['OpenAI API', 'Python', 'Flask'],
      links: {
        github: 'https://github.com',
        demo: '#'
      }
    },
    {
      title: 'DALL-E Image Generation',
      description: 'Web application that utilizes DALL-E to generate unique images from textual descriptions with customizable parameters.',
      tags: ['DALL-E API', 'JavaScript', 'HTML/CSS'],
      links: {
        github: 'https://github.com',
        demo: '#'
      }
    },
    {
      title: 'Telegram Image Bot with OpenAI',
      description: 'A Telegram bot that generates and sends AI-created images based on user prompts using OpenAI\'s image generation capabilities.',
      tags: ['Telegram API', 'OpenAI API', 'Python'],
      links: {
        github: 'https://github.com',
        demo: '#'
      }
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="section-heading">Some Things I've Built</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={project.title} className="project-card group">
              <header className="flex justify-between items-start mb-6">
                <div className="text-primary">
                  <Folder size={40} />
                </div>
                <div className="flex space-x-4">
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="social-icon">
                    <Github size={20} />
                  </a>
                  <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="social-icon">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </header>
              
              <h3 className="text-xl font-semibold text-slate-lighter mb-2 group-hover:text-primary transition-colors duration-200">
                {project.title}
              </h3>
              
              <p className="text-slate text-sm mb-6">{project.description}</p>
              
              <footer className="flex flex-wrap mt-auto pt-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="tech-tag">
                    {tag}
                  </span>
                ))}
              </footer>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center"
          >
            <span>View More on GitHub</span>
            <ExternalLink size={16} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
