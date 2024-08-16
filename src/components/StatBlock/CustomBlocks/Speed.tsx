import React, { useState, useRef, useEffect } from 'react';
import Pencil from './Pencil';

interface SpeedDisplayProps {
    speed: Speed;
    label: String;
    
}

const SpeedDisplay: React.FC<SpeedDisplayProps> = ({ speed, label }) => {
    const [editMode, setEditMode] = useState(false);
    const [speedText, setSpeedText] = useState(() =>
        Object.entries(speed).filter(([_, value]) => value !== undefined)
            .map(([key, value]) => `${key} ${value}`).join(', ')
    );
    const inputRef = useRef<HTMLInputElement>(null);

    const toggleEditMode = () => {
        setEditMode(!editMode);
        if (!editMode) {
            setTimeout(() => inputRef.current?.focus(), 0);
        }
    };

    const handleBlur = () => {
        setEditMode(false);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSpeedText(event.target.value);
    };

    return (
        <div className="flex gap-2 items-center">
            <span className="font-bold">{label} </span>
            {editMode ? (
                <>
                    <input
                        ref={inputRef}
                        type="text"
                        className="p-1 border rounded"
                        value={speedText}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <button
                        onClick={()=>handleChange}>
                        Save
                    </button>
                </>
            ) : (
                <>
                    <span>{speedText || 'N/A'}</span>
                    <Pencil onClick={toggleEditMode} />
                </>
            )}
        </div>
    );
};

export default SpeedDisplay;