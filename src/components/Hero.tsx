import Image from 'next/image';
import React from 'react';

type Props = {};

export default function Hero({}: Props) {
  return (
    <div className='relative z-1 m-16 lg:mx-32 flex justify-between h-[60vh] overflow-hidden items-center'>
      <div className='flex flex-col space-y-4'>
        <h1 className='font-bold text-5xl lg:text-6xl mt-8 lg:mt-0'>
          Tech Edu Assistant
        </h1>
        <p className='text-xl lg:text-2xl'>
          Course contents for your studies in one place
        </p>
      </div>
      <div>
        <Image
          src='/study.jpg'
          alt='hero'
          width={768}
          height={500}
          className='rounded-4xl'
        />
      </div>

      <div />
    </div>
  );
}
