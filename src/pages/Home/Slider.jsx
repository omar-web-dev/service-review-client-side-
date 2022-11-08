import React from 'react';
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Slider = () => {
    return (
        <div className='bg-[#1818ca] pt-34 px-3 md:px-0 text-center'>
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
{/* https://i.ibb.co/wR5bGR9/1.png
https://i.ibb.co/sg67WjG/2.png
https://i.ibb.co/V2nLHZn/3.png
https://i.ibb.co/hdvGHk2/4.png
https://i.ibb.co/80dCmnv/5.png
https://i.ibb.co/yVFTbQw/6.png */}
                    <div className='px-5 md:px-0'>
                        <SwiperSlide>
                            <img src="https://esolz.net/wp-content/uploads/2021/04/PHP-Development-Technology.png" alt="img" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://esolz.net/wp-content/uploads/2021/04/PHP-Development-Technology.png" alt="img" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://esolz.net/wp-content/uploads/2021/04/PHP-Development-Technology.png" alt="img" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://esolz.net/wp-content/uploads/2021/04/PHP-Development-Technology.png" alt="img" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://esolz.net/wp-content/uploads/2021/04/PHP-Development-Technology.png" alt="img" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://esolz.net/wp-content/uploads/2021/04/PHP-Development-Technology.png" alt="img" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://esolz.net/wp-content/uploads/2021/04/PHP-Development-Technology.png" alt="img" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://esolz.net/wp-content/uploads/2021/04/PHP-Development-Technology.png" alt="img" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://esolz.net/wp-content/uploads/2021/04/PHP-Development-Technology.png" alt="img" />
                        </SwiperSlide>
                    </div>
                </Swiper>
            </div>
        </div >
    );
};

export default Slider;