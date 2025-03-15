import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/sonner';

export const metadata: Metadata = {
  title: 'Jching Store',
  description: 'A simple store',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Toaster
          richColors
          position="top-center"
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
