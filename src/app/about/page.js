'use client';
import Bubbles from '@/app/Bubbles';
import Footer from '@/app/Footer';
import Section from '@/app/Section';
import Image from 'next/image';
import usePageTransition from '../../hooks/usePageTransition.js';
import Animate, { itemVariants } from '@/app/Animate';
import { motion } from 'framer-motion';

export default function About() {
  const { setGo, transitionComponent } = usePageTransition({
    href: '/',
    bgColor: '#F8F2DC',
  });
  const {
    setGo: setGoContact,
    transitionComponent: transitionComponentContact,
  } = usePageTransition({
    href: '/contact',
    bgColor: '#F8F2DC',
  });

  return (
    <Animate>
      <div className='block max-sm:hidden absolute'>
        <Bubbles bgColor='#F8F2DC' />
      </div>
      <Section>
        <div className='max-sm:mt-8 font-semibold flex flex-col max-sm:gap-[30px] gap-[60px]'>
          <motion.span
            variants={itemVariants}
            className='text-orange max-sm:text-3xl text-5xl'>
            About Magic Al
          </motion.span>
          <motion.span
            variants={itemVariants}
            className='max-sm:text-[16px] text-[36px] text-blue'>
            Magic Al has been spreading joy, delight, amazement and wonder -
            performing for children of all ages for over thirty years in
            different parts of the world. Originally from South Africa, he now
            lives in San Francisco, California.
            <motion.button
              onClick={() => setGoContact(true)}
              variants={itemVariants}
              className='mt-2 max-sm:text-end max-sm:text-orange text-[36px] text-blue hidden max-sm:flex justify-end w-full'>
              Book Now
            </motion.button>
          </motion.span>
          <motion.div variant={itemVariants} className='max-sm:hidden'>
            <button
              className='font-sans flex items-center justify-center max-sm:bg-cyan bg-blue rounded-2xl max-sm:text-blue text-cream uppercase font-bold max-sm:text-[24px] text-[32px] py-2 px-3 hover:bg-cream hover:text-blue max-sm:hover:border-cyan hover:border-blue border-2 border-transparent transition-colors'
              onClick={() => setGoContact(true)}>
              Book Now
            </button>
          </motion.div>

          <motion.span
            variants={itemVariants}
            className='max-sm:hidden text-[36px] text-blue'>
            Al also performs for adults and elderly folks as Al Brandon.
            <br />
            To check and book his performances please visit:
          </motion.span>
          <motion.div variants={itemVariants} className='max-sm:hidden'>
            <a
              href='http://www.illusionsofthemind.art'
              className='text-[36px] text-orange'>
              www.illusionsofthemind.art
            </a>
          </motion.div>
        </div>
      </Section>

      <Footer
        className='max-sm:block hidden'
        href='/'
        label='Home'
        bgColor='#F8F2DC'
      />

      <motion.div
        variants={itemVariants}
        className='max-sm:hidden absolute right-[180px] bottom-[120px] text-right pr-[60px] flex items-end justify-end z-20'>
        <Image
          className='cursor-pointer rounded-full'
          src='/logo.png'
          alt='Logo: A cartoon rabbit in purple overalls sitting on the words Magic Al'
          width={260}
          height={260}
          onClick={() => setGo(true)}
        />
      </motion.div>
      {transitionComponent}
      {transitionComponentContact}
    </Animate>
  );
}
