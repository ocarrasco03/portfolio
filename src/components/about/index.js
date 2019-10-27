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
      paddingTop: '15px',
  },
  mb20: {
      marginBottom: '20px',
  },
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
              <Typography variant="body1" component='p' gutterBottom className={classes.text}>
                Lorem ipsum dolor sit amet, dolorum persequeris te vis, mel
                errem libris diceret ex. Reque eleifend contentiones mei ex.
                Dicit nihil per ne, ea pri erat zril aperiam. At etiam
                forensibus appellantur pri, ad vix aperiri atomorum, equidem
                imperdiet in eos. Lorem ipsum sit. Mutat voluptatum
                concludaturque has ea, ex elit veri essent nec. Nam ea delectus
                gloriatur, eam vocent senserit indoctum ea. Hinc nullam
                percipitur et vel. Reque timeam ad has. Eam no quidam
                eloquentiam, cu neglegentur philosophia mea, solum iisque
                fuisset per an. Mel case consulatu ut. Mentitum senserit
                suscipiantur id pri. Per id altera oporteat vituperata, duo ea
                fugit maiestatis. Duo everti integre te, quot everti in per. In
                prompta imperdiet vim, et eos tale primis. Duo sint adipisci eu.
                Quo et voluptaria deterruisset, nulla option platonem sit cu. In
                sea solet congue minimum, vis tale virtute persequeris et. Cu
                labores percipit senserit cum, nec ex rebum nullam. Ut usu quod
                alii scaevola, pri te antiopam salutatus scribentur, quo falli
                apeirian ea. Possim recusabo id vim.
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
