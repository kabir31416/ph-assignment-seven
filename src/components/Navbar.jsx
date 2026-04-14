import React from 'react';
import NavLogo from '../assets/logo.png'
import { NavLink } from 'react-router';
import { ChartSpline, Clock, Home } from 'lucide-react';

const Navbar = () => {

     const links = (
        <>
            <li>
            <NavLink to={"/"} className={({ isActive }) => ` font-semibold mr-2 ${ isActive ? "text-white bg-[#244D3F]" : "" }`}><Home className='h-4 w-4'/> Home</NavLink>
            </li>

            <li>
            <NavLink to={"/timeline"} className={({ isActive }) => ` font-semibold mr-2 ${ isActive ? "text-white bg-[#244D3F]" : "" }`}><Clock className='h-4 w-4'/> Timeline</NavLink>
            </li>

            <li>
            <NavLink to={"/stats"} className={({ isActive }) => ` font-semibold mr-2 ${ isActive ? "text-white bg-[#244D3F]" : "" }`}><ChartSpline className='h-4 w-4'/> Stats</NavLink>
            </li>
        </>
    )


    return (
        <nav className='bg-base-100 shadow-sm'>
          <div className="navbar container mx-auto">
            <div className="navbar-start">
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                  tabIndex="-1"
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                  {links}
                </ul>
              </div>
              <img src={NavLogo} alt="" />
            </div>


            <div className="navbar-end hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                {links}
              </ul>
            </div>
        </div>
        </nav>
    );
};

export default Navbar;