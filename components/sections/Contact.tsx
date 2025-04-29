'use client';

import React, { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { ArrowRight, Github, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import { toast } from 'sonner';

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success('Message sent successfully! I\'ll get back to you soon.');
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 md:py-32 bg-muted/30"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 text-center transform transition-all duration-700 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Get In Touch
          </h2>
          <p className={`text-center text-foreground/70 mb-16 max-w-2xl mx-auto transform transition-all duration-700 delay-200 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Have a project in mind or want to chat? Feel free to reach out. I'm always open to discussing
            new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
            <div className={`col-span-1 md:col-span-2 transform transition-all duration-700 delay-300 ${
              isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <Card>
                <CardContent className="p-6 space-y-6">
                  <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 mr-3 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium">Location</p>
                        <p className="text-muted-foreground">San Francisco, CA</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Mail className="h-5 w-5 mr-3 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium">Email</p>
                        <a href="mailto:hello@example.com" className="text-muted-foreground hover:text-foreground transition-colors">
                          hello@example.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="h-5 w-5 mr-3 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <a href="tel:+11234567890" className="text-muted-foreground hover:text-foreground transition-colors">
                          +1 (123) 456-7890
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-border">
                    <h4 className="text-lg font-medium mb-3">Connect on Social Media</h4>
                    <div className="flex space-x-4">
                      <a 
                        href="https://github.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="h-10 w-10 bg-muted/50 rounded-full flex items-center justify-center text-foreground/70 hover:text-primary hover:bg-muted transition-colors"
                      >
                        <Github size={20} />
                        <span className="sr-only">GitHub</span>
                      </a>
                      <a 
                        href="https://linkedin.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="h-10 w-10 bg-muted/50 rounded-full flex items-center justify-center text-foreground/70 hover:text-primary hover:bg-muted transition-colors"
                      >
                        <Linkedin size={20} />
                        <span className="sr-only">LinkedIn</span>
                      </a>
                      <a 
                        href="https://twitter.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="h-10 w-10 bg-muted/50 rounded-full flex items-center justify-center text-foreground/70 hover:text-primary hover:bg-muted transition-colors"
                      >
                        <Twitter size={20} />
                        <span className="sr-only">Twitter</span>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className={`col-span-1 md:col-span-3 transform transition-all duration-700 delay-500 ${
              isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input 
                          id="name" 
                          placeholder="Your name" 
                          required 
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="Your email" 
                          required 
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input 
                        id="subject" 
                        placeholder="Subject of your message" 
                        required 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Write your message here..." 
                        rows={5} 
                        required 
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full sm:w-auto"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span>Sending...</span>
                      ) : (
                        <>
                          Send Message
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}