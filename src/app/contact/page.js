'use client';
import Bubbles from '@/app/Bubbles';
import Footer from '@/app/Footer';
import Section from '@/app/Section';
import Image from 'next/image';
import Link from 'next/link';
import usePageTransitionOut from '../../hooks/usePageTransitionOut.js';
import Animate, { itemVariants } from '@/app/Animate';
import { motion } from 'framer-motion';

export default function Contact() {
  const { go, setGo, transitionComponent } = usePageTransitionOut({
    href: '/',
    bgColor: '#F8F2DC',
  });

  return (
    <Animate>
      <div className='block max-sm:hidden absolute'>
        <Bubbles bgColor='#F8F2DC' />
      </div>
      <Section>
        <div className='font-semibold flex flex-col max-sm:gap-[30px] gap-[60px]'>
          <motion.span
            variants={itemVariants}
            className='text-orange max-sm:text-3xl text-5xl'>
            Contact
          </motion.span>
          <motion.span
            variants={itemVariants}
            className='max-sm:text-[20px] text-[36px] text-blue'>
            To book a show, please reach out via email at
            <br /> allanpleaner [at] gmail [dot] com
            <br /> or call/text Al directly at
            <br /> +1 (415) 218-4653
          </motion.span>
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
          <motion.span
            variants={itemVariants}
            className='max-sm:text-end max-sm:text-cyan text-[36px] text-blue'>
            Thank you!
          </motion.span>
        </div>
      </Section>
      <motion.div variants={itemVariants} className='max-sm:block hidden'>
        <Footer href='/' label='Home' bgColor='#F8F2DC' />
      </motion.div>
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
    </Animate>
  );
}
