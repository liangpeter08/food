import React, { FunctionComponent } from 'react';
import randomImage from '../../assets/cookie.jpg';
import css from './recipeCard.css';
import { Link } from 'react-router-dom';

interface RecipeCardProps {
};

const RecipeCard: FunctionComponent<RecipeCardProps> = () => {
    return (
        <div className={css.recipeCardContainer}>
            <img className={css.recipeImage} src={randomImage}></img>
            <div className={css.recipeContent}>
                <Link to="/recipe" className={css.recipeTitle}>
                    Cookie Recipe
                </Link>
                <div className={css.recipeDetail}>
                    My first recipe is here
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;