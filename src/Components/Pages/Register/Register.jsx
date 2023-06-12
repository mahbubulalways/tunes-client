import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import registerImg from '../../../assets/login/register.png'
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import Social from "../Social/Social";
import { Helmet } from "react-helmet-async";

const Register = () => {
    const [password,showPassword]=useState(false)
    const [spinner,setSpinner]=useState(false)
    const [err,setErr]=useState('')
    const {handleCreateUser,updateUserProfile}=useContext(AuthContext)
    const { register, handleSubmit,formState: { errors } } = useForm();
    const navigate =useNavigate()
    const onSubmit = data => {
        const name =data.name
        const image=data.image[0]
        const email =data.email
        const password=data.password
        const confirmPassword=data.confirmPassword
        if(password !== confirmPassword){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password are not matched',
              })
              return
        }
        setSpinner(true)
        setErr('')
        const formData = new FormData()
        formData.append('image',image)
        const url =`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imgbbkey}`
        fetch(url,{
            method:'POST',
            body:formData
        })
        .then(res=>res.json())
        .then(data=>{
        const img =data.data.display_url
       
        handleCreateUser(email,password)
        .then(result=>{
            console.log(result.user);
            updateUserProfile(result.user,name,img)
         
                        const saveUser = { name,email,image:img,role:'user'}
                        fetch('https://assignment-12-server-mahbubulalways.vercel.app/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                        .then(res=>res.json())
                        .then(data=>{
                          if (data.insertedId) {
                            
                            Swal.fire({
                              icon: 'success',
                              title: 'Register successfully',
                             
                            })
                            navigate('/')
                        }
                        })
                      })


           
        })
        .catch(error =>{
            setErr(error.message)
            console.log(error.message);
            setSpinner(false)
        } )
       
    }

      const handleShowPass=(event)=>{
        const checkbox= event.target.checked
        showPassword(checkbox)
      }


    return (
        
            <div className="w-96 mx-auto py-5">
                <Helmet>
        <title>tunes | register</title>
      </Helmet>
      <form onSubmit={handleSubmit(onSubmit)}>
      <input
          className="w-full px-8 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-600 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
          type="text"
          {...register("name", { required: true })} 
          placeholder="Full Name"/>
          {errors.name?.type === 'required' && <p className="text-red-500"><small>This field is required</small></p>}
      <input type="file"  className="file-input file-input-bordered w-full  my-4 cursor-pointer"
      {...register("image", { required: true})}/>
      {errors.image?.type === 'required' && <p className="text-red-500"><small>This field is required</small></p>}
        <input
          className="w-full px-8 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-600 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
          type="email"
          {...register("email", { required: true })}
          placeholder="Email"
        />
        {errors.email?.type === 'required' && <p className="text-red-500"><small>This field is required</small></p>}
        <input
          className="w-full px-8 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-600 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
          type={password ? 'text': 'password' }
          {...register("password", 
          { required: true,
            minLength: 6,
            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/
        
        })}
          placeholder="Password"
        />
         {errors.password?.type === 'required' && <p className="text-red-500"><small>This field is required</small></p>}
         {errors.password?.type === 'minLength' && <p className="text-red-500"><small>Password must have 6 characters</small></p>}
         {errors.password?.type === 'pattern' && <p className="text-red-500"><small>Password must have one Uppercase  and one special character.</small></p>}
        <input
          className="w-full px-8 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-600 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
          type={password ? 'text': 'password' }
          {...register("confirmPassword", { required: true })}
          placeholder="Confirm password"
        />
        {errors.confirmPassword?.type === 'required' && <p className="text-red-500"><small>This field is required</small></p>}
        <div className="flex gap-3 mt-4 items-center">
                <input type="checkbox" onClick={handleShowPass}  className="checkbox bg-white" />
               <p className="label-text cursor-pointer text-sm">Show password</p>
               </div>
               <p className="text-red-500"><small>{err}</small></p>
        <button
          type="submit"
          className="mt-5 tracking-wide font-semibold bg-red-500 text-gray-100 w-full py-3 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
        >
         { spinner &&  <span  className="loading loading-spinner"></span>}
          <span className="ml-3">Register</span>
        </button>
      </form>
     <Social></Social>
      <p className='mt-3'><small>Already have an account please <Link to='/login'><span className='text-red-500'> Log in </span></Link></small></p>
 </div>
      
        
    );
};

export default Register;