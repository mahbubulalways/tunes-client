import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import useClasses from '../../hooks/useClasses';


const ShowClasses = ({data}) => {
    const {_id,image,className,instructorName,price,availableSeats}=data
    const {users}=useContext(AuthContext)
    const [,refetch]=useClasses()
    const navigate =useNavigate()
    const selectClass=(item)=>{
       
        if(users && users.email){
            const selected ={email:users.email,image:item.image,className:item.className,price:item.price}
              console.log(selected);
              fetch('http://localhost:6500/userClass',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(selected)
              })
              .then(res=>res.json())
              .then(data=>{
                if(data.insertedId){
                  Swal.fire({
                    icon: 'success',
                    title: 'Selected successfully',
                   
                  })
                }

                const remaining=item.availableSeats-1
                const updatedSeat={remaining}
                fetch(`http://localhost:6500/update/${item._id}`,{
                  method:'PUT',
                  headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(updatedSeat)
                })
                .then(res=>res.json())
                .then(data=>{
                  refetch()
                  console.log(data)})

              })
        }
        else{
          Swal.fire({
            icon: 'warning',
            title: 'Warning',
            text:'You must log in first'
           
          })
          navigate('/login')
        }
    }


    return (
        <div>
          
            <div  className="card card-compact  bg-base-100 shadow-xl">
                <figure><img className='h-56' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">{className}</h2>
                  <p>Instructor : {instructorName}</p>
                  <p>Available seats : {availableSeats}</p>
                  <p>Price : ${price}</p>
                  <div className="card-actions justify-end">
                    <button onClick={()=>selectClass(data)} className=" bg-blue-700 text-gray-100 w-full py-3 rounded-lg hover:bg-[#000000] transition-all duration-300">Select</button>
                  </div>
                </div>
              </div>
        </div>
    );
};

export default ShowClasses;