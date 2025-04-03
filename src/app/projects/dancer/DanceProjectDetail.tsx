import React from 'react';
import { FadeInSection, ImageInArticle } from '@/components';
import Image from 'next/image';

// import logo from '/projects/dancer/icon.png

const DanceProjectDetail: React.FC = () => {
  return (
    <div className='max-w-screen-xl mx-auto px-4'>
      <div className='flex justify-center py-8 px-8'>
        <div className='w-full md:min-w-96 md:min-h-80 lg:w-1/2 relative'>
          <Image
            src='/projects/dancer/website-pole-dance.png'
            alt='Vivian Pole Dance'
            fill
          />
        </div>
      </div>
      <FadeInSection className='max-w-5xl mx-auto py-6'>
        <div className='flex flex-col md:flex-row gap-8'>
          <div className='flex flex-col items-center md:w-1/2'>
            <Image
              alt='dance logo'
              src='/projects/dancer/icon.png'
              width={168}
              height={168}
              className='w-40 rounded-full'
            />
            <p className='mt-4 font-semibold whitespace-nowrap text-gray-800'>
              Vivian&apos;s Pole Dance
            </p>
          </div>
          <div className='md:w-1/2 text-center md:text-left'>
            <p className='pt-3 text-gray-700'>
              Vivian&apos;s pole dance website: introduce Vivian as an expert
              pole dancer & trainer. Discover her journey & unique courses.
            </p>
            <p className='pt-4 text-gray-700'>
              Vivian showcased her dance and work exclusively on Instagram. I
              suggested creating a website to enhance her professional image,
              inspire others, and reach audiences beyond Instagram. After
              convincing her of its benefits, I designed and developed the site.
            </p>
          </div>
        </div>
      </FadeInSection>
      <FadeInSection id='work' className='py-6'>
        <div className='flex flex-col md:flex-row justify-center md:justify-around items-center md:items-start gap-6 px-8'>
          <div className='w-full md:w-52 border-t border-gray-700 pt-4'>
            <h4 className='text-lg font-semibold'>My Role</h4>
            <ul className='pt-2'>
              <li>Content Creator</li>
              <li>UI Designer</li>
              <li>Frontend Developer</li>
            </ul>
          </div>
          <div className='w-full md:w-52 border-t border-gray-700 pt-4'>
            <h4 className='text-lg font-semibold'>UX / UI</h4>
            <ul className='pt-2'>
              <li>User Study</li>
              <li>Requirement Analysis</li>
              <li>UI Design</li>
            </ul>
            <h4 className='text-lg font-semibold mt-4'>Frontend</h4>
            <ul className='pt-2'>
              <li>Website Development</li>
              <li>Deployable</li>
            </ul>
          </div>
          <div className='w-full md:w-52 border-t border-gray-700 pt-4'>
            <h4 className='text-lg font-semibold'>Tools</h4>
            <ul className='pt-2'>
              <li>Photoshop</li>
              <li>Balsamiq</li>
              <li>React</li>
              <li>NextJS</li>
              <li>TailwindCSS</li>
            </ul>
          </div>
        </div>
      </FadeInSection>
      <FadeInSection id='background' className='max-w-5xl mx-auto px-8'>
        <h2 className='text-3xl font-bold'>Background</h2>
        <p className='mt-4 text-gray-700'>
          Vivian has started a new career path as a pole dance trainer, and she
          is eager to showcase her journey and professional capabilities. Her
          transition from a Biochemistry Post-Doc to a pole dance enthusiast in
          her 40s is not just a career change but a personal transformation.
          Vivian&apos;s story is one of discovering a newfound passion and
          mastering it to the point where she can now impart her knowledge and
          joy to others. As a beginning coach, while she may not have an
          extensive portfolio, her aim is to use her own story and expertise to
          inspire and encourage more people to explore the world of pole dance
          and consider her courses.
        </p>
      </FadeInSection>
      <FadeInSection id='motivation' className='max-w-5xl mx-auto px-8'>
        <h2 className='text-3xl font-bold'>Motivation</h2>
        <p className='mt-4 text-gray-700'>
          Instagram has its limitations, as it can only showcase a limited part
          of her story and requires registration to view the content. Vivian
          requires a website to reach a broader audience, especially those
          beyond the realm of social media.
        </p>
        <ImageInArticle description='Instagram requires login to see videos and more content.'>
          <div className='relative w-full max-h-96 md:w-128 md:h-96 text-center mx-auto'>
            <Image src='/projects/dancer/insta_1.png' alt='Instagram' fill />
            <Image
              width={240}
              height={360}
              src='/projects/dancer/insta_2.png'
              alt='Instagram 2'
              className='absolute top-[-50px] scale-75'
            />
          </div>
        </ImageInArticle>
      </FadeInSection>
      <FadeInSection id='design_process' className='max-w-5xl mx-auto px-8'>
        <h2 className='text-3xl font-bold'>Approach</h2>
        <h3 className='text-xl font-semibold mt-4'>User-Centered Design</h3>
        <p className='mt-4 text-gray-700'>
          Understanding potential clients&apos; hesitations is key to
          encouraging participation in pole dance. In collaboration with Vivian,
          we&apos;ve identified specific concerns to address based on her
          experience.To counter these, the website feature empathetic slogans
          and content that resonate with the target audience, particularly
          addressing common hesitations related to age, physical fitness, and
          body image.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 py-6'>
          <div className='w-full col-span-1'>
            <h4 className='text-lg font-semibold py-2'>
              Comprehensive Interviews and User Studies
            </h4>
            <p className='text-gray-700'>
              To gather understanding from multiple resources, I conducted
              interviews with Vivian and her students to understand her
              objectives and her students&apos; needs. I also conducted a user
              study to understand the potential clients&apos; hesitations and
              concerns.
            </p>
            <h4 className='text-lg font-semibold py-2'>
              Inspirational Exploration
            </h4>
            <p className='text-gray-700'>
              Collecting design ideas and inspirations from a wide range of
              sources, including a thorough analysis of existing pole dance and
              general dance websites. Additionally, platforms like{' '}
              <a
                href='https://dribbble.com/'
                className='text-blue-500 underline hover:text-blue-700'
              >
                Dribbble
              </a>{' '}
              provided rich creative concepts.
            </p>
            <h4 className='text-lg font-semibold py-2'>
              Ideation and Content Development
            </h4>
            <p className='text-gray-700'>
              I created a content outline for the website. This aligns with
              users&apos; interests and concerns, setting the stage for a
              website that not only informs but also inspires and engages.
            </p>
            <h4 className='text-lg font-semibold py-2'>
              Iterative Design and Development
            </h4>
            <p className='text-gray-700'>
              Starting with a minimalist design that meets core user needs, I
              plan an iterative development process. The content will evolve
              along with Vivian&apos;s growing experience and audience feedback.
              Initial content includes: Vivian’s personal story, her training
              milestones, an expanded narrative on why pole dancing is suitable
              for everyone. Navigation will be enhanced as the content grows.
              Website performance will be monitored through SEO analytics,
              focusing on user engagement metrics such as message inquiries and
              search trend data. Google tags will be utilized for tracking and
              improving user interaction.
            </p>
          </div>
          <div className='col-span-1 grid grid-rows-2 gap-4'>
            <div className='relative h-80 grid grid-cols-3 gap-2 row-span-1'>
              <div className='relative col-span-1'>
                <Image
                  fill
                  src='/projects/dancer/inspire_2.jpeg'
                  alt='Inspiration'
                  className='absolute top-0 left-0 w-24 h-40 object-cover'
                />
              </div>
              <div className='relative col-span-1'>
                <Image
                  fill
                  src='/projects/dancer/inspire_3.png'
                  alt='Inspiration'
                  className='absolute top-0 left-24 h-40'
                />
              </div>
              <div className='relative col-span-1'>
                <Image
                  fill
                  src='/projects/dancer/inspire_5.png'
                  alt='Inspiration'
                  className='absolute top-0 left-48 h-40'
                />
              </div>
              <div className='relative col-span-1'>
                <Image
                  fill
                  src='/projects/dancer/inspire_4.png'
                  alt='Inspiration'
                  className='absolute top-0 left-72 h-40 object-cover'
                />
              </div>
              <div className='relative col-span-1'>
                <Image
                  fill
                  src='/projects/dancer/inspire_1.jpeg'
                  alt='Inspiration'
                  className='relative h-40'
                />
              </div>
            </div>
            <ImageInArticle
              description='Inspiration and wireframes'
              className='row-span-1'
            >
              <Image
                width={480}
                height={480}
                src='/projects/dancer/wireframe.png'
                alt='Wireframe'
                className='w-3/5 mx-auto'
              />
            </ImageInArticle>
          </div>
        </div>
        <div id='accessibility' className='max-w-5xl mx-auto px-8'>
          <h3 className='text-3xl font-bold'>Accessibility and Usability</h3>
          <p className='mt-4 text-gray-700'>
            The design will be inclusive, catering to people of all ages, with a
            particular focus on those 40 and above, mirroring Vivians&apos; own
            journey.
          </p>
        </div>
        <div id='engagement' className='max-w-5xl mx-auto px-8'>
          <h3 className='text-2xl font-bold'>Engagement Features</h3>
          <p className='mt-4 text-gray-700'>
            A blog and a testimonials section will be integrated to foster a
            sense of community and connection.
          </p>
        </div>
      </FadeInSection>

      <FadeInSection id='my_role' className='max-w-5xl mx-auto px-8'>
        <h2 className='text-3xl font-bold'>My Role</h2>
        My Role
        <div>
          As a designer, content creator, and developer, I will be employing
          tools like paper and pen for initial concepts, Balsamiq for layout
          planning, and Figma for final color and image selections. The frontend
          will be developed using React, NextJS, and TailwindCSS.
        </div>
      </FadeInSection>
      <FadeInSection id='challenges' className='max-w-5xl mx-auto px-8'>
        <h2 className='text-3xl font-bold'>Challenges</h2>
        <p className='mt-4 text-gray-700'>
          A significant part of the project involves helping Vivian set clear
          goals and managing a large volume of work, including requirement
          analysis, UI/UX design, content creation, and frontend development.
        </p>
      </FadeInSection>
    </div>
  );
};

export default DanceProjectDetail;
