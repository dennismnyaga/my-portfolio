import React from 'react'
import myPic from '../media/images/me.jpg'
import { FaPython, FaReact, FaArrowRight } from "react-icons/fa";
import { SiJavascript, SiPandas } from "react-icons/si";
import { TbBrandDjango } from "react-icons/tb";
import { VscDebugRestartFrame } from "react-icons/vsc";
import { RiTailwindCssFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { DiRedis } from "react-icons/di";

const PersonalDetails = () => {
    return (
        <div className='px-4 md:px-6 overflow-hidden'>
            <div className='flex flex-col-reverse md:flex-row-reverse items-center md:justify-between'>
                <div className='mt-8 w-full md:w-1/3 relative flex justify-center'>
                    <img className='w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 object-cover rounded-full' src={myPic} alt='me' />
                    <div className='bg-yellow absolute bottom-2 sm:bottom-4 left-1/4 p-1 rounded-xl'>
                        <h5 className='text-white text-center font-extrabold text-sm'>
                            <span>5+</span> years
                        </h5>
                    </div>
                </div>
                <div className='mt-8 w-full md:w-2/3'>
                    <h1 className='text-3xl sm:text-5xl font-bold'>My name is Dennis</h1>
                    <p className='mt-2 text-base md:text-lg'>Software development expert with over 5 years of experience.</p>
                    <Link to='/contact'>
                        <button className='bg-yellow text-white font-bold px-3 py-1 rounded mt-3'>Hire me</button>
                    </Link>
                </div>
            </div>

            <div className='mt-6'>
                <h1 className='font-bold text-lg'>Skills:</h1>
                <div className='flex flex-wrap gap-1'>
                    <SkillBadge icon={<FaPython />} label="Python" />
                    <SkillBadge icon={<SiJavascript />} label="JavaScript" />
                    <SkillBadge icon={<TbBrandDjango />} label="Django" />
                    <SkillBadge icon={<VscDebugRestartFrame />} label="Django Rest" />
                    <SkillBadge icon={<FaReact />} label="React js" />
                    <SkillBadge icon={<FaReact />} label="Next js" />
                    <SkillBadge icon={<RiTailwindCssFill />} label="Tailwind CSS" />
                    <SkillBadge icon={<SiPandas />} label="Pandas" />
                    <SkillBadge icon={<DiRedis />} label="Redis" />
                </div>
            </div>

            <div className='mt-6'>
                <Link className='flex items-center text-lg font-bold' to='/portfolio'>
                    View Portfolio <FaArrowRight className='ml-1' />
                </Link>
            </div>
        </div>
    )
}

const SkillBadge = ({ icon, label }: { icon: any; label: any }) => (
    <div className='flex items-center px-2 py-1 cursor-pointer bg-skill-color rounded-md'>
        {icon}
        <span className='ml-1 text-sm font-bold'>{label}</span>
    </div>
);

export default PersonalDetails;
