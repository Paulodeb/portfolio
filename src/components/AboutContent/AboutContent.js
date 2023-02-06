import "./AboutContentStyles.css";
import React1 from '../../assets/React_pic.jpg'
import React2 from '../../assets/React_pic2.jpg'
import React from "react";
import { Link } from "react-router-dom";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I</h1>
        <p>
          I'm a Front-End Developer based in Kwara, Nigeria. I'm passionate
          about building beautiful, responsive websites and applications. I'm
          also a huge fan of the JAMStack and I'm always looking for ways to
          improve my skills.
        </p>
        <Link to='/contact'>
            <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
            <div className='img-stack top'>
                <img src={React1} alt="html"/>
            </div>
            <div className='img-stack bottom'>
                <img src={React2} alt="html"/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
