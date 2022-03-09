import React from "react";
import { Link, useParams } from "react-router-dom";

import { Container, Box, Typography, Grid } from "@mui/material";
import BottomNav from "../components/BottomNavBar";
import NewActivityButton from "../components/NewActivityButton";
import ActivityList from "../components/ActivityList";

import { useQuery } from "@apollo/client";
import { QUERY_USER, QUERY_ME } from "../utils/queries";
import AuthService from "../utils/auth";

const Activities = () => {
  const { _id: userParam } = useParams();

  const { data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { _id: userParam },
  });

  const user = data?.me || data?.user || {};

  if (
    AuthService.loggedIn() &&
    AuthService.getProfile().data._id === userParam
  ) {
    return <Link to="/activities" />;
  }

  if (!user?._id) {
    return <Typography>You must be logged in to see this!</Typography>;
  }

  return (
    <Container maxWidth="xl">
      <Grid
        container
        maxWidth="xs"
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={12} lg={10}>
          <Box sx={{ pb: 5 }}>
            <Typography variant="h4" style={{ marginTop: "1rem" }}>
              My Logged Activities
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} lg={10}>
          <NewActivityButton />
        </Grid>
        <Grid item xs={12} lg={10}>
          <ActivityList />
        </Grid>
        <Grid item>
          <BottomNav />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Activities;
