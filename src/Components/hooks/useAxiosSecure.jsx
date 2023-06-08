import axios from "axios";
import { useEffect } from "react";
import { toast } from "react-toastify";

const axiosSecure=axios.create({
    baseURL:`http://localhost:6500`,
})

const useAxiosSecure = () => {

    useEffect(()=>{
        axiosSecure.interceptors.request.use((req)=>{
            const token =localStorage.getItem('token')
            if(token){
                req.headers.Authorization=`Bearer ${localStorage.getItem('token')}`
            }
           return req
        })

        axios.interceptors.response.use(
            response=>response,
            error=>{
                if(error.response && (error?.response.status === 403 || error?.response.status === 401)){
                    toast.error(error?.response?.data.error)
                }
            }
        )

    },[])


    return axiosSecure
   
};

export default useAxiosSecure;