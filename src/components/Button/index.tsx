"use client";
import React, { ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
    onClick?: any;
    disabled?: boolean;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, disabled, className }) => {
    return (
        <button className={`max-w-60 text-center border-2 px-6 py-2 border-gold
        ${!disabled && 'hover:bg-gold focus:translate-y-px'}
        ${disabled && ' border-gray-500 cursor-default text-gray-500'}
        ${className}
        `}
            disabled={disabled}
            onClick={onClick}>
            {children}
        </button>

    );
};

export default Button;
