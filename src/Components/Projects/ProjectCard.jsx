import React, { useEffect, useState } from 'react';
import Animation from '../../Animation/Animation';
import { FaCode, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({project}) => {


    return (
       <div className="card bg-base-100 shadow-xl overflow-hidden rounded-xl">
      {/* Carousel */}
      <Animation images={project.images} />

      {/* Content */}
      <div className="p-6 space-y-3">
        <h2 className="text-2xl font-bold text-gray-800">{project.name}</h2>
        <p className="text-gray-600">{project.description}</p>
        <p className="text-gray-600"><span  className='font-semibold text-black'>Facing Problem :</span><br /> {project.challenges}</p>
        <p className="text-gray-600"><span  className='font-semibold text-black'>Future Plan:</span><br /> {project.futurePlans}</p>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech, i) => (
            <span
              key={i}
              className="bg-rose-100 text-rose-600 text-sm font-semibold px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-4">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-primary flex items-center gap-2"
          >
            Live <FaExternalLinkAlt />
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-outline flex items-center gap-2"
          >
            Code <FaCode />
          </a>
        </div>
      </div>
    </div>
    );
};

export default ProjectCard;