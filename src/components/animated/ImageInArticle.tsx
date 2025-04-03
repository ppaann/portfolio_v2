'use client';
import React from 'react';
import { motion } from 'motion/react';
import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface ImageInArticleProps {
  children: ReactNode;
  description?: string;
  className?: string;
}

const ImageInArticle: React.FC<ImageInArticleProps> = ({
  children,
  description = '',
  className,
}) => {
  return (
    <motion.div
      className={twMerge(className, 'px-4 pt-8 pb-4 relative')}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
    >
      <div>{children}</div>
      {description && (
        <p className='font-semibold text-center pt-4'>{description}</p>
      )}
    </motion.div>
  );
};

export default ImageInArticle;
