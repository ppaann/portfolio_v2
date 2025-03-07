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
  { name: 'Old Version', href: 'https://ppaann.github.io' },
  { name: 'Source Code', href: 'https://github.com/ppaann/portfolio_v2' },
];

export const Footer = () => {
  return (
    <footer className='flex w-full justify-center md:h-96 overflow-clip'>
      <div className='w-screen flex flex-col items-center relative'>
        <div className='absolute inset-0 w-full h-full -z-20'>
          <div className='absolute w-full h-44 bottom-0 backdrop-blur-2xl bg-gradient-to-b from-transparent to-purple-500/50'></div>
          <div className='blur-2xl'>
            <Wave className='absolute -z-10' viewHeight={440} />
          </div>
        </div>
        <div className='flex flex-col items-center justify-between px-4'>
          <div className='flex flex-col gap-4 md:flex-row justify-between items-center mx-2 mt-10 md:mt-40 w-full max-w-4xl bg-white/30 rounded-3xl px-6 py-5 md:py-10 shadow-md'>
            <div>
              <h2 className='font-serif text-2xl font-semibold gradient-text md:text-start text-center'>
                Let&apos;s create something amazing together!
              </h2>
              <p className='pt-2 font-sans text-sm  md:text-start text-center'>
                Bridging the gap between design and development!
              </p>
            </div>
            <div>
              <Button className='px-4 md:w-36'>
                <span>Contact Me</span>
                <ArrowUpRightIcon className='size-3' />
              </Button>
            </div>
          </div>

          <div className='text-center text-white flex flex-col md:flex-row items-center justify-between gap-8 px-1 md:px-20 pb-2 md:py-6'>
            <p className='text-sm text-gray-900 pt-8 md:pt-0 md:text-white'>
              © 2025 Pan Pan
            </p>
            <div className='flex flex-col md:flex-row items-center gap-6'>
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
