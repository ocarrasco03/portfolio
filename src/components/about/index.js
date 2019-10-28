import React, { Fragment } from "react";
import Skills from "./Skills";
import Awards from "./Awards";
import Info from "./Info";
import {
  Grid,
  makeStyles,
  CssBaseline,
  Container,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  border: {
    border: "1px solid black"
  },
  title: {
    color: "#000",
    fontSize: "22px",
    fontFamily: "Poppins",
    fontWeight: 400,
    lineHeight: "26px",
    textAlign: "left"
  },
  text: {
    color: "#7d7d7d",
    fontSize: "14px",
    fontFamily: "Poppins",
    fontWeight: 400,
    lineHeight: "24px",
    textAlign: "justify"
  },
  pt15: {
    paddingTop: "15px"
  },
  mb20: {
    marginBottom: "20px"
  }
}));

const About = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item sm={12} md={8}>
            <Grid item xs={12} className={[classes.pt15, classes.mb20]}>
              <Typography variant="h5" gutterBottom className={classes.title}>
                Profile Statements
              </Typography>
              <Typography
                variant="body1"
                component="p"
                gutterBottom
                className={classes.text}
              >
                Amplia experiencia en manejo de personal. Manejo y creacion de
                Macro de Excel. Análisis y desarrollo de aplicaciones web
                (énfasis en frameworks como Laravel y ReactJS, bases de datos
                MySQL y MongoDB). Gestión y administración de almacenes.
              </Typography>
            </Grid>
            <Grid item xs={12} className={classes.mb20}>
              <Typography variant="h5" gutterBottom className={classes.title}>
                Skills
              </Typography>
              <Skills />
            </Grid>
            <Grid item xs={12} className={classes.mb20}>
              <Typography variant="h5" gutterBottom className={classes.title}>
                Awards
              </Typography>
              <Awards />
            </Grid>
          </Grid>
          <Grid item sm={12} md={4}>
            <Info />
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
};

export default About;
