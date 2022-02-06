import React from "react";
import { Container, Box, Typography } from "@mui/material";
import BottomNav from "../components/BottomNavBar";
import NewActivityButton from "../components/NewActivityButton";

const Dashboard = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={{ pb: 5 }}>
        <Typography variant="h4">Hi user, welcome back!</Typography>
      </Box>
      <NewActivityButton />
      <BottomNav />
    </Container>
  );
};

export default Dashboard;
