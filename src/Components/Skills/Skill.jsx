import React from 'react';
import { motion } from 'framer-motion';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub,
  FaNode,
  FaFire,
 
} from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiVite, SiFramer, SiExpress } from 'react-icons/si';
 const skills = [
  { name: 'HTML', icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-500 text-4xl" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400 text-4xl" /> },
  { name: 'React', icon: <FaReact className="text-cyan-500 text-4xl" /> },
  { name: 'Tailwind', icon: <SiTailwindcss className="text-blue-400 text-4xl" /> },
  { name: 'GitHub', icon: <FaGithub className="text-black text-4xl" /> },
  { name: 'Framer Motion', icon: <SiFramer className="text-pink-500 text-4xl" /> },
  { name: 'Vite', icon: <SiVite className="text-violet-500 text-4xl" /> },
  { name: 'Firebase', icon: <FaFire className="text-orange-500 text-4xl" /> },
  { name: 'Node.js', icon: <FaNode className="text-green-600 text-4xl" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-500 text-4xl" /> },
  { name: 'Express Js', icon: <SiExpress   className="text-green-500 text-4xl" /> },
]; 
const Skill = () => {
    return (
         
              <div className=" py-2">
                <h2 className='text-3xl font-bold text-center  p-3'>Skills & Tools </h2>
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center text-center"
            animate={{ y: [0, -5, 0] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: 'easeInOut',
              delay: index * 0.1,
            }}
          >
            {skill.icon}
            <p className="mt-2 text-sm font-medium text-gray-700">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
         
    );
};

export default Skill;