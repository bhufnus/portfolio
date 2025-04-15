'use client';

import {useEffect, useRef} from 'react';
import {Section} from '@/components/Section';
import {ContactSection} from '@/components/ContactSection';
import {SkillsSection} from '@/components/SkillsSection';
import {HeroSection} from '@/components/HeroSection';
import {ResumeSection} from '@/components/ResumeSection';
import {BioSection} from '@/components/BioSection';
import {Toaster} from '@/components/ui/toaster';

export default function Home() {
  const sections = [
    useRef(null), // Hero
    useRef(null), // Skills
    useRef(null), // Resume
    useRef(null), // Contact
    useRef(null), // Bio
  ];

  const prevActiveSection = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      let currentActiveSection: number | null = null;

      sections.forEach((section, index) => {
        if (section.current) {
          const top = section.current.offsetTop;
          const height = section.current.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            currentActiveSection = index;
            section.current?.classList.add('active-section');
          } else {
            section.current?.classList.remove('active-section');
          }
        }
      });

      // Only update if the active section has changed
      if (currentActiveSection !== prevActiveSection.current) {
        sections.forEach((section, index) => {
          if (section.current) {
            if (index === currentActiveSection) {
              section.current?.classList.add('active-section');
              section.current?.classList.remove('inactive-section'); // Remove inactive class if it exists
            } else {
              section.current?.classList.remove('active-section');
              section.current?.classList.add('inactive-section'); // Add inactive class
            }
          }
        });

        prevActiveSection.current = currentActiveSection; // Update the ref
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  return (
    <div>
      <HeroSection ref={sections[0]} id="hero" />
      <SkillsSection ref={sections[1]} id="skills" />
      <ResumeSection ref={sections[2]} id="resume" />
      <ContactSection ref={sections[3]} id="contact" />
      <BioSection ref={sections[4]} id="bio" />
      <Toaster />
    </div>
  );
}

