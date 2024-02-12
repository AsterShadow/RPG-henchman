"use client";

import Footer from '../app/layout/Footer/Footer';
import Navbar from '../app/layout/Header/Header';
import SectionComponent from '../app/layout/SectionHero';
import { sections } from '@/constants/section';

export default function Home() {


  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar />
      <div className='w-full py-24 flex flex-col gap-48 lg:gap-96 pb-20'>
        {sections.map((section, index) => (
          <SectionComponent key={index} {...section} />
        ))}
      </div>
      <Footer />
    </main>
  )
}
