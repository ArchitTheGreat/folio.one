'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.2 });
  
  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 md:py-32 bg-background relative"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center transform transition-all duration-700 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            About Me
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
            <div className={`col-span-1 md:col-span-2 transform transition-all duration-700 delay-300 ${
              isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <div className="relative w-full aspect-square max-w-md mx-auto md:mx-0 overflow-hidden rounded-2xl">
                <Image
                  src="https://images.pexels.com/photos/3772510/pexels-photo-3772510.jpeg"
                  alt="Profile image"
                  fill
                  className="object-cover rounded-2xl hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority
                />
              </div>
            </div>
            
            <div className={`col-span-1 md:col-span-3 space-y-6 transform transition-all duration-700 delay-500 ${
              isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <h3 className="text-2xl font-bold">Creative Developer & UI/UX Enthusiast</h3>
              <p className="text-foreground/80 leading-relaxed">
                I'm a passionate developer with 5+ years of experience creating beautiful, 
                functional, and user-centered digital experiences. With a background in both 
                design and development, I bring a unique perspective to every project.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                My journey began as a designer, which gave me a strong foundation in visual 
                communication and user experience principles. As I transitioned into development, 
                I maintained my commitment to creating intuitive and visually appealing interfaces 
                while building robust and scalable applications.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or enjoying nature through photography and hiking.
              </p>
              
              <div className="pt-4">
                <Button variant="outline" className="group" asChild>
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    <FileText className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}