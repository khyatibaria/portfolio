import classes from "./SideBar.module.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";

const SideBar = (props) => {
  const { open, drawerHandler, drawerWidth } = props;
  let navigate = useNavigate();
  const [selected, setSelected] = useState(false);
  return (
    <Drawer
      variant="temporary"
      open={open}
      onClose={drawerHandler}
      sx={{
        display: { xs: "block", sm: "none" },
        "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
      }}
    >
      <Box>
        <Box sx={{ textAlign: "right" }}>
          <IconButton onClick={drawerHandler}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Link to="/" className={classes["head-link"]} onClick={drawerHandler}>
          <Typography
            variant="h5"
            align="center"
            sx={{
              marginBottom: "1rem",
              color: "#001E3C",
            }}
          >
            Khyati Baria
          </Typography>
        </Link>
        <Divider />
        <List>
          <ListItem key="about" disablePadding>
            <ListItemButton
              selected={selected.about}
              onClick={() => {
                setSelected({ about: true });
                navigate("/about");
              }}
            >
              <ListItemText
                primary="About"
                primaryTypographyProps={{
                  align: "center",
                  variant: "string",
                }}
                sx={{ color: "#001E3C", fontWeight: 600, fontSize: "1.5rem" }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem key="project" disablePadding>
            <ListItemButton
              selected={selected.project}
              onClick={() => {
                setSelected({ project: true });
                navigate("/projects");
              }}
            >
              <ListItemText
                primary="Projects"
                primaryTypographyProps={{
                  align: "center",
                  variant: "string",
                }}
                sx={{ color: "#001E3C", fontWeight: 600, fontSize: "1.5rem" }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem key="blog" disablePadding>
            <ListItemButton
              selected={selected.blog}
              onClick={() => {
                setSelected({ blog: true });
                navigate("/blogs");
              }}
            >
              <ListItemText
                primary="Blogs"
                primaryTypographyProps={{
                  align: "center",
                  variant: "string",
                }}
                sx={{ color: "#001E3C", fontWeight: 600, fontSize: "1.5rem" }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};
export default SideBar;

// <div className={classes["sidebar-container"]}>
//   <div className={classes["sidebar-head"]}>
//     <Link to="/">
//       <div className={classes["logo-container"]}>
//         <FilterVintageIcon />
//         Khyati
//       </div>
//     </Link>
//   </div>
//   <nav className={classes["sidebar-body"]}>
//     <NavLink
//       className={({ isActive }) =>
//         isActive ? classes["active"] : undefined
//       }
//       to="/"
//     >
//       <HomeIcon className={classes["home"]} />
//     </NavLink>
//     <NavLink
//       className={({ isActive }) =>
//         isActive ? classes["active"] : undefined
//       }
//       to="/about"
//     >
//       <PersonIcon className={classes["about"]} />
//     </NavLink>
//     <NavLink
//       className={({ isActive }) =>
//         isActive ? classes["active"] : undefined
//       }
//       to="/skill"
//     >
//       <SettingsIcon className={classes["skill"]} />
//     </NavLink>
//     <NavLink
//       className={({ isActive }) =>
//         isActive ? classes["active"] : undefined
//       }
//       to="/project"
//     >
//       <RemoveRedEyeIcon className={classes["project"]} />
//     </NavLink>
//   </nav>
//   {/* <div className={classes["sidebar-footer"]}>

//   </div> */}
// </div>
