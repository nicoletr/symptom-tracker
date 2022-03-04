import { React, useState } from "react";

import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";

import NewActivityForm from "../NewActivityForm";

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

function NewActivityButton() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container>
      <Button variant="primary" onClick={handleOpen}>
        New Activity
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>My New Activity</DialogTitle>
        <DialogContent>
          <NewActivityForm onSubmit={handleClose} />
          <Button
            type="close"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.close}
            onClick={handleClose}
          >
            Close
          </Button>
        </DialogContent>
      </Dialog>
    </Container>
  );
}

export default NewActivityButton;
