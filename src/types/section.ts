"use client";

import { StaticImageData } from 'next/image';

export interface Section {
  index: number;
  slug: string;
  title: string;
  image?: StaticImageData;
  text: string;
  rotationDegree: number;
}