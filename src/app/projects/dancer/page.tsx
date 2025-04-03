import React from 'react';
import { ProjectSummary } from '@/modules';
import DanceProjectDetail from './DanceProjectDetail';

const DancerProject = () => {
  return (
    <article className='w-screen'>
      <ProjectSummary
        heading="Story of Vivian's Pole dance website"
        description="The design thinking in Vivian's website, a Biochemistry Post-Doc turned pole dance trainer. "
      />

      <DanceProjectDetail />
    </article>
  );
};

export default DancerProject;
