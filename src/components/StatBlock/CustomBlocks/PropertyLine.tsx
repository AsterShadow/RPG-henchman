import React from 'react';

interface PropertyLine {
    label: string,
    value: string | number,
}

const PropertyLine: React.FC<PropertyLine> = ({ label, value }) => (
    <div className="flex gap-2">
        <p><span className="font-bold">{label} </span>{value}</p>
    </div>
);

export default PropertyLine