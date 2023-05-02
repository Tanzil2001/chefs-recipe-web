import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../../pages/Banner/Banner';
import AllchefsData from '../../ShowOnUi/AllchefsData';

const Home = () => {
    const chefsData = useLoaderData();
    return (
        <div className='container mx-auto'>
            <Banner></Banner>
            <div className='grid grid-cols-3 gap-5'>
                {chefsData.map(allChefs => <AllchefsData
                    key={allChefs.id}
                    allChefs={allChefs}
                ></AllchefsData>)}
            </div>
        </div>
    );
};

export default Home;