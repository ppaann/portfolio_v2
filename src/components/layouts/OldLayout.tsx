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
        <LayoutToggle />
      </Float>
    </>
  );
}
