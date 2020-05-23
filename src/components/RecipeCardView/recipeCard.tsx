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
                Test 123
            </div>
        </div>
    );
};

export default RecipeCard;