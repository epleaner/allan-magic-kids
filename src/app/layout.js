import { Fraunces } from 'next/font/google';
import './globals.css';
import Script from 'next/script';

const fraunces = Fraunces({
  weight: ['600', '700'],
  subsets: ['latin'],
  variable: '--font-fraunces',
});

export const metadata = {
  title: 'Magic Al',
  description: 'Delightful and memorable magic for children of all ages',
  openGraph: {
    title: 'Magic Al',
    description: 'Delightful and memorable magic for children of all ages',
    url: 'https://nextjs.org',
    siteName: 'Magic Al',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={fraunces.variable}>{children}</body>
    </html>
  );
}
