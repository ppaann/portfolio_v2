import { Button as HeadlessButton } from '@headlessui/react';
import { ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';

export const Button = ({
  className,
  children,
  ...others
}: ComponentPropsWithoutRef<'button'>) => {
  return (
    <HeadlessButton
      className={twMerge(
        'gradient-bg inline-flex justify-center items-center rounded-2xl h-10 text-white/90 font-semibold text-base gap-2 px-12 hover:cursor-pointer transition duration-200 ease-in-out hover:bg-blue-700 hover:shadow-xl hover:scale-105',
        className
      )}
      {...others}
    >
      {children}
    </HeadlessButton>
  );
};

export const SecondaryButton = ({
  className,
  children,
  ...others
}: ComponentPropsWithoutRef<'button'>) => {
  return (
    <HeadlessButton
      className={twMerge(
        ' relative  p-[2px] bg-gradient-to-r from-purple-500  to-red-500 rounded-xl  inline-flex justify-center items-center hover:cursor-pointer transition duration-200 ease-in-out  hover:shadow-md hover:scale-105',
        className
      )}
      {...others}
    >
      <span className='relative block px-8 py-[7px] text-base font-semibold text-purple-600 bg-white rounded-xl'>
        {children}
      </span>
    </HeadlessButton>
  );
};

export const LinkButton = ({
  className,
  children,
  ...others
}: ComponentPropsWithoutRef<'a'>) => {
  return (
    <a
      className={twMerge(
        'bg-white text-purple-600 px-8 py-2 rounded-mdgradient-text inline-flex justify-center items-center font-semibold text-base gap-2 hover:cursor-pointer hover:scale-105 transition duration-300 ease-in-out hover:text-blue-700 ',
        className
      )}
      {...others}
    >
      {children}
    </a>
  );
};
