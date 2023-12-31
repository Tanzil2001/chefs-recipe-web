import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';
import AOS from 'aos';
import 'aos/dist/aos.css';


const AllchefsData = ({ allChefs }) => {
    useEffect(()=>{
        AOS.init({duration: 2000});
    },[])
    
    const { id, chef_name, chef_picture, likes, num_recipes, years_of_experience } = allChefs;
    return (
            <div data-aos="fade-left" className=" sticky top-0 card card-compact w-96 bg-base-100 shadow-xl mx-auto mt-5">
                <figure><LazyLoad width={500} height={300} threshold={1}><img src={chef_picture} alt="Shoes" /></LazyLoad></figure>
                <div className="card-body">
                    <h2 className="card-title">{chef_name}</h2>
                    <p>Number of Recipes: {num_recipes}</p>
                    <p>Years of Experience {years_of_experience}</p>
                    <p>Likes: {likes}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/chefs/${id}`}><button className='btn btn-outline btn-primary'>view recipes</button></Link>
                    </div>
                </div>
            </div>
    );
};

export default AllchefsData;