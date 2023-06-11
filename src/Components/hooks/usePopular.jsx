import { useQuery } from '@tanstack/react-query';
import React from 'react';

const usePopular = () => {
    const {data: popular = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['popularClass'],
        queryFn: async() => {
            const res = await fetch('http://localhost:6500/popularClass');
            return res.json();
        }

    })
    return [popular,refetch]
};

export default usePopular;