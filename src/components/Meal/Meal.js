import React from 'react';
import './Meal.css';

const Meal = ({meal,addToCart}) => {
    const { strMeal, strInstructions, strMealThumb } = meal;
    // const {addToCart} = props.addToCart;
    // console.log(addToCart);
    
    return (
        <div className="meal">
            <img src={strMealThumb} alt="" />
            <h3>{strMeal}</h3>
            <p>{strInstructions.slice(0, 100)}</p>
            <button className='btn' onClick={()=>addToCart(meal)}>Add this Food</button>
        </div>
    );
};

export default Meal;