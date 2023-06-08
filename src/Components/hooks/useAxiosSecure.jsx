import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const axiosSecure=axios.create({
    baseURL:`http://localhost:6500`,
})

const useAxiosSecure = () => {
const navigate=useNavigate()
    useEffect(()=>{
        axiosSecure.interceptors.request.use((req)=>{
            const token =localStorage.getItem('token')
            if(token){
                req.headers.Authorization=`Bearer ${localStorage.getItem('token')}`
            }
           return req
        })

        axiosSecure.interceptors.response.use(
            response=>response,
            error=>{
                if(error.response && (error?.response.status === 403 || error?.response.status === 401)){
                navigate('/')
                const errMessage=error.message
                console.log(errMessage);
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text:errMessage
                   
                  })
                }
                console.log(error.message);
                return Promise.reject(error)
            }
        )

    },[axiosSecure])


    return [axiosSecure]
   
};

export default useAxiosSecure;