import React from "react";
import { Link } from "react-router-dom";

import {
  Box,
  Button,
  CardActions,
  CardContent,
  Typography,
  Card,
} from "@mui/material";

function ActivityDetails(props) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card key={props.activity._id} variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {props.activity.name}
          </Typography>
          <Typography variant="h5" component="div">
            {props.activity.activityType}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {props.activity.duration}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {props.activity.intensity}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {props.activity.date}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {props.activity.createdAt}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {props.activity.symptoms}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to="/activities">
            <Button variant="outlined">Back</Button>
          </Link>
        </CardActions>
      </Card>
    </Box>
  );
}

export default ActivityDetails;
