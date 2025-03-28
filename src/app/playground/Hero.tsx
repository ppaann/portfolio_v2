'use client';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className='absolute inset-0 flex items-center justify-center z-10'>
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: 'spring',
          stiffness: 80,
          damping: 10,
        }}
        className='text-5xl font-bold text-white drop-shadow-xl'
      >
        Welcome to My Universe 🌌
      </motion.h1>
    </div>
  );
};
export default Hero;
