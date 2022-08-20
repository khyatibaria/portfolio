import { useState, useRef } from "react";
import classes from "./Layout.module.css";
import Box from "@mui/material/Box";
import Slide from "@mui/material/Slide";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
const Layout = ({ children }) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#001E3C",
        contrastText: "#ffff",
      },
      secondary: {
        main: "#FF715B",
        contrastText: "#ffff",
      },
    },
  });
  const [open, setOpen] = useState(false);
  const [animate, setAnimate] = useState(false);
  const containerRef = useRef(null);
  const drawerHandler = () => {
    setOpen(!open);
  };
  const navLinkHandler = () => {
    console.log("called");
    setAnimate(true);
  };
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ height: "100vh" }}>
        <NavBar openDrawer={drawerHandler} navLinkHandler={navLinkHandler} />
        <Box component="nav">
          <SideBar
            open={open}
            drawerWidth="250px"
            drawerHandler={drawerHandler}
          />
        </Box>
        <Box component="main" ref={containerRef}>
          <Slide
            direction="up"
            in={animate}
            //timeout={1000}
            //container={containerRef.current}
            mountOnEnter
            unmountOnExit
          >
            <Box>{children}</Box>
          </Slide>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
export default Layout;
