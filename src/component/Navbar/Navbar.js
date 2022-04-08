import React from 'react';
import './Navbar.css'

import CustomLink from '../CustomLink/CustomLink';

const Navbar = () => {
    return (
        <nav className='color'>
            <ul className='ul'>
                <li><CustomLink className='a' to="/">Home</CustomLink></li>
                <li><CustomLink className='a' to="/reviews">Reviews</CustomLink></li>
                <li><CustomLink className='a' to="/dashboard">Dashboard</CustomLink></li>
                <li><CustomLink className='a' to="/blogs">Blogs</CustomLink></li>
            </ul>
        </nav>
    );
};

export default Navbar;