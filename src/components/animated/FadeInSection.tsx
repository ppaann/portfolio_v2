'use client';
import React, { ReactNode } from 'react';
import { motion } from 'motion/react';
import { twMerge } from 'tailwind-merge';

type Props = {
  children: ReactNode;
  className?: string;
  id?: string;
}; // Inherits native props of the element

const FadeInSection = ({ children, className, id, ...props }: Props) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
      className={twMerge(className, 'relative z-10 px-8 py-12 text-gray-700')}
      {...props} // Spread any additional props to the section element
    >
      {children}
    </motion.section>
  );
};
export default FadeInSection;
