import React from 'react';
import Banner from './Banner';
import Skill from '../Skills/Skill';
import AboutMe from '../About/AboutMe';
import EducationSkill from '../Skills/EducationSkill';
import Contact from '../../Contact/Contact';

const Home = () => {
    return (
        <div className='space-y-2'>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <EducationSkill></EducationSkill>
            <Contact></Contact>
        </div>
    );
};

export default Home;