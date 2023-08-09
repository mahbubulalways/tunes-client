import React from 'react';
import guiter from '../../../../assets/slider/guitar-1.jpg'
import dram from '../../../../assets/slider/dram.jpg'
import violin from '../../../../assets/slider/keyboad.jpg'
import './Slider.css'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from 'react-router-dom';
const Slider = () => {
  const instruments = [
    {
      img: violin,
      id: 2,
      text1: 'Learn to Play The  ',
      text2: 'Piano Easy Way '
    },
    {
      img: guiter,
      id: 1,
      text1: 'Learn to Play The  ',
      text2: 'Guitar Easy Way '
    },
    {
      img: dram,
      id: 2,
      text1: 'Learn to Play The  ',
      text2: 'Dram Easy Way '
    },


  ]

  return (
    <div className=''>
      <div >
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}

          modules={[Autoplay, Navigation]}
          className="mySwiper h-auto "
        >
          {
            instruments.map(instrument => <SwiperSlide key={instrument.id}>

              <div style={{ backgroundImage: `url(${instrument.img})` }} className='bgImg h-full'>
                <div className='flex justify-center items-center h-screen'>
                  <div className='  px-10 py-5 rounded-2xl'>
                    <h1 className='text-4xl md: 5xl lg:text-7xl text-center uppercase text-[#e9ef8c] font-semibold '>{instrument.text1}</h1>
                    <h1 className='text-4xl md: 5xl lg:text-7xl uppercase text-center text-[#f1f3f0]  font-semibold mt-5'>{instrument.text2}</h1>
                   <div className='flex justify-center mt-5'>
                   <Link to={'/classes'}><button className='text-center bg-yellow-500 text-xl px-7 py-2 font-bold rounded-md '> Learn More</button></Link>
                   </div>
                  </div>
                </div>

              </div>
            </SwiperSlide>)
          }

        </Swiper>
      </div>
    </div>
  );
};

export default Slider;