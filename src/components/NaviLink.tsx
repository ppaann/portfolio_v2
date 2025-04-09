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
      className='text-gray-800 dark:text-gray-200 font-medium relative px-4'
      aria-current={isActive ? 'page' : undefined}
    >
      {name}
    </Link>
  );
};

export default NavLink;
