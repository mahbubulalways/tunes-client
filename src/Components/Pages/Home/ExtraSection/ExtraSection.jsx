import React from 'react';
import img1 from '../../../../assets/success/basi.jpg'
import img2 from '../../../../assets/success/drum.jpg'
import img3 from '../../../../assets/success/i35971642.webp'
import img4 from '../../../../assets/success/keyboard.jpg'
import img5 from '../../../../assets/success/piano.png'
import img6 from '../../../../assets/success/violin.webp'
import { MdPerson } from 'react-icons/md';

const ExtraSection = () => {

    const images =[img1,img2,img3,img4,img5,img6]
   

    return (
        <div className='w-[80%] mx-auto pb-16'>
            <p className='border-2 border-red-600 rounded-full  w-max mx-auto p-4'> <MdPerson className='text-red-700 h-8 w-8 mx-auto ' /></p>
              <h1 className='text-5xl font-serif text-center  font-extrabold pt-2 pb-6 '>Our Successful <span className='text-red-700'> Students</span></h1>
       
            
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-14'>
                {
                    images.map(image=><div>
                        <img className='h-56 w-full rounded-lg' src={image} alt="" />
                    </div>)
                }
            </div>
           
    
        </div>
    );
};

export default ExtraSection;