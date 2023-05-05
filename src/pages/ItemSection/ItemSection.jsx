import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ItemSection = () => {

    useEffect(()=>{
        AOS.init({duration: 2000});
    },[])
    return (
        <div style={{backgroundImage:`url("https://gico.io/spcica/images/background/2.jpg")`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover"}} className=' p-20 mt-10 rounded-xl bg-slate-800'>
            <p className='text-center font-bold font-serif text-6xl italic text-white'>Our Delicious <br /> Menu</p>
            <div className=' md:flex items-center justify-center gap-10 mt-16'>
                <div className='flex flex-col items-center'>
                    <img data-aos="fade-down-right" className='rounded-full ' src="https://miraclestudio.design/html/deliciousa-html/assets/images/foodmenu/menu6/food1.jpg" alt="" />
                    <div className='mt-5 mb-10 text-white'>
                        <p className='text-2xl font-bold'>Chicken</p>
                        <p>15 Recipes</p>
                    </div>
                </div>
                <div className='flex flex-col items-center'>
                    <img data-aos="zoom-in-up" className='rounded-full' src="https://miraclestudio.design/html/deliciousa-html/assets/images/foodmenu/menu6/food2.jpg" alt="" />
                    <div className='mt-5 mb-10 text-white '>
                        <p className='text-2xl font-bold'>Beef</p>
                        <p>15 Recipes</p>
                    </div>
                </div>
                <div className='flex flex-col items-center'>
                    <img data-aos="zoom-in-up" className='rounded-full' src="https://miraclestudio.design/html/deliciousa-html/assets/images/foodmenu/menu6/food3.jpg" alt="" />
                    <div className='mt-5 mb-10 text-white'>
                        <p className='text-2xl font-bold'>Seafood</p>
                        <p>15 Recipes</p>
                    </div>
                </div>
                <div className='flex flex-col items-center'>
                    <img data-aos="fade-down-left" className='rounded-full' src="https://miraclestudio.design/html/deliciousa-html/assets/images/foodmenu/menu6/food4.jpg" alt="" />
                    <div className="mt-5 mb-10 text-white">
                        <p className='text-2xl font-bold'>Pasta</p>
                        <p>15 Recipes</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemSection;