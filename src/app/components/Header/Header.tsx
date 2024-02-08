"use client";

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { CSSTransition } from 'react-transition-group';
import Image from 'next/image';
import images from '@/assets/images';
import './Header.scss';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="flex items-center justify-between flex-wrap lg:gap-20 lg:justify-normal p-8 w-full">
      <Image src={images.logo} alt="RPG-Henchman logo" />
      <div className='hidden lg:block lg:flex lg:gap-4 text-xl font-headers'>
        <Link href='#'><span>Monsters</span></Link>
        <Link href='#'><span>Items</span></Link>
        <Link href='#'><span>Characters</span></Link>
        <Link href='#'><span>Locations</span></Link>
        <Link href='#'><span>One Shots</span></Link>
      </div>
      <div className='block lg:hidden'>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="flex items-center px-3 py-2 text-2xl font-headers">
          <Image src={images.menu} alt="menu icon" />
        </button>
      </div>

      <CSSTransition in={isMobileMenuOpen} timeout={300} classNames="menu-slide" unmountOnExit nodeRef={menuRef}>
        <div className="fixed top-0 right-0 h-full w-3/5 bg-dark shadow-lg z-50" ref={menuRef}>
          <button onClick={() => setIsMobileMenuOpen(false)} className="flex items-center px-3 py-4 font-headers">
            <Image src={images.close} alt="close icon" className='w-10'/>
          </button>
          <div className="flex flex-col items-start p-4 font-headers text-2xl gap-4 text-gold">
            <Link href='#'><span>Monsters</span></Link>
            <Link href='#'><span>Items</span></Link>
            <Link href='#'><span>Characters</span></Link>
            <Link href='#'><span>Locations</span></Link>
            <Link href='#'><span>One Shots</span></Link>
          </div>
        </div>
      </CSSTransition>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black opacity-25" onClick={() => setIsMobileMenuOpen(false)}></div>
      )}
    </nav>
  );
};

export default Navbar;