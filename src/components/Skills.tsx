
import React from 'react';
import { Code, FileCode, Terminal, Brain, Database, BookOpen } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      name: 'HTML',
      icon: <FileCode className="text-primary" />,
      description: 'Building the structure of web applications with semantic markup'
    },
    {
      name: 'CSS',
      icon: <Code className="text-primary" />,
      description: 'Styling and creating responsive layouts for web interfaces'
    },
    {
      name: 'C',
      icon: <Terminal className="text-primary" />,
      description: 'System programming and algorithm implementation'
    },
    {
      name: 'C++',
      icon: <Terminal className="text-primary" />,
      description: 'Object-oriented programming and application development'
    },
    {
      name: 'Python (Basic)',
      icon: <Code className="text-primary" />,
      description: 'Scripting, automation, and data manipulation'
    },
    {
      name: 'Artificial Intelligence',
      icon: <Brain className="text-primary" />,
      description: 'Machine learning algorithms and AI application development'
    },
    {
      name: 'OpenAI APIs',
      icon: <Database className="text-primary" />,
      description: 'Integration and implementation of OpenAI services'
    },
    {
      name: 'Problem Solving',
      icon: <BookOpen className="text-primary" />,
      description: 'Analytical thinking and efficient solution design'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background/50">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="section-heading">Skills</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="bg-secondary p-6 rounded-md hover:translate-y-[-5px] transition-all duration-200"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col">
                <div className="text-primary mb-4">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-medium text-slate-lighter mb-2">{skill.name}</h3>
                <p className="text-slate-light text-sm">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
