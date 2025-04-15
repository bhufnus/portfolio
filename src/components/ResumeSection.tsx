
import React from 'react';
import {Section} from '@/components/Section';

export const ResumeSection = React.forwardRef<HTMLElement, {}>(({}, ref) => {
  return (
    <Section ref={ref} id="resume" title="Resume" className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-5 py-20">
        <div className="max-w-3xl mx-auto bg-secondary rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
          <div className="mb-6">
            <h3 className="text-xl font-semibold">Software Engineer</h3>
            <p className="text-muted-foreground">Acme Corp | 2020 - Present</p>
            <p className="text-foreground mt-2">
              Developed and maintained web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality
              products.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Education</h2>
            <h3 className="text-xl font-semibold">Bachelor of Science in Computer Science</h3>
            <p className="text-muted-foreground">University of Example | 2016 - 2020</p>
            <p className="text-foreground mt-2">Relevant coursework included data structures, algorithms, and software engineering.</p>
          </div>
        </div>
      </div>
    </Section>
  );
});

ResumeSection.displayName = 'ResumeSection';
