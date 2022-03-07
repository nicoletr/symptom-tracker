import React from "react";

import {
  Button,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

import NewMealForm from "../NewMealForm";

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

function NewMealButton() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container>
      <Button variant="primary" onClick={handleOpen}>
        New Meal
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>My New Meal</DialogTitle>
        <DialogContent>
          <NewMealForm />
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
    </Container>
  );
}

export default NewMealButton;
