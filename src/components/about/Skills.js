import React from "react";
import { Typography, Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    fontFamily: "Poppins",
    fontWeight: 400
  },
  percent: {
    fontSize: "20px",
    fontWeight: 600,
    lineHeight: "60px",
    color: "#a3a3a3",
    textAlign: "center"
  },
  title: {
    fontWeight: 500,
    fontSize: "12px",
    lineHeight: "14px",
    color: "#000",
    textAlign: "center"
  },
  roundedCard: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    border: "7px solid #FF1800",
    textAlign: "center",
    margin: "0 auto",
    marginTop: "20px"
  },
  margin: {
    marginTop: "15px",
    marginBottom: "15px"
  }
}));

export default function Profile() {
  const classes = useStyles();

  const returnKnowles = value => {
    return (
      <div className={classes.roundedCard}>
        <Typography variant="h3" gutterBottom className={classes.percent}>
          {value}%
        </Typography>
      </div>
    );
  };

  return (
    <React.Fragment className={classes.root}>
      <Grid container spacing={8} className={classes.margin}>
        <Grid item xs={12} md>
          <Typography variant="h5" gutterBottom className={classes.title}>
            PHP
          </Typography>
          {returnKnowles(60)}
        </Grid>
        <Grid item xs={12} md>
          <Typography variant="h5" gutterBottom className={classes.title}>
            HTML5
          </Typography>
          {returnKnowles(70)}
        </Grid>
        <Grid item xs={12} md>
          <Typography variant="h5" gutterBottom className={classes.title}>
            CSS3
          </Typography>
          {returnKnowles(50)}
        </Grid>
        <Grid item xs={12} md>
          <Typography variant="h5" gutterBottom className={classes.title}>
            JavaScript
          </Typography>
          {returnKnowles(40)}
        </Grid>
        <Grid item xs={12} md>
          <Typography variant="h5" gutterBottom className={classes.title}>
            MySQL
          </Typography>
          {returnKnowles(50)}
        </Grid>
        <Grid item xs={12} md>
          <Typography variant="h5" gutterBottom className={classes.title}>
            MongoDB
          </Typography>
          {returnKnowles(15)}
        </Grid>
        <Grid item xs={12} md>
          <Typography variant="h5" gutterBottom className={classes.title}>
            Laravel
          </Typography>
          {returnKnowles(60)}
        </Grid>
        <Grid item xs={12} md>
          <Typography variant="h5" gutterBottom className={classes.title}>
            NodeJS
          </Typography>
          {returnKnowles(20)}
        </Grid>
        <Grid item xs={12} md>
          <Typography variant="h5" gutterBottom className={classes.title}>
            ReactJS
          </Typography>
          {returnKnowles(35)}
        </Grid>
        <Grid item xs={12} md>
          <Typography variant="h5" gutterBottom className={classes.title}>
            Redux
          </Typography>
          {returnKnowles(10)}
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
