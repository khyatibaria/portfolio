import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import classes from "./Skills.module.css";
import { images } from "../assets/image/index";
const Skills = () => {
  const { HTML, CSS, JS, REACT, REDUX, GIT, BOOTSTRAP, MATERIALUI } = images;
  return (
    <Box>
      <h1>Skills</h1>
      <div className={classes["skills-container"]}>
        <Grid container spacing={1.5}>
          <Grid item xs={1.5}>
            <img src={HTML} alt="html" height="80" width="80" />
          </Grid>
          <Grid item xs={1.5}>
            <img src={CSS} alt="css" height="80" width="80" />
          </Grid>
          <Grid item xs={1.5}>
            <img src={MATERIALUI} alt="material_ui" height="80" width="80" />
          </Grid>
          <Grid item xs={1.5}>
            <img src={BOOTSTRAP} alt="bootstrap" height="80" width="80" />
          </Grid>
          <Grid item xs={1.5}>
            <img src={JS} alt="javascript" height="80" width="80" />
          </Grid>
          <Grid item xs={1.5}>
            <img src={REACT} alt="react" height="80" width="80" />
          </Grid>
          <Grid item xs={1.5}>
            <img src={REDUX} alt="redux" height="80" width="80" />
          </Grid>
          <Grid item xs={1.5}>
            <img src={GIT} alt="git" height="80" width="80" />
          </Grid>
        </Grid>
      </div>
    </Box>
  );
};
export default Skills;
