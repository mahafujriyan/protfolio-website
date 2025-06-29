import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { Link } from 'react-router';

const ContactCard = () => {
    return (
         <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-pink-600 inline-block pb-1">
        Contact Information
      </h2>

      {/* Info Items */}
      <div className="space-y-4">
        <div className="flex items-center gap-4 bg-gray-100 p-4 rounded-lg">
          <div className="text-white bg-pink-600 p-3 rounded-full text-xl">
            <FaPhoneAlt />
          </div>
          <div>
            <p className="text-gray-600 font-semibold">Phone</p>
            <p className="text-gray-800">+8801889359904</p>
          </div>
        </div>

        <div className="flex items-center gap-4 bg-gray-100 p-4 rounded-lg">
          <div className="text-white bg-pink-600 p-3 rounded-full text-xl">
            <FaEnvelope />
          </div>
          <div>
            <p className="text-gray-600 font-semibold">Email</p>
            <p className="text-gray-800 object-cover">hossainmdmahafuj17@gmail.com</p>
          </div>
        </div>

        <div className="flex items-center gap-4 bg-gray-100 p-4 rounded-lg">
          <div className="text-white bg-pink-600 p-3 rounded-full text-xl">
            <FaMapMarkerAlt />
          </div>
          <div>
            <p className="text-gray-600 font-semibold">Address</p>
            <p className="text-gray-800">Khulna, Dhaka (Bangladesh)</p>
          </div>
        </div>
      </div>

      {/* Social Media */}
      <div>
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Social Media</h3>
        <div className="flex gap-4 text-pink-600 text-lg">
          <Link to='https://www.facebook.com/share/19X5uHhg7K/'><FaFacebook className="hover:text-blue-600 cursor-pointer" /></Link>
        <Link to='https://github.com/mahafujriyan'><FaGithub className="hover:text-black cursor-pointer" /></Link>
          <Link to='https://www.linkedin.com/in/md-mahafuj-hossain-4ba36220a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>
          <FaLinkedin className="hover:text-blue-500 cursor-pointer" />
          </Link>
         <Link to='https://wa.me/qr/FYQC6EXQ33XED1 '>
          <BsWhatsapp className="hover:text-pink-500 cursor-pointer" />
         </Link>
        </div>
      </div>
    </div>
    );
};

export default ContactCard;