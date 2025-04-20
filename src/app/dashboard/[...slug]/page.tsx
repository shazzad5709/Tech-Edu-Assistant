import ParticularSemester from '@/components/ParticularSemester';
import ParticularSubject from '@/components/ParticularSubject';
import Semesters from '@/components/Semesters';
import { semestersData } from '@/data/strings';
import { notFound } from 'next/navigation';
import React from 'react';

type Props = {
  params: Promise<{ slug: string[] }>;
};

export default async function page({ params }: Props) {
  const { slug: slugs } = await params;

  if (slugs[0] === 'semesters') {
    if (slugs.length === 1) return <Semesters />;

    if (slugs.length === 2) {
      const semesterData = semestersData.find((s) => s.slug === slugs[1]);
      if (!semesterData) notFound();

      const idx = parseInt(slugs[1][0], 10);

      if (Number.isNaN(idx) || idx < 1 || idx > 8) notFound();

      return <ParticularSemester semesterData={semesterData} />;
    }
  }

  if (slugs.length === 3) {
    const semesterData = semestersData.find((s) => s.slug === slugs[1]);
    if (!semesterData) notFound();

    return <ParticularSubject courseCode={slugs[2]} />;
  }

  return <div>1st</div>;
}
