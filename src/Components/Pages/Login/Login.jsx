import { Link, useNavigate } from 'react-router-dom';
import login from '../../../assets/login/login.png'
import { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import Social from '../Social/Social';
import { Helmet } from 'react-helmet-async';


const Login = () => {
    const [password,showPassword]=useState(false)
    const [spinner,setSpinner]=useState(false)
    const [err,setErr]=useState('')
    const {handleLogin}=useContext(AuthContext)
    const navigate =useNavigate()
    const { register, handleSubmit,formState: { errors } } = useForm();
    const onSubmit = data => {
        setSpinner(true)
        console.log(data.email);
        const email =data.email
        const password=data.password
        handleLogin(email,password)
        .then(result=>{
    
         Swal.fire({
            icon: 'success',
            title: 'Log in successfully',
           
          })
        navigate('/')
        })
        .catch(err=>{
            setErr(err.message);
            setSpinner(false)
        })
    }
    const handleShowPassword=(event)=>{
        const checkbox= event.target.checked
        showPassword(checkbox)
      }


   
    return (
        
            
            <div className="w-96 mx-auto py-10">
                        <Helmet>
        <title>tunes | login</title>
      </Helmet>
            <img className='w-1/2 mx-auto' src={login} alt="" />
            <form onSubmit={handleSubmit(onSubmit)}>
            <input
          className="w-full px-8 py-3 mt-5 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-600 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
          type="email"
          {...register("email", { required: true })}
          placeholder="Email"
        />
        
        <input
          className="w-full px-8 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-600 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
          type={password ? 'text': 'password' }
          {...register("password", { required: true })}
          placeholder="Password"
        />
        <div className="flex gap-3 mt-4 items-center">
                <input type="checkbox" onClick={handleShowPassword}  className="checkbox bg-white" />
               <p className="label-text cursor-pointer text-sm">Show password</p>
               </div>
               <p className="text-red-500"><small>{err}</small></p>
        <button
          type="submit"
          className="mt-5 tracking-wide font-semibold bg-red-500 text-gray-100 w-full py-3 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
        >
         { spinner &&  <span  className="loading loading-spinner"></span>}
          <span className="ml-3">Log in</span>
        </button>
            </form>
            <Social></Social>
            <p className='mt-3'><small>New user? Please click to <Link to='/register'><span className='text-red-500'> register </span></Link></small></p>
           
        </div>

       
    );
};

export default Login;