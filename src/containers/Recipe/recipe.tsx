import React, { FunctionComponent } from 'react';
import css from './recipe.css';
import RecipeHeader from './recipeHeader/recipeHeader';
import RecipePhoto from './RecipePhoto/recipePhoto';
import RecipeIngredients from './RecipeIngredients/recipeIngredients';
import RecipeDirections from './RecipeDirections/recipeDirections';

const Recipe: FunctionComponent = () => {
    return (
        <>
            <div className={css.recipeContainer}>
                <RecipeHeader></RecipeHeader>
                <RecipePhoto></RecipePhoto>
                <RecipeIngredients></RecipeIngredients>
                <RecipeDirections></RecipeDirections>
            </div>
        </>
    );
}

export default Recipe;