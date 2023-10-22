export default function Section({ children }) {
  return (
    <section className='max-sm:gap-[30px] z-10 max-sm:px-[30px] px-[180px] max-sm:pt-[120px] pt-[300px] pb-[420px] font-sans w-full min-h-screen flex flex-col justify-center'>
      {children}
    </section>
  );
}
