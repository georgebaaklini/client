import styled from "styled-components";
import meImage from "./me.jpg";

const Projects = () => {
  return (
    <Div id="projects">
      <img src={meImage} alt="me"></img>
      <p>Hiiiii</p>
    </Div>
  );
};
export default Projects;

const Div = styled.div`
  margin-top: 1000px;
`;
