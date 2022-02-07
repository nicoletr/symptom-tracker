import React from "react";
import { Grid, Container, Box } from "@mui/material";

import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";

import SymptomCard from "../SymptomCard";

const SymptomList = () => {
  const { data } = useQuery(QUERY_ME);

  let symptoms = [];

  if (data) {
    symptoms = data.me.symptoms;
  }

  console.log(symptoms);

  return (
    <Container maxWidth="xl">
      <Box sx={{ flexGrow: 1, mt: 10 }}>
        <Grid container spacing={2}>
          {symptoms.map((symptom) => (
            <SymptomCard symptom={symptom} key={symptom._id} />
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default SymptomList;
