import React from 'react';
import classes from './BurgerIgredient.module.css'

const burgerIngredient = ( props ) => {
    let ingredient = null;

    switch ( props.type ) {
        case ( 'bun-bottom' ):
            ingredient = <div className={classes.BunBottom}></div>;
            break;
        case ( 'bun-top' ):
            ingredient = (
                <div className={classes.BunTop}>
                    <div className={classes.Seed1}></div>
                    <div className={classes.Seed2}></div>
                </div>
            );
            break;
        case ( 'beef' ):
            ingredient = <div className={classes.Beef}></div>;
            break;
        case ( 'cheese' ):
            ingredient = <div className={classes.Cheese}></div>;
            break;
        case ( 'lettuce' ):
            ingredient = <div className={classes.Lettuce}></div>;
            break;
        case ( 'bacon' ):
            ingredient = <div className={classes.Bacon}></div>;
            break;
        default:
            ingredient = null;
    }

    return ingredient;
};

export default burgerIngredient