import React, { FunctionComponent } from 'react';
import css from './recipeIngredients.css';

const RecipeHeader: FunctionComponent = () => {
    const sampleIngredientList = new Array(5).fill(0).map((_, i) => {
        return (<div key={i} className={css.ingredient}>Flour</div>)
    }
    );
    return (
        <>
            <div className={css.sectionTitle}>Ingredients</div>
            <div className={css.ingredientList}>
                {sampleIngredientList}
            </div>
        </>
    );
}

export default RecipeHeader;