import React from 'react';
import { FaFacebook, FaGithub, FaLinkedinIn } from 'react-icons/fa';
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
      <Link to='https://www.facebook.com/share/19X5uHhg7K/'> <FaFacebook></FaFacebook> </Link>
      <Link to='https://www.linkedin.com/in/md-mahafuj-hossain-4ba36220a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><FaLinkedinIn></FaLinkedinIn></Link>
      <Link to='https://x.com/Mhriyan87'><FaTwitter></FaTwitter></Link>
      <Link to='https://github.com/mahafujriyan'>
                  <FaGithub className="hover:text-gray-800 cursor-pointer" />
                 </Link>
   
    </div>
  </nav>
</footer>
    );
};

export default Footer;