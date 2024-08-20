import "./HeroSection.css";
import Hero from "../../public/assets/hero.svg";
import Github from "../../public/assets/github.svg";
import LinkedIn from "../../public/assets/linkedin.svg";
import Twitter from "../../public/assets/twitter.svg";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="intro-container">
        <p className="intro-text">
          Hello I&#39;m <span className="text-extra-bold">Khyati Baria.</span>
        </p>
        <p className="intro-text">
          <span className="text-extra-bold">Frontend</span>
          <span style={{ marginLeft: "10px" }}>Developer</span>
        </p>
        <p className="intro-text">
          Based in <span className="text-extra-bold">India.</span>
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          provident fugit, amet ullam facilis, sapiente consectetur possimus
          suscipit harum quia, est quasi soluta quae dignissimos aut tenetur
          iure sed ipsam!
        </p>
        <div className="social-container">
          <div className="socials">
            <img src={Github} className="social-logo" />
          </div>
          <div className="socials">
            <img src={LinkedIn} className="social-logo" />
          </div>
          <div className="socials">
            <img src={Twitter} className="social-logo" />
          </div>
        </div>
      </div>
      <div>
        <img src={Hero} className="banner-logo" />
      </div>
    </div>
  );
};
export default HeroSection;
