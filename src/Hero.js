import React from "react";
import "./Hero.css";
import georgepic from "./images/me.png";

const Hero = () => {
  return (
    <div className="hero-container" id="hero">
      <div className="hero-content">
        <div className="hero-text">
          <p className="name">
            Hi, I'm George,
            <br />
            Web Developer
          </p>
          <p className="more">
            Full-Stack web developer providing clean and efficient code.
          </p>
        </div>
        <div className="image-container">
          <img src={georgepic} alt="me" className="image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
