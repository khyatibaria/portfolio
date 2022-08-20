import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Skill from "./pages/Skills";
import About from "./pages/About";
import Project from "./pages/Projects";
import Layout from "./components/Layout";
import "./App.css";
import Blogs from "./pages/Blogs";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout children={<Home />} />} />
      <Route path="about" element={<Layout children={<About />} />} />
      <Route path="blogs" element={<Layout children={<Blogs />} />} />
      <Route path="projects" element={<Layout children={<Project />} />} />
    </Routes>
  );
}

export default App;
