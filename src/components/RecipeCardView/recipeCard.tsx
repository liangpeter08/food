import React, { FunctionComponent } from 'react';
import randomImage from '../../assets/cookie.jpg';
import css from './recipeCard.css';

interface RecipeCardProps {
};

const RecipeCard: FunctionComponent<RecipeCardProps> = () => {
    return (
        <div className={css.recipeCardContainer}>
            <img className={css.recipeImage} src={randomImage}></img>
            <div className={css.recipeContent}>
                <div className={css.recipeTitle}>
                    Cookie Recipe
                </div>
                <div className={css.recipeDetail}>
                    My first recipe is here
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;