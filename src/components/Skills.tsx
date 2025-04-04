
import React from 'react';
import { Code, FileCode, Terminal, Brain, Database, BookOpen } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      name: 'HTML',
      icon: <FileCode className="text-orange-400" />,
      description: 'Building the structure of web applications with semantic markup'
    },
    {
      name: 'CSS',
      icon: <Code className="text-blue-400" />,
      description: 'Styling and creating responsive layouts for web interfaces'
    },
    {
      name: 'C',
      icon: <Terminal className="text-purple-400" />,
      description: 'System programming and algorithm implementation'
    },
    {
      name: 'C++',
      icon: <Terminal className="text-purple-500" />,
      description: 'Object-oriented programming and application development'
    },
    {
      name: 'Python (Basic)',
      icon: <Code className="text-yellow-400" />,
      description: 'Scripting, automation, and data manipulation'
    },
    {
      name: 'Artificial Intelligence',
      icon: <Brain className="text-green-400" />,
      description: 'Machine learning algorithms and AI application development'
    },
    {
      name: 'OpenAI APIs',
      icon: <Database className="text-teal-400" />,
      description: 'Integration and implementation of OpenAI services'
    },
    {
      name: 'Problem Solving',
      icon: <BookOpen className="text-red-400" />,
      description: 'Analytical thinking and efficient solution design'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">My Skills</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-light to-accent rounded-full mx-auto mb-6"></div>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Here are the technologies and skills I've been working with
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="skill-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center">
                <div className="p-4 rounded-full bg-secondary/80 mb-4">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-medium mb-2">{skill.name}</h3>
                <p className="text-foreground/70 text-center text-sm">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
