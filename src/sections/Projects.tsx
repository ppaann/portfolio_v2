'use client';
import { motion } from 'motion/react';
import React from 'react';
import Image from 'next/image';
import websiteS24Home from '@/assets/images/website-s24-home.png';
import websitePoleDance from '@/assets/images/website-pole-dance.png';
import websitePortfolio from '@/assets/images/website-mimic-portfolio.png';
import { SectionHead } from '@/components/SectionHead';
import { Button, SecondaryButton, LinkButton } from '@/components/Button';

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
  {
    title: 'Personal Portfolio Website',
    company: 'Freelancer',
    description:
      'Mimic personal portfolio website with a focus on visual aesthetics and motion design.',
    image: websitePortfolio,
    link: 'https://portfoliowithtailwindmotion-hwyp5pjk6-pans-projects-d03820bd.vercel.app/',
    code: 'https://github.com/ppaann/tailwind_motion',
  },
];

export const Projects = () => {
  return (
    <section className='w-screen py-40 bg-transparent px-10 relative '>
      <div className='flex flex-col justify-center max-w-7xl items-center mx-auto'>
        <SectionHead
          title='Real word project'
          header='Portfolio'
          description='My projects'
        />

        <div className='mt-20 flex flex-col gap-12 '>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className=' bg-white border-purple-400/20 border rounded-xl shadow-sm shadow-purple-200 p-6 hover:shadow-xl transition-transform transform  duration-300 pt-12 pl-12 sticky'
              // whileHover={{ rotateY: 10 }}
              style={{ top: `calc(64px + ${index * 40}px)` }}
            >
              <div className='grid grid-cols-2 gap-4 '>
                <div className='relative pb-20'>
                  <p className='inline-flex font-bold font-sans uppercase text-sm tracking-wider bg-gradient-to-r from-purple-500 to-blue-700 bg-clip-text text-transparent'>
                    {project.company}
                  </p>
                  <h2 className='text-2xl font-semibold pt-2 font-serif'>
                    {project.title}
                  </h2>
                  <p className='pt-4 text-gray-700 text-sm'>
                    {project.description}
                  </p>
                  <div>
                    {project.role &&
                      project.role.map((role, index) => (
                        <div key={index} className='pt-4'>
                          <p className='font-bold text-base'>{role.title}</p>
                          <p className='text-gray-700 text-sm'>
                            {role.description}
                          </p>
                        </div>
                      ))}
                  </div>
                  <div className='flex gap-4 pt-4 absolute bottom-0'>
                    {project.link && (
                      <a href={project.link} target='_blank'>
                        <Button className='bg-gradient-to-r from-purple-500 to-blue-700 font-semibold text-white/90 px-8 py-2 rounded-xl'>
                          Live
                        </Button>
                      </a>
                    )}
                    {project.design && (
                      <a href={project.design} target='_blank' className='pl-8'>
                        <SecondaryButton>Design</SecondaryButton>
                        {/* <Button className=' relative inline-block p-[2px] bg-gradient-to-r from-purple-500  to-red-500 rounded-xl'>
                          <span className='relative block px-8 py-[7px] text-base font-semibold text-purple-600 bg-white rounded-xl'>
                            Design
                          </span>
                        </Button> */}
                      </a>
                    )}
                    {project.code && (
                      <LinkButton href={project.code} target='_blank'>
                        Code
                      </LinkButton>
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
