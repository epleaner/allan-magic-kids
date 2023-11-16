'use client';
import Image from 'next/image';
import usePageTransition from '../hooks/usePageTransition.js';
import { motion } from 'framer-motion';
import { itemVariants } from '@/app/Animate';
import { usePathname } from 'next/navigation';

export default function Footer({ className, href, label, bgColor }) {
  const pathname = usePathname();

  const { setGo, transitionComponent } = usePageTransition({
    href,
    bgColor,
  });

  const { setGo: setGoAbout, transitionComponent: transitionComponentAbout } =
    usePageTransition({
      href: '/about',
      bgColor,
    });

  const {
    setGo: setGoContact,
    transitionComponent: transitionComponentContact,
  } = usePageTransition({
    href: '/contact',
    bgColor,
  });

  return (
    <>
      <div
        className={`w-full absolute right-[180px] bottom-[180px] max-sm:right-0 max-sm:bottom-0 ${className}`}>
        <Image
          className='max-sm:block hidden'
          src='/bunny.png'
          width={480}
          height={354}
          alt='Bunny wearing purple overalls eating a carrot'
        />
        <motion.div className='w-full absolute max-sm:top-[-30px] top-[-60px] max-sm:pr-[30px] pr-[60px] flex items-end justify-end z-20 gap-4'>
          <motion.div variant={itemVariants} className=''>
            <button
              className='font-sans flex items-center justify-center max-sm:bg-cyan bg-blue rounded-2xl max-sm:text-blue text-cream uppercase font-bold max-sm:text-[24px] text-[32px] py-2 px-3 hover:bg-cream hover:text-blue max-sm:hover:border-cyan hover:border-blue border-2 border-transparent transition-colors'
              onClick={() => setGo(true)}>
              {label}
            </button>
          </motion.div>
          <motion.div variant={itemVariants} className=''>
            <button
              className='font-sans flex items-center justify-center max-sm:bg-cyan bg-blue rounded-2xl max-sm:text-blue text-cream uppercase font-bold max-sm:text-[24px] text-[32px] py-2 px-3 hover:bg-cream hover:text-blue max-sm:hover:border-cyan hover:border-blue border-2 border-transparent transition-colors'
              onClick={() =>
                pathname === '/about' ? setGoContact(true) : setGoAbout(true)
              }>
              {pathname === '/about' ? 'Contact' : 'About'}
            </button>
          </motion.div>
        </motion.div>
      </div>
      {transitionComponent}
      {transitionComponentAbout}
      {transitionComponentContact}
    </>
  );
}
