import React, { useContext, useEffect, useState } from 'react';
import ShowClasses from './ShowClasses';
import { RotateLoader } from 'react-spinners';
import { useQuery } from '@tanstack/react-query';
import useClasses from '../../hooks/useClasses';
import { Helmet } from 'react-helmet-async';
const Classes = () => {
const [classes]=useClasses()
const approvedClasses=classes.filter(eachClass=>eachClass.status==='approve')
    if(classes.length===0){
        return <div className='flex justify-center py-32'><RotateLoader color="#000000"  size={15}/></div>
      }


    return (
        <div className='w-[80%] mx-auto py-8'>
                 <Helmet>
        <title>tunes | classes</title>
      </Helmet>
      <h1 className='text-5xl text-center font-serif  font-extrabold  pb-8'>All <span className='text-red-700'> Classes</span></h1>
      
       
           <div className='  grid grid-cols-1 md:grid-cols-3 gap-8'>
            {
                approvedClasses.map(cls=><ShowClasses
                key={cls._id}
                data={cls}
                
                ></ShowClasses>)
            }
        </div>
        </div>
       
    );
};

export default Classes;