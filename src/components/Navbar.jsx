import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TbBrandNeteaseMusic } from 'react-icons/tb';
import { FaLinkedinIn, FaGithub, FaCertificate, FaPauseCircle, FaPlay, FaRedoAlt } from 'react-icons/fa';

import { SectionWrapper } from '../hoc';
import { timerLimit } from '../constant';

const Navbar = () => {

    const [active, setActive] = useState('');
    const [timer, setTimer] = useState(0);
    const [showTimerIcon, setShowTimerIcon] = useState(true);
    const [play, setPlay] = useState(true);

    useEffect(() => {
        console.log("use effect running play",play,timer);
        let timerId;
        if(timer>0 && play) {
            setTimeout(() => {                
                timerId = setTimer(timer-1);
            }, 1000);
        } else if (timer==0) {
            setShowTimerIcon(true);
        }
        return () => clearTimeout(timerId);
    }, [timer, play]);

    const handleTimer = () => {
        setShowTimerIcon(false);
        setPlay(true);        
        setTimer(timerLimit);        
    }

    const handleReset = () => {        
        setTimer(0);
        setShowTimerIcon(true);
        setPlay(false);        
    }

    const handlePlay = () => {
        if(play) {
            setPlay(false);            
            return;            
        }
        if(timer==0) {
            setTimer(timerLimit);
        }
        setPlay(true);
    }

    const formatTime = (timer) => {
        const minute = Math.floor(timer/60); // minutes 
        const seconds = timer%60 // seconds 
        return `${minute.toString().padStart(2,'0')} : ${seconds.toString().padStart(2,'0')}`;
    }
 

  return (    
        <nav className="w-full h-[60px] flex items-center py-5 top-0">
            <div className="w-full flex justify-between items-center">
                <div className="flex justify-between items-center">
                    <Link
                        to="/"
                        onClick={() => {
                            setActive("");
                            window.scrollTo(0, 0);
                        }}
                    >
                        <img 
                            src='./cafelofi.png'
                            className='w-15 h-10'                    
                        />                
                    </Link>
                </div>
                <div className=''>
                    {showTimerIcon ? (
                        <div className='flex items-center' onClick={handleTimer}>
                            <FaCertificate className='h-5 w-auto text-red-700'/>
                        </div>
                    ) : (
                        <div>
                            <span className='text-white '>{formatTime(timer)}</span>
                            <div className='mt-2 flex flex-row'>
                                <div className='mr-1' onClick={handlePlay}>
                                    {play ? (                                                                        
                                        <FaPauseCircle className='h-5 w-auto text-purple'/>  
                                    ) : (                                        
                                        <FaPlay className='h-5 w-auto text-purple'/>                              
                                    )}
                                </div>
                                <div className='ml-1' onClick={handleReset}>
                                    <FaRedoAlt className='h-5 w-auto text-purple'/>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className='flex flex-row'>        
                    <div>
                        <a href='https://www.linkedin.com/in/gaurav-ruhela-3419a8153/' target='_blank' rel='noreferrer'>
                            <FaLinkedinIn 
                                className='h-7 w-auto  rounded-md p-1 bg-white'
                            />
                        </a> 
                    </div>       
                    <div className='mx-3'>
                        <a href='https://github.com/gauravruhela07' target='_blank' rel='noreferrer'>
                            <FaGithub 
                                className='h-7 w-auto  rounded-md p-1 bg-white'
                            />
                        </a>
                    </div>        
                </div>
            </div>
        </nav>    
  )
}

export default SectionWrapper(Navbar);