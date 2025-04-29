'use client';

import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (textRef.current) {
        const scrollY = window.scrollY;
        const opacity = 1 - Math.min(1, scrollY / 600);
        const translateY = scrollY * 0.3;
        textRef.current.style.opacity = opacity.toString();
        textRef.current.style.transform = `translateY(${translateY}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      ref={heroRef}
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/50 dark:from-background dark:via-background dark:to-background/90 z-0" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl animate-blob opacity-50" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl animate-blob animation-delay-2000 opacity-50" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-accent/10 rounded-full filter blur-3xl animate-blob animation-delay-4000 opacity-50" />
      </div>

      <div 
        ref={textRef}
        className="relative z-10 container mx-auto px-4 text-center transition-all duration-300"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
          <span className="block mb-2">Hello, I'm</span>
          <span className="bg-gradient-to-r from-primary to-primary/80 text-transparent bg-clip-text">
            John Doe
          </span>
        </h1>
        
        <h2 className="text-xl md:text-2xl lg:text-3xl text-foreground/80 mb-8 max-w-3xl mx-auto">
          Creative developer crafting beautiful digital experiences with a focus on detail and performance
        </h2>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <Button size="lg" className="px-8 py-6 text-base" onClick={scrollToAbout}>
            Explore My Work
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="px-8 py-6 text-base"
            asChild
          >
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <Button 
          variant="ghost" 
          size="icon" 
          className="rounded-full h-12 w-12 border border-muted"
          onClick={scrollToAbout}
        >
          <ArrowDown className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}