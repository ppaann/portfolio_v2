'use client';
import { motion } from 'motion/react';
import React from 'react';
import Image from 'next/image';
import websiteS24Home from '@/assets/images/website-s24-home.png';
import websitePoleDance from '@/assets/images/website-pole-dance.png';
import websitePortfolio from '@/assets/images/website-mimic-portfolio.png';
import caseBanner from '@/assets/images/caseBanner.jpg';
import { SectionHead } from '@/components/SectionHead';
import { Button, SecondaryButton, LinkButton } from '@/components/Button';

const projects = [
  {
    title: 'Case Study: Elevating UI-to-Code Workflow through UX Engineering',
    company: 'Microsoft',
    description:
      'Redesigned Microsoft&apos;s SW Variant Tool with AngularJS and Bootstrap. Improved dev speed by 25%, cut bugs by 40%, and reduced deployment time by 30% using modular design, prototyping, and CI/CD.',
    image: caseBanner,
    role: [
      {
        title: 'UX Designer',
        description: 'Workflow design and wireframes.',
      },
      {
        title: 'Frontend Developer',
        description:
          'Building a modular UI with AngularJS/Bootstrap and CI/CD.',
      },
    ],
    design: '/projects/uxengineering',
  },
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
          'Modernized the frontend codebase, transitioned it from FlightJS to React framework.',
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
    design: '/projects/dancer',
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
    <section className='w-screen py-16 md:pt-20 md:pb-40 bg-transparent md:px-10 relative '>
      <div className='flex flex-col justify-center max-w-7xl items-center mx-auto'>
        <SectionHead
          title='Real word project'
          header='Projects'
          description='My Design and Development Projects'
        />

        <div className='mt-8 md:mt-20 flex flex-col gap-12 '>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className='mx-4 pt-6 pl-6 pr-6 md:pr-0 md:pt-12 md:pd-24 md:pl-12 bg-white border-purple-400/20 border rounded-xl shadow-sm shadow-purple-200 hover:shadow-xl transition-transform transform  duration-300  sticky'
              style={{ top: `calc(64px + ${index * 40}px)` }}
            >
              <div className='w-full grid grid-rows-2 md:grid-cols-2 md:grid-rows-1 gap-4 '>
                <div className='relative pb-4 md:pb-12 flex flex-col justify-between'>
                  <div>
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
                  </div>
                  <div className='flex flex-col justify-center md:flex-row md:justify-start gap-4 pt-4 md:pt-12 bottom-0'>
                    {project.link && (
                      <a
                        href={project.link}
                        className='inline-flex justify-center'
                      >
                        <Button className='md:w-auto bg-gradient-to-r from-purple-500 to-blue-700 font-semibold text-white/90 px-8 py-2 rounded-xl'>
                          Live
                        </Button>
                      </a>
                    )}
                    {project.design && (
                      <a
                        href={project.design}
                        className='inline-flex justify-center md:pl-8'
                      >
                        <SecondaryButton>Design</SecondaryButton>
                        {/* <Button className=' relative inline-block p-[2px] bg-gradient-to-r from-purple-500  to-red-500 rounded-xl'>
                          <span className='relative block px-8 py-[7px] text-base font-semibold text-purple-600 bg-white rounded-xl'>
                            Design
                          </span>
                        </Button> */}
                      </a>
                    )}
                    {project.code && (
                      <LinkButton
                        href={project.code}
                        target='_blank'
                        className='md:pl-8'
                      >
                        Code
                      </LinkButton>
                    )}
                  </div>
                </div>
                <div className='relative'>
                  <Image
                    src={project.image}
                    alt={project.title}
                    className='w-full h-full max-h-96'
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
