import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import { FaAlignJustify, FaExpandArrowsAlt } from 'react-icons/fa';

const Header = () => {
    const [open, setOpen] = useState(false);
    const { user, LogOut } = useContext(AuthContext);


    const handleLogOut = () => {
        LogOut()
            .then(result => {

            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <>
            <div style={{ backgroundImage: `url("https://miraclestudio.design/html/deliciousa-html/assets/images/bg/food-menu-bg2.jpg")` }} className='flex justify-between items-center  container mx-auto px-5 mt-5 text-white p-5 rounded-lg'>
                <div>
                    <p className='text-xl font-serif font-bold'>Italian Foodies </p>
                </div>

                <div className='hidden md:block'>
                    <span className='mr-3'><NavLink to='/' className={({ isActive }) => isActive ? 'btn btn-outline btn-info text-white normal-case text-xl' : 'btn btn-ghost text-white normal-case text-xl'}>Home</NavLink></span>
                    <NavLink to='/blog' className={({ isActive }) => isActive ? 'btn btn-outline btn-info text-white normal-case text-xl' : 'btn btn-ghost text-white normal-case text-xl'}>Blog</NavLink>
                </div>
                <div className='hidden  md:flex gap-3 items-center'>
                    {
                        user ? <><img title={user?.displayName} className='w-16 h-16 rounded-full' src={user?.photoURL} alt="" />
                            <Link><button onClick={handleLogOut} className='btn glass  text-blue-600 font-bold text-lg'>Log Out</button></Link></> : <>
                            <Link to="/login"><button className='btn glass text-blue-600 font-bold text-lg'>Log In</button></Link></>
                    }
                </div>
                <div className='md:hidden' onClick={() => setOpen(!open)}>
                    {
                        open === false ? <p className='text-2xl'><FaAlignJustify></FaAlignJustify></p> : <p className='text-2xl'> <FaExpandArrowsAlt></FaExpandArrowsAlt></p>
                    }
                </div>

            </div>
            <div className='container mx-auto'>
                {
                    open === true ? <>{
                        user ? <><img  title={user?.displayName} className='w-16 h-16 rounded-full mb-3' src={user?.photoURL} alt="" />
                            <Link><button onClick={handleLogOut} className='btn glass mb-3 text-blue-600 font-bold text-lg'>Log Out</button></Link></> : <>
                            <Link to="/login"><button className='btn glass text-blue-600 font-bold text-lg'>Log In</button></Link></>
                    }

                        <div>
                            <span className='mr-3'><NavLink to='/' className={({ isActive }) => isActive ? 'btn btn-primary text-white normal-case text-xl' : 'btn btn-outline btn-info text-white normal-case text-xl'}>Home</NavLink></span>
                            <NavLink to='/blog' className={({ isActive }) => isActive ? 'btn btn-primary text-white normal-case text-xl' : 'btn btn-outline btn-info text-white normal-case text-xl'}>Blog</NavLink>
                        </div>
                    </> : <></>
                }
            </div>
        </>
    );
};

export default Header;