
import React from 'react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    console.log('Form submitted');
  };

  return (
    <section id="contact" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Get In Touch</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-light to-accent rounded-full mx-auto mb-6"></div>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-secondary rounded-full">
                <Mail className="text-primary" size={24} />
              </div>
              <div>
                <h4 className="text-lg font-medium">Email</h4>
                <a href="mailto:contact@example.com" className="text-primary hover:underline">
                 gunitchawla2604@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-secondary rounded-full">
                <Linkedin className="text-primary" size={24} />
              </div>
              <div>
                <h4 className="text-lg font-medium">LinkedIn</h4>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  linkedin.com/in/gunit-chawla
                </a>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-secondary rounded-full">
                <Github className="text-primary" size={24} />
              </div>
              <div>
                <h4 className="text-lg font-medium">GitHub</h4>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  github.com/gunit-chawla
                </a>
              </div>
            </div>
            
            <div className="mt-12 p-6 bg-secondary rounded-lg">
              <h4 className="text-lg font-medium mb-2">Current Status</h4>
              <p className="text-foreground/80">
                <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                Available for freelance projects
              </p>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-card/70 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-purple/20">
            <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Your name"
                  className="bg-secondary/50 border-purple/20"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your email"
                  className="bg-secondary/50 border-purple/20"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="Subject"
                  className="bg-secondary/50 border-purple/20"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  className="bg-secondary/50 border-purple/20 min-h-[120px]"
                  required
                />
              </div>
              
              <Button type="submit" className="w-full bg-primary hover:bg-primary/80">
                <Send className="mr-2" size={18} />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
