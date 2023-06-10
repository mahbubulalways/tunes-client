import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useAdmin = () => {
    const [axiosSecure]=useAxiosSecure()
    const {users,loading}=useContext(AuthContext)
    
 
  
    const { data: isAdmin,refetch,isLoading } = useQuery({
        queryKey: ['admin', users?.email],
        enabled: !loading && Boolean(users?.email),
        queryFn: async () => {
            const res = await axiosSecure(`/admin?email=${users?.email}`)
            return res?.data?.admin;
        },
    })
     return [isAdmin,refetch,isLoading]
 
   
};

export default useAdmin;