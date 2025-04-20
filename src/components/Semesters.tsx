import { semestersData } from '@/data/strings';
import Link from 'next/link';
import { Button } from './ui/button';

type Props = {};

export default function Semesters({}: Props) {
  return (
    <div className='flex w-full'>
      <div className='w-full flex flex-col items-start mx-auto'>
        {/* Heading */}
        <h1 className='text-2xl font-medium'>Semester Wise Learning</h1>

        {/* Semesters */}
        <div className='grid grid-rows-4 grid-cols-2 grid-flow-col py-6 gap-4'>
          {semestersData.map((semester) => (
            <Button
              asChild
              key={semester.slug}
              variant='outline'
              className='w-48 h-12 border border-slate-700/30 shadow-sm'
            >
              <Link href={`/dashboard/semesters/${semester.slug}`}>
                {semester.name}
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
