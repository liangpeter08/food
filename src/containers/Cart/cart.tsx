import React, { FunctionComponent } from 'react';
import css from './cart.css';
import RecipeCard from '../../components/RecipeCardView/recipeCard';


const Cart: FunctionComponent = () => {
    const sampleRecipeCards = new Array(10).fill(0).map((_, i) => {
        return (<div key={i} className={css.recipeCard}>
            <RecipeCard />
        </div>)
    }
    );
    return (
        <div className={css.cartContainer}>
            <div className={css.recipeCardList}>
                {sampleRecipeCards}
            </div>
        </div>
    );
}

export default Cart;