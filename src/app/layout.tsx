import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { HomeBar } from '@/components/store/HomeBar';
import { Footer } from '@/components/store/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ToolStore',
  description: 'The right place of right tool',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />
      </head>
      <body className={`${inter.className} h-screen`}>
        <HomeBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
