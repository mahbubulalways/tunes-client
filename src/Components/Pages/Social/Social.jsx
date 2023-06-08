import React, { useContext } from 'react';
import  { AuthContext } from '../../Provider/AuthProvider';
import google from '../../../assets/google.png'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
const Social = () => {
    const {handleGoogle}=useContext(AuthContext)
    const navigate =useNavigate()
    const handleGoogleLogin=()=>{
        handleGoogle()
        .then(result=>{
            Swal.fire({
                icon: 'success',
                title: 'Log in successfully',
               
              })
            navigate('/')
        })
        .catch(error=>{
            console.log(error.message);
        })
      }
    return (
        <div onClick={handleGoogleLogin}>
            <div className="divider">OR</div>
        <div className='border-2 rounded-lg cursor-pointer mt-3'>
            <div  className='flex items-center gap-3 w-max mx-auto '>
            <img className='w-12' src={google} alt="" />
            <p>Continue with Google</p>
            </div>
            
        </div>
        </div>
    );
};

export default Social;