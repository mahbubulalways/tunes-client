import React from 'react';
import Slider from '../Slider/Slider';
import PopularClass from '../PopularClass/PopularClass';
import PopularInstructor from '../PopularInstructor/PopularInstructor';
import ExtraSection from '../ExtraSection/ExtraSection';
import { Helmet } from 'react-helmet-async';
import AboutSchool from '../ExtraSection/AboutSchool';
import Testimonial from '../ExtraSection/Testimonial';
import OurOffer from '../ExtraSection/OurOffer';

const Home = () => {
    return (
        <div>
            <Helmet>
        <title>tunes | home</title>
      </Helmet>
         <Slider></Slider>
         <PopularClass></PopularClass>
         <PopularInstructor></PopularInstructor>
         <ExtraSection></ExtraSection>
         <AboutSchool></AboutSchool>
         <OurOffer></OurOffer>
         <Testimonial></Testimonial>
        </div>
    );
};

export default Home;