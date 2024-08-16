"use client";

import React, { useEffect, useState } from 'react';
import Dropdown from '@/components/Dropdown';
import { CATEGORY_OPTIONS } from '@/constants/categoryOptions';
import Button from '@/components/Button';

interface SectionDropDownsProps {
  category: string;
}

const SectionDropDowns: React.FC<SectionDropDownsProps> = ({ category }) => {
  const options = CATEGORY_OPTIONS[category as keyof typeof CATEGORY_OPTIONS];
  
  if (!options) {
    return <div>Invalid category</div>;
  }
  return (
    <div>
      {Object.entries(options).map(([key, options]) => (
        <></>
        // <Dropdown key={key} options={options} placeholder={key.charAt(0).toUpperCase() + key.slice(1)} onChange={()=>handleChange()} />
      ))}
      <div className='pt-8'>
        <Button>
          Generate {category}
        </Button>
      </div>
    </div>
  );
};

export default SectionDropDowns;