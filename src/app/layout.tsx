import type { Metadata } from 'next';
import { Geist_Mono, Inter, Luxurious_Roman } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from 'next-themes';
import { LayoutWrapper } from '@/context/LayoutContext';
import { LayoutContent } from '@/components/layouts/LayoutContent';

export const metadata: Metadata = {
  title: "Pan's Portfolio",
  description: 'UX Developer Portfolio',
};

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${luxuriousRoman.variable} ${geistMono.variable} ${interSans.variable} antialiased`}
      >
        <LayoutWrapper>
          <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
            <LayoutContent>{children}</LayoutContent>
            <Analytics />
          </ThemeProvider>
        </LayoutWrapper>
      </body>
    </html>
  );
}
