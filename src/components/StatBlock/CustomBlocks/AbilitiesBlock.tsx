import React from 'react';
import PropertyLineNb from './PropertyLineNb';


type AbilitiesBlockProps = Pick<StatBlockProps, 'strength' | 'dexterity' | 'constitution' | 'intelligence' | 'wisdom' | 'charisma'> & {
    handleChange: (field: string, value: number) => void;
    editMode: boolean;

};

const AbilitiesBlock: React.FC<AbilitiesBlockProps> = ({ strength, dexterity, constitution, intelligence, wisdom, charisma, handleChange, editMode }) => {
    const abilities = [
        { label: 'strength', value: strength, abrev: 'STR' },
        { label: 'dexterity', value: dexterity, abrev: 'DEX' },
        { label: 'constitution', value: constitution, abrev: 'CON' },
        { label: 'intelligence', value: intelligence, abrev: 'INT' },
        { label: 'wisdom', value: wisdom, abrev: 'WIS' },
        { label: 'charisma', value: charisma, abrev: 'CHA' },
    ];

    const formatModifier = (value: number) => `${value}(${Math.floor((value - 10) / 2)})`;

    return (
        <div className={`${editMode ? 'columns-2' : 'w-full flex justify-around items-center'}`}>
            {abilities.map(({ label, value, abrev }) => (
                <div key={label}>
                    {!editMode && <p className='font-bold'>{abrev}</p>}
                    <PropertyLineNb label={abrev} value={value} onChange={(value) => handleChange(label, value)} classname={'hidden'} editMode={editMode} />
                    {!editMode && <p>{value ? formatModifier(value) : ''}</p>}
                </div>
            ))}
        </div>
    );
}

export default AbilitiesBlock;