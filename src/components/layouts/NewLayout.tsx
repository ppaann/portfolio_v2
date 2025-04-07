import { LayoutToggle } from '@/modules';

export default function NewLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* <Navigation /> */}
      <LayoutToggle />

      <main>{children}</main>

      {/* <Footer /> */}
      {/* <Analytics /> */}
    </>
  );
}
