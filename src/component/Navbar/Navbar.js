import React, { useState } from 'react';
import Link from '../Link/Link';
import './Navbar.css'
import { MenuIcon } from '@heroicons/react/solid'

const Navbar = () => {
    let [open, setOpen] = useState(false)
    let routes = [
        { id: 1, name: 'Home', link: '/home' },
        { id: 1, name: 'Reviews', link: '/reviews' },
        { id: 1, name: 'Dashboard', link: '/dashboard' },
        { id: 1, name: 'Blogs', link: '/blogs' }
    ]

    return (
        <nav>
            <div onClick={() => setOpen(!open)} className='w-6 h-6 md:hidden'>
                <MenuIcon></MenuIcon>
            </div>
            <ul className='md:flex justify-end color'>
                {
                    routes.map(route => <Link key={route.id}
                        route={route}
                    ></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;