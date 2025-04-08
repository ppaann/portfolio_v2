'use client';
import { Projects } from '@/sections/Projects';
import { About } from '@/sections/About';
import { Hero } from '@/sections/Hero';
import { Lab } from '@/sections/Lab';
import { useLayout } from '@/context/LayoutContext';
import { Hero as Hero3 } from '@/sections/v3';

export default function Home() {
  const { isNewLayout } = useLayout();
  return isNewLayout ? (
    <div className='relative h-screen w-screen overflow-hidden'>
      <div className='text-3xl text-center font-bold'>Hello new version!</div>

      <Hero3 />
    </div>
  ) : (
    <div className='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
      <Hero />
      <Projects />

      <Lab />
      <About />
    </div>
  );
}
