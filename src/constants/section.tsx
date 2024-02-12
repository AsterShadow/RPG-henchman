"use client";

import { Section } from "@/types/section";

import images from '@/assets/images';


export const sections: Section[] = [
    {
        index: 1,
        slug: 'monsters',
        title: 'Monsters',
        image: images.monsters,
        text: 'Create fantastic monsters for your RPG World!',
        rotationDegree: 140,
    },
    {
        index: 2,
        slug: 'items',
        title: 'Items',
        image: images.items,
        text: 'Create fantastic magic items for your RPG World!',
        rotationDegree: 250,
    },
    {
        index: 3,
        slug: 'characters',
        title: 'Characters',
        image: images.characters,
        text: 'Create original characters for your RPG World!',
        rotationDegree: 290,
    },
    {
        index: 4,
        slug: 'locations',
        title: 'Locations',
        image: images.locations,
        text: 'Create fantastic locations for your RPG World!',
        rotationDegree: 320,
    },
    {
        index: 5,
        slug: 'one-shots',
        title: 'One Shots',
        image: images.map,
        text: 'Create original One shots for your TTRPG campaigns!',
        rotationDegree: 250,
    }
];