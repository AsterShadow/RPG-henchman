import React from 'react';

const CreatureHeading: React.FC<StatBlockProps> = ({ name, type }) => (
    <div className="text-left mb-4">
      <h1 className="text-2xl font-bold uppercase">{name}</h1>
      <h2 className="text-md italic">{type}</h2>
    </div>
  );

export default CreatureHeading