import React, { useContext, useEffect, useState } from 'react';
import ShowClasses from './ShowClasses';
import { RotateLoader } from 'react-spinners';
import { useQuery } from '@tanstack/react-query';
import useClasses from '../../hooks/useClasses';
const Classes = () => {
    // const [classes,setClass]=useState([])
  
    const [classes]=useClasses()

    // const {data: classes = [], isLoading: loading, refetch} = useQuery({
    //     queryKey: ['classes'],
    //     queryFn: async() => {
    //         const res = await fetch('http://localhost:6500/classes');
    //         return res.json();
    //     }

    // })


    // useEffect(()=>{
    //  fetch('http://localhost:6500/classes')
    //  .then(res=>res.json())
    //  .then(data=>{
    //     setClass(data)
    //     console.log(data);
    //  })
    // },[])


    if(classes.length===0){
        return <div className='flex justify-center py-32'><RotateLoader color="#000000"  size={15}/></div>
      }


    return (
        <div className='w-[80%] mx-auto'>
            <h1 className='text-4xl text-center font-serif py-10'>All Classes</h1>
           <div className='  grid grid-cols-1 md:grid-cols-3 gap-8'>
            {
                classes.map(cls=><ShowClasses
                key={cls._id}
                data={cls}
                
                ></ShowClasses>)
            }
        </div>
        </div>
       
    );
};

export default Classes;