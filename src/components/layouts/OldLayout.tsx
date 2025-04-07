import { Footer, Navigation } from '@/sections';
import { LayoutToggle } from '@/modules';

export default function OldLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <LayoutToggle />

      <main>{children}</main>

      <Footer />
    </>
  );
}
