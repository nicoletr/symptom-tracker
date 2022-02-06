import React from "react";
import { Link } from "react-router-dom";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import HomeIcon from "@mui/icons-material/Home";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import SickIcon from "@mui/icons-material/Sick";

function BottomNav() {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation value={value} onChange={handleChange}>
        <Link to="/">
          <BottomNavigationAction
            label="Home"
            value="home"
            icon={<HomeIcon />}
          />
        </Link>
        <Link to="/activities">
          <BottomNavigationAction
            label="My Meals"
            value="meals"
            icon={<RestaurantIcon />}
          />
        </Link>
        <Link to="/activities">
          <BottomNavigationAction
            label="My Activities"
            value="activities"
            icon={<FitnessCenterIcon />}
          />
        </Link>
        <Link to="/symptoms">
          <BottomNavigationAction
            label="My Symptoms"
            value="symptoms"
            icon={<SickIcon />}
          />
        </Link>
      </BottomNavigation>
    </Paper>
  );
}

export default BottomNav;
