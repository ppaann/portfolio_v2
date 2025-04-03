'use client';
import { CardMini } from '@/components';
import { SectionHead } from '@/components/SectionHead';

import React from 'react';
export const Lab = () => {
  return (
    <section className='flex flex-col items-center justify-center h-screen w-screen'>
      <SectionHead
        title='Lab/Experiments'
        header='My experimental projects'
        description='AI, Prototyping, prove of concept and more...'
      />
      <div className='max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:px-10'>
        <CardMini
          title=' Design-to-Code Automation Toolkit'
          description='A fully automated design-to-code pipeline that bridges Figma and React, AI-assisted component generation and continuous visual testing.'
          tools={[
            'Figma',
            'React',
            'AI',
            'GitAction',
            'Storybook',
            'chromatic',
          ]}
        />
      </div>
    </section>
  );
};
