import React from "react";
import { Container, Box, Typography } from "@mui/material";
import BottomNav from "../components/BottomNavBar";
import NewActivityButton from "../components/NewActivityButton";
import NewMealButton from "../components/NewMealButton";

// import { useQuery } from "@apollo/client";
// import { QUERY_ME } from "../utils/queries";

const Dashboard = () => {
  // const { data } = useQuery(QUERY_ME);
  // let user;

  // if (data) {
  //   user = data.user;
  // }

  return (
    <Container maxWidth="xl">
      <Box sx={{ pb: 5 }}>
        <Typography variant="h4">Welcome back!</Typography>
      </Box>
      <NewActivityButton />
      <NewMealButton />
      <BottomNav />
    </Container>
  );
};

export default Dashboard;
