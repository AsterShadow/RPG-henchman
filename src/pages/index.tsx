import Image, { StaticImageData } from 'next/image';

import images from '@/assets/images';
import Footer from '../app/layout/Footer/Footer';
import Navbar from '../app/layout/Header/Header';
import SectionComponent from '../app/layout/LandingCTA';


export interface Section {
  id: number;
  title: string;
  image?: StaticImageData;
  text: string;
  rotationDegree: number;
}

export default function Home() {

  const sections: Section[] = [
    {
      id: 1,
      title: 'Monsters',
      image: images.monsters,
      text: 'Create fantastic monsters for your RPG World!',
      rotationDegree: 140,
    },
    {
      id: 2,
      title: 'Items',
      image: images.items,
      text: 'Create fantastic magic items for your RPG World!',
      rotationDegree: 250,
    },
    {
      id: 3,
      title: 'Characters',
      image: images.characters,
      text: 'Create original characters for your RPG World!',
      rotationDegree: 290,
    },
    {
      id: 4,
      title: 'Locations',
      image: images.locations,
      text: 'Create fantastic locations for your RPG World!',
      rotationDegree: 320,
    },
    {
      id: 5,
      title: 'OneShots',
      image: images.map,
      text: 'Create original One shots for your TTRPG campaigns!',
      rotationDegree: 250,
    }
  ];
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar />
      <div className='w-full py-24 flex flex-col gap-48 lg:gap-96 pb-20'>
        {sections.map((section) => (
          <SectionComponent key={section.id} {...section} />
        ))}
      </div>
      <Footer />
    </main>
  )
}
