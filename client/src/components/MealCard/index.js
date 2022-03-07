import { React, useState } from "react";

import AddSymptomForm from "../AddSymptomForm";

import {
  Box,
  Button,
  CardActions,
  CardContent,
  Typography,
  Card,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@mui/material";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  close: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function MealCard(props) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {props.meal.name}
          </Typography>
          <Typography variant="h5" component="div">
            {props.meal.mealType}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {props.meal.date}
          </Typography>
          <Typography variant="body2">
            {props.meal.symptoms.symptomType}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="outlined" onClick={handleOpen}>
            Add Symptom
          </Button>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Add symptom</DialogTitle>
            <DialogContent>
              <AddSymptomForm />
              <Button
                type="close"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.close}
                onClick={handleClose}
              >
                Cancel
              </Button>
            </DialogContent>
          </Dialog>
          <Button variant="outlined">Details</Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default MealCard;
