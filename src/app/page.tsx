import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <div className='relative h-screen overflow-hidden'>
      {/* Navbar - Left side logo, right side nav buttons */}
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* Background */}
      <div className='absolute text-[220px] lg:text-[256px] text-slate-700/20  tracking-widest lg:tracking-[0.2em] font-bold -bottom-16 left-1 lg:left-16'>
        BSSE
      </div>
      <div className='absolute top-0 right-[-32px] w-164 h-82 lg:w-256 lg:h-128 overflow-hidden'>
        <div className='absolute bottom-0 w-164 h-164 lg:w-256 lg:h-256 bg-slate-700/20 rounded-full' />
      </div>

      {/* Footer */}
    </div>
  );
}
