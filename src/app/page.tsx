import { Hero } from '@/sections/Hero';
import { Projects } from '@/sections/Projects';
import { About } from '@/sections/About';

export default function Home() {
  return (
    <div className='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
      <Hero />
      <Projects />
      <About />
    </div>
  );
}
