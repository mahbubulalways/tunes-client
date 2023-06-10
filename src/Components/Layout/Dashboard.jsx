import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import useInstructor from '../hooks/useInstructor';
import useUser from '../hooks/useUser';
import { Fade } from "react-awesome-reveal";

const Dashboard = () => {
  const [isAdmin] = useAdmin()
  const [isInstructor]=useInstructor()
  const [isUser]=useUser()


  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">

          <Outlet></Outlet>
          
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

        </div>
        <div className="drawer-side  bg-[#3e3434]">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-8 w-60  h-full   space-y-4">
          {
            isAdmin && <>
            <NavLink to='/dashboard/allUsers' style={({ isActive }) => { return { background: isActive ? "white" : "", color: isActive ? 'black' : 'white', borderRadius: isActive ? '4px' : '' }; }}><li className='border-b-2 text- hover:bg-white hover:text-black p-1 rounded'>All users</li></NavLink>
            <NavLink to='/dashboard/manageClass' style={({ isActive }) => { return { background: isActive ? "white" : "", color: isActive ? 'black' : 'white', borderRadius: isActive ? '4px' : '' }; }}><li className='border-b-2 text- hover:bg-white hover:text-black p-1 rounded'>Manage Classes</li></NavLink>

             
              <li className='border-b-2 text-white hover:bg-white hover:text-black p-1 rounded'>Sidebar Item 2</li>
            </>
              
          }
          

          {
            isInstructor && <>
            <NavLink to='/dashboard/addClass' style={({ isActive }) => { return { background: isActive ? "white" : "", color: isActive ? 'black' : 'white', borderRadius: isActive ? '4px' : '' }; }}><li className='border-b-2 text- hover:bg-white hover:text-black p-1 rounded'>Add a Class</li></NavLink>
            <NavLink to='/dashboard/instructorClass' style={({ isActive }) => { return { background: isActive ? "white" : "", color: isActive ? 'black' : 'white', borderRadius: isActive ? '4px' : '' }; }}><li className='border-b-2 text- hover:bg-white hover:text-black p-1 rounded'>My Class</li></NavLink>
           
                
            </>
          }

          {
            isUser && <>

            <NavLink to='/dashboard/my-classes' style={({ isActive }) => { return { background: isActive ? "white" : "", color: isActive ? 'black' : 'white', borderRadius: isActive ? '4px' : '' }; }}><li className='border-b-2 text- hover:bg-white hover:text-black p-1 rounded'>My  Classes</li></NavLink>


            <li className=' border-b-2 text-white hover:bg-white hover:text-black p-1 rounded'>My Enrolled Classes</li>
            <li className=' border-b-2 text-white hover:bg-white hover:text-black p-1 rounded'> Payment History</li>
          </>
          }







                    <div className=" border-b-8 border-gray-600 pt-10">  </div>
                
                    <Link to="/"><p className=' border-b-2 mt-4 text-white hover:bg-white hover:text-black p-1 rounded'>Home</p></Link>
                    <Link to="/instructor"><p className=' border-b-2 text-white hover:bg-white hover:text-black p-1 rounded'>Instructor</p></Link>
                    <Link to="/classes"><p className=' border-b-2 text-white hover:bg-white hover:text-black p-1 rounded'>Classes</p></Link>
                    
                   
                   </ul>
                    

        </div>

      </div>
    </div>
  );
};

export default Dashboard;