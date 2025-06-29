import React from 'react';
import { Link } from 'react-scroll';


const ScrollSmooth = ({to,children}) => {
    return (
        <Link
      to={to}
      smooth={true}
      duration={600}
      offset={-100}
      spy={true}
      activeClass="text-primary font-bold"
      className="cursor-pointer hover:text-primary transition-all duration-300"
    >
      {children}
    </Link>
    );
};

export default ScrollSmooth;