'use client';
import Navbar from '@/components/Navbar';
import React, { useState } from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { semestersData } from '@/data/strings';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

type Props = {};

export default function Semester({}: Props) {
  const [activeSemester, setActiveSemester] = useState();
  const [activeCourse, setActiveCourse] = useState();

  return (
    <div>
      {/* <Navbar /> */}

      <div className='w-[544px] flex flex-col items-start mx-auto'>
        {/* Heading */}
        {/* <h1 className='text-4xl font-semibold'>Semester Wise Learning</h1> */}

        {/* Breadcrumb */}
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href='/semesters' className='text-base'>
                Semesters
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Separator className='mt-2 bg-slate-300' />

        {/* Semesters */}
        <div className='grid grid-flow-col place-content-center py-6 grid-rows-4 grid-cols-2 gap-8'>
          {semestersData.map((semester) => (
            <Button
              asChild
              key={semester.slug}
              variant='outline'
              className='w-64 h-16 text-base border border-slate-700/30 shadow-sm'
            >
              <Link href={`/semesters/${semester.slug}`}>{semester.name}</Link>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
