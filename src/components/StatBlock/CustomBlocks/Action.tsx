import React, { useEffect, useRef, useState } from 'react';
import TaperedRule from './TaperedRule';
import PropertyLineString from './PropertyLineString';

interface ActionsProps {
    actions: Action[] | undefined | null;
    desc?: string;
    title?: string;
    editMode: boolean;
    onChange: (index: number, field: string, value: string) => void;
}

const Action: React.FC<ActionsProps> = ({ actions, desc, title, editMode, onChange }) => {

    if (!actions || actions.length === 0) return null;

    const renderActionName = (index: number, field: string, value: string) => {
        const [tempValue, setTempValue] = useState<string>(value || '');
        const [isFocused, setIsFocused] = useState<boolean>(false);

        const handleFocus = () => setIsFocused(true);
        const handleBlur = () => {
            setIsFocused(false);
            onChange(index, 'desc', tempValue);
        };
        if (editMode) {
            return (
                <input
                    type="text"
                    value={value}
                    onChange={(e) => onChange(index, field, e.target.value)}
                    className="p-2 rounded border border-gray-300 w-full mb-2"
                />
            );
        } else {
            return (
                <span className={field === 'name' ? 'font-bold italic' : ''}>
                    {' '}{value}
                </span>
            );
        }
    };
    const renderActionDesc = (index: number, field: string, value: string) => {
        const [tempValue, setTempValue] = useState<string>(value || '');
        const [isFocused, setIsFocused] = useState<boolean>(false);

        const handleFocus = () => setIsFocused(true);
        const handleBlur = () => {
            setIsFocused(false);
            onChange(index, 'desc', tempValue);
        };
        if (editMode) {
            return (
                <textarea
                    value={value}
                    onChange={(e) => onChange(index, field, e.target.value)}
                    className="p-2 rounded border border-gray-300 w-full mb-2"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
            );
        } else {
            return (
                <span className={field === 'name' ? 'font-bold italic' : ''}>
                    {' '}{value}
                </span>
            );
        }
    };

    return (
        <div className={`${editMode && 'pt-4'}`}>
            {title && <h3 className={`text-lg uppercase ${editMode && 'text-light'}`}>{title}</h3>}
            {!editMode && <TaperedRule />}
            {desc && <p>{desc}</p>}
            {actions.map((action, index) => (
                <div key={index} className="pb-4">
                    <div className="text-black">
                        {renderActionName(index, 'name', action.name)}
                        {renderActionDesc(index, 'desc', action.desc)}
                        {isFocused &&
                            <small className="text-gray-500">* Supports Markdown. Use **bold**, _italic_, etc.</small>
                        }
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Action