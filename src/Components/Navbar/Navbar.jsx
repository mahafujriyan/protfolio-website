import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    const navLinks=
    <>
    <li>
  <NavLink 
    to="/" 
    className={({ isActive }) => isActive ? 'text-primary font-bold' : 'hover:text-primary'}
  >
    Home
  </NavLink>
</li>
<li>
  <NavLink 
    to="/about" 
    className={({ isActive }) => isActive ? 'text-primary font-bold' : 'hover:text-primary'}
  >
    About
  </NavLink>
</li>
<li>
  <NavLink  
    to="/skills" 
    className={({ isActive }) => isActive ? 'text-primary font-bold' : 'hover:text-primary'}
  >
    Skill
  </NavLink>
</li>
<li>
  <NavLink 
    to="/projects" 
    className={({ isActive }) => isActive ? 'text-primary font-bold' : 'hover:text-primary'}
  >
    Project
  </NavLink>
</li>
<li>
  <NavLink 
    to="/contact" 
    className={({ isActive }) => isActive ? 'text-primary font-bold' : 'hover:text-primary'}
  >
    Contact
  </NavLink>
</li>

    </>
    return (
        <div className="sticky z-50 top-0 navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {navLinks}
      </ul>
    </div>
    <div> 
        <Link>
        <img src="/assets/logo1.png" alt=""  className='h-[70px] w-[150px] p-0 rounded-full'/>
        </Link>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
    );
};

export default Navbar;