import React from 'react';
import { FaSignOutAlt } from "react-icons/fa";


const Header = () => {
    return (
        <header className='max-w-[1440px] mx-auto'>
            <div className="navbar py-2">
                <div className='navbar lg:flex justify-between hidden'>
                    <a href="#"><img className='w-36' src="https://i.ibb.co/0Jdccw7/logo.png" alt="logo" /></a>
                    <ul className="menu menu-horizontal p-0">
                        <li><a to='/'>Home</a></li>
                        <li><a to='/'>Services</a></li>
                        <li><a to='/'>About</a></li>
                        <li><a to='/'>Blog</a></li>
                        <li><a to='/'>Contact</a></li>
                    </ul>
                    <ul className=''>
                        <li><a to='/' className='flex items-center border border-indigo-300 py-2 px-3 bg-indigo-100 text-indigo-500 rounded-md'><FaSignOutAlt /><span className='pl-2'>Login</span></a></li>
                    </ul>
                </div>
                <div className="lg:hidden w-full flex justify-between">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact rounded-md dropdown-content mt-3 p-2 shadow bg-base-100 w-52">
                            <li><a>Home</a></li>
                            <li><a>Services</a></li>
                            <li><a>About</a></li>
                            <li><a>Blog</a></li>
                            <li><a>Contact</a></li>
                        </ul>
                    </div>
                    <a to='/' className="btn btn-ghost normal-case text-xl">
                        <img className='w-28' src="https://i.ibb.co/0Jdccw7/logo.png" alt="logo" />
                    </a>
                    <a to='/' className='flex items-center border border-indigo-300 py-1 px-4 bg-indigo-100 text-indigo-500 rounded-md'><FaSignOutAlt /><span className='pl-2'>Login</span></a>
                </div>
            </div>
        </header>
    );
};

export default Header; 