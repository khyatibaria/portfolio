import AboutMe from "./components/AboutMe";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/NavBar";
import SkillsSection from "./components/SkillsSection";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <AboutMe />
    </>
  );
};

export default App;
