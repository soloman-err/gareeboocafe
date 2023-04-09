import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const RootLayout = () => {
    return (
        <>
            <Header></Header>
            <div className='min-h-[calc(100vh-96px)] md:min-h-[calc(100vh-132px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </>
    );
};

export default RootLayout;