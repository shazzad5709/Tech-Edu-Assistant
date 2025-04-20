import Image from 'next/image';
import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';

type Props = {};

export default function Hero({}: Props) {
  return (
    <div className='relative z-1 flex flex-col justify-center h-[60vh] items-center space-y-4'>
      <h1 className='font-bold text-6xl lg:text-7xl mt-8 lg:mt-0'>
        Tech Edu Assistant
      </h1>
      <p className='text-2xl lg:text-3xl'>
        IIT BSSE Course contents for your studies in one place.
      </p>
      <Button asChild className='text-lg py-6 px-8 font-normal tracking-wide'>
        <Link href={'/dashboard/semesters'}>Get Started</Link>
      </Button>
    </div>
  );
}
