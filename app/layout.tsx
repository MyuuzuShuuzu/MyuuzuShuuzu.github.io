import './globals.css';
import type { Metadata } from 'next';
import { Navigation } from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Your Name - Portfolio',
  description: 'Full-Stack Software Developer Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main className="ff-content">
          <div className="ff-content-window">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}