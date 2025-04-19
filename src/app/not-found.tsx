import { Separator } from '@/components/ui/separator';
import React from 'react';

type Props = {};

export default function NotFound({}: Props) {
  return (
    <div className='h-screen text-lg flex items-center justify-center gap-4'>
      <span>404</span>
      <Separator orientation='vertical' className='!h-8 bg-slate-400' />
      <span>This page is not found.</span>
    </div>
  );
}
