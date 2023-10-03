import "./About.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa6";

const About = () => {
  return (
    <div id="about">
      <div className="about-content">
        <h1>
          <span>About</span>
        </h1>
        <div className="text-container">
          <p className="about-text">
            My name is George Baaklini. Although my roots trace back to the rich
            heritage of Lebanon, I've ventured far and wide in the world of web
            development. I am a proud graduate of Concordia University's Full
            Stack Web Development Bootcamp. There, I immersed myself in the
            depths of JavaScript, React, Node.js, Express, and MongoDB. With
            these tools under my belt, I'm equipped to craft dynamic and robust
            web applications. I have a particular passion for teamwork,
            believing that the best applications are created when brilliant
            minds come together.
          </p>
          <div className="icons-container">
            <FaHtml5 className="icons" />
            <FaCss3Alt className="icons" />
            <FaJs className="icons" />
            <FaReact className="icons" />
            <FaNodeJs className="icons" />
          </div>
          <DownloadButton />
        </div>
      </div>
    </div>
  );

  function DownloadButton() {
    return (
      <a href="/GeorgeCV.pdf" download className="download-button">
        Download my CV
      </a>
    );
  }
};

export default About;
