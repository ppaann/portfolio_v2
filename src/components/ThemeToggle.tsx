// components/ThemeToggle.tsx
'use client';
// This component toggles between light and dark mode by adding/removing the 'dark' class on the document's root element.
import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className='fixed top-4 right-4 z-50 px-4 py-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded'
    >
      Toggle {dark ? 'Light' : 'Dark'} Mode
    </button>
  );
};

export default ThemeToggle;
