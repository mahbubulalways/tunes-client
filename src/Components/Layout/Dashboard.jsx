import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';


const Dashboard = () => {
  
  const [isAdmin]=useAdmin()
  console.log(isAdmin);
    return ( 
        <div>
           <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content ">

    <Outlet></Outlet>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
 
 {
  isAdmin ?      <ul className="menu p-8 w-60  h-full border-2 bg-white space-y-4">
  <Link to='/dashboard/allUsers'><li className='border-b-2 text-lg'>All users</li></Link>
    <li className=' border-b-2 text-lg'>Sidebar Item 2</li>
  </ul>:   <ul className="menu p-8 w-60  h-full border-2 bg-white space-y-4">
  <Link to='/dashboard/my-classes'><li className='border-b-2 text-lg'>My  classes</li></Link>
    <li className=' border-b-2 text-lg'>Sidebar Item 2</li>
  </ul>
 }
  
  </div>
</div>
        </div>
    );
};

export default Dashboard;