import React from 'react';
import { Contact } from '@/sections/Contact';
import { SectionHead } from '@/components/SectionHead';

const ContactPage = () => {
  return (
    <div className='w-screen pt-40'>
      <SectionHead
        title='Let&#39;s Connect'
        header='Contact Me'
        description='I would love to hear from you!'
      />
      <Contact />
    </div>
  );
};

export default ContactPage;
