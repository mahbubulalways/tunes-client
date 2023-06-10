import React, { useContext } from 'react';
import {  useParams } from 'react-router-dom';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../Provider/AuthProvider';
import CheckOutForm from './CheckOutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
const Payment = () => {
     const  userId  = useParams();
     console.log(userId);

     const {users,loading}=useContext(AuthContext)
     const [axiosSecure]=useAxiosSecure()
     const { refetch, data: singleClass = {} } = useQuery({
         queryKey: ['singleClass', userId.id],
         enabled: !loading,
         queryFn: async () => {
             const res = await axiosSecure(`/singleClass/${userId.id}`)
             return res.data;
         },
     })
console.log(singleClass.price);

// TO Do 
const stripePromise=loadStripe(import.meta.env.VITE_STRIPE_PK)
    return (
        <div className='w-[80%] mx-auto py-20'>
               <h1>Payment</h1>
               <Elements stripe={stripePromise}>

            <CheckOutForm price={singleClass.price}></CheckOutForm>
               </Elements>
        </div>
    );
};

export default Payment;