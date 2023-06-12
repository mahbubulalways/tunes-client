import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import useInstructor from '../hooks/useInstructor';
import useUser from '../hooks/useUser';

import { WalletIcon, UserGroupIcon, HomeIcon, UserIcon, DocumentIcon, CogIcon, DocumentPlusIcon, DocumentCheckIcon } from '@heroicons/react/24/solid'
const Dashboard = () => {
  const [isAdmin] = useAdmin()
  const [isInstructor] = useInstructor()
  const [isUser] = useUser()


  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button  mt-10 ml-10 lg:hidden">Open drawer</label>
          <Outlet></Outlet>

  

        </div>
        <div className="drawer-side  bg-[#3e3434]">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-8 w-60  h-full   space-y-4">
            {
              isAdmin && <>
                <NavLink to='/dashboard/allUsers' style={({ isActive }) => { return { background: isActive ? "white" : "", color: isActive ? 'black' : 'white', borderRadius: isActive ? '4px' : '' }; }}><p className='inline-flex items-center gap-2 border-b-2 hover:text-black  hover:bg-white p-1 rounded w-full'><UserGroupIcon className="h-6 w-6 text-blue-500 " /><li className=' '>   Manage Users</li></p></NavLink>

                <NavLink to='/dashboard/manageClass' style={({ isActive }) => { return { background: isActive ? "white" : "", color: isActive ? 'black' : 'white', borderRadius: isActive ? '4px' : '' }; }}><p className='inline-flex items-center gap-2 border-b-2 hover:text-black  hover:bg-white p-1 rounded w-full'><CogIcon className="h-6 w-6 text-blue-500 " /><li > Manage Classes</li></p></NavLink>




              </>

            }


            {
              isInstructor && <>

                <NavLink to='/dashboard/instructorClass' style={({ isActive }) => { return { background: isActive ? "white" : "", color: isActive ? 'black' : 'white', borderRadius: isActive ? '4px' : '' }; }}><p className='inline-flex items-center gap-2 border-b-2 hover:text-black  hover:bg-white p-1 rounded w-full'><DocumentCheckIcon className="h-6 w-6 text-blue-500 " /><li className=' '> My Class</li></p></NavLink>
                <NavLink to='/dashboard/addClass' style={({ isActive }) => { return { background: isActive ? "white" : "", color: isActive ? 'black' : 'white', borderRadius: isActive ? '4px' : '' }; }}><p className='inline-flex items-center gap-2 border-b-2 hover:text-black  hover:bg-white p-1 rounded w-full'><DocumentPlusIcon className="h-6 w-6 text-blue-500 " /><li className=' '>  Add a Class</li></p></NavLink>

              </>
            }

            {
              isUser && <>
                <NavLink to='/dashboard/my-classes' style={({ isActive }) => { return { background: isActive ? "white" : "", color: isActive ? 'black' : 'white', borderRadius: isActive ? '4px' : '' }; }}><p className='inline-flex items-center gap-2 border-b-2 hover:text-black  hover:bg-white p-1 rounded w-full'><DocumentIcon className="h-6 w-6 text-blue-500 " /><li className=' '> My  Classes</li></p></NavLink>

                <NavLink to='/dashboard/enrollClass' style={({ isActive }) => { return { background: isActive ? "white" : "", color: isActive ? 'black' : 'white', borderRadius: isActive ? '4px' : '' }; }}><p className='inline-flex items-center gap-2 border-b-2 hover:text-black  hover:bg-white p-1 rounded w-full'><DocumentCheckIcon className="h-6 w-6 text-blue-500 " /><li className=' '>My Enrolled Classes</li></p></NavLink>

                <NavLink to='/dashboard/paymentHistory' style={({ isActive }) => { return { background: isActive ? "white" : "", color: isActive ? 'black' : 'white', borderRadius: isActive ? '4px' : '' }; }}><p className='inline-flex items-center gap-2 border-b-2 hover:text-black  hover:bg-white p-1 rounded w-full'><WalletIcon className="h-6 w-6 text-blue-500 " /><li className=' '>Payment History</li></p></NavLink>







              </>
            }







            <div className=" border-b-8 border-gray-600 pt-10">  </div>

            <Link to="/"><p className='inline-flex items-center gap-2 border-b-2 hover:text-black  hover:bg-white p-1 rounded w-full  text-white'>  <HomeIcon className="h-6 w-6 text-blue-500 " /><li >Home</li></p></Link>
            <Link to="/instructor"><p className='inline-flex items-center gap-2 border-b-2 hover:text-black  hover:bg-white p-1 rounded w-full  text-white'>  <UserIcon className="h-6 w-6 text-blue-500 " /><li >Instructor</li></p></Link>
            <Link to="/classes"><p className='inline-flex items-center gap-2 border-b-2 hover:text-black  hover:bg-white p-1 rounded w-full  text-white'>  <DocumentIcon className="h-6 w-6 text-blue-500 " /><li >Classes</li></p></Link>



          </ul>


        </div>

      </div>
    </div>
  );
};

export default Dashboard;