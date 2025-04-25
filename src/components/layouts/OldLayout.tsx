import { LayoutToggle } from '@/modules';
import { Footer, Navigation } from '@/sections';
import { Float } from '@/components';

export default function OldLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />

      <main>{children}</main>

      <Footer />
      <Float>
        <div className='inline-flex gap-2 items-center justify-center cursor-pointer right-3 px-2'>
          <LayoutToggle label='New Version' />
        </div>
      </Float>
    </>
  );
}
