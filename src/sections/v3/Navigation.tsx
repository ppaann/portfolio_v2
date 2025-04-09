import { NaviLink } from '@/components/v3';
import { ThemeToggle } from '@/modules';
// import Link from 'next/link';
import React from 'react';

const navTabs = [
  { href: '#about', name: 'About' },
  { href: '#projects', name: 'Projects' },
  { href: '#labs', name: 'Labs' },
  { href: '#contact', name: 'Contact' },
];

const Navigation = () => {
  return (
    <header className='sticky top-0 left-0 right-0 z-50 frosted-glass shadow-md transition-all duration-300 ease-in-out '>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <nav
          className='flex items-center justify-between h-16'
          aria-label='Main navigation'
        >
          <div className='flex items-center'>
            <a
              href='/home'
              className='text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 animate-gradient-pulse bg-400%'
            >
              Your Name
            </a>
          </div>
          <div className='hidden md:flex items-center space-x-4'>
            <ul className='flex space-x-4'>
              {navTabs &&
                navTabs.map((link) => (
                  <li key={link.name}>
                    <NaviLink href={link.href} name={link.name} />
                  </li>
                ))}
            </ul>
            <div className='flex gap-4'>
              <ThemeToggle />

              {/* <button
            id='density-toggle'
            aria-label='Toggle content density'
            className='hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md p-2 text-gray-800 dark:text-gray-200'
          >
            <span className='sr-only'>Toggle content density</span>
            <svg
              width='20'
              height='20'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
            >
              <path d='M17 10H3M21 6H3M21 14H3M17 18H3'></path>
            </svg>
          </button>
          <button
            id='motion-toggle'
            aria-label='Toggle reduced motion'
            className='hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md p-2 text-gray-800 dark:text-gray-200'
          >
            <span className='sr-only'>Toggle reduced motion</span>
            <svg
              width='20'
              height='20'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
            >
              <path d='M13 2L3 14h9l-1 8 10-12h-9l1-8z'></path>
            </svg>
          </button> */}
            </div>
          </div>
          <div className='md:hidden flex items-center'>
            <button
              onClick={() => {}} // Replace with your theme toggle logic
              className='text-gray-600 dark:text-gray-400 hover:text-neon-purple dark:hover:text-neon-cyan focus:outline-none p-2 rounded-full transition-colors mr-2'
              aria-label='Toggle theme'
            >
              <i
                id='theme-toggle-icon-mobile'
                className='fas fa-moon text-lg'
              ></i>
            </button>
            <button className='text-gray-700 dark:text-gray-300 focus:outline-none'>
              <i className='fas fa-bars text-xl'></i>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
