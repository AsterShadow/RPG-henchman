"use client";
import React, { useEffect, useRef, useState } from 'react';

interface PropertyLineNb {
    label: string;
    value: number | undefined;
    onChange: (value: number) => void;
    classname?: string;
    editMode: boolean;
}

const PropertyLineNb: React.FC<PropertyLineNb> = ({ label, value, onChange, classname, editMode }) => {
    const [tempValue, setTempValue] = useState<number | undefined>(value);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        setTempValue(value);
    }, [value]);


    const handleSave = () => {
        const newValue = tempValue === undefined || Number.isNaN(tempValue) ? 0 : tempValue;
        onChange(newValue);
    };
    return (
        <div className="flex gap-2">
            {editMode ?
                <div className='flex flex-col gap-2 pt-4'>
                    <h4 className='text-light text-lg'>{label}</h4>
                    <input
                        ref={inputRef}
                        type="number"
                        className="p-2 rounded"
                        value={tempValue}
                        onChange={(e) => setTempValue(e.target.valueAsNumber)}
                        onBlur={handleSave}
                    />
                </div> :
                <>
                    {value !== undefined &&
                        <p className={`capitalize ${classname}`}>
                            <span className="font-bold">{label} </span>
                            {value}
                        </p>
                    }
                </>

            }
        </div>
    )
};

export default PropertyLineNb;