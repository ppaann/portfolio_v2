'use client';
import React, { useRef, ElementType, ReactNode } from 'react';
import { useInView } from 'motion/react';

type Props<T extends ElementType> = {
  as?: T; // Accepts any valid HTML tag or component
  children: ReactNode;
  className?: string;
} & React.ComponentPropsWithoutRef<T>; // Inherits native props of the element

const ScrollInComponent = <T extends ElementType = 'div'>({
  as,
  children,
  className,
  ...props
}: Props<T>) => {
  const Component = as || 'div'; // Default to "div" if no 'as' prop is provided
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <Component
      {...props}
      ref={ref}
      className={className}
      style={{
        transform: isInView ? 'none' : 'translateY(200px)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s',
      }}
    >
      {children}
    </Component>
  );
};

export default ScrollInComponent;
