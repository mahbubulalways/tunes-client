import React from 'react';
import { useQuery } from "@tanstack/react-query";
import { Link } from 'react-router-dom';
const Instructor = () => {

    const {data: instructors = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['instructors'],
        queryFn: async() => {
            const res = await fetch('http://localhost:6500/instructors');
            return res.json();
        }
    })

    return (
       <div className='w-[80%] mx-auto py-16'>
        <h1 className='text-center text-4xl font-serif'>All Instructors</h1>
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