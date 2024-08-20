import "./NavBar.css";
import Logo from "../../public/assets/logo.svg";
import Download from "../../public/assets/download.svg";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <img src={Logo} className="nav-logo" />
        <h5 className="nav-header">Khyati Baria</h5>
      </div>
      <div className="nav-link-container">
        <div className="nav-link">About Me</div>
        <div className="nav-link">Skills</div>
        <div className="nav-link">Project</div>
        <div className="nav-link">Contact Me</div>
      </div>
      <div className="resume-container">
        <button className="nav-resume-btn">
          Resume
          <span>
            <img src={Download} className="resume-logo" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
