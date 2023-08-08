import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

import { styles } from '../styles';

const Navbar = () => {

    const [active, setActive] = useState('');

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 top-0 z-10`}>
        <div className="flex flex-row w-full justify-between items-center max-w-7xl mx-auto">
            <Link
                to="/"
                onClick={() => {
                    setActive("");
                    window.scrollTo(0, 0);
                }}
            >
                <img 
                    src='./cafelofi.png'
                    className='w-15 h-10 object-contain'                    
                />                
            </Link>
            <p>Timer</p>
            <div className='flex flex-row justify-between w-20'>                
                <a href='https://www.linkedin.com/in/gaurav-ruhela-3419a8153/' target='_blank' rel='noreferrer'>
                    <FaLinkedinIn 
                        className='h-7 w-auto  rounded-md p-1 bg-white'
                    />
                </a>                
                <a href='https://github.com/gauravruhela07' target='_blank' rel='noreferrer'>
                    <FaGithub 
                        className='h-7 w-auto  rounded-md p-1 bg-white'
                    />
                </a>
            </div>
        </div>
    </nav>
  )
}

export default Navbar