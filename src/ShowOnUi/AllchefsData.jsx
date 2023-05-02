import React from 'react';
import { Link } from 'react-router-dom';

const AllchefsData = ({ allChefs }) => {
    const { id, chef_name, chef_picture, likes, num_recipes, years_of_experience } = allChefs;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={chef_picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{chef_name}</h2>
                    <p>Number of Recipes: {num_recipes}</p>
                    <p>Years of Experience {years_of_experience}</p>
                    <p>Likes: {likes}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/chefs/${id}`}><button className='btn btn-secondary'>view recipes</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllchefsData;