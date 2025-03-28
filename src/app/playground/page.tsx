import CanvasParticles from './CanvasParticles';
import Hero from './Hero';

const DemoProject = () => {
  return (
    <div className='relative h-screen w-screen overflow-hidden'>
      <CanvasParticles />

      <Hero />
    </div>
  );
};

export default DemoProject;
