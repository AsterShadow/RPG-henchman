"use client";

import Footer from '../app/layout/Footer/Footer';
import Navbar from '../app/layout/Header/Header';
import SectionComponent from '../app/layout/SectionHero';
import { sections } from '@/constants/section';

export default function Home() {


  return (
    <main className="container">
      <Navbar />
      <div className='w-full flex flex-col gap-48 lg:gap-96 py-[15rem]'>
        {sections.map((section, index) => (
          <SectionComponent key={index} {...section} />
        ))}
      </div>

      <Footer />
    </main>
  )
}
