import React from "react";
import { Container, Box, Typography } from "@mui/material";

import BottomNav from "../components/BottomNavBar";
// import NewMealButton from "../components/NewMealButton";
import MealList from "../components/MealList";

const Meals = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={{ pb: 5 }}>
        <Typography variant="h4">My Logged Meals</Typography>
      </Box>
      <MealList />
      <BottomNav />
    </Container>
  );
};

export default Meals;
