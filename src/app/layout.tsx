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
      <body>
        <main style={{ minHeight: '100vh' }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
