'use client';
import { motion } from 'motion/react';
import React from 'react';
import Image from 'next/image';
import websiteS24Home from '@/assets/images/website-s24-home.png';
import websitePoleDance from '@/assets/images/website-pole-dance.png';
import { Button } from '@headlessui/react';

const projects = [
  {
    title: 'Redesign Suomi24.fi',
    company: 'Aller Media',
    description:
      'Lead the redesign of Suomi24.fi, the largest Finnish online discussion forumcatering to a vibrant community of 1.4 million weekly users.',
    image: websiteS24Home,
    role: [
      {
        title: 'UX Designer',
        description:
          'Revamping the layout and look and feel, improved information accessibility and mobile usability.',
      },
      {
        title: 'Frontend Developer',
        description:
          'I modernized the frontend codebase, transitioned it from FlightJS to React framework.',
      },
    ],
    link: 'https://www.suomi24.fi/',
    design: '/projects/suomi24',
    code: 'https://github.com',
  },
  {
    title: 'Website Professional Dancer',
    company: 'Vivian Pole Dance',
    description:
      'Design and implement a professional website for a pole dancer.',
    image: websitePoleDance,
    link: 'https://vivianpoledance.vercel.app/',
    design: '/projects/ux-dancer',
    code: 'https://github.com/ppaann/vivian.pole.dance.app',
  },
];

export const Projects = () => {
  return (
    <section className='w-screen py-40 bg-transparent px-10 relative '>
      <div className='flex flex-col justify-center max-w-7xl items-center mx-auto'>
        <p className='uppercase font-sans font-bold tracking-widest text-center bg-gradient-to-r from-purple-400 to-blue-700 bg-clip-text text-transparent'>
          Real word project
        </p>
        <h1 className='  text-6xl font-bold text-center text-gray-900 font-mono pt-8'>
          Portfolio
        </h1>
        <div className='mt-10 flex flex-col gap-12'>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className='relative bg-white border-purple-400/20 border rounded-xl shadow-sm shadow-purple-200 p-6 hover:shadow-xl transition-transform transform hover:-translate-y-2 duration-300 pt-12 pl-12'
              whileHover={{ rotateY: 10 }}
            >
              <div className='grid grid-cols-2 gap-4'>
                <div>
                  <p className='inline-flex font-bold font-sans uppercase text-sm tracking-wider bg-gradient-to-r from-purple-500 to-blue-700 bg-clip-text text-transparent'>
                    {project.company}
                  </p>
                  <h2 className='text-2xl font-semibold pt-4'>
                    {project.title}
                  </h2>
                  <p className='text-base pt-2 text-gray-700'>
                    {project.description}
                  </p>
                  <div>
                    {project.role &&
                      project.role.map((role, index) => (
                        <div key={index} className='pt-4'>
                          <p className='font-bold text-base'>{role.title}</p>
                          <p className='text-gray-700'>{role.description}</p>
                        </div>
                      ))}
                  </div>
                  <div className='flex gap-4 pt-4 absolute bottom-6'>
                    {project.link && (
                      <a href={project.link} target='_blank'>
                        <Button className='bg-gradient-to-r from-purple-500 to-blue-700 font-semibold text-white/90 px-8 py-2 rounded-xl'>
                          Live
                        </Button>
                      </a>
                    )}
                    {project.design && (
                      <a href={project.design} target='_blank' className='pl-8'>
                        <Button className=' relative inline-block p-[2px] bg-gradient-to-r from-purple-500  to-red-500 rounded-xl'>
                          <span className='relative block px-8 py-[7px] text-base font-semibold text-purple-600 bg-white rounded-xl'>
                            Design
                          </span>
                        </Button>
                      </a>
                    )}
                    {project.code && (
                      <a href={project.code} target='_blank'>
                        <Button className='bg-white text-purple-600 font-semibold px-8 py-2 rounded-md'>
                          Code
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
                <div>
                  <Image
                    src={project.image}
                    alt={project.title}
                    className='h-full'
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
