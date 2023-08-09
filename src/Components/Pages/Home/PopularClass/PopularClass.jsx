import React from 'react';
import usePopular from '../../../hooks/usePopular';
import { RotateLoader } from 'react-spinners';
import { MdClass } from 'react-icons/md';

const PopularClass = () => {
    const[popular,loading]=usePopular()
    if(loading){
      return <div className='flex justify-center py-32'><RotateLoader color="#000000"  size={15}/></div>
    }
    return (
       
        <div className='w-[80%] mx-auto mt-20'>
           <p className='border-2 border-red-600 rounded-full  w-max mx-auto p-4'> <MdClass className='text-red-700 h-8 w-8 mx-auto ' /></p>
             <h1 className='text-5xl text-center font-serif  font-extrabold pt-2 pb-6 '>Popular <span className='text-red-700'> Classes</span></h1>
           
            <div className='mt-16 grid grid-cols-1 gap-5 md:grid-cols-3 '>
            {
    popular.map(oneItem=><div key={oneItem._id} className={`card bg-base-100 shadow-xl ${oneItem.disable && 'bg-red-400'}`}>
    <figure className='bg-white'><img className='h-56' src={oneItem.image}  /></figure>
    <div className="card-body">
      <h2 className="card-title">{oneItem.className}</h2>
      <p>{oneItem.instructorName}</p>
      <p>Available Seats : {oneItem.availableSeats}</p>
      <p>Enroll : {oneItem.enroll}</p>
     
    </div>
  </div>)
}
            </div>


            
        </div>
    );
};

export default PopularClass;