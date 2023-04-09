import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHamburger, faX } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav className='flex flex-row-reverse md:flex-row justify-between bg-cyan-600 py-5 px-6 lg:px-36 font-bold md:text-xl text-white items-center'>
            <div className=''>
                <h1 className='font-extrabold md:text-2xl uppercase'>gareeboocafe</h1>
            </div>
            <div>
                <div className='text-2xl md:hidden' onClick={() => setOpen(!open)}>
                    <span>{open === true ?
                        <FontAwesomeIcon icon={faX} />
                        :
                        < FontAwesomeIcon icon={faHamburger} />
                    }</span>
                </div>

                <div className='md:space-x-5 md:flex-row uppercase justify-center'>
                    <ul className={`absolute md:static flex flex-col md:flex-row duration-300 bg-cyan-600 md:bg-transparent py-5 space-y-3 md:space-y-0 gap-4 px-5 ${open ? 'left-0' : '-left-52'}`}>
                        <Link to='/'>Home</Link>
                        <Link to='/cart'>Cart</Link>
                        <Link to='/blog'>Blog</Link>
                        <Link to='/contact'>Contact</Link>
                        <Link to='/about'>About</Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;