const navTabs = ['Home', 'Projects', 'About', 'Contact'];
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';
export const Header = () => {
  return (
    <nav className='inline-flex justify-center items-center fixed top-3 w-full z-10 md:max-w-5xl'>
      <ul className='flex gap-4 p-0.5 border border-purple-500/15 rounded-full bg-purple-400/10 backdrop-blur'>
        {navTabs.map((tab) => (
          <li key={tab} className='nav-item'>
            <a href={`#${tab}`}>{tab}</a>
          </li>
        ))}
      </ul>
      <span className='p-0.5 font-semibold text-sm gradient-text right-20 absolute'>
        <a
          href='/resume.pdf'
          className='inline-flex gap-2 items-center justify-center hover:shadow-sm hover:shadow-purple-500/20'
          target='_blank'
          rel='noopener noreferrer'
        >
          Resume
          <ArrowDownTrayIcon className='text-gray-900 size-3' />
        </a>
      </span>
    </nav>
  );
};
