import React from "react";
import { Link } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

import DrawerComponent from "./Drawer";
import AuthService from "../../utils/auth";

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundColor: "#51addc",
  },
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex-end",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(5),
    "&:hover": {
      fontWeight: "bold",
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isLoggedIn = AuthService.loggedIn();
  const logout = (event) => {
    event.preventDefault();
    AuthService.logout();
  };

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar className={classes.main}>
        <Typography variant="h4" className={classes.logo}>
          Symptom Tracker
        </Typography>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              Home
            </Link>
            {isLoggedIn ? (
              <Link to="/" className={classes.link} onClick={logout}>
                Logout
              </Link>
            ) : (
              <Link to="/login" className={classes.link}>
                Login
              </Link>
            )}
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
