import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Intro from "../components/Intro";

const Home = () => {
  return (
    <Grid
      container
      spacing={2}
      maxWidth="xs"
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "100vh" }}
    >
      <Container maxWidth="xl">
        <Box sx={{ flexGrow: 1 }}>{<Intro />}</Box>
      </Container>
    </Grid>
  );
};

export default Home;
