import React from 'react'

const AbilitiesBlock: React.FC<Abilities> = ({ strength, dexterity, constitution, intelligence, wisdom, charisma }) => {
    const abilities = [
        { name: 'STR', value: strength },
        { name: 'DEX', value: dexterity },
        { name: 'CON', value: constitution },
        { name: 'INT', value: intelligence },
        { name: 'WIS', value: wisdom },
        { name: 'CHA', value: charisma },
    ];

    const formatModifier = (value: number) => `${value} (${Math.floor((value - 10) / 2)})`;

    return (
        <div className="w-full flex justify-around items-center">
            {abilities.map(({ name, value }) => (
                <div key={name}>
                    <p className='font-bold'>{name}</p>
                    <p>{formatModifier(value)}</p>
                </div>
            ))}
        </div>
    );
}

export default AbilitiesBlock;