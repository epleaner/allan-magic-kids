import Image from 'next/image';
import Link from 'next/link';

export default function Footer({ href, label }) {
  return (
    <div className='w-full absolute right-[180px] bottom-[180px] max-sm:right-0 max-sm:bottom-0'>
      <Image
        className='max-sm:block hidden'
        src='/bunny.png'
        width={480}
        height={354}
        alt='Bunny wearing purple overalls eating a carrot'
      />
      <div className='w-full absolute max-sm:top-[-30px] top-[-60px] max-sm:pr-[30px] pr-[60px] flex items-end justify-end z-20'>
        <Link href={href}>
          <button className='font-sans flex items-center justify-center max-sm:bg-cyan bg-blue rounded-2xl max-sm:text-blue text-cream uppercase font-bold max-sm:text-[24px] text-[32px] py-2 px-3 hover:bg-cream hover:text-blue max-sm:hover:border-cyan hover:border-blue border-2 border-transparent transition-colors'>
            {label}
          </button>
        </Link>
      </div>
    </div>
  );
}
