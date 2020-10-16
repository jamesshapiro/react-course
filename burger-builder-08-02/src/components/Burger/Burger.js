import React from 'react';

import classes from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = (props) => {
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bun-top" />
            <BurgerIngredient type="cheese" />
            <BurgerIngredient type="beef" />
            <BurgerIngredient type="bun-bottom" />
        </div>
    );
};

export default burger;