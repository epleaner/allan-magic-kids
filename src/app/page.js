import HelloP5 from '@/app/P5';

export default function Home() {
  return (
    <main className='relative flex h-screen flex-col items-center'>
      <div className='absolute'>
        <HelloP5 />
      </div>
      <div className='z-10 px-[180px] pt-[300px] pb-[420px] font-sans w-full min-h-screen flex flex-col justify-center'>
        <div className='text-5xl font-semibold text-cyan'>
          Delightful and memorable magic
        </div>
        <div className='text-center text-[136px] text-orange font-bold'>
          Magic Al
        </div>
        <div className='text-5xl font-semibold text-cyan text-right'>
          for children of all ages
        </div>
      </div>
      <div className='absolute right-[180px] bottom-[180px] text-right pr-[60px] flex items-end justify-end z-20'>
        <button className='flex items-center justify-center bg-blue rounded-2xl text-cream uppercase font-bold text-[32px] py-2 px-3 hover:bg-transparent hover:text-blue hover:border-blue border-2 border-transparent transition-colors'>
          Book now
        </button>
      </div>
    </main>
  );
}
