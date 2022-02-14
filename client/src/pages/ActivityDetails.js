import React from "react";
import { Link, useParams } from "react-router-dom";

import { Container, Box, Typography } from "@mui/material";
import BottomNav from "../components/BottomNavBar";
import NewActivityButton from "../components/NewActivityButton";
import SingleActivity from "../components/SingleActivity";

import { useQuery } from "@apollo/client";
import { QUERY_USER, QUERY_ME } from "../utils/queries";
import AuthService from "../utils/auth";

const ActivityDetails = (props) => {
  const { _id: userParam } = useParams();

  const { data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { _id: userParam },
  });

  const user = data?.me || data?.user || {};

  if (
    AuthService.loggedIn() &&
    AuthService.getProfile().data._id === userParam
  ) {
    return <Link to={`/activities/${props.activity._id}`} />;
  }

  if (!user?._id) {
    return <Typography>You must be logged in to see this!</Typography>;
  }

  return (
    <Container maxWidth="xl">
      <Box sx={{ pb: 5 }}>
        <Typography variant="h4">My Logged Activities</Typography>
      </Box>
      <NewActivityButton />
      <SingleActivity />
      <BottomNav />
    </Container>
  );
};

export default ActivityDetails;
