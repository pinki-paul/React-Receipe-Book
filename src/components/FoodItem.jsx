import React from 'react';
import '../App.css';



export default function FoodItem({ food, setFoodId }) {
    return (
        <div className='itemContainer'>
            <img src={food.image} className='foodImg' />
            <h1 className='foodTitle'>{food.title}</h1>
            <div className='btnContainer'>
                <button onClick={() => {
                    console.log(food.id);
                    setFoodId(food.id);
                }}
                    className='main-btn'>View Receipe</button>
            </div>

        </div>
    )
}