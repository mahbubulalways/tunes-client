import React from 'react';
import Slider from '../Slider/Slider';
import PopularClass from '../PopularClass/PopularClass';
import PopularInstructor from '../PopularInstructor/PopularInstructor';

const Home = () => {
    return (
        <div>
         <Slider></Slider>
         <PopularClass></PopularClass>
         <PopularInstructor></PopularInstructor>
        </div>
    );
};

export default Home;