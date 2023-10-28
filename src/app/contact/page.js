'use client';
import Bubbles from '@/app/Bubbles';
import Footer from '@/app/Footer';
import Section from '@/app/Section';
import Image from 'next/image';
import Link from 'next/link';
import usePageTransition from '../../hooks/usePageTransition.js';
import Animate from '@/app/Animate';

export default function Contact() {
  const { go, setGo, transitionComponent } = usePageTransition({
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
          <span className='text-orange max-sm:text-3xl text-5xl'>Contact</span>
          <span className='max-sm:text-[20px] text-[36px] text-blue'>
            To book a show, please reach out via email at
            <br /> allanpleaner [at] gmail [dot] com
            <br /> or call/text Al directly at
            <br /> +1 (415) 218-4653
          </span>
          <span className='max-sm:hidden text-[36px] text-blue'>
            Al also performs for adults and elderly folks as Al Brandon.
            <br />
            To check and book his performances please visit:
          </span>
          <div className='max-sm:hidden'>
            <a
              href='http://www.illusionsofthemind.art'
              className='text-[36px] text-orange'>
              www.illusionsofthemind.art
            </a>
          </div>
          <span className='max-sm:text-end max-sm:text-cyan text-[36px] text-blue'>
            Thank you!
          </span>
        </div>
      </Section>
      <div className='max-sm:block hidden'>
        <Footer href='/' label='Home' bgColor='#F8F2DC' />
      </div>
      <div className='max-sm:hidden absolute right-[180px] bottom-[120px] text-right pr-[60px] flex items-end justify-end z-20'>
        <Image
          className='cursor-pointer rounded-full'
          src='/logo.png'
          alt='Logo: A cartoon rabbit in purple overalls sitting on the words Magic Al'
          width={260}
          height={260}
          onClick={() => setGo(true)}
        />
      </div>
      {transitionComponent}
    </Animate>
  );
}
