import "./Contact.css";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const Contact = () => {
  return (
    <div id="contact">
      <div className="contact-container">
        <h1>Contact</h1>
        <p className="contact-text">
          Let's stay connected! Whether you'd like to discuss potential
          collaborations, share insights, or just chat about tech, I'm always
          open to new connections. You can reach out to me through LinkedIn,
          take a peek at my GitHub projects, or simply drop me an email. Looking
          forward to hearing from you!
        </p>
        <div className="socials">
          <a href="https://www.linkedin.com/in/george-baaklini-912b9a273/">
            <FaLinkedinIn className="linkedin" />
          </a>
          <a href="https://github.com/georgebaaklini">
            <FaGithub className="github" />
          </a>
          <a href="mailto:george2001@live.ca">
            <IoMail className="email" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
