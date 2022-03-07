import React from "react";

import {
  Box,
  Button,
  CardActions,
  CardContent,
  Typography,
  Card,
} from "@mui/material";

function SymptomCard(props) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Symptom: {props.symptom.symptomType}
          </Typography>
          <Typography variant="h6" component="div" gutterBottom>
            Pain Level: {props.symptom.painLevel}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Mood: {props.symptom.mood}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Details</Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default SymptomCard;
