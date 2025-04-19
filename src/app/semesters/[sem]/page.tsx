import { semestersData } from '@/data/strings';
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
    <div className='max-w-2xl mx-auto p-8'>
      <h1 className='text-3xl font-bold mb-4'>{semesterData.name}</h1>
      <ul className='list-disc pl-6 space-y-2'>
        {semesterData.courses.map((course) => (
          <li key={course} className='text-lg'>
            {course}
          </li>
        ))}
      </ul>
    </div>
  );
}
