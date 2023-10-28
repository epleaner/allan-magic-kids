import Bubbles from '@/app/Bubbles';
import Footer from '@/app/Footer';
import Section from '@/app/Section';

export default function Home() {
  return (
    <>
      <div className='absolute max-sm:hidden'>
        <Bubbles bgColor='#F8F2DC' />
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
      <Footer bgColor='#F8F2DC' href='/contact' label='Book now' />
    </>
  );
}
