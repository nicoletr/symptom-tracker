import React, { useState } from "react";
// import { useStoreContext } from "../../utils/GlobalState";
import { useMutation } from "@apollo/client";
import { ADD_ACTIVITY } from "../../utils/mutations";
import { QUERY_ACTIVITIES, QUERY_ME } from "../../utils/queries";
// import FormDatePicker from "../DatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";

import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import {
  Box,
  Grid,
  CssBaseline,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
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
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const activityTypes = [
  "Athletics",
  "Cycling",
  "Dancing",
  "Pilates",
  "Running",
  "Skipping",
  "Swimming",
  "Team sport",
  "Tennis",
  "Walking",
  "Weights",
  "Yoga",
];

function NewActivityForm({ userId }) {
  const classes = useStyles();

  const [dateValue, setDateValue] = useState(new Date().toString());

  const [formState, setFormState] = useState({
    name: "",
    activityType: "",
    duration: "",
    intensity: "",
    date: dateValue,
  });

  const [addActivity, { error }] = useMutation(ADD_ACTIVITY, {
    update(cache, { data: { addActivity } }) {
      try {
        const { activities } = cache.readQuery({
          query: QUERY_ACTIVITIES,
        });

        cache.writeQuery({
          query: QUERY_ACTIVITIES,
          data: { activities: [addActivity, ...activities] },
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      const { me } = cache.readQuery({
        query: QUERY_ME,
      });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, activities: [...me.activities, addActivity] } },
      });
    },
  });

  const handleDateChange = (newValue) => {
    setDateValue(newValue);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    console.log(dateValue);

    try {
      const { data } = await addActivity({
        variables: { ...formState, dateValue },
      });
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Box component="form" noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Activity Name"
                name="name"
                autoComplete="name"
                value={formState.name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth required>
                <InputLabel>Activity Type</InputLabel>
                <Select
                  id="activityType"
                  label="Activity Type"
                  name="activityType"
                  value={formState.activityType}
                  onChange={handleChange}
                >
                  {activityTypes.map((activityType) => (
                    <MenuItem key={activityType} value={activityType}>
                      {activityType}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="duration"
                label="Duration (minutes)"
                name="duration"
                autoComplete="duration"
                value={formState.duration}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth required>
                <InputLabel>Intensity</InputLabel>
                <Select
                  id="intensity"
                  label="Intensity"
                  name="intensity"
                  value={formState.intensity}
                  onChange={handleChange}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                  disableFuture
                  label="Date / Time"
                  openTo="day"
                  value={formState.date}
                  onChange={handleDateChange}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleFormSubmit}
          >
            Create
          </Button>
          {error ? (
            <div>
              <p className={classes.error}>
                {"Something went wrong, please check your inputs!"}
              </p>
            </div>
          ) : null}
        </Box>
      </div>
    </Container>
  );
}

export default NewActivityForm;
