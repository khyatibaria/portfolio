import classes from "./Home.module.css";
import { useNavigate } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import Box from "@mui/material/Box";
import { images } from "../assets/image/index";
import Button from "@mui/material/Button";
const Home = () => {
  const { HAND } = images;
  let navigate = useNavigate();
  return (
    <Box>
      <Box
        sx={{ backgroundColor: "yellow", fontSize: "1.5rem", marign: "20px" }}
      >
        <div>
          Hey, <img src={HAND} alt="hey" />
          I'm <h1 data-text="Khyati Baria">Khyati Baria</h1>
          Frontend Developer
        </div>
        <div>
          <a
            href="https://twitter.com/khyatibaria"
            rel="noreferrer"
            target="_blank"
          >
            <TwitterIcon />
          </a>
          <a
            href="https://github.com/khyatibaria"
            rel="noreferrer"
            target="_blank"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/khyatibaria/"
            rel="noreferrer"
            target="_blank"
          >
            <LinkedInIcon />
          </a>
          <a
            href="mailto:khyatibaria55@gmail.com"
            rel="noreferrer"
            target="_blank"
          >
            <EmailIcon />
          </a>
        </div>
        <div>
          <Button
            variant="contained"
            onClick={() => {
              navigate("/projects");
            }}
          >
            My Projects
          </Button>
        </div>
      </Box>
    </Box>
  );
};
export default Home;
