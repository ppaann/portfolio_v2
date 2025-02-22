import { Hero } from '@/sections/Hero';
import { Header } from '@/sections/Header';
import { Projects } from '@/sections/Projects';
import { About } from '@/sections/About';
import { Footer } from '@/sections/Footer';

export default function Home() {
  return (
    <div className='grid grid-rows-[auto_1fr_auto] min-h-screen'>
      <header className='row-start-1 flex items-center justify-center'>
        <Header />
      </header>
      <main className='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
        <Hero />
        <Projects />
        <About />
        <Footer />
      </main>
      <footer className='row-start-3 flex gap-6 flex-wrap items-center justify-center'></footer>
    </div>
  );
}
