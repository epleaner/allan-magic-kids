import Bubbles from '@/app/Bubbles';
import Section from '@/app/Section';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className='absolute max-sm:hidden'>
        <Bubbles />
      </div>
      <Section>
        <div className='max-sm:text-[36px] text-5xl font-semibold text-cyan'>
          Delightful and memorable magic
        </div>
        <div className='text-center max-sm:text-7xl max-lg:text-8xl text-[136px] text-orange font-bold'>
          Magic Al
        </div>
        <div className='max-sm:pl-[100px] max-sm:text-[36px] text-5xl font-semibold text-cyan text-right'>
          for children of all ages
        </div>
      </Section>
      <div className='w-full absolute right-[180px] bottom-[180px] max-sm:right-0 max-sm:bottom-0'>
        <Image
          className='max-sm:block hidden'
          src='/bunny.png'
          width={480}
          height={354}
          alt='Bunny wearing purple overalls eating a carrot'
        />
        <div className='w-full absolute max-sm:top-[-30px] max-sm:pr-[30px] pr-[60px] flex items-end justify-end z-20'>
          <Link href='/contact'>
            <button className='font-sans flex items-center justify-center max-sm:bg-cyan bg-blue rounded-2xl max-sm:text-blue text-cream uppercase font-bold max-sm:text-[24px] text-[32px] py-2 px-3 hover:bg-transparent hover:text-blue hover:border-blue border-2 border-transparent transition-colors'>
              Book now
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
