import React, { FunctionComponent } from 'react';
import css from './recipe.css';
import { sectionHeader } from 'aws-amplify';
import randomImage from '../../assets/cookie.jpg';

const Recipe: FunctionComponent = () => {
    const sampleIngredientList = new Array(5).fill(0).map((_, i) => {
        return (<div key={i} className={css.ingredient}>Flour</div>)
    }
    );
    const sampleStepList = new Array(2).fill(0).map((_, i) => {
        return (<div key={i} className={css.step}>
            <div><b>Step {i + 1}</b></div>
            <div>Mix Flour</div>
        </div>)
    }
    );
    return (
        <>
            <div className={css.recipeContainer}>
                <div className={css.recipeHeader}>
                    <div className={css.recipeName}>Cookies</div>
                    <div className={css.recipeDescription}>A simple cookie recipe</div>
                </div>
                <img className={css.recipeImage} src={randomImage}></img>
                <div className={css.sectionTitle}>Ingredients</div>
                <div className={css.ingredientList}>
                    {sampleIngredientList}
                </div>

                <div className={css.instruction}>
                    <div className={css.sectionTitle}>Cooking Instructions</div>
                    <div className={css.stepList}>
                        {sampleStepList}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Recipe;