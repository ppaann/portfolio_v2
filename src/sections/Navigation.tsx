const navTabs = [
  { href: '/', name: 'Home' },
  { href: '/projects', name: 'Projects' },

  { href: '/about', name: 'About' },

  { href: '/contact', name: 'Contact' },
];
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import { NaviLink } from '@/components';

export const Navigation = () => {
  return (
    <header className='inline-flex justify-center w-screen'>
      <nav className='inline-flex justify-center items-center fixed top-3 w-full z-10 max-w-5xl'>
        <ul className='flex gap-4 p-0.5 border border-purple-500/15 rounded-full bg-purple-400/10 backdrop-blur'>
          {navTabs.map((link) => (
            <li key={link.name}>
              <NaviLink href={link.href} name={link.name} />
            </li>
          ))}
        </ul>
        <span className='p-0.5 font-semibold text-sm gradient-text hidden sm:block sm:right-6 md:right-20 absolute'>
          <a
            href='/resume_Pan.pdf'
            className='inline-flex gap-2 items-center justify-center hover:shadow-sm hover:shadow-purple-500/20'
            target='_blank'
            rel='noopener noreferrer'
          >
            Resume
            <ArrowDownTrayIcon className='text-gray-900 size-3' />
          </a>
        </span>
      </nav>
    </header>
  );
};
