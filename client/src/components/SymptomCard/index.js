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

function SymptomCard(props) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {props.symptom.symptomType}
          </Typography>
          <Typography variant="h5" component="div">
            {props.symptom.painLevel}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {props.symptom.mood}
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
