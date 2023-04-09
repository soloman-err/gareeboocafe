import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='text-center bg-cyan-500 text-white font-bold uppercase'>
            <small className=''>Copyright &copy;
                <Link to='/'>Gareeboocafe</Link>
            </small>
        </div>
    );
};

export default Footer;