import React from 'react';
import Education from './Education';
import Skill from './Skill';

const EducationSkill = () => {
    return (
     <section  className="px-4 py-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
            <Education />
            </div>
            <div className="md:col-span-2">
            <Skill />
            </div>
        </div>
    </section>

    );
};

export default EducationSkill;