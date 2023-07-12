import React from 'react';
import './ParallaxBanner.css';
import backGroundImage from '../../../assets/home/chef-service.jpg';

const ParallaxBanner = () => {
    return (
        <>

            <div className='bannerParallax mb-12'>
                <div className='text-center md:p-56'>
                    <div className='md:bg-white md:bg-opacity-80'>
                        <h1 className=' text-5xl font-normal mb-2'>Bistro Boss</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A delectus officiis sit laudantium voluptatum corporis eveniet quidem corrupti eos eligendi est illum exercitationem libero, expedita molestias quis! Totam, nulla. Voluptatem.</p>
                    </div>
                </div>
            </div>

        </>
    );
};

export default ParallaxBanner;