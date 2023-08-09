import React from 'react';
import { FaGuitar, FaMusic } from 'react-icons/fa';
import guitar from '../../../../assets/slider/guiter.jpg'
const OurOffer = () => {
    return (
        <div className='pt-20 w-[90%] mx-auto'>
            <p className='border-2 border-red-600 rounded-full  w-max mx-auto p-4'> <FaGuitar className='text-red-700 h-8 w-8 mx-auto ' /></p>
            <p className='text-red-700 font-serif text-center pt-2 text-xl'>What We Offer</p>
            <h1 className='text-5xl font-serif text-center pt-2  font-extrabold pb-16 '>All Level Classes  <span className='text-red-700'> Guitar Lessons
            </span></h1>
            <div className='grid grid-cols-1 md:grid-cols-3 items-center mt-12 gap-10'>
                <div className='space-y-8'>
                    <div className='flex items-center gap-3'>
                        <div className='text-end'>
                            <h1 className='text-red-700 text-3xl font-semibold'>Online Class</h1>
                            <p className=''>Dis malesuada condimentum nisl fringilla amet himenaeos justo at purus suscipit</p>
                        </div>
                        <p className='border-2 border-red-700 bg-red-700 rounded-full  w-max mx-auto p-4'> <FaMusic className='text-white h-8 w-8 mx-auto ' /></p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <div className='text-end'>
                            <h1 className='text-red-700 text-3xl font-semibold'>Pre-School</h1>
                            <p className=''>Dis malesuada condimentum nisl fringilla amet himenaeos justo at purus suscipit</p>
                        </div>
                        <p className='border-2 border-red-700 bg-red-700 rounded-full  w-max mx-auto p-4'> <FaMusic className='text-white h-8 w-8 mx-auto ' /></p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <div className='text-end'>
                            <h1 className='text-red-700 text-3xl font-semibold'>Rookies</h1>
                            <p className=''>Dis malesuada condimentum nisl fringilla amet himenaeos justo at purus suscipit</p>
                        </div>
                        <p className='border-2 border-red-700 bg-red-700 rounded-full  w-max mx-auto p-4'> <FaMusic className='text-white h-8 w-8 mx-auto ' /></p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <div className='text-end'>
                            <h1 className='text-red-700 text-3xl font-semibold'>Teenagers</h1>
                            <p className=''>Dis malesuada condimentum nisl fringilla amet himenaeos justo at purus suscipit</p>
                        </div>
                        <p className='border-2 border-red-700 bg-red-700 rounded-full  w-max mx-auto p-4'> <FaMusic className='text-white h-8 w-8 mx-auto ' /></p>
                    </div>
                </div>

                <div>
                    <img src={guitar} alt="" />
                </div>
                <div className='space-y-8'>



                    <div className='flex items-center gap-3'>
                        <p className='border-2 border-red-700 bg-red-700 rounded-full  w-max mx-auto p-4'> <FaMusic className='text-white h-8 w-8 mx-auto ' /></p>
                        <div className=''>
                            <h1 className='text-red-700 text-3xl font-semibold'>Adult Program</h1>
                            <p className=''>Dis malesuada condimentum nisl fringilla amet himenaeos justo at purus suscipit</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <p className='border-2 border-red-700 bg-red-700 rounded-full  w-max mx-auto p-4'> <FaMusic className='text-white h-8 w-8 mx-auto ' /></p>
                        <div className=''>
                            <h1 className='text-red-700 text-3xl font-semibold'>Song Writing</h1>
                            <p className=''>Dis malesuada condimentum nisl fringilla amet himenaeos justo at purus suscipit</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <p className='border-2 border-red-700 bg-red-700 rounded-full  w-max mx-auto p-4'> <FaMusic className='text-white h-8 w-8 mx-auto ' /></p>
                        <div className=''>
                            <h1 className='text-red-700 text-3xl font-semibold'>Home Band</h1>
                            <p className=''>Dis malesuada condimentum nisl fringilla amet himenaeos justo at purus suscipit</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <p className='border-2 border-red-700 bg-red-700 rounded-full  w-max mx-auto p-4'> <FaMusic className='text-white h-8 w-8 mx-auto ' /></p>
                        <div className=''>
                            <h1 className='text-red-700 text-3xl font-semibold'>Pro Player</h1>
                            <p className=''>Dis malesuada condimentum nisl fringilla amet himenaeos justo at purus suscipit</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurOffer;




