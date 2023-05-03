import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../../pages/Banner/Banner';
import AllchefsData from '../../ShowOnUi/AllchefsData';
import PizzaSection from '../../pages/PizzaSection/PizzaSection';
import ItemSection from '../../pages/ItemSection/ItemSection';

const Home = () => {
    const chefsData = useLoaderData();
    return (
        <div className='container mx-auto'>
            <Banner></Banner>
            <PizzaSection></PizzaSection>
            <div>
                <div className='text-center mt-20'>
                <p className='text-6xl font-bold font-serif mb-5 italic'>Meet Our Chefs</p>
                <p className='w-2/3 mx-auto text-lg font-bold italic mb-10'> All Chefs are here you can see there details applying heat from below. There are several varieties of grills, with most falling into one of two categories gas-fueled or charcoal. There is debate over which method yields superior results A barbecue grill is a device that cooks food by applying heat from below. There are several varieties of grills</p>
                </div>
                <div className='bg-gradient-to-r from-indigo-200 via-purple-500 to-pink-500 rounded-xl md:grid md:grid-cols-3 gap-5 p-5'>
                    {chefsData.map(allChefs => <AllchefsData
                        key={allChefs.id}
                        allChefs={allChefs}
                    ></AllchefsData>)}
                </div>
            </div>
            <ItemSection></ItemSection>
        </div>
    );
};

export default Home;