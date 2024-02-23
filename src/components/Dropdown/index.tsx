"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import images from '@/assets/images';

interface DropdownProps {
    options: string[];
    label: string;
}

const Dropdown: React.FC<DropdownProps> = ({ options, label}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const onClickOption = (option: string) => {
        setSelectedOption(option);
        toggleDropdown();

    }
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (
        
        <div className="relative" ref={dropdownRef}>
            <button
                className="min-w-60 flex justify-between items-center px-6 py-2"
                onClick={toggleDropdown}
                aria-expanded={isOpen}
            >
                {selectedOption !== '' ? selectedOption : <span>{label}</span>}
                <div className={`transform transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                    <Image src={images.dropdown} alt='dropdown-icon' width={20} height={20} />
                </div>
            </button>
            {isOpen && (
                <div className="absolute right-0 z-10 mt-2 origin-top-left bg-dark focus:outline-none w-60 border-2 border-gold max-h-80 overflow-y-auto custom-scrollbar">
                    {options.map((option, index) => (
                        <button key={index} className="w-full px-6 py-2 hover:bg-gold" onClick={() => onClickOption(option)} role="option">
                            {option}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Dropdown;