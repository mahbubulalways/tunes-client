import React, { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../Provider/AuthProvider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Fade } from 'react-awesome-reveal';
import useCart from '../../../hooks/useCart';
import { Helmet } from 'react-helmet-async';
const MyClasses = () => {
    const {users,loading}=useContext(AuthContext)
    const [cart,refetch]=useCart()

const total = cart.reduce((sum, cart) => cart.price + sum, 0);



 

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
              fetch(`https://assignment-12-server-mahbubulalways.vercel.app/myClass/${id}`,{
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
      <Fade cascade duration={3000}>
         <Helmet>
        <title>tunes | my class</title>
      </Helmet>
<div className='w-[90%] mx-auto p-8'>
            <h1 className='text-center  text-2xl font-serif'>My Selected Classes</h1>
         
          {
            cart.length > 0   ? <> <div className='border-2 w-max px-5 py-2 my-5'>
            <h1>Total Price : ${total}</h1>
           </div>
           
             <div className="overflow-x-auto">
   <table className="table">
     
     <thead>
       <tr>
         <th></th>
         <th>Image</th>
         <th>Name</th>
         <th>Price</th>
         <th>Payment</th>
         <th>Action</th>
       </tr>
     </thead>
     <tbody>
       
       {
         cart.map((myClass,index)=><tr key={myClass._id}>
             <th>{index+1}</th>
             <td><img className='w-12' src={myClass.image} alt="" /></td>
             <td>{myClass.className}</td>
             <td>${myClass.price}</td>
             <td> <Link to={`payment/${myClass._id}`}><button  className=' bg-green-600 px-5 py-2 rounded-md text-white '>PAY</button></Link>
            </td>
             <td><button onClick={()=>handleDelete(myClass._id)}  className=' bg-red-600 p-2 rounded-md text-white'>Delete</button></td>
           </tr>)
       }
       
     </tbody>
   </table>
 </div> </>: <h1 className='text-center py-20  text-red-600'> No Class Selected</h1>
          }
        </div>
      </Fade>
        
    );
};

export default MyClasses;