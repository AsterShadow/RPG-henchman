import Footer from '../app/layout/Footer/Footer';
import Navbar from '../app/layout/Header/Header';
import SectionComponent from '../app/layout/SectionHero';
import { sections } from '@/constants/section';

export default function Home() {


  return (
    <main className='lg:container lg:mx-auto'>
      <Navbar />
      <div className='container w-full flex flex-col mx-auto min-h-[100dvh] gap-48 lg:gap-96 py-[15rem]'>
        {sections.map((section, index) => (
          <SectionComponent key={index} {...section} />
        ))}
      </div>
      <Footer />
    </main>
  )
}
