import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useClasses = () => {
    const {data: classes = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['classes'],
        queryFn: async() => {
            const res = await fetch('https://assignment-12-server-mahbubulalways.vercel.app/classes');
            return res.json();
        }

    })
    return [classes,refetch]
};

export default useClasses;