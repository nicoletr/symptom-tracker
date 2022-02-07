import React from "react";
import { Container, Box, Typography } from "@mui/material";

import BottomNav from "../components/BottomNavBar";
import SymptomList from "../components/SymptomList";

const Symptoms = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={{ pb: 5 }}>
        <Typography variant="h4">My Logged Symptoms</Typography>
      </Box>
      <SymptomList />
      <BottomNav />
    </Container>
  );
};

export default Symptoms;
