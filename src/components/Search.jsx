import React, { useState , useEffect} from 'react';

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "c6402edb68c04bd89ee35cc3c1b32fa8";

export default function Search({foodData, setFoodData}) {
    const [query, setQuery] = useState("pasta");
    function handleQueryChange(e) {
        const inputValue = e.target.value;
        setQuery(inputValue);
    }

    useEffect(() => {
       async function  fetchFood(){
           const response = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
           const data = await response.json();
           console.log(data.results);
           setFoodData(data.results);
        }
    fetchFood();
    }, [query]);

    return (
        <div className='search-container'>
            <input value={query}
                onChange={handleQueryChange}
                type='text'
                placeholder='Search Here'
                className='inputBox'>
            </input>
        </div>
    )
}