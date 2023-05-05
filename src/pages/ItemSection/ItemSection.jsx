import React from 'react';

const ItemSection = () => {
    return (
        <div  className=' p-20 mt-10 rounded-xl bg-slate-800'>
            <p className='text-center font-bold font-serif text-6xl italic text-white'>Our Delicious <br /> Menu</p>
            
            <div className=' md:flex items-center justify-center gap-10 mt-16 '>
                <div className='relative'>
                    <img className='rounded-full ' src="https://miraclestudio.design/html/deliciousa-html/assets/images/foodmenu/menu6/food1.jpg" alt="" />
                    <div className='hidden md:block border-dashed border-4 hover:animate-spin absolute top-[-7px] start-[-10px] right-[-10px] border-orange-500 rounded-full p-32'>

                    </div>
                    <div className='mt-5 text-white'>
                        <p className='text-2xl font-bold'>Chicken</p>
                        <p>15 Recipes</p>
                    </div>
                </div>
                <div className='relative'>
                    <img className='rounded-full' src="https://miraclestudio.design/html/deliciousa-html/assets/images/foodmenu/menu6/food2.jpg" alt="" />
                    <div className=' hidden md:block border-dashed border-4 hover:animate-spin absolute top-[-7px] start-[-10px] right-[-10px] border-orange-500 rounded-full p-32'>

                    </div>
                    <div className='mt-5 text-white '>
                        <p className='text-2xl font-bold'>Beef</p>
                        <p>15 Recipes</p>
                    </div>
                </div>
                <div className='relative'>
                    <img className='rounded-full' src="https://miraclestudio.design/html/deliciousa-html/assets/images/foodmenu/menu6/food3.jpg" alt="" />
                    <div className=' hidden md:block border-dashed border-4 hover:animate-spin absolute top-[-7px] start-[-10px] right-[-10px] border-orange-500 rounded-full p-32'>

                    </div>
                    <div className='mt-5 text-white'>
                        <p className='text-2xl font-bold'>Seafood</p>
                        <p>15 Recipes</p>
                    </div>
                </div>
                <div className='relative'>
                    <img className='rounded-full' src="https://miraclestudio.design/html/deliciousa-html/assets/images/foodmenu/menu6/food4.jpg" alt="" />
                    <div className=' hidden md:block border-dashed border-4 hover:animate-spin absolute top-[-7px] start-[-10px] right-[-10px] border-orange-500 rounded-full p-32'>

                    </div>
                    <div className="mt-5 text-white">
                        <p className='text-2xl font-bold'>Pasta</p>
                        <p>15 Recipes</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemSection;