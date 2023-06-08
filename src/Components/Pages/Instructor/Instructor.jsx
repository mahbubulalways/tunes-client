import React from 'react';
import { useQuery } from "@tanstack/react-query";
const Instructor = () => {

    const {data: instructors = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['menu'],
        queryFn: async() => {
            const res = await fetch('../../../../public/fakedata.json');
            return res.json();
        }
    })
    console.log(instructors);
    return (
        <div className='w-[80%] mx-auto  grid grid-cols-1 md:grid-cols-3 gap-8'>
            {
                instructors.map((instructor,index)=><div key={index} className="card w-full bg-base-100 shadow-xl">
                <figure><img src={instructor.image} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">{instructor.name}</h2>
                  <p>{instructor.email}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>)

            }
        </div>
    );
};

export default Instructor;