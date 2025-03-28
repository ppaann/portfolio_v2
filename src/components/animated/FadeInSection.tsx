'use client';
import React, { ReactNode } from 'react';
import { motion } from 'motion/react';
import { twMerge } from 'tailwind-merge';

type Props = {
  children: ReactNode;
  className?: string;
}; // Inherits native props of the element

const FadeInSection = ({ children, className, ...props }: Props) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
      className={twMerge(className, 'relative z-10 px-8 py-20 text-white')}
      {...props} // Spread any additional props to the section element
    >
      <h2 className='text-3xl font-semibold mb-4'>My Projects</h2>
      <p className='text-lg text-gray-300'>
        Beautifully interactive experiments...
      </p>
      {children}
    </motion.section>
  );
};
export default FadeInSection;
