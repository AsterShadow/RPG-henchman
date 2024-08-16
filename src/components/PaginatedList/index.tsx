import React from 'react';

interface PaginatedListProps {
    options: StatBlockProps[],
    onClick: (value: string) => void,
}

const PaginatedList: React.FC<PaginatedListProps> = ({ options, onClick }) => {

    return (
        <div className="columns-1 md:columns-2 lg:columns-3">
            {options.map((option, index) => (
                <button key={index} className="w-full px-6 py-2 hover:bg-gold flex justify-between items-center" onClick={() => onClick(option.name)}>
                    <p className='text-left'>{option.name}</p>
                    <p className='text-xs text-gray-400'>{option.document__slug}</p>
                </button>

            ))}
        </div>
    );
}

export default PaginatedList;