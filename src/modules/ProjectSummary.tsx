import React from 'react';

const ProjectSummary = ({ heading = '', description = '' }) => {
  return (
    <div className='mt-20 md:mt-40 mb-10 font-serif'>
      <h1 className='text-center pb-4 md:pb-8 font-bold text-5xl'>{heading}</h1>

      <p className='text-center'>{description}</p>
    </div>
  );
};

export default ProjectSummary;
