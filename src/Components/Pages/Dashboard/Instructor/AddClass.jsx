import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from '../../../Provider/AuthProvider';
import { Helmet } from 'react-helmet-async';
const AddClass = () => {
    const {users}=useContext(AuthContext)
    const [spinner,setSpinner]=useState(false)
    const { register, handleSubmit,formState: { errors } } = useForm();
    const onSubmit = data => {
        const name=data.name
        const seats=parseFloat(data.seats)
        const price=parseFloat(data.price)
        const disable=false
        const image=data.image[0]
        const status ='pending'
        const formData = new FormData()
        formData.append('image',image)
        setSpinner(true)
        const url =`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imgbbkey}`
        fetch(url,{
            method:'POST',
            body:formData
        })
        .then(res=>res.json())
        .then(data=>{
        const img =data.data.display_url
        const newClass = { className:name,email:users?.email,image:img, instructorImg:users?.photoURL , instructorName:users?.displayName,status,price,availableSeats:seats,disable,enroll:0,feedback:'No feedback'}
        fetch('https://assignment-12-server-mahbubulalways.vercel.app/classes', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(newClass)
                        })
                        .then(res=>res.json())
                        .then(data=>{
                            console.log(data)
                            if(data.insertedId){
                                Swal.fire({
                                    icon: 'success',
                                    title: 'Class added successfully',
                                   
                                  })
                                  setSpinner(false)
                                }
                            
                        })




    })
    }
    return (
        <div className=' w-[80%] mx-auto py-8'>
          <Helmet>
        <title>tunes | add class</title>
      </Helmet>
            <div className="w- mx-auto py-5">
            
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-2'>
      <input
          className="w-full px-8 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-600 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
          type="text"
          {...register("name", { required: true })} 
          placeholder="Class  Name"/>
          
        <input type="file"  className="file-input file-input-bordered w-full  my-4 cursor-pointer"
      {...register("image", { required: true})}/>
      

      <input
          className="w-full px-8 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-600 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
          type="text" value={users.displayName}
          {...register("InstructorName", { required: true})}
        />
      <input
          className="w-full px-8 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-600 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
          type="email" value={users.email}
          {...register("email", { required: true})}
        />
      <input
          className="w-full px-8 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-600 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
          type="number" 
          placeholder='Available seats'
          {...register("seats", { required: true})}
        />
      <input
          className="w-full px-8 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-600 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
          type="text" 
          placeholder='Price'
          {...register("price", { required: true})}
        />
      </div>
    
       
        
        <button
          type="submit"
          className="mt-5 tracking-wide font-semibold bg-red-500 text-gray-100 w-full py-3 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
        >
         { spinner &&  <span  className="loading loading-spinner"></span>}
          <span className="ml-3">Add</span>
        </button>
      </form>
 </div>
        </div>
    );
};

export default AddClass;