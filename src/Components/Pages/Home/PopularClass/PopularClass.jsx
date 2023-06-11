import React from 'react';
import usePopular from '../../../hooks/usePopular';

const PopularClass = () => {
    const[popular]=usePopular()
  
    return (
       
        <div className='w-[80%] mx-auto mt-20'>
            <h1 className='text-center text-4xl font-serif'>Popular Classes</h1>
            <div className='mt-12 grid grid-cols-1 gap-5 md:grid-cols-3 '>
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