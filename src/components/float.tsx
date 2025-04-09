import React from 'react';
import {
  motion,
  useAnimation,
  useScroll,
  useMotionValueEvent,
} from 'motion/react';

interface FloatProps {
  children: React.ReactNode;
}

const Float: React.FC<FloatProps> = ({ children }) => {
  const controls = useAnimation(); // Controls for animating the component
  const { scrollYProgress } = useScroll(); // Get scroll progress (from 0 to 1)

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    // When scrollYProgress changes, animate the Y position accordingly
    controls.start({
      y: latest * 200, // Adjust multiplier to control the scroll-following speed
    });
  });

  return (
    <motion.div
      animate={controls} // Use controls to animate the component
      initial={{ x: 0, y: 0 }} // Initial position
      transition={{ type: 'spring', stiffness: 100 }}
      className='fixed right-6 top-8 bg-slate-100 size-10 p-1 rounded-full shadow-lg cursor-pointer z-1000'
    >
      {children}
    </motion.div>
  );
};

export default Float;
