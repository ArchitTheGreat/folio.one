'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useInView } from '@/hooks/useInView';

// Project data
const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform built with Next.js, featuring product filtering, user authentication, and payment processing with Stripe.',
    image: 'https://images.pexels.com/photos/326501/pexels-photo-326501.jpeg',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A full-featured task management application with drag-and-drop functionality, team collaboration features, and real-time updates.',
    image: 'https://images.pexels.com/photos/3182811/pexels-photo-3182811.jpeg',
    technologies: ['React', 'Firebase', 'TypeScript', 'TailwindCSS'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com',
  },
  {
    id: 3,
    title: 'Fitness Tracking Dashboard',
    description: 'An interactive dashboard for fitness tracking with data visualization, progress tracking, and personalized workout recommendations.',
    image: 'https://images.pexels.com/photos/3757921/pexels-photo-3757921.jpeg',
    technologies: ['React', 'D3.js', 'Node.js', 'MongoDB'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com',
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 md:py-32 bg-muted/30"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 text-center transform transition-all duration-700 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Featured Projects
          </h2>
          <p className={`text-center text-foreground/70 mb-16 max-w-2xl mx-auto transform transition-all duration-700 delay-200 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Here's a selection of my recent work. Each project presented unique challenges
            and opportunities to create meaningful digital experiences.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.id}
                className={`overflow-hidden border border-border hover:border-primary/20 hover:shadow-md transition-all duration-300 bg-card transform transition-all duration-700 ${
                  isInView 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-foreground/70 text-sm mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map(tech => (
                      <Badge key={tech} variant="outline" className="bg-primary/5 hover:bg-primary/10">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-1 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-1 h-4 w-4" />
                        View Live
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className={`mt-12 text-center transform transition-all duration-700 delay-800 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <Button variant="outline" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                View More Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}