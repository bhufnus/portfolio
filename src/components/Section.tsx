import React from 'react';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  id: string;
  bgColor?: string; // Optional background color
  padding?: string; // Optional padding
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(({title, id, className, children, bgColor, padding, ...props}, ref) => {
  const sectionStyle = {
    backgroundColor: bgColor || 'var(--background)', // Use bgColor if provided, otherwise default background
    padding: padding || '4rem 2rem', // Use padding if provided, otherwise default padding
  };

  return (
    <section
      ref={ref}
      id={id}
      className={`bg-background ${className}`}
      style={sectionStyle}
      {...props}
    >
      {/* You can add a title or other common elements here if needed */}
      <div className="container mx-auto">
        {children}
      </div>
    </section>
  );
});

Section.displayName = 'Section';

