import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Grow from "@mui/material/Grow";
import Grid from "@mui/material/Grid";
import { images } from "../assets/image/index";
const About = () => {
  const [grow, setGrow] = useState(false);
  const { HTML, CSS, JS, REACT, REDUX, GIT, BOOTSTRAP, MATERIALUI } = images;
  useEffect(() => {
    setGrow(true);
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
        backgroundColor: "pink",
      }}
    >
      <Card sx={{ backgroundColor: "pink" }}>
        <CardHeader title="My Skills" />
        <CardContent>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={2} sm={4} md={4}>
              <Grow in={grow} timeout={2000}>
                <img src={HTML} alt="html" height="80" width="80" />
              </Grow>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <Grow in={grow} timeout={2000}>
                <img src={CSS} alt="css" height="80" width="80" />
              </Grow>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <Grow in={grow} timeout={2000}>
                <img
                  src={MATERIALUI}
                  alt="material_ui"
                  height="80"
                  width="80"
                />
              </Grow>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <Grow in={grow} timeout={2000}>
                <img src={BOOTSTRAP} alt="bootstrap" height="80" width="80" />
              </Grow>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <Grow in={grow} timeout={2000}>
                <img src={JS} alt="javascript" height="80" width="80" />
              </Grow>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <Grow in={grow} timeout={2000}>
                <img src={REACT} alt="react" height="80" width="80" />
              </Grow>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <Grow in={grow} timeout={2000}>
                <img src={REDUX} alt="redux" height="80" width="80" />
              </Grow>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <Grow in={grow} timeout={2000}>
                <img src={GIT} alt="git" height="80" width="80" />
              </Grow>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};
export default About;
