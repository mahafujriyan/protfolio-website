import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import { motion } from 'framer-motion';
const Education = () => {
     const hoverAnimation = {
    whileHover: { scale: 1.02 },
    transition: { type: 'spring', stiffness: 300 },
  };
    return (
        <motion.div
         {...hoverAnimation}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        className="bg-white rounded-lg shadow-md p-5 w-full max-w-sm mx-auto">
      <div className="flex items-center gap-2 border-b pb-2 mb-3">
        <FaGraduationCap className="text-blue-700 text-xl" />
        <h3 className="text-lg font-semibold text-blue-900">Education Qualification</h3>
      </div>

      <div className="space-y-4 text-sm text-gray-700">
        <div>
          <p className="font-bold text-base"> B.sc in Statistics</p>
          <p>Government Brajlal Collage, Khulna</p>
          <p className="text-gray-500">2022 - Present (2nd Year)</p>
        </div>

        <div>
          <p className="font-bold text-base">Higher Secondary Certificate (HSC)</p>
          <p>Kalaroa Government collage,Satkhira</p>
          <p className="text-gray-500">2020 - 2021</p>
        </div>

        <div>
          <p className="font-bold text-base">Secondary School Certificate (SSC)</p>
          <p>Bhadiali High School, Satkhira</p>
          <p className="text-gray-500">2018 - 2019</p>
        </div>
      </div>
    </motion.div>
    );
};

export default Education;