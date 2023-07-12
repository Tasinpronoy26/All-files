import React from 'react';
import CarouselBanner from './CarouselBanner/CarouselBanner';
import Swipper from './Swipper/Swipper';
import ParallaxBanner from './ParallaxBanner/ParallaxBanner';

const Home = () => {
    return (
        <div>

            <CarouselBanner></CarouselBanner>
            <Swipper></Swipper>
            <ParallaxBanner></ParallaxBanner>

        </div>
    );
};

export default Home;