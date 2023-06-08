import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { RotateLoader } from 'react-spinners';
const PrivateRoutes = ({children}) => {
    const {users,loading}=useContext(AuthContext)
    if(loading){
       return  <div className='flex justify-center py-32'><RotateLoader color="#000000"  size={15}/></div>
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoutes;