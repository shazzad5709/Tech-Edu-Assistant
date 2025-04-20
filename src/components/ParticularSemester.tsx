import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import { SemesterData } from '@/data/strings';

type Props = {
  semesterData: SemesterData;
};

export default function ParticularSemester({ semesterData }: Readonly<Props>) {
  function toSlug(str: string): string {
    return (
      str
        .trim()
        .toLowerCase()
        // remove anything that isn’t a letter, number, space or hyphen
        .replace(/[^\w\s-]/g, '')
        // collapse spaces and underscores into a single hyphen
        .replace(/[\s_]+/g, '-')
    );
  }

  return (
    <div className='flex'>
      <div className='grid grid-flow-col place-content-center py-6 grid-rows-3 gap-8'>
        {semesterData.courses.map((course) => (
          <Button
            asChild
            key={course.code}
            variant='outline'
            className='px-8 py-16 min-w-[256px] max-w-[512px] text-base border border-slate-700/30 shadow-sm'
          >
            <Link
              href={`/dashboard/semesters/${
                semesterData.slug
              }/${course.code.toLowerCase()}-${toSlug(course.title)}`}
              className='flex flex-col'
            >
              <h3 className='text-lg text-slate-500'>{course.code}</h3>
              <p className='whitespace-normal text-center text-base'>
                {course.title}
              </p>
            </Link>
          </Button>
        ))}
      </div>
    </div>
  );
}
