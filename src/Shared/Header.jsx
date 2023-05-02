import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import { FaUser } from "react-icons/fa";

const Header = () => {
    const { user, LogOut } = useContext(AuthContext);

    const handleLogOut =()=>{
        LogOut()
        .then(result =>{

        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <>
            <div className='flex justify-between items-center  container mx-auto px-5'>
                <div>
                    <p>Italian Foodies Recipe</p>
                </div>

                <div>
                    <Link to="/">Home</Link>
                    <Link to="/blog">Blog</Link>
                </div>
                <div className='flex gap-3 items-center'>
                    {
                        user ? <><p><FaUser></FaUser></p>
                            <Link><button onClick={handleLogOut} className='btn btn-primary'>Log Out</button></Link></> : <>
                            <Link to="/login"><button className='btn btn-primary'>Log In</button></Link></>
                    }
                </div>

            </div>
        </>
    );
};

export default Header;