import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useClasses = () => {
    const {data: classes = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['classes'],
        queryFn: async() => {
            const res = await fetch('http://localhost:6500/classes');
            return res.json();
        }

    })
    return [classes,refetch]
};

export default useClasses;