import React from 'react';
import { useQuery } from "@tanstack/react-query";
import { RotateLoader } from 'react-spinners';
import { Helmet } from 'react-helmet-async';
const Instructor = () => {

    const {data: instructors = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['instructors'],
        queryFn: async() => {
            const res = await fetch('https://assignment-12-server-mahbubulalways.vercel.app/instructors');
            return res.json();
        }
    })

    if(loading){
      return <div className='flex justify-center py-32'><RotateLoader color="#000000"  size={15}/></div>
    }

    return (
       <div className='w-[80%] mx-auto py-8'>
                  <Helmet>
        <title>tunes | instructors</title>
      </Helmet>
      <h1 className='text-5xl text-center font-serif  font-extrabold pb-8 '>All <span className='text-red-700'> Instructors</span></h1>
      
         <div className=' mt-10  grid grid-cols-1 md:grid-cols-3 gap-8'>
            {
                instructors.map((instructor)=><div key={instructor._id} className="card w-full bg-base-100 shadow-xl">
                <figure><img className='h-56' src={instructor.instructorImg}  /></figure>
                <div className="card-body py-8">
                  <h2 className="card-title">{instructor.instructorName}</h2>
                  <p>{instructor.email}</p>
                  
                </div>
              </div>)

            }
        </div>
       </div>
    );
};

export default Instructor;