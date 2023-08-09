import React from 'react';
import image from '../../../../assets/slider/guiterBg.jpg'
import student from '../../../../assets/slider/student.jpg'
import { FaSchool } from 'react-icons/fa';
const AboutSchool = () => {
    return (
        <div className='pt-5'>
                  <p className='border-2 border-red-600 rounded-full  w-max mx-auto p-4'> <FaSchool className='text-red-700 h-8 w-8 mx-auto ' /></p>
            <h1 className='text-5xl font-serif text-center pt-2  font-extrabold pb-16 '>About <span className='text-red-700'> School</span></h1>
            <div className='relative'>
                <img className='w-full h-[100vh] lg:h-[80vh] object-cover ' src={image} alt="" />
                <div className='bg-[#0c0a10]  absolute inset-0 bg-opacity-70 grid grid-cols-1 lg:grid-cols-2 justify-between items-center '>
                    <div className='space-y-0 lg:space-y-2  px-5 py-2 lg:px-20 lg:py-12 '>
                        <h1 className='text-yellow-300  text-lg lg:text-3xl font-semibold'>Our Classes</h1>
                        <h1 className='text-2xl lg:text-5xl font-extrabold text-white'>About School</h1>
                        <p className='text-yellow-300 lg:font-bold text-sm lg:text-2xl '>Integer in justo euismod nulla feugiat lacinia non porta velit. Vestibulum vulputate purus sit amet vestibulum ultrices mauris malesuada.</p>
                        <p className='pt-3 lg:pt-10 text-white text-sm md:text-xl '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elementum sem ligula. Phasellus eleifend vel justo sit amet volutpat. Duis vitae maximus ligula, nec mattis libero. Donec eget felis odio.</p>
                    </div>
                    <div className='w-max mx-auto md:bg-yellow-400 rounded-md'>
                        <img className='w-full mx-auto relative  md:right-8 md:bottom-8 rounded-md' src={student} alt="" />
                    </div>
                </div>
            </div>
            <div className='bg-yellow-400 grid grid-cols-2 lg:grid-cols-4  gap-4 py-8'>
                <div>
                    <h1 className='text-7xl text-center font-bold text-white'>27</h1>

                    <p className='text-violet-950 text-3xl text-center font-semibold'>Professional</p>
                    <p className='text-2xl font-semibold text-center  text-red-500'>teachers</p>
                </div>
                <div>
                    <h1 className='text-7xl text-center font-bold text-white'>54</h1>

                    <p className='text-violet-950 text-3xl text-center font-semibold'>
                        Learning</p>
                    <p className='text-2xl font-semibold text-center  text-red-500'>groups</p>
                </div>
                <div>
                    <h1 className='text-7xl text-center font-bold text-white'>590</h1>

                    <p className='text-violet-950 text-3xl text-center font-semibold'>
                        Happy
                    </p>
                    <p className='text-2xl font-semibold text-center  text-red-500'>students</p>
                </div>
                <div>
                    <h1 className='text-7xl text-center font-bold text-white'>8</h1>

                    <p className='text-violet-950 text-3xl text-center font-semibold'>
                        Music

                    </p>
                    <p className='text-2xl font-semibold text-center  text-red-500'>classes</p>
                </div>
            </div>
        </div>
    );
};

export default AboutSchool;