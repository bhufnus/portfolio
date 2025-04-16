
import React from 'react';
import {Section} from '@/components/Section';
import {Progress} from '@/components/ui/progress';

const skills = [
  {name: 'React', value: 85},
  {name: 'Node.js', value: 70},
  {name: 'JavaScript', value: 90},
  {name: 'TypeScript', value: 75},
  {name: 'Doing ur mom', value: 80},
];

export const SkillsSection = React.forwardRef<HTMLElement, {}>(({}, ref) => {
  return (
    <Section ref={ref} id="skills" title="Skills" className="min-h-screen flex items-center justify-center" padding="8rem 2rem">
      <div className="container mx-auto px-5 py-20">
        <div className="max-w-3xl mx-auto bg-secondary rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">My Skills</h2>
          <div className="space-y-4">
            {skills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex items-center justify-between">
                  <label htmlFor={skill.name} className="text-sm font-medium leading-none">
                    {skill.name}
                  </label>
                  <span className="text-sm text-muted-foreground">{skill.value}%</span>
                </div>
                <Progress id={skill.name} value={skill.value} className="h-4" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
});

SkillsSection.displayName = 'SkillsSection';

