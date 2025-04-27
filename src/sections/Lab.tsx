'use client';
import { CardMini } from '@/components';
import { SectionHead } from '@/components/SectionHead';
import Link from 'next/link';

const labProjects = [
  {
    id: '1',
    title: 'Design-to-Code Automation Toolkit',
    description:
      'A fully automated design-to-code pipeline that bridges Figma and React, AI-assisted component generation and continuous visual testing.',
    tools: ['Figma', 'React', 'AI', 'GitAction', 'Storybook', 'chromatic'],
    link: '/lab/figma-to-react',
    tags: ['#AI', '#ComponentLibrary', '#Figma'],
  },
  {
    id: '2',
    title: 'Realtime Stock Market Dashboard',
    description:
      'A real-time stock market dashboard that provides live updates on stock prices, add/remove symbol from watchlist. Responsive layout design make it mobile friendly.',
    tools: ['React', 'WebSocket', 'Chart.js'],
    link: 'https://stock-dashboard-amber.vercel.app/',
    tags: ['#WebSocket', '#Chart.js', '#RestAPI'],
  },
];

import React from 'react';
export const Lab = () => {
  return (
    <section className='flex flex-col items-center justify-center h-screen w-screen'>
      <SectionHead
        title='Lab/Experiments'
        header='My experimental projects'
        description='AI, Prototyping, prove of concept and more...'
      />
      <div className='max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:px-10 md:pt-5'>
        {labProjects.map((project) => (
          <Link key={project.id} href={project.link}>
            <CardMini
              title={project.title}
              description={project.description}
              tools={project.tools}
              tags={project.tags}
            />
          </Link>
        ))}
      </div>
    </section>
  );
};
