
import React from 'react';
import { Mail, Send } from 'lucide-react';
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
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="section-heading">Contact Me</h2>
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-slate text-lg mb-6">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
            my inbox is always open. I'll try my best to get back to you!
          </p>
          
          <a href="mailto:gunitchawla2604@gmail.com" className="btn-primary inline-flex items-center justify-center">
            <Mail className="mr-2" size={18} />
            <span>Say Hello</span>
          </a>
        </div>
        
        <div className="max-w-2xl mx-auto bg-secondary rounded-md p-8 mt-16">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block font-mono text-sm text-slate-light mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Your name"
                  className="input-field"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block font-mono text-sm text-slate-light mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your email"
                  className="input-field"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block font-mono text-sm text-slate-light mb-2">
                Subject
              </label>
              <Input
                id="subject"
                placeholder="Subject"
                className="input-field"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block font-mono text-sm text-slate-light mb-2">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Your message"
                className="input-field min-h-[150px]"
                required
              />
            </div>
            
            <Button type="submit" className="btn-primary w-full">
              <Send className="mr-2" size={18} />
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
