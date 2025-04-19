import Navbar from '@/components/Navbar';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb';
import { Separator } from '@/components/ui/separator';
import { semestersData } from '@/data/strings';
import { notFound } from 'next/navigation';

interface Props {
  children: React.ReactNode;
  params: { sem: string };
}

export default function SemestersLayout({ children, params }: Readonly<Props>) {
  const { sem } = params;

  const activeSemester = semestersData.find((s) => s.slug === sem);
  if (!activeSemester) notFound();

  return (
    <>
      <Navbar />

      <div className='w-[544px] flex flex-col items-start mx-auto'>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href='/semesters' className='text-base'>
                Semesters
              </BreadcrumbLink>
            </BreadcrumbItem>
            {activeSemester && (
              <>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className='text-base'>
                    {activeSemester.name}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </>
            )}
          </BreadcrumbList>
        </Breadcrumb>

        <Separator className='mt-2 mb-4 bg-slate-300' />
        <section>{children}</section>
      </div>
    </>
  );
}
