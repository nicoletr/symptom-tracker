import React from "react";
import { Container, Box, Typography } from "@mui/material";
import BottomNav from "../components/BottomNavBar";

const Dashboard = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={{ pb: 5 }}>
        <Typography variant="h4">Hi User, welcome back!</Typography>
      </Box>
      <BottomNav />
    </Container>
  );
};

export default Dashboard;
