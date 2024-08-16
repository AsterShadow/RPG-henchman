"use client";
import React, { useEffect, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';

type TypeOption = 'text' | 'textarea';

interface PropertyLineString {
    label: string;
    value: string | undefined;
    onChange: (value: string) => void;
    classname?: string;
    editMode: boolean;
    type?: TypeOption;
}

const PropertyLineString: React.FC<PropertyLineString> = ({ label, value, onChange, classname, editMode, type = 'text' }) => {

    const [tempValue, setTempValue] = useState<string>(value || '');
    const [isFocused, setisFocused] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        setTempValue(value || '');
    }, [value]);

    const handleSave = () => {
        setisFocused(false);
        const newValue = tempValue;
        onChange(newValue);
    };
    const handleFocus = () => {
        setisFocused(true);
    };
    const renderInputField = () => {
        if (type === 'textarea') {
            return (
                <textarea
                    ref={textareaRef as React.RefObject<HTMLTextAreaElement>}
                    className="p-2 rounded resize-none custom-scrollbar"
                    value={tempValue}
                    onChange={(e) => setTempValue(e.target.value)}
                    onBlur={handleSave}
                    onFocus={handleFocus}
                    rows={5}
                />
            );
        } else {
            return (
                <input
                    ref={inputRef as React.RefObject<HTMLInputElement>}
                    type="text"
                    className="p-2 rounded"
                    value={tempValue}
                    onChange={(e) => setTempValue(e.target.value)}
                    onBlur={handleSave}
                />
            );
        }
    };
    return (
        <div className="">
            {editMode ?
                <div className='flex flex-col gap-2 pt-4'>
                    <h4 className='text-light text-lg'>{label}</h4>
                    {renderInputField()}
                    {isFocused &&
                        <small className="text-gray-500">* Supports Markdown. Use **bold**, _italic_, etc.</small>
                    }
                </div> :
                <>
                    {value && value !== 'False' &&
                        <div className={`${classname}`}>
                            <span className="font-bold">{label} </span>
                            <ReactMarkdown
                                components={{
                                    p: 'span',
                                    strong: 'strong',
                                    em: 'em',
                                }}>
                                {value}
                            </ReactMarkdown>
                        </div>
                    }
                </>
            }
        </div>
    )
};

export default PropertyLineString;