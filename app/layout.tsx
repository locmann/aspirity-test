import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header/Header';

const popins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});
export const metadata: Metadata = {
  title: 'Aspirity Test',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${popins.className} grid grid-rows-layout max-w-screen-2xl min-h-screen bg-primary-bg text-primary-text mx-auto`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
