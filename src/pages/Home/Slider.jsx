import React from 'react';
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Slider = () => {
    return (
        <div className='bg-gray-900 pt-34 px-3 md:px-0 text-center'>
            <div className='text-gray-50'>
                <h2 className='text-5xl pt-10'>
                    Popular Courses
                </h2>
                <h4 className='text-lg py-5 '>During the whole month of November,<br /> essiun school courses can be done at a more economical price!</h4>
                <button className=' border border-red-400 rounded-md px-5 py-2 mb-5 inline-block'>Contact for any information regarding the course</button>
            </div>
            <div className='slider'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <div className='px-5 md:px-0'>
                        <SwiperSlide>Slide 1</SwiperSlide>
                        <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide>
                        <SwiperSlide>Slide 5</SwiperSlide>
                        <SwiperSlide>Slide 6</SwiperSlide>
                        <SwiperSlide>Slide 7</SwiperSlide>
                        <SwiperSlide>Slide 8</SwiperSlide>
                        <SwiperSlide>Slide 9</SwiperSlide>
                    </div>
                </Swiper>
            </div>
        </div >
    );
};

export default Slider;