import Navbar from '@/app/layout/Header/Header'
import SectionCreateMonster from '@/app/layout/SectionCreateMonster'
import StatBlockComponent from '@/components/StatBlock'
import React from 'react';
import Footer from '@/app/layout/Footer/Footer';

const monster = () => {
    return (
        <main className='lg:container lg:mx-auto'>
            <Navbar />
            <div className='container w-full flex flex-col mx-auto min-h-[100dvh] gap-48 lg:gap-96 py-[8rem]'>
                <SectionCreateMonster />
            </div>
            {/* <Footer /> */}
        </main>
    )
}

export default monster