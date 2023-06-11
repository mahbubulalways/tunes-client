import React from 'react';
import { Link } from 'react-router-dom';
import facebook from '../../../../assets/icon/fb.png'
 import twitter from '../../../../assets/icon/twitter.png'
 import youtube from '../../../../assets/icon/youtube.png'
import logo from '../../../../assets/logo.png'
const Footer = () => {
    return (
        <div>
            <div className='bg-gray-700'>
            <div className=' w-[90%] mx-auto'>
            <div className='text-gray-300  py-12'>
           <div className=' grid grid-cols-2 md:grid-cols-3 gap-8 '>
           <div className=' '>
               <img className='w-16 ' src={logo} alt="" />
                <h1 className='text-2xl mt-2 font-semibold'>Tunes</h1>
                <div className='flex gap-3 mt-2 mx-auto items-center pt-2'>
                <Link> <img className='w-8 mx-auto'  src={facebook} alt="" /></Link>  
                <Link> <img className='w-8 mx-auto' src={twitter} alt="" /></Link>  
                <Link> <img className='w-8 mx-auto' src={youtube} alt="" /></Link>  
                </div>
             </div>
             
            <div className='flex flex-col space-y-1 mx-auto'>
                <h1 className='text-xl font-semibold'>About Us</h1>
             
                <Link>Learning</Link>
                <Link>Latest News</Link>
                <Link>Services</Link>
            </div>
            
            
            <div className='  space-y-1 '>
            <h1 className='text-xl font-semibold'>Contact</h1>
                <p>Dhanmondi 19 , Dhaka 1205</p>
                <p>+1 777 - 978 - 5570</p>
                
            </div>
           </div>
           <p className='text-center py-8 text-gray-200'>Copyright © 2023 - All right reserved</p>
        </div>
     
        </div>
       
        </div>
        </div>
    );
};

export default Footer;