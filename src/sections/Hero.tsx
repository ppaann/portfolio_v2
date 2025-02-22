'use client';
import {
  motion,
  useAnimation,
  useMotionValueEvent,
  useScroll,
} from 'motion/react';
import Image from 'next/image';
import me from '@/assets/images/me.png';
import { Button } from '@headlessui/react';
import { ArrowDownIcon } from '@heroicons/react/24/outline';
import { Wave } from '@/components/Wave';

export const Hero = () => {
  const { scrollY } = useScroll();
  const floatingShapesControls = useAnimation();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest <= 300) {
      floatingShapesControls.start({ y: latest * 0.8 });
    } else {
      floatingShapesControls.stop();
    }
  });

  return (
    <section className='h-[900px] w-screen relative '>
      <div className='flex flex-col justify-center items-center text-center pt-60'>
        <div className=''>
          <Image src={me} alt='me icon' width={300} height={300} />
        </div>

        {/* Parallax Scroll Animation */}
        <motion.div
          className='absolute inset-0 bg-cover bg-center'
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.2 }}
        />

        <motion.h1
          className='text-5xl font-sans drop-shadow-lg font-extrabold text-gray-900 relative z-10 bg-gradient-to-r from-purple-500 to-blue-600 bg-clip-text text-transparent'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I’m Pan Pan
        </motion.h1>
        <motion.p
          className='text-xl text-gray-600 mt-4 relative z-10'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          UX Developer | Frontend Engineer | Fullstack Engineer
        </motion.p>
        <motion.div
          className='mt-6 relative z-10'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Button className='gap-2 inline-flex items-center py-2.5 px-8 rounded-xl bg-gradient-to-r from-purple-500 to-blue-600 text-white/80 font-semibold hover:from-purple-600 hover:to-blue-700 transition duration-300 ease-in-out'>
            <span>View Portfolio </span>
            <ArrowDownIcon className='size-4 animate-bounce' />
          </Button>
        </motion.div>
      </div>
      <div className='relative mt-20'>
        <div className='absolute inset-0 top-0 md:-top-[200px] blur-[48px] z-0 '>
          <Wave />
        </div>
        {/* Gradient Wave Animation */}
        <motion.div
          className='absolute inset-0 '
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        />

        {/* Floating Shapes Animation */}
        <motion.div
          className='absolute inset-0 flex justify-around items-start w-full h-full pointer-events-none'
          animate={floatingShapesControls}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className='w-16 h-16 bg-white opacity-40 rounded-full'
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 3, delay: i * 0.5 }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Compare this snippet from portfolio/src/app/page.tsx:
