import React from 'react';
import { motion } from 'framer-motion'; 
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Typewriter } from 'react-simple-typewriter';
const Banner = () => {
    const hoverAnimation = {
    whileHover: { scale: 1.02 },
    transition: { type: 'spring', stiffness: 300 },
  };
    return (
      <div className=" space-y-4  p-4 grid gap-6 lg:grid-cols-3 items-start">
      
     
      <div className="space-y-4 lg:col-span-2">
        
        {/* Profile Info Card */}
        <motion.div
          {...hoverAnimation}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white shadow-lg rounded-xl p-6"
        >
          <div className="flex items-center gap-4 mb-4">
            <img
              src="/assets/profile.jpg"
              alt="Mahafuj"
              className="w-16 h-16 rounded-full border-2 border-primary"
            />
            <div>
              <h2 className="text-3xl font-bold">
                Hi, I am <span className="text-rose-600">Mahafuj</span>
              </h2>
              <p className="text-blue-600 font-mono text-lg">
                <Typewriter
                  words={[
                    'Frontend Developer',
                    'MERN Stack Enthusiast',
                    'Open Source Contributor',
                    'Clean & Scalable Code',
                  ]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </p>
            </div>
          </div>

          <p className="text-gray-700 mb-4">
            I craft fast, scalable, and user-friendly web applications with a focus on clean code and great UX
          </p>

          <div className="flex gap-4 text-xl text-gray-600">
            <FaFacebook className="hover:text-blue-600 cursor-pointer" />
            <FaXTwitter className="hover:text-black cursor-pointer" />
            <FaLinkedin className="hover:text-blue-500 cursor-pointer" />
            <FaGithub className="hover:text-gray-800 cursor-pointer" />
          </div>
        </motion.div>

        {/* Resume Buttons Card */}

        <motion.div 
          {...hoverAnimation}
        className="bg-white p-4 shadow-lg rounded-xl ">
          <h2 className='text-center text-2xl font-semibold py-2
          '>Download Resume</h2>
         <div className='flex justify-center gap-4'>
           <button className="btn btn-outline">Download</button>
          <button className="btn btn-primary">Resume</button>
         </div>
        </motion.div>
      </div>

      {/* Right Column: Profile Image Card */}
      <motion.div   {...hoverAnimation}
       className="bg-white shadow-lg rounded-xl p-4 flex justify-center items-center">
        <img
          src="/assets/profile.jpg"
          alt="Profile"
          className="rounded-xl object-cover w-full max-w-xs"
        />
      </motion.div>
    </div>
    );
};

export default Banner;