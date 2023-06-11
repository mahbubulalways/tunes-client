import React from 'react';
import usePopular from '../../../hooks/usePopular';
import { RotateLoader } from 'react-spinners';
const PopularInstructor = () => {
    const[popular,loading]=usePopular()
    if(loading){
      return <div className='flex justify-center py-32'><RotateLoader color="#000000"  size={15}/></div>
    }
    return (
       
        <div className='w-[80%] mx-auto py-20'>
            <h1 className='text-center text-4xl font-serif'>Popular Instructors</h1>
            <div className='mt-16 grid grid-cols-1 gap-5 md:grid-cols-3 '>
            {
    popular.map(oneItem=><div key={oneItem._id} className='card bg-base-100 shadow-xl'>
    <figure className='bg-white'><img className='h-56' src={oneItem.instructorImg}  /></figure>
    <div className="card-body">
      <h2 className="card-title">{oneItem.instructorName}</h2>
      <p>{oneItem.className}</p>
      <p>Price : ${oneItem.price}</p>
     
    </div>
  </div>)
}
            </div>


            
        </div>
    );
};

export default PopularInstructor;