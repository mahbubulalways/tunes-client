import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { FaQuoteRight } from 'react-icons/fa';

// import required modules
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

import { Rating, Star } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import testimonial from '../../../../data/testimonial';
const Testimonial = () => {

  const [preview, setPreview] = useState(5)

  useEffect(() => {
    const swipePreview = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth <= 767) {
        setPreview(1)

      }
      else if (windowWidth <= 980) {
        setPreview(3) 
      }
      else {
        setPreview(3)
      }

    }


    swipePreview();

    // Call the updateSwiper function whenever the window is resized
    window.addEventListener('resize', swipePreview);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', swipePreview);
    };

  }, [])

  const myStyles = {
    itemShapes: Star,
    activeFillColor: '#750632',
    inactiveFillColor: '#9aab9d'
  }
  return (
    <div className='w-[80%] mx-auto pt-20'>
      <p className='border-2 border-red-600 rounded-full  w-max mx-auto p-4'> <FaQuoteRight className='text-red-700 h-8 w-8 mx-auto ' /></p>
      <h1 className='text-5xl font-serif text-center  font-extrabold pt-2 pb-14 '>Testi<span className='text-red-700'>monials</span></h1>
      <Swiper
                slidesPerView={preview}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                
                
                modules={[Autoplay,  Navigation]}
                className="mySwiper h-auto"
              >
                {
          testimonial.map(({ img, text, name, rating }, index) => <div key={index}>
            <SwiperSlide >
              <div className='border-2 mb-12   space-y-2 rounded-xl'>
                <img src={img} alt="" />
                <Rating className='mx-auto' style={{ maxWidth: 180 }} value={rating} readOnly itemStyles={myStyles} />
                <div className='p-4'>
                <p className='text-justify'>{text}</p>
                <h1 className='text-2xl text-center pt-2 font-semibold'> {name}</h1>

                </div>
             
              </div>
            </SwiperSlide>
          </div>)
        }
                
              </Swiper>
    </div>

  );
};

export default Testimonial;


{/* <Rating className='mx-auto' style={{ maxWidth: 180 }} value={rating} readOnly itemStyles={myStyles} /> */}



{/* <Swiper
        slidesPerView={preview}

        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"

      >
        {
          testimonial.map(({ img, text, name, rating }, index) => <div key={index}>
            <SwiperSlide >
              <div className='border-2 mb-12 p-4  space-y-2 rounded-xl'>
                <img src={img} alt="" />
                <Rating className='mx-auto' style={{ maxWidth: 180 }} value={rating} readOnly itemStyles={myStyles} />
                <p className='text-justify'>{text}</p>
                <h1 className='text-3xl text-center  font-bold'> {name}</h1>
                <h1 className='text-lg text-center font-semibold text-red-700'>Happy Customer</h1>
              </div>
            </SwiperSlide>
          </div>)
        }


      </Swiper> */}