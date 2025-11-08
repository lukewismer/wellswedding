// src/app/layout.tsx
import './globals.css';
import Footer from './components/Footer';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Wells Wedding',
  description: 'Join us for our special day on July 25, 2026',
};

type Props = { children: React.ReactNode };

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Parisienne&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <main style={{ minHeight: '100vh' }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
