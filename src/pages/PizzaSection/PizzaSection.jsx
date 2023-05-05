import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PizzaSection = () => {

    useEffect(()=>{
        AOS.init({duration: 2000})
    },[])
    return (
        <div className='md:flex justify-evenly items-center mt-5'>
            <img data-aos="fade-right" src="https://miraclestudio.design/html/deliciousa-html/assets/images/about/about7.png" alt="" />
            <div>
                <p className='text-6xl font-serif font-bold italic'>Satitisty Your Pizza Pasta</p>
                <img className='animate-bounce ' src="https://miraclestudio.design/html/deliciousa-html/assets/images/element/element2.png" alt="" />
                <p className='text-center text-lg '>A barbecue grill is a device that cooks food by applying heat from below. There are several varieties of grills, with most falling into one of two categories gas-fueled or charcoal. There is debate over which method yields superior results A barbecue grill is a device that cooks food by applying heat from below. There are several varieties of grills</p>
                <div className='flex gap-5 mt-5 justify-center'>
                    <button className='btn btn-outline btn-warning rounded-full'>Our Story</button>
                    <button className='btn btn-outline btn-warning rounded-full'>Our Menu</button>
                </div>
            </div>
        </div>
    );
};

export default PizzaSection;