'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface NavLinkProps {
  href: string;
  name: string;
}

const NavLink = ({ href, name }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive =
    pathname === href ||
    pathname.startsWith(`${href}/`) ||
    (href !== '/' && pathname === `${href}/`);

  return (
    <Link
      href={href}
      className='hover:text-blue-500 dark:hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors'
      aria-current={isActive ? 'page' : undefined}
    >
      {name}
    </Link>
  );
};

export default NavLink;
