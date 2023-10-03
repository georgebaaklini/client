import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import styled from "styled-components";

function App() {
  return (
    <Div>
      <Header />
      <Div>
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </Div>
    </Div>
  );
}
export default App;

const Div = styled.div`
  margin-top: 100px;
`;
