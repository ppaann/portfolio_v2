import { LayoutToggle } from '@/modules';
import { Navigation } from '@/sections/v3';

export default function NewLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <LayoutToggle />

      <main>{children}</main>

      {/* <Footer /> */}
      {/* <Analytics /> */}
    </>
  );
}
