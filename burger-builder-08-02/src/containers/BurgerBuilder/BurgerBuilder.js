import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
    lettuce: 0.5,
    cheese: 0.4,
    beef: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {...}
    // }
    state = {
        ingredients: {
            lettuce: 0,
            bacon: 0,
            cheese: 0,
            beef: 0
        },
        totalPrice: 4
    }

    changeIngredientHandler(type, shouldDecrease) {
        let delta = 1;
        const oldCount = this.state.ingredients[type];
        if (shouldDecrease) {
            if (oldCount < 1) {
                return;
            }
            delta = -1;
        }
        
        const updatedCount = oldCount + delta;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const ingredientPrice = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + (ingredientPrice * delta);
        this.setState(
            {totalPrice: newPrice, ingredients: updatedIngredients}
        );
    }

    addIngredientHandler = (type) => {
        this.changeIngredientHandler(type, false)
    }

    removeIngredientHandler = (type) => {
        this.changeIngredientHandler(type, true)
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] < 1
        }
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;