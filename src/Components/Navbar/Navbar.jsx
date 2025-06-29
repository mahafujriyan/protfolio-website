import React from 'react';
import { Link, NavLink } from 'react-router';
import ScrollSmooth from '../../Animation/ScrollSmooth';


const Navbar = () => {
    const navLinks = (
    <>
      <li><ScrollSmooth to="home">Home</ScrollSmooth></li>
      <li><ScrollSmooth to="about">About</ScrollSmooth></li>
      <li><ScrollSmooth to="skills">Skills</ScrollSmooth></li>
      <li><ScrollSmooth to="projects">Projects</ScrollSmooth></li>
      <li><ScrollSmooth to="contact">Contact</ScrollSmooth></li>
    </>
  );
    return (
        
   <div className="sticky z-50 top-0 navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow">
            {navLinks}
          </ul>
        </div>
        <Link to="/">
          <img src="/assets/logo1.png" alt="Logo" className="h-[70px] w-[150px] p-0 rounded-full" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Resume</a>
      </div>
    </div>
    );
};

export default Navbar;