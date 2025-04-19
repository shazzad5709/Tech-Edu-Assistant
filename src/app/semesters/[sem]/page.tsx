import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { semestersData } from '@/data/strings';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return semestersData.map((s) => ({ sem: s.slug }));
}

interface PageProps {
  params: { sem: string };
}

export default function SemesterPage({ params }: Readonly<PageProps>) {
  const { sem } = params;

  const semesterData = semestersData.find((s) => s.slug === sem);
  if (!semesterData) notFound();

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
              href={`/semesters/${semesterData.slug}/${course.code}`}
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
