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

export const Hero = () => {
  const { scrollY } = useScroll();
  const backgroundControls = useAnimation();
  const floatingShapesControls = useAnimation();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest <= 400) {
      floatingShapesControls.start({ y: latest * 0.8 });
    } else {
      floatingShapesControls.stop();
    }
  });

  return (
    <div className='h-[900px] w-screen '>
      <section className='h-full w-screen flex flex-col justify-center items-center text-center px-6 relative '>
        <div className='flex flex-col justify-center items-center text-center px-6 absolute inset-0 top-0'>
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
        <div className='flex flex-col justify-center items-center text-center px-6 absolute inset-0 bottom-0'>
          <motion.div
            className='absolute inset-0 top-0 md:-top-[200px] blur-[48px] z-0 '
            animate={backgroundControls}
          >
            <svg
              viewBox='0 0 1440 914'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g className=''>
                <path
                  d='M1553 338.047C1553 338.047 1291.94 304.49 1128.5 338.047C959.847 372.675 718.093 344.881 562.5 258.9C492.929 220.455 303.804 171.521 126.208 137.815C-37.5648 106.732 -145 137.815 -145 137.815V746.5C-145 746.5 291.445 696.279 623 696.279C954.555 696.279 1553 789.974 1553 789.974V338.047Z'
                  fill='url(#paint0_linear_45_104)'
                  fillOpacity='0.2'
                ></path>
              </g>
              <g className=''>
                <path
                  d='M-114 240.047C-114 240.047 147.061 206.49 310.5 240.047C479.153 274.675 720.907 346.881 876.5 260.9C946.071 222.455 1135.2 173.521 1312.79 139.815C1476.56 108.732 1584 139.815 1584 139.815V566.5C1584 566.5 1147.56 698.279 816 698.279C484.445 698.279 -91.5 590.5 -91.5 590.5L-114 240.047Z'
                  fill='url(#paint1_linear_45_104)'
                  fillOpacity='0.2'
                ></path>
              </g>
              <g className=''>
                <path
                  d='M484 285C484 384.291 403.411 464.782 304 464.782C204.589 464.782 124 384.291 124 285C124 185.71 243.724 124 343.135 124C442.546 124 484 185.71 484 285Z'
                  fill='#FACC15'
                  fillOpacity='0.12'
                ></path>
              </g>
              <defs>
                <linearGradient
                  id='paint0_linear_45_104'
                  x1='1553'
                  y1='521.652'
                  x2='-145'
                  y2='521.652'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop offset='0.595' stopColor='#3F20FB'></stop>
                  <stop offset='1' stopColor='#B377FF'></stop>
                </linearGradient>
                <linearGradient
                  id='paint1_linear_45_104'
                  x1='-114'
                  y1='523.652'
                  x2='1584'
                  y2='523.652'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#3F20FB'></stop>
                  <stop offset='0.385' stopColor='#B377FF'></stop>
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
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
    </div>
  );
};

// Compare this snippet from portfolio/src/app/page.tsx:
