import React from 'react';
import Banner from './Banner';
import Skill from '../Skills/Skill';
import AboutMe from '../About/AboutMe';
import EducationSkill from '../Skills/EducationSkill';
import Contact from '../../Contact/Contact';
import ProjectCard from '../Projects/ProjectCard';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div className='space-y-8 w-11/12 mx-auto'>
     <>
     <section id="home">
        <Banner />
        </section>
      <section id="about">
        <AboutMe />
      </section>

      <section id="skills">
       <EducationSkill></EducationSkill>
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
            
        </div>
    );
};

export default Home;