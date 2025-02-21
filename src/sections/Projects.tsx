'use client';
import { motion } from 'motion/react';

import React from 'react';
const projects = ['Project 1', 'Project 2', 'Project 3'];

export const Projects = () => {
  return (
    <section className='w-screen py-40 bg-transparent px-10 relative h-[900px]'>
      <div className=''>
        <h2 className='text-4xl font-bold text-center text-[#5B8FB9]'>
          Portfolio
        </h2>
        <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className='relative bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-transform transform hover:-translate-y-2'
              whileHover={{ rotateY: 10 }}
            >
              <h3 className='text-2xl font-semibold'>{project}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
