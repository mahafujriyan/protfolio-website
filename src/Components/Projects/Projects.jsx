import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import { div } from 'framer-motion/client';

const Projects = () => {
     const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/project.json') 
      .then(res => res.json())
      .then(data =>{

 setProjects(data)
       });
  }, []);
    return (
        <div>
              <h1 className='text-3xl font-bold text-center  p-3'>Best Projects</h1>
          <div className="grid gap-6 p-6  lg:grid-cols-3">
          
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
        </div>

    );
};

export default Projects;