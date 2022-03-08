import React from "react";
import { Link, useParams } from "react-router-dom";

import { Grid, Box, Typography } from "@mui/material";
import BottomNav from "../components/BottomNavBar";
import NewActivityButton from "../components/NewActivityButton";
import NewMealButton from "../components/NewMealButton";

import { useQuery } from "@apollo/client";
import { QUERY_USER, QUERY_ME } from "../utils/queries";
import AuthService from "../utils/auth";
import { ThemeProvider } from "@mui/styles";
import theme from "../styles/Theme";

const Dashboard = () => {
  const { _id: userParam } = useParams();

  const { data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { _id: userParam },
  });

  const user = data?.me || data?.user || {};

  if (
    AuthService.loggedIn() &&
    AuthService.getProfile().data._id === userParam
  ) {
    return <Link to="/" />;
  }

  if (!user?._id) {
    return <Typography>You must be logged in to see this!</Typography>;
  }

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        maxWidth="xs"
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item>
          <Box sx={{ pb: 5 }}>
            <Typography variant="h4" style={{ marginTop: "1rem" }}>
              Welcome back!
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <NewActivityButton />
        </Grid>
        <Grid item>
          <NewMealButton />
        </Grid>
        <Grid item>
          <Box sx={{ pb: 5 }}>
            <Typography variant="body1">
              Upgrade to Premium today to unlock more features!
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <BottomNav />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Dashboard;
