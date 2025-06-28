import React from 'react';
import { motion } from 'framer-motion';
const AboutMe = () => {
    return (
        <div className="py-10 px-4 bg-[#f9f9fb] flex justify-center">
      
      {/* Scroll Animation Wrapper */}
      <motion.div
        className="card lg:card-side shadow-xl max-w-5xl w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >

        {/* Image Section */}
        <figure className="w-full lg:w-1/3 p-4 flex justify-center items-center">
          <img
            src="/assets/profile.jpg"
            alt="Mahafuj"
            className="rounded-lg object-cover w-full max-w-xs"
          />
        </figure>

        {/* Text Section */}
        <div className="card-body w-full lg:w-2/3">
          <h2 className="card-title text-3xl font-bold text-gray-800 mb-4">About Me</h2>

          {/* Short version for small devices */}
          <p className="block md:hidden text-base leading-relaxed text-gray-700">
            Hi, I’m <span className="text-rose-600 font-semibold">Mahafuj</span> — a web developer passionate about building modern apps and solving real-world problems using React, Tailwind, and Firebase.
          </p>

          {/* Full version for medium and up */}
          <div className="hidden md:block space-y-4 text-base leading-relaxed text-gray-700">
            <p>
              Hi, I’m <span className="text-rose-600 font-semibold">Mahafuj</span> — a passionate web developer driven by curiosity and a love for problem-solving. My journey into web development started back in class 10, even though I didn’t have access to proper tools or resources. But that early interest grew stronger every day.
            </p>

            <p>
              I’ve worked on various projects using <span className="text-blue-600 font-medium">React</span>, <span className="text-sky-400 font-medium">Tailwind CSS</span>, <span className="text-orange-500 font-medium">Firebase</span>, and <span className="text-green-500 font-medium">MongoDB</span>. I focus on writing clean, scalable code and solving real-world problems with effective collaboration.
            </p>

            <p>
              I value <span className="text-indigo-600 font-semibold">teamwork</span>, <span className="text-indigo-600 font-semibold">communication</span>, and <span className="text-indigo-600 font-semibold">time management</span>. My goal is to build impactful, top-rated websites and face complex challenges head-on.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
    );
};

export default AboutMe;