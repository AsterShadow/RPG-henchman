import React from 'react';
import TaperedRule from './TaperedRule';

interface DescriptionProps {
    description: string,
}

const Description: React.FC<DescriptionProps> = ({ description }) => {
    return (
        <div>
            <h3 className="text-lg uppercase">Description</h3>
            <TaperedRule/>
            <p className='text-black'>{description}</p>

        </div>
    )
}

export default Description