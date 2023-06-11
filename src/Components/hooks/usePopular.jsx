import { useQuery } from '@tanstack/react-query';
import React from 'react';

const usePopular = () => {
    const {data: popular = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['popularClass'],
        queryFn: async() => {
            const res = await fetch('https://assignment-12-server-mahbubulalways.vercel.app/popularClass');
            return res.json();
        }

    })
    return [popular,loading]
};

export default usePopular;