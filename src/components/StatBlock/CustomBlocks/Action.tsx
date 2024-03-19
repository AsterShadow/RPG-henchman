import React from 'react';
import TaperedRule from './TaperedRule';

interface ActionsProps {
    actions: Action[];
}

const Action: React.FC<ActionsProps> = ({ actions }) => {

    if (!actions || actions.length === 0) return null;
    return (
        <div>
            <h3 className="text-lg uppercase">Actions</h3>
            <TaperedRule />
            {actions.map((action, index) => (
                <div key={index} className="mb-4">
                    <p className='text-black'><span className="font-bold italic">{action.name} </span>{action.desc}</p>
                    {/* {action.attack_bonus && (
                        <p>Attack Bonus: {action.attack_bonus}</p>
                    )}
                    {action.damage_dice && (
                        <p>Damage: {action.damage_dice} {action.damage_bonus && `+ ${action.damage_bonus}`}</p>
                    )} */}
                </div>
            ))}
        </div>
    );
}

export default Action