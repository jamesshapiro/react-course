import React from 'react';

import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    { label: 'Lettuce', type: 'lettuce' },
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Beef', type: 'beef'}
]

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        {controls.map(ctrl => {
            return (
                <BuildControl 
                    key={ctrl.label}
                    label={ctrl.label}
                />
            )
        })}
    </div>
);

export default buildControls;