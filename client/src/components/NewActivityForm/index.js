import React, { useState } from "react";

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
  ListItemIcon,
} from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import SentimentNeutralIcon from "@mui/icons-material/SentimentNeutral";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

import { useMutation } from "@apollo/client";
import { ADD_ACTIVITY } from "../../utils/mutations";
import { QUERY_ACTIVITIES, QUERY_ME } from "../../utils/queries";
import AuthService from "../../utils/auth";

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

const symptoms = [
  "Abdominal Cramps/Pain",
  "Acid Reflux",
  "Acne",
  "Arthritis",
  "Back (lower) pain",
  "Back (upper) pain",
  "Bloating",
  "Bruising",
  "Chest pain",
  "Constipation",
];

function NewActivityForm() {
  const classes = useStyles();

  const [formState, setFormState] = useState({
    name: "",
    activityType: "",
    duration: "",
    intensity: "",
    date: "",
    symptoms: "",
    painLevel: "",
    mood: "",
  });

  const [addActivity, { error }] = useMutation(ADD_ACTIVITY, {
    update(cache, { data: { addActivity } }) {
      try {
        const { activities } = cache.readQuery({ query: QUERY_ACTIVITIES });

        cache.writeQuery({
          query: QUERY_ACTIVITIES,
          data: { activities: [addActivity, ...activities] },
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, activities: [...me.activities, addActivity] } },
      });
    },
  });

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

    try {
      const { data } = await addActivity({
        variables: { ...formState },
      });

      AuthService.login(data.addActivity.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Box component="form" onSubmit={handleFormSubmit} noValidate>
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
              <TextField
                variant="outlined"
                required
                fullWidth
                id="date"
                label="Date"
                name="date"
                autoComplete="date"
                value={formState.date}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth required>
                <InputLabel>Symptom</InputLabel>
                <Select
                  id="symptoms"
                  label="Symptom"
                  name="symptoms"
                  value={formState.symptoms}
                  onChange={handleChange}
                >
                  {symptoms.map((symptom) => (
                    <MenuItem key={symptom} value={symptom}>
                      {symptom}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth required>
                <InputLabel>Pain Level</InputLabel>
                <Select
                  id="painLevel"
                  label="Pain Level"
                  name="painLevel"
                  value={formState.painLevel}
                  onChange={handleChange}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={6}>6</MenuItem>
                  <MenuItem value={7}>7</MenuItem>
                  <MenuItem value={8}>8</MenuItem>
                  <MenuItem value={9}>9</MenuItem>
                  <MenuItem value={10}>10</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth required>
                <InputLabel>Mood</InputLabel>
                <Select
                  id="mood"
                  label="Mood"
                  name="mood"
                  value={formState.mood}
                  onChange={handleChange}
                >
                  <MenuItem value={"Good"}>
                    <ListItemIcon>
                      <SentimentSatisfiedAltIcon />
                    </ListItemIcon>
                  </MenuItem>
                  <MenuItem value={"Fine"}>
                    <ListItemIcon>
                      <SentimentNeutralIcon />
                    </ListItemIcon>
                  </MenuItem>
                  <MenuItem value={"Bad"}>
                    <ListItemIcon>
                      <SentimentVeryDissatisfiedIcon />
                    </ListItemIcon>
                  </MenuItem>
                </Select>
              </FormControl>
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
