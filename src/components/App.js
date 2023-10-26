import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
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
