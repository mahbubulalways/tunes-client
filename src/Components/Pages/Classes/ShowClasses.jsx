import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import useClasses from '../../hooks/useClasses';
import useInstructor from '../../hooks/useInstructor';
import useAdmin from '../../hooks/useAdmin';


const ShowClasses = ({data}) => {
 const {_id,image,className,instructorName,price,availableSeats,disable}=data
 console.log(disable);
    const {users}=useContext(AuthContext)
    const [,refetch]=useClasses()
    const navigate =useNavigate()
   
    const [isAdmin]=useAdmin()
    const [isInstructor]=useInstructor()
 

    
  
   
   


    const selectClass=(item)=>{
       
        if(users && users.email){
            const selected ={email:users.email,image:item.image,className:item.className,price:item.price}
              console.log(selected);
              fetch('https://assignment-12-server-mahbubulalways.vercel.app/userClass',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(selected)
              })
              .then(res=>res.json())
              .then(data=>{
                if(data.insertedId){
                  Swal.fire({
                    icon: 'success',
                    title: 'Selected successfully',
                   
                  })
                }
              })
        }
        else{
          Swal.fire({
            icon: 'warning',
            title: 'Warning',
            text:'You must log in first'
           
          })
          navigate('/login')
        }
    }

   




    return (
        <div className=''>
          
            <div  className={`card card-compact   bg-base-100 shadow-xl ${disable && 'bg-red-400'}`}>
                <figure className='bg-white'><img className='h-56' src={image}  /></figure>
                <div className="card-body">
                  <h2 className="card-title">{className}</h2>
                  <p>Instructor : {instructorName}</p>
                  <p>Available seats : {availableSeats}</p>
                  <p>Price : ${price}</p>
                  <div className="card-actions justify-end">
                    <button onClick={()=>selectClass(data)} className=" bg-blue-700 text-gray-100 w-full py-3 rounded-lg hover:bg-[#000000] transition-all duration-300 disabled:bg-gray-500" disabled={ isAdmin 
                    || isInstructor || disable }>Select</button>
                  </div>
                </div>
              </div>
        </div>
    );
};

export default ShowClasses;