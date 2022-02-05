import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Intro from "../components/Intro";

const Home = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {<Intro />}
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;
