'use client';
import Bubbles from '@/app/Bubbles';
import Footer from '@/app/Footer';
import Section from '@/app/Section';
import { motion } from 'framer-motion';
import { itemVariants } from '@/app/Animate';

export default function Home() {
  return (
    <>
      <div className='absolute max-sm:hidden'>
        <Bubbles bgColor='#F8F2DC' />
      </div>
      <Section>
        <motion.div
          variants={itemVariants}
          className='max-sm:text-[36px] text-5xl font-semibold text-cyan'>
          Delightful and memorable magic
        </motion.div>
        <motion.div
          variants={itemVariants}
          className='text-center max-sm:text-7xl max-lg:text-8xl text-[136px] text-orange font-bold'>
          Magic Al
        </motion.div>
        <motion.div
          variants={itemVariants}
          className='max-sm:pl-[100px] max-sm:text-[36px] text-5xl font-semibold text-cyan text-right'>
          for children of all ages
        </motion.div>
      </Section>
      <Footer bgColor='#F8F2DC' href='/contact' label='Book now' />
    </>
  );
}
