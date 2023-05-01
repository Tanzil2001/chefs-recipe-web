import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const chefsData = useLoaderData();
    console.log(chefsData);
    return (
        <div>
            {chefsData.map(d=> <div key={d.id}><img src={d.chef_picture} alt="" /></div>)}
        </div>
    );
};

export default Home;