import React, { useEffect, useState } from 'react';

export default function FoodDetails({ foodId }) {
    const[food, setFood] = useState({});
    const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
    const API_KEY = "c6402edb68c04bd89ee35cc3c1b32fa8";

    useEffect(()=>{
       async function fetchFood(){
          let res = await fetch(`${URL}?apiKey=${API_KEY}`);
          const data = await res.json();
          console.log(data);
          setFood(data);
        }
        fetchFood();
    }, [foodId]);

    return (
        <div>
           <div>
            <h1>{food.title}</h1>
            <img src={food.image} alt="" />
           </div>
           <span> Making time:  <strong>🕒 {food.readyInMinutes} minutes</strong> </span>
           {/* <span>{food.vegetarian ? "  Vegetarian" : "  Non-Vegetarian"}</span> */}
        </div>
    )
}