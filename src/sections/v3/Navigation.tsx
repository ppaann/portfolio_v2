import { NaviLink } from '@/components/v3';
import React from 'react';

const navTabs = [
  { href: '#home', name: 'Home' },
  { href: '#projects', name: 'Projects' },
  { href: '#labss', name: 'Labs' },
  { href: '#about', name: 'About' },
  { href: '#contact', name: 'Contact' },
];

const Navigation = () => {
  return (
    <header className='sticky top-0 bg-white dark:bg-black px-4 py-2 z-10 shadow-md flex justify-between items-center'>
      <a href='#' className='logo'>
        AC
      </a>
      <nav aria-label='Main navigation' className='hidden md:block'>
        <ul className='flex list-none gap-8'>
          {navTabs &&
            navTabs.map((link) => (
              <li key={link.name}>
                <NaviLink href={link.href} name={link.name} />
              </li>
            ))}
        </ul>
      </nav>
      <div className='controls flex gap-4'>
        <button
          id='theme-toggle'
          aria-label='Toggle theme'
          className='hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md p-2 text-gray-800 dark:text-gray-200'
        >
          <span className='sr-only'>Toggle theme</span>
          <svg
            width='20'
            height='20'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
          >
            <circle cx='12' cy='12' r='5'></circle>
            <path d='M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42'></path>
          </svg>
        </button>
        <button
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
        </button>
      </div>
    </header>
  );
};

export default Navigation;
