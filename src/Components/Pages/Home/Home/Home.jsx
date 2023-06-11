import React from 'react';
import Slider from '../Slider/Slider';
import PopularClass from '../PopularClass/PopularClass';
import PopularInstructor from '../PopularInstructor/PopularInstructor';
import ExtraSection from '../ExtraSection/ExtraSection';

const Home = () => {
    return (
        <div>
         <Slider></Slider>
         <PopularClass></PopularClass>
         <PopularInstructor></PopularInstructor>
         <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;