import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../../pages/Banner/Banner';

const Home = () => {
    const chefsData = useLoaderData();
    console.log(chefsData);
    return (
        <div className='container mx-auto'>
            <Banner></Banner>
            {chefsData.map(d=> <div key={d.id}><img src={d.chef_picture} alt="" /></div>)}
        </div>
    );
};

export default Home;