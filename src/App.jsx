import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/NavBar";
import Projects from "./components/Projects";
import SkillsSection from "./components/SkillsSection";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <Experience />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
