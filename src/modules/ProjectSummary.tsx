import React from 'react';

const ProjectSummary = ({ heading = '', description = '' }) => {
  return (
    <div className='mt-20 md:mt-40 mb-10'>
      <div className='text-center pb-4 md:pb-8'>{heading}</div>

      <div className='text-center'>{description}</div>
    </div>
  );
};

export default ProjectSummary;
