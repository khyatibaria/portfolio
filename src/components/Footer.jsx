import "./Footer.css";
import Logo from "../../public/assets/logo.svg";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="logo-container">
        <img src={Logo} className="nav-logo" />
        <h5 className="footer-header">Khyati Baria</h5>
      </div>
      <div className="footer-links-container">
      </div>
    </div>
  );
};

export default Footer;
