import React from 'react';
import { ProjectSummary } from '@/modules';
import ProjectDetail from './ProjectDetail';
// import S24Project from './S24Project';

const Suomi24 = () => {
  return (
    <article className='w-screen'>
      <ProjectSummary
        heading='Redesign Suomi24.fi '
        description='Revamping the website for a mordern, mobile-friendly design.'
      />

      <ProjectDetail />
    </article>
  );
};

export default Suomi24;
