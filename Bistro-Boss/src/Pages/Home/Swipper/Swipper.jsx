import React from 'react';
import BannerTitle from '../../../Share/BannerTitle/BannerTitle';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Pagination } from "swiper";

/*Slider*/
import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';


const Swipper = () => {
    return (
        <div className='mb-20'>

            <BannerTitle title="From 11:00am to 10:00pm" heading="ORDER ONLINE">

            </BannerTitle>

            <>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={1}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={slide1} alt="" />
                        <p className=' uppercase text-4xl font-serif -mt-12 text-center'>SALAD</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide2} alt="" />
                        <p className=' uppercase text-4xl font-serif -mt-12 text-center'>PIZZA</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide3} alt="" />
                        <p className=' uppercase text-4xl font-serif -mt-12 text-center'>SOUP</p>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={slide4} alt="" />
                        <p className=' uppercase text-4xl font-serif -mt-12 text-center'>DESSERT</p>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={slide5} alt="" />
                        <p className=' uppercase text-4xl font-serif -mt-12 text-center'>SALAD</p>
                    </SwiperSlide>


                </Swiper>
            </>

        </div>
    );
};

export default Swipper;