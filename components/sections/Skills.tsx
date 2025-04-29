'use client';

import React, { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useInView } from '@/hooks/useInView';

// Skill data
const skillCategories = [
  {
    id: 'frontend',
    label: 'Frontend',
    skills: [
      { name: 'React', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'HTML/CSS', level: 95 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'JavaScript', level: 95 },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    skills: [
      { name: 'Node.js', level: 80 },
      { name: 'Express', level: 85 },
      { name: 'MongoDB', level: 75 },
      { name: 'PostgreSQL', level: 70 },
      { name: 'GraphQL', level: 65 },
      { name: 'REST APIs', level: 90 },
    ],
  },
  {
    id: 'design',
    label: 'Design',
    skills: [
      { name: 'Figma', level: 85 },
      { name: 'UI/UX', level: 90 },
      { name: 'Responsive Design', level: 95 },
      { name: 'Prototyping', level: 80 },
      { name: 'Animation', level: 75 },
      { name: 'Design Systems', level: 85 },
    ],
  },
  {
    id: 'other',
    label: 'Other',
    skills: [
      { name: 'Git/GitHub', level: 90 },
      { name: 'Testing', level: 80 },
      { name: 'CI/CD', level: 75 },
      { name: 'Performance Optimization', level: 85 },
      { name: 'Accessibility', level: 80 },
      { name: 'SEO', level: 75 },
    ],
  },
];

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 md:py-32 bg-background"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 text-center transform transition-all duration-700 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Skills & Expertise
          </h2>
          <p className={`text-center text-foreground/70 mb-16 max-w-2xl mx-auto transform transition-all duration-700 delay-200 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            I've developed a diverse set of skills throughout my career. Here's an overview
            of my technical expertise and competencies.
          </p>

          <div className={`transform transition-all duration-700 delay-400 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <Tabs defaultValue="frontend" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
                {skillCategories.map(category => (
                  <TabsTrigger key={category.id} value={category.id}>
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {skillCategories.map(category => (
                <TabsContent key={category.id} value={category.id}>
                  <Card>
                    <CardContent className="p-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6">
                        {category.skills.map((skill, index) => (
                          <div key={skill.name} className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="font-medium">{skill.name}</span>
                              <span className="text-sm text-muted-foreground">{skill.level}%</span>
                            </div>
                            <Progress 
                              value={0} 
                              max={100} 
                              className="h-2 transition-all duration-1000"
                              style={{
                                '--progress-value': isInView ? `${skill.level}%` : '0%',
                                '--progress-delay': `${index * 150}ms`,
                              } as React.CSSProperties}
                            />
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}