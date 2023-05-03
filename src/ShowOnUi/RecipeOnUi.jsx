import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { toast } from 'react-toastify';

const RecipeOnUi = ({ recipe }) => {
    const [disabled, setDisabled] = useState(false);

    const handleTost = () => {
        setDisabled(true);
        return toast('Favorite Recipe added');

    }
    const { cooking_method, recipe_name, recipe_image, rating, ingredients } = recipe;
    return (
        <div >
            <div className="card w-96 bg-base-100 shadow-xl mt-5 mx-auto">
                <figure><img className='h-96 w-full' src={recipe_image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title"><span className='text-lg font-bold'>Recipe Name</span>: {recipe_name}</h2>
                    <p>{ingredients.map((i, index) => <li key={index}>{i}</li>)}</p>
                    <p>Cooking Method :{cooking_method.slice(0, 100)}</p>
                    <span>Ratings : <span className='flex items-center gap-2'><FaStar></FaStar>{rating}</span></span>
                    <div className="card-actions justify-end">
                        <button onClick={handleTost} className={`btn btn-primary ${disabled ? 'btn-disabled' : ''}`}>Favorite</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeOnUi;