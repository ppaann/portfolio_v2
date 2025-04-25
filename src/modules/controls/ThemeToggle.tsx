'use client';
// This component toggles between light and dark mode by adding/removing the 'dark' class on the document's root element.

import { useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/16/solid';

const ThemeToggle = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className='relative z-50 px-4 py-2 bg-transparent text-[var(--text)] rounded'
    >
      {dark ? <SunIcon className='size-5' /> : <MoonIcon className='size-5' />}
    </button>
  );
};

export default ThemeToggle;
