import React from 'react';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

const About = () => {
    return (
        <div className='text-center my-20'>
            <img className='w-32 mx-auto my-5' src="/cafe-ceo.png" alt="" />
            <h1 className='text-xl font-bold uppercase text-slate-600 underline'>About us</h1>
            <small className='text-slate-500 my-5'><span className='font-bold'>Gareeboocafe</span> is one of the most gareeb cafe in the south-east sky.</small>

            <div>
                <Player
                    autoplay
                    loop
                    src="https://assets9.lottiefiles.com/packages/lf20_6efbhc0k.json"
                    style={{ height: '300px', width: '300px' }}
                >
                    <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                </Player>
            </div>
        </div>
    );
};

export default About;