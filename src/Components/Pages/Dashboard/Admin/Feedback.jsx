import React, { useState } from 'react';
import {  useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const Feedback = () => {
    const [spinner,setSpinner]=useState(false)
    const  userId  = useParams();
    console.log(userId);
    const handleFeedback=(event)=>{
        event.preventDefault()
        const feedback=event.target.feedback.value
        const updateData={feedback}
        setSpinner(true)
                    fetch(`http://localhost:6500/feedback/${userId.id}`, {
                      method: 'PATCH',
                      headers: {
                          'content-type': 'application/json'
                      },
                      body: JSON.stringify(updateData)
                  })
                  .then(res=>res.json())
                  .then(data=>{
                    console.log(data);
                    if (data.modifiedCount>0) {
                        setSpinner(false)
                      
                      Swal.fire({
                        icon: 'success',
                        title: 'Sent successfully',
                       
                      })
                      
                    }
                
                else{
                    setSpinner(false)
                }
                })
                    
      
      }
      
      


    return (
        <div className='w-[80%] mx-auto py-10'>
            <h1 className='text-center text-4xl font-serif '> Send Feedback</h1>
            <form onSubmit={handleFeedback}>
                <textarea name="feedback" id="" cols="30" rows="10" className='w-full px-8 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-600 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5' required></textarea>
                <button
                
          type="submit"
          className="mt-5 tracking-wide font-semibold bg-red-500 text-gray-100 w-full py-3 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
        >  { spinner &&  <span  className="loading loading-spinner"></span>} <span className='ml-3'>Send</span></button>
            </form>
        </div>
    );
};

export default Feedback;