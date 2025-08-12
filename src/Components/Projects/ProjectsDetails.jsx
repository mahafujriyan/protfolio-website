import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import Animation from '../../Animation/Animation';

const ProjectsDetails = () => {
     const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
     fetch('/project.json') 
      .then(res => res.json())
      .then(data => {
               const found = data.find(item => String(item.id) === id);
  

        setProject(found);
      });
  }, [id]);

  if (!project) {
    return <div className="text-center mt-10"><span className="loading loading-dots loading-xl"></span></div>;
  }
    return (
         <div className="max-w-4xl mx-auto p-6">
      <Link to="/" className="btn btn-sm btn-outline mb-4">⬅ Back</Link>

      {/* Carousel */}
      <Animation  images={project.images} />

      <h1 className="text-3xl font-bold mt-4">{project.name}</h1>
      <p className="mt-2 text-gray-600">{project.description}</p>

      <p className="mt-4">
        <span className="font-bold">Facing Problem:</span><br />
        {project.challenges}
      </p>
      <p className="mt-2">
        <span className="font-bold">Future Plan:</span><br />
        {project.futurePlans}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mt-4">
        {project.techStack.map((tech, i) => (
          <span
            key={i}
            className="bg-rose-100 text-rose-600 text-sm font-semibold px-3 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      
      <div className="flex gap-3 mt-6">
        <a
          href={project.liveLink}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary"
        >
          Live Site
        </a>
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="btn btn-outline"
        >
          Code
        </a>
      </div>
    </div>
    );
};

export default ProjectsDetails;