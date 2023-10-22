import HelloP5 from '@/app/P5';
import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center'>
      <HelloP5 />
    </main>
  );
}
