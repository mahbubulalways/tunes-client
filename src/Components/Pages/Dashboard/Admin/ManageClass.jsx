import React, { useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { XMarkIcon, CheckIcon } from '@heroicons/react/24/solid'
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
const ManageClass = () => {
    const [axiosSecure]=useAxiosSecure()
    const { refetch, data: allClasses = [] } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await axiosSecure('/classes')
            console.log(res.data);
            return res.data;
        },
    })
   
const handleApprove=(id)=>{
    
    const approve='approve'
    const data={approve}
    Swal.fire({
        title: 'Are you sure?',
        text: "Approve this class",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, approved it!'
      }).then((result) => {
        if (result.isConfirmed) {
            fetch(`http://localhost:6500/approveClass/${id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res=>res.json())
            .then(data=>{
              
              if (data.modifiedCount>0) {
                refetch()
                Swal.fire({
                  icon: 'success',
                  title: 'Approve successfully',
                 
                })
                
            }
            })
        }
      })
       
}

const handleDeny=(id)=>{
    const deny='deny'
    const data={deny}
    Swal.fire({
        title: 'Are you sure?',
        text: "Deny this class",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Deny!'
      }).then((result) => {
        if (result.isConfirmed) {
            fetch(`http://localhost:6500/denyClass/${id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res=>res.json())
            .then(data=>{
               
              if (data.modifiedCount>0) {
                refetch()
                Swal.fire({
                  icon: 'success',
                  title: 'Approve successfully',
                 
                })
                
            }
            })
        }
      })
}









    return (
        <div>
             <div className='w-[90%] mx-auto p-8'>
            <div className="overflow-x-auto overflow-scroll">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th className='text-center'>Image</th>
        <th className='text-center'>Name</th>
        <th className='text-center'>Instructor Name</th>
        <th className='text-center'>Email</th>
        <th className='text-center'>Seats</th>
        <th className='text-center'>Price</th>
        <th className='text-center'>Feedback</th>
        <th className='text-center'>Status</th>
        

      </tr>
    </thead>
    <tbody>
      
      {
        allClasses.map((eachClass,index)=><tr key={eachClass._id}>
            <th>{index+1}</th>
            <td><img className='w-12 h-12 rounded-full' src={eachClass.image} alt="" /></td>
            <td className='text-center'>{eachClass.className}</td>
            <td className='text-center'>{eachClass.instructorName}</td>
            <td className='text-center'>{eachClass.email}</td>
            <td className='text-center'>{eachClass.availableSeats
}</td>
            <td className='text-center'>${eachClass.price}</td>
           <Link to={`feedback/${eachClass._id}`}> <td className='text-center'><button className=' bg-blue-600 text-white px-2 py-1 w-max mx-auto rounded-md'>Send Feedback</button></td></Link>
            <td>{
                eachClass.status==='approve' ? <p>Approved</p> : eachClass.status==='deny' ? <p>Deny</p>  : <div className='flex gap-2'>
                    <button onClick={()=>handleApprove(eachClass._id)}  className=' bg-green-600 text-white px-2 py-2 w- mx-auto rounded-md w'><CheckIcon className="h-6 w-6" /></button>
                    <button onClick={()=>handleDeny(eachClass._id)}  className=' bg-red-600 text-white px-2 py-2 w- mx-auto rounded-md w'><XMarkIcon className="h-6 w-6" /></button>
                </div>

                }</td>
            
            
           
          </tr>)
      }
      
    </tbody>
  </table>
</div>
        </div>

        </div>
    );
};

export default ManageClass;