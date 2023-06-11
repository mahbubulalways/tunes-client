import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useUser = () => {
    const [axiosSecure]=useAxiosSecure()
    const {users,loading}=useContext(AuthContext)
    
    const { data: isUser,refetch,isLoading } = useQuery({
        queryKey: ['user', users?.email],
        enabled: !loading && Boolean(users?.email),
        queryFn: async () => {
            const res = await axiosSecure(`/user?email=${users?.email}`)
            return res?.data?.user;
        },
    })
    return [isUser,refetch,isLoading]
};

export default useUser;