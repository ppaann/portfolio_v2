'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

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
      className={twMerge(
        'nav-item',
        `${
          isActive
            ? 'bg-purple-500 text-white' // Active state styles
            : '' // Default and hover styles
        }`
      )}
      aria-current={isActive ? 'page' : undefined}
    >
      {name}
    </Link>
  );
};

export default NavLink;
