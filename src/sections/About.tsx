import { SectionHead } from '@/components/SectionHead';
export const About = () => {
  return (
    <section className='py-8 md:py-20 bg-transparent px-10 flex flex-col items-center '>
      <SectionHead
        title='About Me'
        header='UX Developer'
        description='Want to know more about what I do, what I like?'
      />
      <div className='max-w-7xl w-full flex flex-col gap-10'>
        <div className='flex flex-col gap-4 justify-center items-center pt-20'>
          <h3 className='font-sans font-semibold text-lg'>To be continued</h3>
          <p className=' text-gray-500 text-sm max-w-lg text-center'>
            I am a UX developer with a passion for creating user-friendly and
            visually appealing digital experiences. With a strong background in
            both design and development, I bridge the gap between aesthetics and
            functionality. My goal is to craft intuitive interfaces that enhance
            user satisfaction and drive engagement. I thrive on collaboration,
            constantly seeking feedback to refine my work. Let&apos;s connect
            and explore how I can contribute to your next project!
          </p>
        </div>
      </div>
    </section>
  );
};
//I am a UX developer with a passion for creating user-friendly and visually appealing digital experiences. With a strong background in both design and development, I bridge the gap between aesthetics and functionality. My goal is to craft intuitive interfaces that enhance user satisfaction and drive engagement. I thrive on collaboration, constantly seeking feedback to refine my work. Let's connect and explore how I can contribute to your next project!
