import type { Metadata } from 'next';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { siteConfig } from '@/lib/seo/site';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Free GPA & Grade Calculators for Students',
    template: '%s | GPA & Grade Calculators'
  },
  description:
    'Free GPA, grade, final exam, and GPA conversion calculators for students.',
  metadataBase: new URL(siteConfig.url)
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
