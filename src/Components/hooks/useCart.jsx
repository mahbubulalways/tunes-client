import React, { useContext } from 'react';

import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
import { AuthContext } from '../Provider/AuthProvider';
const useCart = () => {
     const {users,loading}=useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['myClass', users?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/myClass?email=${users?.email}`)
            return res.data;
        },
    })
    return   [cart,refetch]
};

export default useCart;