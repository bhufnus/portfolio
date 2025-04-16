
'use client';

import React, {useState} from 'react';
import {Section} from '@/components/Section';
import {Input} from '@/components/ui/input';
import {Textarea} from '@/components/ui/textarea';
import {Button} from '@/components/ui/button';
import {generateBio} from '@/ai/flows/generate-bio';
import {useToast} from '@/hooks/use-toast';
import { Icons } from '@/components/icons';

export const BioSection = React.forwardRef<HTMLElement, {}>(({}, ref) => {
  const [desiredRoles, setDesiredRoles] = useState('');
  const [experience, setExperience] = useState('');
  const [skills, setSkills] = useState('');
  const [bio, setBio] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const {toast} = useToast();

  const handleGenerateBio = async () => {
    setIsLoading(true);
    try {
      const result = await generateBio({desiredRoles, experience, skills});
      setBio(result.bio);
      toast({
        title: 'Bio Generated!',
        description: 'Your AI-powered bio has been generated.',
      });
    } catch (error: any) {
      console.error('Error generating bio:', error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: error.message || 'Failed to generate bio. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Section ref={ref} id="bio" title="AI-Powered Bio" className="min-h-screen flex items-center justify-center" padding="8rem 2rem">
      <div className="container mx-auto px-5 py-20">
        <div className="max-w-3xl mx-auto bg-secondary rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">About Me - AI Powered</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="desiredRoles" className="block text-sm font-medium text-foreground">
                Desired Roles
              </label>
              <Input
                type="text"
                id="desiredRoles"
                value={desiredRoles}
                onChange={(e) => setDesiredRoles(e.target.value)}
                className="mt-1 block w-full rounded-md shadow-sm"
              />
            </div>
            <div>
              <label htmlFor="experience" className="block text-sm font-medium text-foreground">
                Experience
              </label>
              <Textarea
                id="experience"
                rows={3}
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                className="mt-1 block w-full rounded-md shadow-sm"
              />
            </div>
            <div>
              <label htmlFor="skills" className="block text-sm font-medium text-foreground">
                Skills
              </label>
              <Input
                type="text"
                id="skills"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                className="mt-1 block w-full rounded-md shadow-sm"
              />
            </div>
            <div>
              <Button onClick={handleGenerateBio} disabled={isLoading} className="w-full">
                {isLoading ? 'Generating...' : 'Generate Bio'}
              </Button>
            </div>
            {bio && (
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-2">Generated Bio</h3>
                <p className="text-foreground">{bio}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
});

BioSection.displayName = 'BioSection';

