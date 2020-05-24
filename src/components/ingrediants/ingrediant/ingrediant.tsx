import React, { FunctionComponent } from 'react';
import css from './ingredient.css';

interface IngredientProps {
};

const Ingredient: FunctionComponent<IngredientProps> = () => {
    return (
        <div className={css.ingredientContainer}>
            <button className={css.ingredientButton}>"+"</button>
            <div className={css.ingredientText}>
                    Milk
                </div>
            </div>
            );
};

export default Ingredient;