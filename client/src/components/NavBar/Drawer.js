import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import AuthService from "../../utils/auth";

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: "none",
    color: "#51addc",
    fontSize: "20px",
    "&:hover": {
      fontWeight: "bold",
    },
  },
  icon: {
    color: "white",
  },
}));

function DrawerComponent() {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  const isLoggedIn = AuthService.loggedIn();
  const logout = (event) => {
    event.preventDefault();
    AuthService.logout();
  };

  return (
    <>
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link className={classes.link} to="/">
                Home
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              {isLoggedIn ? (
                <Link to="/logout" className={classes.link} onClick={logout}>
                  Logout
                </Link>
              ) : (
                <Link to="/login" className={classes.link}>
                  Login
                </Link>
              )}
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <IconButton
        className={classes.icon}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
}
export default DrawerComponent;
