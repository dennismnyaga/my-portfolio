import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoMdMenu } from "react-icons/io";

const Nav = () => {

    const [menu, setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu(!menu)
    }

    return (
        <nav className=' flex justify-between shadow-xl py-3 px-8 sticky'>
            <div>
                <div className='md:hidden' onClick={toggleMenu}>
                    <IoMdMenu className='w-8 h-8 text-black cursor-pointer' />
                </div>


                {menu && (
                <div className='absolute top-12 left-0 ms-5 bg-white shadow-lg border md:hidden'>
                    <ul className='flex flex-col items-center py-1 px-2'>
                        <li className='font-bold text-lg cursor-pointer py-2'><Link to='/about'>About</Link></li>
                        <li className='font-bold text-lg cursor-pointer py-2'><Link to='/portfolio'>Portfolio</Link></li>
                        <li className='font-bold text-lg cursor-pointer py-2'><Link to='/organisations'>Organisations</Link></li>
                    </ul>
                </div>
            )}
                <ul className="hidden md:flex items-center">
                    <li className=' font-bold me-6 text-lg cursor-pointer'>About</li>
                    <li className=' font-bold me-6 text-lg cursor-pointer'><Link to='/potfolio'>Portfolio</Link></li>
                    <li className=' font-bold me-6 text-lg cursor-pointer'>Organisations</li>
                </ul>
            </div>
            <Link to='/'>
                <div className=' bg-black h-8 w-8 flex items-center justify-center rounded-full'>
                    <h1 className=' p-2 text-white font-bold text-2xl cursor-pointer'>D</h1>
                </div>
            </Link>

            <div>
                <button className=' bg-button-color px-2 rounded-lg font-bold'>Contact me</button>
            </div>


            {/*  */}

        </nav>
    )
}

export default Nav