import dynamic from 'next/dynamic';

const CanvasWrapper = dynamic(
  () => import('./CanvasParticles').then((mod) => mod.default),
  { ssr: false } // Disable server-side rendering
);

export default CanvasWrapper;
