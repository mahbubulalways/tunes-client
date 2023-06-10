import React, { useContext } from 'react';
import moment from 'moment';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../Provider/AuthProvider';
const PaymentHistory = () => {
    const {users,loading}=useContext(AuthContext)
    const [axiosSecure]=useAxiosSecure()
    const { refetch, data: enrollClass = [] } = useQuery({
        queryKey: ['enrollClass', users?.email],
        enabled: !loading ,
        queryFn: async () => {
            const res = await axiosSecure(`/enrollClass?email=${users?.email}`)
            return res?.data;
        },
    })

    return (
        <div className='w-[90%] mx-auto p-8'>
        <h1 className='text-center py-8 text-2xl font-serif'>Payment History</h1>
         {
            enrollClass.length > 0 ?
            <div className="overflow-x-auto">
            <table className="table">
            
            <thead>
              <tr>
                <th></th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Payment Date</th>
                <th>Payment Status</th>
                <th>Transaction ID</th>
              </tr>
            </thead>
            <tbody>
              
              {
                enrollClass.map((myClass,index)=><tr key={myClass._id}>
                    <th>{index+1}</th>
                    <td><img className='w-12' src={myClass.image} alt="" /></td>
                    <td>{myClass.className}</td>
                    <td>${myClass.price}</td>
                    <td>
                    <p>{moment(myClass.date).format('YYYY-MM-D ')}</p>
                   </td>
                    <td>
                    <p>{myClass.payment}</p>
                   </td>
                   <td>{myClass.transactionID}</td>
                    
                  </tr>)
              }
              
            </tbody>
            </table>
            </div> :
             <h1 className='text-center py-20  text-red-600'> No Payment History</h1>
         }
    </div>
    );
};

export default PaymentHistory;