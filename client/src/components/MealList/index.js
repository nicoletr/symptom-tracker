import React from "react";
import { Grid, Container, Box } from "@mui/material";

import { useQuery } from "@apollo/client";
import { QUERY_MEALS } from "../../utils/queries";

import MealCard from "../MealCard";

const MealList = () => {
  const { data } = useQuery(QUERY_MEALS);

  let meals = [];
  if (data) {
    meals = data.meals;
  }

  console.log(meals);

  return (
    <Container maxWidth="xl">
      <Box sx={{ flexGrow: 1, mt: 10 }}>
        <Grid container spacing={2}>
          {meals.map((meal) => (
            <MealCard meal={meal} key={meal._id} />
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default MealList;
