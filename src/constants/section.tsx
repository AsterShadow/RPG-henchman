"use client";

import { Section } from "@/types/section";

import images from '@/assets/images';


export const sections: Section[] = [
    {
        index: 1,
        slug: 'monster',
        title: 'Monster',
        image: images.monsters,
        text: 'Create fantastic monsters for your RPG World!',
        rotationDegree: 140,
    },
    {
        index: 2,
        slug: 'item',
        title: 'Item',
        image: images.items,
        text: 'Create fantastic magic items for your RPG World!',
        rotationDegree: 250,
    },
    {
        index: 3,
        slug: 'character',
        title: 'Character',
        image: images.characters,
        text: 'Create original characters for your RPG World!',
        rotationDegree: 290,
    },
    {
        index: 4,
        slug: 'location',
        title: 'Location',
        image: images.locations,
        text: 'Create fantastic locations for your RPG World!',
        rotationDegree: 320,
    },
    // {
    //     index: 5,
    //     slug: 'one-shot',
    //     title: 'One Shot',
    //     image: images.map,
    //     text: 'Create original One shots for your TTRPG campaigns!',
    //     rotationDegree: 250,
    // }
];