import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, sit suscipit. Placeat veritatis cupiditate eaque, aliquam in, modi facere soluta amet ducimus quos accusantium vero voluptas velit repellat debitis optio!</p>

            <Link to="/">Home</Link>
            <Link to="/blog">Blog</Link>
        </div>
    );
};

export default Header;