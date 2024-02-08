"use client";

import Image from 'next/image';
import { Section } from '../../../pages';
import images from '@/assets/images';
import Button from '@/components/Button';


const SectionComponent: React.FC<Section> = ({ id, title, image, text, rotationDegree }) => {
    const isEven = id % 2 === 0;
    return (
        <div className={`flex flex-col items-center justify-center gap-8 lg:justify-around ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
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
                <p>{text}</p>
                <Button>Create {title}</Button>
            </div>
        </div>
    );
};

export default SectionComponent;
