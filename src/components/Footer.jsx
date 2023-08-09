import React from 'react'
import { FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { BsFillCloudArrowUpFill, BsFillHeartFill } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className='flex flex-row justify-center items-center pb-10'>
        <span className='text-white mr-3'>Build with</span>
        <FaReact className='mr-3 text-[#1900ff]'/>
        <SiTailwindcss className='text-[#3f6de0] mr-3'/>
        <BsFillCloudArrowUpFill className='mr-3'/>
        <BsFillHeartFill className='text-[#fa0202] mr-3'/>
        <span className='text-white'>Gaurav Ruhela</span>
    </div>
  )
}

export default Footer