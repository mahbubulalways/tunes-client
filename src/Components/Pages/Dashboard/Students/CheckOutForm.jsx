import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import Swal from 'sweetalert2';

const CheckOutForm = () => {
    const stripe=useStripe()
    const elements=useElements()
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
      <button className='bg-blue-600 duration-300 hover:bg-[#000000] text-white px-8 py-1 rounded mt-4' type="submit" disabled={!stripe}>
        Pay
      </button>
    </form> 
        </div>
    );
};

export default CheckOutForm;