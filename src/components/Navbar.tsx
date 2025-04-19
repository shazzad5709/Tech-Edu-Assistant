'use client';
import Image from 'next/image';
import React from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { semesters, subjects } from '@/data/strings';

type Props = {};

export default function Navbar({}: Props) {
  return (
    <div className='relative z-10 p-8 lg:p-16 lg:pr-20 flex items-center justify-between'>
      <div className='flex space-x-2 items-center'>
        <Image
          src='/t.png'
          alt='TEA'
          width={36}
          height={24}
          className='rounded-sm'
        />
        <h2 className='text-3xl font-bold text-slate-700'>TEA</h2>
      </div>

      <div className='flex'>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className='bg-transparent'>
                <span className='text-lg lg:text-xl'>Semesters</span>
              </NavigationMenuTrigger>

              <NavigationMenuContent>
                <ul className='grid grid-flow-col grid-rows-4 w-[30vw] lg:w-[270px] gap-2 place-content-center'>
                  {semesters.map((semester) => (
                    <li key={semester}>
                      <NavigationMenuLink>
                        {/* <a href='/semesters'> */}
                        <span className='text-base'>{semester}</span>
                        {/* </a> */}
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>

                <div className='px-4'>
                  <Separator className='bg-slate-400' />
                </div>

                <NavigationMenuLink
                  asChild
                  className='flex items-center w-full'
                >
                  <a href='/semesters'>
                    <span className='text-base'>{'View All ->'}</span>
                  </a>
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className='bg-transparent'>
                <span className='text-lg lg:text-xl'>Subjects</span>
              </NavigationMenuTrigger>

              <NavigationMenuContent>
                <ul className='grid grid-cols-3 w-[50vw] lg:w-[412px] place-content-center pl-4'>
                  {subjects.map((subject) => (
                    <li key={subject}>
                      <NavigationMenuLink>
                        <span className='text-base'>{subject}</span>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>

                <div className='px-5'>
                  <Separator className='bg-slate-400' />
                </div>

                <NavigationMenuLink className='flex items-center w-full'>
                  <span className='text-base'>{'View All ->'}</span>
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href='/' className={navigationMenuTriggerStyle()} passHref>
                <span className='text-lg lg:text-xl'>Books</span>
              </Link>
            </NavigationMenuItem>

            {/* <NavigationMenuItem>
              <Link href='/' className={navigationMenuTriggerStyle()} passHref>
                <span className='lg:text-lg'>GitHub Accounts</span>
              </Link>
            </NavigationMenuItem> */}

            <NavigationMenuItem>
              <Link href='/' className={navigationMenuTriggerStyle()} passHref>
                <span className='text-lg lg:text-xl'>Syllabus</span>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}
