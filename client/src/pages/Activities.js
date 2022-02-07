import React from "react";
import { Container, Box, Typography } from "@mui/material";

import BottomNav from "../components/BottomNavBar";
import NewActivityButton from "../components/NewActivityButton";
import ActivityList from "../components/ActivityList";

const Activities = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={{ pb: 5 }}>
        <Typography variant="h4">My Logged Activities</Typography>
      </Box>
      <NewActivityButton />
      <ActivityList />
      <BottomNav />
    </Container>
  );
};

export default Activities;
