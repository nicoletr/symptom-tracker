import React from "react";
import { Grid, Container, Box } from "@mui/material";

import { useQuery } from "@apollo/client";
import { QUERY_ACTIVITIES } from "../../utils/queries";

import ActivityCard from "../ActivityCard";

const ActivityList = () => {
  const { data } = useQuery(QUERY_ACTIVITIES);

  let activities = [];
  if (data) {
    activities = data.activities;
  }

  console.log(activities);

  return (
    <Container maxWidth="xl">
      <Box sx={{ flexGrow: 1, mt: 10 }}>
        <Grid container spacing={2}>
          {activities.map((activity) => (
            <ActivityCard activity={activity} key={activity._id} />
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default ActivityList;
