import React from 'react';
import Banner from './Banner';
import Skill from '../Skills/Skill';
import AboutMe from '../About/AboutMe';

const Home = () => {
    return (
        <div className='space-y-2'>
            <Banner></Banner>
            <Skill></Skill>
            <AboutMe></AboutMe>
        </div>
    );
};

export default Home;