import React from 'react';
import { FaCalendar, FaFacebook, FaInstagram, FaLocationArrow, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='bg-black text-white p-10 mt-10'>
            <div className='grid grid-cols-4 '>
                <div>
                    <p className='mb-5 text-xl font-bold font-serif'> Italian Foodies Recipe</p>
                    <p>Alice's passion for cooking began at a young age and she has since honed her skills in some of the world's best kitchens. She is known for her unique flavor combinations and innovative cooking techniques.</p>
                    <div className='flex gap-4 text-3xl mt-5'>
                        <p className='text-blue-700'><FaFacebook></FaFacebook></p>
                        <p className='text-blue-400'><FaTwitter></FaTwitter></p>
                        <p className='text-pink-600'><FaInstagram></FaInstagram></p>
                    </div>
                </div>
                <div>
                    <p className='mb-5 text-xl font-bold'>Recent Posts</p>
                    <div>
                        <div>
                            <p>Delicious Hot Grilled Chicken Recipes</p>
                            <p className='text-red-800'>OCTOBER 4, 2018</p>
                        </div>
                        <div className='my-5'>
                            <p>Better Fed Than Red Whether Glories</p>
                            <p className='text-red-800'>OCTOBER 4, 2018</p>
                        </div>
                        <div>
                            <p>Trade Pastry Wrap To Coat Fish, Poultry</p>
                            <p className='text-red-800'>OCTOBER 4, 2018</p>
                        </div>
                    </div>
                </div>
                <div>
                    <p className='mb-5 text-xl font-bold'>Popular Posts</p>
                    <div>
                        <div className='flex items-center gap-3 mb-5'>
                            <img className='rounded-lg' src="https://demo.zozothemes.com/palmplaza/wp-content/uploads/sites/41/2018/10/blog-img-4-1-80x80.jpg" alt="" />
                            <div>
                                <p>Delicious Hot Grilled Chicken Recipes</p>
                                <div className='flex items-center gap-3'>
                                    <p className='text-red-800'><FaCalendar></FaCalendar></p>
                                    <p>OCTOBER 4, 2018</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center gap-3'>
                            <img className='rounded-lg' src="https://demo.zozothemes.com/palmplaza/wp-content/uploads/sites/41/2018/10/blog-img-1-1-80x80.jpg" alt="" />
                            <div>
                                <p>Better Fed Than Red Whether Glories</p>
                                <div className='flex items-center gap-3'>
                                    <p className='text-red-800'><FaCalendar></FaCalendar></p>
                                    <p>OCTOBER 4, 2018</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <p className='mb-5 text-xl font-bold'>Contact Us</p>
                    <div className='flex items-center gap-3'>
                        <p className='text-red-800'><FaPhone></FaPhone></p>
                        <p>	+1 (541) 754-3010</p>
                    </div>
                    <div className='flex items-center gap-3 my-5'>
                        <p  className='text-red-800'><FaLocationArrow></FaLocationArrow></p>
                        <p>
                            732/21 Second Street, Manchester, King Street, Kingston United Kingdom
                        </p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <p className='text-red-800'><FaMailBulk></FaMailBulk></p>
                        <p>	support@italianFoodies.com</p>
                    </div>
                </div>
            </div>
            <p className='text-center mt-10'>Copyrights © 2023 <span className='text-red-800'>Italian Foodies</span>. Designed by <span className='text-red-800'>TZThemes</span></p>
        </div>
    );
};

export default Footer;