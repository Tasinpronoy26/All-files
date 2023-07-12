import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

/*Images*/
import CarouselImage1 from '../../../assets/home/01.jpg';
import CarouselImage2 from '../../../assets/home/02.jpg';
import CarouselImage3 from '../../../assets/home/03.png';
import CarouselImage4 from '../../../assets/home/04.jpg';
import CarouselImage5 from '../../../assets/home/05.png';
import CarouselImage6 from '../../../assets/home/06.png';

const CarouselBanner = () => {
    return (
        <Carousel className='text-center'>
            <div>
                <img src={CarouselImage1} />
            </div>
            <div>
                <img src={CarouselImage2} />
            </div>
            <div>
                <img src={CarouselImage3} />
            </div>
            <div>
                <img src={CarouselImage4} />
            </div>
            <div>
                <img src={CarouselImage5} />
            </div>
            <div>
                <img src={CarouselImage6} />
            </div>

        </Carousel>
    );
};

export default CarouselBanner;