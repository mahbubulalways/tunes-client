import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid'
import userImg from '../../../../assets/user.png'
import logo from '../../../../assets/logo.png'
import { darkMode, lightMode } from '../../ToggleTheme/Theme';
import useAdmin from '../../../hooks/useAdmin';
import useInstructor from '../../../hooks/useInstructor';
import useUser from '../../../hooks/useUser';
import useCart from '../../../hooks/useCart';

const Navbar = () => {
    const { users, loading, handleLogOut } = useContext(AuthContext)
    const [toggle, setToggle] = useState(false)
    const [theme, setTheme] = useState(true)
    const [isAdmin] = useAdmin()
    const [isInstructor] = useInstructor()
    const [isUser] = useUser()
    const [cart] =useCart()
 




    const handleLogOutUser = () => {
        handleLogOut()
        localStorage.removeItem('token')

    }

    const handleDark = () => {
        darkMode()
        setTheme(!theme)
    }
    const handleLight = () => {
        lightMode()
        setTheme(!theme)
    }


    return (
        <div className='border-b-2 bg-white sticky top-0 z-10'>
            <div className='w-[80%] mx-auto flex items-center justify-between gap-10 py-2'>
                <Link to='/'>
                    <div className='flex items-center'>
                        <img className='w-12' src={logo} alt="" />
                        <h1 className='text-2xl font-semibold font-serif'>Tunes</h1>
                    </div>
                </Link>


                <div className='hidden lg:block'>
                    <div className='flex  gap-5 text-lg'>
                        <NavLink
                        className={'text-xl '}
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
                          className={'text-xl '}
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
                          className={'text-xl '}

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
                <div className='flex gap-2'>
                    <button className="lg:block hidden">
                        CART
                        <div className="badge badge-secondary h-6 ml-2">+{cart ? cart.length : '0'}</div>
                    </button>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                {
                                    users ? <img src={users?.photoURL} /> : <img src={userImg} />
                                }
                            </div>
                        </label>
                        {
                            users ? <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                <Link to={isAdmin && "/dashboard/allUsers" || isInstructor && '/dashboard/instructorClass' || isUser && '/dashboard/my-classes'}> <li><a>Dashboard</a></li></Link>
                                {
                                    theme ? <li onClick={handleDark}><a>Dark mode</a></li> : <li onClick={handleLight}><a>Light Mode</a></li>
                                }
                                <li onClick={handleLogOutUser}><a>Logout</a></li>
                            </ul> : <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                <Link to='login'> <li><a>Log in</a></li></Link>
                                {
                                    theme ? <li onClick={handleDark}><a>Dark mode</a></li> : <li onClick={handleLight}><a>Light Mode</a></li>
                                }
                            </ul>
                        }
                    </div>
                </div>
                <div className='block lg:hidden cursor-pointer'>
                    <span onClick={() => setToggle(!toggle)} >
                        {
                            toggle ? <XMarkIcon className="h-9 w-9 text-gray-700" /> : <Bars3Icon className="h-9 w-9 text-gray-700" />
                        }
                    </span>
                </div>
            </div>
            <span onClick={() => setToggle(!toggle)}>
                {<div className={`grid grid-cols-1 w-2/3 text-lg pl-10 absolute    duration-500 py-10 space-y-5 pr-4  bg-[#1c6273] h-screen lg:hidden sm:block rounded-br-md ${toggle ? 'left-0' : '-left-full'}`} >
                    <div className='flex flex-col gap-3'>
                        <Link className='text-white hover:text-black hover:bg-white px-3 py-1 rounded-md' to='/'>Home</Link>
                        <Link className='text-white hover:text-black  hover:bg-white px-3 py-1 rounded-md' to="/instructor"> Instructor</Link>
                        <Link to="/classes" className='text-white hover:text-black  hover:bg-white px-3 py-1 rounded-md'> Classes</Link>
                       <div>
                       <button className='text-white px-3' >
                        CART
                        <div className="badge badge-secondary h-6 ml-2">+{cart ? cart.length : '0'}</div>
                    </button>
                       </div>
                    </div>

                </div>}
            </span>
        </div>
    );
};

export default Navbar;