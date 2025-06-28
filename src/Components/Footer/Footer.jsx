import React from 'react';
import { FaFacebook, FaLinkedinIn } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa6';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className="footer  footer-horizontal footer-center bg-gray-500 text-primary-content p-10">
  <aside>
   <div>
    <img src="/assets/logo1.png" alt="" className='h-[80px] w-[180px]  rounded-full'  />
   </div>
   
    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
  </aside>
  <nav>
    <div className="grid grid-flow-col gap-4">
      <Link> <FaFacebook></FaFacebook> </Link>
      <Link><FaLinkedinIn></FaLinkedinIn></Link>
      <Link><FaTwitter></FaTwitter></Link>
   
    </div>
  </nav>
</footer>
    );
};

export default Footer;