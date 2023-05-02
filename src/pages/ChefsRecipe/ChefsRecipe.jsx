import React from 'react';
import { useLoaderData } from 'react-router-dom';
import RecipeOnUi from '../../ShowOnUi/RecipeOnUi';

const ChefsRecipe = () => {
    const chefData = useLoaderData();
    console.log(chefData);
    const { chef_name, chef_picture, likes, num_recipes, short_bio, years_of_experience } = chefData;
    return (
        <div className='container mx-auto'>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={chef_picture} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {chef_name}</h2>
                    <p className=''>Bio: {short_bio}</p>
                    <p>Number of Recipis :{num_recipes}</p>
                    <p>Years of Experience :{years_of_experience}</p>
                    <p>Likes :{likes}</p>

                </div>
            </div>
            <div className='grid grid-cols-3 gap-5 '>
                {
                    chefData.recipes.map((recipe, index) => <RecipeOnUi
                        key={index}
                        recipe={recipe}
                    ></RecipeOnUi>)
                }
            </div>
        </div>
    );
};

export default ChefsRecipe;