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
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={fraunces.variable}>
        <main className='relative flex h-screen flex-col items-center'>
          {children}
        </main>
      </body>
    </html>
  );
}
