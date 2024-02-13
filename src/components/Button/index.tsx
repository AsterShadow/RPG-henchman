"use client";


import React, { ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
    return (
        <button className="max-w-60 text-center border-2 px-6 py-2 border-gold hover:bg-gold focus:translate-y-px">
            {children}
        </button>

    );
};

export default Button;
