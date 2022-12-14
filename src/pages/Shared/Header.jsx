import React, { useContext, useState } from 'react';
import { FaSignOutAlt } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';


const Header = () => {
    const [toggle, setToggle] = useState(false)
    const { user, logOut } = useContext(AuthContext)

    const profileToggle = () => {
        setToggle(s => !s);
    }

    const handelLogOut = () => {
        logOut()
            .then(result => {
                const user = result.user
            }).catch((error) => {
            });
    }
    return (
        <header className='max-w-[1440px] mx-auto'>
            {/* desktop header */}
            <div className='navbar lg:flex justify-between hidden'>
                <Link to='/'>
                    <img className='w-36' src="https://i.ibb.co/0Jdccw7/logo.png" alt="logo" />
                </Link>
                <ul className="menu menu-horizontal p-0">
                    <li><NavLink to="home">Home</NavLink></li>
                    <li><NavLink to="services">Services</NavLink></li>
                    <li><NavLink to="my-review">My Review</NavLink></li>
                    <li><NavLink to="add-service">Add Service</NavLink></li>
                    <li><NavLink to="blog">Blog</NavLink></li>
                    <li><NavLink to="contact">Contact</NavLink></li>
                    {!user?.uid &&
                    <li><NavLink to="registration">Resignation</NavLink></li>}
                </ul>
                {user?.uid ?
                    user?.uid &&
                    <>
                        <div className="avatar " onClick={profileToggle}>
                            <div className="w-10 mt-3 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={user?.photoURL} alt='user' />
                            </div>
                        </div>
                        <ul id='profile' className={`"absolute top-24 right-20 menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4" 
                        ${!toggle ? "hidden" : 'absolute'}`}>
                            {user?.displayName &&
                                <li><Link>{user?.displayName}</Link></li>
                            }
                            <li><Link>View Profile</Link></li>
                            <li><Link onClick={handelLogOut}>Log Out</Link></li>
                        </ul>
                    </>
                    :
                    <ul className=''>
                        <li>
                            <Link to='/login' className='flex items-center border border-indigo-300 py-2 px-3 bg-indigo-100 text-indigo-500 rounded-md'><FaSignOutAlt /><span className='pl-2'>Login</span></Link>
                        </li>
                    </ul>
                }

                <Link to='/' className="btn lg:hidden btn-ghost normal-case text-xl">
                    <img className='w-28' src="https://i.ibb.co/0Jdccw7/logo.png" alt="logo" />
                </Link>
                <Link to='login' className='lg:hidden flex items-center border border-indigo-300 py-1 px-4 bg-indigo-100 text-indigo-500 rounded-md'><FaSignOutAlt /><span className='pl-2'>Login</span></Link>
            </div>

            {/* mobile header  */}
            <div className=" p-3 w-full flex justify-between lg:hidden">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className=" menu menu-compact rounded-md dropdown-content mt-3 p-2 shadow bg-base-100 w-52">
                        <li><NavLink to="home">Home</NavLink></li>
                        <li><NavLink to="services">Services</NavLink></li>
                        <li><NavLink to="my-review">My Review</NavLink></li>
                        <li><NavLink to="blog">Blog</NavLink></li>
                        <li><NavLink to="contact">Contact</NavLink></li>
                    {!user?.uid &&
                        <li><NavLink to="registration">Resignation</NavLink></li>}
                    </ul>
                </div>

                <Link t0='' className="lg:hidden btn btn-ghost normal-case text-xl">
                    <img className='w-28' src="https://i.ibb.co/0Jdccw7/logo.png" alt="logo" />
                </Link>
                <div className='lg:hidden'>
                    {user?.uid ?
                        user?.uid &&
                        <>
                            <div className="avatar " onClick={profileToggle}>
                                <div className="w-10 mt-3 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src='https://avatars.githubusercontent.com/u/108586297?s=48&v=4' alt='user' />
                                </div>
                            </div>
                            <ul id='profile' className={`"absolute top-24 right-20 menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4" 
                        ${!toggle ? "hidden" : 'absolute'}`}>
                                {user?.displayName &&
                                    <li><Link>{user?.displayName}</Link></li>
                                }
                                <li><Link>View Profile</Link></li>
                                <li><Link onClick={handelLogOut}>Log Out</Link></li>
                            </ul>
                        </>
                        :
                        <ul className=''>
                            <li>
                                <Link to='/login' className='flex items-center border border-indigo-300 py-2 px-3 bg-indigo-100 text-indigo-500 rounded-md'><FaSignOutAlt /><span className='pl-2'>Login</span></Link>
                            </li>
                        </ul>
                    }
                </div>
            </div>
        </header>
    );
};

export default Header; 