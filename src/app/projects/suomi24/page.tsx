import React from 'react';
import { ProjectSummary } from '@/modules';
import ProjectDetail from './ProjectDetail';
// import S24Project from './S24Project';

const Suomi24 = () => {
  return (
    <article>
      <ProjectSummary
        heading='Redesign Suomi24.fi '
        description='Revamping the website for a mordern, mobile-friendly design.'
      />

      {/* <a.div
        className='px-4 pt-8 pb-4 relative'
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.3,
          ease: [0.17, 0.55, 0.55, 1],
        }} */}

      <ProjectDetail />
    </article>
  );
};

export default Suomi24;
