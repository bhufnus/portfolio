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

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      sections.forEach((section, index) => {
        if (section.current) {
          const top = section.current.offsetTop;
          const height = section.current.offsetHeight;
          const middle = top + height / 2;

          // Calculate the distance from the scroll position to the middle of the section
          const distance = Math.abs(scrollPosition - middle + windowHeight / 2);

          // Normalize the distance to a value between 0 and 1
          const normalizedDistance = Math.min(1, distance / (windowHeight / 2));

          // Calculate the scale and opacity based on the normalized distance
          const scale = 1 + (0.1 * (1 - normalizedDistance)); // Scale from 1 to 1.1
          const opacity = 1 - (0.3 * normalizedDistance); // Opacity from 0.7 to 1

          section.current.style.transform = `scale(${scale})`;
          section.current.style.opacity = opacity.toString();
        }
      });
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
