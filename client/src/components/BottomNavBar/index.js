import { React, useState } from "react";
import { Link } from "react-router-dom";

import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import SickIcon from "@mui/icons-material/Sick";

function BottomNav() {
  const [value, setValue] = useState("home");

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
            component={Link}
            to="/"
            label="Home"
            value="home"
            icon={<HomeIcon />}
          />
        </Link>
        <Link to="/activities">
          <BottomNavigationAction
            label="Activities"
            value="activities"
            icon={<FitnessCenterIcon />}
          />
        </Link>
        <Link to="/meals">
          <BottomNavigationAction
            label="Meals"
            value="meals"
            icon={<RestaurantIcon />}
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
