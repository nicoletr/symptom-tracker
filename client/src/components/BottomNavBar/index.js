import React from "react";
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
        <BottomNavigationAction label="Home" value="home" icon={<HomeIcon />} />
        <BottomNavigationAction
          label="My Meals"
          value="meals"
          icon={<RestaurantIcon />}
        />
        <BottomNavigationAction
          label="My Activities"
          value="activities"
          icon={<FitnessCenterIcon />}
        />
        <BottomNavigationAction
          label="My Symptoms"
          value="symptoms"
          icon={<SickIcon />}
        />
      </BottomNavigation>
    </Paper>
  );
}

export default BottomNav;
