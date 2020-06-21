import React, { FunctionComponent } from 'react';
import css from './recipePhoto.css';
import randomImage from '../../../assets/cookie.jpg';

const RecipePhoto: FunctionComponent = () => {
    return (<img className={css.recipeImage} src={randomImage}></img>);
}

export default RecipePhoto;