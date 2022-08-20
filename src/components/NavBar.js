import * as React from "react";
import { useNavigate, NavLink } from "react-router-dom";
import classes from "./NavBar.module.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";

const NavBar = (props) => {
  const {
    position = "static",
    openDrawer = () => {},
    navLinkHandler = () => {},
  } = props;

  return (
    <AppBar component="nav" position={position}>
      <Box
        sx={{
          textAlign: { sm: "center" },
          padding: "0.5rem",
        }}
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={() => {
            openDrawer();
          }}
          sx={{ margin: "0.25rem", display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            display: { xs: "none", sm: "block" },
            //textDecoration: "underline overline #ff715b wavy 5px",
          }}
        >
          Khyati Baria
        </Typography>
      </Box>
      <Box sx={{ display: { xs: "none", sm: "block" }, padding: "0.5rem" }}>
        <div className={classes["navlink-container"]}>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes["active-link"] : classes["navlink"]
            }
            to="/"
          >
            <div
              onClick={() => {
                navLinkHandler();
              }}
            >
              home
            </div>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes["active-link"] : classes["navlink"]
            }
            to="/about"
          >
            <div
              onClick={() => {
                navLinkHandler();
              }}
            >
              about
            </div>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes["active-link"] : classes["navlink"]
            }
            to="/projects"
          >
            <div
              onClick={() => {
                navLinkHandler();
              }}
            >
              projects
            </div>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes["active-link"] : classes["navlink"]
            }
            to="/blogs"
          >
            <div
              onClick={() => {
                navLinkHandler();
              }}
            >
              blogs
            </div>
          </NavLink>
        </div>
      </Box>
    </AppBar>
  );
};
export default NavBar;
