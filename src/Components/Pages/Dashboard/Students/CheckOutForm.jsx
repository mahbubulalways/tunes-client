import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { AuthContext } from '../../../Provider/AuthProvider';
import './CheckOutForm.css'
import useClasses from '../../../hooks/useClasses';
const CheckOutForm = ({singleClass}) => {
    const stripe=useStripe()
    const elements=useElements()
    const [axiosSecure]=useAxiosSecure()
    const [clientSecret,setClientSecret]=useState('')
    const {users}=useContext(AuthContext)
    const [processing,setProcessing]=useState(false)
    const price =singleClass?.price
    const [classes]=useClasses()
  

    const findClass=classes?.find(oneClass=>oneClass.className===singleClass?.className)
  

    useEffect(()=>{
        axiosSecure.post('/create-payment-intent',{price},
        )
        .then(res=>{
            
            setClientSecret(res.data.clientSecret);
        })
    },[price])



    const handleSubmit=async(event)=>{
        event.preventDefault()
        if(!stripe || !elements){
          return
        }
        const card=elements.getElement(CardElement)
        
        if(card===null){
            return
        }

        const {error,paymentMethod}=await stripe.createPaymentMethod({
            type:'card',
            card
        })
        if(error){
          
           const cardError=error.message
            Swal.fire({
                icon: 'warning',
                title: 'Warning',
                text:cardError
               
              })
        }
        else{
            
        }
        setProcessing(true)
        const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  email: users?.email || 'Unknown',
                  name: users?.displayName  || 'Unknown',
                },
              },
            },
          );
     
          if(confirmError){
            
            const cardError=confirmError.message
            Swal.fire({
                icon: 'warning',
                title: 'Warning',
                text:cardError
               
              })
          }
        



          
          setProcessing(false)
          if(paymentIntent.status==='succeeded'){
            const id =paymentIntent.id
               Swal.fire({
                icon: 'success',
                title: 'Payment successfully',
                text:'Transaction ID : ' + id
               
              })
             

              if(findClass.availableSeats===1){
                const btnDisable=true
                fetch(`https://assignment-12-server-mahbubulalways.vercel.app/setDisable/${findClass._id}`,{
                method:'PATCH',
                headers:{
                  'content-type':'application/json'
              },
              body:JSON.stringify({btnDisable})
            })
            .then(res=>res.json())
            .then(data=>{
              
              
            })
            
              }



             
              const payment={email:users?.email,
                transactionID:id,price,
                image:singleClass?.image,
                date:new Date(),
                className:singleClass?.className,
                payment:"Paid"}
                axiosSecure.post('/payment',payment,
                )
                .then(res=>{
                    
                    
                })

                fetch(`https://assignment-12-server-mahbubulalways.vercel.app/myClass/${singleClass._id}`,{
                  method:'DELETE'
                })
                .then(res => res.json())
                      .then(data => {
                      
                      })
                    
                   
                      const enroll = findClass?.enroll+1
                      const remainingSeat=findClass?.availableSeats-1
                      const updateData={enroll,remainingSeat}
                      
                      fetch(`https://assignment-12-server-mahbubulalways.vercel.app/update/${findClass?.className}`,{
                        method:'PUT',
                        headers:{
                          'content-type':'application/json'
                      },
                      body:JSON.stringify(updateData)
                      })
                      .then(res=>res.json())
                      .then(data=>{
                     
                       
                      })


          }

    }
    






    return (
        <div>
            <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className='bg-blue-600 duration-300 hover:bg-[#000000] text-white px-8 py-1 rounded mt-4 disabled:bg-gray-500' type="submit" disabled={!stripe || !clientSecret || processing}>
        Pay
      </button>
    </form> 
        </div>
    );
};

export default CheckOutForm;