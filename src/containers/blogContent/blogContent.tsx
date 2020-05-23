import React from 'react';
import css from './blogContent.css';
import RecipeCard from '../../components/RecipeCardView/recipeCard';

export default function BlogContent() {
    return (
        <>
            <div className={css.sectionTitle}>Popular Recipes</div>
            <div className={css.recipeView}>
                <RecipeCard></RecipeCard>
            </div>
        </>
    );
}