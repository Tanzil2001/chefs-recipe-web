import React from 'react';

const ItemSection = () => {
    return (
        <div className=' flex items-center justify-center mt-10 gap-10'>
            <div className='border-dashed border-4 animate-spin relative border-red-600 rounded-full p-2'>
                <img className='rounded-full absolute' src="https://miraclestudio.design/html/deliciousa-html/assets/images/foodmenu/menu6/food1.jpg" alt="" />
            </div>
            <div className='border-dashed border-4 border-red-600 rounded-full p-2'>
                <img className='rounded-full' src="https://miraclestudio.design/html/deliciousa-html/assets/images/foodmenu/menu6/food2.jpg" alt="" />
            </div>
            <div className='border-dashed border-4 border-red-600 rounded-full p-2'>
                <img className='rounded-full' src="https://miraclestudio.design/html/deliciousa-html/assets/images/foodmenu/menu6/food3.jpg" alt="" />
            </div>
            <div className='border-dashed border-4 border-red-600 rounded-full p-2'>
                <img className='rounded-full' src="https://miraclestudio.design/html/deliciousa-html/assets/images/foodmenu/menu6/food4.jpg" alt="" />
            </div>
        </div>
    );
};

export default ItemSection;