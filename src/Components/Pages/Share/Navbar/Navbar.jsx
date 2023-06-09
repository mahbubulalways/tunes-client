import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid'
import userImg from '../../../../assets/user.png'
import logo from '../../../../assets/logo.png'
import { darkMode, lightMode } from '../../ToggleTheme/Theme';
const Navbar = () => {
    const { users, handleLogOut } = useContext(AuthContext)
    const [toggle, setToggle] = useState(false)
    const [theme,setTheme]=useState(true)
    console.log(users);

    const handleLogOutUser = () => {
        handleLogOut()
        localStorage.removeItem('token')

    }

    const handleDark=()=>{
        darkMode()
        setTheme(!theme)
    }
    const handleLight=()=>{
        lightMode()
        setTheme(!theme)
    }


    return (
        <div className='border-b-2 bg-white sticky top-0 z-10'>
            <div className='w-[80%] mx-auto flex items-center justify-between gap-10 py-2'>
                <div className='flex items-center'>
                   <img className='w-12' src={logo} alt="" />
                    <h1 className='text-2xl font-semibold font-serif'>Tunes</h1>
                </div>

                
                <div className='hidden lg:block'>
                    <div className='flex  gap-5 text-lg'>
                        <NavLink
                            to="/"
                            style={({ isActive }) => {
                                return {
                                    color: isActive ? "blue" : "black",
                                };
                            }}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/instructor"
                            style={({ isActive }) => {
                                return {
                                    color: isActive ? "blue" : "black",
                                };
                            }}
                        >
                            Instructor
                        </NavLink>
                        <NavLink

                            to="/classes"
                            style={({ isActive }) => {
                                return {
                                    color: isActive ? "blue" : "black",
                                };
                            }}
                        >
                            Classes
                        </NavLink>
                        

                        <div >
                        </div>


                    </div>
                  
                </div>
                <div>
                <div className="dropdown dropdown-end">
             <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
         {
            users?  <img src={users?.photoURL}/> :<img src={userImg}/>
         }
        </div>
      </label>
      {
        users ? <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
       <Link to='/dashboard'> <li><a>Dashboard</a></li></Link>
       {
          theme ? <li onClick={handleDark}><a>Dark mode</a></li>: <li onClick={handleLight}><a>Light Mode</a></li>
       }
        <li onClick={handleLogOutUser}><a>Logout</a></li>
      </ul>:<ul tabIndex={0} className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
       <Link to='login'> <li><a>Log in</a></li></Link>
       {
          theme ? <li onClick={handleDark}><a>Dark mode</a></li>: <li onClick={handleLight}><a>Light Mode</a></li>
       }
      </ul>
      }
    </div>
                </div>
                <div className='block lg:hidden cursor-pointer'>
                    <span onClick={() => setToggle(!toggle)} >
                        {
                            toggle ? <XMarkIcon className="h-9 w-9 text-blue-500" /> : <Bars3Icon className="h-9 w-9 text-blue-500" />
                        }
                    </span>
                </div>
            </div>
            <span onClick={() => setToggle(!toggle)}>
                {<div className={`grid grid-cols-1 w-2/3 text-lg pl-10 absolute    duration-500 py-10 space-y-5 pr-4  bg-[#0d3039] lg:hidden sm:block rounded-br-md ${toggle ? 'left-0' : '-left-full'}`} >
                    <div className='flex flex-col gap-3'>
                        <Link className='text-white hover:text-black hover:bg-white px-3 py-1 rounded-md' to='/'>Home</Link>
                        <Link className='text-white hover:text-black  hover:bg-white px-3 py-1 rounded-md' to='/blog'>Blog</Link>
                        <Link to="/all-toys" className='text-white hover:text-black  hover:bg-white px-3 py-1 rounded-md'>All Toy</Link>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <div>
                            {
                                users && <div className='flex flex-col gap-3'>

                                    <Link to="/add-toys" className='text-white hover:text-black  hover:bg-white px-3 py-1 rounded-md'>Add Toy</Link>
                                    <Link to="/my-toys" className='text-white hover:text-black  hover:bg-white px-3 py-1 rounded-md'>My Toy</Link>
                                </div>
                            }
                        </div>
                        <span className=' py-3 px-3'>    {users && <img title={users?.displayName} className='rounded-full w-12' src={users?.photoURL} alt="" />}</span>
                        <span>
                            {
                                users ? <div className='px-3'>
                                    <Link><button onClick={handleLogOutUser} className='text-white border border-white px-4 text-lg rounded py-1 hover:bg-white hover:text-black'>Log out</button></Link>


                                </div>
                                    : <Link to='/login'><button className='text-white border border-white px-4 text-lg rounded py-1 hover:bg-white hover:text-black'>Log in</button></Link>
                            }
                        </span>
                    </div>


                </div>}
            </span>
        </div>
    );
};

export default Navbar;