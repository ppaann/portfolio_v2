import { ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';

export const Card = ({
  className,
  children,
  ...others
}: ComponentPropsWithoutRef<'div'>) => {
  return (
    <div
      className={twMerge(
        'p-3 md:p-6 rounded-3xl outline outline-3 outline-white/20 overflow-hidden relative -z-20 ',
        className
      )}
      {...others}
    >
      {children}
    </div>
  );
};
