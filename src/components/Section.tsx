
import React from 'react';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  id: string;
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(({title, id, className, children, ...props}, ref) => {
  return (
    <section
      ref={ref}
      id={id}
      className={`snap-start bg-background ${className}`}
      {...props}
    >
      {/* You can add a title or other common elements here if needed */}
      {children}
    </section>
  );
});

Section.displayName = 'Section';
