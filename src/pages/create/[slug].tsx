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
    <div>
      <Navbar />
      {section ?
        <>
          <SectionComponent {...section} />
        </>
        :
        <div>ERROR404</div>
      }


    </div>
  );
};

export default CreatePage;