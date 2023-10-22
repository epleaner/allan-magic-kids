import Bubbles from '@/app/Bubbles';
import Section from '@/app/Section';
import Image from 'next/image';
import Link from 'next/link';

export default function Contact() {
  return (
    <>
      <div className='absolute'>
        <Bubbles bgColor={'#93CACC'} />
      </div>
      <Section>
        <div className='font-semibold flex flex-col gap-[60px]'>
          <span className='text-orange text-5xl'>Contact</span>
          <span className='text-[36px] text-blue'>
            To book a show please reach out by email at
            <br /> allanpleaner [at] gmail [dot] com
            <br /> or call Al directly at +1 (415) 218-4653
          </span>
          <span className='text-[36px] text-blue'>
            Al also performs for adults and elderly folks as Al Brandon.
            <br />
            To check and book his performances please visit:
          </span>
          <div>
            <a
              href='http://www.illusionsofthemind.art'
              className='text-[36px] text-orange'>
              www.illusionsofthemind.art
            </a>
          </div>
          <span className='text-[36px] text-blue'>Thank you!</span>
        </div>
      </Section>
      <div className='absolute right-[180px] bottom-[180px] text-right pr-[60px] flex items-end justify-end z-20'>
        <Link href='/'>
          <Image
            src='/logo.png'
            alt='Logo: A cartoon rabbit in purple overalls sitting on the words Magic Al'
            width={260}
            height={260}
          />
        </Link>
      </div>
    </>
  );
}
