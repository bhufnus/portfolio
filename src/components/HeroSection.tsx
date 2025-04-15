
import React from 'react';
import {Section} from '@/components/Section';

export const HeroSection = React.forwardRef<HTMLElement, {}>(({}, ref) => {
  return (
    <Section ref={ref} id="hero" title="Hero" className="min-h-screen flex items-center justify-center" padding="8rem 2rem">
      <div className="container mx-auto px-5 py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-4">Hi, I'm John Doe</h1>
            <p className="text-lg text-muted-foreground mb-6">
              A passionate software engineer with experience in building scalable and maintainable web applications.
            </p>
            <button className="bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/80">
              Learn More
            </button>
          </div>
          <div>
            <img src="https://picsum.photos/500/300" alt="Hero Image" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </Section>
  );
});

HeroSection.displayName = 'HeroSection';

