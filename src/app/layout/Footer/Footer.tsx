"use client";

import React from 'react';

import images from '@/assets/images';
import Image from 'next/image';

const Footer = () => {
    return (
        <div className='flex p-4 w-full items-center justify-between border-t-[1px]'>
            <div className='flex items-center justify-center gap-2'>
                <Image src={images.logo} alt="RPG-Henchman logo" />
                <p>RPG-Henchman</p>
            </div>

            <p>Powered by AI</p>
        </div>
    )
}

export default Footer;