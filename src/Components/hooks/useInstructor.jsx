import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useInstructor = () => {
    const [axiosSecure]=useAxiosSecure()
    const {users,loading}=useContext(AuthContext)
    
    const { data: isInstructor,refetch,isLoading } = useQuery({
        queryKey: ['instructor', users?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/instructor?email=${users?.email}`)
            return res?.data?.instructor;
        },
    })
    return [isInstructor,refetch,isLoading]
};

export default useInstructor;