import React from 'react';
import { CanvasParticles } from '@/modules';

export default function Hero() {
  return (
    <section
      id='home'
      className='relative h-screen w-screen flex flex-col items-center justify-center text-center px-4  overflow-hidden'
    >
      <CanvasParticles />

      <div className='text-3xl text-center font-bold'>Hello new version!</div>

      <h1 className='text-4xl md:text-6xl font-extrabold mb-4'>
        <span className='bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient-pulse bg-400%'>
          Pan Pan / UX Engineer
        </span>
      </h1>
      <p className='text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto'>
        Creative Web Developer & User Experience Designer crafting seamless
        digital experiences.
      </p>
      <a
        href='#about'
        className='mt-8 inline-block text-gray-500 dark:text-gray-400 animate-bounce'
      >
        <i className='fas fa-chevron-down text-2xl'></i>
      </a>
    </section>
  );
}
