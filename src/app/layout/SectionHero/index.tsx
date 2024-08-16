"use client";

import Image from 'next/image';
import images from '@/assets/images';
import Button from '@/components/Button';
import Link from 'next/link';
import { Section } from '@/types/section';
import { useRouter } from 'next/router';
import SectionDropDowns from '../SectionDropdowns';


const SectionComponent: React.FC<Section> = ({ index, slug, title, image, text, rotationDegree }) => {
    const isEven = index % 2 === 0;
    const router = useRouter();
    const isHomePage = router.pathname === '/';
    return (
        <div className={`flex flex-col items-center justify-center gap-8 lg:justify-between ${isEven && isHomePage ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
            {image && (
                <div className="flex items-center justify-center w-80 h-80 mx-auto lg:w-92 h-92 ">
                    <div className="w-[150px] lg:w-[350px] absolute" style={{ transform: `rotate(${rotationDegree}deg)` }}>
                        <Image src={images.triangle} alt="Triangle" />
                    </div>
                    <div className='w-[200px] lg:w-[350px] absolute'>
                        <Image src={image} alt={title} />
                    </div>
                </div>
            )}
            <div className={`flex flex-col gap-2 items-center text-center lg:w-1/2`}>
                <h1 className="text-2xl font-headers text-gold text-6xl pb-4">{title}</h1>
                {isHomePage ?
                    <>
                        <p>{text}</p>
                        <Link href={`/create/${slug}`}>
                            <Button>Create {title}</Button>
                        </Link>
                    </>
                    :
                    <SectionDropDowns category={slug} />
                }

            </div>
        </div>
    );
};

export default SectionComponent;