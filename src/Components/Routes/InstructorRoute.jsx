import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { RotateLoader } from 'react-spinners';
import useAdmin from '../hooks/useAdmin';
import { Navigate } from 'react-router-dom';
import useInstructor from '../hooks/useInstructor';
const InstructorRoute = ({children}) => {
    const {users,loading}=useContext(AuthContext)
    const [isInstructor,refetch,isLoading]=useInstructor()
    if(loading || isLoading){
       return  <div className='flex justify-center py-32'><RotateLoader color="#000000"  size={15}/></div>
    }
    if(users && isInstructor){
        return children;
    }
   return <Navigate to='/login'></Navigate>
};

export default InstructorRoute;