import React from 'react';
import TaperedRule from './TaperedRule';

interface DescriptionProps {
    description?: string;
    editMode: boolean;
}

const Description: React.FC<DescriptionProps> = ({ description, editMode }) => {
    return (
        <div>
            <h3 className="text-lg uppercase statblockHeader">Description</h3>
            {!editMode &&
                <TaperedRule />
            }
            <p className='text-black'>{description}</p>

        </div>
    )
}

export default Description