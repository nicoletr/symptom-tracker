import React, { useState } from "react";
// import { useStoreContext } from "../../utils/GlobalState";
import { useMutation } from "@apollo/client";
import { ADD_MEAL } from "../../utils/mutations";
import { QUERY_MEALS, QUERY_ME } from "../../utils/queries";
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

const mealTypes = ["Athletics"];

function NewMealForm({ userId }) {
  const classes = useStyles();

  const [dateValue, setDateValue] = useState(new Date().toString());

  const [formState, setFormState] = useState({
    name: "",
    mealType: "",
    ingredients: "",
    portionSize: "",
    date: dateValue,
  });

  const [addMeal, { error }] = useMutation(ADD_MEAL, {
    update(cache, { data: { addMeal } }) {
      try {
        const { meals } = cache.readQuery({ query: QUERY_MEALS });

        cache.writeQuery({
          query: QUERY_MEALS,
          data: { meals: [addMeal, ...meals] },
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, meals: [...me.meals, addMeal] } },
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
      const { data } = await addMeal({
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
        <Box component="form" onSubmit={handleFormSubmit} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Meal Name"
                name="name"
                autoComplete="name"
                value={formState.name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth required>
                <InputLabel>Meal Type</InputLabel>
                <Select
                  id="mealType"
                  label="Meal Type"
                  name="mealType"
                  value={formState.mealType}
                  onChange={handleChange}
                >
                  {mealTypes.map((mealType) => (
                    <MenuItem key={mealType} value={mealType}>
                      {mealType}
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
                id="ingredients"
                label="Ingredients"
                name="ingredients"
                autoComplete="ingredients"
                value={formState.ingredients}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth required>
                <InputLabel>portionSize</InputLabel>
                <Select
                  id="portionSize"
                  label="Portion Size"
                  name="portionSize"
                  value={formState.portionSize}
                  onChange={handleChange}
                >
                  <MenuItem value={"Small"}>Small</MenuItem>
                  <MenuItem value={"Medium"}>Medium</MenuItem>
                  <MenuItem value={"Large"}>Large</MenuItem>
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

export default NewMealForm;
