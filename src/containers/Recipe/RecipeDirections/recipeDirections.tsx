import React, { FunctionComponent } from 'react';
import css from './recipeDirections.css';

const RecipeDirections: FunctionComponent = () => {
    const sampleStepList = new Array(2).fill(0).map((_, i) => {
        return (<div key={i} className={css.step}>
            <div><b>Step {i + 1}</b></div>
            <div>Mix Flour</div>
        </div>)
    }
    );

    return (
        <>
            <div className={css.instruction}>
                <div className={css.sectionTitle}>Cooking Instructions</div>
                <div className={css.stepList}>
                    {sampleStepList}
                </div>
            </div>
        </>);
}

export default RecipeDirections;