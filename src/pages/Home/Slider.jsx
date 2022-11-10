import React, { useEffect } from 'react';
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Pagination } from "swiper";
// https://i.ibb.co/frypVcQ/1.png
// https://i.ibb.co/GMQgMQF/2.png
// 
// https://i.ibb.co/Zmx1fRv/4.png
// https://i.ibb.co/jrjWQkR/5.png
// https://i.ibb.co/kSXPQXK/leravel.png
// https://i.ibb.co/MGH6Bzz/mysql.jpg
// https://i.ibb.co/HqPP9Zt/php.png
// https://i.ibb.co/sq7wryb/react.jpg
// https://i.ibb.co/SBHzQ69/rnative.jpg
// https://i.ibb.co/Hhnrs0d/taiwind.jpg
const Slider = () => {
    function Example() {
        useEffect(() => {
          document.title = 'My Page Title';
        }, []);
      }
      
    return (
        <div className='bg-[#2828c2] pt-34 px-3 md:px-0 text-center'>
            <div className='text-gray-50'>
                <h2 className='text-5xl pt-10'>
                Learning that gets you
                </h2>
                <h4 className='text-lg py-5 '>Skills for your present (and your future). Get started with us.</h4>
                <button className=' border rounded-md px-5 py-2 mb-5 inline-block'>Contact for any information</button>
            </div>
            <div className='slider pb-10'>
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
                        <SwiperSlide>
                            <img src="https://i.ibb.co/wR5bGR9/1.png" alt="img" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://i.ibb.co/sg67WjG/2.png" alt="img" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://i.ibb.co/V2nLHZn/3.png" alt="img" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://i.ibb.co/80dCmnv/5.png" alt="img" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://i.ibb.co/hdvGHk2/4.png" alt="img" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://i.ibb.co/V2nLHZn/3.png" alt="img" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://i.ibb.co/yVFTbQw/6.png" alt="img" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://i.ibb.co/CVgYxV9/3.png" alt="img" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://i.ibb.co/GMQgMQF/2.png" alt="img" />
                        </SwiperSlide>
                    </div>
                </Swiper>
            </div>
        </div >
    );
};

export default Slider;

// https://prnt.sc/1UGR9lnqjaN5
// https://prnt.sc/58VD49DWMG4i