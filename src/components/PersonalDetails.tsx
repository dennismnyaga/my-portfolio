import React from 'react'
import myPic from '../media/images/me.jpg'
import { FaPython } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { TbBrandDjango } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { VscDebugRestartFrame } from "react-icons/vsc";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiPandas } from "react-icons/si";
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";

const PersonalDetails = () => {
    return (
        <div className='px-4 md:px-8'>
            {/* Flex container for image and text */}
            <div className='flex flex-col-reverse md:flex-row-reverse items-center md:justify-between'>
                {/* Image section */}
                <div className='mt-10 md:mt-16 w-full md:w-1/3 relative'>
                    <img className='w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-80 object-fit rounded-full mx-auto' src={myPic} alt='me' />
                    <div className='bg-yellow rounded-3xl absolute bottom-[-10px] sm:bottom-[10px] left-10 transform -translate-x-1/2 p-2'>
                        <h5 className='text-white text-center px-0.5 font-extrabold text-lg sm:text-xl'>
                            <span className='font-extrabold'>5+</span> <br /> years experience
                        </h5>
                    </div>
                </div>

                {/* Text section */}
                <div className='mt-10 md:mt-20 w-full md:w-1/2 md:order-2'>
                    <h1 className='text-name-color text-4xl sm:text-6xl md:text-9xl font-extrabold'>
                        My name <br /> is Dennis
                    </h1>
                    <p className='mt-3 font-bold text-base md:text-lg'>
                        I am an expert in software development <br /> with more than 5 years of experience
                    </p>
                    <button className='bg-yellow text-white font-bold px-4 py-2 rounded-lg mt-5 md:mt-1'>
                        Hire me
                    </button>
                </div>
            </div>

            {/* Skills section */}
            <div className='mt-8'>
                <h1 className='font-extrabold text-xl mb-1'>Skills:</h1>
                <div className='flex flex-wrap gap-2'>
                    <div className='cursor-pointer flex space-x-1 px-2 py-0.5 justify-center items-center bg-skill-color rounded-lg'>
                        <FaPython className='text-python-color' />
                        <h6 className='text-white font-bold'>Python</h6>
                    </div>
                    <div className='cursor-pointer flex space-x-1 px-2 py-0.5 justify-center items-center bg-skill-color rounded-lg'>
                        <SiJavascript className='text-yellow' />
                        <h6 className='text-white font-bold'>JavaScript</h6>
                    </div>
                    <div className='cursor-pointer flex space-x-1 px-2 py-0.5 justify-center items-center bg-skill-color rounded-lg'>
                        <TbBrandDjango className='text-django-color' />
                        <h6 className='text-white font-bold'>Django</h6>
                    </div>
                    <div className='cursor-pointer flex space-x-1 px-2 py-0.5 justify-center items-center bg-skill-color rounded-lg'>
                        <VscDebugRestartFrame className='text-django-color' />
                        <h6 className='text-white font-bold'>Django Rest Framework</h6>
                    </div>
                    <div className='cursor-pointer flex space-x-1 px-2 py-0.5 justify-center items-center bg-skill-color rounded-lg'>
                        <FaReact className='text-react-color' />
                        <h6 className='text-white font-bold'>React</h6>
                    </div>
                    <div className='cursor-pointer flex space-x-1 px-2 py-0.5 justify-center items-center bg-skill-color rounded-lg'>
                        <RiTailwindCssFill className='text-react-color' />
                        <h6 className='text-white font-bold'>Tailwind CSS</h6>
                    </div>
                    <div className='cursor-pointer flex space-x-1 px-2 py-0.5 justify-center items-center bg-skill-color rounded-lg'>
                        <SiPandas className='text-react-color' />
                        <h6 className='text-white font-bold'>Pandas</h6>
                    </div>
                </div>
            </div>

            {/* Portfolio link */}
            <div className='mt-8'>
                <Link className='cursor-pointer flex items-center text-2xl font-bold text-name-color' to='/portfolio'>
                    View Portfolio <FaArrowRight className='ml-2' />
                </Link>
            </div>
        </div>
    )
}

export default PersonalDetails;
