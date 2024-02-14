"use client";

import Navbar from '@/app/layout/Header/Header';
import SectionComponent from '@/app/layout/SectionHero';
import images from '@/assets/images';
import { sections } from '@/constants/section';
import Image from 'next/image';
import { useRouter } from 'next/router';

const CreatePage = () => {
  const router = useRouter();
  const { slug } = router.query;

  const section = sections.find((section) => section.slug === slug);

  return (
    <div className='flex min-h-screen flex-col'>
      <Navbar />
      <div className='w-full flex flex-col gap-48 lg:gap-96 py-[15rem]'>
        {section ?
          <>
            <SectionComponent {...section} />
          </>
          :
          <div className='w-full flex flex-col items-center justify-center'>
            <div className='text-2xl'>
              ERROR404
            </div>
            <div>
              PAGE NOT FOUND
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default CreatePage;