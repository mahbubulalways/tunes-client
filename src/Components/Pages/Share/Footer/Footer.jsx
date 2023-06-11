import React from 'react';
import { Link } from 'react-router-dom';
// import facebook from '../../../images/fb.png'
//  import twitter from '../../../images/twitter.png'
//  import youtube from '../../../images/youtube.png'
const Footer = () => {
    return (
        <div>
            <div className='bg-black'>
            <div className=' w-[90%] mx-auto'>
            <div className='text-gray-300  py-12'>
           <div className=' grid grid-cols-2 md:grid-cols-4 gap-8 '>
           <div className='space-y-3'>
                <h1 className='text-2xl font-semibold'>RecipeZone</h1>
                <p>Roman recipes are known starting in the 2nd century BCE with Cato the Elder's De Agri Cultura. Many authors of this period described eastern </p>
                
            </div>
            <div className='flex flex-col space-y-1 mx-auto'>
                <h1 className='text-xl font-semibold'>Restaurant </h1>
                <Link>About Us</Link>
                <Link>Work</Link>
                <Link>Latest News</Link>
                <Link>Services</Link>
            </div>
            
            <div className='flex flex-col  space-y-1 mx-auto '>
                <h1 className='text-xl font-semibold'>Opening Times</h1>
                <Link>Monday - Thursday: 08AM - 10PM</Link>
                <Link>Friday - Saturday: 10AM - 11:30PM</Link>
                <Link>Sunday: Closed</Link>
                <Link>Booking TIme: 24/7 Hours</Link>
            </div>
            <div className=' space-y-1 mx-auto'>
            <h1 className='text-xl font-semibold'>Contact</h1>
                <p>524 Broadway , NYC</p>
                <p>+1 777 - 978 - 5570</p>
                <div className='flex gap-3 items-center pt-2'>
                {/* <Link> <img src={facebook} alt="" /></Link>  
                <Link> <img src={twitter} alt="" /></Link>  
                <Link> <img src={youtube} alt="" /></Link>   */}
                </div>
            </div>
           </div>
          
        </div>
        <div className='border-t-2 '>
        <div className='text-gray-300  flex justify-between py-12'>
        <h1 className=''>@2023 RecipeZone</h1>
        <h1>Powered by RecipeZone</h1>
        </div>

        </div>
        </div>
        </div>
        </div>
    );
};

export default Footer;