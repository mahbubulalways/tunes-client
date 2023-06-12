import React from 'react';
import Slider from '../Slider/Slider';
import PopularClass from '../PopularClass/PopularClass';
import PopularInstructor from '../PopularInstructor/PopularInstructor';
import ExtraSection from '../ExtraSection/ExtraSection';
import { Helmet } from 'react-helmet-async';

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
        </div>
    );
};

export default Home;