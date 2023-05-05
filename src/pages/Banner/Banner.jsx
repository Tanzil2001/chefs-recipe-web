import React from 'react';

const Banner = () => {
    return (
        <div style={{backgroundImage: `url("https://miraclestudio.design/html/deliciousa-html/assets/images/bg/food-menu-bg2.jpg")`, height: '100vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}} className=' container mx-auto   relative mt-5 rounded-xl'>
            <p className='container text-white text-center absolute mx-auto mt-20 text-6xl font-bold italic font-serif'>Eatin' Good in Deliciousa</p>
            <img className='hidden md:block absolute animate-pulse' src="https://miraclestudio.design/html/deliciousa-html/assets/images/logo/banner-logo3.png" alt="" />
            <img className='animate-bounce absolute md:right-0 top-1/2 md:top-0 ' src="	https://miraclestudio.design/html/deliciousa-html/assets/images/element/element1.png" alt="" />
           
        </div>
    );
};

export default Banner;