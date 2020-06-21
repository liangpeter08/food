import React, { FunctionComponent } from 'react';
import css from './recipeHeader.css';

const RecipeHeader: FunctionComponent = () => {
    return (<div className={css.recipeHeader}>
        <div className={css.recipeName}>Cookies</div>
        <div className={css.recipeDescription}>A simple cookie recipe</div>
    </div>);
}

export default RecipeHeader;