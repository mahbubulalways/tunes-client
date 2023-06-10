import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { AuthContext } from '../../../Provider/AuthProvider';

const CheckOutForm = ({price}) => {
    const stripe=useStripe()
    const elements=useElements()
    const [axiosSecure]=useAxiosSecure()
    const [clientSecret,setClientSecret]=useState('')
    const {users}=useContext(AuthContext)
   
   console.log(price);
    useEffect(()=>{
        axiosSecure.post('/create-payment-intent',{price},
        )
        .then(res=>{
            console.log(res.data.clientSecret);
            setClientSecret(res.data.clientSecret);
        })
    },[price])



    const handleSubmit=async(event)=>{
        event.preventDefault()
        if(!stripe || !elements){
          return
        }
        const card=elements.getElement(CardElement)
        console.log(card);
        if(card===null){
            return
        }

        const {error,paymentMethod}=await stripe.createPaymentMethod({
            type:'card',
            card
        })
        if(error){
            console.log('error',error);
           const cardError=error.message
            Swal.fire({
                icon: 'warning',
                title: 'Warning',
                text:cardError
               
              })
        }
        else{
            console.log('payment',paymentMethod);
        }

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
            console.log(confirmError);
            const cardError=confirmError.message
            // Swal.fire({
            //     icon: 'warning',
            //     title: 'Warning',
            //     text:cardError
               
            //   })
          }

          else{
            console.log(paymentIntent);
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
      <button className='bg-blue-600 duration-300 hover:bg-[#000000] text-white px-8 py-1 rounded mt-4 disabled:bg-gray-500' type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
    </form> 
        </div>
    );
};

export default CheckOutForm;