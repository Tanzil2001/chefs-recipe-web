import React from 'react';
import { useLoaderData } from 'react-router-dom';
import RecipeOnUi from '../../ShowOnUi/RecipeOnUi';

const ChefsRecipe = () => {
    const chefData = useLoaderData();
    console.log(chefData);
    const { chef_name, chef_picture, likes, num_recipes, short_bio, years_of_experience } = chefData;
    return (
        <div className='container mx-auto mt-5 md:p-5 rounded-xl bg-slate-400'>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={chef_picture} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {chef_name}</h2>
                    <p className=''><span className='text-lg font-bold'>Bio</span> : {short_bio}</p>
                    <p><span className='text-lg font-bold'>Number of Recipis</span> :{num_recipes}</p>
                    <p><span className='text-lg font-bold'>Years of Experience</span> :{years_of_experience}</p>
                    <p><span className='text-lg font-bold'>Likes</span> :{likes}</p>

                </div>
            </div>
            <div className=' md:grid md:grid-cols-3 gap-5 '>
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