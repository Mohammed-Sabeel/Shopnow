import React from "react";
import {BsLinkedin} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'
const About = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="mt-4">
            <div className="text-center">
              <img
                src="images/sabeel.jpg"
                alt=""
                className="img-fluid w-25 rounded-circle"
              />
              <div className="mt-3">
                <h4>Hi 🙂, I'm Mohammed Sabeel</h4>
                <h5>Front-End Developer</h5>
              </div>
    <div className="">
        <p><BsLinkedin/> <a href="https://in.linkedin.com/in/mohammed-sabeel-s-79911820a" target="_blank" rel="noopener noreferrer" className="text-decoration-none">Linkedin Link</a></p>
        <p><AiFillGithub/> <a href="  https://github.com/Mohammed-Sabeel" target="_blank" rel="noopener noreferrer" className="text-decoration-none">Linkedin Link</a></p>
      
    </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
