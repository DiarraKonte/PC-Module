import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import MainLayout from '@/components/MainLayout';
import PageTransition from '@/components/ui/PageTransition';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Lumn PC',
  description: 'Apprends à configurer ton PC gaming sans perdre ton temps.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={cn(
          `${geistSans.variable} ${geistMono.variable} antialiased h-full bg-white dark:bg-gray-900`,
          'overflow-x-hidden'
        )}
      >
        {/* Layout principal */}
        <MainLayout>
          {/* Transition globale entre les pages */}
          <PageTransition>{children}</PageTransition>
        </MainLayout>
      </body>
    </html>
  );
}