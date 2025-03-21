import React from 'react';
import { About } from '@/sections/About';
import { Button } from '@/components/Button';

const AboutPage: React.FC = () => {
  return (
    <>
      <div style={{ padding: '2rem' }}>
        <About />
      </div>

      <div className='flex flex-col items-center justify-center'>
        <Button className='w-92'>Contact Me</Button>
      </div>
    </>
  );
};

export default AboutPage;
