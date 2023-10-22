export default function Section({ children }) {
  return (
    <section className='z-10 px-[180px] pt-[300px] pb-[420px] font-sans w-full min-h-screen flex flex-col justify-center'>
      {children}
    </section>
  );
}
