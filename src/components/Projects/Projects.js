import "./Projects.css";

const Projects = () => {
  return (
    <div id="projects">
      <div className="projects-container">
        <h1>Projects</h1>
        <div className="project1">
          <video width="720" height="400" controls className="demo">
            <source src="/files/sitedemo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="project1-description">
            <h2>Perfect Eleven</h2>
            <p className="project1-text">
              Web application that I created, enabling users to craft their
              ideal soccer teams. It allows users to search from a broad
              database of professional players, form their teams according to
              specific criteria, and submit their final line-ups. The platform
              also includes a feature for users to view all submitted teams and
              their respective creators as well as replace a player of their
              team with a player from another team.
            </p>

            <ul className="project1-tech">
              <li>React.js</li>
              <li>Express.js</li>
              <li>Node.js</li>
              <li>MongoDB</li>
              <li>APIs: Auth0, SoccersAPI</li>
            </ul>
            <p className="api-note">
              (The subscription plan for SoccersAPI is no longer active. Please
              refer to the GitHub repository for source code)
            </p>
            <a
              href="https://github.com/georgebaaklini/Final-Project"
              target="_blank"
              rel="noopener noreferrer"
              className="github-button"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
