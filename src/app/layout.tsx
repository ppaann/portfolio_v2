import type { Metadata } from 'next';
import { Geist_Mono, Inter, Luxurious_Roman } from 'next/font/google';
import './globals.css';
import { Navigation } from '@/sections';

const luxuriousRoman = Luxurious_Roman({
  variable: '--font-serif',
  subsets: ['latin'],
  weight: '400',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});
const interSans = Inter({
  variable: '--font-inter-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Pan's Portfolio",
  description: 'UX Developer Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${luxuriousRoman.variable} ${geistMono.variable} ${interSans.variable} antialiased`}
      >
        <header className='row-start-1 flex items-center justify-center'>
          <Navigation />
        </header>
        <main>{children}</main>
        <footer className='row-start-3 flex gap-6 flex-wrap items-center justify-center'></footer>
      </body>
    </html>
  );
}
