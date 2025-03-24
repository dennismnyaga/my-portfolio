import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoMdMenu } from "react-icons/io";

const Nav = () => {
    const [menu, setMenu] = useState(false);
    const toggleMenu = () => setMenu(!menu);

    return (
        <nav className='flex justify-between py-3 px-4 shadow-md sticky'>
            <div className='md:hidden' onClick={toggleMenu}>
                <IoMdMenu className='w-6 h-6 cursor-pointer' />
            </div>

            {menu && (
                <div className='absolute top-10 left-0 w-full bg-white shadow-lg md:hidden'>
                    <ul className='flex flex-col items-center'>
                        <NavItem label="About" link="/about" />
                        <NavItem label="Portfolio" link="/portfolio" />
                        <NavItem label="Organisations" link="/organisations" />
                    </ul>
                </div>
            )}

            <ul className="hidden md:flex items-center">
                <NavItem label="About" link="/about" />
                <NavItem label="Portfolio" link="/portfolio" />
                <NavItem label="Organisations" link="/organisations" />
            </ul>

            <Link to='/'>
                <div className='bg-black h-8 w-8 flex items-center justify-center rounded-full'>
                    <h1 className='text-white font-bold text-lg'>D</h1>
                </div>
            </Link>
            <Link to='/contact'>
                <button className='bg-button-color px-2 py-1 rounded text-sm font-bold'>Contact me</button>
            </Link>

        </nav>
    )
}

const NavItem = ({ label, link }: { label: any; link: any }) => (
    <li className='font-bold text-sm mx-2'>
        <Link to={link}>{label}</Link>
    </li>
);

export default Nav;
