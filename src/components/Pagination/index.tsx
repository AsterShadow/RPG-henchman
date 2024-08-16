"use client";

import React from 'react';
import Button from '../Button';
import Dropdown from '../Dropdown';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    const pageNumbers = [];
    const hasLeftEllipsis = currentPage > 3;
    const hasRightEllipsis = currentPage < totalPages - 2;

    pageNumbers.push(1);
    if (hasLeftEllipsis) {
        pageNumbers.push('...');
    }

    const startPage = Math.max(2, currentPage - 2);
    const endPage = Math.min(totalPages - 1, currentPage + 2);

    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
    }

    if (hasRightEllipsis) {
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
    }


    return (
        <div className='flex flex-col'>
            <div className="flex items-center gap-2">
                <Button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
                    Prev
                </Button>
                <div className='hidden lg:flex items-center gap-2'>
                    {pageNumbers.map((page, index) => (
                        <div key={index}>
                            {page === '...' ? (
                                <span>...</span>
                            ) : (
                                <Button
                                    onClick={() => onPageChange(Number(page))}
                                    className={currentPage === page ? 'bg-gold' : ''}
                                >
                                    {page}
                                </Button>
                            )}
                        </div>
                    ))}
                </div>
                <Button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                    Next
                </Button>
            </div>
            <div className=''>
                    {/* <Dropdown options={}/> */}
            </div>
        </div>
    );
}

export default Pagination;