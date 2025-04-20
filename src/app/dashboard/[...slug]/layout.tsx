import { AppSidebar } from '@/components/app-sidebar';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Separator } from '@/components/ui/separator';
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';

const semesterMap: Record<string, string> = {
  '1st-sem': '1st Semester',
  '2nd-sem': '2nd Semester',
  '3rd-sem': '3rd Semester',
  '4th-sem': '4th Semester',
  '5th-sem': '5th Semester',
  '6th-sem': '6th Semester',
  '7th-sem': '7th Semester',
  '8th-sem': '8th Semester',
};

export default async function DashboardLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ slug: string[] }>;
}>) {
  const { slug } = await params;

  const formatCourseSlug = (raw: string): string => {
    const [code, ...titleParts] = raw.split('-');

    const formattedCode = code.toUpperCase();

    if (titleParts.length === 0) return formattedCode;

    const formattedTitle = titleParts
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');

    return `${formattedCode}: ${formattedTitle}`;
  };

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className='flex h-16 shrink-0 items-center gap-2'>
          <div className='flex items-center gap-2 px-4'>
            <SidebarTrigger className='-ml-1' />
            <Separator
              orientation='vertical'
              className='mr-2 data-[orientation=vertical]:h-4'
            />
            <Breadcrumb>
              <BreadcrumbList>
                {slug[0] && (
                  <>
                    <BreadcrumbItem className='hidden md:block'>
                      <BreadcrumbLink
                        href={`/dashboard/${slug[0]}`}
                        className='capitalize'
                      >
                        {slug[0]}
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className='hidden md:block' />
                  </>
                )}
                {slug.length === 1 ? (
                  <BreadcrumbItem>
                    <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                  </BreadcrumbItem>
                ) : (
                  <>
                    <BreadcrumbItem className='hidden md:block'>
                      <BreadcrumbLink
                        href={`/dashboard/${slug[0]}/${slug[1]}`}
                        className='capitalize'
                      >
                        {slug[0] === 'semesters' && semesterMap[slug[1]]}
                        {slug[0] === 'subjects' && slug[1]}
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className='hidden md:block' />
                  </>
                )}
                {slug[2] && (
                  <BreadcrumbItem className='hidden md:block'>
                    <BreadcrumbPage>{formatCourseSlug(slug[2])}</BreadcrumbPage>
                  </BreadcrumbItem>
                )}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className='flex flex-1 flex-col gap-4 p-4 pt-0'>
          <section>{children}</section>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
