"use client";

import React, { useEffect, useState } from 'react';
import Dropdown from '@/components/Dropdown';
import { CATEGORY_OPTIONS } from '@/constants/categoryOptions';

interface SectionDropDownsProps {
  category: string;
}

const SectionDropDowns: React.FC<SectionDropDownsProps> = ({ category }) => {
  const options = CATEGORY_OPTIONS[category];

  if (!options) {
    return <div>Invalid category</div>;
  }
  return (
    <div>
      {Object.entries(options).map(([key, options]) => (
        <Dropdown key={key} options={options} label={key.charAt(0).toUpperCase() + key.slice(1)} />
      ))}
    </div>
  );
};

export default SectionDropDowns;