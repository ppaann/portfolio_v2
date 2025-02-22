import React from 'react';
import { Wave } from '../components/Wave';
import {
  AtSymbolIcon,
  ArrowUpRightIcon,
  ArrowTopRightOnSquareIcon,
} from '@heroicons/react/24/outline';
import LinkedinIcon from '@/assets/icons/linkedin.svg';
import { Button } from '@/components/Button';

const contacts = [
  {
    name: 'Email',
    href: 'mailto:mailbox.pan@gmail.com',
    icon: AtSymbolIcon,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/panpan/',
    icon: LinkedinIcon,
  },
];

export const Footer = () => {
  return (
    <footer className='flex w-full justify-center h-96 overflow-clip'>
      <div className='max-w-7xl w-full flex flex-col items-center relative'>
        <div className='w-full h-full -z-20'>
          <div className='absolute w-full h-44 bottom-0 backdrop-blur-2xl bg-gradient-to-b from-transparent to-purple-500/50'></div>
          <div className='blur-2xl'>
            <Wave className='absolute -z-10' viewHeight={440} />
          </div>
        </div>
        <div className='absolute inset-0 flex flex-col items-center justify-between '>
          <div className='flex flex-row justify-between items-center mt-32 w-full max-w-3xl bg-white/30 rounded-3xl px-6 py-10 shadow-md'>
            <div>
              <h2 className='font-serif text-2xl font-semibold gradient-text'>
                Let's create something amazing together!
              </h2>
              <p className='pt-2 font-sans text-sm'>
                Bridging the gap between design and development!
              </p>
            </div>
            <div>
              <Button>
                <span>Contact Me</span>
                <ArrowUpRightIcon className='size-3' />
              </Button>
            </div>
          </div>

          <div className='text-center text-white inline-flex items-center justify-between gap-8 px-20 py-6'>
            <p className='text-sm'>© 2025 Pan Pan</p>
            <div className='inline-flex items-center gap-6'>
              {contacts.map((contact, index) => {
                return (
                  <a
                    key={index}
                    href={contact.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-white text-sm hover:text-white transition-colors inline-flex items-center gap-2 hover:shadow-sm hover:shadow-white/20'
                  >
                    <span>{contact.name}</span>
                    <span className='size-4'>
                      <ArrowTopRightOnSquareIcon />
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
