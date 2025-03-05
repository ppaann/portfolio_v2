import React from 'react';
import { ImageContainer } from '@/modules';

const ProjectDetail: React.FC = () => {
  return (
    <div>
      <div id='header-image' className='w-screen inline-flex justify-center'>
        <div className='w-full max-w-5xl'>
          <ImageContainer
            leftSrc='/projects/s24/s24-homepage-m.png'
            leftAlt='s24_m'
            middleSrc='/projects/s24/s24-home-desk.png'
            middleAlt='home_desk'
            rightSrc='/projects/s24/s24-navi.png'
            rightAlt='navi_view'
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
