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
import { makeStyles } from "@material-ui/core/styles";

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

function ActivityCard(props) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

export default ActivityCard;
