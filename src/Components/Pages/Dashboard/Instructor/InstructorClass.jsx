import React, { useContext } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../Provider/AuthProvider';
import { Fade } from 'react-awesome-reveal';
const InstructorClass = () => {
   const {users}=useContext(AuthContext)
    const [axiosSecure]=useAxiosSecure()
    const { refetch, data: instructorClass = [] } = useQuery({
        queryKey: ['instructorClass',users?.email],
        queryFn: async () => {
            const res = await axiosSecure(`/instructorClass?email=${users?.email}`)
            console.log(res.data);
            return res.data;
        },
    })


    return (
      <Fade cascade duration={3000}>
<div className='w-[90%] mx-auto p-8'>
            <h1 className='text-center py-8 text-2xl font-serif'>My  Classes</h1>
                 {
                   instructorClass.length > 0  ?  <div className='w-[90%] mx-auto p-8'>
                   <div className="overflow-x-auto">
         <table className="table">
           {/* head */}
           <thead>
             <tr>
               <th></th>
               <th className='text-center'>Image</th>
               <th className='text-center'>Name</th>
               <th className='text-center'>Enroll</th>
               <th className='text-center'>Feedback</th>
               <th className='text-center'>Status</th>
               
       
             </tr>
           </thead>
           <tbody>
             
             {
               instructorClass.map((eachClass,index)=><tr key={eachClass._id}>
                   <th>{index+1}</th>
                   <td><img className='w-12 h-12 rounded-full' src={eachClass.image} alt="" /></td>
                   <td className='text-center'>{eachClass.className}</td>
                   <td className='text-center'>{eachClass.enroll}</td>
                   <td className='text-center'>{eachClass.feedback}</td>
                   <td className='text-center'><p className={`  text-white px-4 py-2 w-max mx-auto rounded-md ${eachClass.status==='approve' ? 'bg-green-600' : eachClass.status==='deny'? 'bg-red-600' :'bg-yellow-600' }`}>{eachClass.status}</p></td>
                   
                   
                  
                 </tr>)
             }
             
           </tbody>
         </table>
       </div>
               </div> :  <h1 className='text-center py-20  text-red-600'> No Class Available</h1> 
                 }
        </div>

      </Fade>
        
    );
};

export default InstructorClass;