
import React from "react";
import {Section} from '@/components/Section';
import {Icons} from "@/components/icons";

export const HeroSection = React.forwardRef<HTMLElement, {}>(({}, ref) => {
  return (
    <Section ref={ref} id="hero" title="Hero" className="min-h-screen flex items-center justify-center" padding="8rem 2rem">
      <div className="container mx-auto px-5 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col items-center md:items-start">
            <h1 className="text-4xl font-bold mb-4">Hi, I'm Brian Hufnus</h1>
            <p className="text-lg text-muted-foreground mb-6">
              A passionate software engineer with experience in building scalable and maintainable web applications.
            </p>
            <div className="marquee-container">
              <span className="marquee-content">
                <div className="marquee-item"><Icons.javascript className="w-12 h-12" /></div>
                <div className="marquee-item"><Icons.node className="w-12 h-12" /></div>
                <div className="marquee-item"><Icons.express className="w-12 h-12" /></div>
                <div className="marquee-item"><Icons.mongo className="w-12 h-12" /></div>
                <div className="marquee-item"><Icons.react className="w-12 h-12" /></div>
                <div className="marquee-item"><Icons.kubernetes className="w-12 h-12" /></div>
                <div className="marquee-item"><Icons.sql className="w-12 h-12" /></div>
                <div className="marquee-item"><Icons.aws className="w-12 h-12" /></div>
                <div className="marquee-item"><Icons.docker className="w-12 h-12" /></div>
                <div className="marquee-item"><Icons.java className="w-12 h-12" /></div>
              </span>
            </div>
            <button className="bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/80">
              Learn More
            </button>
          </div>
          <div className="image-container">
            <img
              src="https://picsum.photos/500/300"
              alt="Hero Image"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </Section>

 
  );
});

HeroSection.displayName = 'HeroSection';

