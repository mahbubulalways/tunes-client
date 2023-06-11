import React, { useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import {  TrashIcon } from '@heroicons/react/24/solid'
import { FaUserCheck,FaUserTie } from 'react-icons/fa';
import Swal from 'sweetalert2';
const AllUsers = () => {
    const [axiosSecure]=useAxiosSecure()
    const { refetch, data: allUser = [] } = useQuery({
        queryKey: ['allUsers'],
        queryFn: async () => {
            const res = await axiosSecure('/allUsers')
            
            return res.data;
        },
    })
   

    console.log(allUser);


    const handleMakeAdmin=(id)=>{
     Swal.fire({
        title: 'Are you sure?',
        text: "Make this user admin",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
      }).then((result) => {
        if (result.isConfirmed) {
          const role ='admin'
          const updateData={role:role}
          fetch(`https://assignment-12-server-mahbubulalways.vercel.app/makeAdmin/${id}`,{
            method:'PATCH',
            headers:{
              'content-type':'application/json'
            },
            body:JSON.stringify(updateData)
          })
          .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                     
                        refetch();
                        Swal.fire(
                            'Done',
                            'Make admin successfully',
                            'success'
                        )
                    }
                    
                })
        }
      })
}


const handleMakeInstructor=(user)=>{

  Swal.fire({
    title: 'Are you sure?',
    text: "Make this user Instructor",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes'
  }).then((result) => {
    if (result.isConfirmed) {
      const role ='instructor'
      const updateData={role:role}
      fetch(`https://assignment-12-server-mahbubulalways.vercel.app/makeInstructor/${user?._id}`,{
        method:'PATCH',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(updateData)
      })
      .then(res => res.json())
            .then(data => {
              console.log(data);
                if (data.modifiedCount > 0) {
                 
                    refetch();
                    Swal.fire(
                        'Done',
                        'Make instructor successfully',
                        'success'
                    )

                    const instructor={
                      instructorName:user?.name,
                      instructorImg:user?.image,
                      email:user?.email
                     }
                     axiosSecure.post('/addedInstructor',instructor,
                     )
                     .then(res=>{
                        console.log(res);
                     })


                }
                
            })
    }
  })

}











const handleDeleteUser =(id)=>{
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
      fetch(`https://assignment-12-server-mahbubulalways.vercel.app/user/${id}`,{
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
              <h1 className='text-center text-4xl font-serif py-8'>Manage Users</h1>
            <div className=" overflow-scroll w-full">
  <table className="table ">
  
    <thead>
      <tr>
        <th></th>
        <th className='text-center'>Image</th>
        <th className='text-center'>Name</th>
        <th className='text-center'>Email</th>
        <th className='text-center'>Role</th>
        <th className='text-center'>Make Admin</th>
        <th className='text-center'>Make Instructor</th>
        <th className='text-center'>Action</th>
      </tr>
    </thead>
    <tbody>
      
      {
        allUser.map((user,index)=><tr key={user._id}>
            <th>{index+1}</th>
            <td><img className='w-12 h-12 rounded-full' src={user.image} alt="" /></td>
            <td className='text-center'>{user.name}</td>
            <td className='text-center'>{user.email}</td>
            <td className='text-center'>{user.role}</td>
            <td className='text-center'>
            <button onClick={()=>handleMakeAdmin(user._id)} className=' bg-blue-600 p-2 text-white rounded-md disabled:bg-gray-500' disabled={user.role==='admin'}> <FaUserCheck className='w-6 h-6'/></button>
           </td>
           <td className='text-center'>
           <button onClick={()=>handleMakeInstructor(user)} className=' bg-yellow-600 p-2 mt-2 text-white rounded-md disabled:bg-gray-500' disabled={user.role==='instructor'}><FaUserTie className='w-6 h-6'/></button>
           </td>
            <td className='text-center'><button onClick={()=>handleDeleteUser(user._id)} className=' bg-red-600 p-2 text-white rounded-md'>Delete</button></td>
          </tr>)
      }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUsers;