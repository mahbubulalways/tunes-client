import React from 'react';
import guiter from '../../../../assets/slider/guiter1.jpg'
import dram from '../../../../assets/slider/dram1.jpg'
import violin from '../../../../assets/slider/violin.jpg'
import './Slider.css'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
const Slider = () => {
const instruments=[
    {
        img:guiter,
        id:1
    },
    {
        img:dram,
        id:2
    },
    {
        img:violin,
        id:2
    },

]

    return (
        <div className=''>
        <div >
                     <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper h-auto"
              >
                {
                    instruments.map(instrument=><SwiperSlide key={instrument.id}>
        
                         <div style={{backgroundImage:`url(${instrument.img})`}} className='bgImg h-full'>
                         
                         
                         </div>
                        </SwiperSlide>)
                }
                
              </Swiper>
                </div>
                </div>
    );
};

export default Slider;