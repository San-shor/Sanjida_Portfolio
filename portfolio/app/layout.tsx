import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Sanjida's Portfolio",
  description:
    'Full-stack developer specializing in modern web technologies. Explore my projects and get in touch.',
  keywords: ['developer', 'portfolio', 'web development', 'react', 'next.js'],
  authors: [{ name: 'Sanjida' }],
  openGraph: {
    title: "Sanjida's Portfolio",
    description:
      'Full-stack developer specializing in modern web technologies.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
