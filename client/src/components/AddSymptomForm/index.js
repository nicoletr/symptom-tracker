import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_SYMPTOM } from "../../utils/mutations";
import {
  QUERY_SYMPTOMS,
  QUERY_ME,
  QUERY_ACTIVITIES,
  QUERY_SINGLE_ACTIVITY,
} from "../../utils/queries";

import { makeStyles } from "@material-ui/core/styles";
import ListItemIcon from "@mui/material/ListItemIcon";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import SentimentNeutralIcon from "@mui/icons-material/SentimentNeutral";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import {
  Box,
  Grid,
  CssBaseline,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

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

function NewSymptomForm({ userId, activityId, mealId }) {
  const classes = useStyles();

  const [formState, setFormState] = useState({
    symptomType: "",
    painLevel: "",
    mood: "",
  });

  const [addSymptom, { error }] = useMutation(ADD_SYMPTOM, {
    update(cache, { data: { addSymptom } }) {
      try {
        const { symptoms } = cache.readQuery({
          query: QUERY_SYMPTOMS,
          variables: {
            ...formState,
          },
        });

        cache.writeQuery({
          query: QUERY_SYMPTOMS,
          data: { symptoms: [addSymptom, ...symptoms] },
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, symptoms: [...me.symptoms, addSymptom] } },
      });

      // const { activity } = cache.readQuery({ query: QUERY_SINGLE_ACTIVITY });
      // cache.writeQuery({
      //   query: QUERY_SINGLE_ACTIVITY,
      //   data: {
      //     activity: {
      //       ...activity,
      //       symptoms: [...activity.symptoms, addSymptom],
      //     },
      //   },
      // });
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
      const { data } = await addSymptom({
        variables: { ...formState },
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
        <Box component="form" onSubmit={handleFormSubmit} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl fullWidth required>
                <InputLabel>Symptom</InputLabel>
                <Select
                  id="symptomType"
                  label="Symptom"
                  name="symptomType"
                  value={formState.symptomType}
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
            Add
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

export default NewSymptomForm;
