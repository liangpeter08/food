import React, { FunctionComponent } from 'react';
import css from './recipePhoto.css';
import randomImage from '../../../assets/cookie.jpg';

const RecipePhoto: FunctionComponent = () => {
    return (
        <div className={css.recipePhotoContainer}>
            <img className={css.recipeImage} src={randomImage}></img>
            <div className={css.recipeStats}>
                <div className={css.recipeStat}>Prep Time: 10 min</div>
                <div className={css.recipeStat}>Cook Time: 10 min</div>
                <div className={css.recipeStat}>Total: 20 min</div>
                <div className={css.recipeStat}>Servings: 2</div>
                <div className={css.recipeStat}>Yield: 2 servings</div>
            </div>
        </div>
    );
}

export default RecipePhoto;