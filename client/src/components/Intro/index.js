import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@material-ui/core";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const Intro = () => {
  return (
    <Grid item xs={12} lg={10}>
      <Card sx={{ flexGrow: 1, minHeight: "10rem" }}>
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
          <Link to="/signup">
            <Button variant="outlined">Sign up today!</Button>
          </Link>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Intro;
