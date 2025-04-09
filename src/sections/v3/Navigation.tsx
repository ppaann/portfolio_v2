import { NaviLink } from '@/components/v3';
import { ThemeToggle } from '@/modules';
import { Bars3Icon } from '@heroicons/react/24/solid';
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
          <div className='inline-flex items-center space-x-4'>
            <ul className='space-x-4 hidden md:flex'>
              {navTabs &&
                navTabs.map((link) => (
                  <li key={link.name}>
                    <NaviLink href={link.href} name={link.name} />
                  </li>
                ))}
            </ul>
            <div className='flex gap-4'>
              <button className='relative z-50 px-4 py-2 bg-transparent text-[var(--text)] rounded'>
                <Bars3Icon className='size-5 block md:hidden' />
              </button>

              <ThemeToggle />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
