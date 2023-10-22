import Bubbles from '@/app/Home/Bubbles';
import Section from '@/app/Section';

export default function Home() {
  return (
    <>
      <div className='absolute'>
        <Bubbles />
      </div>
      <Section>
        <div className='text-5xl font-semibold text-cyan'>
          Delightful and memorable magic
        </div>
        <div className='text-center text-[136px] text-orange font-bold'>
          Magic Al
        </div>
        <div className='text-5xl font-semibold text-cyan text-right'>
          for children of all ages
        </div>
      </Section>
      <div className='absolute right-[180px] bottom-[180px] text-right pr-[60px] flex items-end justify-end z-20'>
        <button className='font-sans flex items-center justify-center bg-blue rounded-2xl text-cream uppercase font-bold text-[32px] py-2 px-3 hover:bg-transparent hover:text-blue hover:border-blue border-2 border-transparent transition-colors'>
          Book now
        </button>
      </div>
    </>
  );
}
