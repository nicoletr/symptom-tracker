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

function ActivityCard(props) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {props.activity.name}
          </Typography>
          <Typography variant="h5" component="div">
            {props.activity.activityType}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {props.activity.date}
          </Typography>
          <Typography variant="body2">
            {props.activity.symptoms.symptomType}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Add Symptom</Button>
          <Button size="small">Details</Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default ActivityCard;
