import React from "react";
import { Link } from "react-router-dom";

import { Grid, Card, CardContent, Typography, Button } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const Intro = () => {
  return (
    <Grid item xs={12} lg={10}>
      <Card sx={{ flexGrow: 1, minHeight: "10rem", marginTop: "1rem" }}>
        <CardContent>
          <Typography variant="h4">
            {"Take the effort out of finding what works for your health"}
          </Typography>
          <Typography variant="body1">
            {"Get the full picture and find the best for YOU."}
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ flexGrow: 1, minHeight: "5rem" }}>
        <CardContent>
          <Grid container justifyContent="center">
            <Grid item>
              <Link to="/signup" style={{ textDecoration: "none" }}>
                <Button variant="primary">Sign up today!</Button>
              </Link>
            </Grid>
          </Grid>
          <Grid container justifyContent="center">
            <Grid item>
              <Link to="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Intro;
