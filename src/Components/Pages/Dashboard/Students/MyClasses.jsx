import React, { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../Provider/AuthProvider';
import {  TrashIcon } from '@heroicons/react/24/solid'
const MyClasses = () => {
    const {users,loading}=useContext(AuthContext)
    const [data,setData]=useState([])
    const axiosSecure=useAxiosSecure()
    useEffect(() => {
        axiosSecure.get(`/myClass?email=${users?.email}`)
        .then((data) => {
          console.log(data?.data);
          setData(data?.data);
        });
      }, [ axiosSecure]);
    console.log(data);

    


    return (
        <div className='w-[90%] mx-auto p-8'>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Image</th>
        <th>Name</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      
      {
        data.map((item,index)=><tr key={item._id}>
            <th>{index+1}</th>
            <td><img className='w-12' src={item.image} alt="" /></td>
            <td>{item.className}</td>
            <td>${item.price}</td>
            <td><button className=' bg-red-600 p-2 rounded-md'><TrashIcon className="h-6 w-6 text-white" /></button></td>
          </tr>)
      }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyClasses;