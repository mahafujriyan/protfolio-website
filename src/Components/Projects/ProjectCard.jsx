import React, { useEffect, useState } from 'react';
import Animation from '../../Animation/Animation';
import { FaCode, FaExternalLinkAlt } from 'react-icons/fa';
import { Link } from 'react-router';

const ProjectCard = ({project}) => {


    return (
       <div className="card bg-base-100 shadow-xl overflow-hidden rounded-xl">
      {/* Carousel */}
      <Animation  images={project.images} />

      {/* Content */}
      <div className="p-6 space-y-3">
        <h2 className="text-2xl font-bold text-gray-800">{project.name}</h2>
        <p className="text-gray-600">{project.description}</p>
 
           <Link
            to={`/projects/${project.id}`}
            className="btn btn-sm btn-secondary"
          >
            View Details
          </Link>

      

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