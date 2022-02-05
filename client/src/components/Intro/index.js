import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@material-ui/core";

const Intro = () => {
  return (
    <Grid item xs={12} lg={10}>
      <Card>
        <CardContent>
          <Typography> Intro Goes Here! </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Intro;
