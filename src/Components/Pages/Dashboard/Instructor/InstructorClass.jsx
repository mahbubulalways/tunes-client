import React, { useContext } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../Provider/AuthProvider';
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

console.log(instructorClass);

    return (
        <div>
                    <div className='w-[90%] mx-auto p-8'>
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
            <td className='text-center'>{eachClass.name}</td>
            <td className='text-center'>{eachClass.enroll}</td>
            <td className='text-center'><button className=' bg-blue-600 text-white px-4 py-2 w-max mx-auto rounded-md'>Feedback</button></td>
            <td className='text-center'><p className=' bg-red-600 text-white px-4 py-2 w-max mx-auto rounded-md'>{eachClass.status}</p></td>
            
            
           
          </tr>)
      }
      
    </tbody>
  </table>
</div>
        </div>
        </div>
    );
};

export default InstructorClass;