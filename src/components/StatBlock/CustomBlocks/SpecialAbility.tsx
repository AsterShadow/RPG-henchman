import React from 'react';

interface SpecialAbilitiesProps {
  abilities: SpecialAbility[];
}

const SpecialAbilities: React.FC<SpecialAbilitiesProps> = ({ abilities }) => {
  if (!abilities || abilities.length === 0) return null;

  return (
    <div>
      {abilities.map((ability, index) => (
        <div key={index} className="pb-2">
          <p className='text-black'><span className="font-bold italic">{ability.name}.</span> {ability.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default SpecialAbilities;