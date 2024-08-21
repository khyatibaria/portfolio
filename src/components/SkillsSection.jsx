import "./Skills.css";
import HTML from "../../public/assets/html.svg";
import CSS from "../../public/assets/css.svg";
import JS from "../../public/assets/javascript.svg";
import Git from "../../public/assets/git.svg";
import Tailwind from "../../public/assets/tailwind.svg";
import Material from "../../public/assets/materialui.svg";
import React from "../../public/assets/react.svg";
import Redux from "../../public/assets/redux.svg";

const SkillsSection = () => {
  return (
    <div className="container">
      <p className="skills-header">
        My <span className="text-extra-bold">Skills</span>
      </p>
      <div className="skills-container">
        <div className="skills">
          <img src={HTML} className="skill-logo" />
          <p>HTML</p>
        </div>
        <div className="skills">
          <img src={CSS} className="skill-logo" />
          <p>CSS</p>
        </div>
        <div className="skills">
          <img src={JS} className="skill-logo" />
          <p>Javascript</p>
        </div>
        <div className="skills">
          <img src={React} className="skill-logo" />
          <p>React</p>
        </div>
        <div className="skills">
          <img src={Redux} className="skill-logo" />
          <p>Redux</p>
        </div>
        <div className="skills">
          <img src={Git} className="skill-logo" />
          <p>Git</p>
        </div>
        <div className="skills">
          <img src={Tailwind} className="skill-logo" />
          <p>Tailwind CSS</p>
        </div>
        <div className="skills">
          <img src={Material} className="skill-logo" />
          <p>Material UI</p>
        </div>
        <div className="skills">
          <img src={Material} className="skill-logo" />
          <p>Material UI</p>
        </div>
        <div className="skills">
          <img src={Material} className="skill-logo" />
          <p>Material UI</p>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
