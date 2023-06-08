import React, { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../Provider/AuthProvider';
import {  TrashIcon } from '@heroicons/react/24/solid'
import Swal from 'sweetalert2';
const MyClasses = () => {
    const {users,loading}=useContext(AuthContext)
    const [axiosSecure]=useAxiosSecure()
    const { refetch, data: selectedClass = [] } = useQuery({
        queryKey: ['myClass', users?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/myClass?email=${users?.email}`)
            return res.data;
        },
    })

const total = selectedClass.reduce((sum, selectedClass) => selectedClass.price + sum, 0);





    // useEffect(() => {
    //     axiosSecure.get(`/myClass?email=${users?.email}`)
    //     .then((data) => {
    //       console.log(data?.data);
    //       setData(data?.data);
    //     });
    //   }, [ axiosSecure]);
    // console.log(data);
 

    const handleDelete=(id)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`http://localhost:6500/myClass/${id}`,{
                method:'DELETE'
              })
              .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
          })

    }





    return (
        <div className='w-[90%] mx-auto p-8'>
            <h1 className='text-center py-8 text-2xl'>My Selected Classes</h1>
           <div className='flex my-5'>
           <div className='border-2 w-max px-5 py-2'>
           <h1>Total Price : ${total}</h1>
          </div>
          <button className=' bg-red-600 px-8 text-white '>PAY</button>
           </div>
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
        selectedClass.map((item,index)=><tr key={item._id}>
            <th>{index+1}</th>
            <td><img className='w-12' src={item.image} alt="" /></td>
            <td>{item.className}</td>
            <td>${item.price}</td>
            <td><button onClick={()=>handleDelete(item._id)}  className=' bg-red-600 p-2 rounded-md'><TrashIcon className="h-6 w-6 text-white" /></button></td>
          </tr>)
      }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyClasses;